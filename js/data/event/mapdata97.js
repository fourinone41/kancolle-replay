var RANDOMAPS = false;
// --- todo

MAPDATA[97] = {
    name: 'Random Fiesta',
    date: '2055-02-02',
    diffMode: 2,
    allowDiffs: [3],
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
    maps : {

    },
}

MAPDATA[97].initializeAllMaps = function () {

    for (const mapNumber in CHDATA.maps) {
        MAPDATA[97].initializeMap(CHDATA.maps[mapNumber].world, mapNumber);
    }
}

MAPDATA[97].initializeMap = function (worldNum, mapNum) {

    let oriMapData = MAPDATA[worldNum].maps[mapNum];

    let mapData = {
        /*name: oriMapData.name,
        nameT: oriMapData.nameT,
        
        bossnode: oriMapData.bossnode,

        hpmode: oriMapData.hpmode,
        maphp: oriMapData.maphp,
        finalhp: oriMapData.finalhp,
        
        nameT: oriMapData.nameT,
        nameT: oriMapData.nameT,
        nameT: oriMapData.nameT,
        nameT: oriMapData.nameT*/
    };

    /*if (mapData.maphp && !mapData.maphp[3]) {
        mapData.maphp[3] = mapData.maphp[2];
    }*/

    let combinedAllowed = Math.random() > 0.5;
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

    mapData.bgmMap = chrGetRandomBgm("map");
    mapData.bgmDN = mapData.bgmNN = chrGetRandomBgm("battle");
    mapData.bgmDB = mapData.bgmNB = chrGetRandomBgm("boss");

    //mapData.fleetTypes = oriMapData.fleetTypes

    MAPDATA[97].initializeNodes(oriMapData, mapData);

    if (!CHDATA.customMaps) CHDATA.customMaps = {};
    CHDATA.customMaps[mapNum] = mapData;
    

    MAPDATA[97].loadFromChData(mapNum); 
}

MAPDATA[97].initializeNodes = function (oriMapData, mapData) {

    mapData.nodes = {};

    for (const nodeKey in oriMapData.nodes) {
        mapData.nodes[nodeKey] = "base_node";
    }
}

MAPDATA[97].loadFromChData = function (mapNum) {
    if (CHDATA.customMaps) {

        let maps = mapNum ? { world : mapNum } : CHDATA.maps;

        for (const mapKey in maps) { 
            // --- init map 

            for (const property in CHDATA.customMaps[mapKey]) {
                if (property == "nodes") continue;
                MAPDATA[CHDATA.maps[mapKey].world].maps[mapKey][property] = CHDATA.customMaps[mapKey][property];
            }

            for (const mapKey in CHDATA.maps) {
                MAPDATA[97].loadNodesFromChData(CHDATA.maps[mapKey].world, mapKey);
            }
        }

        MAPDATA[97].fixBonuses();
    }
    else {
        CHDATA.customMaps = {};
        MAPDATA[97].initializeAllMaps();
        MAPDATA[97].loadFromChData();
    }
}


MAPDATA[97].loadNodesFromChData = function (worldNum, mapNum) {
    
    /*for (const nodeKey in CHDATA.customMaps[mapNum].nodes) {
        
        // --- For each nodes:

        // --- Load original map for now :(
        //MAPDATA[worldNum].maps[mapNum].nodes[nodeKey] = MAPDATA[worldNum].maps[mapNum].nodes[nodeKey];

    }*/
}

/**
 * Returns a random bgm id (doesn't include 2001, 2, 1 because :) )
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
                            bonus.parameters.on = bonus.bonusToApply.on = newOn;
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
        map = MAPDATA[WORLD].maps[MAPNUM].parts[CHDATA.event.maps[2].part];
    } 
    
    if (map.transport) {
        var transportCalc = MAPDATA[WORLD].maps[MAPNUM].transportCalc || MAPDATA[WORLD].transportCalc;
        var tp = transportCalc(chGetShips(true),'S');
        lastdance = CHDATA.event.maps[MAPNUM].hp <= tp && CHDATA.event.maps[MAPNUM].hp > 0;
        if (!lastdance && map.finaltp) lastdance = (CHDATA.event.maps[MAPNUM].hp <= map.finaltp[diff] && CHDATA.event.maps[MAPNUM].hp > 0);
    } else {
        lastdance = (map && CHDATA.event.maps[MAPNUM].hp <= map.finalhp[diff] && CHDATA.event.maps[MAPNUM].hp > 0);
    }
    
    return lastdance;
}