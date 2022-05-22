class ChEventData {
    constructor () {
        this.name = '';
        this.date = Date.now();

        this.diffMode = 2;

        this.allowDiffs = [];
        this.allowFleets = [];
        this.allowLBAS = false;
        this.allowVanguard = false;

        this.vanguardConsts = { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 };
        this.newResupplyCosts = true;

        this.bannerImg = '';
        this.bannerImgAlt = '';

        this.allowStrongFF = false;
        this.friendFleetWaves = {};

        this.friendFleet = {};
        this.maps = {}
    }
}