// --- 1 => enemies have their normal stats
// --- 2 => enemies have randomized stats, it gets re-rolled every time from their original stat
// --- 3 => enemies have randomized stats, it gets re-rolled every time from their previous stat
// --- 4 => if its a boss node, the boss will hav ethe same HP as the original boss
var RANDO_MODE = 1;

// --- 1 => Rush mode
// --- 2 => TP is slow
var RUSH_MODE = 0;

function InitUI() {
	if (!CHDATA.event) return;

	const afterLoadingData = () => {

		chInitAbyssalTables();

		MAPNUM = CHDATA.event.mapnum;
		WORLD = CHDATA.event.world;
	
		if(WORLD > 97) {
			
			if (WORLD == 98) {
				$('#tabChr').show();
			}
			else {
				$('#tabChr').hide();
			}
	
			WORLD = CHDATA.maps[MAPNUM].world;
		}
		
		for (let mechanic in MECHANICDATES) { //refresh mechanics for updates
			CHDATA.config.mechanics[mechanic] = (MECHANICDATES[mechanic] <= CHDATA.config.mechanicsdate);
		}
		let dataDate = (CHDATA.config.mechanicsdate < MAPDATA[WORLD].date)? MAPDATA[WORLD].date : CHDATA.config.mechanicsdate;
		setShipDataDate(dataDate);
		setEquipDataDate(dataDate);
		
		if (CHHPREGENTIMER.running) {
			CHHPREGENTIMER.stop();
		}
		if (MAPDATA[WORLD].maps[CHDATA.event.unlocked] && MAPDATA[WORLD].maps[CHDATA.event.unlocked].hpRegenTick) {
			var elapsed = (Date.now() - CHDATA.event.lasttime)/1000 + (CHDATA.event.regenCounter || 0);
			CHHPREGENTIMER.start(CHDATA.event.unlocked,elapsed);
		}
		
		for (var mapnum in CHDATA.event.maps) {
			if (!CHDATA.event.maps[mapnum].part) continue;
			mapChangePart(CHDATA.maps[mapnum].world,mapnum,CHDATA.event.maps[mapnum].part);
		}
	
		$('#equipfilters').html('');
		$('#equipselecttable').html('');
		$('#chrequipfilters').html('');
		$('#chrequipselecttable').html('');
		chDialogItemInit();
		chrDialogItemInit();
		DIALOGSORT = null;
		
		if (MAPDATA[WORLD].allowFleets.indexOf(7) != -1 && CHDATA.fleets[1].length < 7) CHDATA.fleets[1].push(null);
		for (var fleetnum in CHDATA.fleets) chFillTable(CHDATA.fleets[fleetnum],fleetnum);
		if (CHDATA.fleets.combined) chClickedCombine(CHDATA.fleets.combined, true);
		else chClickedCombine(0,true);
		chToggleShowSF(CHDATA.fleets.sf);
		
		chLoadSortieInfo(CHDATA.event.mapnum);
		chUIUpdateResources();
		chUIUpdateItems();
		
		var found = false;
		for (var i=1; i<=3; i++) {
			if (MAPDATA[WORLD].allowFleets.indexOf(i) != -1) {
				$('#btncombine'+i).show();
				found = true;
			} else {
				$('#btncombine'+i).hide();
			}
		}
		if (MAPDATA[WORLD].allowFleets.indexOf(7) != -1) {
			$('#btncombineSF').show();
			found = true;
		} else {
			$('#btncombineSF').hide();
		}
		if (!found) $('.combinespacec').hide();
		else $('.combinespacec').show();
		
		if (CHDATA.fleets.supportN) {
			$('#btnsupportN').css('opacity',1);
		} else {
			$('#btnsupportN').css('opacity',.5);
		}
		if (CHDATA.fleets.supportB) {
			$('#btnsupportB').css('opacity',1);
		} else {
			$('#btnsupportB').css('opacity',.5);
		}
		
		for (var i=1; i<=3; i++) {
			if (CHDATA.fleets['lbas'+i]) $('#btnLBAS'+i).css('opacity',1);
			else $('#btnLBAS'+i).css('opacity',.5);
		}
		
		if (MAPDATA[WORLD].allowLBAS) {
			$('#tabLBAS').parent().show();
			var n = MAPDATA[WORLD].lbasSlotCount || 18;
			SHIPDATA[5001].SLOTS = [n,n,n,n];
			SHIPDATA[5002].SLOTS = [n,n,n,n];
			SHIPDATA[5003].SLOTS = [n,n,n,n];
			for (let i=1; i<=3; i++) {
				let lbas = CHDATA.ships['z'+i];
				if (!lbas) continue;
				for (let j=0; j<lbas.items.length; j++) {
					if (lbas.items[j] <= 0) continue;
					let item = CHDATA.gears['x'+lbas.items[j]];
					SHIPDATA[5000+i].SLOTS[j] = chGetLBASNumPlanes(item);
				}
			}
		} else {
			$('#tabLBAS').parent().hide();
		}
		
		if (MAPDATA[WORLD].disableSupport) {
			$('#tabsupportN').parent().hide();
			$('#tabsupportB').parent().hide();
			$('#btnsupportN').hide();
			$('#btnsupportB').hide();
		} else {
			$('#tabsupportN').parent().show();
			$('#tabsupportB').parent().show();
			$('#btnsupportN').show();
			$('#btnsupportB').show();
		}
		if (MAPDATA[WORLD].friendFleet) {
			if (CHDATA.fleets.ff == null) {
				chSetFriendFleet(1);
			} else {
				chSetFriendFleet(CHDATA.fleets.ff);
			}
			$('#btnFF').show();
		} else {
			$('#btnFF').hide();
		}
		chEnableFriendFleetWaves(MAPDATA[WORLD].friendFleetWaves);
		
		chInitPreset();
		
		chClickedTab('#tabmain');
		$('#mainspace').show();
		
		if (MAPDATA[WORLD].worldMap) {
			initWorldMap(MAPDATA[WORLD].worldMap);
			showWorldMap();
		} else {
			hideWorldMap();
		}
		
		let diffNames = { 3: 'HARD', 2: 'NORMAL', 1: 'EASY', 4: 'CASUAL' };
		if (MAPDATA[WORLD].diffNames) {
			for (let diff in MAPDATA[WORLD].diffNames) diffNames[diff] = MAPDATA[WORLD].diffNames[diff];
		}
		$('#srtDiffHard').val(diffNames[3]);
		$('#srtDiffMed').val(diffNames[2]);
		$('#srtDiffEasy').val(diffNames[1]);
		$('#srtDiffCasual').val(diffNames[4]);
	}

	randomizeMaps();
	chLoadRandomFile(afterLoadingData);
}

var WORLD, MAPNUM;
$('#battlespace').hide();
$('#mainspace').hide();
$(document).ready(function() {
	initEQDATA(function() {
		chInit();
	});
});

function chInit() {
	let eventInit = new URLSearchParams(window.location.search).get('loadEvent');
	if (eventInit) {
		window.history.replaceState(null,null,window.location.pathname);
		if (!MAPDATA[eventInit]) eventInit = null;
	}
	let file = localStorage.ch_file;
	if (file && eventInit) {
		file = chFindFile(eventInit);
	}
	if (file) {
		chLoadFile(file);
	} else {
		chOpenMenu();
		if (eventInit && chMenuClickedNewFile()) {
			chMenuSelectedEvent(eventInit);
		}
	}
}

function chFindFile(world) {
	let num = null, dateMax = 0;
	for (let key in localStorage) {
		if (key.indexOf('ch_basic') != 0) continue;
		let data = JSON.parse(localStorage[key]);
		if (data.event.world == world && data.event.lasttime > dateMax) {
			num = key.substr(8);
			dateMax = data.event.lasttime;
		}
	}
	return num;
}

function chLoadFile(file) {
	localStorage.ch_file = FILE = file;
	var basic = JSON.parse(localStorage['ch_basic'+FILE]);
	let ch_data = localStorage['ch_data'+FILE];
	if (ch_data[0] != '{') ch_data = LZString.decompressFromBase64(ch_data);
	CHDATA = JSON.parse(ch_data);
	for (var key in basic) CHDATA[key] = basic[key];
	DIALOGSORT = -1;
	InitUI();
}

var STAGEMAP = new PIXI.Container();
var STAGEBATTLE = stage;
stage = STAGEMAP;
function screenClickBlank() { };
var SCREENCLICKFUNCTION = screenClickBlank;
var bgmap = PIXI.Sprite.fromImage('assets/82_res.images.ImgBackgroundDay.jpg');
stage.addChild(bgmap);
const MAPOFFX = 17, MAPOFFY = 22;
// const MAPOFFX = 25, MAPOFFY = 2;

var mapShutterTop = PIXI.Sprite.fromImage('assets/512_res.common.ImgShutterTop.png');
var mapShutterBottom = PIXI.Sprite.fromImage('assets/510_res.common.ImgShutterBottom.png');
stage.addChild(mapShutterTop); stage.addChild(mapShutterBottom);

var map = new PIXI.Container();
stage.addChild(map);
var mapnodes = {};
const mapNodeLetters = {};

var mapAirBase = PIXI.Sprite.fromImage('assets/maps/airbase.png');
mapAirBase.pivot.set(13);
stage.addChild(mapAirBase);

var mapshipS = PIXI.Sprite.fromImage('assets/maps/ship.png');
mapshipS.defpivotx = 27; mapshipS.defpivoty = 27;
var mapshipCTF = PIXI.Sprite.fromImage('assets/maps/shipC1.png');
mapshipCTF.defpivotx = 29; mapshipCTF.defpivoty = 21;
var mapshipSTF = PIXI.Sprite.fromImage('assets/maps/shipC2.png');
mapshipSTF.defpivotx = 30; mapshipSTF.defpivoty = 28;
var mapshipTTF = PIXI.Sprite.fromImage('assets/maps/shipC3.png');
mapshipTTF.defpivotx = 26; mapshipTTF.defpivoty = 21;
var mapship = mapshipS;
stage.addChild(mapship);

var mapDim = new PIXI.Graphics();
mapDim.beginFill(0x000000);
mapDim.drawRect(0,0,800,480);
stage.addChild(mapDim);

var bottombar = PIXI.Sprite.fromImage('assets/maps/bottom.png');
stage.addChild(bottombar);

var bcompass = PIXI.Sprite.fromImage('assets/maps/compass.png');
stage.addChild(bcompass);
var bneedle = PIXI.Sprite.fromImage('assets/maps/needle.png');
stage.addChild(bneedle);
updates.push([function(needle) {
	needle.rotation = Math.PI/4 + Math.random()*.06 - .03;
	return false;
},[bneedle]]);



var mcompass = PIXI.Sprite.fromImage('assets/maps/compass.png');
mcompass.pivot.set(150,150);
mcompass.position.set(400,240);
mcompass.alpha = 0;
mcompass.scale.set(1.5);
var mneedle = PIXI.Sprite.fromImage('assets/maps/needle.png');
mneedle.pivot.set(14,101);
mneedle.position.set(400,240);
mneedle.alpha = 0;
mneedle.scale.set(1.5);
updates.push([function(needle) {
	needle.rotation = Math.random()*.06 - .03;
	return false;
},[mneedle]]);

var formboxes = [], formbuttons = [], formdots = [];
for (var i=0; i<6; i++) {
	formboxes.push(PIXI.Sprite.fromImage('assets/maps/formbox.png'));
	formbuttons.push([PIXI.Sprite.fromImage('assets/maps/form'+(i+1)+'a.png'),PIXI.Sprite.fromImage('assets/maps/form'+(i+1)+'b.png')]);
}
formboxes[0].position.set(387,61);
formboxes[1].position.set(517,61);
formboxes[2].position.set(649,61);
formboxes[3].position.set(455,220); formboxes[3].xOrig = 455;
formboxes[4].position.set(586,220); formboxes[4].xOrig = 586;
formboxes[5].position.set(649,220);
for (var i=0; i<formbuttons.length; i++) {
	formbuttons[i][0].position.set(formboxes[i].x+10,formboxes[i].y+107);
	formbuttons[i][1].position.set(formboxes[i].x+10,formboxes[i].y+107);
	formbuttons[i][0].formnum = i+1;
	formbuttons[i][0].interactive = true;
	formbuttons[i][0].buttonMode = true;
	formbuttons[i][0].mouseover = function() { this.alpha = 0; }
	formbuttons[i][0].mouseout = function() { this.alpha = 1; }
	formbuttons[i][0].click = function() {
		FORMSELECTED = this.formnum;
		this.callback();
	}
}
var FORMDOTPOS = [
	[445,80], [445,94], [445,108], [445,122], [445,136], [445,150],
	[568,100], [568,114], [568,128], [582,100], [582,114], [582,128],
	[707,94], [707,108], [707,122], [707,136], [687,114], [727,114],
	[491,296], [500,287], [509,278], [518,269], [527,260], [536,251],
	[611,274], [624,274], [638,274], [651,274], [664,274], [677,274],
	[710,253], [710,272], [710,286], [710,300], [721,260], [699,260],
];

for (var i=0; i<FORMDOTPOS.length; i++) {
	formdots.push(PIXI.Sprite.fromImage('assets/maps/formdot.png'));
	formdots[i].pivot.set(7,7);
	formdots[i].scale.set(.6);
	formdots[i].position.set(FORMDOTPOS[i][0],FORMDOTPOS[i][1]);
}

var formboxesc = [], formbuttonsc = [];
for (var i=1; i<=4; i++) {
	formboxesc.push(PIXI.Sprite.fromImage('assets/maps/formboxc'+i+'.png'));
	formbuttonsc.push([PIXI.Sprite.fromImage('assets/maps/formc'+i+'a.png'),PIXI.Sprite.fromImage('assets/maps/formc'+i+'b.png')]);
}
formboxesc[0].position.set(417,64);
formboxesc[1].position.set(582,64);
formboxesc[2].position.set(417,201);
formboxesc[3].position.set(582,201);
for (var i=0; i<4; i++) {
	formbuttonsc[i][0].position.set(formboxesc[i].x+11,formboxesc[i].y+95);
	formbuttonsc[i][1].position.set(formboxesc[i].x+11,formboxesc[i].y+95);
	formbuttonsc[i][0].formnum = i+11;
	formbuttonsc[i][0].interactive = true;
	formbuttonsc[i][0].buttonMode = true;
	formbuttonsc[i][0].mouseover = function() { this.alpha = 0; }
	formbuttonsc[i][0].mouseout = function() { this.alpha = 1; }
	formbuttonsc[i][0].click = function() {
		FORMSELECTED = this.formnum;
		this.callback();
	}
}

var CONTINUESELECT = -1;
var mapcontinuebutton = [PIXI.Sprite.fromImage('assets/maps/sortieyes.png'),PIXI.Sprite.fromImage('assets/maps/sortieyes2.png')];
var mapretreatbutton = [PIXI.Sprite.fromImage('assets/maps/sortieno.png'),PIXI.Sprite.fromImage('assets/maps/sortieno2.png')];
mapcontinuebutton[0].position.set(201,162); 
mapcontinuebutton[0].interactive = true; mapcontinuebutton[0].buttonMode = true;
mapcontinuebutton[0].mouseover = function() {
	console.log('in');
	this.alpha = 0;
	mapcontinuebutton[1].alpha = 1;
}
mapcontinuebutton[0].mouseout = function() {
	console.log('out');
	this.alpha = 1;
	mapcontinuebutton[1].alpha = 0;
}
mapcontinuebutton[0].click = function() {
	CONTINUESELECT = 1;
	SM.play('click');
	this.callback();
}
mapcontinuebutton[1].position.set(201,162); mapcontinuebutton[1].alpha = 0;
mapretreatbutton[0].position.set(412,161);
mapretreatbutton[0].interactive = true; mapretreatbutton[0].buttonMode = true;
mapretreatbutton[0].mouseover = function() {
	this.alpha = 0;
	mapretreatbutton[1].alpha = 1;
}
mapretreatbutton[0].mouseout = function() {
	this.alpha = 1;
	mapretreatbutton[1].alpha = 0;
}
mapretreatbutton[0].click = function() {
	CONTINUESELECT = 0;
	SM.play('click');
	this.callback();
}
mapretreatbutton[1].position.set(412,161); mapretreatbutton[1].alpha = 0;

var NBSELECT = -1;
mapNBnobutton = [PIXI.Sprite.fromImage('assets/maps/nbno.png'),PIXI.Sprite.fromImage('assets/maps/nbno2.png')];
mapNByesbutton = [PIXI.Sprite.fromImage('assets/maps/nbyes.png'),PIXI.Sprite.fromImage('assets/maps/nbyes2.png')];
mapNBnobutton[0].position.set(226,188); mapNBnobutton[1].position.set(207,170);
mapNByesbutton[0].position.set(441,188); mapNByesbutton[1].position.set(422,170);
mapNBnobutton[1].alpha = 0; mapNByesbutton[1].alpha = 0;
mapNBnobutton[0].buttonMode = true; mapNByesbutton[0].buttonMode = true;
mapNBnobutton[0].interactive = true; mapNByesbutton[0].interactive = true;
mapNBnobutton[0].mouseover = function() {
	this.alpha = 0;
	mapNBnobutton[1].alpha = 1;
}
mapNByesbutton[0].mouseover = function() {
	this.alpha = 0;
	mapNByesbutton[1].alpha = 1;
}
mapNBnobutton[0].mouseout = function() {
	this.alpha = 1;
	mapNBnobutton[1].alpha = 0;
}
mapNByesbutton[0].mouseout = function() {
	this.alpha = 1;
	mapNByesbutton[1].alpha = 0;
}
mapNBnobutton[0].click = function() {
	NBSELECT = 0;
	SM.play('click');
	this.callback();
}
mapNByesbutton[0].click = function() {
	NBSELECT = 1;
	SM.play('click');
	this.callback();
}

var FCFSELECT = -1;
mapFCFnobutton = [PIXI.Sprite.fromImage('assets/maps/fcfno1.png'),PIXI.Sprite.fromImage('assets/maps/fcfno2.png')];
mapFCFyesbutton = [PIXI.Sprite.fromImage('assets/maps/fcfyes1.png'),PIXI.Sprite.fromImage('assets/maps/fcfyes2.png')];
mapFCFnobutton[0].position.set(419,301); mapFCFnobutton[1].position.set(419,301);
mapFCFyesbutton[0].position.set(201,301); mapFCFyesbutton[1].position.set(201,301);
mapFCFnobutton[1].alpha = 0; mapFCFyesbutton[1].alpha = 0;
mapFCFnobutton[0].buttonMode = true; mapFCFyesbutton[0].buttonMode = true;
mapFCFnobutton[0].mouseover = function() {
	this.alpha = 0;
	mapFCFnobutton[1].alpha = 1;
}
mapFCFyesbutton[0].mouseover = function() {
	this.alpha = 0;
	mapFCFyesbutton[1].alpha = 1;
}
mapFCFnobutton[0].mouseout = function() {
	this.alpha = 1;
	mapFCFnobutton[1].alpha = 0;
}
mapFCFyesbutton[0].mouseout = function() {
	this.alpha = 1;
	mapFCFyesbutton[1].alpha = 0;
}
mapFCFnobutton[0].click = function() {
	FCFSELECT = 0;
	SM.play('click');
	this.callback();
}
mapFCFyesbutton[0].click = function() {
	FCFSELECT = 1;
	SM.play('click');
	this.callback();
}

function chResetMapSpritePos() {
	mapShutterTop.position.set(0,0); mapShutterTop.alpha = 0;
	mapShutterBottom.position.set(0,210); mapShutterBottom.alpha = 0;
	map.position.set(MAPOFFX,MAPOFFY);
	mapShutterTop.alpha = mapShutterBottom.alpha = mapDim.alpha = 0;
	bottombar.position.set(0,387);
	bcompass.pivot.set(150,150); bcompass.rotation = Math.PI/4;
	bcompass.position.set(35,445);
	map.alpha = mapship.alpha = bcompass.alpha = bneedle.alpha = bottombar.alpha = mapAirBase.alpha = 1;
	for (var letter in mapnodes) mapnodes[letter].alpha = 1;
	for (const lettr in mapNodeLetters) {
		for (const letterSprite of mapNodeLetters[lettr]) {
			letterSprite.alpha = 1;
		}
	}
	bneedle.pivot.set(14,101); bneedle.rotation = Math.PI/4;
	bneedle.position.set(35,445);
	mapship.pivot.set(mapship.defpivotx,mapship.defpivoty);
}




function addMapNode(letter,type,forceWhite) {
	var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	if (node.aironly && WORLD <= 27 && WORLD > 20) return; //already drawn on Summer 2014 map
	var hidden = node.hidden && (!CHDATA.event.maps[MAPNUM].routes || CHDATA.event.maps[MAPNUM].routes.indexOf(node.hidden) == -1);
	if (hidden) return;
	var nodeG = null;
	if (forceWhite) {
		nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
		nodeG.pivot.set(10,10);
	}
	else if (node.aironly) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeAir.png');
			nodeG.pivot.set(35,22);
		}
	} else if (node.raid) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeRaid.png');
			nodeG.pivot.set(23,19);
			// nodeG.pivot.set(22,18);
		}
	} else if (node.night2 && type != 3) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeN.png');
			nodeG.pivot.set(10,10);
		}
	} else if (node.nightToDay2 && !node.boss) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeND.png');
			nodeG.pivot.set(10,10);
		}
	} else if (node.ambush) {
		if (CHDATA.event.maps[MAPNUM].visited.indexOf(letter) == -1) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			nodeG.pivot.set(10,10);
		} else {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeAmbush.png');
			nodeG.pivot.set(10,27);
		}
	} else if (!node.boss) {
		if (node.dropoff) {
			nodeG = PIXI.Sprite.fromImage('assets/maps/nodeAnchor.png');
			nodeG.pivot.set(25,25);
		} else {
			var img;
			switch (type||node.type) {
				case 1: img = 'assets/maps/nodeR.png'; break;
				case 2: img = 'assets/maps/nodeG.png'; break;
				case 3: img = 'assets/maps/nodeB.png'; break;
				case 4: img = 'assets/maps/nodeP.png'; break;
			}
			nodeG = PIXI.Sprite.fromImage(img);
			nodeG.pivot.set(10,10);
		}
	} else {
		nodeG = PIXI.Sprite.fromImage('assets/maps/nodeBoss.png');
		nodeG.pivot.set(19,24);
	}
	nodeG.position.set(node.x+MAPOFFX,node.y+MAPOFFY);
	if (mapnodes[letter]) stage.removeChild(mapnodes[letter]);
	mapnodes[letter] = nodeG;
	stage.addChildAt(nodeG,stage.getChildIndex(mapship));

	// --- Remove node letters 
	if (mapNodeLetters[letter])
	{
		while (mapNodeLetters[letter].length)
		{
			const letterSprite = mapNodeLetters[letter].pop();
			stage.removeChild(letterSprite);
		}
	}

	// --- Add node letters
	if (node.letterOffsetX !== undefined && node.letterOffsetY !== undefined  && node.letterOffsetX !== null && node.letterOffsetY !== null) {		
		var offset = -10;	
		mapNodeLetters[letter] = [];

		for (const char of letter) {
			if (/[A-Z0-9]/g.test(char.toUpperCase())) {
				const path = "assets/maps/letters/"+ char.toUpperCase() +".png";

				const letterSprite = PIXI.Sprite.fromImage(path);
				letterSprite.pivot.set(offset + node.letterOffsetX, -10 + node.letterOffsetY);
				letterSprite.position.set(node.x+MAPOFFX,node.y+MAPOFFY);
				offset -= 10;
				stage.addChild(letterSprite);
				mapNodeLetters[letter].push(letterSprite);
				stage.addChildAt(letterSprite,stage.getChildIndex(nodeG));
			}
		}
	}

	console.log(stage.getChildIndex(map));
}




function mapMoveShip(ship,x,y) {
	var dir = (ship.x > x)? -1: 1;
	if (!(ship.scale.x + dir)) {
		var timer = 20;
		updates.push([function() {
			ship.scale.x += .1*dir;
			if (--timer <= 0) {
				ship.scale.x = dir;
				return true;
			}
			return false;
		},[]]);
	}
	addTimeout(function() {
		var speedX = (x - ship.x)/120;
		var speedY = (y - ship.y)/120;
		var timer = 120;
		updates.push([function() {
			ship.x += speedX;
			ship.y += speedY;
			if (--timer <= 0) {
				ship.x = x; ship.y = y;
				return true;
			}
			return false;
		},[]]);
	}, 400);
	
	addTimeout(function() { ecomplete = true; }, 2400);
}

var FORMSELECTED;
function mapBattleNode(ship,letter) {
	if (mapnodes[letter]) stage.removeChild(mapnodes[letter]);
	addMapNode(letter);
	let node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	if ((node.aironly || node.raid || node.night2 || node.nightToDay2 || node.ambush) && (WORLD > 27 || WORLD <= 20)) addMapNode(letter);

	var radarstop = false, radartimer = 270;
	updates.push([function() {
		if (radartimer%90==0||radartimer%90==60) createRadar(ship.x,ship.y);
		if (radartimer%90==0&&radartimer>90) SM.play('mapradar',.5);
		if (--radartimer <= 0) radartimer = 90;
		return radarstop;
	},[]]);
	
	if (MAPDATA[WORLD].maps[MAPNUM].nodes[letter].subonly) {
		var submarine = PIXI.Sprite.fromImage('assets/maps/submarine.png');
		submarine.position.set(mapship.x+10,mapship.y-30);
		submarine.alpha = 0; submarine.scale.set(.75);
		stage.addChildAt(submarine,stage.getChildIndex(mapship)+1);
		updates.push([function() {
			if (radarstop) {
				submarine.alpha -= .05;
				if (submarine.alpha <= 0) {
					stage.removeChild(submarine);
					return true;
				}
			} else {
				if (submarine.alpha < 1) {
					submarine.alpha += .015;
					if (submarine.alpha > 1) submarine.alpha = 1;
					submarine.y-=.5;
				}
			}
			return false;
		},[]]);
	}
	
	addTimeout(function() {
		mapShutterTop.alpha = mapShutterBottom.alpha = mapDim.alpha = 0;
		updates.push([function() {
			mapShutterTop.alpha += .1;
			mapShutterBottom.alpha += .1;
			mapDim.alpha += .05;
			if (mapShutterTop.alpha >= 1) { mapShutterTop.alpha=mapShutterBottom.alpha=1; mapDim.alpha = .5;}
			return (mapShutterTop.alpha >= 1);
		},[]]);
	}, 3000);
	
	var formcombined = (CHDATA.fleets.combined > 0 && !node.night && !node.night2);
	var afterSelect = function() {
		if (formcombined) addTimeout(function() { chHideFormSelectC(); }, 1);
		else addTimeout(function() { chHideFormSelect(); }, 1);
		radarstop = true;
		updates.push([function() {
			mapDim.alpha -= .05;
			return (mapDim.alpha <= 0);
		},[]]);
		addTimeout(function() {
			updates.push([function() {
				map.alpha -= .025;
				bottombar.alpha -= .025;
				bcompass.alpha -= .025;
				bneedle.alpha -= .025;
				mapship.alpha -= .025;
				mapAirBase.alpha -= .025;
				bcompass.x -= 4;
				bneedle.x -= 4;
				bcompass.rotation -= .05;
				bottombar.y += 2;
				for (var lettr in mapnodes) mapnodes[lettr].alpha -= .025;
				for (const lettr in mapNodeLetters) {
					for (const letterSprite of mapNodeLetters[lettr]) {
						letterSprite.alpha -= .025;
					}
				}
				return (map.alpha <= 0);
			},[]]);
			SM.fadeBGM();
		}, 500);
		if (node.ambush) {
			addTimeout(function() { SM.play('ambush'); }, 2000);
			addTimeout(function() { ecomplete = true; }, 4000);
		} else {
			addTimeout(function() { ecomplete = true; }, 2000);
		}	
	}
	
	let formDefault = (!formcombined)? 1 : (CHSHIPCOUNT.escort.total >= 4)? 14 : 12;
	FORMSELECTED = 0;
	if (node.ambush) addTimeout(function() { FORMSELECTED = formDefault; afterSelect(); }, 3200);
	else if (formcombined) addTimeout(function() { chShowFormSelectC(afterSelect); }, 3200);
	else if (CHSHIPCOUNT.total >= 4) addTimeout(function() { chShowFormSelect(afterSelect); }, 3200);
	else addTimeout(function() { FORMSELECTED = 1; afterSelect(); }, 3200);
	
}

function mapResourceNode(ship,letter) {
	if (!mapnodes[letter]) addMapNode(letter);
	var radarstop = false, radartimer = 90;
	updates.push([function() {
		if (radartimer==90||radartimer==60) createRadar(ship.x,ship.y,'W');
		if (radartimer==90) SM.play('mapradar',.5);
		if (--radartimer <= 0) radartimer = 90;
		return radarstop;
	},[]]);
	
	var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	// var num = node.min + Math.floor(Math.random()*(node.max-node.min+5)/5)*5;
	var num;
	if (node.resource != 0) {
		let amount = node.amount || [0];
		num = amount[Math.floor(Math.random()*amount.length)];
	} else {
		var ships = chGetShips(true);
		var transportCalc = MAPDATA[WORLD].maps[MAPNUM].transportCalc || MAPDATA[WORLD].transportCalc;
		num = transportCalc(ships,'A') + ' - ' + transportCalc(ships,'S');
	}
	var res = createResource(node.resource,num);
	res.alpha = 0; res.position.set(ship.x-18,ship.y-10); res.counter = 40;
	stage.addChild(res);
	updates.push([function() {
		res.y -= 1;
		res.counter--;
		if (res.counter > 0) res.alpha = Math.min(res.alpha+.1,1);
		else res.alpha -= .05;
		if (res.alpha <= 0) {
			stage.removeChild(res);
			return true;
		}
		return false;
	},[]]);
	
	addTimeout(function() { radarstop = true; }, 2600);
	addTimeout(function() { mapPhase(); ecomplete = true; }, 3600);
}

function mapIllusionNode(ship,letter) {
	if (!mapnodes[letter]) addMapNode(letter,1);
	var radarstop = false, radartimer = 90;
	updates.push([function() {
		if (radartimer==90||radartimer==60) createRadar(ship.x,ship.y);
		if (radartimer==90) SM.play('mapradar',.5);
		if (--radartimer <= 0) radartimer = 90;
		return radarstop;
	},[]]);
	
	addTimeout(function() { radarstop = true; }, 1300);
	addTimeout(function() {
		recycle(mapnodes[letter]);
		addMapNode(letter,3);
	}, 1800);
	addTimeout(function() { mapPhase(); ecomplete = true; }, 2300);
}

function mapStormNode(ship,letter) {
	var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	var numradars = 0, lostpercent, lostshow;
	for (var i=0; i<FLEETS1[0].ships.length; i++) {
		for (var j=0; j<FLEETS1[0].ships[i].equips.length; j++) {
			var equip = FLEETS1[0].ships[i].equips[j];
			if (!equip) continue;
			if (equip.type == RADARS || equip.type == RADARL || equip.type == RADARXL) { numradars++; break; }
		}
	}
	switch (numradars) {
		case 0: lostpercent = .4; break;
		case 1: lostpercent = .3; break;
		case 2: lostpercent = .24; break;
		default: lostpercent = .2; break;
	}
	if (node.lostMax && node.lostMax < lostpercent) lostpercent = node.lostMax;
	var resname = (node.resource == 1)? 'fuelleft' : 'ammoleft';
	lostshow = Math.floor(FLEETS1[0].ships[0][resname]*lostpercent*10);
	for (var i=0; i<FLEETS1[0].ships.length; i++) {
		FLEETS1[0].ships[i][resname] *= (1-lostpercent);
	}

	if (!mapnodes[letter]) addMapNode(letter);
	var radarstop = false, radartimer = 90;
	updates.push([function() {
		if (radartimer==90||radartimer==60) createRadar(ship.x,ship.y,'W');
		if (--radartimer <= 0) radartimer = 90;
		return radarstop;
	},[]]);
	var storm = getFromPool('storm','assets/maps/storm.png');
	storm.pivot.set(30,30); storm.rotation = 0;
	var stormwrap = new PIXI.Container();
	stormwrap.addChild(storm);
	stormwrap.position.set(ship.x,ship.y); stormwrap.scale.y = .5;
	stage.addChildAt(stormwrap,stage.getChildIndex(mapship));// stage.swapChildren(stormwrap,mapship);
	var stormtimer = 120, radius = 0;
	SM.play('storm');
	updates.push([function() {
		storm.rotation += .1;
		mapship.pivot.set(radius*Math.cos(storm.rotation)*mapship.scale.x+mapship.defpivotx,radius*Math.sin(storm.rotation)+mapship.defpivoty);
		stormtimer--;
		if (stormtimer >= 115) radius += 4;
		else if (stormtimer <= 100) radius -= .2;
		if (stormtimer<=0) {
			mapship.pivot.set(mapship.defpivotx,mapship.defpivoty);
			stage.removeChild(stormwrap); recycle(storm);
			return true;
		}
		return false;
	},[]]);
	
	addTimeout(function() {
		var res = createResource(node.resource,lostshow);
		res.position.set(ship.x-9,ship.y-9); res.counter = 60; res.vspeed = -3; stage.addChild(res);
		updates.push([function() {
			res.x -= 1;
			res.y += res.vspeed;
			res.vspeed += .1;
			res.counter--;
			if (res.counter < 20) res.alpha -= .05;
			if (res.counter <= 0) {
				stage.removeChild(res);
				return true;
			}
			return false;
		},[]]);
	}, 1500);
	
	addTimeout(function() { radarstop = true; }, 2600);
	addTimeout(function() { mapPhase(); ecomplete = true; }, 3600);
	
}

function createResource(type,num) {
	var res = new PIXI.Container();
	var icon;
	if (type == null) type = 1;
	switch(type) {
		case 1: icon = PIXI.Sprite.fromImage('assets/stats/fuel.png'); break;
		case 2: icon = PIXI.Sprite.fromImage('assets/stats/ammo.png'); break;
		case 3: icon = PIXI.Sprite.fromImage('assets/stats/steel.png'); break;
		case 4: icon = PIXI.Sprite.fromImage('assets/stats/baux.png'); break;
		case 5: icon = PIXI.Sprite.fromImage('assets/stats/bucket.png'); break;
		case 6: icon = PIXI.Sprite.fromImage('assets/stats/devmat.png'); break;
		case 7: icon = PIXI.Sprite.fromImage('assets/stats/ibuild.png'); break;
		case 8: icon = PIXI.Sprite.fromImage('assets/stats/box1.png'); break;
		case 9: icon = PIXI.Sprite.fromImage('assets/stats/box2.png'); break;
		case 10: icon = PIXI.Sprite.fromImage('assets/stats/box3.png'); break;
		case 0: icon = PIXI.Sprite.fromImage('assets/items/25.png'); icon.y = -8; break;
	}
	res.addChild(icon);
	var text = new PIXI.Text(num.toString(),{font:'14px "Arno Pro Semibold"',fill:'#ffffff'});
	text.x = 22;
	res.addChild(text);
	return res;
}


function chShowFormSelect(callback) {
	let vanguard = MAPDATA[WORLD].allowVanguard;
	let num = (vanguard)? 6 : 5;
	for (var i=0; i<num; i++) {
		if (i==2 && CHSHIPCOUNT.total < 5) continue;
		if (i==3 || i==4) {
			if (vanguard) formboxes[i].x = formboxes[i-3].x;
			else formboxes[i].x = formboxes[i].xOrig;
			formbuttons[i][0].x = formbuttons[i][1].x = formboxes[i].x + 10;
		}
		stage.addChild(formboxes[i]);
		stage.addChild(formbuttons[i][1]);
		stage.addChild(formbuttons[i][0]);
		formbuttons[i][0].callback = callback;
		for (var j=i*6; j<i*6+6; j++) {
			stage.addChild(formdots[j]);
			if (i >= 3) {
				let offset = formboxes[i].x - formboxes[i].xOrig || 0;
				formdots[j].position.set(FORMDOTPOS[j][0]+offset,FORMDOTPOS[j][1]);
			}
		}
	}
}

function chHideFormSelect() {
	for (var i=0; i<formboxes.length; i++) {
		stage.removeChild(formboxes[i]);
		stage.removeChild(formbuttons[i][1]);
		stage.removeChild(formbuttons[i][0]);
		formbuttons[i][0].alpha = 1;
	}
	for (var i=0; i<formdots.length; i++) stage.removeChild(formdots[i]);
}

function chShowFormSelectC(callback) {
	for (var i=0; i<4; i++) {
		if (i==2 && CHSHIPCOUNT.escort.total < 5) continue;
		if (i==3 && CHSHIPCOUNT.escort.total < 4) continue;
		stage.addChild(formboxesc[i]);
		stage.addChild(formbuttonsc[i][1]);
		stage.addChild(formbuttonsc[i][0]);
		formbuttonsc[i][0].callback = callback;
	}
}

function chHideFormSelectC() {
	for (var i=0; i<4; i++) {
		stage.removeChild(formboxesc[i]);
		stage.removeChild(formbuttonsc[i][1]);
		stage.removeChild(formbuttonsc[i][0]);
		formbuttonsc[i][0].alpha = 1;
	}
}



function spinCompass(result,fairy) {
	stage.addChild(mcompass);
	stage.addChild(mneedle);
	mcompass.rotation = 0;
	updates.push([function(compass,needle) {
		compass.alpha += .05; needle.alpha = compass.alpha;
		compass.scale.set(compass.scale.x-.025); needle.scale.set(compass.scale.x);
		if (compass.alpha >= 1) {
			compass.alpha = needle.alpha = 1; compass.scale.set(1); needle.scale.set(1);
			return true;
		}
		return false;
	},[mcompass,mneedle]]);
	
	addTimeout(function() {
		SCREENCLICKFUNCTION = function() {
			SCREENCLICKFUNCTION = screenClickBlank;
			addTimeout(function() {
				var speed = .6;
				mcompass.rotation = result - 11.97 + Math.random()*.1;
				SM.play('mapcompass',.25);
				updates.push([function() {
					mcompass.rotation += speed;
					speed *= .95;
					if (speed <= .001) return true;
					return false;
				},[]]);
			}, 1000);
			
			addTimeout(function() {
				updates.push([function(compass,needle) {
					compass.alpha -= .05; needle.alpha = compass.alpha;
					compass.scale.set(compass.scale.x+.025); needle.scale.set(compass.scale.x);
					if (compass.alpha <= 0) {
						return true;
					}
					return false;
				},[mcompass,mneedle]]);
			}, 4000);
			
			addTimeout(function() {
				stage.removeChild(mcompass);
				stage.removeChild(mneedle);
				ecomplete = true;
			}, 5000);
		};
	}, 400);
	
	
}

function mapSendScout(ship,node,isSuccess) {
	var scout = getFromPool('scout','assets/maps/recon.png');
	scout.pivot.set(37,29);
	scout.position.set(ship.x,ship.y); scout.scale.set(0); scout.timer = 0;
	stage.addChild(scout);
	var startx = ship.x, starty = ship.y - 10;
	var targetx = node.x + MAPOFFX, targety = node.y + MAPOFFY;
	if (!isSuccess) {
		targetx = startx + (targetx - startx)*.4;
		targety = starty + (targety - starty)*.4;
	}
	var dir = (ship.x < targetx)? 1 : -1;
	scout.scale.x *= dir;
	
	SM.play('scout');
	updates.push([function() {
		scout.timer++;
		if (scout.timer <=10) scout.scale.set(scout.scale.x+dir*.1,scout.scale.y+.1);
		if (scout.timer > 60 && scout.timer < 85) scout.scale.x -= .08*dir;
		if (scout.timer >=140) scout.scale.set(scout.scale.x+dir*.1,scout.scale.y-.1);
		scout.x = startx + (targetx-startx)*Math.sin(Math.PI*scout.timer/150);
		scout.y = starty + (targety-starty)*Math.sin(Math.PI*scout.timer/150);
		scout.pivot.y = 29 - 20*Math.sin(2*Math.PI*scout.timer/150);
		if (scout.timer >= 150) {
			recycle(scout);
			return true;
		}
		return false;
	},[]]);
	
	addTimeout(function() { ecomplete = true; }, 3000);
}

function mapSortieItems(items) {
	let bubbles = [];
	if (items.supply) {
		let bubble = getFromPool('bubble','assets/maps/bubbleSupply.png');
		bubble.pivot.set(61,60);
		bubble.scale.y = 0;
		bubble.position.set(mapship.x-20,mapship.y-15);
		stage.addChild(bubble);
		bubbles.push(bubble);
	}
	if (items.ration) {
		let bubble = getFromPool('bubble','assets/maps/bubbleRation.png');
		bubble.pivot.set(0,60);
		bubble.scale.y = 0;
		bubble.position.set(mapship.x+20,mapship.y-15);
		stage.addChild(bubble);
		bubbles.push(bubble);
	}
	if (items.repair) {
		let bubble = getFromPool('bubble','assets/maps/bubbleRepair.png');
		bubble.pivot.set(0,60);
		bubble.scale.y = 0;
		bubble.position.set(mapship.x+20,mapship.y-15);
		stage.addChild(bubble);
		bubbles.push(bubble);
	}
	for (let bubble of bubbles) {
		updates.push([function() {
			bubble.scale.y += .1;
			if (bubble.scale.y >= 1) {
				bubble.scale.y = 1;
				return true;
			}
		},[]]);
		addTimeout(function() {
			updates.push([function() {
				bubble.scale.y -= .1;
				if (bubble.scale.y <= 0) {
					bubble.scale.y = 0;
					recycle(bubble);
					return true;
				}
			},[]]);
		},2000);
	}
	
	addTimeout(function() { ecomplete = true; }, 2100);
}

function createRadar(x,y,imagec) {
	if (!imagec) imagec = '';
	var radar = getFromPool('mapradar'+imagec,'assets/maps/radar'+imagec+'.png');
	radar.pivot.set(80,80); radar.scale.set(0); radar.alpha = 1; radar.notpersistent = true;
	radar.position.set(x,y);
	stage.addChildAt(radar,stage.getChildIndex(mapship));
	updates.push([function(radar) {
		radar.scale.set(radar.scale.x + .01);
		if (radar.scale.x > .75) radar.alpha -= .05;
		if (radar.alpha <= 0) {
			recycle(radar);
			return true;
		}
		return false;
	},[radar]]);
}



// if (localStorage.data) {
	
	/*var testships = [];
	var choose = [];
	for (var sid in CHDATA.ships) {
		if (CHDATA.ships[sid].LVL >= 70 && CHDATA.ships[sid].items[2] != -1) choose.push(sid);
	}
	for (var i=0; i<6; i++) {
		var s;
		do {
			s = choose[Math.floor(Math.random()*choose.length)];
		} while (testships.indexOf(s) != -1);
		testships.push(s);
	}
	console.log(testships);
	// testships = [ "x11322", "x77", "x10176", "x1281", "x3494", "x5385" ];
	testships[5] = 'x110';
	chLoadFleet(testships);
	chFillTable(testships);*/
	
	
// }

var node = null;
var curletter = 'Start';
var CHSHIPCOUNT; //= {DD:2,CA:2,SS:2};
var ONSORTIE = false;
var playSoundAfterSortie = false;

var testLOS = 101;

function chPlayerStart() {
	CHDATA.sortie = {};
	
	curletter = (MAPDATA[WORLD].maps[MAPNUM].startCheck)? MAPDATA[WORLD].maps[MAPNUM].startCheck(CHSHIPCOUNT) : 'Start';
	if (MAPDATA[WORLD].maps[MAPNUM].startCheckRule && MAPDATA[WORLD].maps[MAPNUM].startCheckRule.length) {
		curletter = '';
		let index = 0;
		let rules = MAPDATA[WORLD].maps[MAPNUM].startCheckRule;

		while (!curletter) {
			
			rule = rules[index];

			if (!rule) {
				alert("error in branching 4");
				return;
			}

			if (rule.ruleCanBeChecked())
				curletter = rule.getRouting(CHSHIPCOUNT);
	
			index++;
		}
	}

	if (started) {
		console.log('reset');
		SM.stopBGM();
		stage = STAGEMAP;
		eventqueue = []; e = 0;
		bossbar.active = false;
	}
	node = MAPDATA[WORLD].maps[MAPNUM].nodes[curletter];

	// --- Apply start bonuses
	if (node.bonuses) {
		for (const bonus of node.bonuses) {
			bonus.applyBonuses();
		}
	}

	if (MAPDATA[WORLD].maps[MAPNUM].startBonus) {
		for (const bonus of MAPDATA[WORLD].maps[MAPNUM].startBonus) {
			bonus.applyBonuses();
		}
	}

	var mapshipindex = stage.getChildIndex(mapship);
	stage.removeChild(mapship);
	switch(CHDATA.fleets.combined) {
		case 1: mapship = mapshipCTF; break;
		case 2: mapship = mapshipSTF; break;
		case 3: mapship = mapshipTTF; break;
		default: mapship = mapshipS; break;
	}
	stage.addChildAt(mapship,mapshipindex);
	mapship.position.set(node.x+MAPOFFX,node.y+MAPOFFY);
	var bossnum = (typeof MAPDATA[WORLD].maps[MAPNUM].bossnode === 'object')? MAPDATA[WORLD].maps[MAPNUM].bossnode[0] : MAPDATA[WORLD].maps[MAPNUM].bossnode;
	var letterboss = (typeof bossnum == 'string')? bossnum : String.fromCharCode(64+bossnum);
	var xboss = letterboss != '\x00' ? MAPDATA[WORLD].maps[MAPNUM].nodes[letterboss].x : 0;
	mapship.scale.set(((xboss < node.x)? -1 : 1),1);
	chLoadMap(MAPNUM);
	if (CHDATA.fleets.lbas1 || CHDATA.fleets.lbas2 || CHDATA.fleets.lbas3) {
		lbSelectPhase();
	} else {
		mapPhase(true);
	}
	if (!started) animate();
	started = true;
	ONSORTIE = true;
}

function chLoadMap(mapnum) {
	map.removeChildren();
	world = CHDATA.event.world;
	if(world > 97){
		world = MAPDATA[world].maps[mapnum].world;
	}
	const mapPath = MAPDATA[world].maps[mapnum].mapImage ? MAPDATA[world].maps[mapnum].mapImage : 'assets/maps/'+world+'/'+mapnum+'.png';
	
	map.addChild(PIXI.Sprite.fromImage(mapPath));


	if (MAPDATA[WORLD].maps[mapnum].hiddenRoutes) {
		if (!CHDATA.event.maps[mapnum].routes) CHDATA.event.maps[mapnum].routes = [];
		for (var key in MAPDATA[WORLD].maps[mapnum].hiddenRoutes) {
			if (CHDATA.event.maps[mapnum].routes.indexOf(parseInt(key)) == -1) continue;
			var route = MAPDATA[WORLD].maps[mapnum].hiddenRoutes[key];
			for (var image of route.images) {
				const routeImagePath = image.customName ? image.customName : 'assets/maps/'+world+'/'+image.name;
				var spr = PIXI.Sprite.fromImage(routeImagePath);
				spr.position.set(image.x,image.y);
				map.addChild(spr);
			}
		}
	}

	for (var letter in mapnodes) { stage.removeChild(mapnodes[letter]); }
	mapnodes = {};

	for (const letter in mapNodeLetters) {
		for (const letterSprite of mapNodeLetters[letter]) {
			stage.removeChild(letterSprite);
		}
		delete mapNodeLetters[letter];
	}

	for (var i=0; i<CHDATA.event.maps[mapnum].visited.length; i++) {
		var letter = CHDATA.event.maps[mapnum].visited[i];
		if (letter == 'Start') continue;
		if (MAPDATA[WORLD].maps[mapnum].nodes[letter].type==3) addMapNode(letter,1);
		else addMapNode(letter);
	}
	if (WORLD > 27 || WORLD <= 20) { //fill unvisited air nodes
		for (var letter in MAPDATA[WORLD].maps[MAPNUM].nodes) {
			var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
			if (node.replacedBy && CHDATA.event.maps[MAPNUM].routes.indexOf(MAPDATA[WORLD].maps[MAPNUM].nodes[node.replacedBy].hidden) != -1) continue;
			if ((node.aironly||node.raid||node.night2||node.nightToDay2||node.ambush) && CHDATA.event.maps[mapnum].visited.indexOf(letter) == -1) addMapNode(letter);
		}
	}

	for (var letter in MAPDATA[WORLD].maps[MAPNUM].nodes) {
		var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
		if (node.replacedBy && CHDATA.event.maps[MAPNUM].routes.indexOf(MAPDATA[WORLD].maps[MAPNUM].nodes[node.replacedBy].hidden) != -1) continue;
		if (node.letterOffsetX === undefined && node.letterOffsetY === undefined) continue;
		if (node.letterOffsetX === null && node.letterOffsetY === null) continue;
		if (CHDATA.event.maps[mapnum].visited.indexOf(letter) == -1) addMapNode(letter, null, true);
	}
	
	mapAirBase.visible = false;
	if (MAPDATA[WORLD].maps[MAPNUM].lbX) {
		mapAirBase.visible = true;
		mapAirBase.position.set(MAPDATA[WORLD].maps[MAPNUM].lbX + MAPOFFX, MAPDATA[WORLD].maps[MAPNUM].lbY + MAPOFFY);
	}
	
	chResetMapSpritePos();
}


function mapPhase(first) {
	if (first) {
		SM.playBGM(MAPDATA[WORLD].maps[MAPNUM].bgmMap);
		var hiddenRoutes = MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes;
		if (hiddenRoutes) {
			let routeKey = checkRouteUnlocks(hiddenRoutes);
			if (routeKey) {
				eventqueue.push([function() {
					addTimeout(function() { showRouteUnlock(hiddenRoutes[routeKey],routeKey); }, 1000);
					addTimeout(function() { ecomplete = true; }, 4000);
				},[]]);
				if (WORLD >= 42) { //early-fall onward force return
					eventqueue.push([endMap,[]]);
					return;
				}
			}
		}
	} else {
		pushShipStatusToUI();
	}

	var curnode = MAPDATA[WORLD].maps[MAPNUM].nodes[curletter];

	if (MAPDATA[WORLD].maps[MAPNUM].transport && MAPDATA[WORLD].maps[MAPNUM].transport == curletter) {
		CHDATA.sortie.reachedTransport = true;
	}

	let end = curnode.end;
	
	if (curnode.endRules && curnode.endRules.length) {
		let rule = curnode.endRules[0];

		if (rule.ruleCanBeChecked())
			end = rule.getRouting(CHSHIPCOUNT);
	}

	if (curnode.type == 3 || curnode.type == 2) {
		if (MAPDATA[WORLD].maps[MAPNUM].debuffRules) {
			MAPDATA[WORLD].maps[MAPNUM].debuffRules.checkGimmickSteps(curletter);
		}

		if (MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes) {
			let hiddenRoutes = MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes;
	
			for (var key in hiddenRoutes) {
				key = parseInt(key);
		
				hiddenRoutes[key].unlockRules.checkGimmickSteps(curletter);
			}
		}
	}

	if (end) {
		if (curnode.dropoff || curnode.type == 3) {
			if (curnode.debuffGive) {
				if (!CHDATA.event.maps[MAPNUM].debuff) CHDATA.event.maps[MAPNUM].debuff = {};
				curnode.debuffGive();
			}
		}
		if (curnode.dropoff) {
			if (!MAPDATA[WORLD].maps[MAPNUM].currentBoss || MAPDATA[WORLD].maps[MAPNUM].currentBoss == curletter) {
				var transportCalc = MAPDATA[WORLD].maps[MAPNUM].transportCalc || MAPDATA[WORLD].transportCalc;
				CHDATA.event.maps[MAPNUM].hp -= transportCalc(chGetShips(true),'S');
				if (CHDATA.event.maps[MAPNUM].hp < 0) CHDATA.event.maps[MAPNUM].hp = 0;
			}
		}
		eventqueue.push([endMap,[]]);
		return;
	}

	var nextletter = "";
	let rule = null;
	var index = 0;
	var nextnode;

	if (curnode.rules) {
		let rules = curnode.rules;

		while (!nextletter) {
			
			rule = rules[index];

			if (!rule) {
				alert("error in branching 3");
				return;
			}
	
			if (rule.ruleCanBeChecked())
				nextletter = rule.getRouting(CHSHIPCOUNT);
	
			if (nextletter) rule = rule.getValidatedRule(CHSHIPCOUNT);	
	
			index++;
		}
		
		if (rule.type == 'routeSelect') {
			eventqueue.push([selectNode,[rule.routeSelect]]);
			return;
		}

		if (!nextletter) {
			alert("error in branching");
			nextletter = 'A';
		}
	
		mapPhase2(nextletter, rule);
	} else {
		if (curnode.route) nextletter = curnode.route;
		else if (curnode.routeC) nextletter = curnode.routeC(CHSHIPCOUNT);
		else if (curnode.routeR) {
			var r = Math.random(), sum = 0;
			for (var letter in curnode.routeR) {
				sum += curnode.routeR[letter];
				if (r < sum) { nextletter = letter; break; }
			}
		} else if (curnode.routeL) {
			nextletter = checkELoS33(getELoS33(1,curnode.routeLC || 1,CHDATA.fleets.combined),curnode.routeL);
		} else if (curnode.routeS) {
			eventqueue.push([selectNode,[curnode.routeS]]);
		}
		
		if (!curnode.routeS) mapPhase2(nextletter);
	}
}

/**
 * 
 * @param {*} nextletter 
 * @param {ChRule} rule 
 */
function mapPhase2(nextletter, rule) {
	var curnode = MAPDATA[WORLD].maps[MAPNUM].nodes[curletter];
	var nextnode = MAPDATA[WORLD].maps[MAPNUM].nodes[nextletter];
	if (CHDATA.event.maps[MAPNUM].visited.indexOf(nextletter) == -1) CHDATA.event.maps[MAPNUM].visited.push(nextletter);
	
	// --- Mark node as visited in this sortie
	if (!CHDATA.sortie.beenThrough) CHDATA.sortie.beenThrough = [];
	CHDATA.sortie.beenThrough[nextletter] = CHDATA.sortie.beenThrough[nextletter] ? CHDATA.sortie.beenThrough[nextletter] + 1 : 1;
	
	eventqueue.push([wait,[1000]]);
	

	if (rule) {
		if (rule.getSpinCompass()) {
			var dir = Math.atan2(curnode.x-nextnode.x,curnode.y-nextnode.y);
			eventqueue.push([spinCompass,[dir]]);
		}
		if (rule.getShowLosPlane()) {
			var targetLetter = rule.conditionCheckedNode;
			
			eventqueue.push([mapSendScout,[mapship,MAPDATA[WORLD].maps[MAPNUM].nodes[targetLetter],(nextletter==targetLetter)]]);
		}
	}
	else {
		if ((curnode.routeC && !curnode.showNoCompass) || curnode.routeR) {
			var dir = Math.atan2(curnode.x-nextnode.x,curnode.y-nextnode.y);
			eventqueue.push([spinCompass,[dir]]);
		}
		if (curnode.routeL || curnode.showLoSPlane) {
			var targetLetter;
			if (curnode.showLoSPlane) {
				targetLetter = curnode.showLoSPlane;
			} else {
				var LOSs = Object.keys(curnode.routeL).sort(function(a,b) { return (parseInt(a) > parseInt(b))? -1:1; } );
				targetLetter = curnode.routeL[LOSs[0]];
			}
			eventqueue.push([mapSendScout,[mapship,MAPDATA[WORLD].maps[MAPNUM].nodes[targetLetter],(nextletter==targetLetter)]]);
		}
	}

	eventqueue.push([mapMoveShip,[mapship,nextnode.x+MAPOFFX,nextnode.y+MAPOFFY]]);
	
	var enemyRaid = MAPDATA[WORLD].maps[MAPNUM].enemyRaid;
	if (enemyRaid) {
		var diff = CHDATA.event.maps[MAPNUM].diff;
		if (CHDATA.sortie.raidCounter === undefined) { //first node won't have
			CHDATA.sortie.raidCounter = enemyRaid.chance[diff];
			CHDATA.sortie.raidNum = 0;
		} else if (CHDATA.sortie.raidNum < enemyRaid.maxNum[diff]) {
			CHDATA.sortie.raidCounter += enemyRaid.chance[diff];
			if (Math.random() < CHDATA.sortie.raidCounter) {
				eventqueue.push([mapEnemyRaid,[]]);
				eventqueue.push([prepEnemyRaid,[]]);
				CHDATA.sortie.raidCounter -= 1;
				CHDATA.sortie.raidNum++;
			}
		}
	}
	
	if (nextnode.repair) {
		if (chAnchorageRepair()) {
			eventqueue.push([mapSortieItems,[{repair:true}]]);
		}
	}
	if (nextnode.boss) {
		let result = chApplySortieItems();
		if (result.supply || result.ration) {
			eventqueue.push([mapSortieItems,[result]]);
		}
	}
	
	switch (nextnode.type) {
		case 1: //battle
			eventqueue.push([mapBattleNode,[mapship,nextletter]]);
			eventqueue.push([prepBattle,[nextletter]]);
			break;
		case 2: //res
			eventqueue.push([mapResourceNode,[mapship,nextletter]]);
			break;
		case 3: //illusion
			eventqueue.push([mapIllusionNode,[mapship,nextletter]]);
			break;
		case 4: //storm
			eventqueue.push([mapStormNode,[mapship,nextletter]]);
			break;
		default:
			break;
	}
	
	curletter = nextletter;
}

function lbSelectPhase() {
	SM.playBGM(MAPDATA[WORLD].maps[MAPNUM].bgmMap);
	
	CHDATA.sortie.lbasNodes = {};
	var currentBase = 1;
	if (currentBase == 1 && !CHDATA.fleets.lbas1) currentBase = 2;
	if (currentBase == 2 && !CHDATA.fleets.lbas2) currentBase = 3;
	if (currentBase > MAPDATA[WORLD].maps[MAPNUM].lbas) {
		addTimeout(function() { mapPhase(); ecomplete = true; }, 1);
		return;
	}
	var currentNum = 0;
	var areas = [];
	var crosshairs = [];
	var messages = [];
	var nodeSelected = '';
	
	var afterSelect = function() {
		var node = MAPDATA[WORLD].maps[MAPNUM].nodes[nodeSelected];
		if (!CHDATA.sortie.lbasNodes[nodeSelected]) CHDATA.sortie.lbasNodes[nodeSelected] = [];
		var concentrated = CHDATA.sortie.lbasNodes[nodeSelected].indexOf(currentBase) != -1;
		CHDATA.sortie.lbasNodes[nodeSelected].push(currentBase);
		currentNum++;
		
		var crosshair;
		if (concentrated) crosshair = getFromPool('crosshair3','assets/maps/lbcrosshairs3.png');
		else if (currentNum == 2) crosshair = getFromPool('crosshair2','assets/maps/lbcrosshairs2.png');
		else crosshair = getFromPool('crosshair1','assets/maps/lbcrosshairs1.png');
		crosshair.pivot.set(28);
		crosshair.position.set(node.x+MAPOFFX,node.y+MAPOFFY);
		crosshairs.push(crosshair);
		stage.addChild(crosshair);
		SM.play('lbasselect');

		if (currentNum >= 2) {
			for (var i=0; i<areas.length; i++) {
				areas[i].interactive = false;
			}
			messages[currentBase-1].visible = false;
			messageG.visible = true;
		}
		messageCancel.visible = true;
	}
	
	var afterContinue = function() {
		var num;
		for (num=currentBase+1; num<=3; num++) {
			if (CHDATA.fleets['lbas'+num]) {
				currentBase = num;
				currentNum = 0;
				break;
			}
		}
		if (num <= 3) {
			for (var i=0; i<areas.length; i++) {
				let n = MAPDATA[WORLD].maps[MAPNUM].nodes[areas[i].letter];
				let dist = Array.isArray(n.distance) ? n.distance[MAPDATA[WORLD].maps[MAPNUM].lbPart-1] : n.distance;
				areas[i].interactive = (dist <= getLBASRange(CHDATA.ships['z'+currentBase]));
			}
			for (var i=0; i<crosshairs.length; i++) {
				recycle(crosshairs[i]);
			}
			crosshairs = [];
			messageG.visible = false;
			messageCancel.visible = false;
			messages[currentBase-1].visible = true;
		} else {
			for (var i=0; i<areas.length; i++) {
				areas[i].interactive = areas[i].buttonMode = false;
			}
			for (var i=0; i<crosshairs.length; i++) {
				recycle(crosshairs[i]);
			}
			for (var i=0; i<messages.length; i++) {
				messages[i].interactive = messages[i].buttonMode = false;
			}
			addTimeout(function() {
				for (let area of areas) stage.removeChild(area);
				for (let message of messages) recycle(message);
				mapPhase();
				ecomplete = true;
			}, 1);
		}
		SM.play('lbassend');
	}
	
	var afterCancel = function() {
		for (var letter in CHDATA.sortie.lbasNodes) {
			var arrNew = [];
			for (var i=0; i<CHDATA.sortie.lbasNodes[letter].length; i++) {
				if (CHDATA.sortie.lbasNodes[letter][i] != currentBase) {
					arrNew.push(CHDATA.sortie.lbasNodes[letter][i]);
				}
			}
			CHDATA.sortie.lbasNodes[letter] = arrNew;
		}
		for (var letter in CHDATA.sortie.lbasNodes) {
			if (CHDATA.sortie.lbasNodes[letter].length <= 0) delete CHDATA.sortie.lbasNodes[letter];
		}
		currentNum = 0;
	
		for (var i=0; i<areas.length; i++) {
			let n = MAPDATA[WORLD].maps[MAPNUM].nodes[areas[i].letter];
			let dist = Array.isArray(n.distance) ? n.distance[MAPDATA[WORLD].maps[MAPNUM].lbPart-1] : n.distance;
			areas[i].interactive = (dist <= getLBASRange(CHDATA.ships['z'+currentBase]));
		}
		messageCancel.visible = false;
		for (var i=0; i<crosshairs.length; i++) {
			recycle(crosshairs[i]);
		}
		messageG.visible = false;
		messages[currentBase-1].visible = true;
	}
	
	let found = false;
	for (var letter in MAPDATA[WORLD].maps[MAPNUM].nodes) {
		var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
		if (node.hidden && (!CHDATA.event.maps[MAPNUM].routes || CHDATA.event.maps[MAPNUM].routes.indexOf(node.hidden) == -1)) continue;
		if (node.replacedBy && CHDATA.event.maps[MAPNUM].routes.indexOf(MAPDATA[WORLD].maps[MAPNUM].nodes[node.replacedBy].hidden) != -1) continue;
		if (node.lbPart && CHDATA.event.maps[MAPNUM].part != node.lbPart) continue;
		var area = new PIXI.Graphics();
		area.beginFill(0);
		area.drawCircle(10,10,10);
		area.pivot.set(10);
		area.alpha = 0;
		area.buttonMode = true;
		let n = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
		let dist = Array.isArray(n.distance) ? n.distance[MAPDATA[WORLD].maps[MAPNUM].lbPart-1] : n.distance;
		area.interactive = (dist <= getLBASRange(CHDATA.ships['z'+currentBase]));
		found = found || area.interactive;
		area.position.set(node.x+MAPOFFX,node.y+MAPOFFY);
		area.letter = letter;
		area.callback = afterSelect;
		area.click = function(e) { nodeSelected = this.letter; this.callback(); }
		areas.push(area);
	}
	if (!found) {
		addTimeout(function() { mapPhase(); ecomplete = true; }, 1);
		return;
	}
	for (let area of areas) {
		stage.addChild(area);
	}

	for (var i=1; i<=3; i++) {
		var message = getFromPool('lbmessage'+i,'assets/maps/lbmessage'+i+'.png');
		// message.interactive = message.buttonMode = true;
		// message.callback = afterContinue;
		// message.click = function(e) { this.callback(); }
		message.position.set(10,10);
		message.visible = (i==currentBase);
		messages.push(message);
		stage.addChild(message);
	}
	var messageG = getFromPool('lbmessageG','assets/maps/lbmessageG.png');
	messageG.interactive = messageG.buttonMode = true;
	messageG.callback = afterContinue;
	messageG.click = function(e) { this.callback(); }
	messageG.position.set(3,3);
	messageG.visible = false;
	messages.push(messageG);
	stage.addChild(messageG);
	var messageCancel = getFromPool('lbcancel','assets/maps/lbcancel.png');
	messageCancel.interactive = messageCancel.buttonMode = true;
	messageCancel.callback = afterCancel;
	messageCancel.click = function(e) { this.callback(); }
	messageCancel.position.set(190,2);
	messageCancel.visible = false;
	messages.push(messageCancel);
	stage.addChild(messageCancel);
	
	var banner = getFromPool('lbbanner','assets/icons/LBAS1.png');
	banner.x = 18;
	banner.y = 45;
	messages.push(banner);
	stage.addChild(banner);
	
	messages[0].pivot.x = 300;
	updates.push([function() {
		messages[0].pivot.x -= 10;
		for (var i=1; i<messages.length; i++) messages[i].pivot.x = messages[0].pivot.x;
		return messages[0].pivot.x <= 0;
	},[]]);
}

function selectNode(letters) {
	var nodeSelected = false;

	var bubble = getFromPool('nodeBubble','assets/maps/nodeSelectBubble.png');
	bubble.pivot.set(0,60);
	bubble.scale.y = 0;
	bubble.position.set(mapship.x+20,mapship.y-15);
	stage.addChild(bubble);
	updates.push([function() {
		bubble.scale.y += .15;
		if (bubble.scale.y >= 1) {
			bubble.scale.y = 1;
			return true;
		}
	},[]]);
	
	var afterSelect = function() {
		recycle(bubble);
		for (let j=0; j<areas.length; j++) areas[j].interactive = false;
		mapPhase2(nodeSelected);
		addTimeout(function() { 
			for (let j=0; j<areas.length; j++) stage.removeChild(areas[j]);
			ecomplete = true;
		}, 100);
	};
	
	var glows = [], areas = [];
	for (var i=0; i<letters.length; i++) {
		var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letters[i]];
		glows[i] = getFromPool('nodeGlow','assets/maps/nodeGlow.png');
		glows[i].pivot.set(28);
		glows[i].position.set(node.x+MAPOFFX,node.y+MAPOFFY);
		stage.addChild(glows[i]);
		updates.push([function(glow) {
			glow.scale.set(glow.scale.x+.01);
			if (glow.scale.x >= 1.3) glow.scale.set(.7);
			glow.alpha = 1-(Math.abs(glow.scale.x-1)*3);
			if (nodeSelected) {
				recycle(glow);
				return true;
			}
		},[glows[i]]]);
		
		areas[i] = new PIXI.Graphics();
		areas[i].beginFill(0);
		areas[i].drawCircle(10,10,10);
		areas[i].pivot.set(10);
		areas[i].alpha = 0;
		areas[i].interactive = areas[i].buttonMode = true;
		areas[i].mouseover = function(e) { SM.play('hover'); }
		areas[i].position.set(node.x+MAPOFFX,node.y+MAPOFFY);
		areas[i].letter = letters[i];
		areas[i].callback = afterSelect;
		areas[i].click = function(e) { nodeSelected = this.letter; this.callback(); }
		stage.addChild(areas[i]);
	}
}
// node = MAPDATA[WORLD].maps[MAPNUM].nodes['A'];
// eventqueue.push([mapMoveShip,[mapship,node.x+MAPOFFX,node.y+MAPOFFY]]);
// eventqueue.push([mapBattleNode,[mapship,'A']]);
// eventqueue.push([spinCompass,[0]]);
// node = MAPDATA[WORLD].maps[MAPNUM].nodes['B'];
// eventqueue.push([mapMoveShip,[mapship,node.x+MAPOFFX,node.y+MAPOFFY]]);
// eventqueue.push([mapBattleNode,[mapship,'B']]);
// node = MAPDATA[WORLD].maps[MAPNUM].nodes['C'];
// eventqueue.push([mapMoveShip,[mapship,node.x+MAPOFFX,node.y+MAPOFFY]]);
// eventqueue.push([mapBattleNode,[mapship,'C']]);
// node = MAPDATA[WORLD].maps[MAPNUM].nodes['D'];
// eventqueue.push([mapMoveShip,[mapship,node.x+MAPOFFX,node.y+MAPOFFY]]);
// eventqueue.push([mapBattleNode,[mapship,'D']]);
// eventqueue.push([prepBattle,[]]);

function getEnemyCompFromRouteCompObject(compDiffRoute) {
	if (!CHDATA.event.maps[MAPNUM].routes) return compDiffRoute[0];
	if (!CHDATA.event.maps[MAPNUM].routes.length) return compDiffRoute[0];

	let route = 0;
	const maxUnlockedRoute = Math.max(CHDATA.event.maps[MAPNUM].routes);
	
	for (let index = 0; index < maxUnlockedRoute; index++) {
		
		if (!compDiffRoute[index]) continue;
		if (!CHDATA.event.maps[MAPNUM].routes.includes(index)) continue;
		
		route = index;
	}

	return compDiffRoute[route];
}

function getEnemyComp(letter,mapdata,diff,lastdance) {
	lastdance = lastdance && (!mapdata.compFPart || mapdata.compFPart == CHDATA.event.maps[MAPNUM].part);
	var comps;
	if (CHDATA.config.diffmode == 1) {
		var compHQ = (mapdata.compHQF && lastdance)? mapdata.compHQF : mapdata.compHQ;
		if (mapdata.compHQC && CHDATA.event.maps[MAPNUM].hp <= 0) compHQ = mapdata.compHQC;
		if (!compHQ) {
			comps = (mapdata.compDiffF && lastdance)? mapdata.compDiffF[2] : mapdata.compDiff[2];
			if (mapdata.compDiffC && CHDATA.event.maps[MAPNUM].hp <= 0) comps = mapdata.compDiffC[2];
		} else {
			var hqs = []; for (var key in compHQ) hqs.push(parseInt(key));
			hqs.sort(function(a,b) { return a-b; });
			// console.log(hqs);
			comps = compHQ[hqs[0]];
			for (var i=hqs.length-1; i>0; i--) {
				if (CHDATA.player.level >= hqs[i]) {
					comps = compHQ[hqs[i]];
					// console.log('chose: '+hqs[i]);
					break;
				}
			}
		}
		// console.log(comps);
	} else {
		if (mapdata.compDiffPart) mapdata = mapdata.compDiffPart[CHDATA.event.maps[MAPNUM].part];
		if (mapdata.compDiffRoute) mapdata = getEnemyCompFromRouteCompObject(mapdata.compDiffRoute);
		comps = (mapdata.compDiffF && lastdance)? mapdata.compDiffF[diff] : mapdata.compDiff[diff];
		if (mapdata.compDiffC && CHDATA.event.maps[MAPNUM].hp <= 0) comps = mapdata.compDiffC[diff];
		if (mapdata.compDiffC && MAPDATA[WORLD].maps[MAPNUM].currentBoss && MAPDATA[WORLD].maps[MAPNUM].currentBoss != letter) comps = mapdata.compDiffC[diff];
	}
	var comp, compd = {};
	if (Array.isArray(comps)) {
		comp = comps[Math.floor(Math.random()*comps.length)];
	} else {
		let r = Math.floor(100*Math.random());
		for (let key in comps) {
			comp = key;
			r -= comps[key];
			if (r < 0) break;
		}
	}
	if (WORLD == 20) {
		let n = (mapdata.compName)? mapdata.compName : (mapdata.boss)? 'Boss' : letter;
		compd = ENEMYCOMPS['World '+MAPDATA[WORLD].maps[MAPNUM].world][MAPDATA[WORLD].maps[MAPNUM].name][n][comp];
	} else {
		let n = (mapdata.compName)? mapdata.compName : letter;

		Object.assign(compd, CHDATA.event.comps['E-'+MAPNUM][n][comp]);

		if (WORLD == 97) compd.originalComp = CHDATA.event.comps['E-'+MAPNUM][n][comp];
		else ENEMYCOMPS[MAPDATA[WORLD].name]['E-'+MAPNUM][n][comp];
	}
	return compd;
}

function chGetLastDance() {
	var diff = CHDATA.event.maps[MAPNUM].diff || 2;
	var lastdance = false;
	if (MAPDATA[WORLD].maps[MAPNUM].transport) {
		var transportCalc = MAPDATA[WORLD].maps[MAPNUM].transportCalc || MAPDATA[WORLD].transportCalc;
		var tp = transportCalc(chGetShips(true),'S');
		lastdance = CHDATA.event.maps[MAPNUM].hp <= tp && CHDATA.event.maps[MAPNUM].hp > 0;
		if (!lastdance && MAPDATA[WORLD].maps[MAPNUM].finaltp) lastdance = (CHDATA.event.maps[MAPNUM].hp <= MAPDATA[WORLD].maps[MAPNUM].finaltp[diff] && CHDATA.event.maps[MAPNUM].hp > 0);
	} else {
		lastdance = (MAPDATA[WORLD].maps[MAPNUM].finalhp && CHDATA.event.maps[MAPNUM].hp <= MAPDATA[WORLD].maps[MAPNUM].finalhp[diff] && CHDATA.event.maps[MAPNUM].hp > 0);
	}
	if (MAPDATA[WORLD].maps[MAPNUM].parts && MAPDATA[WORLD].maps[MAPNUM].parts[CHDATA.event.maps[MAPNUM].part+1] && WORLD == 32) lastdance = false; //for now Fall15 only
	return lastdance;
}

var CLEAR_CONSOLE = true;

function prepBattle(letter) {
	SM.stopBGM();
	if (CLEAR_CONSOLE) console.clear();
	
	var enemies = [];
	var mapdata = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
	var diff = CHDATA.event.maps[MAPNUM].diff || 2;
	var lastdance = chGetLastDance();
	
	var compd = getEnemyComp(letter,mapdata,diff,lastdance);

	$('#enemyComp').html('');
	$('#enemyComp').css('display', 'flex')
	$('#enemyCompC').html('');
	$('#enemyCompC').css('display', 'flex')

	function getRandMultiplier(stat) {
		if (stat == NaN) {
			stat = 1;
		}

		let multiplier = Math.random() + 0.5;
		let multiplierDisplay = multiplier * 100;
		multiplierDisplay = Math.floor(multiplierDisplay);
		multiplierDisplay = multiplierDisplay / 100;

		stat = Math.floor(stat * multiplier);

		// -50 to +50
		let bonus = (Math.random() * 100) - 50;
		stat = stat + bonus;

		let displayBonus = Math.abs(Math.floor(bonus));
		displayBonus = bonus < 0 ? '- ' + displayBonus : '+ ' + displayBonus;

		// --- no negative
		stat = Math.max(stat, 0);

		return {
			s: Math.floor(stat),
			d: multiplierDisplay,
			db: displayBonus,
		}
	}

	function getBonusText(bonus) {
		if (bonus == 0) return "";

		let bonusText = ` <span style="color: @p2;font-weight: bold;">@p0 @p1</span>`;

		bonusText = bonusText.replace("@p0", bonus > 0 ? " +" : " ");
		bonusText = bonusText.replace("@p1", bonus);
		bonusText = bonusText.replace("@p2", bonus > 0 ? "green" : "red");

		return bonusText;
	}

	function randoStats(sid, combined, flagship) {

		let enemyDiv = $('<div>');

		enemyDiv.append(`<img src="${chGetShipImagePath(sid)}"><br>`);
		enemyDiv.append(`${SHIPDATA[sid].name}<br>`);

		// --- Bonuses
		let armor = getRandMultiplier(SHIPDATA[sid].AR);
		let HPBonus = 0;
		let ARBonus = 0;

		if (armor.s > 400) {
			ARBonus = (armor.s * 0.20) * -1;
			HPBonus = (SHIPDATA[sid].HP * 0.20) + (armor.s * 0.20) ;
		}

		if (flagship) {
			HPBonus += (0.25 * SHIPDATA[sid].HP);
		}

		HPBonus = Math.floor(HPBonus);
		ARBonus = Math.floor(ARBonus);

		// --- Rand
		let m = getRandMultiplier(SHIPDATA[sid].HP);
		SHIPDATA[sid].HP = Math.max(m.s + HPBonus, 1);
		enemyDiv.append(`HP : ${Math.floor(SHIPDATA[sid].HP)} (x${m.d} ${m.db}${getBonusText(HPBonus)}) <br>`);

		m = getRandMultiplier(SHIPDATA[sid].FP);
		SHIPDATA[sid].FP = m.s;
		enemyDiv.append(`FP : ${Math.floor(SHIPDATA[sid].FP)} (x${m.d} ${m.db}) <br>`);

		m = getRandMultiplier(SHIPDATA[sid].TP);
		SHIPDATA[sid].TP = m.s;
		enemyDiv.append(`TP : ${Math.floor(SHIPDATA[sid].TP)} (x${m.d} ${m.db}) <br>`);

		m = getRandMultiplier(SHIPDATA[sid].AA);
		SHIPDATA[sid].AA = m.s;
		enemyDiv.append(`AA : ${Math.floor(SHIPDATA[sid].AA)} (x${m.d} ${m.db}) <br>`);

		m = armor;
		SHIPDATA[sid].AR = Math.max(Math.min(m.s + ARBonus, 400), 0);
		enemyDiv.append(`AR : ${Math.floor(SHIPDATA[sid].AR)} (x${m.d} ${m.db}${getBonusText(ARBonus)}) <br>`);

		enemyDiv.css('margin-right', '20px');
		$('#enemyComp'+(combined ? 'C' : '')).append(enemyDiv);
	}

	for (var i=0; i<compd.c.length; i++) {
		var sid = compd.c[i];
		var overrideStats = (MAPDATA[WORLD].overrideStats)? MAPDATA[WORLD].overrideStats[sid] : null;
		
		if (RANDO_MODE == 1) {
			enemies.push(createDefaultShip(sid,overrideStats));
		}

		if (RANDO_MODE == 4) {

			if (i == 0 && mapdata.boss) {
				let oldShip = {};

				Object.assign(oldShip, SHIPDATA[sid]);

				SHIPDATA[sid].HP = SHIPDATA[compd.originalComp.c[0]].HP;

				var currentBoss = false;
				
				if (MAPDATA[WORLD].maps[MAPNUM].currentBoss) currentBoss = MAPDATA[WORLD].maps[MAPNUM].currentBoss == letter;
				else {
					var bossnum = (typeof MAPDATA[WORLD].maps[MAPNUM].bossnode === 'object')? MAPDATA[WORLD].maps[MAPNUM].bossnode[0] : MAPDATA[WORLD].maps[MAPNUM].bossnode;
					var letterboss = (typeof bossnum == 'string')? bossnum : String.fromCharCode(64+bossnum);
					currentBoss = letterboss == letter;
				}

				if (RUSH_MODE && !chGetLastDance() && !CHDATA.sortie.reachedTransport && currentBoss) {
					SHIPDATA[sid].HP = CHDATA.event.maps[MAPNUM].hp - 1;
				}
		
				let newShip = createDefaultShip(sid,overrideStats);

				enemies.push(newShip);
		
				SHIPDATA[sid] = oldShip;
			}
			else {				
				enemies.push(createDefaultShip(sid,overrideStats));
			}
		}
		
		if (RANDO_MODE == 2 || RANDO_MODE == 3) {

			let oldShip = {};

			if (RANDO_MODE == 2)
				Object.assign(oldShip, SHIPDATA[sid]);
			else 
				oldShip = SHIPDATA[sid];
	
			randoStats(sid, 0, i == 0);
	
			enemies.push(createDefaultShip(sid,overrideStats));
	
			SHIPDATA[sid] = oldShip;
		}
	}
	FLEETS2[0] = new Fleet(1);
	FLEETS2[0].loadShips(enemies);
	FLEETS2[0].formation = ALLFORMATIONS[compd.f];
	if (compd.ce) {
		var enemiesC = [];
		for (var i=0; i<compd.ce.length; i++) {
			var sid = compd.ce[i];
			var overrideStats = (MAPDATA[WORLD].overrideStats)? MAPDATA[WORLD].overrideStats[sid] : null;
						
			if (RANDO_MODE == 1 || RANDO_MODE == 4) {
				enemiesC.push(createDefaultShip(sid,overrideStats));
			}

			if (RANDO_MODE == 2 || RANDO_MODE == 3) {
	
				let oldShip = {};
	
				if (RANDO_MODE == 2)
					Object.assign(oldShip, SHIPDATA[sid]);
				else 
					oldShip = SHIPDATA[sid];
		
				randoStats(sid, 1);
		
				enemiesC.push(createDefaultShip(sid,overrideStats));
		
				SHIPDATA[sid] = oldShip;
			}
		}
		FLEETS2[1] = new Fleet(1,FLEETS2[0]);
		FLEETS2[1].loadShips(enemiesC);
		FLEETS2[1].formation = ALLFORMATIONS[compd.f+'E'];
	}
	
	let friendFleets = {};
	if (mapdata.friendFleetWaves) {
		let waveNum = CHDATA.fleets.ffWave || Math.max(...Object.keys(mapdata.friendFleetWaves));
		for (let key in mapdata.friendFleetWaves[waveNum]) {
			mapdata[key] = mapdata.friendFleetWaves[waveNum][key];
		}
	}
	
	let getFriendFleet = function(obj) {
		let friendFleets = obj.friendFleet;
		let friendFleetsS = (CHDATA.fleets.ff == 2)? (obj.friendFleetSX || obj.friendFleetS) : null;
		return chLoadFriendFleet(chChooseFriendFleet(friendFleets,friendFleetsS,!!obj.friendFleetSX));
	};
	if (mapdata.friendFleet && CHDATA.fleets.ff !== 0) {
		friendFleets.night = CHDATA.sortie.fleetFriend = getFriendFleet(mapdata);
	}
	if (mapdata.friendFleetAir && CHDATA.fleets.ff !== 0) {
		friendFleets.air = CHDATA.sortie.fleetFriendAir = getFriendFleet(mapdata.friendFleetAir);
	}
	console.log(friendFleets);

	if (mapdata.bonuses) {
		for (const bonus of mapdata.bonuses) {
			bonus.applyBonuses();
		}
	}

	if (mapdata.setupSpecial) {
		mapdata.setupSpecial(); //not reverted until sortie end
	}

	// --- Randomizer code
	chrApplySpecial();
	
	if (mapdata.debuffAmount) {

		let debuffed = false;

		if (MAPDATA[WORLD].maps[MAPNUM].debuffRules) {
			debuffed = MAPDATA[WORLD].maps[MAPNUM].debuffRules.gimmickDone();
		}
		else {
			var debuffCheck = MAPDATA[WORLD].maps[MAPNUM].debuffCheck;
			debuffed = debuffCheck && debuffCheck(CHDATA.event.maps[MAPNUM].debuff);
		}

		if (debuffed) {
			if (typeof mapdata.debuffAmount === 'object') {
				for (var i=0; i<FLEETS2[0].ships.length; i++) {
					var ship = FLEETS2[0].ships[i];
					if (mapdata.debuffAmount[ship.mid]) ship.debuff = mapdata.debuffAmount[ship.mid];
				}
				console.log('debuff applied by mid');
			} else if (mapdata.debuffAmount) {
				FLEETS2[0].ships[0].debuff = mapdata.debuffAmount;
				console.log('debuff applied to flag');
			}
		}
	}
	
	if (CHDATA.fleets.combined) {
		if (FORMSELECTED > 10) {
			FLEETS1[0].formation = ALLFORMATIONS[''+CHDATA.fleets.combined+FORMSELECTED];
			FLEETS1[1].formation = ALLFORMATIONS[''+CHDATA.fleets.combined+FORMSELECTED+'E'];
		} else {
			FLEETS1[0].formation = ALLFORMATIONS[FORMSELECTED];
			FLEETS1[1].formation = ALLFORMATIONS[FORMSELECTED];
		}
	} else {
		FLEETS1[0].formation = ALLFORMATIONS[FORMSELECTED];
	}
	
	var CHAPI = {battles:[],fleetnum:1,support1:3,support2:4,source:2,world:WORLD,mapnum:MAPNUM};
	if (!MAPDATA[WORLD].maps[MAPNUM].transport && MAPDATA[WORLD].maps[MAPNUM].hpmode != -1) {
		if (!MAPDATA[WORLD].maps[MAPNUM].currentBoss || MAPDATA[WORLD].maps[MAPNUM].currentBoss == letter) {
			if (MAPDATA[WORLD].maps[MAPNUM].hpmode == 1) {
				CHAPI.defeat_count = getMapHP(WORLD,MAPNUM,diff) - CHDATA.event.maps[MAPNUM].hp;
				console.log(CHAPI.defeat_count);
			} else {
				CHAPI.now_maphp = CHDATA.event.maps[MAPNUM].hp;
				CHAPI.max_maphp = getMapHP(WORLD,MAPNUM,diff);
			}
		}
	}
	if (CHDATA.fleets.combined) CHAPI.combined = CHDATA.fleets.combined;
	
	for (var i=0; i<4; i++) {
		if (i >= FLEETS1.length) break;
		CHAPI['fleet'+(i+1)] = [];
		if (!FLEETS1[i]) continue;
		for (var j=0; j<FLEETS1[i].ships.length; j++) {
			var ship = FLEETS1[i].ships[j];
			var obj = {equip:[],kyouka:[]};
			obj.mst_id = ship.mid;
			var repairs = (ship.repairs)? ship.repairs.slice() : null;
			for (var k=0; k<Math.max(5,ship.equips.length); k++) {
				if (ship.equips[k]) {
					//don't load repair into replay if used (but keep on simship because it breaks things if remove)
					//this is still bugged, if both team and goddess are equipped, because replayer doesn't know which to use first, need to figure out
					if (ship.equips[k].type == REPAIR) {  
						var ind = repairs.indexOf(ship.equips[k].mid);
						if (ind != -1) { repairs.splice(ind,1); obj.equip.push(ship.equips[k].mid); }
						else obj.equip.push(-1);
						continue;
					}
					obj.equip.push(ship.equips[k].mid);
				}
				else obj.equip.push(-1);
			}
			CHAPI['fleet'+(i+1)].push(obj);
		}
	}
	let nodeNum = (letter.replace('*','').length > 1)? letter : letter.charCodeAt()-64;
	var BAPI = {data:{},yasen:{},mvp:[],rating:'',node:nodeNum};
	var doNB = !compd.bomb; //always do, roll back later if not chosen
	var NBonly = compd.NB || mapdata.night2; //change to node level?
	var aironly = compd.air;
	var landbomb = compd.bomb;
	var ambush = mapdata.ambush;
	var supportfleet = (MAPDATA[WORLD].maps[MAPNUM].nodes[letter].boss)? FLEETS1S[1] : FLEETS1S[0];
	
	var LBASwaves = null;
	if (CHDATA.sortie.lbasNodes && CHDATA.sortie.lbasNodes[letter]) {
		LBASwaves = [];
		for (var i=0; i<CHDATA.sortie.lbasNodes[letter].length; i++) {
			LBASwaves.push(LBAS[CHDATA.sortie.lbasNodes[letter][i]-1]);
		}
	}
	
	if (MAPDATA[WORLD].vanguardConsts) {
		//temp
		if (WORLD == 40) {
			for (let i=0; i<=2; i++) {
				SIMCONSTS.vanguardEvShellDD[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvDD1;
				SIMCONSTS.vanguardEvShellOther[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvOther1;
				SIMCONSTS.vanguardEvTorpDD[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvDD1;
				SIMCONSTS.vanguardEvTorpOther[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvOther1;
			}
			for (let i=3; i<=6; i++) {
				SIMCONSTS.vanguardEvShellDD[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvDD2;
				SIMCONSTS.vanguardEvShellOther[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvOther2;
				SIMCONSTS.vanguardEvTorpDD[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvDD2 + 20;
				SIMCONSTS.vanguardEvTorpOther[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvOther2 + 20;
			}
		} else {
			for (let i=0; i<=3; i++) {
				SIMCONSTS.vanguardEvShellDD[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvDD1;
				SIMCONSTS.vanguardEvShellOther[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvOther1;
			}
			for (let i=4; i<=6; i++) {
				SIMCONSTS.vanguardEvShellDD[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvDD2;
				SIMCONSTS.vanguardEvShellOther[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvOther2;
			}
			for (let i=0; i<=2; i++) {
				SIMCONSTS.vanguardEvTorpDD[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvDD1;
				SIMCONSTS.vanguardEvTorpOther[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvOther1;
			}
			for (let i=3; i<=6; i++) {
				SIMCONSTS.vanguardEvTorpDD[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvDD2;
				SIMCONSTS.vanguardEvTorpOther[i] = MAPDATA[WORLD].vanguardConsts.vanguardEvOther2;
			}
		}
	}
	
	NEWFORMAT = true;
	var res;
	if (mapdata.ambush) {
		if (CHDATA.fleets.combined) res = simAmbushCombined(FLEETS1[0],FLEETS2[0],BAPI);
		else res = simAmbush(FLEETS1[0],FLEETS2[0],BAPI);
		BAPI.data.api_name = 'ld_shooting';
	} else if (mapdata.nightToDay2) {
		res = simNightFirstCombined(FLEETS1[0],FLEETS2[0],supportfleet,LBASwaves,BAPI);
	} else if (compd.ce) {
		if (CHDATA.fleets.combined) res = sim12vs12(CHDATA.fleets.combined,FLEETS1[0],FLEETS1[1],FLEETS2[0],supportfleet,LBASwaves,doNB,NBonly,aironly,landbomb,false,BAPI,true,friendFleets);
		else res = sim6vs12(FLEETS1[0],FLEETS2[0],supportfleet,LBASwaves,doNB,NBonly,aironly,landbomb,false,BAPI,true,friendFleets);
	} else {
		if (CHDATA.fleets.combined) res = simCombined(CHDATA.fleets.combined,FLEETS1[0],FLEETS1[1],FLEETS2[0],supportfleet,LBASwaves,doNB,NBonly,aironly,landbomb,false,BAPI,true,friendFleets);
		else res = sim(FLEETS1[0],FLEETS2[0],supportfleet,LBASwaves,doNB,NBonly,aironly,landbomb,false,BAPI,true,friendFleets);
	}
	if (FLEETS2[0].ships[0].debuff) {
		if (NBonly) BAPI.yasen.api_boss_damaged = 1;
		else BAPI.data.api_boss_damaged = 1;
	}
	if (mapdata.nightToDay) {
		if (MAPDATA[WORLD].maps[MAPNUM].dayCheck && !MAPDATA[WORLD].maps[MAPNUM].dayCheck()) {
			
		} else {
			for (var i=0; i<FLEETS1[0].ships.length; i++) {
				let ship = FLEETS1[0].ships[i];
				if (ship.HPprev/ship.maxHP > .25) ship.protection = true;
			}
			res = sim(FLEETS1[0],FLEETS2[0],supportfleet,LBASwaves,false,false,false,false,false,BAPI,true);
			BAPI.yasen.api_n_hougeki1 = BAPI.yasen.api_hougeki;
			delete BAPI.yasen.api_hougeki;
			for (var prop in BAPI.yasen) BAPI.data[prop] = BAPI.yasen[prop];
			BAPI.data.api_day_flag = 2;
			BAPI.yasen = {};
		}
	}
	if (MAPDATA[WORLD].maps[MAPNUM].bgTint) {
		BAPI.sim_bgtint = MAPDATA[WORLD].maps[MAPNUM].bgTint;
	}
	CHAPI.battles.push(BAPI);
	$('#code').val(JSON.stringify(CHAPI)); //remove?
	
	res.boss = mapdata.boss;
	res.aironly = aironly;
	
	console.log('BONUS MOD:');
	for (let ship of getAllShips(true)) {
		let modDmg = 1, modAcc = 1, modEv = 1;
		if (ship.bonusSpecial) {
			for (let bonus of ship.bonusSpecial) {
				if (!bonus.on) modDmg *= bonus.mod;
			}
		}
		if (ship.bonusSpecialAcc) {
			for (let bonus of ship.bonusSpecialAcc) {
				if (!bonus.on) modAcc *= bonus.mod;
			}
		}
		if (ship.bonusSpecialEv) {
			for (let bonus of ship.bonusSpecialEv) {
				if (!bonus.on) modEv *= bonus.mod;
			}
		}
		modDmg *= getBonusSpecialPlane(ship);
		console.debug(ship.name + ': ' + Math.trunc(modDmg*1000)/1000 + ' ' + Math.trunc(modAcc*1000)/1000 + ' ' + Math.trunc(modEv*1000)/1000);
	}
	
	
	res.NBonly = NBonly;
	res.landbomb = landbomb;
	res.noammo = compd.noammo;
	res.ambush = ambush;
	if (mapdata.overrideCost) res.overrideCost = mapdata.overrideCost;
	if (mapdata.nightToDay2) res.nightToDay2 = true;
	if (landbomb || ambush) {
		res.rank = res.rankDay = getRankRaid(FLEETS1[0].ships,(CHDATA.fleets.combined)? FLEETS1[1].ships : null);
		if (landbomb) delete BAPI.data.api_hougeki1;
	}
	if (ambush) BAPI.data.api_ambush = true;
	CHDATA.temp = res;
	//update morale after NB select
	
	stage = STAGEBATTLE;
	stage.addChild(bg);
	radar1.scale.set(0); radar2.scale.set(0);
	stage.addChild(radar1);
	stage.addChild(radar2);
	dots1.alpha = dots2.alpha = 0;
	stage.addChild(dots1);
	stage.addChild(dots2);
	
	bossBarReset();
	eventqueue = [[shuttersPrebattle,[]]]; e = -1;
	processAPI(CHAPI);
	NBSELECT = false;
	if (!mapdata.nightToDay && !mapdata.nightToDay2) {
		for (var i=0; i<eventqueue.length; i++) {
			if (eventqueue[i][0] == shutters) { eventqueue[i][0] = shuttersSelect; break; }
		}
	}
	if (!MAPDATA[WORLD].maps[MAPNUM].transport && MAPDATA[WORLD].maps[MAPNUM].hpmode != 1) lastdance = FLEETS2[0].ships[0].maxHP >= CHDATA.event.maps[MAPNUM].hp; //if last dance hp < boss hp, still play sunk line
	if (MAPDATA[WORLD].isVita) lastdance = true; 
	if (mapdata.boss && lastdance && res.flagsunk && !MAPDATA[WORLD].maps[MAPNUM].transport && (!MAPDATA[WORLD].maps[MAPNUM].currentBoss || MAPDATA[WORLD].maps[MAPNUM].currentBoss == letter)) {
		var shipid = compd.c[0];
		if (VOICES[shipid] && VOICES[shipid]['sunk']) {
			var sndindex = eventqueue.length;
			var snd = SM._sounds['Vsunk'+shipid] = new Howl({
				src:[VOICES[shipid]['sunk']],
				volume:.4*SM._volume,
				html5:true,
				onload: function() {
					var waittime = this.duration()*1000 + 2000;
					eventqueue.splice(sndindex,0,[wait,[waittime]]);
				}
			});
		}
	}
	eventqueue.push([shuttersPostbattle,[]]);
	eventqueue.push([showResults,[]]);
	shutterTop2.y = 0; shutterBottom2.y = 210;

	let end = MAPDATA[WORLD].maps[MAPNUM].nodes[letter].end;
	
	if (MAPDATA[WORLD].maps[MAPNUM].nodes[letter].endRules && MAPDATA[WORLD].maps[MAPNUM].nodes[letter].endRules.length) {
		let rule = MAPDATA[WORLD].maps[MAPNUM].nodes[letter].endRules[0];

		if (rule.ruleCanBeChecked())
			end = rule.getRouting(CHSHIPCOUNT);
	}

	if (!end) {
		if (FLEETS1[0].ships[0].hasFCF) eventqueue.push([FCFSelect,[]]);
		eventqueue.push([continueSelect,[]]);
		eventqueue.push([wait,[1000]]);
	} else {
		eventqueue.push([endMap,[]]);
	}
	addTimeout(function() { ecomplete = true; }, 1);
}

function prepMap() {

	let end = MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].end;
	
	if (MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].endRules && MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].endRules.length) {
		let rule = MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].endRules[0];

		if (rule.ruleCanBeChecked())
			end = rule.getRouting(CHSHIPCOUNT);
	}

	if (!end) {
		stage = STAGEMAP;
		eventqueue = []; e = -1;
		chResetMapSpritePos();
		mapPhase(true);
	} else {
		eventqueue.push([endMap,[]]);
	}
	addTimeout(function() { ecomplete = true; }, 1);
}

function increaseNumberOfMapCleared() {
	if (CHDATA.event.world >= 98) {
		if (!CHDATA.event.mapClearData) {
			CHDATA.event.mapClearData = {}
		}

		if (!CHDATA.event.mapClearData[WORLD]) {
			CHDATA.event.mapClearData[WORLD] = [];
		}

		CHDATA.event.mapClearData[WORLD][MAPNUM] = MAPNUM;

		if (MAPDATA[98].chrGetClearedMap()) {
			CHDATA.event.unlocked++;
		}
	} else {
		CHDATA.event.unlocked++;
	}
}

function endMap() {
	chReturnSortie();
	ONSORTIE = false;
	
	var cleared = false;
	if (CHDATA.event.maps[MAPNUM].hp <= 0) {
		var partNext = CHDATA.event.maps[MAPNUM].part+1;
		if (MAPDATA[WORLD].maps[MAPNUM].parts && MAPDATA[WORLD].maps[MAPNUM].parts[partNext]) {
			CHDATA.event.maps[MAPNUM].part = partNext;
			mapChangePart(WORLD,MAPNUM,partNext);
			CHDATA.event.maps[MAPNUM].hp = getMapHP(WORLD,MAPNUM,CHDATA.event.maps[MAPNUM].diff);
		} else if (CHDATA.event.unlockedS) {
			if (!CHDATA.event.maps[MAPNUM].clear) {
				CHDATA.event.maps[MAPNUM].clear = 1;
				cleared = true;
				for (let mapnum in MAPDATA[WORLD].maps) {
					if (CHDATA.event.unlockedS.indexOf(+mapnum) != -1) continue;
					if (MAPDATA[WORLD].maps[mapnum].requiresMap && MAPDATA[WORLD].maps[mapnum].requiresMap.every(m => CHDATA.event.maps[m].clear)) {
						CHDATA.event.unlockedS.push(+mapnum);
					}
				}
			}
		} else if ((CHDATA.event.unlocked == MAPNUM || CHDATA.config.unlockAll) && !CHDATA.event.maps[MAPNUM].clear) {
			if (CHDATA.config.unlockAll) CHDATA.event.maps[MAPNUM].clear = 1;
			else increaseNumberOfMapCleared();
			cleared = true;
			if (MAPDATA[WORLD].maps[CHDATA.event.unlocked] && MAPDATA[WORLD].maps[CHDATA.event.unlocked].hpRegenTick) {
				CHHPREGENTIMER.start(CHDATA.event.unlocked);
			}
		}
	}
	
	var endTime = 1500;
	var hiddenRoutes = MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes;
	if (hiddenRoutes) {
		var key = checkRouteUnlocks(hiddenRoutes, null, true);
		if (key) {
			addTimeout(function() {
				stage = STAGEMAP;
				chResetMapSpritePos();
			},500);
			addTimeout(function() {
				showRouteUnlock(hiddenRoutes[key],key);
			},1500);
			endTime += 5000;
		}
	}
	
	addTimeout(function() {
		$('#battlespace').hide();
		$('#sortiespace').show();
		chLoadSortieInfo(CHDATA.event.mapnum);
		SM.stopBGM();
		ecomplete = true; 
		pushShipStatusToUI();
		chUIRemoveSunk();
		$('#noclick').hide();
		if (cleared) {
			var reward = MAPDATA[WORLD].maps[MAPNUM].reward;
			const rewardsToGive = {
				ships: [],
				items: []
			};

			if (reward) {
				if (reward[3]) reward = reward[CHDATA.event.maps[MAPNUM].diff];
				if (reward.firstOnly || reward.limit) reward = chRestrictReward(reward);

				if (reward.ships) rewardsToGive.ships.push(...reward.ships);
				if (reward.items) rewardsToGive.items.push(...reward.items);

			}

			var reward = MAPDATA[WORLD].maps[MAPNUM].rewardPerDiff;
			if (reward && reward[CHDATA.event.maps[MAPNUM].diff]) {
				reward = reward[CHDATA.event.maps[MAPNUM].diff];

				if (reward.firstOnly || reward.limit) reward = chRestrictReward(reward);
				
				if (reward.ships) rewardsToGive.ships.push(...reward.ships);
				if (reward.items) rewardsToGive.items.push(...reward.items);
			}

			chAddReward(rewardsToGive);
			chShowReward(rewardsToGive);
		}
		
		for (var mapnum in MAPDATA[WORLD].maps) {
			if (mapnum < MAPNUM) continue;
			if (mapnum > CHDATA.event.unlocked) continue;
			
			if (MAPDATA[WORLD].maps[mapnum].debuffRules) {
				MAPDATA[WORLD].maps[mapnum].debuffRules.checkIfDebuffed();
			}

			if (MAPDATA[WORLD].maps[mapnum].debuffCheck && !CHDATA.event.maps[mapnum].debuffed) {
				if (!CHDATA.event.maps[mapnum].debuff) CHDATA.event.maps[mapnum].debuff = {};
				if (MAPDATA[WORLD].maps[mapnum].debuffCheck(CHDATA.event.maps[mapnum].debuff)) {
					CHDATA.event.maps[mapnum].debuffed = true;
					SM.play('done');
					alert('DEBUFF');
				}
			}
		}
		
		if (CHDATA.sortie.gimmickProgressed) {
			SM.play('done');
		}

		if (playSoundAfterSortie) {
			SM.play('done');
			alert('A gimmick requirement was completed');

			playSoundAfterSortie = false;
		}

		if (cleared && CHDATA.event.world >= 98 && !MAPDATA[98].chrGetClearedMap()) {
			MAPDATA[98].chrRerollMap();
		}

		chSave();
	}, endTime);
}

function showRouteUnlock(route,routeId) {
	var sprs = [], sprsRemove = [];
	for (var image of route.images) {
		const routeImagePath = image.customName ? image.customName : 'assets/maps/'+WORLD+'/'+image.name;
		var spr = PIXI.Sprite.fromImage(routeImagePath);
		spr.position.set(image.x,image.y);
		spr.alpha = 0;
		map.addChild(spr);
		sprs.push(spr);
	}
	let skip = [];
	for (var letter in MAPDATA[WORLD].maps[MAPNUM].nodes) {
		if (skip.indexOf(letter) != -1) continue;
		var node = MAPDATA[WORLD].maps[MAPNUM].nodes[letter];
		if (node.replacedBy && MAPDATA[WORLD].maps[MAPNUM].nodes[node.replacedBy].hidden == routeId) {
			let ind = CHDATA.event.maps[MAPNUM].visited.indexOf(letter);
			if (ind != -1) {
				if (CHDATA.event.maps[MAPNUM].visited.indexOf(node.replacedBy) == -1) CHDATA.event.maps[MAPNUM].visited[ind] = node.replacedBy;
				else CHDATA.event.maps[MAPNUM].visited.splice(ind,1);
			}
			addMapNode(node.replacedBy);
			if (mapnodes[letter]) {
				stage.removeChild(mapnodes[letter]); stage.addChildAt(mapnodes[letter],stage.getChildIndex(mapship));
				sprsRemove.push(mapnodes[letter]);
			}
			skip.push(node.replacedBy);
			continue;
		}
		if (node.hidden == routeId && (node.raid || node.aironly || node.night2 || node.nightToDay2 || node.ambush) && !node.boss) {
			var spr = PIXI.Sprite.fromImage('assets/maps/nodeW.png');
			spr.position.set(node.x,node.y);
			spr.alpha = 0;
			spr.pivot.set(10);
			map.addChild(spr);
			sprs.push(spr);
		}
	}
	updates.push([function() {
		var done = false;
		for (var spr of sprs) {
			spr.alpha += .01;
			if (spr.alpha >= 1) {
				spr.alpha = 1;
				done = true;
			}
		}
		for (var spr of sprsRemove) {
			spr.alpha -= .01;
			if (spr.alpha <= 0) spr.alpha = 0;
		}
		return done;
	},[]]);
}

function shuttersPrebattle() {
	shutterTop2.y = 20; shutterBottom2.y = 230;
	updates.push([function() {
		shutterTop2.y -= 20;
		shutterBottom2.y += 20;
		if (shutterTop2.y <= -246) {
			shutterTop2.y = -246;
			shutterBottom2.y = 456;
			return true;
		}
		return false;
	},[]]);
	SM.play('shuttersopen');
	addTimeout(function() { ecomplete = true; }, 500);
}

function shuttersPostbattle(noshutters) {
	// RATE = 1;
	if (!noshutters) {
		shutterTop.alpha = shutterBottom.alpha = 1;
		updates.push([closeShutters,[]]);
		SM.play('shuttersclose');
	}
	if (bossbar.active) {  //update map hp
		CHDATA.event.maps[MAPNUM].hp = bossbar.nowhp;
		if (bossbar.nowhp <= 0) CHDATA.event.maps[MAPNUM].hp++;  //add 1 if -1 (sunk) or 0 (not sunk)
	}
	if (MAPDATA[WORLD].maps[MAPNUM].transport && CHDATA.sortie.reachedTransport && MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].boss) {
		var rank = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.rankDay : CHDATA.temp.rank;
		var transportCalc = MAPDATA[WORLD].maps[MAPNUM].transportCalc || MAPDATA[WORLD].transportCalc;
		CHDATA.event.maps[MAPNUM].hp -= transportCalc(chGetShips(true),rank);
		if (CHDATA.event.maps[MAPNUM].hp < 0) CHDATA.event.maps[MAPNUM].hp = 0;
	}
	if (MAPDATA[WORLD].maps[MAPNUM].hpmode == -1 && MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].boss) {
		var rank = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.rankDay : CHDATA.temp.rank;
		if (rank == 'S' || rank == 'A' || rank == 'B') CHDATA.event.maps[MAPNUM].hp = 0;
	}
	if (!CHDATA.temp.NBonly && NBSELECT && CHDATA.fleets.ff == 2 && CHDATA.sortie.fleetFriend) {
		CHDATA.event.resources.ibuild = CHDATA.event.resources.ibuild + 6 || 6;
		chUIUpdateResources();
	}
	for (let n=0; n<=1; n++) {
		if (!FLEETS1[n]) continue;
		for (let ship of FLEETS1[n].ships) {
			if (ship.repairs && ship.repairsOrig && ship.repairsOrig.length > ship.repairs.length) {
				let id = ship.repairsOrig.pop();
				let key = id == 43 ? 'damegami' : 'damecon';
				CHDATA.event.resources[key] = CHDATA.event.resources[key] + 1 || 1;
				chUIUpdateItems();
			}
		}
	}
	if (FLEETS1[0].didSpecial && FLEETS1[0].ships[0].type == 'AS') {
		CHDATA.event.resources.submarine = CHDATA.event.resources.submarine + 1 || 1;
		chUIUpdateItems();
		FLEETS1[0].didSpecial = 0;
	}
	chUpdateMorale();
	chUpdateSupply();
	pushShipStatusToUI();
	let shipsC = (CHDATA.fleets.combined)? FLEETS1[0].ships.concat(FLEETS1[1].ships) : FLEETS1[0].ships;
	for (let ship of shipsC) { if (ship.HP <= 0) { chRefreshShipCountSortie(); break; } }
	if (CHDATA.temp.rankDay && !CHDATA.temp.NBonly && !NBSELECT) CHDATA.temp.rank = CHDATA.temp.rankDay;
	if (MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].debuffGive) {
		if (!CHDATA.event.maps[MAPNUM].debuff) CHDATA.event.maps[MAPNUM].debuff = {};
		MAPDATA[WORLD].maps[MAPNUM].nodes[curletter].debuffGive(FLEETS2,FLEETS1);
	}
	
	if (MAPDATA[WORLD].maps[MAPNUM].debuffRules) {
		MAPDATA[WORLD].maps[MAPNUM].debuffRules.checkGimmickSteps(curletter);
	}

	if (MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes) {
		let hiddenRoutes = MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes;

		for (var key in hiddenRoutes) {
			key = parseInt(key);
	
			hiddenRoutes[key].unlockRules.checkGimmickSteps(curletter);
		}
	}

	for (const map in MAPDATA[WORLD].maps) {
		if (map == MAPNUM) continue;
		if (!MAPDATA[WORLD].maps[map].debuffRules) continue;
		if (MAPDATA[WORLD].maps[map].debuffRules.mapNum) continue;

		// --- Gimmick rules without map number = multi map debuff (eg : Spring 16 E5 E6)
		MAPDATA[WORLD].maps[map].debuffRules.checkGimmickSteps(curletter);
	}

	FLEETS1[0].resetBattle();
	if (CHDATA.fleets.combined) FLEETS1[1].resetBattle();
	CHDATA.temp.done = true;
	addTimeout(function() {
		stage.removeChildren();
		stage.addChild(bg);
		stage.addChild(shutterTop2); stage.addChild(shutterBottom2);
		stage.addChild(shutterTop); stage.addChild(shutterBottom);
		for (var i=0; i<fleet1.length; i++) {
			fleet1[i].shakepid = 0; if (fleet1[i].graphic.pivot) fleet1[i].graphic.pivot.x = 0; // if (fleet1[i].shakepid) clearInterval(fleet1[i].shakepid);
			//for (var j=0; j<fleet1[i].graphic.children.length; j++) fleet1[i].graphic.getChildAt(j).destroy();
			//fleet1[i].graphic.destroy();
		}
		for (var k=0; k<allfleets2.length; k++) {
			for (var i=0; i<allfleets2[k].length; i++) {
				var ship = allfleets2[k][i];
				ship.shakepid = 0; if (ship.graphic.pivot) ship.graphic.pivot.x = 0;// if (ship.shakepid) clearInterval(ship.shakepid);
				// for (var j=0; j<ship.graphic.children.length; j++) ship.graphic.getChildAt(j).destroy();
				// ship.graphic.destroy();
			}
		}
		fleetFriend = null;
		fleetFriendDay = {};
		allfleets2 = [];
		while (dots1.children.length) recycle(dots1.getChildAt(0));
		while (dots2.children.length) recycle(dots2.getChildAt(0));
		$('#plEngage').text('');
		$('#plEngageT').text('');
		$('#plAS1').text('');
		$('#plAS2').text('');
		
		shutterTop2.y = 0; shutterBottom2.y = 210;
	}, 500);
	
	// addTimeout(function() {
		// updates.push([function() {
			// shutterTop.alpha-=.1;
			// shutterBottom.alpha-=.1;
			// return (shutterTop.alpha <= 0);
		// },[]]);
	// }, 1000);
	
	// addTimeout(function() { ecomplete = true; }, 1166);
	addTimeout(function() { ecomplete = true; }, 600);
}

function ResultBar(x,y,color) {
	this.g = new PIXI.Container();
	this.barBack = new PIXI.Graphics();
	this.barBack.beginFill(0xffffff);
	this.barBack.drawRoundedRect(x,y,240,12,7);
	this.g.addChild(this.barBack);
	this.mask = new PIXI.Graphics();
	this.mask.beginFill(0x000000);
	this.mask.drawRoundedRect(x,y,240,12,7);
	this.g.addChild(this.mask);
	this.barFront = new PIXI.Graphics();
	this.barFront.beginFill(color);
	this.barFront.drawRoundedRect(x-240,y,240,12,7);
	this.barFront.mask = this.mask;
	this.g.addChild(this.barFront);
}
var resultBar1 = new ResultBar(93,163,0x00ff00);
var resultBar2 = new ResultBar(414,163,0xff0000);

function showResults() {
	var resultback = getFromPool('resultback','assets/maps/resultback.png');
	resultback.y = resultback.pivot.y = 240;
	resultback.scale.y = 0;
	stage.addChild(resultback);
	updates.push([function() {
		resultback.scale.y += .05;
		if (resultback.scale.y >= 1) {
			resultback.scale.y = 1;
			return true;
		}
	},[]]);
	
	let offset = (fleet1.length >= 7)? -45*(fleet1.length-6)+20 : 0;
	
	for (let i=0; i<fleet1.length; i++) {
		fleet1[i].graphic.position.set(232,186+45*i+20+offset);
		fleet1[i].graphic.alpha = 0;
		fleet1[i].graphic.getChildAt(0).visible = false;
		fleet1[i].graphic.getChildAt(1).visible = false;
		fleet1[i].graphic.getChildAt(3).visible = false;
		fleet1[i].graphic.getChildAt(4).visible = false;
		stage.addChild(fleet1[i].graphic);
		addTimeout(function() {
			updates.push([function() {
				fleet1[i].graphic.y -= 2;
				fleet1[i].graphic.alpha += .1;
				if (fleet1[i].graphic.alpha >= 1) {
					fleet1[i].graphic.alpha = 1;
					return true;
				}
			},[]]);
		}, i*100);
	}
	for (let i=0; i<fleet2.length; i++) {
		fleet2[i].graphic.position.set(409,186+45*i+20+offset);
		fleet2[i].graphic.alpha = 0;
		fleet2[i].graphic.getChildAt(0).visible = false;
		fleet2[i].graphic.getChildAt(1).visible = false;
		fleet2[i].graphic.getChildAt(3).visible = false;
		fleet2[i].graphic.getChildAt(4).visible = false;
		stage.addChild(fleet2[i].graphic);
		addTimeout(function() {
			updates.push([function() {
				fleet2[i].graphic.y -= 2;
				fleet2[i].graphic.alpha += .1;
				if (fleet2[i].graphic.alpha >= 1) {
					fleet2[i].graphic.alpha = 1;
					return true;
				}
			},[]]);
		}, i*100+300);
	}
	
	let max1 = 0, max2 = 0, now1 = 0, now2 = 0;
	for (let ship of FLEETS1[0].ships) {
		now1 += Math.max(0,ship.HP);
		max1 += Math.max(0,ship.HPprev);
	}
	if (CHDATA.fleets.combined) {
		for (let ship of FLEETS1[1].ships) {
			now1 += Math.max(0,ship.HP);
			max1 += Math.max(0,ship.HPprev);
		}
	}
	for (var i=0; i<fleet2.length; i++) {
		now2 += Math.max(0,fleet2[i].hp);
		max2 += Math.max(0,fleet2[i].hpmax);
	}
	var hptarget1 = 1-(now2/max2), hptarget2 = 1-(now1/max1);
	resultBar1.g.alpha = 0;
	resultBar1.g.x = -20;
	resultBar1.g.y = offset;
	resultBar1.barFront.x = 0;
	resultBar1.timer = 0;
	stage.addChild(resultBar1.g);
	updates.push([function() {
		if (resultBar1.g.x < 0) { resultBar1.g.x += 2; resultBar1.g.alpha += .1; }
		else resultBar1.g.alpha = 1;
		resultBar1.barFront.x = 240*hptarget1*resultBar1.timer/50;
		return (++resultBar1.timer > 50);
	},[]]);
	resultBar2.g.alpha = 0;
	resultBar2.g.x = 20;
	resultBar2.g.y = offset;
	resultBar2.barFront.x = 0;
	resultBar2.timer = 0;
	stage.addChild(resultBar2.g);
	updates.push([function() {
		if (resultBar2.g.x > 0) { resultBar2.g.x -= 2; resultBar2.g.alpha += .1; }
		else resultBar2.g.alpha = 1;
		resultBar2.barFront.x = 240*hptarget2*resultBar2.timer/50;
		return (++resultBar2.timer > 50);
	},[]]);
	
	addTimeout(function() {
		updates.push([function() {
			resultBar2.g.x += 20;
			for (let ship of fleet2) ship.graphic.x += 20;
			return (resultBar2.g.x >= 500);
		},[]]);
	},1300);
	
	var cleared = CHDATA.event.unlocked == MAPNUM
		&& CHDATA.event.maps[MAPNUM].hp <= 0
		&& (!MAPDATA[WORLD].maps[MAPNUM].parts || !MAPDATA[WORLD].maps[MAPNUM].parts[CHDATA.event.maps[MAPNUM].part+1])
		&& !CHDATA.event.maps[MAPNUM].clear;
	var rlaurel;
	addTimeout(function() {
		rlaurel = getFromPool('resultlaurel','assets/maps/resultlaurel.png');
		rlaurel.pivot.set(121,121);
		rlaurel.position.set(592,240);
		rlaurel.alpha = 0;
		rlaurel.scale.set(2);
		stage.addChild(rlaurel);
		updates.push([function() {
			rlaurel.alpha += .05;
			rlaurel.scale.set(rlaurel.scale.x-.05);
			if (rlaurel.alpha >= 1) {
				rlaurel.alpha = 1;
				rlaurel.scale.set(1);
				return true;
			}
		},[]]);
		if (cleared) {
			if (MAPDATA[WORLD].maps[MAPNUM].clearSpecial) MAPDATA[WORLD].maps[MAPNUM].clearSpecial();
			else SM.play('ooyodoClear');
		}
	}, 1700);
	
	var rgraphic, mvpicon;
	addTimeout(function() {
		var rank = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.rankDay : CHDATA.temp.rank;
		CHDATA.temp.rankT = rank;
		var rsize;
		let bgm;
		switch(rank) {
			case 'S':
				rsize = 240;
				rgraphic = getFromPool('rankS','assets/maps/rankS.png');
				bgm = 3001;
				break;
			case 'A':
				rsize = 140
				rgraphic = getFromPool('rankA','assets/maps/rankA.png');
				bgm = 3002;
				break;
			case 'B':
				rsize = 140;
				rgraphic = getFromPool('rankB','assets/maps/rankB.png');
				bgm = 3003;
				break;
			case 'C':
				rsize = 140;
				rgraphic = getFromPool('rankC','assets/maps/rankC.png');
				bgm = 3004;
				break;
			case 'D':
				rsize = 140;
				rgraphic = getFromPool('rankD','assets/maps/rankD.png');
				bgm = 3004;
				break;
			case 'E':
				rsize = 140;
				rgraphic = getFromPool('rankE','assets/maps/rankE.png');
				bgm = 3004;
				break;
		}
		if (WORLD == 22 || WORLD == 23) {
			bgm = bgm == 3004 ? 3011 : 3010;
		}
		SM.playBGM(bgm,null,true);
		rgraphic.position.set(592,238);
		rgraphic.pivot.set(121,121);
		rgraphic.size = rsize+300;
		rgraphic.scale.set(rgraphic.size/242);
		rgraphic.alpha = 0;
		stage.addChild(rgraphic);
		updates.push([function() {
			rgraphic.alpha = Math.min(1,rgraphic.alpha+.05);
			rgraphic.size -= 15;
			rgraphic.scale.set(rgraphic.size/242);
			return (rgraphic.size <= rsize);
		},[]]);
		
		var mvpindex = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.mvpDay : CHDATA.temp.MVP;
		mvpicon = getFromPool('mvp','assets/stats/MVP.png');
		mvpicon.alpha = 0;
		mvpicon.position.set(400,191+45*mvpindex+offset);
		stage.addChild(mvpicon);
		updates.push([function() {
			mvpicon.alpha += .025;
			if (mvpicon.alpha >= 1) {
				mvpicon.alpha = 1;
				return true;
			}
		},[]]);
		
	},2000);
	
	addTimeout(function() {
		SCREENCLICKFUNCTION = function() {
			SCREENCLICKFUNCTION = screenClickBlank;
			recycle(resultback);
			stage.removeChild(resultBar1.g);
			stage.removeChild(resultBar2.g);
			recycle(rgraphic);
			recycle(mvpicon);
			recycle(rlaurel);
			for (let ship of fleet1) stage.removeChild(ship.graphic);
			for (let ship of fleet2) stage.removeChild(ship.graphic);
			if (CHDATA.fleets.combined) for (let ship of fleet1C) stage.removeChild(ship.graphic);
			addTimeout(function() {
				updates.push([function() {
					shutterTop.alpha-=.1;
					shutterBottom.alpha-=.1;
					return (shutterTop.alpha <= 0);
				},[]]);
			}, 100);
			addTimeout(function() { SM.fadeBGM(); ecomplete = true; }, 266);
		}
	},2000);

	if (CHDATA.event.world == 98) {
		MAPDATA[98].chrGenerateDrop(CHDATA.temp);
	}
}

function FCFSelect() {
	var retreater, escorter;
	let fcfType = 0;
	if (FLEETS1[0].ships[0].HP/FLEETS1[0].ships[0].maxHP > .25) {
		if (CHDATA.fleets.combined) {
			if (FLEETS1[0].ships[0].equips.find(eq => eq.mid == 107)) {
				var d = getFCFShips(FLEETS1[0].ships,FLEETS1[1].ships);
				retreater = d[0]; escorter = d[1];
				fcfType = 107;
			}
			if (!(retreater && escorter)) {
				addTimeout(function() { ecomplete = true; }, 1);
				return;
			}
		} else {
			let has272 = !!FLEETS1[0].ships[0].equips.find(eq => eq.mid == 272);
			let has413 = !!FLEETS1[0].ships[0].equips.find(eq => eq.mid == 413);
			let canRetreat = false;
			if (has272 && CHDATA.fleets.sf) {
				fcfType = 272;
			}
			if (has413) {
				let isTS = true;
				if (FLEETS1[0].ships[0].type != 'CL' && FLEETS1[0].ships[0].type != 'DD') isTS = false;
				for (let i=1; i<FLEETS1[0].ships.length; i++) {
					if (FLEETS1[0].ships[i].type != 'DD' && FLEETS1[0].ships[i].type != 'CLT') isTS = false;
				}
				if (CHSHIPCOUNT.DD <= 0) isTS = false;
				if (CHSHIPCOUNT.CLT > 3) isTS = false;
				if (isTS) {
					fcfType = 413;
				}
			}
			if (fcfType) {
				for (let ship of FLEETS1[0].ships) {
					if (ship.HP/ship.maxHP <= .25 && ship.HP > 0 && !ship.retreated) {
						retreater = ship; break;
					}
				}
			}
		}
	}
	if (!retreater) {
		addTimeout(function() { ecomplete = true; }, 1);
		return;
	}
	
	stage.addChild(mapFCFyesbutton[1]);
	stage.addChild(mapFCFyesbutton[0]);
	stage.addChild(mapFCFnobutton[1]);
	stage.addChild(mapFCFnobutton[0]);
	mapFCFyesbutton[0].position.set(201,301); 
	mapFCFyesbutton[1].position.set(201,301); 
	mapFCFnobutton[0].position.set(419,301); 
	mapFCFnobutton[1].position.set(419,301);
	mapFCFyesbutton[0].interactive = mapFCFnobutton[0].interactive = true;
	
	var retreaterG = (retreater.isescort)? fleet1C[retreater.id].graphic : fleet1[retreater.id].graphic;
	var escorterG;
	stage.removeChild(retreaterG); stage.addChild(retreaterG);
	retreaterG.position.set(230,180);
	retreaterG.removeChild(retreaterG.mask);
	retreaterG.mask = null;
	if (escorter) {
		escorterG = (escorter.isescort)? fleet1C[escorter.id].graphic : fleet1[escorter.id].graphic;
		stage.removeChild(escorterG); stage.addChild(escorterG);
		escorterG.position.set(230,230);
		escorterG.removeChild(escorterG.mask);
		escorterG.mask = null;
	}
	
	var afterSelect = function() {
		if (FCFSELECT) {
			retreater.retreated = true;
			retreater.morale = 0;
			retreater.fuelleft = 0;
			if (fcfType == 272 || fcfType == 413) {
				retreater.HP = Math.max(1,retreater.HP-Math.floor(.2*retreater.maxHP));
			}
			if (fcfType == 413) {
				retreater.ammoleft = 0;
			}
			if (escorter) {
				escorter.retreated = true;
				escorter.morale = 0;
				escorter.fuelleft = 0;
			}
			chRefreshShipCountSortie();
		}
	
		mapFCFyesbutton[0].interactive = mapFCFnobutton[0].interactive = false;
		mapFCFyesbutton[0].alpha = mapFCFnobutton[0].alpha = 1;
		mapFCFyesbutton[1].alpha = mapFCFnobutton[1].alpha = 0;
		updates.push([function() {
			mapFCFyesbutton[0].x -= 15;
			mapFCFnobutton[0].x += 15;
			if (retreaterG.alpha > 0) retreaterG.alpha -= .05;
			if (escorter && escorterG.alpha > 0) escorterG.alpha -= .05;
			return (mapFCFnobutton[0].x >= 800);
		},[]]);
		
		addTimeout(function() {
			ecomplete = true;
			stage.removeChild(mapFCFyesbutton[0]); stage.removeChild(mapFCFyesbutton[1]); 
			stage.removeChild(mapFCFnobutton[0]); stage.removeChild(mapFCFnobutton[1]); 
			stage.removeChild(retreaterG);
			if (escorter) stage.removeChild(escorterG); 
		}, 500);
	};
	
	mapFCFyesbutton[0].callback = mapFCFnobutton[0].callback = afterSelect;
}

function continueSelect() {
	if (FLEETS1[0].ships[0].HP/FLEETS1[0].ships[0].maxHP <= .25 && !MAPDATA[WORLD].noForceFlagRetreat) {
		if (!FLEETS1[0].ships[0].repairs || !FLEETS1[0].ships[0].repairs.length) {
			eventqueue.push([endMap,[]]);
			addTimeout(function() { ecomplete = true; }, 1);
			return;
		}
	}
	
	stage.addChild(mapcontinuebutton[1]);
	stage.addChild(mapcontinuebutton[0]);
	stage.addChild(mapretreatbutton[1]);
	stage.addChild(mapretreatbutton[0]);
	mapcontinuebutton[0].position.set(201,162); 
	mapcontinuebutton[1].position.set(201,162); 
	mapretreatbutton[0].position.set(412,161); 
	mapretreatbutton[1].position.set(412,161);
	var afterSelect = function() {
		if (CONTINUESELECT) eventqueue.push([prepMap,[]]);
		else eventqueue.push([endMap,[]]);
	
		mapcontinuebutton[0].interactive = mapretreatbutton[0].interactive = false;
		mapcontinuebutton[0].alpha = mapretreatbutton[0].alpha = 1;
		mapcontinuebutton[1].alpha = mapretreatbutton[1].alpha = 0;
		updates.push([function() {
			mapcontinuebutton[0].x -= 15;
			mapretreatbutton[0].x += 15;
			return (mapretreatbutton[0].x >= 800);
		},[]]);
		
		addTimeout(function() {
			ecomplete = true;
			stage.removeChild(mapcontinuebutton[0]); stage.removeChild(mapcontinuebutton[1]); 
			stage.removeChild(mapretreatbutton[0]); stage.removeChild(mapretreatbutton[1]);
			mapcontinuebutton[0].interactive = mapretreatbutton[0].interactive = true;
		}, 500);
	};
	
	mapcontinuebutton[0].callback = mapretreatbutton[0].callback = afterSelect;
}

function shuttersSelect() {
	shutterTop.alpha = shutterBottom.alpha = 1;
	updates.push([closeShutters,[]]);
	SM.play('shuttersclose');
	
	mapNBnobutton[0].position.set(226,188); mapNBnobutton[1].position.set(207,170);
	mapNByesbutton[0].position.set(441,188); mapNByesbutton[1].position.set(422,170);
	mapNByesbutton[0].interactive = mapNBnobutton[0].interactive = true;
	
	addTimeout(function() {
		stage.addChild(mapNBnobutton[0]); stage.addChild(mapNBnobutton[1]); 
		stage.addChild(mapNByesbutton[0]); stage.addChild(mapNByesbutton[1]);
		stage.removeChild(bg);
		stage.addChildAt(bg2,0);
	}, 500);
	
	var afterNBSelect = function() {
		mapNBnobutton[0].interactive = mapNByesbutton[0].interactive = false;
		mapNBnobutton[0].alpha = mapNByesbutton[0].alpha = 1;
		mapNBnobutton[1].alpha = mapNByesbutton[1].alpha = 0;
		updates.push([function() {
			mapNBnobutton[0].x -= 15;
			mapNByesbutton[0].x += 15;
			return (mapNByesbutton[0].x >= 800);
		},[]]);
		if (NBSELECT==1) {
			addTimeout(function() {
				updates.push([openShutters,[]]);
				SM.play('shuttersopen');
			}, 700);
			addTimeout(function(){ ecomplete = true; }, 1700);
		} else {
			rollBackNightBattle();
			for (; e < eventqueue.length; e++) {
				if (eventqueue[e][0] == shuttersPostbattle) { eventqueue[e][1] = [true]; break; }
			}
			SM.fadeBGM();
			addTimeout(function(){
				mapNByesbutton[0].interactive = mapNBnobutton[0].interactive = true;
				stage.removeChild(mapNBnobutton[0]); stage.removeChild(mapNBnobutton[1]); 
				stage.removeChild(mapNByesbutton[0]); stage.removeChild(mapNByesbutton[1]);
				ecomplete = true;
			}, 1000);
		}
	};
	
	mapNBnobutton[0].callback = afterNBSelect;
	mapNByesbutton[0].callback = afterNBSelect;
}

function rollBackNightBattle() {
	for (var i=0; i<fleet1.length; i++) { //roll back HP to pre-NB
		FLEETS1[0].ships[i].HP = fleet1[i].hp;
		if (FLEETS1[0].ships[i].HP/FLEETS1[0].ships[i].maxHP > .25) FLEETS1[0].ships[i].protection = true;
		if (FLEETS1[0].ships[i].repairs) FLEETS1[0].ships[i].repairs = CHDATA.temp.repairsDay[i].slice();
	}
	for (var i=0; i<fleet1C.length; i++) {
		FLEETS1[1].ships[i].HP = fleet1C[i].hp;
		if (FLEETS1[1].ships[i].HP/FLEETS1[1].ships[i].maxHP > .25) FLEETS1[1].ships[i].protection = true;
		if (FLEETS1[1].ships[i].repairs) FLEETS1[1].ships[i].repairs = CHDATA.temp.repairsDayC[i].slice();
	}
}

function chUIRemoveSunk() {
	var found = false;
	for (var i=0; i<CHDATA.fleets[1].length; i++) {
		var sid = CHDATA.fleets[1][i];
		if (!sid) continue;
		var ship = CHDATA.ships[sid];
		if (ship.HP[0] <= 0) {
			ship.disabled = true;
			for (var j=0; j<ship.items.length; j++) {
				if (ship.items[j] == -1) continue;
				CHDATA.gears['x'+ship.items[j]].disabled = true;
			}
			chTableRemoveShip(1,i+1);
			found = true;
		}
	}
	if (CHDATA.fleets.combined) {
		for (var i=0; i<CHDATA.fleets[2].length; i++) {
			var sid = CHDATA.fleets[2][i];
			if (!sid) continue;
			var ship = CHDATA.ships[sid];
			if (ship.HP[0] <= 0) {
				ship.disabled = true;
				for (var j=0; j<ship.items.length; j++) {
					if (ship.items[j] == -1) continue;
					CHDATA.gears['x'+ship.items[j]].disabled = true;
				}
				chTableRemoveShip(2,i+1);
				found = true;
			}
		}
	}
	if (found) {
		DIALOGSORT = null;
		chFillDialogShip(1);
	}
}

function pushShipStatusToUI() {
	for (var i=0; i<FLEETS1[0].ships.length; i++) {
		chPushHP(1,i+1,FLEETS1[0].ships[i].HP);
		chPushResupply(1,i+1,FLEETS1[0].ships[i].fuelleft,FLEETS1[0].ships[i].ammoleft,FLEETS1[0].ships[i].planecount);
		chPushMorale(1,i+1,FLEETS1[0].ships[i].morale);
	}
	if (CHDATA.fleets.combined) {
		for (var i=0; i<FLEETS1[1].ships.length; i++) {
			chPushHP(2,i+1,FLEETS1[1].ships[i].HP);
			chPushResupply(2,i+1,FLEETS1[1].ships[i].fuelleft,FLEETS1[1].ships[i].ammoleft,FLEETS1[1].ships[i].planecount);
			chPushMorale(2,i+1,FLEETS1[1].ships[i].morale);
		}
	}
	if (CHDATA.fleets.supportN && FLEETS1S[0]) {
		for (var i=0; i<FLEETS1S[0].ships.length; i++) {
			chPushResupply(3,i+1,FLEETS1S[0].ships[i].fuelleft,FLEETS1S[0].ships[i].ammoleft,FLEETS1S[0].ships[i].planecount);
			chPushMorale(3,i+1,FLEETS1S[0].ships[i].morale);
		}
	}
	if (CHDATA.fleets.supportB && FLEETS1S[1]) {
		for (var i=0; i<FLEETS1S[1].ships.length; i++) {
			chPushResupply(4,i+1,FLEETS1S[1].ships[i].fuelleft,FLEETS1S[1].ships[i].ammoleft,FLEETS1S[1].ships[i].planecount);
			chPushMorale(4,i+1,FLEETS1S[1].ships[i].morale);
		}
	}
	for (var i=1; i<=3; i++) {
		if (CHDATA.fleets['lbas'+i] && LBAS[i-1]) {
			chPushResupply(5,i,0,0,LBAS[i-1].planecount,true);
		}
	}
}

function chUpdateMorale() {
	var results = CHDATA.temp;
	var rank = (!results.NBonly && !NBSELECT)? results.rankDay : results.rank;
	var mvp = (!results.NBonly && !NBSELECT)? results.mvpDay : results.MVP;
	var didNB = (!results.NBonly && NBSELECT);
	if (!CHDATA.fleets.combined) {
		updateMorale(FLEETS1[0].ships,rank,mvp,results.NBonly,didNB);
	} else {
		var mvpc = (!results.NBonly && !NBSELECT)? results.mvpDayC : results.MVPC;
		console.log('ESCORT MVP: '+mvpc);
		updateMorale(FLEETS1[0].ships,rank,((didNB)? 0 : mvp),results.NBonly,didNB);
		updateMorale(FLEETS1[1].ships,rank,mvpc,results.NBonly,didNB);
	}
}

function cleanNumber(num) {
	let r = 100;
	if (Math.abs(num*r - Math.round(num*r)) < .01) {
		return Math.round(num*r)/r;
	}
	return num;
}

function chUpdateSupply() {
	var results = CHDATA.temp;
	var baseF = (results.landbomb)? .08 : .2;
	var baseA = (results.landbomb)? .04 : .2;
	if (MAPDATA[WORLD].newResupplyCosts) {
		if (results.overrideCost) {
			baseF = results.overrideCost.fuel;
			baseA = results.overrideCost.ammo;
		} else if (results.landbomb) {
			baseF = .06;
		} else if (results.noammo) {
			baseF = .08;
		} else if (results.NBonly) {
			baseF = .1;
			baseA = .1;
		} else if (results.ambush) {
			baseF = .04;
			results.noammo = true;
		}
	}
	console.log(baseF + ' ' + baseA);
	var didNB = (results.rankDay && NBSELECT) || results.nightToDay2;
	
	let costSpecial = null, shipsSpecial = null, isECombined = !!FLEETS2[0].combinedWith && !results.nightToDay2;
	if (FLEETS1[0].didSpecial == 1) {
		let attackSpecial = FLEETS1[0].ships[0].attackSpecial;
		if (attackSpecial == 101 || attackSpecial == 102) costSpecial = 1.5;
		else if (attackSpecial == 104) costSpecial = MECHANICS.kongouSpecialBuff ? 1.2 : 1.3;
		if (costSpecial) shipsSpecial = getSpecialAttackShips(FLEETS1[0].ships,attackSpecial);
		FLEETS1[0].didSpecial = 2;
	}
	
	let num = (CHDATA.fleets.combined)? 2 : 1;
	for (let n=0; n<num; n++) {
		for (var i=0; i<FLEETS1[n].ships.length; i++) {
			var ship = FLEETS1[n].ships[i];
			if (ship.retreated) continue;
			ship.fuelleft -= 10*Math.floor(Math.max(1,baseF*ship.fuel))/ship.fuel;
			if (!results.noammo) {
				let subAmmo = Math.floor(Math.max(1,baseA*ship.ammo));
				if (didNB && !isECombined) subAmmo += Math.ceil(ship.ammo*baseA/2);
				if (costSpecial && shipsSpecial.indexOf(ship) != -1 && (!isECombined || !didNB)) subAmmo = Math.floor(subAmmo*costSpecial);
				ship.ammoleft -= 10*subAmmo/ship.ammo;
			}
			if (ship.fuelleft < 0) ship.fuelleft = 0;
			if (ship.ammoleft < 0) ship.ammoleft = 0;
			ship.fuelleft = cleanNumber(ship.fuelleft);
			ship.ammoleft = cleanNumber(ship.ammoleft);
			console.log(ship.name + ' ' + ship.fuelleft + ' ' + ship.ammoleft + ' ' + ship.fuel + ' ' + ship.ammo);
		}
	}
}

function chReturnSortie() {
	for (var i=0; i<FLEETS1[0].ships.length; i++) {
		if (!FLEETS1[0].supportType) FLEETS1[0].ships[i].morale -= 15;
		if (FLEETS1[0].ships[i].morale < 49) FLEETS1[0].ships[i].morale = 49;
	}
	if (CHDATA.fleets.combined && FLEETS1[1]) {
		for (var i=0; i<FLEETS1[1].ships.length; i++) {
			if (!FLEETS1[1].supportType) FLEETS1[1].ships[i].morale -= 15;
			if (FLEETS1[1].ships[i].morale < 49) FLEETS1[1].ships[i].morale = 49;
		}
	}
	if (CHDATA.fleets.supportN && FLEETS1S[0]) {
		var moralecost = 1 + Math.floor(5*Math.random());
		for (var i=0; i<FLEETS1S[0].ships.length; i++) {
			var ship = FLEETS1S[0].ships[i];
			ship.fuelleft -= 5;
			if (ship.fuelleft < 0) ship.fuelleft = 0;
			if (FLEETS1S[0].supportType == 1) ship.ammoleft -= 4;
			else ship.ammoleft -= 8;
			if (ship.ammoleft < 0) ship.ammoleft = 0;
			ship.morale -= moralecost;
			if (ship.morale < 49) ship.morale = 49;
		}
	}
	if (CHDATA.fleets.supportB && FLEETS1S[1]) {
		var moralecost = 1 + Math.floor(10*Math.random());
		for (var i=0; i<FLEETS1S[1].ships.length; i++) {
			var ship = FLEETS1S[1].ships[i];
			ship.fuelleft -= 5;
			if (ship.fuelleft < 0) ship.fuelleft = 0;
			if (FLEETS1S[1].supportType == 1) ship.ammoleft -= 4;
			else ship.ammoleft -= 8;
			if (ship.ammoleft < 0) ship.ammoleft = 0;
			ship.morale -= moralecost;
			if (ship.morale < 49) ship.morale = 49;
		}
	}
}

function chUIUpdateResources() {
	if (!CHDATA.event.resources) return;
	$('#resfuel').text(CHDATA.event.resources.fuel);
	$('#resammo').text(CHDATA.event.resources.ammo);
	$('#ressteel').text(CHDATA.event.resources.steel);
	$('#resbaux').text(CHDATA.event.resources.baux);
	$('#resbucket').text(CHDATA.event.resources.bucket || 0);
	$('#resibuild').text(CHDATA.event.resources.ibuild || 0);
}

function chUIUpdateItems() {
	if (!CHDATA.event.resources) return;
	$('#resDamecon').text(CHDATA.event.resources.damecon || 0);
	$('#resDamegami').text(CHDATA.event.resources.damegami || 0);
	$('#resRation').text(CHDATA.event.resources.ration || 0);
	$('#resSupply').text(CHDATA.event.resources.supply || 0);
	$('#resRepair').text(CHDATA.event.resources.repair || 0);
	$('#resSubmarine').text(CHDATA.event.resources.submarine || 0);
	
	let costs = {
		'damecon': 200,
		'damegami': 500,
		'ration': 100,
		'supply': 150,
		'repair': 200,
		'submarine': 166.667,
	};
	let yen = 0;
	for (let key in costs) yen += (CHDATA.event.resources[key] || 0) * costs[key];
	$('#resourcespace2').attr('title','\u00a5'+Math.round(yen));
}

function chApplySortieItems() {
	let result = { supply: false, ration: false };
	var num = (CHDATA.fleets.combined)? 2 : 1;
	var numOil = 0;
	for (var n=0; n<num; n++) {
		for (var i=0; i<FLEETS1[n].ships.length; i++) {
			var ship = FLEETS1[n].ships[i], hasRation = false;
			for (var equip of ship.equips) {
				if (equip.type == RATION) hasRation = true;
				if (equip.type == OILDRUM) numOil++;
			}
			if (hasRation) {
				ship.morale = Math.min(ship.morale+15,100);
				if (i > 0) FLEETS1[n].ships[i-1].morale = Math.min(FLEETS1[n].ships[i-1].morale+10,100);
				if (i < FLEETS1[n].ships.length-1) FLEETS1[n].ships[i+1].morale = Math.min(FLEETS1[n].ships[i+1].morale+10,100);
				result.ration = true;
				CHDATA.event.resources.ration = CHDATA.event.resources.ration + 1 || 1;
			}
		}
	}
	numOil = Math.min(3,numOil);
	if (numOil) {
		var amount = (CHDATA.fleets.combined)? .15 + .125*(numOil-1) : .25 + .11*(numOil-1);
		for (var n=0; n<num; n++) {
			for (var ship of FLEETS1[n].ships) {
				let fuel = 10*Math.floor(amount*ship.fuel)/ship.fuel;
				let ammo = 10*Math.floor(amount*ship.ammo)/ship.ammo;
				ship.fuelleft = Math.min(cleanNumber(ship.fuelleft + fuel), 10);
				ship.ammoleft = Math.min(cleanNumber(ship.ammoleft + ammo), 10);
				CHDATA.event.resources.fuel += Math.floor(amount*ship.fuel);
				CHDATA.event.resources.ammo += Math.floor(amount*ship.ammo);
			}
		}
		result.supply = true;
		CHDATA.event.resources.supply = CHDATA.event.resources.supply + numOil || numOil;
	}
	if (result.supply || result.ration) {
		pushShipStatusToUI();
		chUIUpdateResources();
		chUIUpdateItems();
	}
	return result;
}

function chGetShips(noRetreated) {
	var ships = [];
	for (var i=0; i<CHDATA.fleets[1].length; i++) {
		if (!CHDATA.fleets[1][i]) continue;
		if (noRetreated && FLEETS1[0].ships[i].retreated) continue;
		ships.push(CHDATA.ships[CHDATA.fleets[1][i]]);
	}
	if (CHDATA.fleets.combined) {
		for (var i=0; i<CHDATA.fleets[2].length; i++) {
			if (!CHDATA.fleets[2][i]) continue;
			if (noRetreated && FLEETS1[1].ships[i].retreated) continue;
			ships.push(CHDATA.ships[CHDATA.fleets[2][i]]);
		}
	}
	return ships;
}


function getLBASRange(ship) {
	if (MAPDATA[WORLD].lbasRangeMax) {
		var rangeMax = 0;
		for (var i=0; i<ship.items.length; i++) {
			if (ship.items[i] <= -1) continue;
			var eq = CHDATA.gears['x'+ship.items[i]];
			if (!LBASDATA[eq.masterId]) return 99;
			if (LBASDATA[eq.masterId].distance > rangeMax) rangeMax = LBASDATA[eq.masterId].distance;
		}
		return rangeMax;
	}
	var rangeMin = 9999, rangeScout = 0;
	for (var i=0; i<ship.items.length; i++) {
		if (ship.items[i] <= -1) continue;
		var eq = CHDATA.gears['x'+ship.items[i]];
		if (!LBASDATA[eq.masterId]) return 99;
		if (LBASDATA[eq.masterId].distance < rangeMin) rangeMin = LBASDATA[eq.masterId].distance;
		if (EQDATA[eq.masterId].type == SEAPLANE || EQDATA[eq.masterId].type == CARRIERSCOUT || EQDATA[eq.masterId].type == FLYINGBOAT || EQDATA[eq.masterId].type == LANDSCOUT) {
			rangeScout = Math.max(rangeScout,LBASDATA[eq.masterId].distance);
		}
	}
	if (rangeScout > rangeMin) rangeMin += Math.min(3,Math.round(Math.sqrt(rangeScout-rangeMin)));
	if (rangeMin == 9999) return 0;
	return rangeMin;
}

function getELoS33(fleet,coef,includeCombined) {
	coef = coef || 1;
	var los = 0;
	var ships = CHDATA.fleets[fleet].slice(), numShip = 0;
	if (includeCombined) ships = ships.concat(CHDATA.fleets[2]);
	for (var i=0; i<ships.length; i++) {
		var ship = CHDATA.ships[ships[i]];
		if (!ship) continue;
		if (CHDATA.sortie && FLEETS1[fleet-1] && FLEETS1[fleet-1].ships[i] && FLEETS1[fleet-1].ships[i].retreated) continue;
		numShip++;
		var shiplos = ship.LOS;
		for (var j=0; j<ship.items.length; j++) {
			if (ship.items[j] <= 0) continue;
			var eq = CHDATA.gears['x'+ship.items[j]];
			var eqd = EQDATA[eq.masterId];
			
			if (eqd.LOS) {
				var mod;
				switch(eqd.type) {
					default: mod = .6; break;
					case TORPBOMBER: mod = .8; break;
					case CARRIERSCOUT: mod = 1; break;
					case SEAPLANEBOMBER: mod = 1.1; break;
					case SEAPLANE: mod = 1.2; break;
				}
				var bonus = 0;
				var impr = (chAllowImprovement(eq.masterId) && eq.stars>0)? eq.stars : 0;
				if (impr && EQTDATA[eqd.type].improve && EQTDATA[eqd.type].improve.LOS) {
					bonus = Math.sqrt(impr)*EQTDATA[eqd.type].improve.LOS;
				}
				los += coef * mod * (eqd.LOS+bonus);
				shiplos -= eqd.LOS;
			}
		}
		los += Math.sqrt(shiplos);
	}
	los -= Math.ceil(CHDATA.player.level*.4);
	let numShipMax = includeCombined ? 12 : CHDATA.fleets.sf ? 7 : 6;
	los += 2*(numShipMax - numShip);
	return los;
}

function checkELoS33(los,routeMap) {
	var nextletter = null;
	var LOSs = Object.keys(routeMap).sort(function(a,b) { return (parseInt(a) > parseInt(b))? -1:1; } );
	if (los >= LOSs[0] || LOSs.length == 1) {
		nextletter = routeMap[LOSs[0]];
	} else {
		for (var i=0; i<LOSs.length-1; i++) {
			if (los < LOSs[i+1]) continue;
			var diff1 = los - LOSs[i+1], diff2 = LOSs[i] - LOSs[i+1];
			if (Math.random() < diff1/diff2) {
				nextletter = routeMap[LOSs[i]];
			} else {
				nextletter = routeMap[LOSs[i+1]];
			}
			break;
		}
		if (!nextletter) nextletter = routeMap[LOSs[LOSs.length-1]];
	}
	return nextletter;
}
function testGetLoSOld(fleetnum,includeCombined) {
	var los = 0;
	var ships = CHDATA.fleets[fleetnum].slice();
	if (includeCombined) ships = ships.concat(CHDATA.fleets[2]);
	var shiplos = 0;
	for (var i=0; i<ships.length; i++) {
		var ship = CHDATA.ships[ships[i]];
		if (!ship) continue;
		shiplos += ship.LOS;
		for (var j=0; j<ship.items.length; j++) {
			if (ship.items[j] <= 0) continue;
			var eq = CHDATA.gears['x'+ship.items[j]];
			var eqd = EQDATA[eq.masterId];
			
			if (eqd.LOS) {
				var mod;
				switch(eqd.type) {
					default: mod = 0; break;
					case RADARS: mod = 1; break;
					case RADARL: mod = 1; break;
					case CARRIERSCOUT: mod = 2; break;
					case SEAPLANEBOMBER: mod = 2; break;
					case SEAPLANE: mod = 2; break;
				}
				los += mod * eqd.LOS;
				shiplos -= eqd.LOS;
			}
		}
	}
	los += Math.sqrt(shiplos);
	return los;
}


function checkRouteUnlocks(hiddenRoutes,peekOnly, mapWideCheck) {
	if (!CHDATA.event.maps[MAPNUM].routes) CHDATA.event.maps[MAPNUM].routes = [];
	for (var key in hiddenRoutes) {
		key = parseInt(key);
		if (CHDATA.event.maps[MAPNUM].routes.indexOf(key) != -1) continue; 
		if (hiddenRoutes[key].unlock && hiddenRoutes[key].unlock(CHDATA.event.maps[MAPNUM].debuff || {})) {
			if (!peekOnly) CHDATA.event.maps[MAPNUM].routes.push(key);
			return key;
		}

		if (hiddenRoutes[key].unlockRules && mapWideCheck) {
			// --- Do a mapwide check (for part clear)
			hiddenRoutes[key].unlockRules.checkGimmickSteps();
		} 
		
		if (hiddenRoutes[key].unlockRules && hiddenRoutes[key].unlockRules.gimmickDone()) {
			if (!peekOnly) CHDATA.event.maps[MAPNUM].routes.push(key);
			return key;
		}
	}
	return null;
}

//-----------------
function mapEnemyRaid() {
	SM.play('siren');
	addTimeout(function() {
		updates.push([function() {
			mapShutterTop.alpha += .025;
			mapShutterBottom.alpha += .025;
			map.alpha -= .025;
			bottombar.alpha -= .025;
			bcompass.alpha -= .025;
			bneedle.alpha -= .025;
			mapship.alpha -= .025;
			mapAirBase.alpha -= .025;
			bcompass.x -= 4;
			bneedle.x -= 4;
			bcompass.rotation -= .05;
			bottombar.y += 2;
			for (var lettr in mapnodes) mapnodes[lettr].alpha -= .025;
			for (const lettr in mapNodeLetters) {
				for (const letterSprite of mapNodeLetters[lettr]) {
					letterSprite.alpha -= .025;
				}
			}
			return (map.alpha <= 0);
		},[]]);
		SM.fadeBGM();
		
	}, 2000);
	
	addTimeout(function() { ecomplete = true; }, 3500);
}

function doSimEnemyRaid(numLB,compd,forceHA) {
	var CHAPI = {battles:[],fleetnum:1,support1:3,support2:4,source:2,world:WORLD,mapnum:MAPNUM};
	var BAPI = {data:{},yasen:{},mvp:[],rating:'',node:'AB'};
	
	var fleetLB = new Fleet(0);
	var lbShips = [];
	for (var i=0; i<numLB; i++) {
		LBAS[i].AS = 0;
		var ship = new Ship(5001+i,'',0,1,200,0,0,0,50,45,0,0,0,0,[]);
		ship.HP = LBAS[i].HP;
		ship.protection = true;
		if (!CHDATA.fleets['lbas'+(i+1)] && LBAS[i].equips.length) ship.lbas = LBAS[i];
		lbShips.push(ship);
	}
	fleetLB.loadShips(lbShips);
	fleetLB.formation = LINEAHEAD;
	
	var fleetE = new Fleet(1);
	var shipsE = [];
	for (var i=0; i<compd.c.length; i++) {
		shipsE.push(createDefaultShip(compd.c[i]));
	}
	fleetE.loadShips(shipsE);
	fleetE.formation = ALLFORMATIONS[compd.f];
	if (forceHA) fleetE.highAltitude = true;
	
	simLBRaid(fleetLB,fleetE,BAPI);
	
	let totalHPLost = 0, airState = 0;
	for (let i=0; i<fleetLB.ships.length; i++) {
		let hpLost = LBAS[i].HP - fleetLB.ships[i].HP;
		totalHPLost += hpLost;
		if (LBAS[i].AS != 0) airState = LBAS[i].AS;
		if (hpLost >= 50 && CHDATA.fleets['lbas'+(i+1)]) {
			if (!LBAS[i].planecount.length) continue;
			let slot = 0; while (slot < LBAS[i].planecount.length && LBAS[i].planecount[slot] <= 0) slot++;
			let planesLost = 1+Math.floor(Math.random()*.2*LBAS[i].PLANESLOTS[slot]);
			LBAS[i].planecount[slot] -= planesLost;
			if (LBAS[i].planecount[slot] <= 0) LBAS[i].planecount[slot] = 0;
			chPushResupply(5,i+1,0,0,LBAS[i].planecount);
		}
		LBAS[i].HP = fleetLB.ships[i].HP;
	}
	let resourceLost = Math.floor(.9*totalHPLost + .1);
	if (Math.random() < .5) {
		CHDATA.event.resources.fuel += resourceLost;
	} else {
		CHDATA.event.resources.baux += resourceLost;
	}
	chUIUpdateResources();
	
	if (MAPDATA[WORLD].maps[MAPNUM].enemyRaid.debuffGive) {
		if (!CHDATA.event.maps[MAPNUM].debuff) CHDATA.event.maps[MAPNUM].debuff = {};
		MAPDATA[WORLD].maps[MAPNUM].enemyRaid.debuffGive(airState,totalHPLost);
	}
	
	if (MAPDATA[WORLD].maps[MAPNUM].debuffRules) {
		MAPDATA[WORLD].maps[MAPNUM].debuffRules.checkGimmickSteps('AB', {
			airstate: airState,
			totalHPLost: totalHPLost
		});
	}

	if (MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes) {
		let hiddenRoutes = MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes;

		for (var key in hiddenRoutes) {
			key = parseInt(key);
	
			hiddenRoutes[key].unlockRules.checkGimmickSteps('AB', {
				airstate: airState,
				totalHPLost: totalHPLost
			});
		}
	}

	for (const map in MAPDATA[WORLD].maps) {
		if (map == MAPNUM) continue;
		if (!MAPDATA[WORLD].maps[map].debuffRules) continue;
		if (MAPDATA[WORLD].maps[map].debuffRules.mapNum) continue;

		// --- Gimmick rules without map number = multi map debuff (eg : Spring 16 E5 E6)
		MAPDATA[WORLD].maps[map].debuffRules.checkGimmickSteps('AB', {
			airstate: airState,
			totalHPLost: totalHPLost
		});
	}
	
	CHAPI.battles.push(BAPI);
	CHAPI.fleet1 = [];
	for (var i=0; i<numLB; i++) {
		var equips = []; if (LBAS[i]) for (var equip of LBAS[i].equips) equips.push(equip.mid);
		CHAPI.fleet1.push({
			mst_id: 5001+i,
			equip: equips,
		});
	}
	return CHAPI;
}

function prepEnemyRaid() {
	var numLB = MAPDATA[WORLD].maps[MAPNUM].lbas;
	var enemyRaid = MAPDATA[WORLD].maps[MAPNUM].enemyRaid;
	let lastdance = (WORLD == 20)? CHDATA.event.maps[31].hp == 1 : chGetLastDance();
	var enemies = getEnemyComp(enemyRaid.compName,enemyRaid,CHDATA.event.maps[MAPNUM].diff,lastdance);
	let highAltitude = enemyRaid.highAltitude ? enemyRaid.highAltitude[CHDATA.event.maps[MAPNUM].diff] : false;
	var CHAPI = doSimEnemyRaid(numLB,enemies,highAltitude);
	
	stage = STAGEBATTLE;
	stage.addChild(bg);
	radar1.scale.set(0); radar2.scale.set(0);
	stage.addChild(radar1);
	stage.addChild(radar2);
	dots1.alpha = dots2.alpha = 0;
	stage.addChild(dots1);
	stage.addChild(dots2);
	
	bossBarReset();
	var eventqueueTemp = eventqueue.slice(), eTemp = e;
	eventqueue = [[shuttersPrebattle,[]]]; e = -1;
	processAPI(CHAPI);
	shutterTop2.y = 0; shutterBottom2.y = 210;
	// eventqueue = eventqueue.slice(0,4);
	eventqueue.push([function() {
		addTimeout(function() {
			shutterTop.alpha = shutterBottom.alpha = 1;
			updates.push([closeShutters,[]]);
			SM.play('shuttersclose');
		}, 700);
		addTimeout(function() { ecomplete = true; }, 1500);
	},[]]);
	eventqueue.push([function() {
		stage.removeChildren();
		stage.addChild(bg);
		stage.addChild(shutterTop2); stage.addChild(shutterBottom2);
		stage.addChild(shutterTop); stage.addChild(shutterBottom);
		while (dots1.children.length) recycle(dots1.getChildAt(0));
		while (dots2.children.length) recycle(dots2.getChildAt(0));
		stage = STAGEMAP;
		chResetMapSpritePos();
		eventqueue = eventqueueTemp;
		e = eTemp;
		if (WORLD < 22 || WORLD >= 36) SM.playBGM(MAPDATA[WORLD].maps[MAPNUM].bgmMap);
		addTimeout(function() { ecomplete = true; }, 500);
	},[]]);
	
	addTimeout(function() { ecomplete = true; }, 1);
}


function chChooseFriendFleet(friendFleets,friendFleetsStrong,strongExcludes) {
	let fleetDefault = friendFleets[0] || null;
	if (friendFleetsStrong) {
		if (strongExcludes) friendFleets = friendFleetsStrong;
		else friendFleets = friendFleets.concat(friendFleetsStrong).concat(friendFleetsStrong);
	}
	if (friendFleets.length <= 0) return null;
	let pool = (strongExcludes || !fleetDefault) ? [] : [fleetDefault];
	let curShips = FLEETS1[0].ships;
	if (CHDATA.fleets.combined) curShips = curShips.concat(FLEETS1[1].ships);
	for (let name of friendFleets) {
		if (name == fleetDefault) continue;
		let fleet = MAPDATA[WORLD].friendFleet[name];
		let found = false;
		if (fleet) {
			for (let ship of fleet.ships) {
				let mid = getBaseId(ship.mid);
				for (let shipC of curShips) {
					let midC = getBaseId(shipC.mid);
					if (mid == midC) { found = true; break; }	
				}
				if (found) break;
			}
		}
		if (!found) pool.push(name);
	}
	if (pool.length <= 0) return MAPDATA[WORLD].friendFleet[fleetDefault];
	let nameC = pool[Math.floor(Math.random()*pool.length)];
	return MAPDATA[WORLD].friendFleet[nameC];
}

function chLoadFriendFleet(friendData) {
	if (!friendData) return null;
	let fleet = new Fleet(0);
	let simShips = [];
	for (let ship of friendData.ships) {
		let sdata = SHIPDATA[ship.mid];
		let ShipType = window[sdata.type];
		let ev = sdata.EVbase + Math.floor((sdata.EV - sdata.EVbase)*ship.LVL/99);
		let asw = sdata.ASWbase + Math.floor((sdata.ASW - sdata.ASWbase)*ship.LVL/99);
		let los = sdata.LOSbase + Math.floor((sdata.LOS - sdata.LOSbase)*ship.LVL/99);
		let simShip = new ShipType(ship.mid,'',0,ship.LVL,sdata.HP,ship.FP,ship.TP,ship.AA,ship.AR,ev,asw,los,sdata.LUK,sdata.RNG,sdata.SLOTS);
		simShip.loadEquips(ship.equips,[],[],true);
		if (CHDATA.config.mechanics.equipBonus) {
			let bonus = getBonusStats(ship.mid,ship.equips,ship.equips.map(eq => 0));
			for (let stat in bonus) {
				simShip[stat] += bonus[stat];
			}
		}
		
		if (ship.damage) {
			let percent = ship.damage[0] + Math.random()*(ship.damage[1]-ship.damage[0]);
			simShip.HP = Math.floor(simShip.HP*percent);
		}
		simShips.push(simShip);
		
		if (friendData.voice && ship.mid == friendData.voice[0]) simShip.voiceFriend = [friendData.voice[1],1];
	}
	fleet.loadShips(simShips);
	fleet.formation = LINEAHEAD;
	return fleet;
}

function chAnchorageRepair() {
	let type = 0, didRepair = false;
	let ships = FLEETS1[0].ships;
	if (FLEETS1[1]) ships = ships.concat(FLEETS1[1].ships);
	let shipR;
	if (shipR = ships.find(ship => ship.mid == 187 && ship.apiID2 != 1 && ship.HP/ship.maxHP > .5)) type = 1;
	else if (shipR = ships.find(ship => ship.mid == 450 && ship.apiID2 != 1 && ship.HP/ship.maxHP > .5)) type = 2;
	if (!type) return false;
	if (type == 2 && !FLEETS1[1]) return false;

	let hpAmount = 0, shipsRepair = [];
	if (type == 1) {
		hpAmount = .3;
		for (let i=0; i<shipR.equips.length; i++) {
			if (shipR.equips[i].type != SRF) continue;
			if (i == 0) shipsRepair.push.apply(shipsRepair,FLEETS1[0].ships.slice(0,3));
			if (i == 1) shipsRepair.push.apply(shipsRepair,FLEETS1[0].ships.slice(3));
			if (!FLEETS1[1]) continue;
			if (i == 2) shipsRepair.push.apply(shipsRepair,FLEETS1[1].ships.slice(0,3));
			if (i == 3) shipsRepair.push.apply(shipsRepair,FLEETS1[1].ships.slice(3));
		};
	} else if (type == 2) {
		hpAmount = .25;
		let fleet = FLEETS1[1] || FLEETS1[0];
		for (let i=0; i<shipR.equips.length; i++) {
			if (shipR.equips[i].type != SRF) continue;
			if (i == 0) shipsRepair.push.apply(shipsRepair,FLEETS1[1].ships.slice(0,3));
			if (i == 1) shipsRepair.push.apply(shipsRepair,FLEETS1[1].ships.slice(3));
		};
	}
	for (let ship of shipsRepair) {
		if (!ship) continue;
		if (ship.HP >= ship.maxHP) continue;
		if (ship.HP/ship.maxHP <= .25) continue;
		ship.HP += Math.ceil(hpAmount*ship.maxHP);
		if (ship.HP > ship.maxHP) ship.HP = ship.maxHP;
		ship.morale += 15 + Math.floor(Math.random()*6);
		if (ship.morale > 100) ship.morale = 100;
		didRepair = true;
	}
	pushShipStatusToUI();
	
	if (didRepair) {
		CHDATA.event.resources.repair = CHDATA.event.resources.repair + 1 || 1;
		chUIUpdateItems();
	}
	
	return didRepair;
}


function getSpeedUp(shipId,equipIds) {
	let sdata = SHIPDATA[shipId];
	let speedUp = 0;
	let numTurbine = equipIds.filter(id => id == 33).length;
	let numBoiler = equipIds.filter(id => id == 34 || id == 87).length;
	let numBoilerNM = equipIds.filter(id => id == 87).length;
	
	let group = 3;
	if ([9,22,31,33,43,81,112].includes(sdata.sclass)) {
		group = 1;
	} else if ([6,17,25,37,41,65].includes(sdata.sclass) || [181,331,404].includes(getBaseId(shipId)) || [541,573].includes(shipId)) {
		group = 2;
	} else if (['SS','SSV'].includes(sdata.type) || (sdata.type == 'AV' && sdata.SPD >= 10) || [3,45,49,60].includes(sdata.sclass) || [115,293].includes(shipId)) {
		group = 0;
	}
	
	if (numTurbine) {
		if (numBoiler) {
			speedUp = 5;
		}
		if ((sdata.type == 'DD' || sdata.type == 'CL') && sdata.SPD <= 5) {
			speedUp = 5;
		}
		if (group == 1) {
			if (numBoilerNM || numBoiler >= 2) {
				speedUp = 10;
			}
		} else if (group == 2) {
			if (numBoilerNM >= 2 || (numBoilerNM && numBoiler >= 2)) {
				speedUp = 10;
			}
			if (numBoilerNM >= 3 || (numBoilerNM && numBoiler >= 3)) {
				speedUp = 15;
			}
		} else if (group == 3) {
			if (numBoilerNM >= 2 || numBoiler >= 3) {
				speedUp = 10;
			}
		}
	}
	if (sdata.sclass == 109) {
		if (numBoilerNM) {
			speedUp = 5;
		}
		if (numTurbine && numBoilerNM) {
			speedUp = 10;
		}
	}
	
	return Math.min(speedUp, 20 - sdata.SPD);
}