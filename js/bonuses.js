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

    /**
     * @type {number[]} enemies mid on which should be applied bonus
     */
    this.on = [];

    /**
     * Allows to filter some rules on certains ships only
     */
    this.onlySpecificShips = [];
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

    this.bonusToApply = { mod: amount };
    if (parameters.on) this.bonusToApply.on = parameters.on;

    this.applyBonuses = () => {
        let ships = getAllShips(parameters.includeFF);
        let ids = this.getShipIds();

        let applyBonus = (ship) => {
            if (parameters.type == 'add') {
                if (!ship.bonusSpecial) ship.bonusSpecial = [];
                ship.bonusSpecial.push(this.bonusToApply);
            }

            if (parameters.type == 'set') {
                ship.bonusSpecial = [this.bonusToApply];
            }
        }

        for (let ship of ships) {

            if (parameters.exactMId) {
                if (ids.indexOf(ship.mid) != -1) {
                    applyBonus(ship);
                }
            } else {
                if (ids.indexOf(getBaseId(ship.mid)) != -1) {
                    applyBonus(ship);
                }
            }
        }
    }
}

/**
 * Set bonuses added per ship class
 * @param {ChBonusesParameters} parameters 
 * @param {number[] | 'map.property' | 'event.property'} classIds 
 * @param {*} amount 
 */
 function ChShipClassBonuses(parameters, classIds, amount) {

    this.parameters = parameters;

    this.bonusType = 'ChShipIdsBonuses';
    
    this.amount = amount;

    let shipData = Object.keys(SHIPDATA).map(x => { return { id: x, sclass: SHIPDATA[x].sclass }});

    let getShipsIdsFromClass = (shipClasses) => {
        let ids = [];

        for (const classId of shipClasses) {
            for (const shipId of shipData.filter(x => x.sclass == classId).map(x => x.id)) {
                let mid = parseInt(getBaseId(shipId));

                if (!ids.includes(mid)) ids.push(mid);
            }
        }

        return ids;
    }

    let ships = null;

    if (typeof(classIds) == 'string') {
        // --- [0] = type
        // --- [1] = the property of the object having the id list
        let accessToShipIds = classIds.split('.');

        let type = accessToShipIds.shift();

        if (type == 'map') {
            this.getShipIds = () => {

                if (ships) return ships; 
                
                ships = MAPDATA[WORLD].maps[MAPNUM];

                while (accessToShipIds.length) {
                    ships = ships[accessToShipIds.shift()];
                }

                ships = getShipsIdsFromClass(ships);

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

                ships = getShipsIdsFromClass(ships);
                
                return ships;
            }
        }
    }
    else {
        this.getShipIds = () => {
            if (ships) return ships;

            ships = getShipsIdsFromClass(classIds);

            return ships;
        }
    }
    
    this.getIds = this.getShipIds;

    this.bonusToApply = { mod: amount };
    if (parameters.on) this.bonusToApply.on = parameters.on;

    this.applyBonuses = () => {
        let ships = getAllShips(parameters.includeFF);
        let ids = this.getShipIds();

        for (let ship of ships) {
            if (ids.indexOf(getBaseId(ship.mid)) != -1) {
                if (parameters.type == 'add') {
                    if (!ship.bonusSpecial) ship.bonusSpecial = [];
                    ship.bonusSpecial.push(this.bonusToApply);
                }

                if (parameters.type == 'set') {
                    ship.bonusSpecial = [this.bonusToApply];
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

    this.bonusToApply = { mod: amount };
    if (parameters.on) this.bonusToApply.on = parameters.on;
    
    this.getIds = () => {
        return this.equipIds;
    }

    this.applyBonuses = () => {
        let ships = getAllShips(parameters.includeFF);

        for (let ship of ships) {

            let eqCount = 0;

            for (let equip of ship.equips) {
                if (equipIds.includes(equip.mid)) eqCount++;
            }

            if (ChRule.CompareNumbers(eqCount, reqCount, operator, true, false)) {
                if (parameters.type == 'add') {
                    if (!ship.bonusSpecial) ship.bonusSpecial = [];
                    ship.bonusSpecial.push(this.bonusToApply);
                }

                if (parameters.type == 'set') {
                    ship.bonusSpecial = [this.bonusToApply];
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

    this.bonusToApply = { mod: amount };
    if (parameters.on) this.bonusToApply.on = parameters.on;

    this.getIds = () => {
        return this.equipTypes;
    }

    this.applyBonuses = () => {
        let ships = getAllShips(parameters.includeFF);

        for (let ship of ships) {

            let eqCount = 0;

            for (let equip of ship.equips) {
                if (equipTypes.includes(equip.type)) eqCount++;
            }

            if (ChRule.CompareNumbers(eqCount, reqCount, operator, true, false)) {
                if (parameters.type == 'add') {
                    if (!ship.bonusSpecial) ship.bonusSpecial = [];
                    ship.bonusSpecial.push(this.bonusToApply);
                }

                if (parameters.type == 'set') {
                    ship.bonusSpecial = [this.bonusToApply];
                }
            }
        }
    }
}

/**
 * Give bonus if debuff is done
 * @param {ChBonusesParameters} parameters 
 * @param {*} amount 
 */
function ChDebuffBonuses(parameters, amount) {
    this.parameters = parameters;

    this.bonusType = 'ChDebuffBonuses';
    
    this.amount = amount;

    this.bonusToApply = { mod: amount };
    if (parameters.on) this.bonusToApply.on = parameters.on;
    
    if (parameters.onlySpecificShips) {
        if (typeof(parameters.onlySpecificShips) == 'string') {
            // --- [0] = type
            // --- [1] = the property of the object having the id list
            let accessToShipIds = parameters.onlySpecificShips.split('.');
    
            let type = accessToShipIds.shift();
            let ships = null;
    
            if (type == 'map') {
                this.getIds = () => {
    
                    if (ships) return ships; 
                    
                    ships = MAPDATA[WORLD].maps[MAPNUM];
    
                    while (accessToShipIds.length) {
                        ships = ships[accessToShipIds.shift()];
                    }
    
                    return ships;
                }
            }
    
            if (type == 'event') {
                this.getIds = () => {
    
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
            this.getIds = () => {
                return parameters.onlySpecificShips;
            }
        }
    }
    else {
        this.getIds = () => {
            return -1;
        }
    }

    this.applyBonuses = () => {
        // --- Only apply if debuffed
        let debuffed = MAPDATA[WORLD].maps[MAPNUM].debuffRules.gimmickDone();
        if (!debuffed) return;

        let ships = getAllShips(parameters.includeFF);
        let ids = this.getIds();

        for (let ship of ships) {

            if (ids != -1) {
                if (ids.indexOf(getBaseId(ship.mid)) == -1) continue;
            }

            if (parameters.type == 'add') {
                if (!ship.bonusSpecial) ship.bonusSpecial = [];
                ship.bonusSpecial.push(this.bonusToApply);
            }

            if (parameters.type == 'set') {
                ship.bonusSpecial = [this.bonusToApply];
            }
        }
    }
}

/**
 * Custom debuff effects
 * @param {ChBonusesParameters} parameters 
 * @param {*} amount 
 */
 function ChCustomBonusEffects(parameters, applyBonuses, description) {
    this.parameters = parameters;

    this.bonusType = 'ChCustomBonusEffects';
    
    this.description = description;

    this.bonusToApply = { mod: 1 };
    if (parameters.on) this.bonusToApply.on = parameters.on;
    
    if (parameters.onlySpecificShips) {
        if (typeof(parameters.onlySpecificShips) == 'string') {
            // --- [0] = type
            // --- [1] = the property of the object having the id list
            let accessToShipIds = parameters.onlySpecificShips.split('.');
    
            let type = accessToShipIds.shift();
            let ships = null;
    
            if (type == 'map') {
                this.getIds = () => {
    
                    if (ships) return ships; 
                    
                    ships = MAPDATA[WORLD].maps[MAPNUM];
    
                    while (accessToShipIds.length) {
                        ships = ships[accessToShipIds.shift()];
                    }
    
                    return ships;
                }
            }
    
            if (type == 'event') {
                this.getIds = () => {
    
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
            this.getIds = () => {
                return parameters.onlySpecificShips;
            }
        }
    }
    else {
        this.getIds = () => {
            return -1;
        }
    }

    this.applyBonuses = () => {
        // --- Only apply if debuffed
        let debuffed = MAPDATA[WORLD].maps[MAPNUM].debuffRules.gimmickDone();
        if (!debuffed) return;

        applyBonuses();
    }
}

/**
 * Set bonuses added per equip id
 * @param {ChBonusesParameters} parameters 
 * @param {number[]} equipIds 
 * @param {*} amount 
 */
 function ChEquipIdsBonusTable(parameters, equipIds, tableId, amount) {
    this.parameters = parameters;

    this.bonusType = 'ChEquipIdsBonuses';
    
    this.amount = amount;

    this.tableId = tableId;

    this.equipIds = equipIds;
    
    this.getIds = () => {
        return this.equipIds;
    }

    this.applyBonuses = () => {
        let ships = getAllShips(parameters.includeFF);
        let ids = this.getIds();

        for (let ship of ships) {

            for (let eq of ship.equips) {
                if (ids.includes(eq.mid)) {
                    if (!eq.bonusSpecialP) eq.bonusSpecialP = {};
                    eq.bonusSpecialP[tableId] = amount;
                }
            }
        }
    }
}