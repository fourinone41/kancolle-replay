var RANDOMAPS = true;
// --- todo

MAPDATA[97] = {
    name: 'Random Fiesta',
    date: '2055-02-02',
    diffMode: 2,
    allowDiffs: [2,3],
    allowFleets: [0,1,2,3,7],
    allowLBAS: true,
    allowVanguard: true,
    vanguardConsts: { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 },
    newResupplyCosts: true,
    bannerImg: 'assets/maps/98/banner97_1.png',
    bannerImgAlt: 'assets/maps/98/banner97_2.png',
    allowStrongFF: true,
    friendFleetWaves: {
        1: { date: '2020-07-17' },
        2: { date: '2020-08-07' },
    },
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
    friendFleet: {},
    maps: {
    }
}

MAPDATA[97].initializeAllMaps = function (callback) {
    
    if (!CHDATA.event) CHDATA.event = {};
    
    if (localStorage.customEventDataToLoad) {
        CHDATA.customEventData = JSON.parse(localStorage.customEventDataToLoad);
        localStorage.removeItem('customEventDataToLoad');
    }

    
    const loadEventData = () => {
        for (const key in CHDATA.customEventData.eventData) {
            MAPDATA[97][key] = CHDATA.customEventData.eventData[key];
        }
    
        if (CHDATA.customEventData.eventData && CHDATA.customEventData.eventData.comps) {
            CHDATA.event.comps = CHDATA.customEventData.eventData.comps;
        }
    
        if (CHDATA.customEventData.eventData && CHDATA.customEventData.eventData.assets) {
            MAPDATA[97].initializeAssets(CHDATA.customEventData.eventData.assets);
        }
    
        CHDATA.maps = {};
    
        for (const mapNum in MAPDATA[97].maps) {
            CHDATA.maps[mapNum] = { world: 97 };
        }
        
        for (const mapNumber in CHDATA.maps) {

            if (CHDATA && CHDATA.event && CHDATA.event.maps && !CHDATA.event.maps[mapNumber]) {
                // --- new map detected !
                CHDATA.event.maps[mapNumber] = { visited:[], hp:null };
                
                if (CHDATA.config.unlockAll) {                    
                    for (let n=1; n<100; n++) {
                        if (!MAPDATA[97].maps[n]) { CHDATA.event.unlocked = n-1; break; }
                    }
                }
            }

            MAPDATA[97].initializeMap(MAPDATA[97].maps[mapNumber]);
        }

        if (!!callback) callback();
    }

    if (CHDATA.eventURL) {
        $.ajax(CHDATA.eventURL).done(function(data) {
            if (!data) {
                return alert("Error loading data");
            }

            let eventData = typeof(data) == "string" ? JSON.parse(data) : data;

            CHDATA.customEventData = eventData;
            loadEventData();
        });
    } else {
        loadEventData();
    }
}

MAPDATA[97].initializeAssets = function(assets) {

    const addEquipment = (equipmentData) => {
		const id = equipmentData.id;
		EQDATA[id] = equipmentData;
    }

    const addShip = (shipData) => {
		const id = shipData.id;
		SHIPDATA[id] = shipData;
        
        if (typeof(VOICES) != "undefined") {

            const voiceLines = ["start","attack","nbattack","damage","damage1","damage2","damage3","sunk"];

            for (const voiceLine of voiceLines) {
                if (shipData["voice_"+voiceLine]) {
                    if (!VOICES[shipData.id]) VOICES[shipData.id] = {};
                    VOICES[shipData.id][voiceLine] = shipData["voice_"+voiceLine];
                }
            }
        }
    }

    if (assets.equipments) {
        for (const equipment of assets.equipments) {
            addEquipment(equipment);
        }
    }

    if (assets.ships) {
        for (const ship of assets.ships) {
            addShip(ship);
        }
    }

    if (typeof(chFillDialogShip) != 'undefined') chFillDialogShip(1);
}

MAPDATA[97].initializeMap = function (mapData) {

    /*let mapData = {
        name: oriMapData.name,
        nameT: oriMapData.nameT,
        
        bossnode: oriMapData.bossnode,

        hpmode: oriMapData.hpmode,
        maphp: oriMapData.maphp,
        finalhp: oriMapData.finalhp,
        
        nameT: oriMapData.nameT,
        nameT: oriMapData.nameT,
        nameT: oriMapData.nameT,
        nameT: oriMapData.nameT
    };*/

    /*if (mapData.maphp && !mapData.maphp[3]) {
        mapData.maphp[3] = mapData.maphp[2];
    }*/

    /*let combinedAllowed = Math.random() > 0.5;
    let strikeForceAllowed = Math.random() > 0.5;
    let singleAllowed = combinedAllowed || strikeForceAllowed ? Math.random() > 0.5 : true;

    /*mapData.fleetTypes = [];
    
    if (combinedAllowed)  {
        mapData.fleetTypes.push(1, 2, 3);
    }

    if (strikeForceAllowed)  {
        mapData.fleetTypes.push(7);
    }

    if (singleAllowed)  {
        mapData.fleetTypes.push(0);
    }*/

    /*mapData.bgmMap = chrGetRandomBgm("map");
    mapData.bgmDN = mapData.bgmNN = chrGetRandomBgm("battle");
    mapData.bgmDB = mapData.bgmNB = chrGetRandomBgm("boss");*/

    //mapData.fleetTypes = oriMapData.fleetTypes

    //MAPDATA[97].initializeNodes(oriMapData, mapData);

    /*for (const nodeKey in CHDATA.customMaps[mapNum].nodes) {
        
        // --- For each nodes:

        // --- Load original map for now :(
        //MAPDATA[worldNum].maps[mapNum].nodes[nodeKey] = MAPDATA[worldNum].maps[mapNum].nodes[nodeKey];

    }*/
    

    // --- Save some stuff : 
    /*const properties =  [
        "additionalChecks", 
        "getLock",
        "startCheck",
    ];*/

    /*const values = [];

    for (const prop of properties) {
        values[prop] = MAPDATA[worldNum].maps[mapNum][prop];
    }

    // --- Load the map
    MAPDATA[worldNum].maps[mapNum] = customMap;

    // --- Restore some stuff : 
    for (const prop of properties) {
        MAPDATA[worldNum].maps[mapNum][prop] = values[prop];
    }*/
        
    MAPDATA[97].loadUnlockFromChData(mapData);
    MAPDATA[97].loadStartCheckFromChData(mapData);
    MAPDATA[97].loadStartBonusesFromChData(mapData);

    for (const nodeKey in mapData.nodes) {
        const nodeData = mapData.nodes[nodeKey];

        try {
            
            MAPDATA[97].loadNodeFromChData(nodeData);

            MAPDATA[97].loadBonusesFromChData(nodeData);
        } catch (error) {
            console.debug(nodeData);
            throw error;
        }
    }
    
}

MAPDATA[97].initializeNodes = function (oriMapData, mapData) {

    mapData.nodes = {};

    for (const nodeKey in oriMapData.nodes) {
        mapData.nodes[nodeKey] = "base_node";
    }
}

MAPDATA[97].loadStartCheckFromChData = function (map) {
    if (map.startCheckRule) {
        let rules = [];

        for (const rule of map.startCheckRule) {
            rules.push(MAPDATA[97].convertRule(rule))
        }

        map.startCheckRule = rules;
    }

    if (map.additionalChecksRules) {
        let rules = [];

        for (const rule of map.additionalChecksRules) {
            rules.push(MAPDATA[97].convertRule(rule))
        }

        map.additionalChecksRules = rules;
    }
}

MAPDATA[97].loadUnlockFromChData = function (map) {
    if (map.hiddenRoutes) {
        
        for (const unlockKey in map.hiddenRoutes) {

            /**
             * @type {ChGimmickList}
             */
            const gimmicks = map.hiddenRoutes[unlockKey].unlockRules;

            map.hiddenRoutes[unlockKey].unlockRules = new ChGimmickList(gimmicks.type, gimmicks.mapPartNumber, gimmicks.mapNum, gimmicks.gimmicks, gimmicks.additionnalParameters);
        }
    }


    const debuff = map.debuffRules;
    if (debuff && debuff.type) map.debuffRules = new ChGimmickList(debuff.type, debuff.mapPartNumber, debuff.mapNum, debuff.gimmickData, debuff.additionnalParameters);
    else delete map.debuffRules;
}

MAPDATA[97].loadStartBonusesFromChData = function (map) {
    
    if (!map.startBonus) return;

    const bonuses = [];

    for (const bonus of map.startBonus) {
        bonuses.push(MAPDATA[97].convertBonus(bonus));
    }

    map.startBonus = bonuses; 
}

MAPDATA[97].loadBonusesFromChData = function (nodeData) {

    const bonuses = [];

    if (!nodeData.bonuses) return;

    for (const bonus of nodeData.bonuses) {
        bonuses.push(MAPDATA[97].convertBonus(bonus));
    }

    nodeData.bonuses = bonuses; 
}

MAPDATA[97].convertBonus = function(bonus) {
    switch (bonus.bonusType) {
        case 'ChShipIdsBonuses':
            return new ChShipIdsBonuses(bonus.parameters, Array.isArray(bonus.shipIds) ? bonus.shipIds.map(x => parseInt(x)) : bonus.shipIds, bonus.amount);

        case 'ChShipTypeBonuses':
            return new ChShipTypeBonuses(bonus.parameters, bonus.shipTypes, bonus.amount);

        case 'ChWholeFleetBonuses':
            return new ChWholeFleetBonuses(bonus.parameters, bonus.amount);
            
        case 'ChEquipIdsBonuses':
            return new ChEquipIdsBonuses(bonus.parameters, bonus.equipIds.map(x => parseInt(x)), bonus.operator, bonus.reqCount, bonus.amount);
            
        case 'ChEquipTypesBonuses':
            return new ChEquipTypesBonuses(bonus.parameters, bonus.equipTypes, bonus.operator, bonus.reqCount, bonus.amount);
            
        case 'ChEquipTypesComboBonuses':
            return new ChEquipTypesComboBonuses(bonus.parameters, bonus.comboData, bonus.amount);

        case 'ChDebuffBonuses':
            return new ChDebuffBonuses(bonus.parameters, bonus.amount);

        case 'ChEquipIdsBonusTable':
            return new ChEquipIdsBonusTable(bonus.parameters, bonus.equipIds, bonus.tableId, bonus.amount);

        case 'ChShipWithoutBonusesBonuses':
            return new ChShipWithoutBonusesBonuses(bonus.parameters, bonus.amount);
            
        case 'none':
            return new ChBonuses(bonus.parameters);
        
        default:
            console.debug(bonus);
            throw 'unhandled bonus type';
    }
}

/**
 * 
 * @param {ChRule} ruleToConvert 
 * @returns 
 */
MAPDATA[97].convertRule = function (ruleToConvert) {
    let rule = null;

    switch (ruleToConvert.type) {
        case "fixed":
            rule = ChFixedRoutingRule(ruleToConvert.fixedNode);
            break;
            
        case "routeSelect":
            rule =  ChSelectRouteRule(ruleToConvert.routeSelect);
            break;

        case "mapPart":
            rule = ChMapPartRuleOld(ruleToConvert.operator, ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            break;
            
        case "isRouteUnlocked":
            if (ruleToConvert.not) rule = ChIsRouteNotUnlockedRule(ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            rule = ChIsRouteUnlockedRule(ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            break;

        case "default":
            rule = ChDefaultRouteRule(ruleToConvert.conditionCheckedNode);
            break;

        case "shipType":
            rule = ChShipTypeRoutingRule(ruleToConvert.shipTypes, ruleToConvert.operator, ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            break;

        case "multiRules":
            let rulesArray = [];

            for (const rule of ruleToConvert.rules) {
                rulesArray.push(MAPDATA[97].convertRule(rule));
            }

            rule = ChMultipleRulesRule(rulesArray, ruleToConvert.logicOperator, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            break;
    
        case "fleetType": 
            rule = ChFleetTypeRule(ruleToConvert.fleetType, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            break;

        case "random": 
            rule = ChRandomRule(ruleToConvert.randomNodes);
            break;
        
        case "difficulty": 
            rule = ChDifficultyRule(ruleToConvert.difficulties, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            break;

        case "speed": 
            rule = ChSpeedRule(ruleToConvert.operator, ruleToConvert.speed, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            break;

        case "ifthenelse": {
            const ruleIf = ruleToConvert.ifthenelse.if ? this.convertRule(ruleToConvert.ifthenelse.if) : null;
            const ruleThen = ruleToConvert.ifthenelse.then ? this.convertRule(ruleToConvert.ifthenelse.then): null;
            const ruleElse = ruleToConvert.ifthenelse.else ? this.convertRule(ruleToConvert.ifthenelse.else): null;

            rule = ChIfThenElseRule(ruleIf, ruleThen, ruleElse);
            break;
        }

        case 'los': 
            rule = ChLOSRule(ruleToConvert.LOS, ruleToConvert.LOSCoef);
            break;

        case "shipIds": 
            rule = ChShipIdsRoutingRule(ruleToConvert.shipsIds, ruleToConvert.operator, ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            break;

        case "shipCount": 
            rule = ChShipCountRoutingRule(ruleToConvert.operator, ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            break;

        case "allShipsMustBe": 
            rule = ChAllShipMusteBeOfTypeRule(ruleToConvert.shipTypes, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode)
            break;

        case "equipType": 
            rule = ChEquipTypeRule(ruleToConvert.equipData, ruleToConvert.operator, ruleToConvert.count, ruleToConvert.shipWithEquipCount, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            break;

        case "custom": 
            rule = ChCreateCustomRuleFromName(ruleToConvert.customRuleName);
            break;

        case "speedCount": 
            rule = ChNumberOfShipOfSpeedRule(ruleToConvert.speedOperator, ruleToConvert.speed, ruleToConvert.operator, ruleToConvert.count, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode)
            break;

        case "LOSCheckIfRuleChecked": 
            rule = ChLOSCheckIfRuleChecked(ruleToConvert.LOS, ruleToConvert.LOSCoef, MAPDATA[97].convertRule(ruleToConvert.ifthenelse.if));
            break;
            
        case "fleetBeenThrough": 
            rule = ChFleetBeenThroughRule(ruleToConvert.node, ruleToConvert.conditionCheckedNode, ruleToConvert.conditionFailedNode);
            rule.not = ruleToConvert.not;
            break;

        default:
            console.debug(ruleToConvert);
            throw 'unhandled rule';
    }

    if (ruleToConvert.mapParts) rule.mapParts = ruleToConvert.mapParts;
    if (ruleToConvert.not) rule.not = ruleToConvert.not;
    if (ruleToConvert.noCompass) ChDontShowCompass(rule);

    return rule;
}

MAPDATA[97].loadNodeFromChData = function (nodeData) {

    if (nodeData.rules) {
        let rules = [];

        for (const rule of nodeData.rules) {
            //if (!rule) continue;
            
            try {
                rules.push(MAPDATA[97].convertRule(rule))
            }
            catch (e) {
                console.error('Error converting rule');
                console.error(nodeData);
                console.error(rule);
                throw e;
            }
        }
    
        nodeData.rules = rules;
    }

    //nodeData.rules = nodeSave.rules;
    
    if (nodeData.endRules) {
        let endRules = [];

        for (const rule of nodeData.endRules) {
            endRules.push(MAPDATA[97].convertRule(rule))
        }

        nodeData.endRules = endRules;
    }
}

/**
 * Returns a random bgm id (doesn't include 2001, 2, 1)
 * @param {"map" | "battle" | "boss"} type 
 */
function chrGetRandomBgm(type) {
    let possibleBgm;
    
    switch (type) {
        case "map":
            possibleBgm = chrGetRandomBgm.possibleBGM.map;
            break;
            
        case "battle":
            possibleBgm = chrGetRandomBgm.possibleBGM.battle;
            break;

        case "boss":
            possibleBgm = chrGetRandomBgm.possibleBGM.boss;
            break;
    
        default:
            possibleBgm = chrGetRandomBgm.possibleBGM;
            break;
    }
    

    return possibleBgm[Math.floor(Math.random()*possibleBgm.length)];

}

chrGetRandomBgm.bannedMap = [2001, 2, 1];
chrGetRandomBgm.bannedBattle = [2001, 2, 1, 97];
chrGetRandomBgm.bannedBoss = [2001, 2, 1, 96, 36, 35, 34, 33, 32, 1000, 1001];

chrGetRandomBgm.possibleBGM = {
    map : [],
    battle : [],
    boss : []
};

for (const eventKey in MAPDATA) {
    if (parseInt(eventKey) > 90) continue;

    for (const mapKey in MAPDATA[eventKey].maps) {
        let map = MAPDATA[eventKey].maps[mapKey];

        if (!chrGetRandomBgm.bannedMap.includes(map.bgmMap) && !chrGetRandomBgm.possibleBGM.map.includes(map.bgmMap)) {
            chrGetRandomBgm.possibleBGM.map.push(map.bgmMap);
        }
        
        if (!chrGetRandomBgm.bannedBattle.includes(map.bgmDN) && !chrGetRandomBgm.possibleBGM.battle.includes(map.bgmDN)) {
            chrGetRandomBgm.possibleBGM.battle.push(map.bgmDN);
        }
        
        if (!chrGetRandomBgm.bannedBoss.includes(map.bgmDB) && !chrGetRandomBgm.possibleBGM.boss.includes(map.bgmDB)) {
            chrGetRandomBgm.possibleBGM.boss.push(map.bgmDB);
        }
    }
}

MAPDATA[97].fixBonuses = function () {
    let getComps = (node, world, mapnum) => {
        let eventName = MAPDATA[world].name;
        let mapName = 'E-' + mapnum;
        
        let comps = ENEMYCOMPS[eventName][mapName][node];
    
        if (!comps) throw 'Node not found';
    
        return comps;
    }

    let getRandoComps = (node, world, mapnum) => {
        let mapName = 'E-' + mapnum;
        if (CHDATA.maps[mapnum].world != world) return getComps(node, world, mapnum);
        
        let comps = CHDATA.event.comps ? CHDATA.event.comps[mapName][node] : getComps(node, CHDATA.maps[mapnum].world, mapnum);
    
        if (!comps) throw 'Node not found';
    
        return comps;
    }

    for (const eventId in MAPDATA) {
        for (const mapNum in MAPDATA[eventId].maps) {
            for (const nodeLetter in MAPDATA[eventId].maps[mapNum].nodes) {
                
                let node = MAPDATA[eventId].maps[mapNum].nodes[nodeLetter];

                if (node.bonuses) {
                    let bonuses = node.bonuses;

                    for (const bonus of bonuses) {
                        if (bonus.parameters.on && !bonus.parameters.fixed) {
                            let comps = getComps(nodeLetter, eventId, mapNum);
                            let randoComps = getRandoComps(nodeLetter, eventId, mapNum);
                            let newOn = [];

                            for (const abyssalMid of bonus.parameters.on) {
                                for (const compNum in comps) {
                                    for (const index in comps[compNum].c) {
                                        if (comps[compNum].c[index] == abyssalMid) {
                                            let newMid = randoComps[compNum].c[index];

                                            if (!newOn.includes(newMid)) newOn.push(newMid);
                                        }
                                    }
                                }
                            }

                            bonus.parameters.fixed = true;
                            if (bonus.parameters) bonus.parameters.on = newOn;
                            if (bonus.bonusToApply) bonus.bonusToApply.on = newOn;
                        }
                    }
                }
            }
        }
    }
}



function chrGetLastDance() {
	var diff = CHDATA.event.maps[MAPNUM].diff || 2;
	var lastdance = false;

    let map = MAPDATA[WORLD].maps[MAPNUM];

    if (MAPDATA[WORLD].maps[MAPNUM].parts) {
        if (!CHDATA.event.maps[MAPNUM].part) return false;
        map = MAPDATA[WORLD].maps[MAPNUM].parts[CHDATA.event.maps[MAPNUM].part];
    } 
    
    if (map.transport) {
        /*var transportCalc = MAPDATA[WORLD].maps[MAPNUM].transportCalc || MAPDATA[WORLD].transportCalc;
        var tp = transportCalc(chrGetShips(true),'S');
        lastdance = CHDATA.event.maps[MAPNUM].hp <= tp && CHDATA.event.maps[MAPNUM].hp > 0;
        if (!lastdance && map.finaltp) lastdance = (CHDATA.event.maps[MAPNUM].hp <= map.finaltp[diff] && CHDATA.event.maps[MAPNUM].hp > 0);*/
        return false;
    } else {
        lastdance = (map && CHDATA.event.maps[MAPNUM].hp <= map.finalhp[diff] && CHDATA.event.maps[MAPNUM].hp > 0);
    }
    
    return lastdance;
}


MAPDATA[97].ChrRandomizeEvent = function () {
return;
    const rando = () => {
        try {
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[1].world, 1);
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[2].world, 2);
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[3].world, 3);
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[4].world, 4);
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[5].world, 5);
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[6].world, 6);
            MAPDATA[97].ChrRandomizeMap(CHDATA.maps[7].world, 7);  
        }
        catch (ex) {
            console.error(ex);
            if (confirm('Event Initialization failed, do you want to retry ? (no will refresh without saving changes)')) {
                rando();
            }
            else {
                CHDATA.maps = undefined;
                location.reload();
            }
        }
    }
    rando(); 

    return;
    //loadObject.Hide();
}

MAPDATA[97].saveMapData = function (mapnum, map) {

    // --- Delete useless data
    for (const node in map.nodes) {
        let nodeData = map.nodes[node];

        delete nodeData.fleetsTypes;
    }

    localStorage.setItem('chrRandom-' + mapnum, JSON.stringify(map));
}

MAPDATA[97].ChrRandomizeMap = function (eventNumber, mapNumber) {
    
    console.debug(`Randomizing ${MAPDATA[eventNumber].name} E${mapNumber}`);

    /**
     * @type {ChrRandomizeEventHelper.PathObject[]}
     */
    let paths = [];
    let starts = [];
    
    let map = MAPDATA[eventNumber].maps[mapNumber];

    let countSecurity = 0;
    let checkLoop = () => {
        countSecurity++;
        if (countSecurity > 999999) {
            alert('loop detected');
            throw 'loop detected';
        }
    }

    let constructMapLayout = () => {

        for (const node in map.nodes) {
            if (node.includes('Start')) starts.push(node);
        }
    
        let constructPaths = (node, nodeFrom) => {

            checkLoop();

            /**
             * @type {{ rules: ChRule[] }}
             */
            let nodeData = map.nodes[node];

            /**
             * 
             */
            let path = {};

            path.node = node;
            path.nodeData = nodeData;

            // --- Init node data
            if (!path.nodeData) console.debug(node);

            ChrRandomizeEventHelper.InitNodeData(path.nodeData);

            if (!path.nodeData.rules) { 
                path.pathEnd = true;
                return path; 
            }

            path.paths = [];
            let nodesDone = [];

            const constructPathOfPath = (rule) => {
                let nextNode = rule.conditionCheckedNode || rule.fixedNode;

                if (rule.type == 'routeSelect')  {

                    for (const selectNode of rule.routeSelect) {
                        path.paths.push(constructPaths(selectNode, node));
                    }

                    return;
                }

                if (rule.type == 'random')  {

                    for (const randomNode of Object.keys(rule.randomNodes)) {
                        if (randomNode) path.paths.push(constructPaths(randomNode, node));
                    }

                    return;
                }

                if (rule.type == 'ifthenelse')  {

                    constructPathOfPath(rule.ifthenelse.then);

                    if (rule.ifthenelse.else) {
                        constructPathOfPath(rule.ifthenelse.else);
                    }

                    return;
                }
                
                if (!nextNode) {
                    console.debug(rule);
                    throw 'Error reading rule of node ' + node;
                }

                if (nextNode.includes("/")) {
                    for (const nextNodeDetail of nextNode.split('/')) {
                        path.paths.push(constructPaths(nextNodeDetail, node));
                        nodesDone.push(nextNodeDetail);
                    }
                    return;
                }

                if (!nodesDone.includes(nextNode) && nextNode != nodeFrom) {
                    path.paths.push(constructPaths(nextNode, node));
                    nodesDone.push(nextNode);
                }

                nextNode = rule.conditionFailedNode;

                if (nextNode && !nodesDone.includes(nextNode) && nextNode != nodeFrom) {
                    path.paths.push(constructPaths(nextNode, node));
                    nodesDone.push(nextNode);
                }
            }
            
            for (const rule of path.nodeData.rules) {
                constructPathOfPath(rule);
            }

            return path;
        }

        for (const start of starts) {
            paths.push(constructPaths(start));
        }

        console.debug(starts);
        console.debug(paths);
    }

    let checkMapLayout = () => {
        let nodes = [];

        let checkNode = (path) => {
            nodes.push(path.node);

            if (!path.paths) return;

            for (const nextPath of path.paths) {
                checkNode(nextPath);
            }
        }
        
        for (const path of paths) {
            checkNode(path);
        }

        for (const node in map.nodes) {
            if (!nodes.includes(node)) {
                throw "Error : Node " + node + ` cant be reached`;
            }
        }
    }

    let makeStartRules = () => {
        return;
        map.startCheckRule = ChrRandomizeEventHelper.CreateStartRules(map, paths);
    }

    let makeMapRouting = () => {
        return;
        for (const path of paths) {
            
            /**
             * 
             * @param {ChrRandomizeEventHelper.PathObject} currentPath 
             */
            let makeRouting = (currentPath) => {
                if (!currentPath.paths) return;
                
                for (const nextPath of currentPath.paths) {

                    ChrRandomizeEventHelper.CreateRandomRules(currentPath, nextPath);

                    makeRouting(nextPath);
                }
            }

            ChrRandomizeEventHelper.CreateRandomRules(null, path);
            makeRouting(path);
        }
    }

    const makeGimmicks = () => {

        let unlockRequired = 0;
        let lastPart = null;

        const abPossible = !!map.enemyRaid;

        for (const part in map.hiddenRoutes) {

            let partRequired = null;

            if (map.hiddenRoutes[part].unlockRules && map.hiddenRoutes[part].unlockRules.mapPartNumber) partRequired = map.hiddenRoutes[part].unlockRules.mapPartNumber - 1;
            if (map.hiddenRoutes[part].unlockRules) {
                const unlockRule = map.hiddenRoutes[part].unlockRules.gimmicks.find(gimmick => gimmick.type == "PartClear");

                if (unlockRule) partRequired = unlockRule.partToClear;
            }

            map.hiddenRoutes[part].unlockRules = ChrRandomizeGimmicks.RandomizeGimmicks("mapPart", mapNumber, {
                partToUnlock: part,
                mapPartRequired : partRequired,
                routeUnlockRequired: unlockRequired
            }, map.nodes, abPossible);

            unlockRequired = part;
            lastPart = partRequired && partRequired > lastPart ? partRequired : lastPart;
        }

        map.debuffRules = ChrRandomizeGimmicks.RandomizeGimmicks("debuff", mapNumber, {
            partToUnlock: lastPart,
            mapPartRequired : lastPart,
            routeUnlockRequired: unlockRequired
        }, map.nodes, abPossible);
    }

    const makeBonuses = () => {

        for (const node in map.nodes) {
            const nodeData = map.nodes[node];
            nodeData.bonuses = [];
        }

        ChrRandomizeBonuses.MakeBonusesFromNodes(paths);
    }

    
    constructMapLayout();
    checkMapLayout();
    makeStartRules();
    makeMapRouting();
    makeGimmicks();
    makeBonuses();

    MAPDATA[97].saveMapData(mapNumber, map)
}



MAPDATA[97].chrLoadCustomEventData = function() {
    return new Promise((resolve) => {
        let file = document.getElementById("customEventFile").files[0];
        let url =  $("#customEventUrl").val()

        if (!file && !url) throw 'Event file is required';

        if (file) {
            const reader = new FileReader();
            reader.addEventListener('load', (event) => {                
                let eventData = typeof(event.target.result) == "string" ? JSON.parse(event.target.result) : event.target.result;
        
                CHDATA.eventURL = null;
                CHDATA.customEventData = eventData;
    
                MAPDATA[97].initializeAllMaps();
        
                // --- Refresh after load
                //chSave = () => null;
                //location.reload();
                resolve();
            });
        
            reader.readAsText(file);
        }

        if (url) {
            $.ajax(url).done(function(data) {
                if (!data) {
                    return alert("Error loading data");
                }

                let eventData = typeof(data) == "string" ? JSON.parse(data) : data;
    
                CHDATA.customEventData = eventData;

                CHDATA.eventURL = null;

                MAPDATA[97].initializeAllMaps();
        
                CHDATA.eventURL = url;
                resolve();
            });
        }
    
        
    });
	
}

MAPDATA[97].rerollBonuses = function () {

    const map = MAPDATA[WORLD].maps[MAPNUM];

    for (const node in map.nodes) {
        const nodeData = map.nodes[node];
        nodeData.bonuses = [];
    }

    const paths = MAPDATA[97].constructPaths(map);

    ChrRandomizeBonuses.MakeBonusesFromNodes(paths);
}

MAPDATA[97].constructPaths = function (map) {
    const paths = [];
    const starts = [];
    let countSecurity = 0;

    let checkLoop = () => {
        countSecurity++;
        if (countSecurity > 999999) {
            alert('loop detected');
            throw 'loop detected';
        }
    }

    let constructMapLayout = () => {

        for (const node in map.nodes) {
            if (node.includes('Start')) starts.push(node);
        }
    
        let constructPaths = (node, nodeFrom) => {

            checkLoop();

            /**
             * @type {{ rules: ChRule[] }}
             */
            let nodeData = map.nodes[node];

            /**
             * 
             */
            let path = {};

            path.node = node;
            path.nodeData = nodeData;

            // --- Init node data
            ChrRandomizeEventHelper.InitNodeData(path.nodeData);

            if (!path.nodeData.rules) { 
                path.pathEnd = true;
                return path; 
            }

            path.paths = [];
            let nodesDone = [];

            const constructPathOfPath = (rule) => {
                let nextNode = rule.conditionCheckedNode || rule.fixedNode;

                if (rule.type == 'routeSelect')  {

                    for (const selectNode of rule.routeSelect) {
                        path.paths.push(constructPaths(selectNode, node));
                    }

                    return;
                }

                if (rule.type == 'random')  {

                    for (const randomNode of Object.keys(rule.randomNodes)) {
                        if (randomNode) path.paths.push(constructPaths(randomNode, node));
                    }

                    return;
                }

                if (rule.type == 'ifthenelse')  {

                    constructPathOfPath(rule.ifthenelse.then);

                    if (rule.ifthenelse.else) {
                        constructPathOfPath(rule.ifthenelse.else);
                    }

                    return;
                }

                if (!nextNode) {
                    console.debug(rule);
                    throw 'Error reading rule of node ' + node;
                }

                if (!nodesDone.includes(nextNode) && nextNode != nodeFrom) {
                    path.paths.push(constructPaths(nextNode, node));
                    nodesDone.push(nextNode);
                }

                nextNode = rule.conditionFailedNode;

                if (nextNode && !nodesDone.includes(nextNode) && nextNode != nodeFrom) {
                    path.paths.push(constructPaths(nextNode, node));
                    nodesDone.push(nextNode);
                }
            }
            
            for (const rule of path.nodeData.rules) {
                constructPathOfPath(rule);
            }

            return path;
        }

        for (const start of starts) {
            paths.push(constructPaths(start));
        }
    }

    constructMapLayout();

    return paths;
}

MAPDATA[97].ConvertMapEditorFormatToSimulatorFormat = function (eventData) {
    /*const objectToExport = {};

    for (const property in eventData) {
        switch (property) {        
            default:
                objectToExport[property] = eventData[property];
                break;
        }
    }*/
    
    return eventData;
}

MAPDATA[97].ConvertSimulatorFormatToMapEditorFormat = function (eventData) {
    /*const objectToExport = {};

    for (const property in eventData) {
        switch (property) {        
            default:
                objectToExport[property] = eventData[property];
                break;
        }
    }*/
    
    return eventData;
}