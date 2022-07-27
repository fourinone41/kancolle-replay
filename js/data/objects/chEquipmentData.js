class ChEquipmentData {
    constructor () {

        this.name = "";
            
        this.nameJP = "";
        
        this.added = "2013-04-17";
    
        /**
         * @type {EQUIPMENT_TYPES_ENUM}
         */
        this.type = 0;
    
        this.FP = 0;

        this.TP = 0;
    
        this.AA = 0;
    
        this.AR = 0;
    
        this.ASW = 0;
    
        this.EV = 0;
    
        this.LOS = 0;

        this.ACC = 0;
    
        this.RNG = 0;
    
        this.DIVEBOMB = 0;
    
        this.image = 0;

        this.fitclass = null;
    
        /**
         * CANB stands for CA Night Battle 
         */
        this.CANBbonus = 0;
    
        /**
         * @type {EQUIPMENT_A_TYPES_ENUM}
         */
        this.atype = null;
    
        /**
         * @type {EQUIPMENT_B_TYPES_ENUM}
         */
        this.btype = 0;

        /**
         * Plane image 
         */
        this.b_image = null;
    
        this.isDCProjector = false;
    
        this.noRedT = false;
    
        this.isFighterBomber = false;
    
        /**
         * Dive bomber only ?
         */
        this.canShellInstall = true;
        
        /**
         * from 0 to 1
         */
        this.aaResistShip = 0;
        
        /**
         * from 0 to 1
         */
        this.aaResistFleet = 0;
    
        this.isnightscout = false;
    
        this.isconcentrated = false;
    
        this.specialCutIn = false;
    
        this.isDCOnly = false;
    
        this.isSwordfish = false;
    
        this.canBarrage = false;
    
        this.isRocket = false;
    
        this.cannotOpTorp = false;
    
        this.highAltitude = false;
    }
}

/*
let ar = [];
let str = "";

let typesDefaultValue = {
    number: 0,
    boolean: false,
    string : '""'
}

for (const eqKey in EQDATA) {

    const eqData = EQDATA[eqKey]


    for (const key in eqData) {


        if (!ar.includes(key)) {

            ar.push(key);

            str += `
                this.${key} = ${typesDefaultValue[typeof(eqData[key])]};
            `;
        }
    }
}

console.debug(str)
*/