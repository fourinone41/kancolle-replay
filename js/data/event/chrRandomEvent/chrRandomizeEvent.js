const ChrRandomizeEventHelper = {};

/**
 * 
 * @param {ChrRandomizeEventHelper.PathObject} path 
 * @param {ChrRandomizeEventHelper.PathObject} destination 
 * @param {ChRule[]} currentRulesArray 
 */
ChrRandomizeEventHelper.MakeShipTypeRouting = function (path, destination, currentRulesArray) {

    let safetyCount = 0;

    while (safetyCount < 9999) {
        safetyCount++;

        let type = ChrRandomizeEventHelper.GetRandomElementFromArray(ChrRandomizeEventHelper.MakeShipTypeRouting.types);
        let change = ChrRandomizeEventHelper.GetRandomElementFromArray(ChrRandomizeEventHelper.MakeShipTypeRouting.changes);
        let number = Math.floor(Math.random() * 3) + 1;
        let allowed = true;
        
        try {
            for (const fleetType of Object.values(path.nodeData.fleetsTypes).filter(x => x.canReach).map(x => x.ships)) {

                switch (change) {
                    case "++min":
                        if (!fleetType[type].CheckIncreaseMin(number)) allowed = false;
                        break;
    
                        
                    case "--min":
                        if (!fleetType[type].CheckDecreaseMin(number)) allowed = false;
                        break;
    
                        
                    case "++max":
                        if (!fleetType[type].CheckIncreaseMax(number)) allowed = false;
                        break;
    
                        
                    case "--max":
                        if (!fleetType[type].CheckDecreaseMax(number)) allowed = false;
                        break;
                }
            }          
        } catch (error) {
            if (error.type && error.type == 'CANT_CHANGE_COUNT') { continue; }
            else throw error;
        }

        if (allowed) {
            let min = 999;
            let max = 0;

            for (const fleetType of Object.values(path.nodeData.fleetsTypes).filter(x => x.canReach).map(x => x.ships)) {

                switch (change) {
                    case "++min":
                        fleetType[type].IncreaseMin(number);
                        break;

                        
                    case "--min":
                        fleetType[type].DecreaseMin(number);
                        break;

                        
                    case "++max":
                        fleetType[type].IncreaseMax(number);
                        break;

                        
                    case "--max":
                        fleetType[type].DecreaseMax(number);
                        break;
                }
                
                min = fleetType[type].min < min ? fleetType[type].min : min;
                max = fleetType[type].max > max ? fleetType[type].max : max;
            }    

            let finalType = [type];

            switch (type) {
                case "aDD":
                    finalType = ['DD', 'DE'];
                    break;
                    
                case "aSS":
                    finalType = ['SS', 'SSV'];
                    break;
                    
                case "aCA":
                    finalType = ['CAV', 'CA'];
                    break;
            }

            switch (change) {
                case "++min":
                case "--min":
                    currentRulesArray.push(ChShipTypeRoutingRule(finalType, '>=', min, destination.node));
                    break;

                    
                case "++max":
                case "--max":
                    currentRulesArray.push(ChShipTypeRoutingRule(finalType, '<=', max, destination.node));
                    break;
            }
            

            return;   
        }

    }
}

ChrRandomizeEventHelper.MakeShipTypeRouting.types = [
    'DD', 'CL', 'aBB', 'aCV', 'aCA', 'CVL', 'aDD', 'CAV',
    'DD', 'CL', 'aBB', 'aCV', 'aCA', 'CVL', 'aDD', 'CA',
    'DD', 'CL', 'aBB', 'aCV', 'aCA', 'CVL', 'aDD', 'LHA',
    'DD', 'CL', 'aBB', 'aCV', 'aCA', 'CVL', 'aDD', 'AS',
    'DD', 'CL', 'aBB', 'aCV', 'aCA', 'CVL', 'DE', 'aSS'
];
ChrRandomizeEventHelper.MakeShipTypeRouting.changes = [
    "++min", 
    //'--min', 
    //'++max', 
    //'--max'
];

ChrRandomizeEventHelper.RuleReturnValue = {
    cantApply: false,
    pathWontHaveFleet: 0
};

/**
 * 
 * @param {ChrRandomizeEventHelper.PathObject} path 
 * @param {ChrRandomizeEventHelper.PathObject} destination 
 * @param {ChRule[]} currentRulesArray 
 */
ChrRandomizeEventHelper.MakeFleetTypeRouting = function (path, destination, currentRulesArray) {

    let possibleFleetTypes = [];

    for (const type in destination.nodeData.fleetsTypes) {
        if (destination.nodeData.fleetsTypes[type].canReach) possibleFleetTypes.push(type);

        destination.nodeData.fleetsTypes[type].canReach = false;
    }
    
    if (possibleFleetTypes.length <= 1) return {
        cantApply: true,
    };


    const fleetType = ChrRandomizeEventHelper.GetRandomElementFromArray(possibleFleetTypes);

    // --- This fleet can go this path
    destination.nodeData.fleetsTypes[fleetType].canReach = true;

    currentRulesArray.push(ChFleetTypeRule([parseInt(fleetType)], destination.node));

    // --- Other paths wont have this fleet (path cross handled ?)    
    return {
        pathWontHaveFleet: fleetType
    };
}

/**
 * 
 * @param {ChrRandomizeEventHelper.PathObject} path 
 */
ChrRandomizeEventHelper.ApplyPreviousPathRestrictions = function (path) {
    if (path.pathEnd) return;

    for (const destination of path.paths) {
        destination.nodeData.fleetsTypes.ApplyPreviousPathRestrictions(path.nodeData.fleetsTypes);
    }
}

/**
 * 
 * @param {ChrRandomizeEventHelper.PathObject} path 
 */
ChrRandomizeEventHelper.MakeSelectNodeRouting = function (path) {
    path.nodeData.rules = [ChSelectRouteRule([...path.paths.map(x => x.node)])];
}

/**
 * 
 * @param {ChrRandomizeEventHelper.PathObject} path 
 */
ChrRandomizeEventHelper.MakeFixedRouting = function (path) {
    path.nodeData.rules = [ChFixedRoutingRule(path.paths[0].node)];
}


/**
 * @type {{
    *  rule: (path : ChrRandomizeEventHelper.PathObject, destination: ChrRandomizeEventHelper.PathObject, currentRulesArray: ChRule[]) => ChrRandomizeEventHelper.RuleReturnValue
 *     weight: Number
 * }[]}
 */
ChrRandomizeEventHelper.PossibleRules = [
    {
        rule: ChrRandomizeEventHelper.MakeShipTypeRouting,
        weight: 10
    }
];

/**
 * 
 * @param {ChrRandomizeEventHelper.PathObject} previousNode 
 * @param {ChrRandomizeEventHelper.PathObject} path 
 */
ChrRandomizeEventHelper.CreateRandomRules = function (previousNode, path) {

    if (path.nodeData.randomized) return;

    path.nodeData.randomized = true;

    ChrRandomizeEventHelper.ApplyPreviousPathRestrictions(path);
    /*if (previousNode) {
        path.nodeData.fleetsTypes.ApplyPreviousPathRestrictions(previousNode.nodeData.fleetsTypes);
    }*/

    if (!path.paths) {
        return path.nodeData.rules = [];    
    }

    if (path.paths.length == 1) {
        return ChrRandomizeEventHelper.MakeFixedRouting(path);
    }
    
    const possibleRulesWithWeight = [];

    for (const rule of ChrRandomizeEventHelper.PossibleRules) {
        for (let index = 0; index < rule.weight; index++) {
            possibleRulesWithWeight.push(rule.rule);
        }
    }

    getRandomRule = function () {
        const keys = Object.keys(possibleRulesWithWeight);

        return possibleRulesWithWeight[Math.floor(Math.random() * keys.length)];
    }

    // --- 5% chance of select routing
    if (Math.random() < 0.05) return ChrRandomizeEventHelper.MakeSelectNodeRouting(path);

    // --- Before reset rules, check that there's no route unlock rule 
    /**
     * 
     * @param {Nodedata} node 
     * @returns 
     */
    const getUnlockRoute = (node) => {
        for (const ruleToCheck of node.rules) {
            if (ruleToCheck.type == "isRouteUnlocked") return ruleToCheck;

            if (ruleToCheck.type == "multiRules") {
                for (const multiRuleToCheck of ruleToCheck.rules) {
                    if (multiRuleToCheck.type == "isRouteUnlocked") return multiRuleToCheck;
                }
            }

        }
    }
    
    /**
     * @type {ChRule}
     */
    let routeUnlocks = getUnlockRoute(path.nodeData);
    
    path.nodeData.rules = [];

    /**
     * @type {ChrRandomizeEventHelper.PathObject[]}
     */
    let destinations = [...path.paths];
    ChrRandomizeEventHelper.RandomizeArray(destinations);

    let currentDestination = null;

    /**
     * @type {ChRule[]}
     */
    let currentRulesArray = [];

    while (destinations.length) {

        // --- Unlock route first
        if (routeUnlocks) {

            if (routeUnlocks.not) {
                path.nodeData.rules.push(routeUnlocks);
            }
            else {
                // --- Get destination
                currentDestination = destinations.findIndex(_dest => _dest.node == routeUnlocks.conditionCheckedNode);
                currentDestination = destinations.splice(currentDestination, 1);
                currentDestination = currentDestination[0];

                // --- Randomize rule
                currentRulesArray = [];
                let currentNodeRule = ChMultipleRulesRule(currentRulesArray, 'AND', currentDestination.node);
                currentRulesArray.push(routeUnlocks);
                path.nodeData.rules.push(currentNodeRule);
            }

            routeUnlocks = null;
        }

        if (!currentDestination)  {
            currentDestination = destinations.pop();

            // --- Create next node rule
            if (!destinations.length) {
                // --- Last node = default route
                let currentNodeRule = ChDefaultRouteRule(currentDestination.node);
                path.nodeData.rules.push(currentNodeRule);
                return;
            }
            else {
                let logic = Math.random() > 0.5 ? 'AND' : 'OR';

                currentRulesArray = [];
                let currentNodeRule = ChMultipleRulesRule(currentRulesArray, logic, currentDestination.node);
                path.nodeData.rules.push(currentNodeRule);
            }
        }

        // --- Randomize rule
        let chosenRule = getRandomRule();
        chosenRule(path, currentDestination, currentRulesArray);

        if (Math.random() > 0.32) {
            // --- Move to next node after ~ 3 rules
            currentDestination = null;
        }
        
    }
}

ChrRandomizeEventHelper.GetRandomElementFromArray = function (array) {
    return array[Math.floor(Math.random() * array.length)];
}

ChrRandomizeEventHelper.RandomizeArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


/**
 * @param {ChrRandomizeEventHelper.PathObject[]} startPaths 
 * @param {ChMapData} mapData
 */
 ChrRandomizeEventHelper.CreateStartRules = function (mapData, startPaths) {

    const rules = [];

    if (!mapData.fleetTypes) mapData.fleetTypes = [0,1,2,3,7];
    let possibleFleets = [...mapData.fleetTypes];

    for (const path of startPaths) {
        for (const fleetType of possibleFleets) {
            path.nodeData.fleetsTypes[fleetType].canReach = true;
        }
    }

    if (startPaths.length == 1) {

        return [ChFixedRoutingRule(startPaths[0].node)];
    } 

    const possibleRulesWithWeight = [];

    for (const rule of ChrRandomizeEventHelper.PossibleRules) {
        for (let index = 0; index < rule.weight; index++) {
            possibleRulesWithWeight.push(rule.rule);
        }
    }

    const getRandomRule = function () {
        if (possibleFleets.length > 1 && Math.random() > 0.1) {
            return ChrRandomizeEventHelper.MakeFleetTypeRouting;
        }

        const keys = Object.keys(possibleRulesWithWeight);

        return possibleRulesWithWeight[Math.floor(Math.random() * keys.length)];
    }

    const nextPathWontHaveFleet = [];
    const paths = [...startPaths].reverse();

    while (paths.length > 1) {

        const path = paths.pop();

        for (const fleetType of nextPathWontHaveFleet) {
            path.nodeData.fleetsTypes[fleetType].canReach = false;

            possibleFleets = [];

            for (const fleetType in path.nodeData.fleetsTypes) {
                if (path.nodeData.fleetsTypes[fleetType].canReach) {
                    possibleFleets.push(fleetType);
                }
            }
        }

        let rule = getRandomRule();
        const ruleResult = rule(path, path, rules);

        if (ruleResult && ruleResult.pathWontHaveFleet) {
            nextPathWontHaveFleet.push(ruleResult.pathWontHaveFleet);
        }
    }

    // --- Default start
    const pathDefault = paths.pop();
    rules.push(ChDefaultRouteRule(pathDefault.node));

    return rules;

}

ChrRandomizeEventHelper.InitNodeData = function(nodeData) {
    
    nodeData.fleetsTypes = {
        0: {
            canReach: false,
            /** @type {ChrRandomizeEventHelper.ShipCountObject} */
            ships: new ChrRandomizeEventHelper.ShipCountObject(0),
        },
        7: {
            canReach: false,
            ships: new ChrRandomizeEventHelper.ShipCountObject(7),
        },
        1: {
            canReach: false,
            ships: new ChrRandomizeEventHelper.ShipCountObject(1),
        },
        2: {
            canReach: false,
            ships: new ChrRandomizeEventHelper.ShipCountObject(2),
        },
        3: {
            canReach: false,
            ships: new ChrRandomizeEventHelper.ShipCountObject(3),
        },                
    };

    nodeData.fleetsTypes.ApplyPreviousPathRestrictions = (fleetTypeShipCountObject) => {
        for (const fleetType in fleetTypeShipCountObject) {
            const fleetShipCounts = fleetTypeShipCountObject[fleetType];

            if (!fleetShipCounts.canReach) continue;

            nodeData.fleetsTypes[fleetType].canReach = true;

            for (const shipType in fleetShipCounts) {
                const countObject = fleetShipCounts[shipType];
    
                if (shipType.min != undefined) {
                    nodeData.fleetsTypes[fleetType].ships[shipType].min = Math.max(nodeData.fleetsTypes[fleetType].ships[shipType].min, countObject.min);
                    nodeData.fleetsTypes[fleetType].ships[shipType].max = Math.min(nodeData.fleetsTypes[fleetType].ships[shipType].max, countObject.max);
                }
            }
        }
    }
}

ChrRandomizeEventHelper.MakeEndRules = function(nodeData) {
    
    if (nodeData.rules.length == 0) {
        return nodeData.end = true;
    }

    if (nodeData.hidden) {
        nodeData.endRules = [ChIsRouteNotUnlockedRule(nodeData.hidden, true)];
    }
}

ChrRandomizeEventHelper.ShipCountObject = function (fleetType) {
    
    this.DD = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.DE = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.aDD = new ChrRandomizeEventHelper.ShipCountTypeObject();

    this.CL = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.CLT = new ChrRandomizeEventHelper.ShipCountTypeObject();

    this.CA = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.CAV = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.aCA = new ChrRandomizeEventHelper.ShipCountTypeObject();

    this.BB = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.FBB = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.BBV = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.aBB = new ChrRandomizeEventHelper.ShipCountTypeObject();

    this.AV = new ChrRandomizeEventHelper.ShipCountTypeObject();

    this.SS = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.SSV = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.aSS = new ChrRandomizeEventHelper.ShipCountTypeObject();

    this.CVL = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.CV = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.CVB = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.aCV = new ChrRandomizeEventHelper.ShipCountTypeObject();

    this.LHA = new ChrRandomizeEventHelper.ShipCountTypeObject();

    this.AS = new ChrRandomizeEventHelper.ShipCountTypeObject();

    this.AR = new ChrRandomizeEventHelper.ShipCountTypeObject();

    this.AO = new ChrRandomizeEventHelper.ShipCountTypeObject();

    this.CT = new ChrRandomizeEventHelper.ShipCountTypeObject();

    this.total = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.total.min = 1;
    this.ids = [];
    this.speed = new ChrRandomizeEventHelper.ShipCountTypeObject();
    this.speed.max = 20;

    switch (fleetType) {
        case 0:
            this.DD.max = 6;
            this.DE.max = 6;
            this.aDD.max = 6;

            this.CL.max = 6;
            this.CLT.max = 6;

            this.CA.max = 6;
            this.CAV.max = 6;
            this.aCA.max = 6;

            this.BB.max = 6;
            this.FBB.max = 6;
            this.BBV.max = 6;
            this.aBB.max = 6;

            this.AV.max = 6;

            this.SS.max = 6;
            this.SSV.max = 6;
            this.aSS.max = 6;

            this.CVL.max = 6;
            this.CV.max = 6;
            this.CVB.max = 6;
            this.aCV.max = 6;

            this.LHA.max = 6;

            this.AS.max = 6;

            this.AR.max = 6;

            this.AO.max = 6;

            this.CT.max = 6;

            this.total.max = 6;
            break;

        case 7:
            this.DD.max = 7;
            this.DE.max = 7;
            this.aDD.max = 7;

            this.CL.max = 7;
            this.CLT.max = 7;

            this.CA.max = 7;
            this.CAV.max = 7;
            this.aCA.max = 7;

            this.BB.max = 7;
            this.FBB.max = 7;
            this.BBV.max = 7;
            this.aBB.max = 7;

            this.AV.max = 7;

            this.SS.max = 7;
            this.SSV.max = 7;
            this.aSS.max = 7;

            this.CVL.max = 7;
            this.CV.max = 7;
            this.CVB.max = 7;
            this.aCV.max = 7;

            this.LHA.max = 7;

            this.AS.max = 7;

            this.AR.max = 7;

            this.AO.max = 7;

            this.CT.max = 7;

            this.total.max = 7;
            break;

        // --- CTF
        case 1:
            this.DD.max = 9;
            this.DD.maxMain = 4;
            this.DD.maxEscort = 5;
            this.DD.min = 2;
            this.DD.minMain = 0;
            this.DD.minEscort = 2;

            this.DE.max = 7;
            this.DE.maxMain = 4;
            this.DE.maxEscort = 3;

            this.aDD.max = 9;
            this.DD.maxMain = 4;
            this.DD.maxEscort = 5;
            this.aDD.min = 2;
            this.DD.minMain = 0;
            this.DD.minEscort = 2;

            this.CL.max = 5;
            this.CL.maxMain = 4;
            this.CL.maxEscort = 1;
            this.CL.min = 1;
            this.CL.minMain = 0;
            this.CL.minEscort = 1;
            
            this.CLT.max = 7;
            this.CLT.maxMain = 4;
            this.CLT.maxEscort = 3;

            this.CA.max = 6;
            this.CA.maxMain = 4;
            this.CA.maxEscort = 2;

            this.CAV.max = 6;
            this.CAV.maxMain = 4;
            this.CAV.maxEscort = 2;

            this.aCA.max = 6;
            this.aCA.maxMain = 4;
            this.aCA.maxEscort = 2;

            this.BB.max = 4;
            this.BB.maxMain = 2;
            this.BB.maxEscort = 2;

            this.FBB.max = 4;
            this.FBB.maxMain = 2;
            this.FBB.maxEscort = 2;

            this.BBV.max = 4;
            this.BBV.maxMain = 2;
            this.BBV.maxEscort = 2;

            this.aBB.max = 4;
            this.aBB.maxMain = 2;
            this.aBB.maxEscort = 2;

            this.AV.max = 7;
            this.AV.maxMain = 4;
            this.AV.maxEscort = 3;

            this.SS.max = 7;
            this.SS.maxMain = 4;
            this.SS.maxEscort = 3;

            this.SSV.max = 7;
            this.SSV.maxMain = 4;
            this.SSV.maxEscort = 3;

            this.aSS.max = 7;
            this.aSS.maxMain = 4;
            this.aSS.maxEscort = 3;

            this.CVL.max = 5;
            this.CVL.maxMain = 4;
            this.CVL.maxEscort = 1;

            this.CV.max = 4;
            this.CV.maxMain = 4;
            this.CV.maxEscort = 0;

            this.CVB.max = 4;
            this.CVB.maxMain = 4;
            this.CVB.maxEscort = 0;

            this.aCV.min = 2;
            this.aCV.minMain = 2;
            this.aCV.minEscort = 0;
            this.aCV.max = 5;
            this.aCV.maxMain = 4;
            this.aCV.maxEscort = 1;

            this.LHA.max = 7;
            this.LHA.maxMain = 4;
            this.LHA.maxEscort = 3;

            this.AS.max = 7;
            this.AS.maxMain = 4;
            this.AS.maxEscort = 3;

            this.AR.max = 7;
            this.AR.maxMain = 4;
            this.AR.maxEscort = 3;

            this.AO.max = 7;
            this.AO.maxMain = 4;
            this.AO.maxEscort = 3;

            this.CT.max = 7;
            this.CT.maxMain = 4;
            this.CT.maxEscort = 3;

            this.total.max = 12;
            break;

        // --- STF
        case 2:
            this.DD.max = 9;
            this.DD.maxMain = 4;
            this.DD.maxEscort = 5;
            this.DD.min = 2;
            this.DD.minMain = 0;
            this.DD.minEscort = 2;

            this.DE.max = 7;
            this.DE.maxMain = 4;
            this.DE.maxEscort = 3;

            this.aDD.max = 9;
            this.aDD.maxMain = 4;
            this.aDD.maxEscort = 5;
            this.aDD.min = 2;
            this.aDD.minMain = 0;
            this.aDD.minEscort = 2;

            this.CL.max = 5;
            this.CL.maxMain = 4;
            this.CL.maxEscort = 1;
            this.CL.min = 1;
            this.CL.minMain = 0;
            this.CL.minEscort = 1;
            
            this.CLT.max = 7;
            this.CLT.maxMain = 4;
            this.CLT.maxEscort = 3;

            this.CA.max = 6;
            this.CA.maxMain = 4;
            this.CA.maxEscort = 2;

            this.CAV.max = 6;
            this.CAV.maxMain = 4;
            this.CAV.maxEscort = 2;

            this.aCA.max = 6;
            this.aCA.maxMain = 4;
            this.aCA.maxEscort = 2;

            this.BB.max = 6;
            this.BB.maxMain = 4;
            this.BB.maxEscort = 2;

            this.FBB.max = 6;
            this.FBB.maxMain = 4;
            this.FBB.maxEscort = 2;

            this.BBV.max = 6;
            this.BBV.maxMain = 4;
            this.BBV.maxEscort = 2;

            this.aBB.max = 6;
            this.aBB.maxMain = 4;
            this.aBB.maxEscort = 2;

            this.AV.max = 5;
            this.AV.maxMain = 4;
            this.AV.maxEscort = 1;

            this.SS.max = 7;
            this.SS.maxMain = 4;
            this.SS.maxEscort = 3;

            this.SSV.max = 7;
            this.SSV.maxMain = 4;
            this.SSV.maxEscort = 3;

            this.aSS.max = 7;
            this.aSS.maxMain = 4;
            this.aSS.maxEscort = 3;

            this.CVL.max = 3;
            this.CVL.maxMain = 2;
            this.CVL.maxEscort = 1;

            this.CV.max = 1;
            this.CV.maxMain = 1;
            this.CV.maxEscort = 0;

            this.CVB.max = 1;
            this.CVB.maxMain = 1;
            this.CVB.maxEscort = 0;

            this.aCV.max = 3;
            this.aCV.maxMain = 2;
            this.aCV.maxEscort = 1;

            this.LHA.max = 7;
            this.LHA.maxMain = 4;
            this.LHA.maxEscort = 3;

            this.AS.max = 7;
            this.AS.maxMain = 4;
            this.AS.maxEscort = 3;

            this.AR.max = 7;
            this.AR.maxMain = 4;
            this.AR.maxEscort = 3;

            this.AO.max = 7;
            this.AO.maxMain = 4;
            this.AO.maxEscort = 3;

            this.CT.max = 7;
            this.CT.maxMain = 4;
            this.CT.maxEscort = 3;

            this.total.max = 12;
            break;

        // --- TCF
        case 3: 
            this.DD.max = 11;
            this.DD.maxMain = 6;
            this.DD.maxEscort = 5;

            this.DE.max = 11;
            this.DE.maxMain = 6;
            this.DE.maxEscort = 5;

            this.aDD.max = 11;
            this.aDD.maxMain = 6;
            this.aDD.maxEscort = 5;
            this.aDD.min = 7;
            this.aDD.minMain = 4;
            this.aDD.minEscort = 3;

            this.CL.max = 4;
            this.CL.maxMain = 2;
            this.CL.maxEscort = 2;
            this.CL.min = 1;
            this.CL.minMain = 0;
            this.CL.minEscort = 1;
            
            this.CLT.max = 0;
            this.CLT.maxMain = 0;
            this.CLT.maxEscort = 0;

            this.CA.max = 4;
            this.CA.maxMain = 2;
            this.CA.maxEscort = 2;

            this.CAV.max = 4;
            this.CAV.maxMain = 2;
            this.CAV.maxEscort = 2;

            this.aCA.max = 4;
            this.aCA.maxMain = 2;
            this.aCA.maxEscort = 2;

            this.BB.max = 0;
            this.BB.maxMain = 0;
            this.BB.maxEscort = 0;

            this.FBB.max = 0;
            this.FBB.maxMain = 0;
            this.FBB.maxEscort = 0;

            this.BBV.max = 2;
            this.BBV.maxMain = 2;
            this.BBV.maxEscort = 0;

            this.aBB.max = 2;
            this.aBB.maxMain = 2;
            this.aBB.maxEscort = 0;

            this.AV.max = 2;
            this.AV.maxMain = 2;
            this.AV.maxEscort = 0;

            this.SS.max = 0;
            this.SS.maxMain = 0;
            this.SS.maxEscort = 0;

            this.SSV.max = 0;
            this.SSV.maxMain = 0;
            this.SSV.maxEscort = 0;

            this.aSS.max = 0;
            this.aSS.maxMain = 0;
            this.aSS.maxEscort = 0;

            this.CVL.max = 1;
            this.CVL.maxMain = 1;
            this.CVL.maxEscort = 0;

            this.CV.max = 0;
            this.CV.maxMain = 0;
            this.CV.maxEscort = 0;

            this.CVB.max = 0;
            this.CVB.maxMain = 0;
            this.CVB.maxEscort = 0;

            this.aCV.max = 1;
            this.aCV.maxMain = 1;
            this.aCV.maxEscort = 0;

            this.LHA.max = 2;
            this.LHA.maxMain = 2;
            this.LHA.maxEscort = 0;

            this.AS.max = 2;
            this.AS.maxMain = 2;
            this.AS.maxEscort = 0;

            this.AR.max = 1;
            this.AR.maxMain = 1;
            this.AR.maxEscort = 0;

            this.AO.max = 2;
            this.AO.maxMain = 2;
            this.AO.maxEscort = 0;

            // --- Todo : combine CL & CT
            this.CT.max = 4;
            this.CT.maxMain = 2;
            this.CT.maxEscort = 2;

            this.total.max = 12;
            break;
    }

    this.DD.parent = this.aDD;
    this.DE.parent = this.aDD;

    this.CA.parent = this.aCA;
    this.CAV.parent = this.aCA;

    this.BB.parent = this.aBB;
    this.FBB.parent = this.aBB;
    this.BBV.parent = this.aBB;

    this.SS.parent = this.aSS;
    this.SSV.parent = this.aSS;
    
    this.CVL.parent = this.aCV;
    this.CV.parent = this.aCV;
    this.CVB.parent = this.CV;

    return this;
};

ChrRandomizeEventHelper.ShipCountTypeObject = function () {
    this.min = 0;
    this.max = 999;

    this.minMain = 0;
    this.maxMain = 999;

    this.minEscort = 0;
    this.maxEscort = 999;

    this.parent = null;

    this.CheckIncreaseMin = function (number) {  

        if (this.min + number > this.max) return false;

        if (this.min + number > this.maxEscort + this.maxEscort) return false;

        return this.parent ? this.parent.CheckIncreaseMin(number) : true;
    };

    this.IncreaseMin = function (number) {  
        if (!this.CheckIncreaseMin(number)) throw { type: "CANT_CHANGE_COUNT", };

        this.min += number;
        if (this.parent) this.parent.IncreaseMin(number);
    };

    this.CheckDecreaseMin = function (number) {  

        if (this.min - number < 0) return false;

        if (this.min - number < this.minEscort + this.minMain) return false;

        return this.parent ? this.parent.CheckDecreaseMin(number) : true;
    };

    this.DecreaseMin = function (number) {  
        if (!this.CheckDecreaseMin(number)) throw { type: "CANT_CHANGE_COUNT", };

        this.min -= number;
        if (this.parent) this.parent.DecreaseMin(number);
    };

    this.CheckIncreaseMax = function (number) {  

        if (this.max + number > this.maxEscort + this.maxMain) return false;

        return this.parent ? this.parent.CheckIncreaseMax(number) : true;
    };
    
    this.IncreaseMax = function (number) {  
        if (!this.CheckIncreaseMax(number)) throw { type: "CANT_CHANGE_COUNT", };

        this.max += number;
        if (this.parent) this.parent.IncreaseMax(number);
    };

    this.CheckDecreaseMax = function (number) {  

        if (this.max - number < this.min) return false;

        if (this.max - number < this.minEscort + this.minMain) return false;

        return this.parent ? this.parent.CheckDecreaseMax(number) : true;
    };

    this.DecreaseMax = function (number) {  
        if (!this.CheckDecreaseMax(number)) throw { type: "CANT_CHANGE_COUNT", };

        this.max -= number;
        if (this.parent) this.parent.DecreaseMax(number);
    };
}


ChrRandomizeEventHelper.PathObject = {
    node: "",
    nodeData: {
        /**
         * @type {ChRule[]}
         */
        rules: [],
        fleetsTypes : {
            0: {
                canReach: false,
                /** @type {ChrRandomizeEventHelper.ShipCountObject} */
                ships: new ChrRandomizeEventHelper.ShipCountObject(0),
            },
            7: {
                canReach: false,
                /** @type {ChrRandomizeEventHelper.ShipCountObject} */
                ships: new ChrRandomizeEventHelper.ShipCountObject(7),
            },
            1: {
                canReach: false,
                /** @type {ChrRandomizeEventHelper.ShipCountObject} */
                ships: new ChrRandomizeEventHelper.ShipCountObject(1),
            },
            2: {
                canReach: false,
                /** @type {ChrRandomizeEventHelper.ShipCountObject} */
                ships: new ChrRandomizeEventHelper.ShipCountObject(2),
            },
            3: {
                canReach: false,
                /** @type {ChrRandomizeEventHelper.ShipCountObject} */
                ships: new ChrRandomizeEventHelper.ShipCountObject(3),
            },                
        }
    },
    pathEnd: false,
    paths: [],
}