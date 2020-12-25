MAPDATA[99] = {
    name: 'Random Fiesta',
    date: '2025-02-02',
    diffMode: 2,
    allowDiffs: [3,2,1],
    allowFleets: [0,1,2,3,7],
    allowLBAS: true,
    allowVanguard: true,
    vanguardConsts: { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 },
    newResupplyCosts: true,
    get bannerImg(){
        return getRandomBanner();
    },
    get bannerImgAlt(){
        return getRandomBannerAlt();
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
    get maps (){
        return randomizeMaps();
    } 
}

var banners = [];
var bannersAlt = [];

for(map in MAPDATA){
    if(map != 99){
        var map_data = MAPDATA[map];
        banners.push(map_data.bannerImg);
        bannersAlt.push(map_data.bannerImgAlt);
    }
}

function getRandomBanner(){
    return banners[Math.floor(Math.random()*banners.length)];
}

function getRandomBannerAlt(){
    return bannersAlt[Math.floor(Math.random()*bannersAlt.length)];
}

function randomizeMap(MAPNUM) {
    let possible_maps = [];
    for(event_id in MAPDATA){
        if(event_id !== "99"){
            if(MAPDATA[event_id].maps[MAPNUM] !== undefined){
                let map = {};

                map.world = event_id;
                possible_maps.push(map);
            }
        }
    }

    CHDATA.maps[MAPNUM] = possible_maps[Math.floor(Math.random()*possible_maps.length)];
    chLoadSortieInfo(MAPNUM);
}

function randomizeMaps(){   
    if(CHDATA.maps === undefined) {
        // randomize
        var maps = {};
        for(var i = 1; i < 8; i++){
            let possible_maps = [];
            for(event_id in MAPDATA){
                if(event_id !== "99"){
                    if(MAPDATA[event_id].maps[i] !== undefined){
                        let map = {};

                        map.world = event_id;
                        //if(map.world != 47 && i == 1) continue;
                        possible_maps.push(map);
                    }
                }
            }
            maps[i] = possible_maps[Math.floor(Math.random()*possible_maps.length)];
        }
        CHDATA.maps = maps;
        return maps;
    } else {
        if(Array.isArray(CHDATA.maps)) {
            var newObjMap = {};
            for(map_num in CHDATA.maps) {
                if (CHDATA.maps[map_num] !== null){
                    newObjMap[map_num] = CHDATA.maps[map_num];
                }
            }
            CHDATA.maps = newObjMap;
        }
        return CHDATA.maps;
    }
}

function chLoadRandomFile() {
    if (CHDATA.event.comps == undefined) {
        CHDATA.event.comps = chRandomizeComps();
    }
}

// --- Debug only
function chRerollComps() {
    CHDATA.event.comps = chRandomizeComps();
}

function chRandomizeComps() {
    let comps = {};

    for (let map in CHDATA.maps) {

        let eventNodes = {};
        let eventNumber = CHDATA.maps[map].world;
        let event = ENEMYCOMPS[MAPDATA[eventNumber].name];

        let mapData = MAPDATA[parseInt(eventNumber)].maps[map];

        for (let nodeIndex in event['E-'+map]) {
            let nodeComps = {};
            let node = event['E-'+map][nodeIndex];
            
            for (let compIndex in node) {
                nodeComps[compIndex] = chRandomizeComp(node[compIndex], mapData, nodeIndex);
            }

            eventNodes[nodeIndex] = nodeComps;
        }

        comps['E-'+map] = eventNodes;
    }

    return comps;
}

// --- Todo
function chHelpLink() {
    let eventName = MAPDATA[WORLD].name.replace(' ', '_');
    
    return `${MAPDATA[WORLD].name} 
    <a href="https://en.kancollewiki.net/${eventName}_Event#E${MAPNUM}" target="_blank">(EnWiki)</a> 
    <a href="https://kancolle.fandom.com/wiki/${eventName}_Event#E${MAPNUM}" target="_blank">(Wikia)</a>`;
}

// --- debug
function chLowerHP() {
    CHDATA.event.maps[MAPNUM].hp = CHDATA.event.maps[MAPNUM].hp * 0.25;
    chLoadSortieInfo(MAPNUM);
}

function chRandomizeComp(compData, mapData, nodeLetter) {
    var bossnum = (typeof mapData.bossnode === 'object')? mapData.bossnode : [mapData.bossnode];
    var letterboss = bossnum.map((x) => (typeof x == 'string')? x : String.fromCharCode(64+x));
    let isBoss = letterboss.indexOf(nodeLetter) != -1;
    let hasRealBoss = false;

    var compMain = [];

    for(ship in compData.c){
        var ship_id = compData.c[ship];

        var ennemies = abyssals;
        var ennemiesBoss = boss;

        let ship_data = SHIPDATA[ship_id.toString()];
        //console.log(ship_data)

        if(ship_data.type === 'SS') {
            ennemies = submarines;
            ennemiesBoss = submarinesBoss;
        }

        if(ship_data.type === 'Installation' || ship_data.installtype) {
            ennemies = installation;
            ennemiesBoss = installationBoss;
        }

        if(bossIds.indexOf(ship_id) !== -1) {
            var obj_keys = Object.keys(ennemiesBoss);
            var shipID = obj_keys[Math.floor(Math.random() *obj_keys.length)];
            hasRealBoss = true;

            compMain.push(parseInt(shipID));
        } else {
            var obj_keys = Object.keys(ennemies);
            var shipID = obj_keys[Math.floor(Math.random() *obj_keys.length)];

            compMain.push(parseInt(shipID));
        }
    }

    compData.c = compMain;

    if (isBoss && !hasRealBoss) {
        // if boss but no "boss ship" => order by hp
        compData.c = compData.c.sort((a, b) => {
            if (!SHIPDATA[b] || !SHIPDATA[a]) return 0;
            return SHIPDATA[b].HP - SHIPDATA[a].HP;
        });
    }

    var formations = [1,2,3,4];
    var formationsSubs = [5,4];
    compData.f = formations[Math.floor(Math.random()*formations.length)];

    if(mapData.nodes[nodeLetter] && mapData.nodes[nodeLetter].subonly) compData.f = formationsSubs[Math.floor(Math.random()*formationsSubs.length)];

    var shouldBeCombined = compData.ce ? true : false;

    if(shouldBeCombined){
        compEscort = [];

        let ennemiesEscort = escortAbyssals;
        let bossEscort = escortAbyssalsBoss;

        for(ship in compData.ce){
            var ship_id = compData.ce[ship];

            if(Object.keys(bossEscort).indexOf(ship_id.toString()) !== -1){
                var obj_keys = Object.keys(bossEscort);
                var shipID = obj_keys[Math.floor(Math.random() *obj_keys.length)];

                compEscort.push(parseInt(shipID));
            }else{
                var obj_keys = Object.keys(ennemiesEscort);
                var shipID = obj_keys[Math.floor(Math.random() *obj_keys.length)];

                compEscort.push(parseInt(shipID));
            }
        }

        compData.ce = compEscort;

        var formationsC = [114, 114, 114, 114, 114, 214, 214, 214, 214, 214];

        compData.f = formationsC[Math.floor(Math.random()*formationsC.length)];
    }

    return compData;
}

// --- Since any boss can be find in any map, we need this to balance the game
function chrApplySpecial() {

    let ships = FLEETS1[0].ships;
    if (FLEETS1[1]) ships = ships.concat(FLEETS1[1].ships);
    if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships); 
    
    // --- For each ally ship
    for (let ship of ships) {
        // --- Apply map debuff
        if (CHDATA.event.maps[MAPNUM].debuffed) {
            chrApplyDebuff(ship);
        }
    }

    // --- For each abyssal
    for (let abyssal of  FLEETS2[0].ships) {
        // --- Change boss form if debuffed
        if (CHDATA.event.maps[MAPNUM].debuffed) {
            chrApplyDebuffedForm(abyssal);
        } else {
            chrApplyBaseForm(abyssal);
        }
    }
}

function chrApplyDebuff(ship) {
    // --- Debuff on specific boss, can be cumulated to already applied debuff
    if (!ship.bonusSpecial) ship.bonusSpecial = [];

    // --- Anzio Princess & Summer Anchorage Princess from summer 19
    ship.bonusSpecial.push({mod:1.15,on:[1815,1816,1817,1818,1819,1820,1883,1884,1885,1886,1887,1888]});

    // --- New Southern Battleship Princess
    ship.bonusSpecial.push({mod:1.1,on:[1965,1966,1967,1968,1969,1970]});

    // --- South pacific CV princess
    ship.bonusSpecial.push({mod:1.1,type:2,on:[1971,1972,1973,1974,1975,1976]});
    
}

function chrApplyDebuffedForm(abyssal) {
    let idBoss = abyssal.mid;

    // --- European Water Princess
    if ([1843,1844,1845].indexOf(idBoss) !== -1){
        SHIPDATA[idBoss].image = SHIPDATA[idBoss].imageBroken;
        VOICES[idBoss].damage = VOICES[idBoss].armorBrokenDamage;	
    }

    // --- Anzio Princess
    if ([1883,1884,1885,1886,1887,1888].includes(idBoss)) {
        SHIPDATA[idBoss].image = SHIPDATA[idBoss].imageBroken;
        VOICES[idBoss].damage = 'assets/voice/453188630.mp3';
    }

    // --- New Southern Battleship Princess
    for (let mid = 1968; mid <= 1970; mid++) {
        VOICES[mid].attack = VOICES[mid].attackB;
        VOICES[mid].damage = VOICES[mid].damageB;
    }

    // --- South pacific CV princess
    for (let mid = 1974; mid <= 1976; mid++) {
        VOICES[mid].attack = VOICES[mid].attackB;
        VOICES[mid].damage = VOICES[mid].damageB;
    }
}

function chrApplyBaseForm(abyssal) {
    let idBoss = abyssal.mid;

    // --- European Water Princess
    if ([1843,1844,1845].indexOf(idBoss) !== -1){
        SHIPDATA[idBoss].image = SHIPDATA[euWaterHimeId].imageBase;
        VOICES[idBoss].damage = VOICES[euWaterHimeId].normalDamage;	
    }

    // --- Anzio Princess
    if ([1883,1884,1885,1886,1887,1888].includes(idBoss)) {
        SHIPDATA[idBoss].image = SHIPDATA[idBoss].imageBase ? SHIPDATA[idBoss].imageBase : SHIPDATA[idBoss].image;
        VOICES[idBoss].damage = 'assets/voice/453188631.mp3';
    }

    // --- New Southern Battleship Princess
    for (let mid = 1968; mid <= 1970; mid++) {
        VOICES[mid].attack = VOICES[mid].attackN;
        VOICES[mid].damage = VOICES[mid].damageN;
    }

    // --- South pacific CV princess
    for (let mid = 1974; mid <= 1976; mid++) {
        VOICES[mid].attack = VOICES[mid].attackN;
        VOICES[mid].damage = VOICES[mid].damageN;
    }
}