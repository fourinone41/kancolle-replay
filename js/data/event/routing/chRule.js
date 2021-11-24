function ChRule () {

    /**
     * @type {"=" | ">=" | "<=" | "<" | ">"}
     */
    this.operator = "=";

    /**
     * @type {"shipType" | "random"| "fixed" | "shipCount"}
     */
    this.type = "fixed";

    /**
     * @type {string[]}
     */
    this.shipTypes = [];

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

                if (count >= this.count) return this.conditionCheckedNode;
                return this.conditionFailedNode;
            }

            case 'shipCount' : {
                if (ships.total < this.count) return this.conditionCheckedNode;
                return this.conditionFailedNode;
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