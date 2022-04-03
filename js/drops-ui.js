// (function() {

var SHIPGET, MAPENEMY;
var MAP, CELLID, COMPID, RANK = 'S';
var RANKOFFSET = { 'S':0, 'A':20, 'B': 50 };
var HLTYPE, SDZ = 1.25;
var DATAOUT;
var GROUPREPLACEMENTS;
const NUMROWS = 110;

$('#divNode').hide();
$('#spanPoiLoad').hide();
$('#linkExport').css('visibility','hidden');
$('#radHL'+(HLTYPE = +localStorage.drops_hl || 1)).prop('checked',true);
if (localStorage.drops_group == null) localStorage.drops_group = 1;
$('#chkGroup').prop('checked',GROUPREPLACEMENTS = !!+localStorage.drops_group);

for (let i=0; i<NUMROWS; i++) {
	$('#tabDrops').append('<tr id="trDrops'+i+'"><td>'+(i+1)+'</td><td id="tdDropsName'+i+'"></td><td><img id="imgDrops'+i+'" src="" /></td><td><img id="imgDropsR'+i+'" src="" /></td></tr>');
	$('#trDrops'+i).hide();
}


function getCompOffset(comp,rank) {
	if (rank == 'S' && comp.geth_clear != null) return comp.geth_clear;
	return comp.geth;
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
		let offset = getCompOffset(MAPENEMY[CELLID].comp[COMPID],RANK);
		if (offset >= 0) {
			tableHighlightRank(MAPENEMY[CELLID].comp[COMPID].geth);
			tableOutlinePool(offset + RANKOFFSET[RANK]);
		}
		changeRates();
	});
	
	e.click(function() {
		$('#inpComp'+compId).prop('checked',true);
		$('#inpComp'+compId).change();
	});
	
	return e;
}

function htmlCreateNodeButton(cellId) {
	let letter = (!+cellId)? cellId : String.fromCharCode(+cellId+64);
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
			let offset = getCompOffset(MAPENEMY[CELLID].comp[COMPID],RANK);
			if (offset >= 0) {
				offset += RANKOFFSET[letter];
				tableOutlinePool(offset);
			}
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

$('#chkGroup').change(function() {
	GROUPREPLACEMENTS = $(this).prop('checked');
	localStorage.drops_group = +GROUPREPLACEMENTS;
	if (COMPID) changeRates();
});


document.body.onload = function() {
	let a = document.location.hash.substr(1).split('_');
	if (!a[0]) return;
	let selMap = document.getElementById('selMap');
	for (let op of selMap.options) {
		if (op.value == a[0]) {
			selMap.value = a[0];
			if (a[1] == 'boss') {
				document.getElementById('inpGroupB').checked = true;
			}
			changeData(a[0]);
			break;
		}
	}	
}


function getShipImagePath(mid) {
	if (mid == -1) return 'assets/icons/nodatabanner.jpg';
	return 'assets/icons/'+SHIPDATA[mid].image;
}

function getShipName(mid) {
	if (mid == -1) return '???';
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
	document.location.hash = MAP + '_' + prop;
	if (NOTES_SPECIAL[MAP+'_'+prop]) {
		$('#spanNoteMap').html(NOTES_SPECIAL[MAP+'_'+prop] + '<br>');
		$('#spanNoteMap').parent().show();
	} else {
		$('#spanNoteMap').parent().hide();
	}
	if (!SHIPGET || !MAPENEMY) return;
	for (let i=0; i<NUMROWS; i++) {
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
		if (SHIPGET[prop].unclear && SHIPGET[prop].unclear.includes(i)) {
			$('#trDrops'+i).addClass('unclear');
		} else {
			$('#trDrops'+i).removeClass('unclear');
		}
	}
	for (let replace of SHIPGET[prop].replace) {
		if (replace.hidden) continue;
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
		if (MAP.split('-')[0].length >= 2 && !Object.keys(MAPENEMY[id].comp).find(cid => MAPENEMY[id].comp[cid].geth < 100)) continue;
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
		$('#divEnemyCompOffset'+compId).text((comp.geth >= 0)? comp.geth : '?');
		if (comp.geth_clear != null) {
			$('#divEnemyCompOffset'+compId).text(comp.geth + ' (' + comp.geth_clear + ')');
		}
		let ships = comp.ship.slice();
		if (comp.shipC) ships = ships.concat(comp.shipC);
		for (let i=0; i<12; i++) {
			let e = $('#imgEnemyComp'+compId+'-'+i);
			if (i < ships.length) {
				e.show();
				e.attr('src',getShipImagePath(ships[i]));
				e.attr('title',ships[i]);
			} else {
				e.hide();
				e.attr('src','');
				e.attr('title','');
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
	
	let diff = (+MAP.split('-')[0] >= 20)? 4 : null;
	poiLoadData(MAP,cellId,diff);
}

function changeRates() {
	if (!COMPID) return;
	let offset = getCompOffset(MAPENEMY[CELLID].comp[COMPID],RANK);
	if (offset < 0) offset = 100;
	offset += RANKOFFSET[RANK];
	let prop = ($('input[name=radGroup]:checked').val() == '1')? 'normal' : 'boss';
	let ships = SHIPGET[prop].ships.slice(offset,offset+50);
	let shipRates = {}, shipRatesR = {};
	let shipCount = 0;
	
	let groups = [], mapGroup = {};
	for (let replace of SHIPGET[prop].replace) {
		if (replace.id == -1) continue;
		let ids = {};
		ids[replace.id] = 1;
		for (let slot of replace.slots) {
			if (slot < offset || slot >= offset+50) continue;
			ids[SHIPGET[prop].ships[slot]] = 1;
		}
		let gs = groups.filter(g => Object.keys(ids).find(id => g[id]));
		if (gs.length) {
			for (let id in ids) gs[0][id] = 1;
			for (let i=1; i<gs.length; i++) {
				for (let id in gs[i]) gs[0][id] = 1;
				groups.splice(groups.indexOf(gs[1]),1);
			}
		} else {
			if (Object.keys(ids).length > 1) groups.push(ids);
		}
	}
	for (let group of groups) {
		for (let id in group) mapGroup[id] = group;
	}
	
	for (let i=0; i<50; i++) {
		let mid = (i < ships.length)? ships[i] : 0;
		shipRates[mid] = shipRates[mid] + 2 || 2;
		if (mid != 0) shipCount++;
	}
	for (let replace of SHIPGET[prop].replace) {
		if (replace.id == -1) continue;
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
	delete shipRates[-1];
	$('#tabRates tr.rateData').remove();
	let classOrder = ['DE','AS','AR','AO','LHA','CT','CV','CVB','SS','SSV','FBB','BB','BBV','CVL','AV','CA','CAV','CL','CLT','DD'];
	let mids = Object.keys(shipRates).sort(function(a,b) {
		if (a == 0) return -1;
		if (b == 0) return 1;
		if (GROUPREPLACEMENTS && mapGroup[a] && !mapGroup[b]) return -1;
		if (GROUPREPLACEMENTS && mapGroup[b] && !mapGroup[a]) return 1;
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
			if (!ids) continue;
			if (ids.length != compShips.length) continue;
			let found = false;
			for (let i=0; i<compShips.length; i++) {
				if (compShips[i] != +ids[i]) { found = true; break; }
			}
			if (found) continue;
			let form = FORMATIONMAP[comp.substr(comp.lastIndexOf('(')+1).replace(')','')];
			if (!form) {
				form = +comp.substr(comp.lastIndexOf('/')+1);
			}
			if (form != compData.formation) continue;
			poiComp = comp;
			break;
		}
	}
	
	DATAOUT = [];
	let rankInd = (RANK == 'S')? 0 : (RANK == 'A')? 1 : 2;
	for (let mid of mids) {
		let rate = Math.round(shipRates[mid]*100)/100;
		let rateStr = rate.toString();
		let shipName = (mid == 0)? '(None)' : getShipName(mid);
		let htmlImg = '<img src="'+getShipImagePath(mid)+'" />';
		if (shipRatesR[mid]) {
			if (GROUPREPLACEMENTS) {
				let group = groups.find(g => g[mid]);
				if (group) {
					let rateSum = 0, names = [], imgs = [];
					for (let id in group) {
						rateSum += shipRatesR[id]/2 + shipRates[id];
						names.push(getShipName(id));
						imgs.push('<img src="'+getShipImagePath(id)+'"/>');
					}
					rate = Math.round(rateSum*10000)/10000;
					rateStr = rate.toString();
					shipName = names.join('/');
					htmlImg = imgs.join('<br>');
					mid = Object.keys(group).join('/');
					groups.splice(groups.indexOf(group),1);
				} else {
					continue;
				}
			} else {
				rateStr += '~' + Math.round((rate+shipRatesR[mid])*100)/100;
				rate = [rate,rate+Math.round(shipRatesR[mid]*100)/100];
			}
		}
		rateStr += '%';
		let html = '<tr class="rateData"><td class="rateName">'+shipName+'</td><td>'+htmlImg+'</td><td>'+rateStr+'</td>';
		let rateShipOnly;
		if (mid == 0) rateShipOnly = '';
		else if (Array.isArray(rate)) rateShipOnly = Math.round(10000*rate[0]/(100-(shipRates[0] || 0)))/10000 + '~' + Math.round(10000*rate[1]/(100-(shipRates[0] || 0)))/10000;
		else rateShipOnly = Math.round(10000*rate/(100-(shipRates[0] || 0)))/10000;
		html += '<td>'+rateShipOnly+'</td>';
		let dataRow = [];
		dataRow.push(mid); dataRow.push(shipName); dataRow.push(rate); dataRow.push(rateShipOnly);
		
		if (poiData && poiComp) {
			let numPoi = 0;
			if (shipName == '(None)') shipName = '(无)';
			for (let name of shipName.split('/')) {
				if (poiData.orig.data[name] && poiData.orig.data[name].enemy[poiComp]) {
					numPoi += poiData.orig.data[name].enemy[poiComp].count[rankInd];
				}
			}
			let numPoiStr = '', ratePoiStr = '', style = '';
			if (mid != 0) {
				numPoiStr = numPoi + '/' + poiData.counts[poiComp][rankInd];
				ratePoiStr = Math.round(numPoi/poiData.counts[poiComp][rankInd]*10000)/10000;
				if (numPoi > 0) {
					if (!Array.isArray(rate)) {
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
					}
					for (let name of shipName.split('/')) {
						poiNames.push(name);
					}
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
			console.log('add missing ' + name + ' ' + nums + ' ' + rate);
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
	
	for (let i=offset; i<NUMROWS; i++) {
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
	
	for (let i=offset; i<NUMROWS; i++) {
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
function poiLoadData(map,cellId,diff) {
	let letter = (!+cellId)? cellId : String.fromCharCode(+cellId+64);
	let url = 'https://db.kcwiki.org/drop/map/'+map.replace('-','')+'/'+letter+'-SAB.json';
	if (diff) url = url.replace('/'+letter,'/'+diff+'/'+letter);
	if (map >= '52') {
		url = 'https://db.kcwiki.org/api/cache/drop_map_' + map.replace('-','') + '_' + letter + '-SAB'
		if (diff) url = url.replace('_'+letter,'_'+letter+'-'+diff);
	}
	$('#linkPoi').attr('href',url.replace('.json','.html'));
	if (POIDATA[map] && POIDATA[map][cellId] && (!diff || diff == 4)) return;
	if (!POIDATA[map]) POIDATA[map] = {};
	console.log('start get '+map+' '+letter);
	$('#spanPoiLoad').show();
	$('#spanHL').hide();
	$('#spanGroup').hide();
	$('#linkExport').hide();
	if (window.location.hostname == 'fourinone41.github.io') url = 'https://salty-brushlands-75370.herokuapp.com/' + url;
	$.getJSON(url,function(data) {
		if (!POIDATA[map][cellId]) {
			POIDATA[map][cellId] = { 'orig': data, 'counts': {} };
		} else {
			let poiData = POIDATA[map][cellId];
			for (let name in data.data) {
				for (let comp in data.data[name].enemy) {
					if (!poiData.orig.data[name]) {
						poiData.orig.data[name] = data.data[name];
						continue;
					}
					if (!poiData.orig.data[name].enemy[comp]) {
						poiData.orig.data[name].enemy[comp] = data.data[name].enemy[comp];
						continue;
					}
					for (let i=0; i<poiData.orig.data[name].enemy[comp].count.length; i++) {
						poiData.orig.data[name].enemy[comp].count[i] += data.data[name].enemy[comp].count[i];
					}
				}
			}
		}
		if (!diff || diff <= 1) {
			$('#spanPoiLoad').hide();
			$('#spanHL').show();
			$('#spanGroup').show();
			$('#linkExport').show();
		}
		let poiData = POIDATA[map][cellId];
		for (let name in data.data) {
			if (name == '(无)') continue;
			for (let comp in data.data[name].enemy) {
				if (!poiData.counts[comp]) poiData.counts[comp] = [0,0,0];
				for (let i=0; i<data.data[name].enemy[comp].count.length; i++) {
					poiData.counts[comp][i] += data.data[name].enemy[comp].count[i];
				}
			}
		}
		if (diff && diff > 1) {
			poiLoadData(map,cellId,diff-1);
		} else {
			console.log(poiData);
			if (COMPID) changeRates();
		}
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

var NOTES_SPECIAL = {
	'1-6_normal': 'Note: Nagara (長良) used to drop on slot 11 (?) before 2018-10-26 (end of Saury event).<br>&nbsp;&nbsp;Yura used to drop on slot 13 before 2019-10-26 (beginning of 2019 Saury event).<br>&nbsp;&nbsp;Tone used to drop on slot 11 at some point.',
	'45-2_boss': 'Note: Zara/Pola drop rate was changed 2019-09-04.',
	'48-1_normal': 'Note: Shimushu, Kunashiri, Etorofu\'s replacements are unclear.',
	'48-1_boss': 'Note: Shimushu, Kunashiri, Etorofu\'s replacements are unclear but include Jintsuu and Naka.',
	'48-5_boss': 'Note: Almost no data for B rank, assumed same pattern as other boss nodes from the event.',
	'50-2_normal': 'Note: Slots 1 to 6 unclear',
	'50-3_normal': 'Note: Slots 1 to 8 and node W offsets unclear',
	'50-5_normal': 'Note: Low data for node Y, slots 1 to 8 unclear',
	'51-1_normal': 'Note: Slots 1 to 6 order unclear',
	'51-2_normal': 'Note: Replacements unclear',
	'51-2_boss': 'Note: Nelson/Kongou slots are limited to 1 dupe Nelson? Nelson/Naka slots are limited to 0 dupe Nelsons?',
	'53-2_boss': 'Note: On LD comps S-rank (and A/B clears?) only, applies -6 to offset. (Effect: Lowest 6 slots cannot be rolled, "replaced" by 6 higher slots normally outside the window.)',
};

// })();