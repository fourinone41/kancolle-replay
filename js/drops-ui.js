// (function() {

var SHIPGET, MAPENEMY;
var MAP, CELLID, COMPID, RANK = 'S';
var RANKOFFSET = { 'S':0, 'A':20, 'B': 50 };
var HLTYPE, SDZ = 1.25;
var DATAOUT;

$('#divNode').hide();
$('#spanPoiLoad').hide();
$('#linkExport').css('visibility','hidden');
$('#radHL'+(HLTYPE = +localStorage.drops_hl || 1)).prop('checked',true);

for (let i=0; i<100; i++) {
	$('#tabDrops').append('<tr id="trDrops'+i+'"><td>'+(i+1)+'</td><td id="tdDropsName'+i+'"></td><td><img id="imgDrops'+i+'" src="" /></td><td><img id="imgDropsR'+i+'" src="" /></td></tr>');
	$('#trDrops'+i).hide();
}


function htmlCreateEnemyComp(compId) {
	let e = $('<div id="divEnemyComp'+compId+'"></div>');
	$('#divEnemyComps').append(e);
	e.append('<input type="radio" name="radComp" id="inpComp'+compId+'" />');
	e.append('<div id="divEnemyCompOffset'+compId+'"></div>');
	for (let i=0; i<12; i++) {
		e.append('<img id="imgEnemyComp'+compId+'-'+i+'" src="" class="iconSmall" />');
	}
	e.append('<img id="imgEnemyCompForm'+compId+'" src="" class="iconForm" />');
	
	$('#inpComp'+compId).change(function() {
		COMPID = compId;
		let offset = MAPENEMY[CELLID].comp[COMPID].geth;
		tableHighlightRank(offset);
		tableOutlinePool(offset + RANKOFFSET[RANK]);
		changeRates();
	});
	
	e.click(function() {
		$('#inpComp'+compId).prop('checked',true);
		$('#inpComp'+compId).change();
	});
	
	return e;
}

function htmlCreateNodeButton(cellId) {
	let letter = String.fromCharCode(+cellId+64);
	let e = $('<div class="buttonNode">'+letter+'</div>');
	$('#divNodeButtons').append(e);
	e.click(function() {
		if (CELLID == cellId) return;
		CELLID = cellId;
		$('div.buttonNode').removeClass('buttonSelected');
		$(this).addClass('buttonSelected');
		changeNode(cellId);
	});
	return e;
}

$('#selMap').change(function() {
	changeData($(this).val());
});

$('#inpGroupN').change(function() {
	changeTable('normal');
});
$('#inpGroupB').change(function() {
	changeTable('boss');
});

for (let letter of ['S','A','B']) {
	$('#inpRank'+letter).change(function() {
		RANK = letter;
		if (COMPID) {
			tableOutlinePool(MAPENEMY[CELLID].comp[COMPID].geth+RANKOFFSET[letter]);
			changeRates();
		}
	});
}

for (let i=1; i<=2; i++) {
	$('#radHL'+i).change(function() {
		localStorage.drops_hl = HLTYPE = i;
		if (COMPID) changeRates();
	});
}

document.getElementById('linkExport').onclick = function() {
	let data = getExportData();
	if (!data) return;
	let blob = new Blob([data], {type: "octet/stream"});
  	this.href = window.URL.createObjectURL(blob);
    this.target = '_blank';
    this.download = 'droptables_'+MAP+'_'+CELLID+'_'+COMPID+'_'+RANK+'.csv';
};


function getShipImagePath(mid) {
	return 'assets/icons/'+SHIPDATA[mid].image;
}

function getShipName(mid) {
	return SHIPDATA[mid].nameJP;
}

function getFormationImagePath(num) {
	num = +num;
	if (num > 10) return 'assets/stats/form'+num+'.png';
	return 'assets/stats/form'+num+'.jpg';
}

function changeData(map) {
	if (!map) return;
	MAP = map;
	CELLID = null;
	$.getJSON('js/data/mst_shipget/mst_shipget_'+map+'.json',function(data) {
		SHIPGET = data;
		$.getJSON('js/data/mst_mapenemy/mst_mapenemy_'+map+'.json',function(data) {
			MAPENEMY = data;
			
			let prop = ($('input[name=radGroup]:checked').val() == '1')? 'normal' : 'boss';
			changeTable(prop);
		});
	});
}

function changeTable(prop) {
	if (!SHIPGET || !MAPENEMY) return;
	for (let i=0; i<100; i++) {
		if (i < SHIPGET[prop].ships.length) {
			let mid = SHIPGET[prop].ships[i];
			$('#trDrops'+i).show();
			$('#imgDrops'+i).attr('src',getShipImagePath(mid));
			$('#imgDropsR'+i).attr('src','');
			$('#tdDropsName'+i).text(getShipName(mid));
		} else {
			$('#trDrops'+i).hide();
			$('#imgDrops'+i).attr('src','');
			$('#imgDropsR'+i).attr('src','');
			$('#tdDropsName'+i).text('');
		}
	}
	for (let replace of SHIPGET[prop].replace) {
		for (let slot of replace.slots) {
			$('#imgDropsR'+slot).attr('src',getShipImagePath(replace.id));
			$('#tdDropsName'+slot).text($('#tdDropsName'+slot).text()+'/'+getShipName(replace.id));
		}
	}
	
	let ids = Object.keys(MAPENEMY).sort((a, b) => +a - +b);
	let buttonFirst = null;
	$('#divNodeButtons').html('');
	for (let id of ids) {
		if (!!MAPENEMY[id].boss != (prop == 'boss')) continue;
		let e = htmlCreateNodeButton(id);
		buttonFirst = buttonFirst || e;
	}
	if (buttonFirst) {
		$('#divNode').show();
		buttonFirst.click();
	} else {
		$('#divNode').hide();
	}
}

function changeNode(cellId) {
	if (!cellId) return;
	let node = MAPENEMY[cellId];
	if (!node) return;
	let compIds = Object.keys(node.comp).sort((a, b) => +a - +b);
	$('#divEnemyComps > div').hide();
	for (let compId of compIds) {
		let comp = node.comp[compId];
		if (!$('#divEnemyComp'+compId).length) {
			htmlCreateEnemyComp(compId);
		}
		$('#divEnemyComp'+compId).show();
		$('#divEnemyCompOffset'+compId).text(comp.geth);
		let ships = comp.ship.slice();
		if (comp.shipC) ships = ships.concat(comp.shipC);
		for (let i=0; i<12; i++) {
			let e = $('#imgEnemyComp'+compId+'-'+i);
			if (i < ships.length) {
				e.show();
				e.attr('src',getShipImagePath(ships[i]));
			} else {
				e.hide();
				e.attr('src','');
			}
		}
		$('#imgEnemyCompForm'+compId).attr('src',getFormationImagePath(comp.formation));
	}
	$('input[name=radComp]').prop('checked',false);
	COMPID = null;
	tableHighlightRank();
	tableOutlinePool();
	$('#tabRates').hide();
	$('#linkExport').css('visibility','hidden');
	// $('#inpComp1').click();
	// $('#inpComp1').change();
	
	poiLoadData(MAP,cellId);
}

function changeRates() {
	if (!COMPID) return;
	let offset = MAPENEMY[CELLID].comp[COMPID].geth + RANKOFFSET[RANK];
	let prop = ($('input[name=radGroup]:checked').val() == '1')? 'normal' : 'boss';
	let ships = SHIPGET[prop].ships.slice(offset,offset+50);
	let shipRates = {}, shipRatesR = {};
	let shipCount = 0;
	for (let i=0; i<50; i++) {
		let mid = (i < ships.length)? ships[i] : 0;
		shipRates[mid] = shipRates[mid] + 2 || 2;
		if (mid != 0) shipCount++;
	}
	for (let replace of SHIPGET[prop].replace) {
		for (let slot of replace.slots) {
			if (slot < offset || slot >= offset+50) continue;
			shipRatesR[replace.id] = shipRatesR[replace.id] + 2 || 2;
			if (shipRates[replace.id] == null) shipRates[replace.id] = 0;
			let midR = SHIPGET[prop].ships[slot];
			shipRatesR[midR] = shipRatesR[midR] + 2 || 2;
			shipRates[midR] -= 2;
		}
	}
	if (prop == 'normal') {
		let rankAdjust = { 'S':.7, 'A': .6, 'B':.7 }[RANK];
		for (let mid in shipRates) shipRates[mid] *= rankAdjust;
		for (let mid in shipRatesR) shipRatesR[mid] *= rankAdjust;
		let n = (1 - rankAdjust)*100;
		shipRates[0] = shipRates[0] + n || n;
	}
	$('#tabRates tr.rateData').remove();
	let classOrder = ['DE','AS','AR','AO','LHA','CT','CV','CVB','SS','SSV','FBB','BB','BBV','CVL','AV','CA','CAV','CL','CLT','DD'];
	let mids = Object.keys(shipRates).sort(function(a,b) {
		if (a == 0) return -1;
		if (b == 0) return 1;
		if (SHIPDATA[a].type != SHIPDATA[b].type) return classOrder.indexOf(SHIPDATA[a].type) - classOrder.indexOf(SHIPDATA[b].type);
		return SHIPDATA[a].nid - SHIPDATA[b].nid;
	});
	
	let poiComp, poiData = POIDATA[MAP] && POIDATA[MAP][CELLID], poiNames = [];
	if (poiData) {
		let compData = MAPENEMY[CELLID].comp[COMPID];
		let compShips = compData.ship.slice();
		if (compData.shipC) compShips = compShips.concat(compData.shipC);
		for (let comp in poiData.counts) {
			let ids = comp.match(/\d{4}/g);
			if (ids.length != compShips.length) continue;
			let found = false;
			for (let i=0; i<compShips.length; i++) {
				if (compShips[i] != +ids[i]) { found = true; break; }
			}
			if (found) continue;
			let form = comp.substr(comp.lastIndexOf('(')+1).replace(')','');
			if (FORMATIONMAP[form] != compData.formation) continue;
			poiComp = comp;
			break;
		}
	}
	
	DATAOUT = [];
	let rankInd = (RANK == 'S')? 0 : (RANK == 'A')? 1 : 2;
	for (let mid of mids) {
		let rate = Math.round(shipRates[mid]*100)/100;
		let rateStr = rate.toString();
		if (shipRatesR[mid]) {
			rateStr += '~' + Math.round((rate+shipRatesR[mid])*100)/100;
			rate = rate + Math.round(shipRatesR[mid]*100)/100/2;
		}
		rateStr += '%';
		let shipName = (mid == 0)? '(None)' : getShipName(mid);
		let html = '<tr class="rateData"><td class="rateName">'+shipName+'</td><td><img src="'+getShipImagePath(mid)+'" /></td><td>'+rateStr+'</td>';
		let rateShipOnly = (mid == 0)? '' : Math.round(10000*rate/(100-(shipRates[0] || 0)))/10000;
		html += '<td>'+rateShipOnly+'</td>';
		let dataRow = [];
		dataRow.push(mid); dataRow.push(shipName); dataRow.push(rate); dataRow.push(rateShipOnly);
		
		if (poiData && poiComp) {
			let numPoi = 0;
			if (shipName == '(None)') shipName = '(无)';
			if (poiData.orig.data[shipName] && poiData.orig.data[shipName].enemy[poiComp]) {
				numPoi = poiData.orig.data[shipName].enemy[poiComp].count[rankInd];
			}
			let numPoiStr = '', ratePoiStr = '', style = '';
			if (mid != 0) {
				numPoiStr = numPoi + '/' + poiData.counts[poiComp][rankInd];
				ratePoiStr = Math.round(numPoi/poiData.counts[poiComp][rankInd]*10000)/10000;
				if (numPoi > 0) {
					let cGreen, cRed;
					if (HLTYPE == 1) {
						let diff = Math.abs(rateShipOnly-ratePoiStr)/(1/shipCount);
						if (diff > 1) diff = 1;
						cGreen = (diff <= .5)? 255 : 255*2*(1-diff);
						cRed = (diff >= .5)? 255 : 255*2*diff;
					} else {
						let sd = SD(rateShipOnly, numPoi, poiData.counts[poiComp][rankInd]);
						sd = sd/SDZ;
						let tRed = 3, tYellow = 2;
						if (sd > tRed) sd = tRed;
						cGreen = (sd <= tYellow)? 255 : 255*(tRed-sd)/(tRed-tYellow);
						cRed = (sd >= tYellow)? 255 : 255*(sd)/tYellow;
					}
					let c = Math.round(cRed)*65536 + Math.round(cGreen)*256;
					style = 'background-color:#' + c.toString(16).padStart(6,'0');
					poiNames.push(shipName);
				}
			} else {
				numPoiStr = numPoi + '/' + (numPoi + poiData.counts[poiComp][rankInd]);
			}
			html += '<td>'+numPoiStr+'</td><td style="'+style+'">'+ratePoiStr+'</td>';
			dataRow.push(numPoi); dataRow.push(poiData.counts[poiComp][rankInd]); dataRow.push(ratePoiStr);
		}
		
		html += '</tr>';
		let e = $(html);
		$('#tabRates').append(e);
		DATAOUT.push(dataRow);
	}
	if (poiData && poiComp) {
		$('#tabRates').append('<tr class="rateData"></tr>');
		for (let name in poiData.orig.data) {
			if (name == '(无)') continue;
			if (!poiData.orig.data[name].enemy[poiComp]) continue;
			if (poiData.orig.data[name].enemy[poiComp].count[rankInd] <= 0) continue;
			// if (poiData.counts[poiComp][rankInd] <= 1) continue;
			if (poiNames.indexOf(name) != -1) continue;
			let rate = Math.round(10000*poiData.orig.data[name].enemy[poiComp].count[rankInd]/poiData.counts[poiComp][rankInd])/10000;
			if (rate <= 0.0002) continue;
			let nums = poiData.orig.data[name].enemy[poiComp].count[rankInd] + '/' + poiData.counts[poiComp][rankInd];
			let e = $('<tr class="rateData" style="opacity:.5"><td class="rateName">'+name+'</td><td></td><td></td><td></td><td>'+nums+'</td><td>'+rate+'</td></tr>');
			$('#tabRates').append(e);
		}
	}
	
	$('#tabRates').show();
	$('#linkExport').css('visibility','visible');
}


function tableHighlightRank(offset) {
	$('#tabDrops tr').removeClass('rankS');
	$('#tabDrops tr').removeClass('rankA');
	$('#tabDrops tr').removeClass('rankB');
	$('#tabDrops tr').removeClass('rankB2');
	
	if (offset == null) return;
	
	for (let i=offset; i<100; i++) {
		if (i < offset+20) {
			$('#trDrops'+i).addClass('rankS');
		} else if (i < offset+50) {
			$('#trDrops'+i).addClass('rankA');
		} else if (i < offset+70) {
			$('#trDrops'+i).addClass('rankB');
		} else if (i < offset+100) {
			$('#trDrops'+i).addClass('rankB2');
		}
	}
}

function tableOutlinePool(offset) {
	$('#tabDrops tr').removeClass('outlineTop');
	$('#tabDrops tr').removeClass('outlineSide');
	$('#tabDrops tr').removeClass('outlineBottom');
	
	if (offset == null) return;
	
	for (let i=offset; i<100; i++) {
		if (i == offset) {
			if (i == 0) {
				$('#trDrops'+i).addClass('outlineTop');
			} else {
				$('#trDrops'+(i-1)).addClass('outlineBottom');
			}
		}
		if (i < offset+50) {
			$('#trDrops'+i).addClass('outlineSide');
		}
		if (i == offset+49) {
			$('#trDrops'+i).addClass('outlineBottom');
		}
	}
}

var POIDATA = {};
var FORMATIONMAP = { '単縦陣':1, '複縦陣':2, '梯形陣':4, '輪形陣':3, '単横陣':5, '警戒陣':6, '第一警戒航行序列':11, '第二警戒航行序列':12, '第三警戒航行序列':13, '第四警戒航行序列':14 };
function poiLoadData(map,cellId) {
	let letter = String.fromCharCode(+cellId+64);
	let url = 'https://db.kcwiki.org/drop/map/'+map.replace('-','')+'/'+letter+'-SAB.json';
	$('#linkPoi').attr('href',url.replace('.json','.html'));
	if (POIDATA[map] && POIDATA[map][cellId]) return;
	if (!POIDATA[map]) POIDATA[map] = {};
	console.log('start get '+map+' '+letter);
	$('#spanPoiLoad').show();
	$('#spanHL').hide();
	$('#linkExport').hide();
	if (window.location.hostname == 'fourinone41.github.io') url = 'https://cors-anywhere.herokuapp.com/' + url;
	$.getJSON(url,function(data) {
		$('#spanPoiLoad').hide();
		$('#spanHL').show();
		$('#linkExport').show();
		let poiData = POIDATA[map][cellId] = { 'orig': data, 'counts': {} };
		for (let name in data.data) {
			if (name == '(无)') continue;
			for (let comp in data.data[name].enemy) {
				if (!poiData.counts[comp]) poiData.counts[comp] = [0,0,0];
				for (let i=0; i<data.data[name].enemy[comp].count.length; i++) {
					poiData.counts[comp][i] += data.data[name].enemy[comp].count[i];
				}
			}
		}
		console.log(poiData);
		if (COMPID) changeRates();
	});
}

function SD(p,i,n) {
	return Math.abs(p - i / n) / Math.sqrt((i / n) * (1 - i / n) / n);
}


function getExportData() {
	if (!DATAOUT) return null;
	let output = '';
	for (let row of DATAOUT) output += row.join(',') + '\n';
	return output.trim();
}

// })();