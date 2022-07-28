var COMMON = {
	consts: {
		CTF: 1,
		STF: 2,
		TCF: 3,
		SF: 7,
		
		NODE_NORMAL: 1,
		NODE_NIGHT: 2,
		NODE_AIR: 4,
		NODE_RAID: 6,
		
		formationSingleDefault: 1,
		formationCombinedDefault: 14,
		
		numShipMax: 6,
		numShipMaxSF: 7,
		numEquipMax: 6,
		
	
		customEquipmentsStartId: 6000,
		customShipsStartId: 10000,
	},
	global: {},
	
	ID_GEN: {
		_ids: {},
		nextId: function(key) {
			return ++this._ids[key] || (this._ids[key] = 1);
		},
		setInit: function(key,val) {
			this._ids[key] = val;
		},
	},
	
	getConst(obj) {
		for (let key in this.consts) {
			if (obj[key] == null) obj[key] = this.consts[key];
		}
		return obj;
	},
	
	getHP: function(hpBase,hpMax,level) {
		if (level >= 100) {
			return Math.min(hpMax, hpBase + ([4,4,4,5,6,7,7,8,8,9][Math.floor(hpBase/10)] || 9));
		}
		return hpBase;
	},
	getScaledStat: function(statBase,statMax,level) {
		return statBase + Math.floor((statMax - statBase)*level/99);
	},
	getLBASSlotDefault: function(type) {
		if ([SEAPLANE,CARRIERSCOUT,CARRIERSCOUT2,FLYINGBOAT,LANDSCOUT].includes(type)) return 4;
		if ([LANDBOMBERL].includes(type)) return 9;
		return 18;
	},
	
	isShipIdPlayable: function(shipid) {
		shipid = +shipid;
		return (shipid < 1500 || (shipid >= 9001 && shipid <= 9003));
	},
	isShipIdKanmusu: function(id) {
		return +id < 1500;
	},
	isShipIdAbyssal: function(id) {
		return +id > 1500 && +id < 3000;
	},
	isShipIdArpeggio: function(id) {
		return +id > 9000 && +id < this.consts.customShipsStartId;
	},
	isShipIdCustom: function(id) {
		return +id >= this.consts.customShipsStartId;
	},
	isEquipIdAbyssal: function(id) {
		return +id > 500;
	},
	isEquipIdCustom: function(id) {
		return +id >= this.consts.customEquipmentsStartId;
	},

	getShipImagePath: function(id) {
		if (!id) return 'assets/icons/Kblank.png';
		if (!SHIPDATA[id]) return 'assets/icons/Kblank.png';
		if (SHIPDATA[id].customImage) return SHIPDATA[id].customImage;
		return 'assets/icons/' + SHIPDATA[id].image;
	},

	FLEET_TYPES: [
		{ key: 0, display: "Single Fleet" },
		{ key: 1, display: "Carrier Task Force" },
		{ key: 2, display: "Surface Task Force" },
		{ key: 3, display: "Transport Escort Force" },
		{ key: 7, display: "Strike Force" },
	],

    NODE_TYPES: {

        // --- Node type model
        NODE_MODEL: {
            type: 0,
            ambush: false,
            night2: false,
            nightToDay2: false,
            aironly: false,
            raid: false,
            resource: 0,
            amount: null,
            dropoff: false,
        },

        // --- Battle nodes
        NORMAL_BATTLE_NODE: {
            type: 1,
        },

        SUBMARINE_BATTLE_NODE: {
            type: 1,
			subonly: true,
        },
        
        AMBUSH_NODE: {
            type: 1,
            ambush: true,
        },

        // --- Night battle nodes
        NIGHT_NODE: {
            type: 1,
            night2: true,
        },

        NIGHT_TO_DAY_NODE: {
            type: 1,
            nightToDay2: true,
        },

        // --- Air battle / air raid nodes
        AIR_BATTLE_NODE: {
            type: 1,
            aironly: true,
        },

        AIR_RAID_NODE: {
            type: 1,
            raid: true,
        },

        // --- Empty nodes
        START_POINT: {
            type: 0,
        },

        EMPTY_NODE: {
            type: 3,
        },

        ANCHOR_EMPTY_NODE: {
            type: 3,
            dropoff: true,
        },

        REPAIR_NODE: {
            type: 3,
			repair: true,
        },

        // --- Ressource nodes
        RESOURCE_GAIN_NODE: {
            type: 2,
            resource: 0,
            amount: [0],
        },

        RESOURCE_LOSS_NODE: {
            type: 4,
            resource: 0,
            amount: [0],
        },

        ANCHOR_RESOURCE_NODE: {
            type: 2,
            resource: 0,
            dropoff: true,
        },
    },

	SHIP_TYPES: [
		{ key: 'DD', display: "DD", },
		{ key: 'DE', display: "DE", },

		{ key: 'CL', display: "CL", },
		{ key: 'CLT', display: "CLT", },

		{ key: 'CA', display: "CA", },
		{ key: 'CAV', display: "CAV", },

		{ key: 'aBB', display: "(F)BB(V)", notReal: true },
		{ key: 'BB', display: "BB", },
		{ key: 'FBB', display: "FBB", },
		{ key: 'BBV', display: "BBV", },


		{ key: 'SS', display: "SS", },
		{ key: 'SSV', display: "SSV", },

		{ key: 'aCV', display: "CV(L/B)", notReal: true },
		{ key: 'CVL', display: "CVL", },
		{ key: 'CV', display: "CV", },
		{ key: 'CVB', display: "CVB", },

		{ key: 'AV', display: "AV", },
		{ key: 'LHA', display: "LHA", },
		{ key: 'AS', display: "AS", },
		{ key: 'AR', display: "AR", },
		{ key: 'AO', display: "AO", },
		{ key: 'CT', display: "CT", },
	],

	DIFFICULTIES: [
		{ key: 4, display: "Casual" },
		{ key: 1, display: "Easy" },
		{ key: 2, display: "Medium" },
		{ key: 3, display: "Hard" },
	],

	SOUND_MANAGER: new SoundManager(),

	BASIC_SHIP_CLASS: {
		18: 'Asashio-class',
		23: 'Shiratsuyu-class',
		28: 'Mutsuki-class',
		30: 'Kagerou-class',
		38: 'Yuugumo-class',
	},

	getShipClasses() {
		if (!this.SHIP_CLASSES) {
			this.SHIP_CLASSES = [];

			const ships = Object.values(SHIPDATA).sort((shipA, shipB) => shipA.nid - shipB.nid);

			for (const shipData of ships) {
				if (!shipData.sclass) continue;

				const classData = this.SHIP_CLASSES.find((classD) => shipData.sclass == classD.key);

				if (this.BASIC_SHIP_CLASS[shipData.sclass]) {
					if (!classData) {
						this.SHIP_CLASSES.push(({
							key: shipData.sclass,
							display: this.BASIC_SHIP_CLASS[shipData.sclass]
						}));
					}
				} else if (!classData) {

					this.SHIP_CLASSES.push(({
						key: shipData.sclass,
						display: shipData.name,
						ships: [shipData.name]
					}));

				} else {
					let found = false;

					for (const shipName of classData.ships) {
						if (shipData.name.includes(shipName)) {
							found = true;
							break;
						}
					}

					if (!found) {
						classData.display += ', ' +  shipData.name;
						classData.ships.push(shipData.name);
					}
				}
			}
			
		}

		return this.SHIP_CLASSES;
	},
	
	getLastCustomEquipId ()  {
		let last = this.consts.customEquipmentsStartId;

		for (const eqKey in EQDATA) {
			if (eqKey < last) continue;
			last = eqKey;
		}

		return last;
	},

	getLastCustomShipId ()  {
		let last = this.consts.customShipsStartId;

		for (const shipKey in SHIPDATA) {
			if (shipKey < last) continue;
			last = shipKey;
		}

		return last;
	},

	addCustomEquipment(equipmentData) {

		const id = equipmentData.id;
		EQDATA[id] = equipmentData;
		COMMON.global.equipSelector.addEquipment(id)
		COMMON.addEquipmentTranslation(id); 

	},

	addCustomShip(shipData) {

		const id = shipData.id;
		SHIPDATA[id] = shipData;
		COMMON.global.shipSelector.addShip(id)
		COMMON.addShipTranslation(id); 
		COMMON.reloadShip(id);

	},

	reloadShip(shipId) {
		COMMON.unsetNextShip(shipId);
		COMMON.setNextShip(shipId);
		COMMON.global.shipSelector.reloadList()
	},
	
	setNextShip(idToSet) {

		const previousShip = SHIPDATA[idToSet].prev;
		if (!previousShip) return;
		if (!SHIPDATA[previousShip]) return;
		SHIPDATA[previousShip].next = idToSet;
	},

	unsetNextShip(idToUnset) {
		for (const shipKey in SHIPDATA) {
			const shipData = SHIPDATA[shipKey];
			if (shipData.next == idToUnset) delete shipData.next;
		}
	}
};