class ChMapData {
    constructor () {
        this.name = "";
        this.nameT = "";

        this.mapPreviewImage = "";
        this.mapImage = "";

        this.fleetTypes = [];
        
        this.bgmMap = 0;
        this.bgmDN = 0;
        this.bgmNN = 0;
        this.bgmDB = 0;
        this.bgmNB = 0;

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