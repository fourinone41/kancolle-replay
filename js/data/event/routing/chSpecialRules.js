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