
/**
 * 
 * @param {'debuff' | 'mapPart'} type 
 * @param {ChGimmickParameters[]} gimmickData 
 */
function ChGimmickList(type, mapPartNumber, mapNum, gimmickData) {

    /**
     * @type {'debuff' | 'mapPart'}
     */
    this.type = type;

    this.mapPartNumber = mapPartNumber ?? 'D';

    this.mapNum = mapNum;

    /**
     * Set this to true to play sound on every step done
     */
    this.playSoundOnStepDone = false;

    /**
     * @type {ChGimmick[]}
     */
    this.gimmicks = [];

    for (const gimmick of gimmickData) {
        gimmick.mapnum = mapNum;
        gimmick.mapPartNumber = mapPartNumber;

        this.gimmicks.push(new ChGimmick(gimmick));
    }

    /**
     * 
     * @returns Returns true if gimmick is done
     */
    this.gimmickDone = () => {
        for (const gimmick of this.gimmicks) {
            if (!gimmick.gimmickDone()) return false;
        }

        return true;
    }

    /**
     * Check if gimmick steps have progressed
     */
    this.checkGimmickSteps = (node) => {
        for (const gimmick of this.gimmicks) {
            if (gimmick.node == node && gimmick.shouldCountBeIncreased()) {
                if (!CHDATA.event.maps[mapNum].debuff[gimmick.id]) CHDATA.event.maps[mapNum].debuff[gimmick.id] = 1;
                else CHDATA.event.maps[mapNum].debuff[gimmick.id]++;

                if (this.playSoundOnStepDone) {
                    SM.play('done');
                    // --- Missing the message here
                }
            }
        }
    }

    /**
     * Check if the debuff is done. 
     * If it is, plays sound
     */
    this.checkIfDebuffed = () => {
        if (!this.gimmickDone()) return;
        if (CHDATA.event.maps[mapNum].debuffed) return;

        if (!this.playSoundOnStepDone) {
            CHDATA.event.maps[mapNum].debuffed = true;
            SM.play('done');
            alert('DEBUFF');
        }
    }
}

let ChGimmickParameters = {
    node: '',
    timesRequiredPerDiff: {
        4: 0,
        1: 0,
        2: 0,
        3: 0,
    },
    ranksRequiredPerDiff: {
        4: 'D',
        1: 'D',
        2: 'D',
        3: 'D',
    },
    mapnum: 0,
    mapPartNumber: 0,
    /**
     * Allows to implement custom logic on debuff count increase
     */
    shouldCountBeIncreased: () => { return false; },
    /**
     * Allows to implement description for the rule
     */
    getDescription: (difficulty) => { return ''; },
}


/**
 * 
 * @param {ChGimmickParameters} parameters 
 */
function ChGimmick(parameters) {

    /**
     * Node 
     */
    this.node = parameters.node;

    this.mapnum = parameters.mapnum;

    this.mapPartNumber = parameters.mapPartNumber ?? 'D';

    this.id = `E${this.mapnum}-${this.mapPartNumber}-${this.node}`

    this.timesRequiredPerDiff = parameters.timesRequiredPerDiff;

    this.ranksRequiredPerDiff = parameters.ranksRequiredPerDiff;

    /**
     * Returns true if this part of the gimmick is done
     */
    this.gimmickDone = () => {
        if (!CHDATA.event.maps[this.mapnum].debuff) return false;

        let count = CHDATA.event.maps[this.mapnum].debuff[this.id];
        let requiredCount = this.timesRequiredPerDiff[getDiff()];

        if (!requiredCount) return true;
        if (!count) return false;

        return count >= requiredCount;
    }

    /**
     * Returns true if count should be increased
     */
    this.shouldCountBeIncreased = () => {
        if (this.gimmickDone()) return false;

        if (parameters.shouldCountBeIncreased) {
            return parameters.shouldCountBeIncreased();
        }

        let requiredRank = this.ranksRequiredPerDiff[getDiff()];
        let aquiredRank = CHDATA.temp.rank;

        let ranks = ['S','A','B','C','D'];

        for (const rank of ranks) {
            if (rank == requiredRank) return aquiredRank == rank;
            
            if (rank == aquiredRank) return true;
        }

        return false;
    }

    this.getDescription = (diff) => {
        if (parameters.getDescription) {
            return parameters.getDescription();
        }

        return this.ranksRequiredPerDiff[diff] + (this.timesRequiredPerDiff[diff] > 1 ? (' x' + this.timesRequiredPerDiff[diff]) : '');
    }
}