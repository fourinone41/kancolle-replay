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
		return +id > 9000;
	},
	isShipIdCustom: function(id) {
		return +id > 3000 && +id < 4000;
	},
	isEquipIdAbyssal: function(id) {
		return +id > 500;
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
		{ key: 'DD', display: "DD" },
		{ key: 'DE', display: "DE" },

		{ key: 'CL', display: "CL" },
		{ key: 'CLT', display: "CLT" },

		{ key: 'CA', display: "CA" },
		{ key: 'CAV', display: "CAV" },

		{ key: 'aBB', display: "(F)BB(V)" },
		{ key: 'BB', display: "BB" },
		{ key: 'FBB', display: "FBB" },
		{ key: 'BBV', display: "BBV" },


		{ key: 'SS', display: "SS" },
		{ key: 'SSV', display: "SSV" },

		{ key: 'aCV', display: "CV(L/B)" },
		{ key: 'CVL', display: "CVL" },
		{ key: 'CV', display: "CV" },
		{ key: 'CVB', display: "CVB" },

		{ key: 'AV', display: "AV" },
		{ key: 'LHA', display: "LHA" },
		{ key: 'AS', display: "AS" },
		{ key: 'AR', display: "AR" },
		{ key: 'AO', display: "AO" },
		{ key: 'CT', display: "CT" },
	],

	SOUND_MANAGER: new SoundManager(),
};