/**
 * 
 * @param {'debuff' | 'mapPart'} type 
 * @param {ChGimmickParameters[]} gimmickData 
 * @param {{
 *  numberOfStepRequired: number
 *  partToUnlock: number
 * }} additionnalParameters Additionnal parameters to handle special cases
 */
function ChGimmickList(type, mapPartNumber, mapNum, gimmickData, additionnalParameters) {

    /**
     * @type {'debuff' | 'mapPart'}
     */
    this.type = type;

    this.mapPartNumber = mapPartNumber;

    this.mapNum = mapNum;
    this.mapIdForChdata = mapNum ?? 'multimap';

    /**
     * @type {{
    *   numberOfStepRequired: number
     *  partToUnlock: number
     * }}
     */
    this.additionnalParameters = additionnalParameters;

    /**
     * Set this to true to play sound on every step done
     */
    this.playSoundOnStepDone = false;

    /**
     * @type {ChGimmick[]}
     */
    this.gimmicks = [];

    for (const gimmick of gimmickData) {
        if (mapNum) gimmick.mapnum = mapNum;

        gimmick.mapPartNumber = mapPartNumber;

        let gimmickObject = new ChGimmick(gimmick);

        if (!mapNum) gimmickObject.mapIdForChdata = this.mapIdForChdata;

        if (type == 'debuff') {
            gimmickObject.id += '-D';
        }

        if (type == 'mapPart') {
            // --- To finish
            gimmickObject.id += '-U' + additionnalParameters.partToUnlock;
        }

        this.gimmicks.push(gimmickObject);
    }

    /**
     * 
     * @returns Returns true if gimmick is done
     */
    this.gimmickDone = () => {

        if (this.mapPartNumber && this.mapNum && this.mapPartNumber > CHDATA.event.maps[this.mapNum].part) return false;

        // --- Only X steps required instead of all of them (Summer 16 E4)
        if (additionnalParameters && additionnalParameters.numberOfStepRequired) {
            let count = 0;

            for (const gimmick of this.gimmicks) {
                if (gimmick.gimmickDone()) count++;
            }

            return count >= additionnalParameters.numberOfStepRequired;
        }

        for (const gimmick of this.gimmicks) {
            if (!gimmick.gimmickDone()) return false;
        }

        return true;
    }

    /**
     * Check if gimmick steps have progressed
     */
    this.checkGimmickSteps = (node, checkGimmickParameters) => {
        if (!CHDATA.event.maps[this.mapIdForChdata]) {
            CHDATA.event.maps[this.mapIdForChdata] = {};
        }

        if (!CHDATA.event.maps[this.mapIdForChdata].debuff) {
            CHDATA.event.maps[this.mapIdForChdata].debuff = {};
        }

        for (const gimmick of this.gimmicks) {

            let isGimmickForThisNode = gimmick.node == node || gimmick.node == 'MapWide';
            if (!isGimmickForThisNode) continue;

            let isGimmickForThisMap = gimmick.mapnum == MAPNUM;
            if (!isGimmickForThisMap) continue;

            if (gimmick.mapPartNumber && gimmick.mapPartNumber > CHDATA.event.maps[gimmick.mapnum].part) continue;

            let shouldCountBeIncreased = gimmick.shouldCountBeIncreased(checkGimmickParameters);

            if (shouldCountBeIncreased) {
                if (!CHDATA.event.maps[this.mapIdForChdata].debuff[gimmick.id]) CHDATA.event.maps[this.mapIdForChdata].debuff[gimmick.id] = 0;
                
                CHDATA.event.maps[this.mapIdForChdata].debuff[gimmick.id] += shouldCountBeIncreased;

                if (this.playSoundOnStepDone && gimmick.gimmickDone()) {
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

        if (!mapNum) {
            let atleastOne = false;

            for (const gimmick of this.gimmicks) {
                if (CHDATA.event.maps[gimmick.mapnum].debuffed) continue;

                CHDATA.event.maps[gimmick.mapnum].debuffed = true;

                atleastOne = true;
            }

            if (atleastOne && !this.playSoundOnStepDone) {
                SM.play('done');
                alert('DEBUFF');
            }

            return;
        }

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
    /**
     * @type {'battle' | 'NoHPLoss' | 'AirState' | 'ReachNode'}
     */
    type: 'battle',
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
    shouldCountBeIncreased: (parameters) => { return false; },
    /**
     * Allows to implement description for the rule
     */
    getDescription: (difficulty) => { return ''; },
    /**
     * You can specify if a certain route unlock must be done before
     */
    routeUnlockRequired: 0
}


/**
 * @param {ChGimmickParameters} parameters 
 */
function ChGimmick(parameters) {

    /**
     * Node 
     */
    this.node = parameters.node;

    this.mapnum = parameters.mapnum;

    this.mapIdForChdata = this.mapnum;

    this.mapPartNumber = parameters.mapPartNumber;

    this.id = `E${this.mapnum}-${this.node}`

    this.timesRequiredPerDiff = parameters.timesRequiredPerDiff;

    this.ranksRequiredPerDiff = parameters.ranksRequiredPerDiff;

    this.routeUnlockRequired = parameters.routeUnlockRequired;

    /**
     * Returns true if this part of the gimmick is done
     */
    this.gimmickDone = () => {
        if (!CHDATA.event.maps[this.mapIdForChdata].debuff) return false;

        if (this.node == 'AB' && CHDATA.config.disableRaidReq) return true;

        let count = CHDATA.event.maps[this.mapIdForChdata].debuff[this.id];
        let requiredCount = this.timesRequiredPerDiff[getDiff()];

        if (!requiredCount) return true;
        if (!count) return false;

        return count >= requiredCount;
    }

    switch (parameters.type) {
        case 'NoHPLoss': {
            parameters.shouldCountBeIncreased = (checkGimmickParameters) => {
                return checkGimmickParameters.totalHPLost <= 0;
            }

            parameters.getDescription = (diff) => {
                if (!this.timesRequiredPerDiff[diff]) return '-';
                return 'Take no damage' + (this.timesRequiredPerDiff[diff] > 1 ? (' x' + this.timesRequiredPerDiff[diff]) : '');
            }

            break;
        }

        case 'ReachNode': {
            parameters.shouldCountBeIncreased = (checkGimmickParameters) => {
                return true;
            }

            parameters.getDescription = (diff) => {
                if (!this.timesRequiredPerDiff[diff]) return '-';
                return 'Reach';
            }
            
            break;
        }
        
        case 'AirState': {
            parameters.shouldCountBeIncreased = (checkGimmickParameters) => {
                
                let requiredRank = this.ranksRequiredPerDiff[getDiff()];
                let aquiredRank = ChGimmick.ConvertAirStateNumberToString(FLEETS1[0].AS);
                
                if (checkGimmickParameters.airstate) {
                    aquiredRank = ChGimmick.ConvertAirStateNumberToString(checkGimmickParameters.airstate);
                }

                let ranks = ['AS+', 'AS', 'AP'];
        
                for (const rank of ranks) {
                    if (rank == requiredRank) return aquiredRank == rank;
                    
                    if (rank == aquiredRank) return 1;
                }
        
                return 0;
            }
            
            break;
        }
    }

    /**
     * If count should be increased returns 1
     * If you want to increase count multiple time at once you can return the number you want
     */
    this.shouldCountBeIncreased = (checkGimmickParameters) => {
        if (this.gimmickDone()) return 0;

        if (this.routeUnlockRequired) {
            if (!CHDATA.event.maps[MAPNUM].routes) return 0;
            if (!CHDATA.event.maps[MAPNUM].routes.length) return 0;

            if (CHDATA.event.maps[MAPNUM].routes.indexOf(this.routeUnlockRequired) == -1) return 0;
        }

        if (parameters.shouldCountBeIncreased) {
            return parameters.shouldCountBeIncreased(checkGimmickParameters);
        }

        let requiredRank = this.ranksRequiredPerDiff[getDiff()];
        let aquiredRank = CHDATA.temp.rank;

        let ranks = ['S','A','B','C','D'];

        for (const rank of ranks) {
            if (rank == requiredRank) return aquiredRank == rank;
            
            if (rank == aquiredRank) return 1;
        }

        return 0;
    }

    this.getDescription = (diff) => {
        if (parameters.getDescription) {
            return parameters.getDescription(diff);
        }

        if (!this.timesRequiredPerDiff[diff]) return '-';

        return this.ranksRequiredPerDiff[diff] + (this.timesRequiredPerDiff[diff] > 1 ? (' x' + this.timesRequiredPerDiff[diff]) : '');
    }
}

ChGimmick.ConvertAirStateNumberToString = (airState) => {
    switch (airState) {
        case 0: return 'AP';
        case 1: return 'AS';
        case 2: return 'AS+';
    }

    return '???';
}