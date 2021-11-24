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

    MAPDATA[worldNum].maps[mapNum] = mapData;
    CHDATA.customMaps[mapNum] = mapData; 
}

MAPDATA[97].initializeNodes = function (oriMapData, mapData) {

    mapData.nodes = {};

    for (const nodeKey in oriMapData.nodes) {
        mapData.nodes[nodeKey] = "base_node";
    }
}

MAPDATA[97].loadFromChData = function () {
    if (CHDATA.customMaps) {

        for (const mapKey in CHDATA.maps) { 
            // --- init map 

            for (const property in CHDATA.customMaps[mapKey]) {
                if (property == "nodes") continue;
                MAPDATA[CHDATA.maps[mapKey].world].maps[mapKey][property] = CHDATA.customMaps[mapKey][property];
            }
        }
    }
    else {
        CHDATA.customMaps = {};
        MAPDATA[97].initializeAllMaps();
    }

    for (const mapKey in CHDATA.customMaps) {
        MAPDATA[97].loadNodesFromChData(22, mapKey);
    }
}


MAPDATA[97].loadNodesFromChData = function (worldNum, mapNum) {
    
    for (const nodeKey in CHDATA.customMaps[mapNum].nodes) {
        
        // --- For each nodes:

        // --- Load original map for now :(
        MAPDATA[worldNum].maps[mapNum].nodes[nodeKey] = MAPDATA[worldNum].maps[mapNum].nodes[nodeKey];

    }
}

/**
 * Returns a random bgm id (doesn't include 2001, 2, 1 because :) )
 * @param {"map" | "battle" | "boss"} type 
 */
function chrGetRandomBgm(type) {
    let bannedMap = [2001, 2, 1];
    let bannedBattle = [2001, 2, 1];
    let bannedBoss = [2001, 2, 1];

    if (!chrGetRandomBgm.possibleBGM) {

        chrGetRandomBgm.possibleBGM = {
            map : [],
            battle : [],
            boss : []
        };

        for (const eventKey in MAPDATA) {
            if (eventKey > 90) continue;

            for (const mapKey in MAPDATA[eventKey].maps) {
                let map = MAPDATA[eventKey].maps[mapKey];

                if (!bannedMap.includes(map.bgmMap) && !chrGetRandomBgm.possibleBGM.map.includes(map.bgmMap)) {
                    chrGetRandomBgm.possibleBGM.map.push(map.bgmMap);
                }
                
                if (!bannedBattle.includes(map.bgmDN) && !chrGetRandomBgm.possibleBGM.battle.includes(map.bgmDN)) {
                    chrGetRandomBgm.possibleBGM.battle.push(map.bgmDN);
                }
                
                if (!bannedBoss.includes(map.bgmDB) && !chrGetRandomBgm.possibleBGM.boss.includes(map.bgmDB)) {
                    chrGetRandomBgm.possibleBGM.boss.push(map.bgmDB);
                }
            }
        }
    }

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