/**
 * 
 * @param {ChBonusesParameters} parameters 
 */
function ChBonuses(parameters) {
    this.parameters = parameters;

    this.bonusType = 'none';

    this.applyBonuses = () => { };
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

        if (accessToShipIds[0] == 'map') {
            this.getShipIds = () => {
                return MAPDATA[WORLD].maps[MAPNUM][accessToShipIds[1]];
            }
        }

        if (accessToShipIds[0] == 'event') {
            this.getShipIds = () => {
                return MAPDATA[WORLD][accessToShipIds[1]];
            }
        }
    }
    else {
        this.getShipIds = () => {
            return shipIds;
        }
    }
    

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