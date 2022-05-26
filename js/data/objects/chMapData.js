class ChMapData {
    constructor () {
        this.name = "";
        this.nameT = "";

        this.mapPreviewImage = "";
        this.mapImage = "";

        this.fleetTypes = [];
        
        this.bgmMap = "";
        this.bgmDN = "";
        this.bgmNN = "";
        this.bgmDB = "";
        this.bgmNB = "";

        this.bossnode = []; // --- todo => computed

        this.overrideBGM = {}; // --- Ignored

        this.giveLock = ""; 
        this.checkLock = []; 

        this.lockSpecial = false; // --- Todo => new model with startNode[] property
        this.giveLockSpecial = []; // --- Todo => new model with startNode[] property
        this.checkLockSpecial = []; // --- Todo => new model with startNode[] property

        this.lbas = 0;
        this.lbasSortie = 0;

        this.parts = {};

        this.reward = { ships: [], firstOnly: false };

        this.hiddenRoutes = {};

        this.debuffRules = {};

        /**
         * @type {ChRule[]}
         */
        this.startCheckRule = [];

        this.nodes = {};
    }
}