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