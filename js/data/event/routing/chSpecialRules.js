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