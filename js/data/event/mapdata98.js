const ABYSSALS_ON = false;
const LEVEL_CAP = 2000;
const LEVEL_SOFT_CAP = 200;

MAPDATA[98] = {
    name: 'Random Fiesta',
    date: '2025-02-02',
    diffMode: 2,
    allowDiffs: [3,2,1],
    allowFleets: [0,1,2,3,7],
    allowLBAS: true,
    allowVanguard: true,
    vanguardConsts: { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 },
    newResupplyCosts: true,
    bannerImg: 'assets/maps/98/banner.png',
    bannerImgAlt: 'assets/maps/98/banner.png',
    transportCalc: function(ships,rank) {
        rank = rank || 'S';
        let tp = transportCalcStandard(ships,'S');
        for (let ship of ships) {
            if (!ship) continue;
            for (let item of ship.items) {
                if (item <= 0) continue;
                let eq = CHDATA.gears['x'+item];
                let eqd = EQDATA[eq.masterId];
                if (eqd.type == LANDINGTANK) tp += 18;
            }
        }
        tp = Math.floor(tp);
        if (rank == 'A') tp *= 0.7;
        if (rank != 'S' && rank != 'A') return 0;
        return Math.floor(tp);
    },
    get maps (){
        return randomizeMaps();
    },
    chProcessCreateRandomFile: (name) => {
        CHDATA = {};
        CHDATA.kcdata = {};
        CHDATA.randomFile = true;
        CHDATA.kcdata.player = {};
        CHDATA.kcdata.player.name = name;
        CHDATA.kcdata.player.level = 120;
    
        CHDATA.kcdata.gears = {};
    
        CHDATA.kcdata.ships = {};        

        CHDATA.maps = undefined;
    },
    chrProcessAfterFileCreation() {
        for (let id = 1; id < 50; id++){
            MAPDATA[98].chrCreateRandomShip();
        }

        for (let id = 1; id < 200; id++){
            MAPDATA[98].chrCreateRandomEquipment();
        }
        
        InitUI();
    },
    chrCreateRandomShip: (displayMode) => {
        MAPDATA[98].chrAddShip(displayMode ? displayMode : 1);
    },
    /**
     * 
     * @param {1 | 2} displayMode  1 => log below sortie 2 => ship reward
     */
    chrAddShip: (displayMode) => {
        let level = Math.max(1, Math.floor(Math.random() * 100));

        shipKeys = Object.keys(SHIPDATA);
    
        let max_id = ABYSSALS_ON ? 3000 : 1500;
        let min_id = ABYSSALS_ON ? 1500 : 0;

        shipKeys = shipKeys.filter((value => {
            return parseInt(value) < max_id && parseInt(value) > min_id;
        }));

        let mid = parseInt(chGetRandomShipId());
        let id = chrAddShip(mid, level);

        let ship = CHDATA.ships['x'+id];

        let message = `Ship ${SHIPDATA[ship.masterId].name} added `;

        let statList = ['FP', 'TP', 'AA', 'AR', 'LUK'];

        // --- Boost
        let index = Math.floor(statList.length * Math.random());
        let stat = statList[index];
        let boost = Math.floor((ship[stat] * 1.1) - ship[stat]);
        ship[stat] += boost;

        statList.splice(index, 1);

        message += `(+${boost} ${stat}`;

        // --- negative boost ? or second boost
        index = Math.floor(statList.length * Math.random());
        stat = statList[index];
        boost = Math.floor((ship[stat] * 1.1) - ship[stat]);

        if (Math.random() > 0.5) {
            boost *= -1;
        }
        
        ship[stat] += boost;
    
        message += ` ${boost > 0 ? '+' : ''}${boost} ${stat})`;

        if (displayMode == 1)
            chrDisplayLog(message);
        if (displayMode == 2) 
            chShowReward({ ships: [mid]});

		chFillDialogShip(1);
    },
    chrCreateRandomEquipment: (displayType, gearType) => {
        MAPDATA[98].chrAddEquipment(displayType, gearType);
    },
    chrAddEquipments: (gearType, equipId, count) => {

        for (let index = 0; index < count; index++) {
            if (index == 0) MAPDATA[98].chrAddEquipment(3, gearType, equipId);
            else MAPDATA[98].chrAddEquipment(4, gearType, equipId);
        }

    },
    /**
     * 
     * @param {*} displayType 
     * @param {*} gearType 
     * @param {*} equipId 
     * @returns 
     */
    chrAddEquipment: (displayType, gearType, equipId) => {    
        let mid;

        if (equipId) mid = equipId;
        else mid = chrGetRandomEquipmentId(gearType);

        if (!EQDATA[mid]) return;
        let eqid;
    
        for (var j=0; j<2000; j++) {
            eqid = 'x'+(90000+j);
            if (CHDATA.gears[eqid]) continue;
    
            console.log("eqid: "+eqid);
            console.log("mid: "+mid);

            var newequip = {
                itemId: eqid,
                masterId: mid,
                lock: 1,
                stars: Math.floor(Math.random() * 11),
                ace: ((EQTDATA[EQDATA[mid].type].isPlane)? 7 : -1)
            };
            CHDATA.gears[eqid] = newequip;

            let message = `Equipment ${EQDATA[mid].name} ${newequip.stars ? '(+'+newequip.stars +')' : ''} added`;
            

            if (displayType == 3) {
                chrShowInfoPopup("Equipment added", message);
            }
            else if (displayType == 4) {
                $("#chrdialoginfo").append("<br>");
                $("#chrdialoginfo").append(message);
            } else {
                chrDisplayLog(message);
            }

            $('#equipfilters').html('');
            $('#equipselecttable').html('');
            $('#chrequipfilters').html('');
            $('#chrequipselecttable').html('');
	        chDialogItemInit();
	        chrDialogItemInit();
    
            return (90000+j);
        }
    
        return 0;
    },
    chrGenerateDrop: (result) => {
        // --- defeat ?
        if (!['S', 'A', 'B'].includes(result.rank)) return;

        let modifier = 1;

        if (result.rank == 'A') {
            modifier = 0.75;
        }

        if (result.rank == 'B') {
            modifier = 0.5;
        } 

        if (result.noammo) return;
        if (result.ambush) return;
        if (result.landbomb) return;
        
        // --- Boss always give ship
        if (result.boss) {

            // --- ships drops
            let chances = [2, 0.5, 0.1];

            for (let chance of chances) {
                if (Math.random() < chance * modifier) {
                    MAPDATA[98].chrCreateRandomShip();
                }
            }

            // --- Equipment drops
            chances = [1.5, 0.75, 0.25];

            for (let chance of chances) {
                if (Math.random() < chance * modifier) {
                    MAPDATA[98].chrCreateRandomEquipment();
                }
            }            
        }
        else {
            // --- ships drops
            let chances = [0.25];

            for (let chance of chances) {
                if (Math.random() < chance * modifier) {
                    MAPDATA[98].chrCreateRandomShip();
                }
            }

            // --- Equipment drops
            chances = [0.5];

            for (let chance of chances) {
                if (Math.random() < chance * modifier) {
                    MAPDATA[98].chrCreateRandomEquipment();
                }
            }    
        }
    },
    /**
     * Loaded dynamically
     */
    chrMapCount : null,
    chrLoadMapCount: () => {
        MAPDATA[98].chrMapCount = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
        };

        for (const eventKey in MAPDATA) {
            if (eventKey > 90) continue;

            let event = MAPDATA[eventKey];

            if (!event.maps) continue;

            for (let index = 0; index <= 7; index++) {
                
                if (event.maps[index]) {
                    MAPDATA[98].chrMapCount[index]++;
                }               
            }

        }
    },
    /**
     * Returns true if the map is cleared
     */
    chrGetClearedMap : () => {
        if (!CHDATA.event.mapClearData) return false;
        if (!CHDATA.config.REQUIRED_CLEAR_COUNT) {
            CHDATA.config.REQUIRED_CLEAR_COUNT = 1;
        }

        if (!MAPDATA[98].chrMapCount) {
            MAPDATA[98].chrLoadMapCount();
        }
        
        let requiredClearCount = Math.min(CHDATA.config.REQUIRED_CLEAR_COUNT, MAPDATA[98].chrMapCount[MAPNUM]);    

        let clearCount = 0;

        for (const eventKey in CHDATA.event.mapClearData) {
            if (CHDATA.event.mapClearData[eventKey][MAPNUM]) {
                clearCount++;
            }
        }

        return clearCount >= requiredClearCount;   
    },
    chrRerollMap : () => {
        CHDATA.maps[MAPNUM] = chRandomizeMap(MAPNUM);

        if (RANDOMAPS) {
            MAPDATA[97].ChrRandomizeMap(WORLD, MAPNUM);
            MAPDATA[97].initializeMap(WORLD, MAPNUM);
        }
        
        chSortieStartChangeDiff();
        CHDATA.event.maps[MAPNUM] = {visited: Array(0), hp: null}
        chLoadSortieInfo(MAPNUM);
    
        chRerollComps();
    
        InitUI();

        MAPDATA[98].chrApplySpecialItemsOnMapUnlock();
    },
    chrApplySpecialItemsOnMapUnlock : () => {
        switch (MAPNUM) {
            case 3:
                switch (parseInt(WORLD)) {
                    case 50:
                        /**
                         * For spring 21, give drums to the player
                         */
                        MAPDATA[98].chrAddEquipments(null, 75, 5);
                        break;
                    case 37:
                        /**
                         * For winter 17, give dissasembled saiun to the player
                         */
                        MAPDATA[98].chrAddEquipments(null, 209, 2);
                        break;
                    default:
                        break;
                }
                break;
        
            default:
                break;
        }
    }
}

/**
 * Display text in the log below the sortie space
 * @param {*} message 
 */
function chrDisplayLog (message) {
    $("#eventLog").append(message + '<br>');
}

/**
 * Clear the text in the log below the sortie space
 */
function chrClearLog () {
    $("#eventLog").empty();
}

function chrInitFile(name) {
	MAPDATA[98].chProcessCreateRandomFile(name);

	$('#menusdone').prop('disabled', false);
	$('#menufname').text(CHDATA.kcdata.player.name);
	$('#menufhq').text(CHDATA.kcdata.player.level);
	$('#menufinfo').show();
	$('#menusettings').show();
}

function chrGetRandomEquipmentId(gearType) {
    var types;
    switch (parseInt(gearType)) {
        default: case 1: types=[MAINGUNS,MAINGUNSAA]; break;
        case 13: types=[MAINGUNM]; break;
        case 14: types=[MAINGUNL,MAINGUNXL]; break;
        case 2: types=[SECGUN,SECGUNAA]; break;
        case 3: types=[TORPEDO,TORPEDOSS,MIDGETSUB]; break;
        case 4: types=[SEAPLANE,SEAPLANEBOMBER,SEAPLANEFIGHTER,FLYINGBOAT]; break;
        case 5: types=[FIGHTER,INTERCEPTOR]; break;
        case 6: types=[DIVEBOMBER,LANDBOMBER,LANDBOMBERL]; break;
        case 7: types=[TORPBOMBER]; break;
        case 8: types=[CARRIERSCOUT,AUTOGYRO,ASWPLANE,JETBOMBER,JETSCOUT,CARRIERSCOUT2,LANDSCOUT]; break;
        case 9: types=[RADARS,RADARL,RADARXL]; break;
        case 10: types=[DEPTHCHARGE,SONARS,SONARL]; break;
        case 11: types=[APSHELL,TYPE3SHELL]; break;
        case 15: types=[AAGUN]; break;
        case 16: types=[ENGINE]; break;
        case 17: types=[SEARCHLIGHTS,SEARCHLIGHTL,STARSHELL,PICKET]; break;
        case 12: types=[BULGEM,BULGEL,AAFD,LANDINGCRAFT,LANDINGTANK,WG42,SRF,FCF,DRUM,SCAMP,REPAIR,SUBRADAR,TRANSPORTITEM,RATION,OILDRUM]; break;
    }

	var keys = [];
    
    let max_id = ABYSSALS_ON ? 1000 : 500;
    let min_id = ABYSSALS_ON ? 1 : 1;

    for (let i = min_id; i < max_id; i++) {
        if (!EQDATA[i]) continue;

        if (gearType && types.indexOf(EQDATA[i].type) == -1) continue;
                
        keys.push(i);
    }

    return keys[keys.length * Math.random() << 0];
}

function chrDialogShip(callback, filter, getBannedShips) {
	$('#chrshipselectdialog').dialog('open');
    $("#shipfilterBySearch").val("");
	chrFillDialogShip(1, callback, filter, getBannedShips());

    $("#chrssremove").off().click(() => { callback(null); });

    // --- Sort buttons
    $("#shipsorterLevel").click(() => { chrFillDialogShip(1, callback, filter, getBannedShips()) });
    $("#shipsortName").click(() => { chrFillDialogShip(3, callback, filter, getBannedShips()) });
    $("#shipsortDate").click(() => { chrFillDialogShip(0, callback, filter, getBannedShips()) });

    // --- Filter 
    $("#shipfilterDD").click(() => {chrFilterDialogShip(['DD'], filter)});
    $("#shipfilterCL").click(() => {chrFilterDialogShip(['CL','CLT'], filter)});
    $("#shipfilterCA").click(() => {chrFilterDialogShip(['CA','CAV'], filter)});
    $("#shipfilterBB").click(() => {chrFilterDialogShip(['BB','FBB','BBV'], filter)});
    $("#shipfilterCVL").click(() => {chrFilterDialogShip(['CVL'], filter)});
    $("#shipfilterCV").click(() => {chrFilterDialogShip(['CV','CVB'], filter)});
    $("#shipfilterOther").click(() => {chrFilterDialogShip(['SS','SSV','AV','AS','AR','AO','CT','LHA','DE'], filter)});
    $("#shipfilterBySearch").change(() => {chrFilterDialogShipSearch()});

}

function chrDialogEquip(callback, filter, getBannedGears) {

	$('#chrdialogselequip').dialog('open');

    chrDialogItemFilter.callback = callback;
    chrDialogItemFilter.filter = filter;
    chrDialogItemFilter.getBannedGears = getBannedGears;

	chrDialogItemFilter(1);
}

function chrDialogItemFilter(category) {
	var types;
	switch (category) {
		default: case 1: types=[MAINGUNS,MAINGUNSAA]; break;
		case 13: types=[MAINGUNM]; break;
		case 14: types=[MAINGUNL,MAINGUNXL]; break;
		case 2: types=[SECGUN,SECGUNAA]; break;
		case 3: types=[TORPEDO,TORPEDOSS,MIDGETSUB]; break;
		case 4: types=[SEAPLANE,SEAPLANEBOMBER,SEAPLANEFIGHTER,FLYINGBOAT]; break;
		case 5: types=[FIGHTER,INTERCEPTOR]; break;
		case 6: types=[DIVEBOMBER,LANDBOMBER,LANDBOMBERL]; break;
		case 7: types=[TORPBOMBER]; break;
		case 8: types=[CARRIERSCOUT,AUTOGYRO,ASWPLANE,JETBOMBER,JETSCOUT,CARRIERSCOUT2,LANDSCOUT]; break;
		case 9: types=[RADARS,RADARL,RADARXL]; break;
		case 10: types=[DEPTHCHARGE,SONARS,SONARL]; break;
		case 11: types=[APSHELL,TYPE3SHELL]; break;
		case 15: types=[AAGUN]; break;
		case 16: types=[ENGINE]; break;
		case 17: types=[SEARCHLIGHTS,SEARCHLIGHTL,STARSHELL,PICKET]; break;
		case 12: types=[BULGEM,BULGEL,AAFD,LANDINGCRAFT,LANDINGTANK,WG42,SRF,FCF,DRUM,SCAMP,REPAIR,SUBRADAR,TRANSPORTITEM,RATION,OILDRUM]; break;
	}
	chrDialogShowItems(types, chrDialogItemFilter.callback, chrDialogItemFilter.filter, chrDialogItemFilter.getBannedGears());
	
	$('.itemfilter').each(function() { $(this).css('background-color',''); });
	$('#chritemfilter'+category).css('background-color','#78BEB5');
}

function chrDialogShowItems(types, callback, filter, bannedGears) {
	var STATS = ['DIVEBOMB','FP','TP','AA','AR','ACC','EV','ASW','LOS'];
    
    $("#chresremove").off('click');
    $("#chresremove").click(() => { callback(null) });
    
	$('#chrequipselecttable tr').each(function() {
		var include = true;
		var itemid = this.id;
		var item = CHDATA.gears[itemid];
		var eqid = item.masterId;
		var equip = EQDATA[eqid];
		if (item.disabled) include = false;
		if (include && types.indexOf(equip.type)==-1) include = false;

        if (filter && !filter(itemid)) include = false;
        if (bannedGears.indexOf(itemid) != -1) include = false;
						
		if (include) {
			$(this).css('display','');

            var tr = $(this);

            tr.off('click');
            tr.click(() => { callback(itemid) });
				
			if (!this.innerHTML) {
				tr.append('<td class="left" "><img src="assets/items/'+(equip.image || EQTDATA[equip.type].image)+'.png"/></td>');
				var td = $('<td></td>');
				td.append('<div style="position:absolute;z-index:1;margin-top:-10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:300px">'+equip.name+'</div><br>');
				var div = $('<div style="position:absolute;z-index:1;margin-top:-10px"></div>');
				for (var j=0; j<STATS.length; j++) {
					if (equip[STATS[j]]) div.append('<span><img class="imgstat" src="assets/stats/'+STATS[j].toLowerCase()+'.png"/>'+equip[STATS[j]]+'</span>');
				}
				td.append(div);
				if (CHDATA.config.mechanics.proficiency && item.ace>0) td.append($('<div style="position:absolute;margin-left:-5px;margin-top:-20px"><img src="assets/stats/prof'+item.ace+'.png" /></div>'));
				if (chAllowImprovement(eqid) && item.stars>0) td.append($('<div style="position:absolute;margin-left:-30px;margin-top:-1px;font-weight:bold;color:#45A9A5">+'+item.stars+'</div>'));
				tr.append(td);
				
				td.append('<img id="'+this.id+'bgimg" class="equipbgimg" />');
			}
		} else {
			$(this).css('display','none');
		}
	});
}

function chrFillDialogShip(sortmethod, callback, filter, bannedShips) {
    new Promise(() => {
        chrExecuteFillDialogShip(sortmethod, callback, filter, bannedShips);
    })
}

function chrExecuteFillDialogShip(sortmethod, callback, filter, bannedShips) {
	var table = $('#chrshipselecttable');
	table.html('');
	var ships = [];
	for (var sid in CHDATA.ships) {
		if (CHDATA.ships[sid].disabled) continue; //don't allow unreleased ships
		//if (CHDATA.fleets[3].includes(sid)) continue; //don't allow cheat ships // TODO REMOVE

        if (filter && !filter(sid)) continue;
        if (bannedShips.indexOf(sid) != -1) continue;

		ships.push(sid);
	}
	switch (sortmethod) {
		case 1: //level
			ships.sort(function(a,b) { return (CHDATA.ships[a].LVL > CHDATA.ships[b].LVL)? -1:1; }); break;
		case 2: //mid
			ships.sort(function(a,b) { return (CHDATA.ships[a].masterId < CHDATA.ships[b].masterId)? -1:1; }); break;
		case 3: //name
			ships.sort(function(a,b) { return (SHIPDATA[CHDATA.ships[a].masterId].name < SHIPDATA[CHDATA.ships[b].masterId].name)? -1:1; }); break;
		default: //id
			break;
	}
	for (var i=0; i<ships.length; i++) {
		var ship = CHDATA.ships[ships[i]];
		var shipd = SHIPDATA[ship.masterId];
        let shipId = ships[i];
		var tr = $('<tr id="ss'+ships[i]+'"></tr>');
        tr.click(() => {callback(shipId)});
		tr.append($('<td class="left" style="width:40px">'+ship.LVL+'</td>'));
		tr.append($('<td style="width:120px">'+shipd.name+'</td>'));
		tr.append($('<td style="width:40px">'+shipd.type+'</td>'));
		var htmllock = (ship.lock)? '<img src="assets/maps/lock'+ship.lock+'.png" style="position:absolute;margin-left:30px;margin-top:-3px"/>' : '';
		tr.append($('<td>'+htmllock+'<img src="assets/icons/'+shipd.image+'" /></td>'));
		let $stats = chMakeShipStats(ship);
		tr.append($('<td class="right">'+$stats+'</td>'));
		tr.append(chMakeShipHeartLock(ship.heartlock, ships[i]));
		table.append(tr);
	}
}

function chrFilterDialogShip(types, filter) {
	$('#chrshipselecttable > tbody > tr').each(function() {
		var sid = $(this).attr('id').replace('ss','');

		if (types && types.indexOf(SHIPDATA[CHDATA.ships[sid].masterId].type) == -1) $(this).hide();
		else $(this).show();
	});
}

function chrFilterDialogShipSearch() {
	let search = $("#shipfilterBySearch").val().toUpperCase();
	let shipname;

	$('#chrshipselecttable > tbody > tr').each(function() {
		var sid = $(this).attr('id').replace('ss','');

		shipname = SHIPDATA[CHDATA.ships[sid].masterId].name.toUpperCase();

		if (shipname.includes(search)) $(this).removeClass("filteredBySearch");
		else $(this).addClass("filteredBySearch");
	});
}

function chrDialogShipClose() {
	$('#chrshipselectdialog').dialog('close');
}

//#region Arsenal tab
function chrFillArsenalTab() {
    let wrap = $('<div>').addClass('ftwrap').width(1000);
    $('#chrSpace').html(wrap);

    wrap.append(chrFillArsenalTab.AddRerollShipGroup());
    wrap.append(chrFillArsenalTab.AddModernizationShipGroup());
    wrap.append(chrFillArsenalTab.AddRerollEquipGroup());
}

chrFillArsenalTab.AddRerollShipGroup = function () {
    let shipReroll = $('<div>').addClass('chrArsenalGroup');

    shipReroll.append($('<div>Scrap two ships to get a new one</div>').css({
        "font-weight": 600,
        "font-family": "Arial",
        "margin-left": '5px',
        "margin-bottom": '5px',
        "margin-top": '5px'
    }));

    let buttons = $('<div>').css({
        display: 'flex',
    });

    /**
     * @type {{
        getSelectedShip: getSelectedShip,
        getSelectedShipId: getSelectedShipId,
        element: shipSelectionGroup
    }[]}
     */
    let buttonsObjects = [];

    let getBannedShips = () => {
        let bannedShips = [];

        // --- Don't allow ships in fleet
        if (CHDATA && CHDATA.fleets) {
            for (let i = 1; i < 5; i++) {
                for (let ship of (CHDATA.fleets[i])) {
                    if (ship) {
                        bannedShips.push(ship);
                    }
                }
            }
        }
        
        // --- Dont allow already selected ships
        for (let shipButton of buttonsObjects) {
            let shipId = shipButton.getSelectedShipId();

            if (shipId)
                bannedShips.push(shipId);
        }

        return bannedShips;
    }

    let filter = (shipId) => {
        // Don't includ locked ships
        if (CHDATA.ships[shipId].heartlock) {
            return false;
        }

        return true;
    }
    
    let scrapShipsToCreateNewOne = () => {
        for (let shipButton of buttonsObjects) {
            // --- Remove ship
            chUnequipAllShipById(shipButton.getSelectedShipId());
            shipButton.getSelectedShip().disabled = true;
        }
        
        MAPDATA[98].chrCreateRandomShip(2);

        chrFillArsenalTab();
    }

    let buttonConfirm = $('<div class="chrt2name">Confirm</div>').css({
        "margin-left": '20px',
        display: 'none',
        padding: '10px',
        'padding-top': '20px',
    });
    buttonConfirm.click(scrapShipsToCreateNewOne);

    let callbackAfterShipSelected = () => {
        let ships = [];

        for (let shipButton of buttonsObjects) {
            let shipId = shipButton.getSelectedShipId();

            if (shipId)
                ships.push(shipId);
        }

        if (ships.length == 2)
            buttonConfirm.show();
        else 
            buttonConfirm.hide();
    }

    for (let i = 0; i < 2; i++) {
        // --- Add ship button
        let shipSelection = chrCreateShipSelectionArea(callbackAfterShipSelected, filter, getBannedShips);
        buttonsObjects.push(shipSelection);
        buttons.append(shipSelection.element);
    }

    buttons.append(buttonConfirm);

    shipReroll.append(buttons);

    return shipReroll;	
}

chrFillArsenalTab.AddRerollEquipGroup = function () {
    let gearReroll = $('<div>').addClass('chrArsenalGroup');

    gearReroll.append($('<div>Scrap four equipment to get a new one of the selected type</div>').css({
        "font-weight": 600,
        "font-family": "Arial",
        "margin-left": '5px',
        "margin-bottom": '5px',
        "margin-top": '5px'
    }));

    let buttons = $('<div>').css({
        display: 'flex',
        "flex-direction": "column"
    });

    /**
     * @type {{
        getSelectedGear: getSelectedGear,
        getSelectedGearId: getSelectedGearId,
        element: gearSelectionGroup
    }[]}
     */
    let buttonsObjects = [];

    let bannedGears = () => {
        let bannedGearsList = [];

        // Don't includ locked equip // TODO
        /*if (CHDATA.ships[shipId].heartlock) {
            return false;
        }*/

        // --- Don't allow equipped gear
        if (CHDATA && CHDATA.gears) {
            for (let gear of Object.values(CHDATA.gears).filter(x => x.heldBy)) {
                bannedGearsList.push(gear.itemId);
            }
        }

        // --- Dont allow already selected gear
        for (let gearButton of buttonsObjects) {
            let gearId = gearButton.getSelectedGearId();

            if (gearId)
                bannedGearsList.push(gearId);
        }

        return bannedGearsList;
    }

    let filter = (gearId) => {
        return true;
    }
    
    let scrapGearToCreateNewOne = () => {
        for (let gearButton of buttonsObjects) {
            // --- Remove gear
            gearButton.getSelectedGear().disabled = true;
        }

        let gearType = null;

        let elFilter = $("#filtergeartypece").find(".filterselected");

        if (elFilter) {
            gearType = $(elFilter).attr('geartype');
        }
        
        MAPDATA[98].chrCreateRandomEquipment(3, gearType);

        chrFillArsenalTab();
    }

    let buttonConfirm = $('<div class="chrt2name">Confirm</div>').css({
        "margin-left": "20px",
        "margin-top": "20px",
        "padding": "20px 10px 10px",
        "display": "block",
        "width": "90px",
        "text-align": "center",
        "height": "28px",
        display: "none"
    });
    buttonConfirm.click(scrapGearToCreateNewOne);

    let callbackAfterGearSelected = () => {
        let gears = [];

        for (let gearButton of buttonsObjects) {
            let gearId = gearButton.getSelectedGearId();

            if (gearId)
                gears.push(gearId);
        }

        if (gears.length == 4)
            buttonConfirm.show();
        else 
            buttonConfirm.hide();
    }

    for (let i = 0; i < 4; i++) {
        // --- Add gear button
        let gearSelection = chrCreateGearSelectionArea(callbackAfterGearSelected, filter, bannedGears);
        buttonsObjects.push(gearSelection);
        buttons.append(gearSelection.element);
    }
    
    buttons.append(chrCreateEquipTypeSelectionArea());

    buttons.append(buttonConfirm);

    gearReroll.append(buttons);

    return gearReroll;	
}

/**
 * Create a button to select a gear, callback is called when a gear is selected, returns an object that contains the element created and the methods to access selected gear
 * @param {*} callback 
 * @returns {{
        getSelectedGear: getSelectedGear,
        getSelectedGearId: getSelectedGearId,
        getSelectedGearData: getSelectedGearData,
        setTitle: setTitle
        element: gearSelectionGroup
    }}
 */
function chrCreateGearSelectionArea(callback, filter, getBannedGears) {
    let gearSelectionGroup = $("<div>");

    // --- Title
    let titleElement = $("<div>").addClass("chrGearSelectionTitle");

    let setTitle = (title) => {
        titleElement.text(title);
    };

    gearSelectionGroup.append(titleElement);

    // --- Button
    let gearSelectButton = $('<div class="chrt2name">Select an equipment</div>'); 

    let selectedGearId = null;

    let getSelectedGear = () => {
        if (!selectedGearId) return null;

        return CHDATA.gears[selectedGearId];
    };

    let getSelectedGearData = () => {
        let gear = getSelectedGear();
        if (!gear) return null;

        return EQDATA[gear.masterId];
    };
    
    let getSelectedGearId = () => {
        return selectedGearId;
    };

    gearSelectButton.click(() => {

        let callbackWithGearUpdate = (gearId) => {
            // --- Update ship selected stuff
            selectedGearId = gearId;

            let ship = getSelectedGearData();

            if (ship) {
                gearSelectButton.text(ship.name);
            } else {
                gearSelectButton.text("Select an equipment");
            }

            $('#chrdialogselequip').dialog('close');

            // --- Additionnal callback
            if (callback)
                callback(gearId);

            chrDialogShipClose();
        };

        chrDialogEquip(callbackWithGearUpdate, filter, getBannedGears);
    });

    gearSelectionGroup.append($('<div style="margin-left:15px"></div>').append(gearSelectButton));
    
    return {
        getSelectedGear: getSelectedGear,
        getSelectedGearId: getSelectedGearId,
        getSelectedGearData: getSelectedGearData,
        setTitle: setTitle,
        element: gearSelectionGroup
    }
}

function chrCreateEquipTypeSelectionArea() {

    let elSelection = $('<div id="filtergeartypece"></div>');
    elSelection.addClass({
        "padding-left": "10px",
        "padding-top": "10px",
    })

    elSelection.append('<img geartype="1"   class="itemfilter filterselected" src="assets/items/1.png"/>');
	elSelection.append('<img geartype="13"  class="itemfilter" src="assets/items/2.png"/>');
	elSelection.append('<img geartype="14"  class="itemfilter" src="assets/items/3.png"/>');
	elSelection.append('<img geartype="2"   class="itemfilter" src="assets/items/4.png" />');
	elSelection.append('<img geartype="3"   class="itemfilter" src="assets/items/5.png" />');
	elSelection.append('<img geartype="4"   class="itemfilter" src="assets/items/10.png" />');
	elSelection.append('<img geartype="5"   class="itemfilter" src="assets/items/6.png" />');
	elSelection.append('<img geartype="6"   class="itemfilter" src="assets/items/7.png" />');
	elSelection.append('<img geartype="7"   class="itemfilter" src="assets/items/8.png" />');
	elSelection.append('<img geartype="8"   class="itemfilter" src="assets/items/9.png" />');
	elSelection.append('<img geartype="9"   class="itemfilter" src="assets/items/11.png" "/>');
	elSelection.append('<img geartype="10"  class="itemfilter" src="assets/items/17.png" />');
	elSelection.append('<img geartype="11"  class="itemfilter" src="assets/items/13.png" />');
	elSelection.append('<img geartype="15"  class="itemfilter" src="assets/items/15.png" />');
	elSelection.append('<img geartype="16"  class="itemfilter" src="assets/items/19.png" />');
	elSelection.append('<img geartype="17"  class="itemfilter" src="assets/items/24.png" />');
	elSelection.append('<img geartype="12"  class="itemfilter" src="assets/items/25.png" />');

    elSelection.find(".itemfilter").click(function() {
        elSelection.find(".itemfilter").removeClass('filterselected');
        $(this).addClass('filterselected');
    });

    return elSelection;
}

/**
 * Select a ship to modernize.<br> 
 * Then select a ship that will be used as a fodder for the modernization.<br>
 * Level of the modernized ship will be increased by half of the fodder level.<br> 
 * For each level gained, a stat will be increased beyond its maximum value between the following : HP, FP, TP, AA, AR, LUCK.
 */
chrFillArsenalTab.AddModernizationShipGroup = function () {
    let shipModernization = $('<div>').addClass('chrArsenalGroup');

    let title = $('<div>Ship modernization</div>').css({
        "font-weight": 600,
        "font-family": "Arial",
        "margin-left": '5px',
        "margin-bottom": '5px',
        "margin-top": '5px'
    });

    shipModernization.append(title);

    title.append($(`<span title="

Select a ship to modernize.
Then select a ship that will be used as a fodder for the modernization.
Level of the modernized ship will be increased by half of the fodder level.
For each level gained, a stat will be increased beyond its maximum value between the following : HP, FP, TP, AA, AR, LUCK.
    
    ">?</span>`).addClass('chrHelpButton'));

    let buttons = $('<div>').css({
        display: 'flex',
    });

    let buttonsObjects = {
        buttonModernized: null,
        buttonFodder: null,
    };
    
    // --- Submit button
    let modernizeShip = () => {

        let modernizedShip = buttonsObjects.buttonModernized.getSelectedShip();
        let fodderShip = buttonsObjects.buttonFodder.getSelectedShip();

        let level = ChrShipModernization.calculateShipLevelAfterModernization(modernizedShip, fodderShip);

        // --- Dupe system 
        if (!modernizedShip.dupe) modernizedShip.dupe = 0;

        if (ChrShipModernization.isFodderSameMasterId(modernizedShip.masterId, fodderShip.masterId)) {
            modernizedShip.dupe += 1;
        }

        // --- Result
        let result = {
            'HP': 0,
            'FP': 0,
            'TP': 0,
            'AA': 0,
            'AR': 0,
            'LUK': 0,
        };

        let statList = ['HP', 'FP', 'TP', 'AA', 'AR', 'LUK'];

        
        let modernizedShipData = buttonsObjects.buttonModernized.getSelectedShipData();

        for (let currentLevel = modernizedShip.LVL; currentLevel < level; currentLevel++) {
            // --- Increase one stat
            let stat = null;
            
            while (!stat) {
                let index = Math.floor(statList.length * Math.random());
                stat = statList[index];

                // --- Dont increase stat if 0 (ex : torp stat on BB)
                if (modernizedShipData[stat] == 0) stat = null;
            }

            if (stat == 'HP') {
                modernizedShip[stat][0]++;
                modernizedShip[stat][1]++;
            } else {
                modernizedShip[stat]++;
            }

            result[stat]++;
        }

        const levelBefore = modernizedShip.LVL;
        modernizedShip.LVL = level;

        let shipName = modernizedShipData.name;
        let popupMessage = `${shipName} modernized ! Level increased to ${modernizedShip.LVL}.<br>`;

        for (let stat of statList) {
            if (result[stat])
                popupMessage += `• ${stat} +${result[stat]}<br>`
        }

        // --- Also recalculate ASW & LOS & EVA (HP through marriage is ignored)
        const EVafter = modernizedShipData.EVbase ? getEvasion(modernizedShipData, level) : modernizedShipData.EV;
        const EVbefore = modernizedShipData.EVbase ? getEvasion(modernizedShipData, levelBefore) : modernizedShipData.EV;
        const EVgain = EVafter - EVbefore;

        const LOSafter = modernizedShipData.LOSbase ? getLOS(modernizedShipData, level) : modernizedShipData.LOS;
        const LOSbefore = modernizedShipData.LOSbase ? getLOS(modernizedShipData, levelBefore) : modernizedShipData.LOS;
        const LOSgain = LOSafter - LOSbefore;

        const ASWafter = modernizedShipData.ASWbase ? getASW(modernizedShipData, level) : modernizedShipData.ASW;
        const ASWbefore = modernizedShipData.ASWbase ? getASW(modernizedShipData, levelBefore) : modernizedShipData.ASW;
        const ASWgain = ASWafter - ASWbefore;

        modernizedShip.LOS += LOSgain;
        modernizedShip.ASW += ASWgain;
        modernizedShip.EV += EVgain;

        // --- display message
        chrShowInfoPopup("Modernization", popupMessage);

        // --- Remove ship
        chUnequipAllShipById(buttonsObjects.buttonFodder.getSelectedShipId());
        fodderShip.disabled = true;

        // --- Update UI
        chrFillArsenalTab();
        chUpdateUIShipInfo(buttonsObjects.buttonModernized.getSelectedShipId());
    }

    let groupConfirm = $('<div>').css({
        display: 'none',
        'margin-top': '35px',
    });

    let buttonConfirm = $('<div class="chrt2name">Confirm</div>').css({
        "margin-left": '50px',
        padding: '10px',
    });
    buttonConfirm.click(modernizeShip);

    groupConfirm.append(buttonConfirm);

    let modernizationInfo = $("<span>").css('margin-left', '25px');
    groupConfirm.append(modernizationInfo);

    // --- Selection buttons
    let callbackAfterShipSelected = () => {
        if (!buttonsObjects.buttonFodder || !buttonsObjects.buttonFodder.getSelectedShipId())
            groupConfirm.hide();
        else if (!buttonsObjects.buttonModernized || !buttonsObjects.buttonModernized.getSelectedShipId())
            groupConfirm.hide();
        else  {
            let modernizedShip = buttonsObjects.buttonModernized.getSelectedShip();
            let fodderShip = buttonsObjects.buttonFodder.getSelectedShip();
    
            let level = ChrShipModernization.calculateShipLevelAfterModernization(modernizedShip, fodderShip);
            let levelMax = ChrShipModernization.calculateShipMaxLevel(modernizedShip, fodderShip);

            modernizationInfo.text(`${buttonsObjects.buttonModernized.getSelectedShipData().name} will be modernized to level ${level}/${levelMax}`); 
            groupConfirm.show();
        }
    }

    // --- Add ship button
    let filter = (shipId) => {
        // --- Dont allow already selected ships
        let fodderId = buttonsObjects.buttonFodder.getSelectedShipId();

        /*if (CHDATA.ships[shipId].LVL >= 175) 
            return false;*/
            
        // Don't includ unlocked ships TODO : remove for release
        if (!CHDATA.ships[shipId].heartlock) {
            return false;
        }

        return (fodderId != shipId);
    }

    let getBannedShips = () => {
        let banned = [];

        for (const shipId in CHDATA.ships) {
            
            if (CHDATA.ships[shipId].LVL >= LEVEL_CAP) banned.push(shipId);            
        }

        return banned;
    }

    let shipSelection = chrCreateShipSelectionArea(callbackAfterShipSelected, filter, getBannedShips);
    shipSelection.setTitle("Ship to modernize");
    buttonsObjects.buttonModernized = shipSelection;

    shipSelection.element.css({
        "margin-right": "20px"
    });
    buttons.append(shipSelection.element);

    // --- Add fodder button
    let filter2 = (shipId) => {
        let shipsInFleet = [];

        // Don't includ locked ships
        if (CHDATA.ships[shipId].heartlock) {
            return false;
        }

        // --- Don't allow ships in fleet
        if (CHDATA && CHDATA.fleets) {
            for (let i = 1; i < 5; i++) {
                for (let ship of (CHDATA.fleets[i])) {
                    if (ship) {
                        shipsInFleet.push(ship);
                    }
                }
            }
        }

        // --- Dont allow already selected ships
        let shipModernizedId = buttonsObjects.buttonModernized.getSelectedShipId();

        if (shipModernizedId)
            shipsInFleet.push(shipModernizedId);

        if (shipsInFleet.includes(shipId)) return false;

        return true;
    }

    let getBannedShips2 = () => {
        let shipsInFleet = [];

        // --- Don't allow ships in fleet
        if (CHDATA && CHDATA.fleets) {
            for (let i = 1; i < 5; i++) {
                for (let ship of (CHDATA.fleets[i])) {
                    if (ship) {
                        shipsInFleet.push(ship);
                    }
                }
            }
        }

        // --- Dont allow already selected ships
        let shipModernizedId = buttonsObjects.buttonModernized.getSelectedShipId();

        if (shipModernizedId)
            shipsInFleet.push(shipModernizedId);

        return shipsInFleet;
    }
    
    let fodderSelection = chrCreateShipSelectionArea(callbackAfterShipSelected, filter2, getBannedShips2);
    fodderSelection.setTitle("Fodder");
    buttonsObjects.buttonFodder = fodderSelection;
    buttons.append(fodderSelection.element);

    buttons.append(groupConfirm);

    shipModernization.append(buttons);

    return shipModernization;	
}
//#endregion  

/**
 * Create a button to select a ship, callback is called when a ship is selected, returns an object that contains the element created and the methods to access selected ship
 * @param {*} callback 
 * @returns {{
        getSelectedShip: getSelectedShip,
        getSelectedShipId: getSelectedShipId,
        getSelectedShipData: getSelectedShipData,
        setTitle: setTitle
        element: shipSelectionGroup
    }}
 */
function chrCreateShipSelectionArea(callback, filter, getBannedShips) {
    let shipSelectionGroup = $("<div>");

    // --- Title
    let titleElement = $("<div>").addClass("chrShipSelectionTitle");

    let setTitle = (title) => {
        titleElement.text(title);
    };

    shipSelectionGroup.append(titleElement);

    // --- Button
    let shipSelectButton = $('<div class="chrt2name">Select a ship</div>'); 

    let selectedShipId = null;

    let getSelectedShip = () => {
        if (!selectedShipId) return null;

        return CHDATA.ships[selectedShipId];
    };

    let getSelectedShipData = () => {
        let ship = getSelectedShip();
        if (!ship) return null;

        return SHIPDATA[ship.masterId];
    };
    
    let getSelectedShipId = () => {
        return selectedShipId;
    };

    let shipImage = $('<img src="assets/icons/Kblank.png" class="t2portrait" />');

    shipSelectButton.click(() => {

        let callbackWithShipUpdate = (shipId) => {
            // --- Update ship selected stuff
            selectedShipId = shipId;

            let ship = getSelectedShipData();

            if (ship) {
                shipSelectButton.text(ship.name);
                shipImage.attr('src', "assets/icons/"+ship.image);
            } else {
                shipSelectButton.text("Select a ship");
                shipImage.attr('src', "assets/icons/Kblank.png");
            }

            // --- Additionnal callback
            if (callback)
                callback(shipId);

            chrDialogShipClose();
        };

        chrDialogShip(callbackWithShipUpdate, filter, getBannedShips);
    });

    shipSelectionGroup.append($('<div style="text-align:center"></div>').append(shipSelectButton));
    shipSelectionGroup.append(shipImage);

    return {
        getSelectedShip: getSelectedShip,
        getSelectedShipId: getSelectedShipId,
        getSelectedShipData: getSelectedShipData,
        setTitle: setTitle,
        element: shipSelectionGroup
    }
}

function chrShowInfoPopup(title, html) {
    $("#chrdialoginfo").html(html);
    $("#chrdialoginfo").dialog("option", "title", title ? title : "");
    $("#chrdialoginfo").dialog('open');
}

/**
 * Updates the stats of a ship on the UI
 * @param {*} shipId 
 */
function chUpdateUIShipInfo(shipId) {
    const stats = {
        'LVL': "fleetlvl",
        'HP': "fleethp",
        'FP': "fleetfp",
        'TP': "fleettp",
        'AA': "fleetaa",
        'AR': "fleetar",
        'EV': "fleetev",
        'LOS': "fleetlos",
        'ASW': "fleetasw",
        'LUK': "fleetlk",
    };

    let updateShip = (fleet, slot) => {
        let ship = CHDATA.ships[shipId];

        for (let stat in stats) {
            if (stat == 'HP') {
                $('#'+stats[stat]+fleet+slot).text(ship[stat][0]+'/'+ship[stat][1]);
            } else {
                $('#'+stats[stat]+fleet+slot).text(ship[stat]);
            }
        }
    }

    for (let fleetNum = 1; fleetNum < 5; fleetNum++) {
        for (let shipSlot in CHDATA.fleets[fleetNum]) {
            if (CHDATA.fleets[fleetNum][shipSlot] == shipId)
                updateShip(fleetNum, parseInt(shipSlot)+1);
        }
    }
}

var ChrShipModernization = {
    calculateShipLevelAfterModernization: (modernizedShip, fodderShip) => {
        let levelMax = ChrShipModernization.calculateShipMaxLevel(modernizedShip, fodderShip);

        // --- Final level
        let level = Math.min(Math.floor(fodderShip.LVL / 2) + modernizedShip.LVL, levelMax);

        return Math.min(level, LEVEL_CAP);
    },
    calculateShipMaxLevel: (modernizedShip, fodderShip) => {
        let levelMax;

        // --- Dupe system
        let dupeNbr = modernizedShip.dupe ? modernizedShip.dupe : 0;

        if (ChrShipModernization.isFodderSameMasterId(modernizedShip.masterId, fodderShip.masterId)) {
            dupeNbr++;
        }

        let softcapDupeNumber = (LEVEL_SOFT_CAP - 100) / 25;

        if (dupeNbr >= softcapDupeNumber) {
            levelMax = LEVEL_SOFT_CAP + (5 * (dupeNbr - softcapDupeNumber));
        } else if (dupeNbr > 0) {
            levelMax = 100 + (25 * dupeNbr);
        } else {
            levelMax = 99;
        }

        return Math.min(levelMax, LEVEL_CAP);
    },
    /**
     * Return true if the ship modernized is the same as the fodder
     * @param {*} midShipModernized 
     * @param {*} midShipFodder 
     * @param {*} done Array to prevent infinite loop COGGERS
     * @returns 
     */
    isFodderSameMasterId: (midShipModernized, midShipFodder, done) => {
        if (!done) done = [];
        if (!midShipFodder) return false;

        // --- Already done ?
        if (done.includes(midShipFodder)) return false;

        // --- Same ship
        if (midShipModernized == midShipFodder) return true;

        done.push(midShipFodder);

        let shipData = SHIPDATA[midShipFodder];
        let midNext = shipData.next;
        let midPrevious = shipData.prev;

        // --- try previous & next ship
        return ChrShipModernization.isFodderSameMasterId(midShipModernized, midNext, done) || ChrShipModernization.isFodderSameMasterId(midShipModernized, midPrevious, done);
    },
}