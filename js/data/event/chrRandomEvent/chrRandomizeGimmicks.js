const ChrRandomizeGimmicks = {};

/**
 * 
 * @param {'debuff' | 'mapPart'} type 
 * @param {number} mapNum 
 * @param {{
 *  partToUnlock: number
 *  routeUnlockRequired: number
 *  mapPartRequired: number
 * }} additionnalParameters Additionnal parameters to handle special cases
 */
ChrRandomizeGimmicks.RandomizeGimmicks = function (type, mapNum, additionnalParameters, nodes, abPossible) {
    /**
     * @type {ChGimmick[]}
     */
    const gimmickArray = [];

    if (additionnalParameters.mapPartRequired) {
        gimmickArray.push(new ChGimmick({ node: 'MapWide', type: 'PartClear', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, partToClear: additionnalParameters.mapPartRequired }))
    }

    const choosenNodes = ChrRandomizeGimmicks.ChooseNodes(additionnalParameters.mapPartRequired, nodes, abPossible);

    while (choosenNodes.length) {
        const choosenNode = choosenNodes.pop();

        gimmickArray.push(ChrRandomizeGimmicks.MakeGimmick(choosenNode.node, choosenNode.diff, nodes));
    }

    return new ChGimmickList(type, null, mapNum, 
        gimmickArray, {
        partToUnlock: additionnalParameters.partToUnlock | null,
        lastDanceOnly: type == "debuff",
        routeUnlockRequired: additionnalParameters.routeUnlockRequired | null,
    });
}

/**
 * 
 * @param {string} node 
 * @param {number[]} diffs 
 */
ChrRandomizeGimmicks.MakeGimmick = (node, diffs, nodes) => {
    const airNode = node == 'AB' || nodes[node].raid ||  nodes[node].aironly;

    const nbTimeRequired = {};
    let currentNbRequired = 1;

    for (const diff of ['4','1','2','3']) {
        nbTimeRequired[diff] = diffs.includes(diff) ? currentNbRequired : 0;

        if (Math.random() < 0.2) currentNbRequired++;
    }

    if (airNode) {
        return { node: node, type: 'AirState', timesRequiredPerDiff: nbTimeRequired, ranksRequiredPerDiff: { 4:'AS', 1:'AS', 2:'AS', 3:'AS' } }
    }

    if (nodes[node].type == 1) {
        const ranks = {};
        let currentRank = 0;

        for (const diff of [4,1,2,3]) {
            ranks[diff] = currentRank > 0 ? 'S' : 'A';

            if (Math.random() < 0.25) currentRank++;
        }

        return { node: node, type: 'battle', timesRequiredPerDiff: nbTimeRequired, ranksRequiredPerDiff: ranks }
    }
    else {
        return { node: node, type: 'ReachNode', timesRequiredPerDiff: nbTimeRequired }
    }
}

/**
 * Choose nodes for gimmicks
 */
ChrRandomizeGimmicks.ChooseNodes = (partUnlocked, nodes, abPossible) => {
    const possibleNodes = [];

    const maxGimmickPerDiff = {
        4: 3,
        1: 4,
        2: 5,
        3: 6,
    };

    for (const nodeLetter in nodes) {
        if (nodeLetter.includes('Start')) continue;
        if (partUnlocked && nodes[nodeLetter].hidden && nodes[nodeLetter].hidden >= partUnlocked) continue;

        possibleNodes.push(nodeLetter);
    }

    // --- Add AB raid
    if (abPossible) possibleNodes.push('AB');

    let numberOfNodes = (Math.random() * 4) + 2;
    const arrayWithNodes = [];

    ChrRandomizeEventHelper.RandomizeArray(possibleNodes);

    const getDiffArray = () => {
        const array = [];

        for (const diff in maxGimmickPerDiff) {
            if (maxGimmickPerDiff[diff] > 0)  array.push(diff);

            maxGimmickPerDiff[diff]--;
        }

        return array;
    }

    while (numberOfNodes > 0) {
        numberOfNodes--;
        arrayWithNodes.push({
            node: possibleNodes.pop(),
            diff: getDiffArray(),
        });
    }

    return arrayWithNodes;
}