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
     * @type {"shipType" | "random"| "fixed" | "shipCount" | "multiRules"}
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

                return this.conditionCheckedNode;
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
                let shipList = this.shipTypes.join(" + ");

                return `Number of ${shipList} ${this.operator} ${this.count}`;
            }

            case 'shipCount' : {
                return `Number of ship in fleet ${this.operator} ${this.count}`;
            }

            case 'multiRules' : {
                let descriptions = [];

                for (const rule of this.rules) {
                    descriptions.push(`<span style="margin-left:20px;">${rule.getDescription()}</span>`);
                }

                return `Meet all of the following requirements : <br>` + descriptions.join(`<br>`);
            }

            default:
                return "???";
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