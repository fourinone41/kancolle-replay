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
     * @type {"shipType" | "random"| "fixed" | "shipCount" | "multiRules" | "random" | "speed" | "custom" | "ifthenelse" | "allShipsMustBe" | 'isLastDance'}
     */
    this.type = "fixed";

    /**
     * @type {string[]}
     */
    this.shipTypes = [];

    /**
     * @type {ChRule[]} 
     */
    this.rules = [];

    this.count = 0;

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
     * Speed of fleet
     */
    this.speed = 10;

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
        
            case "shipType": {
                let count = 0;
                ships.CVN = ships.CVN ? ships.CVN : 0;

                for (const shipType of this.shipTypes) {
                    count += ships[shipType];
                }

                switch (this.operator) {
                    case "<":
                        if (count < this.count) return this.conditionCheckedNode;
                        break;
                    case "<=":
                        if (count <= this.count) return this.conditionCheckedNode;
                        break;
                    case "=":
                        if (count = this.count) return this.conditionCheckedNode;
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

            case 'shipCount' : {
                switch (this.operator) {
                    case "<":
                        if (ships.total < this.count) return this.conditionCheckedNode;
                        break;
                    case "<=":
                        if (ships.total <= this.count) return this.conditionCheckedNode;
                        break;
                    case "=":
                        if (ships.total = this.count) return this.conditionCheckedNode;
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
                switch (this.operator) {
                    case "<":
                        if (ships.speed < this.speed) return this.conditionCheckedNode;
                        break;
                    case "<=":
                        if (ships.speed <= this.speed) return this.conditionCheckedNode;
                        break;
                    case "=":
                        if (ships.speed = this.speed) return this.conditionCheckedNode;
                        break;
                    case ">":
                        if (ships.speed > this.speed) return this.conditionCheckedNode;
                        break;
                    case ">=":
                        if (ships.speed >= this.speed) return this.conditionCheckedNode;
                        break;
                }

                return this.conditionFailedNode;
            }

            case "ifthenelse": {
                if (this.ifthenelse.if.getRouting(ships)) {
                    return this.ifthenelse.then.getRouting(ships);
                }
                else {
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
        
            case "shipType": {
                let shipTypesTranslated = [];

                for (const shipType of this.shipTypes) {
                    if (shipType == "aBB") shipTypesTranslated.push("(F)BB(V)");
                    else if (shipType == "aCV") shipTypesTranslated.push("CV(L/B)");
                    else shipTypesTranslated.push(shipType);
                }

                let shipList = shipTypesTranslated.join(" + ");

                return `Number of ${shipList} ${this.operator} ${this.count}`;
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
                    else descriptions.push(`<span style="margin-left:20px;">${rule.getDescription()}</span>`);
                }

                
                let AnyOrAll = "";
                if (this.logicOperator == "AND") AnyOrAll = "all";
                if (this.logicOperator == "OR") AnyOrAll = "any";
                
                return `Meet ${AnyOrAll} of the following requirements : <br>${descriptions.join(`<br>`)}${randomDesc}`;
            }

            case 'random' : {
                let description = [];

                for (const node in this.randomNodes) {
                    description.push(`${node} ${this.randomNodes[node] * 100}%`);
                }

                return "Random " + description.join(", ");
            }

            case 'speed' : {
                let speed = {
                    5: {
                        "<": "Slow fleet",
                        "<=": "Slow fleet",
                        "=": "Slow fleet",
                        ">": "Fast fleet",
                        ">=": "Slow fleet or faster",
                    },
                    10: {
                        "<": "Slow fleet",
                        "<=": "Fast fleet or slower",
                        "=": "Fast fleet",
                        ">": "Fast+ fleet",
                        ">=": "Fast fleet or faster",
                    },
                    15: {
                        "<": "Fast fleet or slower",
                        "<=": "Fast+ fleet or slower",
                        "=": "Fast+ fleet",
                        ">": "Fastest fleet",
                        ">=": "Fast+ fleet or faster",
                    },
                    15: {
                        "<": "Fast+ fleet or slower",
                        "<=": "Fastest fleet or slower",
                        "=": "Fastest fleet",
                        ">": "Fastest fleet",
                        ">=": "Fastest fleet",
                    },
                };

                return speed[this.speed][this.operator];
            }

            case "ifthenelse": {
                return `If ${this.ifthenelse.if.getDescription()}<br>then ${this.ifthenelse.then.getDescription()}<br>else ${this.ifthenelse.else.getDescription()}`;
            }

            case "allShipsMustBe": {
                return `All ships must be ${this.shipTypes.join(" OR ")}`;
            }

            case "isLastDance": {
                return 'Map is on last dance';
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
    ruleIf.conditionFailedNode = true;

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
 function ChIsLastDance(conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "isLastDance";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    return rule;
}