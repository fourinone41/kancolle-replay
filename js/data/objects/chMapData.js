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

        this.bossnode = [];

        this.overrideBGM = {};

        this.giveLock = [];
        this.checkLock = [];
        this.lockSpecial = false;

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