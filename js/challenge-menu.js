$('#dialogmainmenu').dialog({
	autoOpen:false,
	width:815,
	height:600,
	draggable: false,
	resizable: false,
	modal:true,
	closeOnEscape:false,
});

$('#dialogreward').dialog({
	autoOpen:false,
	width:380,
	height:330,
	draggable: false,
	resizable: false,
	modal:true,
});

$('#chrdialoginfo').dialog({
	autoOpen:false,
	width:480,
	height:'auto',
	draggable: false,
	resizable: false,
	modal:true,
});

function chOpenMenu(allowclose) {
	if (!allowclose) $(".ui-dialog-titlebar").hide();
	
	$('#dialogmainmenu').dialog('open');
	
	var foundfile = false;
	for (var key in localStorage) {
		if (key.indexOf('ch_basic') == 0) {
			foundfile = true;
		}
	}
	
	if (!foundfile) {
		$('#menufileselect').hide();
		$('#menuevents').show();
		$('#menuBtnBackupSave').hide();
	} else {
		chMenuShowFiles();
		$('#menufileselect').show();
		chMenuUpdateStorageSize();
		$('#menuevents').hide();
		$('#menuBtnBackupSave').show();
	}
	$('#menuloadfile').hide();
	$('#menusettings').hide();
	$('#menufiledeleteprompt').hide();
	$('#menuBackup').show();
	
	$('#fileKC3').val('');
}

function chMenuShowFiles() {
	var nums = [];
	for (var key in localStorage) {
		if (key.indexOf('ch_basic') != 0) continue;
		var num = key.substr(8);
		if ($('#chfile'+num).length) {
			if (num == localStorage.ch_file) {
				$('#chfile'+num).html('');
			} else {
				$('#chfile'+num+' div.menufiledelete').show();
				continue;
			}
		}
		var data = JSON.parse(localStorage[key]);
		nums.push({ num: parseInt(num), data: data });
	}
	nums.sort(function(a,b) { return a.data.event.createtime - b.data.event.createtime; });
	for (var k=0; k<nums.length; k++) {
		var num = nums[k].num;
		var data = nums[k].data;
		var mdata = MAPDATA[data.event.world];
		var tr = $('#chfile'+num);
		if (tr.length <= 0) {
			tr = $('<tr id="chfile'+num+'" class="chfile" onclick="chMenuLoadFile('+num+')"></tr>');
			$('#tfileselect').append(tr);
		}
		var td = $('<td style="display:block"></td>');
		td.append($('<img src="'+mdata.bannerImg+'" style="opacity:.25;position:absolute" />'));
		var divMain = $('<div style="position:absolute;margin-left:20px"></div>');
		td.append(divMain);
		divMain.append($('<span>'+mdata.name+': '+data.player.name+' - HQ '+data.player.level+/*' - '+(new Date(data.event.lasttime)).toLocaleString()+*/'</span><br>'));
		var progress = 0, total = 0;
		var medals = [];
		for (var mapnum in mdata.maps) total++;
		for (var mapnum in data.event.maps) {
			var nowhp = 0, maxhp = 0;
			let map = MAPDATA[data.maps[mapnum].world].maps[mapnum];
			if (map.parts) {
				for (var part in map.parts) {
					maxhp++;
					if (part > data.event.maps[mapnum].part) {
						nowhp++;
					} else if (data.event.maps[mapnum].part == part) {
						var nowhpP = data.event.maps[mapnum].hp;
						var maxhpP = getMapHP(data.maps[mapnum].world,mapnum,data.event.maps[mapnum].diff,part);
						if (maxhpP) nowhp += nowhpP/maxhpP;
						else nowhp++;
					}
				}
			} else {
				nowhp = data.event.maps[mapnum].hp;
				maxhp = getMapHP(data.maps[mapnum].world,mapnum,data.event.maps[mapnum].diff) || 0;
			}
			if (!maxhp) continue;
			progress += (maxhp-nowhp)/maxhp/total;
			if (nowhp <= 0) {
				var type;
				if (data.event.world == 20) type = 0;
				else if (data.config.diffmode == 2) type = data.event.maps[mapnum].diff;
				else {
					if (data.player.level >= 80) type = 3;
					else if (data.player.level >= 35) type = 2;
					else type = 1;
				}
				medals[mapnum-1] = type;
			}
		}
		if (medals.length >= Object.keys(mdata.maps).length && progress >= .9999) progress = 1; //fix JS float rounding
		if (progress >= 1 && data.event.world == 40) { medals.push(null); medals.push(40); }
		if (progress >= 1 && data.event.world == 41) { medals.push(null); medals.push(41); }
		var divMedal = $('<div style="height:50px"></div>');
		var divBar = $('<div style="width:420px;height:20px;float:left"></div>');
		var height = (medals.length > 10)? 23 : 50;
		for (var i=0; i<medals.length; i++) {
			if (data.event.world == 10 && i % 10 != 3) continue;
			var div = $('<div style="width:'+height+'px;height:'+height+'px;float:left"></div>');
			divMedal.append(div);
			if (medals[i] == null) continue;
			div.append($('<img src="assets/maps/medal'+medals[i]+'.png" style="height:'+(height*.8)+'px;margin-top:8px" />'));
		}
		divMain.append(divMedal);
		divBar.append($('<div style="width:400px;height:10px;position:absolute;border:1px solid black;background-color:white;border-radius:5px"></div>'));
		divBar.append($('<div style="width:'+(progress*400)+'px;height:10px;position:absolute;margin-left:1px;margin-top:1px;background-color:green;border-radius:4px"></div>'));
		var divProgress = $('<div></div>');
		divProgress.append(divBar);
		divProgress.append($('<div style="float:left;margin-top:-5px"><span>'+Math.floor(progress*100)+'%</span></div>'));
		divMain.append(divProgress);
		var divDelete = $('<div class="menufiledelete" onclick="chMenuClickedDeleteFile(this,'+num+');event.stopPropagation()">&#10006;</div>');
		td.append(divDelete);
		if (num == localStorage.ch_file) divDelete.hide();
		tr.append(td);
	}
}

function chMenuLoadFile(file) {
	$('#dialogmainmenu').dialog('close');
	if (file == localStorage.ch_file) return;
	chSave();
	chLoadFile(file);
}

var DELETEFILE = 0;
function chMenuClickedDeleteFile(caller,file) {
	if (file == localStorage.ch_file) return;
	DELETEFILE = file;
	$('#menufiledeleteprompt').show();
	var c = $(caller).offset();
	$('#menufiledeleteprompt').offset({top: c.top-2, left: c.left-737});
}

function chMenuDeleteFile() {
	delete localStorage['ch_basic'+DELETEFILE];
	delete localStorage['ch_data'+DELETEFILE];
	$('#chfile'+DELETEFILE).remove();
	$('#menufiledeleteprompt').hide();
	chMenuUpdateStorageSize();
}

function chMenuClickedNewFile() {
	if (!localStorage.max) chMenuUpdateStorageSize();
	if (localStorage.max - chGetStorageUsed()/1024/1024 < .5) {
		$('#menustoragewarn').show();
		return false;
	}
	$('#menufileselect').hide();
	$('#menuevents').show();
	$('#menuBackup').hide();
	return true;
}

function chMenuSelectedEvent(eventnum) {
	EVENTNUM = eventnum;

	$('#menucurbanner').attr('src',MAPDATA[EVENTNUM].bannerImg);
	chMenuDefaultSettings();
	$('#menuevents').hide();
	$('#menuBackup').hide();
	$('#menuloadfile').show();
	if (localStorage.ch_import == 1) {
		$('#menuImportKC3').hide();
		$('#menuImportOther').show();
		$('#menuCreateRandomFile').hide();
	} else {
		$('#menuImportKC3').show();
		$('#menuImportOther').hide();
		$('#menuCreateRandomFile').hide();
	}
	$('#menusettings').hide();
	$(".ui-dialog-titlebar").hide();
	if (MAPDATA[EVENTNUM].mechanicsOther) {
		$('#menusmechunique').parent().show();
		$('#menusmechunique').parent().attr('title',MAPDATA[EVENTNUM].mechanicsDescription);
	} else {
		$('#menusmechunique').parent().hide();
		$('#menusmechunique').parent().attr('title','');
	}

	if (EVENTNUM == 98) {
		localStorage.ch_import = 1;
		chrInitFile();

		$('#menuImportKC3').hide();
		$('#menuImportOther').hide();
		$('#menuCreateRandomFile').hide();
	}
}

function chMenuBackEvent() {
	$('#menuevents').show();
	$('#menuloadfile').hide();
	$('#menusettings').hide();
	$('#fileKC3').val('');
	$('#menufinfo').hide();
}

function chMenuDefaultSettings() {
	$('#menusships').prop('checked',true);
	$('#menusequips').prop('checked',true);
	
	var eventdate = MAPDATA[EVENTNUM].date;
	var mechanicdate = 0;
	$('#menusmechanics option').each(function() {
		if ($(this).val() <= eventdate) mechanicdate = $(this).val();
	});
	$('#menusmechanics').val(mechanicdate);
	
	$('#menusdiff option[value="1"]').prop('disabled',(MAPDATA[EVENTNUM].diffMode != 1));
	$('#menusdiff').val(MAPDATA[EVENTNUM].diffMode);
	
	$('#menuslock').prop('checked',false);
	$('#menusraidreq').prop('checked',false);
	$('#menusunlock').prop('checked',false);
	
	$('#menusmechunique').prop('checked',true);
}

function chMenuExtractSettings() {
	CHDATA.config = {};
	CHDATA.config.disableships = $('#menusships').prop('checked');
	CHDATA.config.disableequips = $('#menusequips').prop('checked');
	CHDATA.config.mechanicsdate = $('#menusmechanics').val();
	CHDATA.config.mechanicsunique = $('#menusmechunique').prop('checked');
	CHDATA.config.diffmode = parseInt($('#menusdiff').val());
	CHDATA.config.disablelock = $('#menuslock').prop('checked');
	CHDATA.config.disableRaidReq = $('#menusraidreq').prop('checked');
	CHDATA.config.unlockAll = $('#menusunlock').prop('checked');
	CHDATA.config.REQUIRED_CLEAR_COUNT = $('#menusmapclearcount').val();
}

function chMenuDone() {
	var filenum = 1;
	for (; filenum<1000; filenum++) {
		if (!localStorage['ch_basic'+filenum]) break;
	}
	if (filenum >= 1000) return;
	localStorage.ch_file = FILE = filenum;
	
	$('#dialogmainmenu').dialog('close');
	$(".ui-dialog-titlebar").show();
	chMenuExtractSettings();
	chProcessKC3File2();
	InitUI();
	if (MAPDATA[EVENTNUM].initReward) {
		chAddReward(MAPDATA[EVENTNUM].initReward);
		chShowReward(MAPDATA[EVENTNUM].initReward);
	}

	if (EVENTNUM == 98) {
		MAPDATA[98].chrProcessAfterFileCreation();
	}

	chSave();
}

function chRestrictReward(data) {
	let result = {ships:[],items:[]};
	if (data.ships) {
		for (let ship of data.ships) {
			let found = false;
			for (let sid in CHDATA.ships) {
				if (!CHDATA.ships[sid].disabled && getBaseId(CHDATA.ships[sid].masterId) == ship) {
					found = true; break;
				}
			}
			if (!found) result.ships.push(ship);
		}
	}
	if (data.items) {
		for (let item of data.items) {
			let limit = 1;
			if (typeof item === 'object') {
				limit = item.limit;
				item = item.id;
			}
			let count = 0;
			for (let eqid in CHDATA.gears) {
				if (!CHDATA.gears[eqid].disabled && CHDATA.gears[eqid].masterId == item) {
					count++;
				}
			}
			if (count < limit) result.items.push(item);
		}
	}
	if (!result.ships.length) delete result.ships;
	if (!result.items.length) delete result.items;
	return result;
}

function chAddReward(data,forceNew) {
	if (data.ships) {
		for (var i=0; i<data.ships.length; i++) {
			if (!forceNew) {
				let shipExisting = null;
				for (let sid in CHDATA.ships) {
					let shipC = CHDATA.ships[sid];
					if (!shipC.disabled) continue;
					if (getBaseId(shipC.masterId) == data.ships[i] && (!shipExisting || shipC.LVL > shipExisting.LVL)) {
						shipExisting = shipC;
					}
				}
				if (shipExisting) {
					delete shipExisting.disabled;
					continue;
				}
			}
			var mid = data.ships[i];
			if (!SHIPDATA[mid]) continue;
			for (var j=0; j<100; j++) {
				var sid = 'x'+(90000+j);
				if (CHDATA.ships[sid]) continue;
				var sdata = SHIPDATA[mid];
				var lvl = (mid > 9000)? 20 : 1;
				var newship = {
					HP: [sdata.HP,sdata.HP],
					LVL: lvl,
					FP: sdata.FP,
					TP: sdata.TP,
					AA: sdata.AA,
					AR: sdata.AR,
					EV: sdata.EVbase + Math.floor((sdata.EV-sdata.EVbase)*lvl/99),
					LOS: sdata.LOSbase + Math.floor((sdata.LOS-sdata.LOSbase)*lvl/99),
					ASW: sdata.ASWbase + Math.floor((sdata.ASW-sdata.ASWbase)*lvl/99),
					LUK: sdata.LUK,
					RNG: sdata.RNG,
					ammo: 10,
					fuel: 10,
					items: [-1,-1,-1,-1,-1],
					masterId: mid,
					morale: 49,
					planes: sdata.SLOTS.slice(),
				};
				CHDATA.ships[sid] = newship;
				break;
			}
		}
		DIALOGSORT = null;
		chFillDialogShip(1);
	}
	if (data.items) {
		for (var i=0; i<data.items.length; i++) {
			var mid = typeof data.items[i] === 'object' ? data.items[i].id : data.items[i];
			if (!forceNew) {
				let gearExisting = null;
				for (let eqid in CHDATA.gears) {
					if (CHDATA.gears[eqid].disabled && CHDATA.gears[eqid].masterId == mid) {
						gearExisting = CHDATA.gears[eqid];
						break;
					}
				}
				if (gearExisting) {
					delete gearExisting.disabled;
					continue;
				}
			}
			if (!EQDATA[mid]) continue;
			for (var j=0; j<100; j++) {
				var eqid = 'x'+(90000+j);
				if (CHDATA.gears[eqid]) continue;
				var newequip = {
					itemId: eqid,
					masterId: mid,
					lock: 1,
					stars: 0,
					ace: ((EQTDATA[EQDATA[mid].type].isPlane)? 7 : -1)
				};
				CHDATA.gears[eqid] = newequip;
				break;
			}
			$('#equipselecttable').append('<tr id="'+eqid+'" value="'+eqid+'"></tr>');
		}
	}
}

function chShowReward(data,tracker) {
	if (tracker === undefined) tracker = 0;
	var numShips = (data.ships)? data.ships.length : 0;
	var numItems = (data.items)? data.items.length : 0;
	if (numShips + numItems) {
		$('#dialogreward').dialog('open');
		$('#rewardshine').css('animation','spin 5s linear infinite');
		$('#rewardship').css('margin-top','105px');
		if (tracker < numShips) {
			$('#rewardship').attr('src','assets/icons/'+SHIPDATA[data.ships[tracker]].image);
		} else {
			let imageSpecial = {
				56: 'assets/maps/22/Shinden_Kai_056_Card.png',
				143: 'assets/maps/48/i143.png',
				144: 'assets/maps/48/i144.png',
				175: 'assets/maps/36/Raiden_175_Card.png',
				176: 'assets/maps/36/Type_3_Fighter_Hien_176_Card.png',
				185: 'assets/maps/36/Type_3_Fighter_Hien_Model_1D_185_Card.png',
				209: 'assets/maps/37/Saiun_(Disassembled_for_Transport)_209_Card.png',
				218: 'assets/maps/40/Type_4_Fighter_Hayate_218_Card.png',
				269: 'assets/maps/40/Prototype_Toukai_269_Card.png',
				270: 'assets/maps/40/Toukai_(901_Air_Group)_270_Card.png',
				272: 'assets/maps/40/Striking_Force_Fleet_Command_Facility_272_Card.png',
				311: 'assets/maps/43/i311.png',
				312: 'assets/maps/43/i312.png',
				333: 'assets/maps/44/i333.png',
				334: 'assets/maps/44/i334.png',
				346: 'assets/maps/45/i346.png',
				348: 'assets/maps/45/i348.png',
				350: 'assets/maps/45/i350.png',
				351: 'assets/maps/45/i351.png',
				355: 'assets/maps/45/i355.png',
				402: 'assets/maps/49/i402.png',
				413: 'assets/maps/50/i413.png',
			};
			var ind = tracker-numShips, id = typeof data.items[ind] === 'object' ? data.items[ind].id : data.items[ind];
			if (imageSpecial[id]) {
				$('#rewardship').css('margin-top','70px');
				$('#rewardship').attr('src',imageSpecial[id]);
			} else if (data.items[ind] == 'apology') {
				$('#rewardship').css('margin-top','40px');
				$('#rewardship').attr('src','assets/maps/Apology_scroll.png');
			} else {
				$('#rewardship').attr('src','assets/items/'+EQTDATA[EQDATA[id].type].image+'.png');
			}
		}
		$('#rewardship').css('animation','appear 1s linear 1');
		tracker++;
		if (tracker < numShips + numItems) {
			$('#dialogreward').dialog('option','close',function() {
				setTimeout(function() { chShowReward(data,tracker); }, 1);
			});
		} else {
			$('#dialogreward').dialog('option','close',function() {
				$('#rewardshine').css('animation','');
				$('#rewardship').css('animation','');
			});
		}
	}
}


function chMenuUpdateStorageSize() {
	let size = chGetStorageUsed()/1024/1024;
	let max = localStorage.max || (localStorage.max = Math.round(size + chGetStorageLeft()/1024/1024));
	let maxText = (max > 100)? '100+' : max;
	$('#menustorage').text(size.toFixed(2));
	$('#menustoragemax').text(maxText);
	$('#menustoragewarn').hide();
}

function chGetStorageUsed() {
	let size = 0;
	for (let key in localStorage) {
		if (typeof localStorage[key] !== 'string') continue;
		size += localStorage[key].length + key.length;
	}
	return size*2;
}

function chGetStorageLeft() {
	let MB = 1024*1024;
	let steps = [MB, MB/10, MB/100];
	let left = 0;
	for (let step of steps) {
		let chars = step;
		for (; chars <= step*50; chars += step) {
			try {
				localStorage['a'] = 'a'.repeat(left + chars);
			} catch (e) {
				break;
			}
		}
		left += chars - step;
	}
	delete localStorage['a'];
	return 2*left;
}

function chSaveBackup() {	
	let save = {};
	for (let key in localStorage) {
		if (key.indexOf('ch_') == 0) save[key] = localStorage[key];
	}
	save.kcEventSimSource = window.location.host;
	
	let filename = 'KanColle_Event_Simulator_Backup_' + (new Date).toISOString().slice(0,10) + '.kcevsim';

	let a = window.document.createElement('a');
	a.href = window.URL.createObjectURL(new Blob([JSON.stringify(save)], {type: 'application/json'}));
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

function chLoadBackup() {
	let file = document.getElementById("menuInputBackupFile").files[0];
	if (!file) return;
	
	$('#menuBackupError').hide();

	const reader = new FileReader();
	reader.addEventListener('load', (event) => {
		let save;
		try {
			save = JSON.parse(event.target.result);
		} catch (e) {
			$('#menuBackupWarn').hide();
			$('#menuBackupError').show();
			return;
		}
		if (save.kcEventSimSource != window.location.host) {
			$('#menuBackupWarn').hide();
			$('#menuBackupError').show();
			return;
		}

		for (let key in localStorage) {
			if (key.indexOf('ch_') == 0) localStorage.removeItem(key);
		}

		for (const saveEntryKey in save) {
			if (saveEntryKey.indexOf('ch_') == 0) localStorage.setItem(saveEntryKey, save[saveEntryKey]);
		}

		// --- Refresh after load
		chSave = () => null;
		location.reload();
	});

	reader.readAsText(file);
}

$('#menuBackupWarn').hide();
$('#menuBackupError').hide();
$('#menuBtnBackupLoad').prop('disabled',true);
$('#menuBtnBackupSave').click(chSaveBackup);
$('#menuBtnBackupLoad').click(chLoadBackup);
$('#menuInputBackupFile').change(function() {
	$('#menuBtnBackupLoad').prop('disabled',false);
	$('#menuBackupError').hide();
	if (localStorage.ch_file) {
		$('#menuBackupWarn').show();
	}
});


$('.btnImportOther').click(function() {
	$('#menuImportKC3').hide();
	$('#menuImportOther').show();
	$('#menuCreateRandomFile').hide();
	localStorage.ch_import = 1;
});
$('.btnImportKC3').click(function() {
	$('#menuImportKC3').show();
	$('#menuImportOther').hide();
	$('#menuCreateRandomFile').hide();
	delete localStorage.ch_import;
});
$('.btnRandomFile').click(function() {
	$('#menuImportKC3').hide();
	$('#menuImportOther').hide();
	$('#menuCreateRandomFile').show();
	localStorage.ch_import = 1;
});
$('#btnImportRandomSubmit').click(function() {
	let name = $('#inpCreateRandomName').val();
	let level = $('#inpCreateRandomHQ').val();
	let nbShips = $('#inpCreateRandomNbShips').val();
	let nbEquips = $('#inpCreateRandomNbEquips').val();
	let allowAbyssals = $('#inpCreateRandomAbyssalShip').prop('checked');
	let allowAbyssalsEquips = $('#inpCreateRandomAbyssalEquipments').prop('checked');

	chProcessCreateRandomFile(nbShips, nbEquips, name, level, true, allowAbyssals, allowAbyssalsEquips, true);

	$('#menusdone').prop('disabled',false);
	$('#menufname').text(CHDATA.kcdata.player.name);
	$('#menufhq').text(CHDATA.kcdata.player.level);
	$('#menufinfo').show();
	$('#menusettings').show();
});
$('#btnImportOtherSubmit').click(function() {
	$('#spanImportOtherError').text('');
	let dataShip, dataEquip;
	try {
		dataShip = JSON.parse($('#inpImportOtherShip').val());
	} catch(e) {
		$('#spanImportOtherError').text('Ship: Bad JSON');
		return;
	}
	try {
		dataEquip = JSON.parse($('#inpImportOtherEquip').val());
	} catch(e) {
		$('#spanImportOtherError').text('Equipment: Bad JSON');
		return;
	}
	let name = $('#inpImportOtherName').val(), level = +$('#inpImportOtherHQ').val();
	if (!name) {
		$('#spanImportOtherError').text('Name required');
		return;
	}
	if (!level || level < 1 || level > 120) {
		$('#spanImportOtherError').text('HQ Level required');
		return;
	}
	try {
		chProcessImportOther(dataShip,dataEquip,name,level);
	} catch(e) {
		console.log(e);
		$('#spanImportOtherError').text('Bad data');
		return;
	}
});

$('#menusmechunique').parent().css('text-decoration','underline dashed');