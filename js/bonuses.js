/**
 * 
 * @param {ChBonusesParameters} parameters 
 */
function ChBonuses(parameters) {
    this.parameters = parameters;

    this.bonusType = 'none';

    this.applyBonuses = () => { };

    this.getIds = () => { return []; };
}

function ChBonusesParameters () {
    /**
     * @type {'set' | 'add'} type Set = set the bonus amount of the group, Add =  add the bonus to the previous bonuses (bonuses resets on map start)
     */
    this.type = 'set';
}

/**
 * Set bonuses added per ship id
 * @param {ChBonusesParameters} parameters 
 * @param {number[] | 'map.property' | 'event.property'} shipIds 
 * @param {*} amount 
 */
function ChShipIdsBonuses(parameters, shipIds, amount) {

    this.parameters = parameters;

    this.bonusType = 'ChShipIdsBonuses';
    
    this.amount = amount;

    if (typeof(shipIds) == 'string') {
        // --- [0] = type
        // --- [1] = the property of the object having the id list
        let accessToShipIds = shipIds.split('.');

        let type = accessToShipIds.shift();
        let ships = null;

        if (type == 'map') {
            this.getShipIds = () => {

                if (ships) return ships; 
                
                ships = MAPDATA[WORLD].maps[MAPNUM];

                while (accessToShipIds.length) {
                    ships = ships[accessToShipIds.shift()];
                }

                return ships;
            }
        }

        if (type == 'event') {
            this.getShipIds = () => {

                if (ships) return ships;

                ships = MAPDATA[WORLD];

                while (accessToShipIds.length) {
                    ships = ships[accessToShipIds.shift()];
                }

                return ships;
            }
        }
    }
    else {
        this.getShipIds = () => {
            return shipIds;
        }
    }
    
    this.getIds = this.getShipIds;

    this.applyBonuses = () => {
        let ships = getAllShips();
        let ids = this.getShipIds();

        for (let ship of ships) {
            if (ids.indexOf(getBaseId(ship.mid)) != -1) {
                if (parameters.type == 'add') {
                    if (!ship.bonusSpecial) ship.bonusSpecial = [];
                    ship.bonusSpecial.push({ mod: amount });
                }

                if (parameters.type == 'set') {
                    ship.bonusSpecial = [{ mod: amount }];
                }
            }
        }
    }
}

/**
 * Set bonuses added per equip id
 * @param {ChBonusesParameters} parameters 
 * @param {number[]} equipIds 
 * @param {'>'| '='| '>='} operator
 * @param {number} reqCount Number of equipment ids required to get bonus
 * @param {*} amount 
 */
function ChEquipIdsBonuses(parameters, equipIds, operator, reqCount, amount) {
    this.parameters = parameters;

    this.bonusType = 'ChEquipIdsBonuses';
    
    this.amount = amount;

    this.reqCount = reqCount;

    this.equipIds = equipIds;

    this.operator = operator;
    
    this.getIds = () => {
        return this.equipIds;
    }

    this.applyBonuses = () => {
        let ships = getAllShips();

        for (let ship of ships) {

            let eqCount = 0;

            for (let equip of ship.equips) {
                if (equipIds.includes(equip.mid)) eqCount++;
            }

            if (ChRule.CompareNumbers(eqCount, reqCount, operator, true, false)) {
                if (parameters.type == 'add') {
                    if (!ship.bonusSpecial) ship.bonusSpecial = [];
                    ship.bonusSpecial.push({ mod: amount });
                }

                if (parameters.type == 'set') {
                    ship.bonusSpecial = [{ mod: amount }];
                }
            }
        }
    }
}

/**
 * Set bonuses added per equip type
 * @param {ChBonusesParameters} parameters 
 * @param {number[]} equipTypes 
 * @param {'>'| '='| '>='} operator
 * @param {number} reqCount Number of equipment types required to get bonus
 * @param {*} amount 
 */
 function ChEquipTypesBonuses(parameters, equipTypes, operator, reqCount, amount) {
    this.parameters = parameters;

    this.bonusType = 'ChEquipTypesBonuses';
    
    this.amount = amount;

    this.reqCount = reqCount;

    this.equipTypes = equipTypes;

    this.operator = operator;

    this.getIds = () => {
        return this.equipTypes;
    }

    this.applyBonuses = () => {
        let ships = getAllShips();

        for (let ship of ships) {

            let eqCount = 0;

            for (let equip of ship.equips) {
                if (equipTypes.includes(equip.type)) eqCount++;
            }

            if (ChRule.CompareNumbers(eqCount, reqCount, operator, true, false)) {
                if (parameters.type == 'add') {
                    if (!ship.bonusSpecial) ship.bonusSpecial = [];
                    ship.bonusSpecial.push({ mod: amount });
                }

                if (parameters.type == 'set') {
                    ship.bonusSpecial = [{ mod: amount }];
                }
            }
        }
    }
}