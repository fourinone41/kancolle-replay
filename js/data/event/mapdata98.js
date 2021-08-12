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
    chrCreateRandomEquipment: () => {
        MAPDATA[98].chrAddEquipment();
    },
    chrAddEquipment: () => {    
        let mid = chrGetRandomEquipmentId();

        if (!EQDATA[mid]) return;
        let eqid;
    
        for (var j=0; j<1000; j++) {
            eqid = 'x'+(90000+j);
            if (CHDATA.gears[eqid]) continue;
    
            var newequip = {
                itemId: eqid,
                masterId: mid,
                lock: 1,
                stars: Math.floor(Math.random() * 11),
                ace: ((EQTDATA[EQDATA[mid].type].isPlane)? 7 : -1)
            };
            CHDATA.gears[eqid] = newequip;

            let message = `Equipment ${EQDATA[mid].name} ${newequip.stars ? '(+'+newequip.stars +')' : ''} added`;
            chrDisplayLog(message);

            $('#equipfilters').html('');
            $('#equipselecttable').html('');
	        chDialogItemInit();
    
            return (90000+j);
        }
    
        return 0;
    },
    chrGenerateDrop: (result) => {
        // --- defeat ?
        if (!['S', 'A', 'B'].includes(result.rank)) return;

        if (result.noammo) return;
        if (result.ambush) return;
        if (result.landbomb) return;
        
        // --- Boss always give ship
        if (result.boss) {
            MAPDATA[98].chrCreateRandomShip();
            
            // --- 50% to have another drop
            if (Math.random() > 0.5) {
                MAPDATA[98].chrGenerateDrop(result);
            }
        }
        else {
            // --- Else 25% chance for a ship
            if (Math.random() < 0.25) {
                MAPDATA[98].chrCreateRandomShip();
            } else {
                MAPDATA[98].chrCreateRandomEquipment();
            }
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

function chrGetRandomEquipmentId() {
	var keys = Object.keys(EQDATA);
    
    let max_id = ABYSSALS_ON ? 1000 : 500;
    let min_id = ABYSSALS_ON ? 0 : 0;
    
    keys = keys.filter((value => {
        return parseInt(value) < max_id && parseInt(value) > min_id;
    }));

    return keys[keys.length * Math.random() << 0];
}

function chrDialogShip(callback, filter) {
	$('#chrshipselectdialog').dialog('open');
	chrFillDialogShip(1, callback, filter);

    $("#chrssremove").off().click(() => { callback(null); });

    // --- Sort buttons
    $("#shipsorterLevel").click(() => { chrFillDialogShip(1, callback, filter) });
    $("#shipsortName").click(() => { chrFillDialogShip(3, callback, filter) });
    $("#shipsortDate").click(() => { chrFillDialogShip(0, callback, filter) });

    // --- Filter 
    $("#shipfilterDD").click(() => {chrFilterDialogShip(['DD'], filter)});
    $("#shipfilterCL").click(() => {chrFilterDialogShip(['CL','CLT'], filter)});
    $("#shipfilterCA").click(() => {chrFilterDialogShip(['CA','CAV'], filter)});
    $("#shipfilterBB").click(() => {chrFilterDialogShip(['BB','FBB','BBV'], filter)});
    $("#shipfilterCVL").click(() => {chrFilterDialogShip(['CVL'], filter)});
    $("#shipfilterCV").click(() => {chrFilterDialogShip(['CV','CVB'], filter)});
    $("#shipfilterOther").click(() => {chrFilterDialogShip(['SS','SSV','AV','AS','AR','AO','CT','LHA','DE'], filter)});

}

function chrFillDialogShip(sortmethod, callback, filter) {
    new Promise(() => {
        chrExecuteFillDialogShip(sortmethod, callback, filter);
    })
}

function chrExecuteFillDialogShip(sortmethod, callback, filter) {
	var table = $('#chrshipselecttable');
	table.html('');
	var ships = [];
	for (var sid in CHDATA.ships) {
		if (CHDATA.ships[sid].disabled) continue; //don't allow unreleased ships
		if (CHDATA.ships[sid].LVL > 180 && CHDATA.fleets[3].includes(sid)) continue; //don't allow cheat ships

        if (filter && !filter(sid)) continue;

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
	
	DIALOGSORT = sortmethod;

}

function chrFilterDialogShip(types, filter) {
	$('#chrshipselecttable > tbody > tr').each(function() {
		var sid = $(this).attr('id').replace('ss','');

		if (types && types.indexOf(SHIPDATA[CHDATA.ships[sid].masterId].type) == -1) $(this).hide();
		else $(this).show();
	});
}

function chrDialogShipClose() {
	$('#chrshipselectdialog').dialog('close');
}

//#region Arsenal tab
function chrFillArsenalTab() {
    $('#chrSpace').hide();
    $('#tabChr').hide();

    let wrap = $('<div>').addClass('ftwrap').width(1000);
    $('#chrSpace').html(wrap);

    wrap.append(chrFillArsenalTab.AddRerollShipGroup());
    wrap.append(chrFillArsenalTab.AddModernizationShipGroup());
}

chrFillArsenalTab.AddRerollShipGroup = function () {
    let shipReroll = $('<div>').addClass('chrArsenalGroup');

    shipReroll.append($('<div>Scrap 4 ships to get a new one</div>').css({
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

    let filter = (shipId) => {
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
        for (let shipButton of buttonsObjects) {
            let shipId = shipButton.getSelectedShipId();

            if (shipId)
                shipsInFleet.push(shipId);
        }

        if (shipsInFleet.includes(shipId)) return false;
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

        if (ships.length == 4)
            buttonConfirm.show();
        else 
            buttonConfirm.hide();
    }

    for (let i = 0; i < 4; i++) {
        // --- Add ship button
        let shipSelection = chrCreateShipSelectionArea(callbackAfterShipSelected, filter);
        buttonsObjects.push(shipSelection);
        buttons.append(shipSelection.element);
    }

    buttons.append(buttonConfirm);

    shipReroll.append(buttons);

    return shipReroll;	
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

        modernizedShip.LVL = level;

        let shipName = modernizedShipData.name;
        let popupMessage = `${shipName} modernized ! Level increased to ${modernizedShip.LVL}.<br>`;

        for (let stat of statList) {
            if (result[stat])
                popupMessage += `• ${stat} +${result[stat]}<br>`
        }

        // --- Also recalculate ASW & LOS & EVA (HP through marriage is ignored)
        const EV = modernizedShipData.EVbase ? getEvasion(modernizedShipData, level) : modernizedShipData.EV;
        const LOS = modernizedShipData.LOSbase ? getLOS(modernizedShipData, level) : modernizedShipData.LOS;
        const ASW = modernizedShipData.ASWbase ? getASW(modernizedShipData, level) : modernizedShipData.ASW;

        modernizedShip.LOS = LOS;
        modernizedShip.ASW = ASW;
        modernizedShip.EV = EV;

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

    let shipSelection = chrCreateShipSelectionArea(callbackAfterShipSelected, filter);
    shipSelection.setTitle("Ship to modernize");
    buttonsObjects.buttonModernized = shipSelection;

    shipSelection.element.css({
        "margin-right": "20px"
    });
    buttons.append(shipSelection.element);

    // --- Add fodder button
    filter = (shipId) => {
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
    
    let fodderSelection = chrCreateShipSelectionArea(callbackAfterShipSelected, filter);
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
function chrCreateShipSelectionArea(callback, filter) {
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

        chrDialogShip(callbackWithShipUpdate, filter);
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

        return level;
    },
    calculateShipMaxLevel: (modernizedShip, fodderShip) => {
        let levelMax;

        // --- Dupe system
        let dupeNbr = modernizedShip.dupe ? modernizedShip.dupe : 0;

        if (ChrShipModernization.isFodderSameMasterId(modernizedShip.masterId, fodderShip.masterId)) {
            dupeNbr++;
        }

        if (dupeNbr > 0) {
            levelMax = 100 + (25 * dupeNbr);
        } else {
            levelMax = 99;
        }

        return levelMax;
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