const ChrRandomizeBonuses = {};

ChrRandomizeBonuses.maxGroupSize = 15;

ChrRandomizeBonuses.groupNumber = 7;

ChrRandomizeBonuses.bonusMax = 0.15; // --- Rolled at start and on end node
ChrRandomizeBonuses.accMax = 0.15; // --- Rolled only on start
ChrRandomizeBonuses.evMax = 0.15;  // --- Rolled only on start
    
ChrRandomizeBonuses.bonusMin = 0.05; // --- Rolled at start and on end node
ChrRandomizeBonuses.accMin = 0; // --- Rolled only on start
ChrRandomizeBonuses.evMin = 0;  // --- Rolled only on start

ChrRandomizeBonuses.baseMids = [];

/**
 * 
 * @param {ChrRandomizeEventHelper.PathObject[]} paths 
 */
ChrRandomizeBonuses.MakeBonusesFromNodes = function (paths) {
    // --- Make groups : 
    const groups = [];

    for (let index = 0; index < ChrRandomizeBonuses.groupNumber; index++) {
        groups.push(ChrRandomizeBonuses.MakeBonusGroup());  
    }

    for (const path of paths) {
        // --- Start bonus : 
        path.nodeData.bonuses = ChrRandomizeBonuses.MakeBonuses(groups);

        let lastNodes = [];

        /**
         * 
         * @param {ChrRandomizeEventHelper.PathObject} curPath 
         */
        const explorePath = function (curPath) {

            if (!curPath.paths || !curPath.paths.length) return lastNodes.push(curPath.nodeData);

            for (const nextPath of curPath.paths) {
                explorePath(nextPath);
            }
        }

        explorePath(path);

        for (const node of lastNodes) {

            if (node.type != 1) continue;

            node.bonuses = ChrRandomizeBonuses.MakeBonuses(groups, true);
        }
    }

    // --- Mid way bonus : TODO ?

    // --- End node bonus : 
}

ChrRandomizeBonuses.MakeBonuses = function(groups, endnode) {
    const bonuses = [];

    for (const group of groups) {
        // --- 30% chance to not apply
        if (endnode && Math.random() > 0.7) continue;

        bonuses.push(
            new ChShipIdsBonuses({ 
                type: 'add', 
                accBonus: ChrRandomizeBonuses.GetRoll(ChrRandomizeBonuses.accMin, ChrRandomizeBonuses.accMax),
                evBonus: ChrRandomizeBonuses.GetRoll(ChrRandomizeBonuses.evMin, ChrRandomizeBonuses.evMax)
            }, group, ChrRandomizeBonuses.GetRoll(ChrRandomizeBonuses.bonusMin, ChrRandomizeBonuses.bonusMax)));

            
        if (endnode) {
            // --- Add debuff bonuses
            bonuses.push(
                new ChShipIdsBonuses({ 
                    type: 'add', 
                    debuffOnly: true,
                }, group, ChrRandomizeBonuses.GetRoll(ChrRandomizeBonuses.bonusMin, ChrRandomizeBonuses.bonusMax)));
        }
    }

    if (endnode) {

        const shipTypes = ChrRandomizeBonuses.GetShipTypes();

        // --- add ship type bonuses ?
        bonuses.push(
            new ChShipTypeBonuses({ 
                type: 'add', 
            }, shipTypes, ChrRandomizeBonuses.GetRoll(ChrRandomizeBonuses.bonusMin, ChrRandomizeBonuses.bonusMax)));

        // --- Add debuff bonuses            
        bonuses.push(
            new ChShipTypeBonuses({ 
                type: 'add', 
                debuffOnly: true,
            }, shipTypes, ChrRandomizeBonuses.GetRoll(ChrRandomizeBonuses.bonusMin, ChrRandomizeBonuses.bonusMax)));
    }


    return bonuses;
}

ChrRandomizeBonuses.GetRoll = function (min, max) {
    return Math.trunc(((Math.random() * (max - min)) + 1 + min) * 100) / 100;
}

ChrRandomizeBonuses.ShipTypes = [
    'DD', 'CL', 'CV', 'CVL', 'BB', 'BBV', 'AV', 'CT', 'DE', 'CA', 'CAV', 'SS', 'SSV', 'CAV', 'CVB', 'FBB'
];

ChrRandomizeBonuses.GetShipTypes = function () {
    const number = (Math.random() * 4) + 1;
    const types = [];

    while (types.length < number) {

        ChrRandomizeEventHelper.RandomizeArray(ChrRandomizeBonuses.ShipTypes);
        const type = ChrRandomizeBonuses.ShipTypes[0];
        if (!types.includes(type)) types.push(type);
    }

    return types;
}

ChrRandomizeBonuses.GetRandomBaseId = function () {
    if (ChrRandomizeBonuses.baseMids.length == 0) {
        for (const shipid in SHIPDATA) {
            if (shipid > 1500) continue;
            if (shipid == 0) continue;

            if (!SHIPDATA[shipid].prev) ChrRandomizeBonuses.baseMids.push(shipid);
        }
    }

    return ChrRandomizeBonuses.baseMids[Math.trunc(Math.random() * ChrRandomizeBonuses.baseMids.length)];
}

ChrRandomizeBonuses.MakeBonusGroup = function () {
    const group = [];

    const groupSize = Math.floor(Math.random() * ChrRandomizeBonuses.maxGroupSize) + 1;

    while (group.length < groupSize) {
        const id = ChrRandomizeBonuses.GetRandomBaseId();
        if (!group.includes(id)) group.push(id);
    }

    return group;
}