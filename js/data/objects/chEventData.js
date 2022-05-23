class ChEventData {
    constructor () {
        this.name = '';
        this.date = Date.now();

        this.bannerImg = '';
        this.bannerImgAlt = '';

        this.diffMode = 2;

        this.allowDiffs = [];
        this.allowFleets = [];
        this.allowLBAS = true;
        this.allowVanguard = true;

        this.vanguardConsts = { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 };
        this.newResupplyCosts = true;

        this.allowStrongFF = false;
        this.friendFleetWaves = {};

        this.friendFleet = {};
        this.maps = {}
    }
}