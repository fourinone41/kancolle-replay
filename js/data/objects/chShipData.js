class ChShipData {
    constructor () {
        this.id = 0;

        this.name = "";

        this.nameJP = "";
            
        this.customImage = "assets/icons/KVerniy.jpg";
    
        this.type = "";
    
        this.sclass = 0;
    
        this.nid = 0;
    
        this.added = "2013-04-17";
    
        this.HP = 0;
    
        this.HPmax = 0;
    
        this.FP = 0;
    
        this.FPbase = 0;
    
        this.TP = 0;
    
        this.TPbase = 0;
    
        this.AA = 0;
    
        this.AAbase = 0;
    
        this.AR = 0;
    
        this.ARbase = 0;
    
        this.EV = 0;
    
        this.EVbase = 0;
    
        this.ASW = 0;
    
        this.ASWbase = 0;
    
        this.LOS = 0;
    
        this.LOSbase = 0;
    
        this.LUK = 0;
    
        this.LUKmax = 0;
    
        this.RNG = 0;
    
        this.SPD = 0;
    
        this.SLOTS = [];
    
        this.fuel = 0;
    
        this.ammo = 0;
    
        this.next = 0;
    
        this.prev = 0;
    
        this.nextlvl = 0;
    
        this.fitclass = 0;
    
        this.alwaysOASW = false;
    
        this.hasBuiltInFD = false;
    
        this.canAirAttack = false;
    
        /**
         * Night attack type 
         * TODO : be more specific 
         */
        this.nightattack = 0;
    
        this.iscarrier = false;
    
        this.isASWlast = false;
    
        this.attackSpecial = 0;
    
        this.hasBuiltInNightCrew = false;
    
        this.canZuiunCI = false;
    
        this.excludeEquip = {};
    
        //this.canTorp = () => {};
    
        this.onlyEquip = {};
    
        this.planeasw = 0;
    
        //this.canASW = () => {};
    
        //this.canOASW = () => {};
    
        this.unknownstats = false;
    
        this.isAntiPTShip = false;
    
        this.EQUIPS = [];
    
        this.TACC = 0;
    
        this.cannotCVCI = false;
    
        //this.canShell = () => {};
    
        //this.canNB = () => {};
    
        //this.canOpTorp = () => {};
    
        this.installtype = 0;
    
        this.divebombWeak = 0;
    
        this.LBWeak = 0;
    
        this.isPT = false;
    
        /**
         * Old prop for debuff ?
         */
        this.imageDam = "";
    
        this.nightgun = false;
    
        this.isSummerBB = false;
    
        this.isSummerCA = false;
    
        this.isFrenchBB = false;
    
        this.isAnchorage = false;
    
        this.imageBase = "";
    
        this.imageBroken = "";
    
        this.canOpTorpMain = false;
    
        this.canlaser = false;
    
        //this.shellPower = () => {};
    
        //this.NBPower = () => {};
    
        //this.ASWPower = () => {};
    
        this.ACCbonus = 0;
    }
}

/*
let ar = [];
let str = "";

let typesDefaultValue = {
    number: 0,
    boolean: false,
    string : '""',
    object: "{}",
    function: "() => {}"
}

for (const shKey in SHIPDATA) {

    const shData = SHIPDATA[shKey]


    for (const key in shData) {


        if (!ar.includes(key)) {

            ar.push(key);

            str += `
                this.${key} = ${typesDefaultValue[typeof(shData[key])] ?? typeof(shData[key])};
            `;
        }
    }
}

console.debug(str)
*/