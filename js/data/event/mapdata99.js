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
    },
    giveLock: (lockId) => {
        let ships = CHDATA.fleets[1];

        if (CHDATA.fleets.combined) ships = ships.concat(CHDATA.fleets[2]);

        for (let ship of ships) {
            if (!CHDATA.ships[ship].lock) CHDATA.ships[ship].lock = lockId;
        }

        InitUI();
    },
    giveSpecialLock: () => {
        MAPDATA[99].giveLock(MAPDATA[99].specialLocks[WORLD][MAPNUM].lockId);
    },
    getSpecialLockName: () => {
        return MAPDATA[99].specialLocks[WORLD][MAPNUM].lockName;
    },
    /**
     * List of special locks that can be applied manually by the player
     * ex : Winter 18 E6 requries Kurita fleet to clear the map
     */
    specialLocks: {
        41 : {
            6 : {
                lockId: 4,
                lockName: "Kurita"
            }
        }
    },
    displayGiveSpecialLock: () => {
        if (MAPDATA[99].specialLocks[WORLD]) {
            if (MAPDATA[99].specialLocks[WORLD][MAPNUM]) {
                return true;
            }
        }

        return false;
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

function randomizeMaps(){   
    if(CHDATA.maps === undefined) {
        // randomize
        CHDATA.maps = chRandomizeMaps();
        
        if (RANDOMAPS) MAPDATA[97].initializeAllMaps();
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
    }
    return CHDATA.maps;
}

function chrIsMapDone(event_id, map_number) {
    if (!CHDATA.event.mapClearData) return false;
    if (!CHDATA.event.mapClearData[event_id]) return false;

    return !!CHDATA.event.mapClearData[event_id][map_number];
}

function chRandomizeMap(MAPNUM) {
    let possible_maps = [];

    for (event_id in MAPDATA) {
        if(!["99", '98', '10'].includes(event_id) && !chrIsMapDone(event_id, MAPNUM)){
            if(MAPDATA[event_id].maps[MAPNUM] !== undefined){
                let map = {};

                map.world = event_id;
                possible_maps.push(map);
            }
        }
    }

    return possible_maps[Math.floor(Math.random()*possible_maps.length)];
}

function chRandomizeMaps() {
    var maps = {};
    for(var i = 1; i < 8; i++){
        maps[i] = chRandomizeMap(i);
    }
    return maps;
}

function chLoadRandomFile() {
    if (RANDOMAPS) {
        // --- Load map data
        MAPDATA[97].loadFromChData();
    }

    if (CHDATA.event.comps == undefined) {
        CHDATA.event.comps = chRandomizeComps();
    }
}

function chRerollComps() {
    CHDATA.event.comps = chRandomizeComps();
    
    chSave();
}

// --- Debug only
function chRemoveLocks() {
    CHDATA.event.comps = chRandomizeComps();
    for (let ship in CHDATA.ships) {
        if (CHDATA.ships[ship].lock) delete CHDATA.ships[ship].lock;
    }
    InitUI();
}

// --- Debug only
function chRerollMap() {
    CHDATA.maps[MAPNUM] = chRandomizeMap(MAPNUM);
    
    if (RANDOMAPS) MAPDATA[97].initializeMap(WORLD, MAPNUM);

	chSortieStartChangeDiff();
	CHDATA.event.maps[MAPNUM] = {visited: Array(0), hp: null}
    chLoadSortieInfo(MAPNUM);

    chRerollComps();

    InitUI();
}

const DISABLE_RANDO = false;

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
                let comp = {};
                Object.assign(comp, node[compIndex]);

                if (!DISABLE_RANDO) {
                nodeComps[compIndex] = chRandomizeComp(comp, mapData, nodeIndex);
                }
                else {
                    nodeComps[compIndex] = comp;
                }
            }

            eventNodes[nodeIndex] = nodeComps;
        }

        comps['E-'+map] = eventNodes;
    }

    return comps;
}

// --- Todo
function chHelpLink() {
    return `<a href="./eventinfo" target="_blank">${MAPDATA[WORLD].name} </a>`;

    let eventName = MAPDATA[WORLD].name.replace(' ', '_');
    
    if (WORLD == 47) {
        eventName = 'Hinamatsuri_2020_Mini-Event#/E-1';
        return `<a href="https://en.kancollewiki.net/${eventName}" target="_blank">${MAPDATA[WORLD].name}</a>`;
    }

    if (WORLD > 47) {
        let suffixe = (MAPNUM < 5 ? '/Main_Operations' : '/Extra_Operations') + `#E-${MAPNUM}`;

        switch (WORLD) {
            case '48': 
                eventName = 'Summer_2020_Event';
                break;
            case '50':
                suffixe =  (MAPNUM < 5 ? "/Main_Operation" : '/Extra_Operation') + `#E-${MAPNUM}`;
                break;
        
            default:
                break;
        }

        return `<a href="https://en.kancollewiki.net/${eventName}${suffixe}" target="_blank">${MAPDATA[WORLD].name} </a>`;
    }
    

    let suffixe = `#/E-${MAPNUM}`;
    return `<a href="https://kancolle.fandom.com/wiki/${eventName}_Event${suffixe}" target="_blank">${MAPDATA[WORLD].name} </a>`;
}

// --- debug
function chLowerHP() {
    CHDATA.event.maps[MAPNUM].hp = CHDATA.event.maps[MAPNUM].hp * 0.1;
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
        //console.log(compData)

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
        } 
        else {
            var obj_keys = Object.keys(ennemies);
            var shipID = obj_keys[Math.floor(Math.random() *obj_keys.length)];

            if (!isBoss && strongEnemiesIds.indexOf(parseInt(shipID)) != -1) {
                // --- REROLL ONCE
                shipID = obj_keys[Math.floor(Math.random() *obj_keys.length)];
            }

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

            if (Object.keys(bossEscort).indexOf(ship_id.toString()) !== -1){
                var obj_keys = Object.keys(bossEscort);
                var shipID = obj_keys[Math.floor(Math.random() *obj_keys.length)];

                compEscort.push(parseInt(shipID));
            } else {
                var obj_keys = Object.keys(ennemiesEscort);
                var shipID = obj_keys[Math.floor(Math.random() *obj_keys.length)];

                if (Object.keys(strongEnemies).indexOf(parseInt(shipID)) !== -1) {
                    // --- REROLL ONCE
                    shipID = obj_keys[Math.floor(Math.random() *obj_keys.length)];
                }

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

/**
 * 
 * @param {*} includeFF 
 * @param {*} abyssalsIndex Abyssal index in the fleet (1 = main fleet flag, 6 = last ship of main fleet, 7 = flag of escort fleet, 12 = last ship of escort fleet)
 */
function chrApplyDebuff(includeFF, abyssalsIndex) {

    let ships = getAllShips(includeFF);

    for (const ship of ships) {
        if (!ship.bonusSpecial) ship.bonusSpecial = [];
    }

    if (!abyssalsIndex.length) {
        abyssalsIndex = [abyssalsIndex];
    }

    for (const abyssalIndex of abyssalsIndex) {
        const abyssalId = abyssalIndex > 6 ? FLEETS2[1].ships[abyssalsIndex - 7].mid : FLEETS2[0].ships[abyssalsIndex - 1].mid;

        if (DEBUFF_DATA[abyssalId]) {

            /**
             * @type {debuffData}
             */
            let debuffData = DEBUFF_DATA[abyssalId];

            if (debuffData.debuffFunction) {
                debuffData.debuffFunction(ships);
            }
            else if (debuffData.debuffValue) {
                
                for (const ship of ships) {
                    ship.bonusSpecial.push({mod:debuffData.debuffValue,on:[abyssalId]});
                }
            }
        }
        else {
            // --- Default value = 1.1
            for (const ship of ships) {
                ship.bonusSpecial.push({mod:1.1,on:[abyssalId]});
            }
        }
    }

    return;
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
    
    // --- Gotou princess
    for (let mid = 1942; mid <= 1944; mid++) {
        VOICES[mid].attack = VOICES[mid].attackB;
        VOICES[mid].damage = VOICES[mid].damageB;
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
    
    // --- Linga princess
    for (let mid = 2003; mid <= 2005; mid++) {
        VOICES[mid].attack = VOICES[mid].attackB;
        VOICES[mid].damage = VOICES[mid].damageB;
    }
    
    // --- New CL princess
    for (let mid = 2009; mid <= 2011; mid++) {
        VOICES[mid].attack = VOICES[mid].attackB;
        VOICES[mid].damage = VOICES[mid].damageB;
    }
    
    // --- Cavour princess
    for (let mid = 2032; mid <= 2034; mid++) {
        VOICES[mid].attack = VOICES[mid].attackB;
        VOICES[mid].damage = VOICES[mid].damageB;
    }

    // --- Victorious abyssal
    for (let mid = 2044; mid <= 2046; mid++) {
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

    // --- Gotou princess
    for (let mid = 1942; mid <= 1944; mid++) {
        VOICES[mid].attack = VOICES[mid].attackN;
        VOICES[mid].damage = VOICES[mid].damageN;
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
    
    // --- Linga princess
    for (let mid = 2003; mid <= 2005; mid++) {
        VOICES[mid].attack = VOICES[mid].attackN;
        VOICES[mid].damage = VOICES[mid].damageN;
    }
    
    // --- New CL princess
    for (let mid = 2009; mid <= 2011; mid++) {
        VOICES[mid].attack = VOICES[mid].attackN;
        VOICES[mid].damage = VOICES[mid].damageN;
    }
    
    // --- Cavour princess
    for (let mid = 2032; mid <= 2034; mid++) {
        VOICES[mid].attack = VOICES[mid].attackN;
        VOICES[mid].damage = VOICES[mid].damageN;
    }

    // --- Victorious abyssal
    for (let mid = 2044; mid <= 2046; mid++) {
        VOICES[mid].attack = VOICES[mid].attackN;
        VOICES[mid].damage = VOICES[mid].damageN;
    }
}

const escortShipType = ['DD', 'CA', 'CL', 'CAV']

var allAbyssals = {};
var escortAbyssals = {};
var escortAbyssalsBoss = {};

var abyssals = {};
var boss = {};
var strongEnemies = {};

var installationBoss = {};
var installation = {};

var submarines = {};
var submarinesBoss = {};

const bossIds = [
    1548,
    1556,1557,1573,1574,1581,1582,1583,1584,1585,
    1586, 1620, 1781, 1782,                 // --- Aircraft carrier Princess
    1587,
	1588,1589,1590,1597,1598,1599,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1611,
	1612,1613,1619,1625,1626,1627,1628,1629,1630,1631,1632,1633,1634,1635,
	1636,
    1641, 1642, 1643,                       // --- Light cruiser Princess
    1647, 1648, 1649, 1676, 1677, 1678,     // --- Destroyer Water Demon
    1650,1651,1652,1653,1654,1655,1656,1657,1658,
    1659, 1660, 1661, 1662, 1663, 1664,     // --- Heavy Cruiser Princess
    1863, 1864,                             // --- Heavy Cruiser Princess (Blue)
    1668,1669,1670,1671,1672,1673,1674,1675,
	1679,1680,1681,1682,1683,1684,1685,1686,1687,1688,1689,1690,1691,
	1692,1696,1697,1698,1699,1700,1701,1702,1703,1704,1705,1706,1707,1708,1709,1710,
	1711,1712,1713,1716,1717,1718,1719,1720,1721,1722,1723,1724,1725,1726,1727,1728,
	1729,1730,1731,1732,1733,1745,1746,1747,1748,1749,1750,1751,1752,1753,1754,1755,
	1756,1757,1758,1759,1760,1767,1768,1769,1770,1771,1772,1773,1774,1775,
	1783,1784,1785,1786,1787,1788,1790,1791,1792,1793,1794,1795,1796,1797,1798,1799,
	1800,1801,1802,1803,1804,1809,1810,1811,1812,1813,1814,1815,1816,1817,1818,1819,
	1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1834,1835,1836,
	1837,1838,1839,1840,1841,1842,1843,1844,1845,1846,1847,1848,1849,1850,1851,1852,
	1853,1854,1855,1856,1857,1644,1645,1646,1693,1694,1695,1736,1737,1738,1789,1805,
	1806,1807,1808,1865,1866,1867,1868,1869,1870,1871,1872,1873,1874,1875,1876,
	1877, 1878, 1879, 1880 ,1881, 1882,     // --- Abyssal Mediterranean Princess
    1883,1884,1885, 1886,1887,1888,
	1889,1890,1891,1892,1893,1894, 
    1896, 1897,                             // --- Ne kai 2 and 3
	1898,1899,1900, 1901,1902,1903, 
    1906, 1907, 1908,                       // --- Aircraft carrier Princess Kai
	1909,1910,1911, 1912,1913,1914,
	1915,1916,1917, 1918,1919,1920,
	1921, 1922, 1923, 1924, 1925, 1926,
	1927, 1928, 1929, 1930, 1931, 1932,
	1933, 1934, 1935, 1936, 1937, 1938,
	1939, 1940, 1941, 1942, 1943, 1944,
	1945, 1946, 1947, 1948, 1949, 1950,
	1954, 1955, 1956,                       // --- Summer Ne kai 2, 3 and B
	1957, 1958, 1959, 1960,                 // --- Light cruiser Princess B
	1961, 1962, 1963, 1964,
	1965, 1966, 1967, 1968, 1969, 1970,
	1971, 1972, 1973, 1974, 1975, 1976,
    1977, 1978,
    1979, 1980, 1981, 1982, 1983, 1984,     // --- New Battleship Princess
    1985, 1986, 1987,                       // --- Submarine Princess Kai B Flagship
    1988, 1989, 1990, 1991, 1992, 1993,     // --- Abyssal Bamboo Princess
    1994, 1995,                             // --- Supply Depot Princess B 4
    1996,                                   // --- Submarine Princess Kai B Flagship 4
    1997,                                   // --- Aircraft Carrier Princess Kai 4
    2000, 2001, 2002, 2003, 2004, 2005,     // --- Lunga Point Heavy Cruiser Princess
    2006, 2007, 2008, 2009, 2010, 2011,     // --- New Light Cruiser Princess
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, // --- Supply Depot Princess B Vacation Mode
    2023, 2024, 2025, 2026, 2027, 2028,     // --- Harbour Summer Princess B
    2029, 2030, 2031, 2032, 2033, 2034,     // --- Mediterranean Dreadnought Water Princess
    2035, 2036, 2037, 2038, 2039, 2040,     // --- Abyssal Mediterranean Princess Vacation Mode
    2041, 2042, 2043, 2044, 2045, 2046,     // --- European Armoured Carrier Princess
    2047, 2048,                             // --- Airfield Princess
    2049,                                   // --- New SSH
    2053, 2054, 2055, 2056, 2057, 2058,     // --- Submarine Shark Water Demon

	9012,9013,9014,9015,9016,9018,9019,9020,9021,9022, // --- Fog fleet
];

const strongEnemiesIds = [
    1539,1540,1544,1545,1546,1547,      // --- Early bosses
    1561, 1562,                         // --- Re class 
    1895, 1896,                         // --- Ne kai 1 & 2
    1953, 1954,                         // --- Summer Ne kai 1 & 2
    2013, 2014,                         // --- Wa-Class B
];
    
function chInitAbyssalTables () {
	
	for (ship_id in SHIPDATA) {
		if (ship_id >= 1500 && ship_id < 3000) {
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

                if (strongEnemiesIds.indexOf(parseInt(ship_id)) !== -1) {
                    strongEnemies[ship_id] = ship;
                }
			}
			allAbyssals[ship_id] = ship;

			SHIPDATA[ship_id].fuel = 100;
			SHIPDATA[ship_id].ammo = 100;
		}
	}
}

/**
 * Create the equipment and return its id
 * @param {*} mid 
 */
 function chrAddEquipment(mid, stars) {    
    if (!EQDATA[mid]) return;
    let eqid;

    for (var j=0; j<10000; j++) {
        eqid = 'x'+(90000+j);
        if (CHDATA.gears[eqid]) continue;

        var newequip = {
            itemId: eqid,
            masterId: mid,
            lock: 1,
            stars: stars ? stars : 0,
            ace: ((EQTDATA[EQDATA[mid].type].isPlane)? 7 : -1)
        };
        CHDATA.gears[eqid] = newequip;

        return (90000+j);
    }

    return 0;
}

/**
 * Create the ship and return its id
 * @param {*} mid 
 */
 function chrAddShip(mid, level) { 
    if (!SHIPDATA[mid]) return;
    let sid;

    for (var j=0; j<10000; j++) {
        sid = 'x'+(90000+j);
        if (CHDATA.ships[sid]) continue;
        var sdata = SHIPDATA[mid];
        var lvl = level ? level : 1;

        const EV = sdata.EVbase ? sdata.EVbase + Math.floor((sdata.EV-sdata.EVbase)*lvl/99) : sdata.EV;
        const LOS = sdata.LOSbase ? sdata.LOSbase + Math.floor((sdata.LOS-sdata.LOSbase)*lvl/99) : sdata.LOS;
        const ASW = sdata.ASWbase ? sdata.ASWbase + Math.floor((sdata.ASW-sdata.ASWbase)*lvl/99) : sdata.ASW;

        var newship = {
            HP: [sdata.HP, sdata.HP],
            LVL: lvl,
            FP: sdata.FP,
            TP: sdata.TP,
            AA: sdata.AA,
            AR: sdata.AR,
            EV: EV,
            LOS: LOS,
            ASW: ASW,
            LUK: sdata.LUK,
            RNG: sdata.RNG,
            ammo: 10,
            fuel: 10,
            items: [-1,-1,-1,-1,-1],
            masterId: mid,
            morale: 49,
            planes: sdata.SLOTS.slice(),
            ex: 1
        };

        // HP = Base HP + Marriage HP + HP Mod
        if (newship.LVL > 99){
            let HPmarriage = [4,4,4,5,6,7,7,8,8,9][Math.floor(newship.HP/10)] || 9;
            newship.HP[0] = newship.HP[1] = sdata.HP + (HPmarriage || 0);
        }

        CHDATA.ships[sid] = newship;

        return (90000+j);
    }

    return 0;
}

function chrCreateRandomShip(id, randomStat) {
    let ship = {
        hp: [],
        fp: [],
        tp: [],
        aa: [],
        ar: [],
        ev: [],
        as: [],
        ls: [],
        lk: [],
    };
    
    ship.rosterId = id;
    ship.masterId = chGetRandomShipId();
    ship.level = Math.max(1, Math.floor(Math.random() * 176));

    // HP = Base HP + Marriage HP + HP Mod
    if(ship.level > 99){
        let HPmarriage = [4,4,4,5,6,7,7,8,8,9][Math.floor(chGetShipForRandomFile(ship.masterId, randomStat).HP/10)] || 9;
        ship.hp[0] = ship.hp[1] = chGetShipForRandomFile(ship.masterId, randomStat).HP + (HPmarriage || 0);
    }else{
        ship.hp[0] = ship.hp[1] = chGetShipForRandomFile(ship.masterId, randomStat).HP;
    }

    ship.fp[0] = ship.fp[1] = chGetShipForRandomFile(ship.masterId, randomStat).FP;

    ship.tp[0] = ship.tp[1] = chGetShipForRandomFile(ship.masterId, randomStat).TP;

    ship.aa[0] = ship.aa[1] = chGetShipForRandomFile(ship.masterId, randomStat).AA;

    ship.ar[0] = ship.ar[1] = chGetShipForRandomFile(ship.masterId, randomStat).AR;

    let shipd = chGetShipForRandomFile(ship.masterId, randomStat);
    shipd.EVbase = shipd.EVbase ? shipd.EVbase : 0;

    ship.ev[0] = ship.ev[1] = getEvasion(shipd, ship.level);

    shipd = chGetShipForRandomFile(ship.masterId, randomStat);
    shipd.ASWbase = shipd.ASWbase ? shipd.ASWbase : 0;

    ship.as[0] = ship.as[1] = getASW(shipd, ship.level);

    shipd = chGetShipForRandomFile(ship.masterId, randomStat);
    shipd.LOSbase = shipd.LOSbase ? shipd.LOSbase : 0;

    ship.ls[0] = ship.ls[1] = getLOS(shipd, ship.level);

    ship.lk[0] = ship.lk[1] = chGetShipForRandomFile(ship.masterId, randomStat).LUK;

    ship.range = chGetShipForRandomFile(ship.masterId, randomStat).RNG;
    ship.speed = chGetShipForRandomFile(ship.masterId, randomStat).SPD;

    ship.items = [-1, -1, -1, -1, -1];

    shipd = chGetShipForRandomFile(ship.masterId, randomStat);
    ship.slots = shipd.SLOTS ? shipd.SLOTS : [0, 0, 0, 0, 0];
    ship.slotnum = ship.slots.length;

    ship.fuel = chGetShipForRandomFile(ship.masterId, randomStat).fuel;
    ship.ammo = chGetShipForRandomFile(ship.masterId, randomStat).ammo;

    ship.morale = 49;

    return ship;
}


function chrEmergencyResetStats(shipId) {
	let shipN = CHDATA.ships[shipId];
	let shipO = SHIPDATA[shipN.masterId];
	
	const EV = shipO.EVbase ? shipO.EVbase + Math.floor((shipO.EV-shipO.EVbase)*shipN.LVL/99) : shipO.EV;
	const LOS = shipO.LOSbase ? shipO.LOSbase + Math.floor((shipO.LOS-shipO.LOSbase)*shipN.LVL/99) : shipO.LOS;
	const ASW = shipO.ASWbase ? shipO.ASWbase + Math.floor((shipO.ASW-shipO.ASWbase)*shipN.LVL/99) : shipO.ASW;

    shipN.FP = shipO.FP;
	shipN.TP = shipO.TP;
	shipN.AA = shipO.AA;
	shipN.AR = shipO.AR;
	shipN.EV = EV;
	shipN.ASW = ASW;
	shipN.LOS = LOS;
	shipN.RNG = shipO.RNG;
}