function SoundManager() {
	this._mute = false;
	this._volume = 1;
	Howler.volume(.6);
	this._bgm = null;
	this.BGMnum = 0;
	this._sounds = {};
	this._voices = [null,null,null,null,null,null,null,null,null,null,null,null];
	this._voiceON = true;
	this._bgmON = true;
	this._sfxON = true;
	this._bgmVol = 0;
	for (name in SOUNDNAMES) {
		var vol = (SOUNDNAMES[name].voldef)? SOUNDNAMES[name].voldef : .6;
		this._sounds[name] = new Howl({src:[SOUNDNAMES[name].path],volume:vol*this._volume});
	}
}
var SOUNDNAMES = {
	'crit': { path: 'assets/sounds/49_res.sounds.battle.SE_battle_bomb3.mp3',voldef:.5 },
	'hit': { path: 'assets/sounds/50_res.sounds.battle.SE_battle_bomb2.mp3',voldef:.5 },
	'fire': { path: 'assets/sounds/51_res.sounds.battle.SE_battle_bomb1.mp3',voldef:.5 },
	'torpedo': { path: 'assets/sounds/41_res.sounds.battle.SE_battle_gyorai.mp3' },
	'planelaunch': { path: 'assets/sounds/38_res.sounds.battle.SE_battle_plane1.mp3',voldef:.5 },
	'planeatk': { path: 'assets/sounds/36_res.sounds.battle.SE_battle_shoot.mp3',voldef:1 },
	'shuttersopen': { path: 'assets/sounds/218_shuttersopen.mp3' },
	'shuttersclose': { path: 'assets/sounds/29_res.sounds.SE_frame_close.mp3' },
	'enter': { path: 'assets/sounds/48_res.sounds.battle.SE_battle_card.mp3',voldef:.45 },
	'airphase': { path: 'assets/sounds/42_res.sounds.battle.SE_battle_fannelCutIn.mp3',voldef:.5 },
	'aaci': { path: 'assets/sounds/52_res.sounds.battle.SE_Bam.mp3' },
	'text': { path: 'assets/sounds/44_res.sounds.battle.SE_battle_don.mp3' },
	'mapradar': {  path: 'assets/sounds/3_res.sounds.SE_sally_ping.mp3',voldef:.5 },
	'mapcompass': { path: 'assets/sounds/4_res.sounds.SE_sally_compass.mp3',voldef:.25 },
	'click': { path: 'assets/sounds/47_res.sounds.SE_battle_click.mp3',voldef: .5 },
	'storm': { path: 'assets/sounds/2_res.sounds.SE_sally_storm.mp3',voldef: .5 },
	'scout': { path: 'assets/sounds/19_res.sounds.map_kouku_teisatsu.mp3',voldef: .5 },
	'jet': { path: 'assets/sounds/182_res.sounds.battle.SE_battle_jet.mp3', voldef: .5 },
	'siren': { path: 'assets/sounds/75_res.sounds.siren.mp3', voldef: .5 },
	'lbasselect': { path: 'assets/sounds/224_lbasselect.mp3', voldef: .35 },
	'lbassend': { path: 'assets/sounds/227_lbassend.mp3', voldef: .35 },
	'done': { path: 'assets/sounds/41_res.sounds.SE_correct_answer3.mp3', voldef: .5 },
	'hover': { path: 'assets/sounds/242_nodehover.mp3', voldef: .5 },
	'ooyodoClear': { path: 'assets/voice/425.mp3', voldef: .5 },
	'ambush': { path: 'assets/sounds/257_ambush.mp3', voldef: .5 },
}
SoundManager.prototype = {
	play: function(name,vol,loop) {
		//if (this._mute) return undefined;
		if (!this._sfxON) return;
		this._sounds[name].play();
		return this._sounds[name];
	},
	playNew: function(path,vol) {
		if (!this._sfxON) return;
		vol = vol || .5;
		let sound = new Howl({src:[path],volume:vol*this._volume});
		sound.play();
	},
	playBGM: function(num,vol,noloop) {
		this.stopBGM();
		if (!vol) vol = (BGMLIST[num].voldef)? BGMLIST[num].voldef : .3;
		this._bgmVol = vol;
		if (!this._bgmON) vol = 0;
		this._bgm = new Howl({
			src:[BGMLIST[num].url],
			volume:vol*this._volume,
			loop:!noloop,
			html5:true
		});
		this._bgm.play();
		this.BGMnum = num;
		return this._bgm;
	},
	stopBGM: function() {
		if (!this._bgm) return;
		this._bgm.stop();
		this._bgm.unload();
		this.BGMnum = 0;
	},
	fadeBGM: function(dur) {
		if (!this._bgm) return;
		if (this.BGMnum == 0) return;
		if (!dur) dur = 2000;
		this._bgm.fade(this._bgm.volume(),0,dur);
		this.BGMnum = 0;
	},
	playVoice: function(shipid,type,slot) {
		if (!this._voiceON) return;
		if (!VOICES[shipid]) return;
		if (slot >= 10 && isPlayable(shipid)) return; //no PVP enemy voices
		// if (slot > 10) return; //want non boss voices?
		if (type=='nbattack' && !VOICES[shipid].nbattack) type = 'attack';
		if (!VOICES[shipid][type]) return;
		let path = VOICES[shipid][type];
		if (window['MAPDATA'] && window['WORLD'] && MAPDATA[WORLD] && MAPDATA[WORLD].voiceSpecial) {
			let baseId = getBaseId(shipid);
			if (MAPDATA[WORLD].voiceSpecial[baseId]) {
				path = MAPDATA[WORLD].voiceSpecial[baseId][type] || path;
			}
		}
		if (!this._sounds['V'+type+shipid] || this._sounds['V'+type+shipid]._src != path) {
			this._sounds['V'+type+shipid] = new Howl({
				src:[path],
				volume:.4*this._volume,
			});
		}
		if (this._voices[slot] && isPlayable(shipid)) {
			this._voices[slot].stop();
		}
		this._voices[slot] = this._sounds['V'+type+shipid];
		this._sounds['V'+type+shipid].play();
		return this._sounds['V'+type+shipid];
	},
	turnOffVoice: function() {
		this._voiceON = false;
		for (var snd in this._sounds) {
			if (snd[0] == 'V') this._sounds[snd].stop();
		}
	},
	turnOnVoice: function() {
		this._voiceON = true;
	},
	turnOffBGM: function() {
		this._bgmON = false;
		if (this._bgm) {
			this._bgm.volume(0);
		}
	},
	turnOnBGM: function() {
		this._bgmON = true;
		if (this._bgm && this.BGMnum) {
			this._bgm.volume(this._bgmVol);
		}
	},
	turnOffSFX: function() {
		this._sfxON = false;
		for (var snd in this._sounds) {
			if (snd[0] != 'V') this._sounds[snd].stop();
		}
	},
	turnOnSFX: function() {
		this._sfxON = true;
	},
}

var BGMLIST = {
	1: {url:'assets/music/Sound_b_bgm_1.ogg',voldef:.7},
	2: {url:'assets/music/Sound_b_bgm_2.ogg'},
	3: {url:'assets/music/Sound_b_bgm_3.ogg'},
	4: {url:'assets/music/Sound_b_bgm_4.ogg'},
	5: {url:'assets/music/Sound_b_bgm_5.ogg'},
	6: {url:'assets/music/Sound_b_bgm_6.ogg'},
	7: {url:'assets/music/Sound_b_bgm_7.ogg'},
	8: {url:'assets/music/Sound_b_bgm_8.ogg'},
	9: {url:'assets/music/Sound_b_bgm_9.ogg'},
	10: {url:'assets/music/Sound_b_bgm_10.ogg'},
	11: {url:'assets/music/Sound_b_bgm_11.ogg'},
	12: {url:'assets/music/Sound_b_bgm_12.ogg'},
	13: {url:'assets/music/Sound_b_bgm_13.ogg'},
	14: {url:'assets/music/Sound_b_bgm_14.ogg'},
	15: {url:'assets/music/Sound_b_bgm_15.ogg'},
	16: {url:'assets/music/Sound_b_bgm_16.ogg'},
	17: {url:'assets/music/Sound_b_bgm_17.ogg'},
	18: {url:'assets/music/Sound_bgm_almi.ogg'},
	19: {url:'assets/music/Sound_b_bgm_19.ogg'},
	20: {url:'assets/music/Sound_b_bgm_20.ogg'},
	21: {url:'assets/music/Sound_bgm_iron02.ogg'},
	22: {url:'assets/music/Sound_b_bgm_22.ogg'},
	23: {url:'assets/music/107b.ogg'},
	24: {url:'assets/music/savior of song.mp3',voldef:.25},
	25: {url:'assets/music/Sound_b_bgm_25.ogg'},
	26: {url:'assets/music/Sound_b_bgm_26.ogg'},
	27: {url:'assets/music/Sound_b_bgm_27.ogg'},
	28: {url:'assets/music/Sound_b_bgm_28.ogg'},
	29: {url:'assets/music/Sound_b_bgm_29.ogg'},
	30: {url:'assets/music/Sound_b_bgm_30.ogg'},
	31: {url:'assets/music/Sound_b_bgm_31.ogg'},
	32: {url:'assets/music/Sound_b_bgm_32.ogg'},
	33: {url:'assets/music/Sound_b_bgm_33.ogg'},
	34: {url:'assets/music/Sound_b_bgm_34.ogg'},
	35: {url:'assets/music/Sound_b_bgm_35.ogg'},
	36: {url:'assets/music/Sound_b_bgm_36.ogg'},
	37: {url:'assets/music/Sound_b_bgm_37.ogg',voldef:.4},
	38: {url:'assets/music/Sound_b_bgm_38.ogg'},
	39: {url:'assets/music/Sound_b_bgm_39.ogg'},
	40: {url:'assets/music/Sound_b_bgm_40.ogg'},
	41: {url:'assets/music/Sound_b_bgm_41.ogg'},
	42: {url:'assets/music/121h.ogg'},
	43: {url:'assets/music/122e.ogg'},
	44: {url:'assets/music/Sound_b_bgm_44.ogg'},
	45: {url:'assets/music/903y.ogg'},
	46: {url:'assets/music/Sound_b_bgm_46.ogg'},
	47: {url:'assets/music/Sound_b_bgm_47.ogg'},
	48: {url:'assets/music/904wNeo.ogg'},
	49: {url:'assets/music/Sound_b_bgm_49.ogg'},
	50: {url:'assets/music/Sound_b_bgm_50.ogg'},
	51: {url:'assets/music/905w.ogg'},
	52: {url:'assets/music/Sound_b_bgm_52.ogg'},
	53: {url:'assets/music/Sound_b_bgm_53.ogg'},
	54: {url:'assets/music/Sound_b_bgm_54.ogg'},
	55: {url:'assets/music/Sound_b_bgm_55.ogg'},
	56: {url:'assets/music/056_2989.mp3'},
	57: {url:'assets/music/906y.ogg'},
	58: {url:'assets/music/Sound_b_bgm_58.ogg'},
	59: {url:'assets/music/Sound_b_bgm_59.ogg'},
	60: {url:'assets/music/Sound_b_bgm_60.ogg'},
	61: {url:'assets/music/Sound_b_bgm_61.ogg'},
	62: {url:'assets/music/Sound_b_bgm_62.ogg'},
	63: {url:'assets/music/Sound_b_bgm_63.ogg'},
	64: {url:'assets/music/Sound_b_bgm_64.ogg'},
	65: {url:'assets/music/907c.ogg'},
	66: {url:'assets/music/908i.ogg'},
	67: {url:'assets/music/Sound_b_bgm_67.ogg'},
	68: {url:'assets/music/Sound_b_bgm_68.ogg'},
	69: {url:'assets/music/909q.ogg'},
	70: {url:'assets/music/Sound_b_bgm_70.ogg'},
	71: {url:'assets/music/Sound_b_bgm_71.ogg'},
	72: {url:'assets/music/Sound_b_bgm_72.ogg'},
	73: {url:'assets/music/Sound_b_bgm_73.ogg'},
	74: {url:'assets/music/125h.ogg'}, //World 6 moving BGM
	75: {url:'assets/music/Sound_b_bgm_75.ogg'},
	78: {url:'assets/music/910a.ogg'},
	79: {url:'assets/music/911d.ogg'},
	80: {url:'assets/music/Sound_b_bgm_80.ogg'},
	81: {url:'assets/music/Sound_b_bgm_81.ogg'},
	82: {url:'assets/music/Sound_b_bgm_82.ogg'},
	86: {url:'assets/music/912i.ogg'},
	87: {url:'assets/music/Sound_b_bgm_87.ogg'},
	88: {url:'assets/music/Sound_b_bgm_88.ogg'},
	89: {url:'assets/music/Sound_b_bgm_89.ogg'},
	90: {url:'assets/music/913p.ogg'},
	91: {url:'assets/music/1_res.sounds.battle.BGM_91.mp3'},
	92: {url:'assets/music/1_res.sounds.battle.BGM_92.mp3'},
	93: {url:'assets/music/1_res.sounds.battle.BGM_93.mp3'},
	94: {url:'assets/music/129w.ogg'}, //Combined Fleet Flagship
	95: {url:'assets/music/Sound_b_bgm_95.ogg',voldef:.5},
	96: {url:'assets/music/Sound_b_bgm_96.ogg'},
	97: {url:'assets/music/Sound_b_bgm_97.ogg'},
	98: {url:'assets/music/Sound_b_bgm_98.ogg',voldef:.5},
	99: {url:'assets/music/Sound_b_bgm_99.ogg'},
	100: {url:'assets/music/1_res.sounds.battle.BGM_100.mp3'},
	103: {url:'assets/music/Sound_b_bgm_103.ogg'},
	104: {url:'assets/music/Sound_b_bgm_104.ogg'},
	105: {url:'assets/music/Sound_b_bgm_105.ogg'},
	106: {url:'assets/music/Sound_b_bgm_106.ogg'},
	107: {url:'assets/music/Sound_b_bgm_107.ogg'},
	109: {url:'assets/music/1_res.sounds.battle.BGM_109.mp3'},
	110: {url:'assets/music/1_res.sounds.battle.BGM_110.mp3'},
	111: {url:'assets/music/1_res.sounds.battle.BGM_111.mp3'},
	112: {url:'assets/music/1_res.sounds.battle.BGM_112.mp3'},
	113: {url:'assets/music/1_res.sounds.battle.BGM_113.mp3'},
	114: {url:'assets/music/1_res.sounds.battle.BGM_114.mp3'},
	115: {url:'assets/music/1_res.sounds.battle.BGM_115.mp3'},
	116: {url:'assets/music/Sound_b_bgm_116.oga'},
	117: {url:'assets/music/Sound_b_bgm_117.oga'},
	118: {url:'assets/music/241e.ogg'}, //The Glistening Dew After The Rainy Season
	119: {url:'assets/music/Sound_b_bgm_119.ogg'},
	120: {url:'assets/music/Sound_b_bgm_120.ogg'},
	121: {url:'assets/music/Sound_b_bgm_121.oga'},
	122: {url:'assets/music/Sound_b_bgm_122.ogg'},
	123: {url:'assets/music/Sound_b_bgm_123.ogg'},
	124: {url:'assets/music/Sound_b_bgm_124.ogg'},
	126: {url:'assets/music/126_1211.mp3'},
	127: {url:'assets/music/127_8537.mp3'},
	128: {url:'assets/music/128_9964.mp3'},
	129: {url:'assets/music/129_5256.mp3'},
	130: {url:'assets/music/130_1852.mp3'},
	131: {url:'assets/music/131_5644.mp3'},
	134: {url:'assets/music/134_6700.mp3'},
	135: {url:'assets/music/135_9137.mp3'},
	136: {url:'assets/music/136_9930.mp3'},
	137: {url:'assets/music/137_4546.mp3'},
	138: {url:'assets/music/138_7637.mp3'},
	139: {url:'assets/music/139_2402.mp3'},
	140: {url:'assets/music/140_5320.mp3'},
	141: {url:'assets/music/141_1429.mp3'},
	142: {url:'assets/music/142_9842.mp3'},
	143: {url:'assets/music/143_3169.mp3'},
	144: {url:'assets/music/144_4686.mp3'},
	145: {url:'assets/music/145_6045.mp3'},
	146: {url:'assets/music/146_9676.mp3'},
	147: {url:'assets/music/147_9528.mp3'},
	148: {url:'assets/music/148_5310.mp3'},
	149: {url:'assets/music/149_8521.mp3'},
	150: {url:'assets/music/150_8788.mp3'},
	151: {url:'assets/music/151_6187.mp3'},
	152: {url:'assets/music/152_8689.mp3'},
	153: {url:'assets/music/153_7501.mp3'},
	154: {url:'assets/music/154_2672.mp3'},
	155: {url:'assets/music/155_2953.mp3'},
	156: {url:'assets/music/156_9422.mp3'},
	157: {url:'assets/music/157_5537.mp3'},
	158: {url:'assets/music/158_2983.mp3'},
	159: {url:'assets/music/159_5667.mp3'},
	160: {url:'assets/music/160_3283.mp3'},
	163: {url:'assets/music/163_2860.mp3'},
	164: {url:'assets/music/164_9631.mp3'},
	165: {url:'assets/music/165_8834.mp3'},
	166: {url:'assets/music/166_9168.mp3'},
	167: {url:'assets/music/167_1546.mp3'},
	168: {url:'assets/music/168_9629.mp3'},
	169: {url:'assets/music/169_2813.mp3'},
	173: {url:'assets/music/173_7192.mp3'},
	174: {url:'assets/music/174_7617.mp3'},
	175: {url:'assets/music/175_5742.mp3'},
	176: {url:'assets/music/176_8914.mp3'},
	177: {url:'assets/music/177_6528.mp3'},
	178: {url:'assets/music/178_7302.mp3'},
	179: {url:'assets/music/179_8932.mp3'},
	180: {url:'assets/music/180_1246.mp3'},
	181: {url:'assets/music/181_2515.mp3'},
	182: {url:'assets/music/182_5230.mp3'},
	183: {url:'assets/music/183_2551.mp3'},
	184: {url:'assets/music/184_5603.mp3'},
	185: {url:'assets/music/185_2650.mp3'},
	186: {url:'assets/music/186_8660.mp3'},
	187: {url:'assets/music/187_2537.mp3'},
	999: {url:'assets/music/Orel Cruising & LSC Song [ENG Sub].mp3',voldef:.3},
	1000: {url: 'assets/music/bossold1.mp3',voldef:.6},
	1001: {url: 'assets/music/bossold2.mp3',voldef:.6},
	2001: {url:'assets/music/103v.ogg', voldef:.7},
	3001: {url:'assets/music/Sound_se_18.ogg'},
	3002: {url:'assets/music/Sound_se_63.ogg'},
	3003: {url:'assets/music/Sound_se_52.ogg'},
	3004: {url:'assets/music/Sound_se_31.ogg'},
	3010: {url:'assets/music/BGM_Old_Fanfare_Victory.mp3'},
	3011: {url:'assets/music/BGM_Old_Fanfare_Defeat.mp3'},
};

