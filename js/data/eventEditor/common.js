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

	SOUND_MANAGER: new SoundManager(),
};