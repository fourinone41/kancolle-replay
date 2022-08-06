class ChEnemyRaid {
    constructor () {

        this.maxNum = { 3: 1, 2: 1, 1: 1, 4: 1 };
        this.chance = { 3: .15, 2: .15, 1: .15, 4: .15 };
        this.highAltitude = { 3: false, 2: false, 1: false, 4: false };
        this.compName = 'AB';
        this.compDiff = {
            3: {},
            2: {},
            1: {},
            4: {},
        }
    }
}