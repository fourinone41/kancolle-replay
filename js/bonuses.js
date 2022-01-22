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

    /**
     * Allows to filter some rules on certains ships only
     */
     this.excludeSpecificShips = [];

    /**
     * Debuff type
     */
    this.debuffType = null;

    /**
     * If true, bonus only applies with debuff done
     */
    this.debuffOnly = false;

    this.excludeFF = false;

    this.includeLBAS = false;

    /**
     * Accuracy mod
     */
    this.accBonus = 0;

    /**
     * Flat accuracy bonus
     */
    this.flatAccBonus = 0;

    this.evBonus = 0;

    this.exactMId = false;

    this.friendFleetOnly = false;

    this.part = 0;

    /**
     * If set, can specify which unlocks are required to apply the bonus
     */
    this.requireUnlock = 0;

    /**
     * @type {number[]}
     */
    this.diff = null;

    this.amountPerLevel = 0;

    /**
     * Required flagship id to apply bonus
     */
    this.requiredFlagshipId = [];

    /**
     * Required flagship type to apply bonus
     */
    this.requiredFlagshipType = [];
}

/**
 * @param {ChBonusesParameters} parameters 
 * @param {*} amount 
 */
 function ChWholeFleetBonuses(parameters, amount) {

    this.parameters = parameters;

    this.bonusType = 'ChWholeFleetBonuses';
    
    this.amount = amount;
    
    this.getIds = () => { return -1; };

    this.bonusToApply = { mod: amount };
    if (parameters.on) this.bonusToApply.on = parameters.on;
    if (parameters.debuffOnly) this.bonusToApply.debuffBonus = true;
    if (parameters.debuffType) this.bonusToApply.type = parameters.debuffType;

    this.applyBonuses = () => {
        if (!ChBonuses.CheckIfCanBeApplied(parameters)) return;

        let ships = ChBonuses.GetBonusShips(parameters);

        for (let ship of ships) {
            ChBonuses.ApplyBonusToShip(ship, amount, parameters);
        }
    }
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
    
    this.getIds = this.getShipIds = ChBonuses.GetShipIds(shipIds, shipIds);

    this.bonusToApply = { mod: amount };
    if (parameters.on) this.bonusToApply.on = parameters.on;
    if (parameters.debuffOnly) this.bonusToApply.debuffBonus = true;
    if (parameters.debuffType) this.bonusToApply.type = parameters.debuffType;

    this.applyBonuses = () => {
        if (!ChBonuses.CheckIfCanBeApplied(parameters)) return;

        let ships = ChBonuses.GetBonusShips(parameters);

        let ids = this.getShipIds();

        for (let ship of ships) {

            if (parameters.exactMId) {
                if (ids.indexOf(ship.mid) != -1) {
                    ChBonuses.ApplyBonusToShip(ship, amount, parameters);
                }
            } else {
                if (ids.indexOf(getBaseId(ship.mid)) != -1 || ids.indexOf(ship.mid) != -1) {
                    ChBonuses.ApplyBonusToShip(ship, amount, parameters);
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
    if (parameters.debuffOnly) this.bonusToApply.debuffBonus = true;
    if (parameters.debuffType) this.bonusToApply.type = parameters.debuffType;

    this.applyBonuses = () => {
        if (!ChBonuses.CheckIfCanBeApplied(parameters)) return;

        let ships = ChBonuses.GetBonusShips(parameters);

        let ids = this.getShipIds();

        for (let ship of ships) {
            if (ids.indexOf(getBaseId(ship.mid)) != -1) {
                ChBonuses.ApplyBonusToShip(ship, amount, parameters);
            }
        }
    }
}

/**
 * Set bonuses added per ship type
 * @param {ChBonusesParameters} parameters 
 * @param {string[]} shipTypes 
 * @param {*} amount 
 */
 function ChShipTypeBonuses(parameters, shipTypes, amount) {

    this.parameters = parameters;

    this.bonusType = 'ChShipTypeBonuses';
    
    this.amount = amount;
    
    this.getIds = () => {
        return shipTypes;
    }

    this.bonusToApply = { mod: amount };
    if (parameters.on) this.bonusToApply.on = parameters.on;
    if (parameters.debuffOnly) this.bonusToApply.debuffBonus = true;
    if (parameters.debuffType) this.bonusToApply.type = parameters.debuffType;

    this.applyBonuses = () => {
        if (!ChBonuses.CheckIfCanBeApplied(parameters)) return;

        let ships = ChBonuses.GetBonusShips(parameters);

        for (let ship of ships) {
            if (shipTypes.includes(ship.type)) {
                ChBonuses.ApplyBonusToShip(ship, amount, parameters);
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
        if (!ChBonuses.CheckIfCanBeApplied(parameters)) return;
        
        let ships = ChBonuses.GetBonusShips(parameters);
        let specificShips = parameters.onlySpecificShips ? ChBonuses.GetShipIds(parameters.onlySpecificShips, -1)() : -1;

        for (let ship of ships) {

            if (specificShips != -1 && !specificShips.includes(getBaseId(ship.mid))) continue;
            if (parameters.excludeSpecificShips && parameters.excludeSpecificShips.includes(getBaseId(ship.mid))) continue;

            let eqCount = 0;
            let level = 0;
            let found = [];

            for (let equip of ship.equips) {
                if (equipIds.includes(equip.mid)) {

                    if (!found.includes(equip.mid)) {
                        eqCount++;
                        found.push(equip.mid);
                    }

                    level = equip.level || level;
                }
            }

            if (ChRule.CompareNumbers(eqCount, reqCount, operator, true, false)) {
                if (parameters.type == 'add') {
                    if (!ship.bonusSpecial) ship.bonusSpecial = [];
                    ship.bonusSpecial.push(ChBonuses.GetBonusToApply(parameters, amount, level));
                }

                if (parameters.type == 'set') {
                    ship.bonusSpecial = [ChBonuses.GetBonusToApply(parameters, amount, level)];
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
        if (!ChBonuses.CheckIfCanBeApplied(parameters)) return;

        let ships = ChBonuses.GetBonusShips(parameters);

        for (let ship of ships) {

            if (parameters.onlySpecificShips && !parameters.onlySpecificShips.includes(getBaseId(ship.mid))) continue;
            if (parameters.excludeSpecificShips && parameters.excludeSpecificShips.includes(getBaseId(ship.mid))) continue;

            let eqCount = 0;
            let level = 0;

            for (let equip of ship.equips) {
                if (equipTypes.includes(equip.type)) {
                    eqCount++;
                    level = equip.level || level;
                }
            }

            if (ChRule.CompareNumbers(eqCount, reqCount, operator, true, false)) {
                if (parameters.type == 'add') {
                    if (!ship.bonusSpecial) ship.bonusSpecial = [];
                    ship.bonusSpecial.push(ChBonuses.GetBonusToApply(parameters, amount, level));
                }

                if (parameters.type == 'set') {
                    ship.bonusSpecial = [ChBonuses.GetBonusToApply(parameters, amount, level)];
                }
            }
        }
    }
}

/**
 * Set bonuses added per combo of equip type
 * @param {ChBonusesParameters} parameters 
 * @param {{ types: number[], bTypes: number[], numberRequired: number }[]} comboData
 * @param {*} amount 
 */
 function ChEquipTypesComboBonuses(parameters, comboData, amount) {
    this.parameters = parameters;

    this.bonusType = 'ChEquipTypesComboBonuses';
    
    this.amount = amount;

    this.comboData = comboData;
  
    this.getIds = () => {
        let ids = [];

        for (const combo of this.comboData) {
            if (combo.types) ids.push(...combo.types);
            if (combo.bTypes) ids.push(...combo.bTypes);
        }

        return ids;
    }

    this.checkComboOnShip = (ship) => {

        let shipEquipsTypes = [];

        for (const combo of this.comboData) {
            shipEquipsTypes.push({
                numberRequired: combo.numberRequired,
                types: combo.types ? combo.types : [],
                bTypes: combo.bTypes ? combo.bTypes : [],
                numberOnShip: 0,
            })
        }

        for (let equip of ship.equips) {
            for (const combo of shipEquipsTypes) {

                let bTypes = EQTDATA[equip.type].btype;

                if (combo.types.includes(equip.type)) {
                    combo.numberOnShip++;
                } else if (combo.bTypes.includes(bTypes)) {
                    combo.numberOnShip++;
                }
            }
        }

        // --- Checking if combo equipped
        for (const combo of shipEquipsTypes) {
            if (combo.numberOnShip < combo.numberRequired) return false;
        }

        return true;
    }

    this.applyBonuses = () => {
        if (!ChBonuses.CheckIfCanBeApplied(parameters)) return;

        let specificShips = parameters.onlySpecificShips ? ChBonuses.GetShipIds(parameters.onlySpecificShips, -1)() : -1;

        let ships = ChBonuses.GetBonusShips(parameters);

        for (let ship of ships) {

            if (specificShips != -1 && !specificShips.includes(getBaseId(ship.mid))) continue;
            if (parameters.excludeSpecificShips && parameters.excludeSpecificShips.includes(getBaseId(ship.mid))) continue;

            let comboOk = this.checkComboOnShip(ship);
            
            if (comboOk) {
                if (parameters.type == 'add') {
                    if (!ship.bonusSpecial) ship.bonusSpecial = [];
                    ship.bonusSpecial.push(ChBonuses.GetBonusToApply(parameters, amount));
                }

                if (parameters.type == 'set') {
                    ship.bonusSpecial = [ChBonuses.GetBonusToApply(parameters, amount)];
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

    this.parameters.debuffOnly = true;
    
    this.amount = amount;

    this.bonusToApply = { mod: amount };
    if (parameters.on) this.bonusToApply.on = parameters.on;
    if (parameters.debuffOnly) this.bonusToApply.debuffBonus = true;
    if (parameters.debuffType) this.bonusToApply.type = parameters.debuffType;
    
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
        if (!ChBonuses.CheckIfCanBeApplied(parameters)) return;

        let ships = ChBonuses.GetBonusShips(parameters);

        let ids = this.getIds();

        for (let ship of ships) {

            if (ids != -1) {
                if (ids.indexOf(getBaseId(ship.mid)) == -1) continue;
            }

            ChBonuses.ApplyBonusToShip(ship, amount, parameters);
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
    if (parameters.debuffOnly) this.bonusToApply.debuffBonus = true;
    if (parameters.debuffType) this.bonusToApply.type = parameters.debuffType;
    
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
        if (!ChBonuses.CheckIfCanBeApplied(parameters)) return;

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
        let ships = ChBonuses.GetBonusShips(parameters);

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

/**
 * @param {ChBonusesParameters} parameters 
 * @param {*} amount 
 */
 function ChShipWithoutBonusesBonuses(parameters, amount) {

    this.parameters = parameters;

    this.bonusType = 'ChShipWithoutBonusesBonuses';
    
    this.amount = amount;
    
    this.getIds = () => {
        return -1;
    }

    this.bonusToApply = { mod: amount };
    if (parameters.on) this.bonusToApply.on = parameters.on;
    if (parameters.debuffOnly) this.bonusToApply.debuffBonus = true;
    if (parameters.debuffType) this.bonusToApply.type = parameters.debuffType;

    this.applyBonuses = () => {
        if (!ChBonuses.CheckIfCanBeApplied(parameters)) return;
        
        let ships = ChBonuses.GetBonusShips(parameters);

        for (let ship of ships) {
            if (!ship.bonusSpecial) {
                ChBonuses.ApplyBonusToShip(ship, amount, parameters);
            } else if (!parameters.debuffOnly && parameters.on) {
                let found = false;

                for (const bonus of ship.bonusSpecial) {
                    if (bonus.on) found = true;
                }

                if (!found) ChBonuses.ApplyBonusToShip(ship, amount, parameters);
            } else if (parameters.debuffOnly && !parameters.on) {
                let found = false;

                for (const bonus of ship.bonusSpecial) {
                    if (bonus.debuffBonus && !bonus.on) found = true;
                }

                if (!found) ChBonuses.ApplyBonusToShip(ship, amount, parameters);
            } else if (parameters.debuffOnly && parameters.on) {
                let found = false;

                for (const bonus of ship.bonusSpecial) {
                    if (bonus.debuffBonus && bonus.on) found = true;
                }

                if (!found) ChBonuses.ApplyBonusToShip(ship, amount, parameters);
            }
        }
    }
}

/**
 * Returns list of ships to apply bonuses
 * @param {ChBonusesParameters} parameters 
 */
ChBonuses.GetBonusShips = (parameters) => {
    let ships = getAllShips(!parameters.excludeFF);
    if (parameters.includeLBAS) ships = ships.concat(LBAS);

    if (parameters.friendFleetOnly) {
        if (CHDATA.sortie.fleetFriendAir) {
            return CHDATA.sortie.fleetFriendAir.ships;
        }

        if (CHDATA.sortie.fleetFriend) {
            return CHDATA.sortie.fleetFriend.ships;
        }

        return [];
    }

    return ships;
}

/**
 * Return true if bonus can be applied
 * @param {ChBonusesParameters} parameters 
 */
ChBonuses.CheckIfCanBeApplied = (parameters) => {
    if (parameters.debuffOnly) {
        // --- Only apply if debuffed
        let debuffed = MAPDATA[WORLD].maps[MAPNUM].debuffRules.gimmickDone();
        if (!debuffed) return false;
    }

    if (parameters.part) {
        // --- Only apply if debuffed
        let part = CHDATA.event.maps[MAPNUM].part;

        if (!part) return false;
        if (part < parameters.part) return false;
    }

    if (parameters.requireUnlock) {
        // --- Only apply if route unlocked
        if (CHDATA.event.maps[MAPNUM].routes.indexOf(parameters.requireUnlock) == -1) return false;
    }

    if (parameters.diff) {
        let diff = getDiff();

        if (!parameters.diff.includes(diff)) return false;
    }

    if (parameters.requiredFlagshipId) {
        let ships = ChBonuses.GetBonusShips(parameters);

        // --- Check the flagship
        let flagId = getBaseId(ships[0].mid);

        if (!parameters.requiredFlagshipId.includes(flagId)) return false;
    }

    if (parameters.requiredFlagshipType) {
        let ships = ChBonuses.GetBonusShips(parameters);

        // --- Check the flagship
        let flagType = ships[0].type;

        if (!parameters.requiredFlagshipType.includes(flagType)) return false;
    }

    return true;
}

/**
 * Returns the bonus to apply
 * @param {*} parameters 
 * @param {*} level 
 */
ChBonuses.GetBonusToApply = (parameters, amount, level) => {
    let bonusToApply = { mod: amount };

    if (parameters.on) bonusToApply.on = parameters.on;
    if (parameters.debuffOnly) bonusToApply.debuffBonus = true;
    if (parameters.debuffType) bonusToApply.type = parameters.debuffType;
    if (parameters.amountPerLevel && level) bonusToApply.mod += (parameters.amountPerLevel * level);

    return bonusToApply;
}

ChBonuses.GetShipIds = (shipIds) => {
    if (typeof(shipIds) == 'string') {
        // --- [0] = type
        // --- [1] = the property of the object having the id list
        let accessToShipIds = shipIds.split('.');

        let type = accessToShipIds.shift();
        let ships = null;

        if (type == 'map') {
            return () => {

                if (ships) return ships; 
                
                ships = MAPDATA[WORLD].maps[MAPNUM];

                while (accessToShipIds.length) {
                    ships = ships[accessToShipIds.shift()];
                }

                return ships;
            }
        }

        if (type == 'event') {
            return () => {

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
        return () => {
            return shipIds;
        }
    }
}

/**
 * 
 * @param {*} ship Ship data
 * @param {number} amount Base damage bonus amount
 * @param {ChBonusesParameters} parameters 
 */
ChBonuses.ApplyBonusToShip = function (ship, amount, parameters) {

    let bonusToApply = { mod: amount };
    if (parameters.on) bonusToApply.on = parameters.on;
    if (parameters.debuffOnly) bonusToApply.debuffBonus = true;
    if (parameters.debuffType) bonusToApply.type = parameters.debuffType;

    if (parameters.type == 'add') {
        if (!ship.bonusSpecial) ship.bonusSpecial = [];
        ship.bonusSpecial.push(bonusToApply);
        
        if (parameters.flatAccBonus) {
            ship.ACC = ship.ACC + parameters.flatAccBonus || parameters.flatAccBonus;
        }

        if (parameters.accBonus) {
            if (!ship.bonusSpecialAcc) ship.bonusSpecialAcc = [];
            ship.bonusSpecialAcc.push({ mod: parameters.accBonus });
        }

        if (parameters.evBonus) {
            if (!ship.bonusSpecialEv) ship.bonusSpecialEv = [];
            ship.bonusSpecialEv.push({ mod: parameters.evBonus });
        }
    }

    if (parameters.type == 'set') {
        ship.bonusSpecial = [bonusToApply];
        if (parameters.flatAccBonus) ship.ACC = ship.ACC + parameters.flatAccBonus || parameters.flatAccBonus;
        if (parameters.accBonus) ship.bonusSpecialAcc = [{ mod: parameters.accBonus }];
        if (parameters.evBonus) ship.bonusSpecialEv = [{ mod: parameters.evBonus }];
    }

}