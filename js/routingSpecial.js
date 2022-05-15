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
function ChShipTypeRoutingWithWeightRuleEscortOnly(shipTypes, operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = ChShipTypeRoutingRule(shipTypes, operator, count, conditionCheckedNode, conditionFailedNode);

    rule.escortOnly = true;

    return rule;
}

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

        if (this.escortOnly) return `Number of ${shipList} in escort ${this.operator} ${this.getCountAsText()}`;
        if (this.mainFleetOnly) return `Number of ${shipList} in main fleet ${this.operator} ${this.getCountAsText()}`;

        return `Number of ${shipList} ${this.operator} ${this.getCountAsText()}`;
    };

    rule.getRouting = function (ships) {
        let count = 0;

        let shipList = ships.c;
        if (this.escortOnly) shipList = ships.escort;
        if (this.mainFleetOnly) shipList = ships;

        for (const coef in this.shipTypes) {
            for (const shipType of this.shipTypes[coef]) {
                count += shipList[shipType] * coef;
            }
        }

        switch (this.operator) {
            case "<":
                if (count < this.getCount()) return this.conditionCheckedNode;
                break;
            case "<=":
                if (count <= this.getCount()) return this.conditionCheckedNode;
                break;
            case "=":
                if (count == this.getCount()) return this.conditionCheckedNode;
                break;
            case ">":
                if (count > this.getCount()) return this.conditionCheckedNode;
                break;
            case ">=":
                if (count >= this.getCount()) return this.conditionCheckedNode;
                break;
        }
        
        return this.conditionFailedNode;
    }

    return rule;
}

function ChShipHistoricalRoutingRuleEscortOnly(groupName, shipTypes, operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = ChShipHistoricalRoutingRule(groupName, shipTypes, operator, count, conditionCheckedNode, conditionFailedNode);

    rule.escortOnly = true;

    return rule;
}

function ChShipHistoricalRoutingRuleMainFleetOnly(groupName, shipTypes, operator, count, conditionCheckedNode, conditionFailedNode) {
    let rule = ChShipHistoricalRoutingRule(groupName, shipTypes, operator, count, conditionCheckedNode, conditionFailedNode);

    rule.mainFleetOnly = true;

    return rule;
}

/**
 * Do not use
 * @param {ChRule} LOSRule 
 * @param {ChRule} randomRule 
 * @returns 
 */
function ChIfLosFailedThenElseRandomRule(LOSRule, randomRule) {

    const nodefail = LOSRule.LOS[Math.min(...Object.keys(LOSRule.GetLOSArray()))];

    return ChIfThenElseRule(LOSRule, randomRule, ChFixedRoutingRule(nodefail));

    /*rule.type = "custom";

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
*/
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

function ChFlagshipTypeRoutingRule(shipTypes, conditionCheckedNode, conditionFailedNode) {
    let rule = ChShipTypeRoutingRule(shipTypes, '>', 0, conditionCheckedNode, conditionFailedNode);

    rule.getDescription = function () {
        return `Flagship is ${shipTypes.join(' or ')}`;
    };

    rule.getRouting = function (ships) {
        let s = CHDATA.ships[CHDATA.fleets[1][0]];
		return shipTypes.indexOf(SHIPDATA[s.masterId].type) != -1 ? conditionCheckedNode : conditionFailedNode;
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

/**
 * 
 * @param {*} shipsIds 
 * @param {*} count 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 */
function ChShipIdsRoutingRuleMainFleetOnly(shipsIds, operator, count, conditionCheckedNode, conditionFailedNode) {
    /**
     * @type {ChRule}
     */
    let rule = new ChShipIdsRoutingRule(shipsIds, operator, count, conditionCheckedNode, conditionFailedNode);

    rule.mainFleetOnly = true;

    return rule;
}

function ChShipIdsRoutingRuleEscortOnly(shipsIds, operator, count, conditionCheckedNode, conditionFailedNode) {
    /**
     * @type {ChRule}
     */
     let rule = new ChShipIdsRoutingRule(shipsIds, operator, count, conditionCheckedNode, conditionFailedNode);

     rule.escortOnly = true;
 
     return rule;
}

function ChIsMapClearedRule(conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "custom";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.getRouting = (ships) => {
        if (rule.not) return CHDATA.event.maps[MAPNUM].hp > 0 ? conditionCheckedNode : conditionFailedNode;

        return CHDATA.event.maps[MAPNUM].hp <= 0 ? conditionCheckedNode : conditionFailedNode;
    }

    rule.getDescription = () => {
        if (rule.not) return "Map isn't cleared yet";

        return "Map is cleared";
    }

    return rule;
}

function ChIsMapNotClearedRule(conditionCheckedNode, conditionFailedNode) {
    /**
     * @type {ChRule}
     */
    let rule = ChIsMapClearedRule(conditionCheckedNode, conditionFailedNode);

    rule.not = true;

    return rule;
}

/**
 * Allows to create a fully custom rule dirrectly in branching rules
 * @param {ChRule} ruleProperties
 */
function ChCreateCustomRule(ruleProperties) {
    let rule = new ChRule();

    if (ruleProperties.type) rule.type = ruleProperties.type;
    else rule.type = "custom";

    rule.conditionCheckedNode = ruleProperties.conditionCheckedNode;
    rule.conditionFailedNode = ruleProperties.conditionFailedNode;

    if (ruleProperties.getRouting) rule.getRouting = ruleProperties.getRouting;
    if (ruleProperties.getDescription) rule.getDescription = ruleProperties.getDescription;

    if (ruleProperties.shipsIds) rule.shipsIds = ruleProperties.shipsIds;
    if (ruleProperties.getShipIds) rule.getShipIds = ruleProperties.getShipIds;
    if (ruleProperties.shipsIdsListName) rule.shipsIdsListName = ruleProperties.shipsIdsListName;
    if (ruleProperties.historicalGroups) rule.historicalGroups = ruleProperties.historicalGroups;
    if (ruleProperties.randomNodes) rule.randomNodes = ruleProperties.randomNodes;

    return rule;
}

/**
 * 
 * @param {*} operator 
 * @param {*} percentage percentage in decimal (0.25 => 25%)
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 * @returns 
 */
function ChMapHpPercentageRule(operator, percentage, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "custom";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.getRouting = (ships) => {
        let m = CHDATA.event.maps[MAPNUM];

        return ChRule.CompareNumbers(m.hp/getMapHP(WORLD,MAPNUM,m.diff), percentage, operator, conditionCheckedNode, conditionFailedNode);
    }

    rule.getDescription = () => {
        return `Map HP/TP ${operator} ${percentage * 100}%`;
    }

    return rule;
}

function ChFleetBeenThroughRule(node, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "custom";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.getRouting = (ships) => {
        return !!CHDATA.sortie[node] ? conditionCheckedNode: conditionFailedNode;
    }

    rule.getDescription = () => {
        return `Fleet been through node ${node}`;
    }

    return rule;
}

function ChFleetNotBeenThroughRule(node, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "custom";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.getRouting = (ships) => {
        return !CHDATA.sortie[node] ? conditionCheckedNode: conditionFailedNode;
    }

    rule.getDescription = () => {
        return `Fleet has not been through node ${node}`;
    }

    return rule;
}

/**
 * Rule validated if all ships have a tag that belong to taglist
 * @param {number[]} tagList 
 * @param {*} conditionCheckedNode 
 * @param {*} conditionFailedNode 
 */
function ChAllHaveTagRule(tagList, conditionCheckedNode, conditionFailedNode) {
    let rule = new ChRule();

    rule.type = "custom";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.getRouting = (ships) => {

        for (let sid of getAllShipsShipIds()) {
            if (sid && !tagList.includes(CHDATA.ships[sid].lock)) { return conditionFailedNode; }
        }

        return conditionCheckedNode;
    }

    rule.getDescription = () => {
        let tags = tagList.map(x => `<img src="assets/maps/lock${x}.png" />`)
        return `All ships must have the tag${tagList.length > 1 ? 's' : ''} ${tags.join(' ')}`;
    }

    return rule;
}


/**
 * Rule that can be used in case of node replaced by other
 * @param {ChRule} baseRule Base rule
 * @param {*} routeNum Number of the route where node 2 is available
 * @param {*} node1 First node
 * @param {*} node2 Node after the replacement
 */
function ChNodeReplacedAfterUnlockRule(baseRule, routeNum, node1, node2) {
    let rule = new ChRule();

    rule.type = 'custom';

    rule.getDescription = () => { return baseRule.getDescription() };

    rule.conditionCheckedNode = node1;

    rule.getRouting = (ships) => {
        let node = baseRule.getRouting(ships);

        if (node) {
            node = (!CHDATA.event.maps[MAPNUM].routes || CHDATA.event.maps[MAPNUM].routes.indexOf(routeNum) == -1) ? node1 : node2;
        }

        return node;
    }

    return rule;
}

/**
 * Rule that can be used in case of node replaced by other
 * @param {ChRule} baseRule Base rule
 * @param {*} partNum Number of the part where node 2 is available
 * @param {*} node1 First node
 * @param {*} node2 Node after the replacement
 */
 function ChNodeReplacedAfterPartRule(baseRule, partNum, node1, node2) {
    let rule = new ChRule();

    rule.type = 'custom';

    rule.getDescription = () => { return baseRule.getDescription() };

    rule.conditionCheckedNode = node1;

    rule.getRouting = (ships) => {
        let node = baseRule.getRouting(ships);

        if (node) {
            node = (CHDATA.event.maps[4].part < partNum) ? node1 : node2;
        }

        return node;
    }

    return rule;
}

/**
 * Rule that check if flagship has a specific tag
 */
function ChFlagshipHasTag(tags, conditionCheckedNode, conditionFailedNode) {
    
    let rule = new ChRule();

    rule.type = "custom";

    rule.conditionCheckedNode = conditionCheckedNode;
    rule.conditionFailedNode = conditionFailedNode;

    rule.getRouting = (ships) => {
        let s = CHDATA.ships[CHDATA.fleets[1][0]];
        
        if (rule.not) return !tags.includes(s.lock) ? conditionCheckedNode: conditionFailedNode;
        return tags.includes(s.lock) == tag ? conditionCheckedNode: conditionFailedNode;
    }

    rule.getDescription = () => {
        let tagList = tags.map(x => `<img src="assets/maps/lock${x}.png" />`);
        return `Flagship ${rule.not ? 'doesn\'t have' : 'has'} the following shiplock(s) : ${tagList.join(' ')}`;
    }

    return rule;
}

/**
 * Rule that check if flagship don't have specific tags
 */
 function ChFlagshipDontHaveTag(tags, conditionCheckedNode, conditionFailedNode) {
    
    let rule = ChFlagshipHasTag(tags, conditionCheckedNode, conditionFailedNode);
    
    rule.not = true;

    return rule;
}