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

function chRerollComps() {
    CHDATA.event.comps = chRandomizeComps();
}

// --- Debug only
function chRemoveLocks() {
    CHDATA.event.comps = chRandomizeComps();
    for (let ship in CHDATA.ships) {
        if (CHDATA.ships[ship].lock) delete CHDATA.ships[ship].lock;
    }
    InitUI();
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

    // --- Batavia Princess
    ship.bonusSpecial.push({mod:1.15,on:[1898,1899,1900,1901,1902,1903]});

    // --- Anti-Air Cruiser Princess
    ship.bonusSpecial.push({mod:1.15,on:[1909,1910,1911,1912,1913,1914]});

    // --- New Southern Battleship Princess
    ship.bonusSpecial.push({mod:1.1,on:[1965,1966,1967,1968,1969,1970]});

    // --- South pacific CV princess
    ship.bonusSpecial.push({mod:1.1,type:2,on:[1971,1972,1973,1974,1975,1976]});
    
    // --- New Battleship Princess
    ship.bonusSpecial.push({mod:1.1,on:[1979,1980,1981,1982,1983,1984]});

    // --- Abyssal Bamboo Princess
    ship.bonusSpecial.push({mod:1.1,on:[1988,1989,1990,1991,1992,1993]});   
}

function chrApplyDebuffedForm(abyssal) {
    let idBoss = abyssal.mid;

    // --- European Water Princess
    if ([1843,1844,1845].indexOf(idBoss) !== -1){
        VOICES[idBoss].damage = VOICES[idBoss].armorBrokenDamage;	
    }

    // --- Anzio Princess
    if ([1883,1884,1885,1886,1887,1888].includes(idBoss)) {
        VOICES[idBoss].damage = 'assets/voice/453188630.mp3';
    }

    // --- European Water Princess
    // --- Anzio Princess
    // --- Anti-Air Cruiser Princess
    // --- Batavia Princess
    SHIPDATA[idBoss].image = SHIPDATA[idBoss].imageBroken ? SHIPDATA[idBoss].imageBroken : SHIPDATA[idBoss].image;
                            
    // --- Anti-Air Cruiser Princess    
    if ([1909,1910,1911,1912,1913,1914].includes(idBoss)) {
        VOICES[idBoss].damage = 'assets/voice/466191231.mp3';
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
        VOICES[idBoss].damage = VOICES[idBoss].normalDamage;	
    }

    // --- Anzio Princess
    if ([1883,1884,1885,1886,1887,1888].includes(idBoss)) {
        VOICES[idBoss].damage = 'assets/voice/453188631.mp3';
    }

    // --- European Water Princess
    // --- Batavia Princess 
    // --- Anti-Air Cruiser Princess
    // --- Anzio Princess
    SHIPDATA[idBoss].image = SHIPDATA[idBoss].imageBase ? SHIPDATA[idBoss].imageBase : SHIPDATA[idBoss].image;

    // --- Anti-Air Cruiser Princess
    if ([1909,1910,1911,1912,1913,1914].includes(idBoss)) {
        VOICES[idBoss].damage = 'assets/voice/466191230.mp3';
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

const escortShipType = ['DD', 'CA', 'CL', 'CAV']

var allAbyssals = [];
var escortAbyssals = [];
var escortAbyssalsBoss = [];

var abyssals = [];
var boss = [];

var installationBoss = [];
var installation = [];

var submarines = [];
var submarinesBoss = [];

const bossIds = [
    1539,1540,1544,1545,1546,1547,1548,1556,1557,1573,1574,1581,1582,1583,1584,1585,1586,1587,
	1588,1589,1590,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1611,
	1612,1613,1619,1620,1625,1626,1627,1628,1629,1630,1631,1632,1633,1634,1635,
	1636,1641,1642,1643,1647,1648,1649,1650,1651,1652,1653,1654,1655,1656,1657,
	1658,1659,1660,1661,1662,1663,1664,1668,1669,1670,1671,1672,1673,1674,1675,
	1676,1677,1678,1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,
	1692,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,
	1711,1712,1713,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1727,1728,
	1729,1730,1731,1732,1733,1745,1746,1747,1748,1749,1750,1751,1752,1753,1754,1755,
	1756,1757,1758,1759,1760,1767,1768,1769,1770,1771,1772,1773,1774,1775,1781,1782,
	1783,1784,1785,1786,1787,1788,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,
	1800,1801,1802,1803,1804,1809,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,
	1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1834,1835,1836,
	1837,1838,1839,1840,1841,1842,1843,1844,1845,1846,1847,1848,1849,1850,1851,1852,
	1853,1854,1855,1856,1857,1644,1645,1646,1693,1694,1695,1736,1737,1738,1789,1805,
	1806,1807,1808,1863,1864,1865,1866,1867,1868,1869,1870,1871,1872,1873,1874,1875,1876,
	1877,1878,1879, 1880,1881,1882, 1883,1884,1885, 1886,1887,1888,
	1889,1890,1891,1892,1893,1894, 1897,
	1898,1899,1900, 1901,1902,1903, 1906,1907,1908, 
	1909,1910,1911, 1912,1913,1914,
	1915,1916,1917, 1918,1919,1920,
	1921, 1922, 1923, 1924, 1925, 1926,
	1927, 1928, 1929, 1930, 1931, 1932,
	1933, 1934, 1935, 1936, 1937, 1938,
	1939, 1940, 1941, 1942, 1943, 1944,
	1945, 1946, 1947, 1948, 1949, 1950,
	1955, 1956,
	1957, 1958, 1959, 1960, 
	1961, 1962, 1963, 1964,
	1965, 1966, 1967, 1968, 1969, 1970,
	1971, 1972, 1973, 1974, 1975, 1976,
    1977, 1978,
    1979, 1980, 1981, 1982, 1983, 1984,     // --- New Battleship Princess
    1985, 1986, 1987,                       // --- Submarine Princess Kai B Flagship
    1988, 1989, 1990, 1991, 1992, 1993,     // --- Abyssal Bamboo Princess

	2012,2013,2014,2015,2016,2018,2019,2020,2021,2022,];
    
function chInitAbyssalTables () {
	
	for (ship_id in SHIPDATA) {
		if (ship_id >= 1500 && ship_id < 2000) {
			let ship = SHIPDATA[ship_id];

			if (bossIds.indexOf(parseInt(ship_id)) !== -1) {
				if (ship.type === 'SS') submarinesBoss[ship_id] = ship;
				else if (ship.type === 'Installation' || ship.installtype) installationBoss[ship_id] = ship;
				else boss[ship_id] = ship;

				if (!ship.type.includes('CV') && !ship.type.includes('BB') && !ship.type.includes('SS'))
					escortAbyssalsBoss[ship_id] = ship;
			} else {
				if (ship.type === 'SS') submarines[ship_id] = ship;
				else if (ship.type === 'Installation' || ship.installtype) installation[ship_id] = ship;
				else abyssals[ship_id] = ship;
				
				if (!ship.type.includes('CV') && !ship.type.includes('BB') && !ship.type.includes('SS')) {
					escortAbyssals[ship_id] = ship;
				}
			}
			allAbyssals[ship_id] = ship;

			SHIPDATA[ship_id].fuel = 100;
			SHIPDATA[ship_id].ammo = 100;
		}
	}
}