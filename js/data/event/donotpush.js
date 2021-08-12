
setTimeout(() => {
    $('body').css('background-color', '#DDEEFF');
    $('#separator').html(`<button type="button" style="width:100px;vertical-align:middle" onclick="RATE = 0">Pause
            
                </button>
                <button type="button" style="width:100px;vertical-align:middle" onclick="RATE = 0.9">x0.9
        
                </button>
            
                <button type="button" style="width:100px;vertical-align:middle" onclick="RATE = 1">x1
        
                </button>

                
                <button type="button" style="width:100px;vertical-align:middle" onclick="RATE = 2">x2
        
                </button>

                    
                <button type="button" style="width:100px;vertical-align:middle" onclick="RATE = 5">x5

                </button>
                <button type="button" style="margin-left:400px; width:100px;vertical-align:middle" onclick="chRerollMap()">Reroll Map

                </button>`);
    MAPDATA[48].maps[6].bgmMap = 149; MAPDATA[48].maps[6].bgmDN = MAPDATA[48].maps[6].bgmNN = 150; MAPDATA[48].maps[6].bgmNB = MAPDATA[48].maps[6].bgmDB = 151;
    //MAPDATA[48].maps[7].nodes.Z.friendFleetSX = ["E7Z-4", "E7Z-6", "E7Z-8", "E7Z-8", "E7Z-9", "E7Z-9", "E7Z-10", "E7Z-10", "E7Z-10"]
    
    if (CHDATA.fleets)
        Object.assign(CHDATA.fleets[3], CHDATA.fleets[4]);

    InitUI();

    // --- Cheats
    try {
        let _debuff = {
            A: 99,

            AB: 99,
            AB_1: 99,
            AB_d: 99,
            AB1: 99,
            AB2: 99,

            B: 99,
            B_1: 99,
            B_2: 99,
            B_d: 99,

            C: 99,

            D: 99,

            E: 99,

            F: 99,

            G: 99,
            G_d: 99,

            H_1: 99,
            H_2: 99,
            H_d: 99,

            I: 99,
            I_d: 99,

            J: 99,
            J_d: 99,
            J2: 99,

            K: 99,

            L: 99,
            L_d: 99,
            LS: 99,

            M: 99,

            N: 99,
            N_d: 99,
            NS: 99,

            O: 99,

            Q2: 99,
            QS: 99,

            R: 99,
            RS: 99,

            S: 99,
            S2: 99,
            SS: 99,

            T: 99,

            U: 99,
            U_1: 99,
            U_2: 99,
            U_d: 99,

            V: 99,
            V_d: 99,
            V1_2: 99,
            V1_d: 99,
            V4_2: 99,
            V4_3: 99,

            W: 99,
            W_A: 99,
            W_S: 99,

            X_2: 99,
            X_3: 99,
            X_A: 99,
            X_S: 99,

            Y: 99,
            Y_3: 99,
            Y_d: 99,
            
            Z: 99,
            Z2_d: 99,
        };

        CHDATA.event.maps[1].debuff = _debuff;
        CHDATA.event.maps[2].debuff = _debuff;
        CHDATA.event.maps[3].debuff = _debuff;
        CHDATA.event.maps[4].debuff = _debuff;
        CHDATA.event.maps[5].debuff = _debuff;
        CHDATA.event.maps[6].debuff = _debuff;
        CHDATA.event.maps[7].debuff = _debuff;
    }
    catch {
        
    }

    for (let _shipId in SHIPDATA) {
        if (_shipId < 1500) {
            SHIPDATA[_shipId].canOpTorpMain = true;
        }
    }
}, 2000);

var tested ={
    22: [1, 2, 3, 4],                   // --- Spring 2013          // DONE
    23: [1, 2, 3, 4],                   // --- Summer 2013          // DONE
    24: [1, 2, 3, 0, 0],                // --- Fall 2013
    25: [1, 2, 3],                      // --- Winter 2013          // DONE
    26: [1, 2, 3, 4, 0],                // --- Spring 2014
    27: [1, 2, 3, 0, 0, 0],             // --- Summer 2014
    28: [1, 2, 3, 4],                   // --- Fall 2014            // DONE
    29: [1, 2, 3, 0, 5],                // --- Winter 2015
    30: [1, 2, 3, 4, 0, 6],             // --- Spring 2015
    31: [1, 2, 3, 0, 0, 0, 0],          // --- Summer 2015
    32: [1, 2, 3, 4, 0],                // --- Fall 2015
    33: [1, 2, 3],                      // --- Winter 2016          // DONE
    34: [1, 2, 3, 0, 0, 6, 0],          // --- Spring 2016
    35: [1, 2, 3, 0],                   // --- Summer 2016
    36: [1, 2, 3, 0, 5],                // --- Fall 2016
    37: [1, 2, 3],                      // --- Winter 2017          // DONE
    38: [1, 2, 3, 0, 0],                // --- Spring 2017
    39: [1, 2, 3, 0, 0, 0, 0],          // --- Summer 2017
    40: [1, 2, 3, 0],                   // --- Fall 2017
    41: [1, 2, 3, 4, 0, 0, 0],          // --- Winter 2018
    42: [1, 2, 3, 4, 0],                // --- Early fall 2018
    43: [1, 2, 3],                      // --- Winter 2019          // DONE
    44: [1, 2, 3, 0, 0],                // --- Spring 2019
    45: [1, 2, 3],                      // --- Summer 2019          // DONE
    46: [1, 2, 3, 0, 0, 0],             // --- Fall 2019
    47: [1],                            // --- Hinamatsuri 2020     // DONE
    48: [1, 2, 3, 0, 0, 0, 0],          // --- Summer 2020
    49: [0, 0, 0, 0],                   // --- Fall 2020
    50: [0, 0, 0, 0, 0],                // --- Spring 2021
}

const ABYSSALS_ON = false;

function chrCheatSupport() {
    let ships = [147, 394, 541, 573, 591, 594];
    let shipsId = []; 

    for (let ship in CHDATA.ships) {
        let id = ship.substring(1,15)
        if (id >= 90000)
        delete CHDATA.ships[ship];
    }

    for (let ship in ships) {
        shipsId[ship] = chrAddShip(ships[ship], 185);
    }

    for (let key in shipsId) {
        let shipId = shipsId[key];
        let equipList = [];

        if (key == 0 || key == 1) {
            equipList = [307, 307, 307];
        }

        if (key == 2 || key == 3 || key == 4) {
            equipList = [318, 318, 318, 307];
        }

        if (key == 5) {
            equipList = [100, 100, 100, 100, 307];
        }

        for (let equipKey in equipList) {
            let equipId = chrAddEquipment(equipList[equipKey], 10);
            chShipEquipItem('x'+shipId, equipId, parseInt(equipKey));
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

    for (var j=0; j<1000; j++) {
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

function getComp(node) {
    let eventName = MAPDATA[WORLD].name;
    let mapName = 'E-' + MAPNUM;

    // --- By default return current boss
    if (!node) {
        // --- Get boss node
        if (CHDATA.event.maps[MAPNUM].part) {
            let part = CHDATA.event.maps[MAPNUM].part;

            node = MAPDATA[WORLD].maps[MAPNUM].parts[part].currentBoss;
        }
        else {

            // --- Convert to letter ?
            node = MAPDATA[WORLD].maps[MAPNUM].bossnode;
            node = String.fromCharCode(+node+64);
        }
    }

    let comps = CHDATA.event.comps[mapName][node];

    if (!comps) throw 'Node not found';

    return comps;
}

function displayComp(node) {
    comps = getComp(node);

    let text = "";
    let diffmod = MAPDATA[WORLD].diffMode;

    for (const diff in comps) {

        if (diff.includes('Hard') || diffmod == 1){
            // --- Display
            let comp = comps[diff].c;
            let escort = comps[diff].ce;

            for (let index = 0; index < 6; index++) {
                let shipId = comp[index];

                text += SHIPDATA[shipId].name;
                
                if (escort) { 
                    shipId = escort[index];

                    text += '     ';
                    text += SHIPDATA[shipId].name;               
                }

                text += '\n';
            }
            
            text += '\n';
        }
    }
    
    alert(text);
}