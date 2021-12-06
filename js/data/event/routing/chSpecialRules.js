/**
 * This file is made for rules that are special and not reused (or only a few times)
 * Every rule implements their own getRouting and getDescription
 */

/**
 * Check if all ships have the same speed
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 */
 function ChAllShipSameSpeedRule(conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "custom";
    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.getRouting = () => {
        var speed = FLEETS1[0].ships[0].SPD;
        for (var i=0; i<FLEETS1[0].ships.length; i++) {
            if (FLEETS1[0].ships[i].SPD != speed) return conditionFailedNode;
        }
        return conditionCheckedNode;
    };
    
    rule.getDescription = () => {
        return 'All ships must have the same speed';
    };

    return rule;
}

/**
 * Routing is random but the chences are affected by ships in fleet
 */
function ChRandomAffectedByShipTypes(shipTypes, baseChance, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "custom";
    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.getRouting = (ships) => {
        let count = 0;

        for (const shipType of shipTypes) {
            count += ships[shipType];
        }

        return (Math.random() < baseChance * count) ? rule.conditionCheckedNode : rule.conditionFailedNode;
    };
    
    rule.getDescription = () => {
        let description = `Number of ${shipTypes.join(' + ')} <br>`;

        for (let count = 0; count < 7; count++) {
            let chanceA = Math.min(Math.trunc(baseChance*count*100), 100);
            let chanceB = 100 - chanceA;

            if (chanceA == 100) {
                description += `>= ${count} : ${chanceA}% ${rule.conditionCheckedNode} ${chanceB}% ${rule.conditionFailedNode}<br> `
                
                return description;
            }
            else {
                description += `${count} : ${chanceA}% ${rule.conditionCheckedNode} ${chanceB}% ${rule.conditionFailedNode}<br> `    
            }   
        }

        return description;
    };

    return rule;
}

function ChShipTypeRoutingRuleEscortOnly(shipTypes, operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = ChShipTypeRoutingRule(shipTypes, operator, count, conditionCheckedNode, conditionFailedNode);

    rule.escortOnly = true;

    return rule;
}

function ChShipTypeRoutingRuleMainFleetOnly(shipTypes, operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = ChShipTypeRoutingRule(shipTypes, operator, count, conditionCheckedNode, conditionFailedNode);

    rule.mainFleetOnly = true;

    return rule;
}

/**
 * Ship type routing but some ship have different weight
 * @param {*} shipTypes 
 * @param {*} operator 
 * @param {*} count 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 * @returns 
 */
function ChShipTypeRoutingWithWeightRule(shipTypes, operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = ChShipTypeRoutingRule(shipTypes, operator, count, conditionCheckedNode, conditionFailedNode);

    rule.getDescription = function () {
        let shipTypesTranslated = [];

        for (const coef in this.shipTypes) {
            let desc = coef != 1 ? '(' : '';
            let types = [];

            for (const shipType of this.shipTypes[coef]) {
                if (shipType == "aBB") types.push("(F)BB(V)");
                else if (shipType == "aCV") types.push("CV(L/B)");
                else types.push(shipType);
            }

            desc += types.join(' + ');
            desc += coef != 1 ? `) * ${coef}` : '';

            shipTypesTranslated.push(desc);
        }

        let shipList = shipTypesTranslated.join(" + ");

        return `Number of ${shipList} in escort ${this.operator} ${this.count}`;
    };

    rule.getRouting = function (ships) {
        let count = 0;

        for (const coef in this.shipTypes) {
            for (const shipType of this.shipTypes[coef]) {
                count += ships.escort[shipType] * coef;
            }
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

    return rule;
}

function ChShipHistoricalRoutingRuleEscortOnly(groupName, shipTypes, count, conditionCheckedNode, conditionFailedNode) {
    let rule = ChShipHistoricalRoutingRule(groupName, shipTypes, count, conditionCheckedNode, conditionFailedNode);

    rule.escortOnly = true;

    return rule;
}

function ChShipHistoricalRoutingRuleMainFleetOnly(groupName, shipTypes, count, conditionCheckedNode, conditionFailedNode) {
    let rule = ChShipHistoricalRoutingRule(groupName, shipTypes, count, conditionCheckedNode, conditionFailedNode);

    rule.mainFleetOnly = true;

    return rule;
}

/**
 * 
 * @param {ChRule} LOSRule 
 * @param {ChRule} randomRule 
 * @returns 
 */
function ChIfLosThenElseRandomRule(LOSRule, randomRule) {
    let rule = new ChRule();

    rule.type = "custom";

    rule.getRouting = () => {
        let node = LOSRule.getRouting();

        if (node) {
            rule.conditionCheckedNode = LOSRule.LOS[Math.max(...Object.keys(losArray))];
            return node;
        }

        node = randomRule.getRouting();
        rule.conditionCheckedNode = node;

        return node;
    };
    
    rule.getDescription = () => {
        let description = {};
        
        let losDesc = LOSRule.getDescription();
        for (const node in losDesc) {
            
            if (node) description[node] = `${losDesc[node]}`;
            else {
                let nodeCombined = Object.keys(randomRule.randomNodes).join("/");

                description[nodeCombined] = `${losDesc[node]}`;
            }

        }

        let randomDesc = randomRule.GetRandomDescription();
        for (const node in randomDesc) {
            description[node] = randomDesc[node];
        }

        return description;
    };

    rule.getShowLosPlane = () => { return !!rule.conditionCheckedNode; }

    return rule;
}

function ChFlagshipIdRoutingRule(shipId, conditionCheckedNode, conditionFailedNode) {
    let rule = ChShipIdsRoutingRule([shipId], 1, conditionCheckedNode, conditionFailedNode);

    rule.getDescription = function () {
        return `Have ${SHIPDATA[shipId].name} as flagship`;
    };

    rule.getRouting = function (ships) {
        return isShipInList([ships.ids[0]], shipId) ? this.conditionCheckedNode : this.conditionFailedNode;
    }

    return rule;
}

/**
 * 
 * @param {*} operator 
 * @param {*} speed 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 */
 function ChSpeedRuleEscortOnly(operator, speed, conditionCheckedNode, conditionFailedNode) {
    let rule = ChSpeedRule(operator, speed, conditionCheckedNode, conditionFailedNode);

    rule.escortOnly = true;

    return rule;
}