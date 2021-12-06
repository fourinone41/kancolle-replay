function ChRule () {

    /**
     * @type {"=" | ">=" | "<=" | "<" | ">"}
     */
    this.operator = "=";

    /**
     * @type {"AND" | "OR"}
     */
    this.logicOperator = "OR";

    /**
     * @type {"shipType" | "random"| "fixed" | "shipCount" | "multiRules" | "random" | "speed" | "custom" | "ifthenelse" | "allShipsMustBe" | 'isLastDance' | "equipType" | "los" | "default" | "shipIds" | 'fleetType' | 'routeSelect'}
     */
    this.type = "fixed";

    /**
     * @type {string[]}
     */
    this.shipTypes = [];

    /**
     * @type {number[]}
     */
    this.shipsIds = [];

    this.shipsIdsListName = "";

    /**
     * True if the rule should display the historical group in the event info page
     */
    this.historicalGroups = false;

    this.equipData = {
        equipIds: [],
        equipTypes: [],
        LOS: 0,
    };

    /**
     * @type {ChRule[]} 
     */
    this.rules = [];

    this.count = 0;

    this.shipWithEquipCount = 0;

    /**
     * if fixed routing, this is the node where you will route
     */
    this.fixedNode = "";

    /**
     * if condition validated, you'll go to this node
     */
    this.conditionCheckedNode = "";

    /**
     * if condition failed, you'll go to this node
     * if empty, routing will try to apply next rule
     */
    this.conditionFailedNode = "";

    /**
     * For random branching, array of chances per nodes
     */
    this.randomNodes = {};

    /**
     * Nodes that can be selected
     */
    this.routeSelect = [];

    this.LOS = {};
    this.LOSCoef = null;

    /**
     * Speed of fleet
     */
    this.speed = 10;

    this.fleetType = 0;

    this.escortOnly = false;
    this.mainFleetOnly = false;

    /**
     * @type {{if: ChRule,then: ChRule,else: ChRule}} 
     */
    this.ifthenelse = {
        if: null,
        then: null,
        else: null,
    };

    /**
     * Returns the node where you'll route
     * @param {*} ships 
     * @returns 
     */
    this.getRouting = function (ships) {
        switch (this.type) {
            case "fixed":
                return this.fixedNode;
                
            case "default":
                return this.conditionCheckedNode;
        
            case "shipType": {
                let count = 0;

                let shipsToCheck = ships.c;

                if (this.escortOnly) shipsToCheck = ships.e;
                if (this.mainFleetOnly) shipsToCheck = ships;

                for (const shipType of this.shipTypes) {
                    count += shipsToCheck[shipType];
                }

                switch (this.operator) {
                    case "<":
                        if (count < this.count) return this.conditionCheckedNode;
                        break;
                    case "<=":
                        if (count <= this.count) return this.conditionCheckedNode;
                        break;
                    case "=":
                        if (count == this.count) return this.conditionCheckedNode;
                        break;
                    case ">":
                        if (count > this.count) return this.conditionCheckedNode;
                        break;
                    case ">=":
                        if (count >= this.count) return this.conditionCheckedNode;
                        break;
                }
                
                return this.conditionFailedNode;
            }

            case 'shipIds': {
                let count = 0;

                let shipsToCheck = ships.c.ids;

                if (this.escortOnly) shipsToCheck = ships.e.ids;
                if (this.mainFleetOnly) shipsToCheck = ships.ids;

                for (const shipId of this.shipsIds) {
                    if (isShipInList(shipsToCheck, shipId)) count++;
                }

                return (count >= this.count) ? this.conditionCheckedNode : this.conditionFailedNode;
            }

            case 'shipCount' : {
                switch (this.operator) {
                    case "<":
                        if (ships.total < this.count) return this.conditionCheckedNode;
                        break;
                    case "<=":
                        if (ships.total <= this.count) return this.conditionCheckedNode;
                        break;
                    case "=":
                        if (ships.total == this.count) return this.conditionCheckedNode;
                        break;
                    case ">":
                        if (ships.total > this.count) return this.conditionCheckedNode;
                        break;
                    case ">=":
                        if (ships.total >= this.count) return this.conditionCheckedNode;
                        break;
                }

                return this.conditionFailedNode;
            }

            case 'multiRules' : {
                for (const rule of this.rules) {
                    let routingIsOk = !!rule.getRouting(ships);

                    if (!routingIsOk && this.logicOperator == "AND") return this.conditionFailedNode;
                    if (routingIsOk && this.logicOperator == "OR") return this.conditionCheckedNode;
                }

                if (this.logicOperator == "AND") return this.conditionCheckedNode;
                if (this.logicOperator == "OR") return this.conditionFailedNode;
            }

            case 'random' : {
                let nextletter = '';

                var r = Math.random(), sum = 0;

                for (var letter in this.randomNodes) {
                    sum += this.randomNodes[letter];
                    if (r < sum) { nextletter = letter; break; }
                }

                return nextletter;
            }

            case 'speed': {
                let speed = ships.c.speed;

                if (this.escortOnly) speed = ships.e.speed;
                if (this.mainFleetOnly) speed = ships.speed;

                switch (this.operator) {
                    case "<":
                        if (speed < this.speed) return this.conditionCheckedNode;
                        break;
                    case "<=":
                        if (speed <= this.speed) return this.conditionCheckedNode;
                        break;
                    case "=":
                        if (speed == this.speed) return this.conditionCheckedNode;
                        break;
                    case ">":
                        if (speed > this.speed) return this.conditionCheckedNode;
                        break;
                    case ">=":
                        if (speed >= this.speed) return this.conditionCheckedNode;
                        break;
                }

                return this.conditionFailedNode;
            }

            case "ifthenelse": {
                if (this.ifthenelse.if.getRouting(ships)) {
                    return this.ifthenelse.then.getRouting(ships);
                }
                else {
                    if (!this.ifthenelse.else) return '';
                    return this.ifthenelse.else.getRouting(ships);
                }
            }

            case "allShipsMustBe": {
                let count = 0;

                for (const shipType of this.shipTypes) {
                    count += ships[shipType];
                }

                return count == ships.total ? this.conditionCheckedNode : this.conditionFailedNode;
            }

            case "isLastDance": {
                return chGetLastDance() ? this.conditionCheckedNode : this.conditionFailedNode;
            }
            
            case 'equipType': {
                let numEquips = 0;
                let numShipsWithEquip = 0;

                let ships = (FLEETS1[1])? FLEETS1[0].ships.concat(FLEETS1[1].ships) : FLEETS1[0].ships;

                let equipTypes = this.equipData.equipTypes && this.equipData.equipTypes.length ? this.equipData.equipTypes : null;
                let equipIds = this.equipData.equipIds && this.equipData.equipIds.length ? this.equipData.equipIds : null;

                for (let ship of ships) {

                    let found = false;

                    for (let eq of ship.equips) {
                        if (equipTypes && !equipTypes.includes(eq.type)) continue;
                        if (equipIds && !equipIds.includes(eq.mid)) continue;
                        if (this.equipData.LOS && (!eq.LOS || eq.LOS < this.equipData.LOS)) continue;
                        {
                            numEquips++;
                            found = true;
                        }
                    }
                    if (found) numShipsWithEquip++;
                }

                if (numEquips >= this.count && numShipsWithEquip >= this.shipWithEquipCount) return this.conditionCheckedNode;
                return this.conditionFailedNode;
            }

            case 'los': {
                return checkELoS33(getELoS33(1, this.LOSCoef || 1, CHDATA.fleets.combined), this.LOS);
            }

            case 'fleetType': {
                if (this.fleetType == 0) return !CHDATA.fleets.combined;
                
                return CHDATA.fleets.combined == this.fleetType ? this.conditionCheckedNode : this.conditionFailedNode;
            }

            default:
                alert("routing error 2");
                return;
        }
    }

    /**
     * Translate rules into something understandable
     */
    this.getDescription = function () {
        switch (this.type) {
            case "fixed":
                return "Fixed routing";

            case "default":
                return "Does not meet the other requirements";

            case "shipType": {
                let shipTypesTranslated = [];

                for (const shipType of this.shipTypes) {
                    if (shipType == "aBB") shipTypesTranslated.push("(F)BB(V)");
                    else if (shipType == "aCV") shipTypesTranslated.push("CV(L/B)");
                    else shipTypesTranslated.push(shipType);
                }

                let shipList = shipTypesTranslated.join(" + ");

                if (this.escortOnly) return `Number of ${shipList} in escort fleet ${this.operator} ${this.count}`;
                if (this.mainFleetOnly) return `Number of ${shipList} in main fleet ${this.operator} ${this.count}`;

                return `Number of ${shipList} ${this.operator} ${this.count}`;
            }

            case "shipIds": {
                let names;

                if (!this.historicalGroups) {
                    names = '';

                    for (let index = 0; index < this.shipsIds.length; index++) {
                        let shipId = this.shipsIds[index];

                        if (index > 0) names += ', ';
                        if (this.shipsIds.length > 1 && index ==  this.shipsIds.length - 1) names += ' and ';

                        names += SHIPDATA[shipId].name;
                    }
                }
                else {
                    names = this.shipsIdsListName;
                }

                if (this.shipsIds.length == 1) {
                    if (this.escortOnly) return `${names} in the escort fleet`;
                    if (this.mainFleetOnly) return `${names} in the main fleet`;

                    return `${names} in the fleet`
                }

                if (this.escortOnly) return `${this.count} ship from ${names} in the escort fleet`;
                if (this.mainFleetOnly) return `${this.count} ship from ${names} in the main fleet`;

                return `${this.count} ship from ${names} in the fleet`;
            }

            case 'shipCount' : {
                return `Number of ship in fleet ${this.operator} ${this.count}`;
            }

            case 'multiRules' : {
                let descriptions = [];
                let randomDesc = "";

                for (const rule of this.rules) {
                    if (rule.type == 'random') {
                        let rd = [];

                        for (var letter in rule.randomNodes) {
                            rd.push(`${letter} (${rule.randomNodes[letter] * 100}%)`);
                        }

                        randomDesc = `<br>else random ${rd.join(", ")}`;
                    }
                    else descriptions.push(`<div style="margin-left:20px;">${rule.getDescription()}</div>`);
                }

                
                let AnyOrAll = "";
                if (this.logicOperator == "AND") AnyOrAll = "all";
                if (this.logicOperator == "OR") AnyOrAll = "any";
                
                return `Meet ${AnyOrAll} of the following requirements : <br>${descriptions.join(``)}${randomDesc}`;
            }

            case 'random' : {
                let description = [];

                for (const node in this.randomNodes) {
                    if (node) description.push(`${node} ${this.randomNodes[node] * 100}%`);
                }

                return "Random " + description.join(", ");
            }

            case 'speed' : {
                let speed = {
                    5: {
                        "<": "Slow",
                        "<=": "Slow",
                        "=": "Slow",
                        ">": "Fast",
                        ">=": "Slow or faster",
                    },
                    10: {
                        "<": "Slow",
                        "<=": "Fast or slower",
                        "=": "Fast",
                        ">": "Fast+",
                        ">=": "Fast or faster",
                    },
                    15: {
                        "<": "Fast or slower",
                        "<=": "Fast+ or slower",
                        "=": "Fast+",
                        ">": "Fastest",
                        ">=": "Fast+ or faster",
                    },
                    15: {
                        "<": "Fast+ or slower",
                        "<=": "Fastest or slower",
                        "=": "Fastest",
                        ">": "Fastest",
                        ">=": "Fastest",
                    },
                };

                if (this.escortOnly) return `${speed[this.speed][this.operator]} escort fleet`;
                if (this.mainFleetOnly) return `${speed[this.speed][this.operator]} main fleet`;

                return `${speed[this.speed][this.operator]} fleet`;
            }

            case "ifthenelse": {
                let desc = `If ${this.ifthenelse.if.getDescription()}<br>then ${this.ifthenelse.then.getDescription()}`;
                
                if (this.ifthenelse.else) desc += `<br>else ${this.ifthenelse.else.getDescription()}`;

                return desc;
            }

            case "allShipsMustBe": {
                return `All ships must be ${this.shipTypes.join(" OR ")}`;
            }

            case "isLastDance": {
                return 'Map is on last dance';
            }

            case 'equipType': {
                let description = `Have ${this.count} ${this.equipData.equipTypes.map(x => EQTDATA[x].dname ? EQTDATA[x].dname : EQTDATA[x].name).join(" + ")} equipped`;

                if (this.shipWithEquipCount) {
                    description += ` on ${this.shipWithEquipCount} different ships`;
                }

                return description;
            }

            case 'los': {
                let description = {};
                
                var LOSs = Object.keys(this.LOS).sort(function(a,b) { return (parseInt(a) > parseInt(b))? -1:1; } );
                
                for (var i=0; i<LOSs.length; i++) {
                    let node = this.LOS[LOSs[i]];

                    if (!node) continue;

                    let nodeAfter = LOSs[i + 1] ? this.LOS[LOSs[i + 1]] : null;

                    description[node] =  `LOS Cn${this.LOSCoef} >= ${LOSs[i]}`;

                    if (nodeAfter) {
                        description[node] +=  `<br>Random if LOS Cn${this.LOSCoef} bewteen ${LOSs[i + 1]} and ${LOSs[i]}`;
                    }
                    else {
                        description[node] =  `LOS Cn${this.LOSCoef} < ${LOSs[i]}`;
                    }
                }

                return description;
            }

            case 'fleetType': {
                switch (this.fleetType) {
                    case 0:
                        return 'Single fleet';
                    case 1:
                        return 'Carrier Task Force';
                    case 2:
                        return 'Surface Task Force';
                    case 3:
                        return 'Transport Task Force';
                    case 7:
                        return 'Strike force';
                }
            }

            case 'routeSelect': {
                return `Choose between ${this.routeSelect.join(" and ")}`;
            }

            default:
                return "???";
        }
    }

    /**
     * Return the description of a random routing rule as an object
     */
    this.GetRandomDescription = function() {
        let description = {};

        for (const node in this.randomNodes) {
            description[node] = `Random (${this.randomNodes[node] * 100}%)`;
        }

        return description;
    }

    /**
     * Returns if the compass should be spinned or not
     * @returns true if compass need to be spined
     */
    this.getSpinCompass = function () {
        switch (this.type) {
            case "fixed":
                return false;
        
            default:
                return true;
        }
    }

    /**
     * Returns if LOS plane should be shown or not
     * @returns true if LOS plane need to be shown
     */
    this.getShowLosPlane = function () {
        switch (this.type) {
            case "los":
                return true;
        
            default:
                return false;
        }
    } 
}

/**
 * Create a fixed routing rule
 * @param {string} fixedNode 
 * @returns 
 */
function ChFixedRoutingRule(fixedNode) {
    let rule = new ChRule();

    rule.fixedNode = fixedNode;
    rule.type = "fixed";

    return rule;
}

/**
 * Rule that check if ships are in fleet
 * @param {number[]} shipsIds 
 * @param {"=", ">=", "<=", "<", ">"} operator
 * @returns 
 */
 function ChShipHistoricalRoutingRule(groupName, shipsIds, count, conditionCheckedNode, conditionFailedNode) {
    let rule = ChShipIdsRoutingRule(shipsIds, count, conditionCheckedNode, conditionFailedNode);

    rule.shipsIdsListName = groupName;
    rule.historicalGroups = true;

    return rule;
}

function ChShipIdsRoutingRule(shipsIds, count, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "shipIds";

    rule.shipsIds = shipsIds;

    rule.count = count;

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * Create a ship type routing rule
 * @param {string[]} shipTypes 
 * @param {"=", ">=", "<=", "<", ">"} operator
 * @returns 
 */
 function ChShipTypeRoutingRule(shipTypes, operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "shipType";
    rule.shipTypes = shipTypes;
    rule.operator = operator;
    rule.count = count;
    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * Create a ship count routing rule
 * @param {"=", ">=", "<=", "<", ">"} operator
 * @returns 
 */
 function ChShipCountRoutingRule(operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "shipCount";
    rule.operator = operator;
    rule.count = count;
    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * 
 * @param {ChRule[]} ruleArray 
 * @param {"AND" | "OR"} logicOperator
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 */
function ChMultipleRulesRule(ruleArray, logicOperator, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "multiRules";

    rule.logicOperator = logicOperator;
    rule.rules = ruleArray;

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * 
 * @param {any} chances 
 */
 function ChRandomRule(chances) {
    let rule = new ChRule();

    rule.type = "random";

    rule.randomNodes = chances;

    return rule;
}

/**
 * 
 * @param {*} operator 
 * @param {*} speed 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 */
function ChSpeedRule(operator, speed, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "speed";

    rule.speed = speed;
    rule.operator = operator;
    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * if rule A is valid then apply rule B else apply rule C
 * @param {ChRule} ruleIf 
 * @param {ChRule} ruleThen 
 * @param {ChRule} ruleElse 
 * @returns 
 */
function ChIfThenElseRule(ruleIf, ruleThen, ruleElse) {
    let rule = new ChRule();

    rule.type = "ifthenelse";

    ruleIf.conditionCheckedNode = true;
    ruleIf.conditionFailedNode = false;

    rule.ifthenelse = {
        if: ruleIf,
        then: ruleThen,
        else: ruleElse,
    };

    return rule;
}

/**
 * All ships of the fleet must be of the types in shipTypes
 * @param {*} shipTypes 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 * @returns 
 */
function ChAllShipMusteBeOfTypeRule(shipTypes, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "allShipsMustBe";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.shipTypes = shipTypes;

    return rule;
}

/**
 * Condition checked if its last dance
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 * @returns 
 */
 function ChIsLastDanceRule(conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "isLastDance";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

/**
 * Rule valid if [shipWithEquipCount] ships have the required equipments and there's a total of [count] equipment in the fleet
 * @param {{equipIds: [],equipTypes: [],LOS: number}} equipData 
 * @param {*} count 
 * @param {*} shipWithEquipCount 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 */
function ChEquipTypeRule(equipData, count, shipWithEquipCount, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "equipType";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.count = count;
    rule.shipWithEquipCount = shipWithEquipCount;

    rule.equipData = equipData;

    return rule;
}

/**
 * 
 * @param {*} losArray 
 * @param {*} coef 
 * @returns 
 */
 function ChLOSRule(losArray, coef) {
    let rule = new ChRule();

    rule.type = "los";

    rule.conditionCheckedNode = losArray[Math.max(...Object.keys(losArray))];

    rule.LOS = losArray;
    rule.LOSCoef = coef ? coef : 1;

    return rule;
}

/**
 * Returns the rule and making it so that LOS plane wont show up if the rule is validated
 * @param {ChRule} rule 
 * @returns {ChRule}
 */
function ChDontShowLOSPlane(rule) {
    rule.getShowLosPlane = () => { return false; }

    return rule;
}

/**
 * Returns the rule and making it so that LOS plane show up if the rule is validated
 * @param {ChRule} rule 
 * @returns {ChRule}
 */
 function ChShowLOSPlane(rule) {
    rule.getShowLosPlane = () => { return true; }

    return rule;
}

function ChDefaultRouteRule(node) {
    let rule = new ChRule();

    rule.type = "default";

    rule.conditionCheckedNode = node;

    return rule;
}

/**
 * Returns the rule and making it so that compass show up if the rule is validated
 * @param {ChRule} rule 
 * @returns {ChRule}
 */
function ChShowCompass(rule) {
    rule.getSpinCompass = () => { return true; }

    return rule;
}

/**
 * Returns the rule and making it so that compass doesn't show up if the rule is validated
 * @param {ChRule} rule 
 * @returns {ChRule}
 */
 function ChDontShowCompass(rule) {
    rule.getSpinCompass = () => { return false; }

    return rule;
}

function ChFleetTypeRule(fleetType, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "fleetType";

    rule.fleetType = fleetType;

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}

function ChSelectRouteRule(routeSelection) {
    let rule = new ChRule();

    rule.type = "routeSelect";

    rule.routeSelect = routeSelection;

    return rule;
}