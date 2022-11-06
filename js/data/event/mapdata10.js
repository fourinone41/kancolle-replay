MAPDATA[10] =
	{
		name: 'KanColle Kai',
		date: '2016-02-29',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0],
		bannerImg: 'assets/maps/10/banner1.png',
		bannerImgAlt: 'assets/maps/10/banner2.png',
		unlockSpecial: [11,71,81],
		isVita: true,
		mechanicsOther: ['vita','vitaProficiency','vitaLove'],
		mechanicsDescription: `
			Vita only mechanics:
			1. NB DA has lower activation, but 2x damage multiplier. Other CI are weaker.
			2. NB attack type rolls can stack, if equip requirements met.
			3. Proficiency gives no crit bonuses (still gives air power and accuracy).
			4. Torpedo support works.
			5. Submarines can be damaged at night.
			6. Love stat: ships have a chance to take lower damage. Clear areas to increase: x4 = Lv1, x8 = Lv2, x13 = Lv3
		`,
		diffNames: {
			3: 'HISTORICAL',
			2: 'HARD',
			1: 'NORMAL',
		},
		worldMap: {
			bg: 'assets/maps/10/world.png',
			imgArea: 'assets/maps/10/map_btn.png',
			areas: {
				1: { x: 292, y: 222, r: 38, scale: .35, maps: [11,12,13,14] },
				2: { x: 220, y: 348, r: 38, scale: .35, maps: [21,22,23,24] },
				3: { x: 436, y: 138, r: 38, scale: .35, maps: [31,32,33,34] },
				4: { x: 76, y: 348, r: 38, scale: .35, maps: [41,42,43,44] },
				5: { x: 364, y: 348, r: 38, scale: .35, maps: [51,52,53,54] },
				6: { x: 436, y: 306, r: 38, scale: .35, maps: [61,62,63,64] },
				7: { x: 292, y: 306, r: 38, scale: .35, maps: [71,72,73,74] },
				8: { x: 364, y: 180, r: 38, scale: .35, maps: [81,82,83,84] },
				9: { x: 220, y: 264, r: 38, scale: .35, maps: [91,92,93,94] },
				10: { x: 148, y: 306, r: 38, scale: .35, maps: [101,102,103,104] },
				11: { x: 364, y: 264, r: 38, scale: .35, maps: [111,112,113,114] },
				12: { x: 436, y: 222, r: 38, scale: .35, maps: [121,122,123,124] },
				13: { x: 508, y: 96, r: 38, scale: .35, maps: [131,132,133,134] },
				14: { x: 436, y: 390, r: 38, scale: .35, maps: [141,142,143,144] },
				15: { x: 710, y: 210, r: 44, scale: .4, maps: [151,152,153,154] },
				16: { x: 710, y: 310, r: 44, scale: .4, maps: [161,162,163,164] },
				17: { x: 625, y: 260, r: 44, scale: .4, maps: [171,172,173,174] },
			}
		},
		disableMore: { ships: [423,448,452] },
		enableMore: { ships: [440] },
		overrideStats: {
			1508: { TACC: 30 },
			1521: { TACC: 40 },
			1530: { TACC: 20 },
			1531: { TACC: 25 },
			1532: { TACC: 30 },
			1533: { TACC: 30 },
			1534: { TACC: 35 },
			1535: { TACC: 40 },
			1554: { TACC: 25 },
			1555: { TACC: 25 },
			1559: { TACC: 60 },
			1561: { TACC: 50 },
			1562: { TACC: 65 },
			1566: { TACC: 65 },
			1570: { TACC: 50 },
			1571: { TACC: 60 },
			1572: { TACC: 70 },
			1575: { TACC: 45 },
			1576: { TACC: 55 },
			1577: { TACC: 65 },
			1578: { TACC: 75 },
			1591: { TACC: 50 },
			1592: { TACC: 60 },
			1594: { TACC: 60 },
			1595: { TACC: 70 },
			1621: { TACC: 50 },
			1622: { TACC: 60 },
			1623: { TACC: 70 },
			1624: { TACC: 80 },
		},
		maps: {
			11: {
				name: 'Naval District Sea',
				nameT: '1',
				fleetTypes: [0],
				bgmMap: 42,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 2,
				bgmNB: 2,
				bossnode: 3,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 128,
						y: 141,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 248,
						y: 172,
						compDiff: {
							3: {'1':60,'2':40},
							2: {'3':50,'4':25,'5':25},
							1: {'6':25,'7':25,'8':25,'9':25},
							
						},
						routeC: function(ships) {
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3) return 'C';
							return (Math.random() < .35)? 'B' : 'C';
						}
					},
					'B': {
						type: 1,
						x: 373,
						y: 90,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'3':50,'4':25,'5':25},
							1: {'6':30,'7':30,'8':30,'9':10},
							
						},
						end: true
					},
					'C': {
						type: 1,
						x: 352,
						y: 246,
						boss: true,
						compDiff: {
							3: {'1':40,'2':60},
							2: {'3':50,'4':30,'5':20},
							1: {'6':25,'7':30,'8':30,'9':15},
							
						},
						end: true
					},
				}
			},
			12: {
				name: 'Naval District Sea',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [11],
				bgmMap: 42,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 2,
				bgmNB: 2,
				bossnode: 4,
				hpmode: 1,
				bossHP: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 128,
						y: 141,
						routeC: function(ships) {
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 4) return 'B';
							return (Math.random() < .4)? 'A' : 'B';
						}
					},
					'A': {
						type: 2,
						x: 283,
						y: 232,
						resource: 2,
						amount: [10],
						route: 'C'
					},
					'B': {
						type: 1,
						x: 332,
						y: 122,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'3':40,'4':30,'5':30},
							1: {'6':25,'7':25,'8':25,'9':25},
							
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 401,
						y: 309,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'3':40,'4':30,'5':30},
							1: {'6':30,'7':30,'8':20,'9':20},
							
						},
						end: true
					},
					'D': {
						type: 1,
						x: 486,
						y: 94,
						boss: true,
						compDiff: {
							3: {'1':35,'2':65},
							2: {'3':40,'4':30,'5':30},
							1: {'6':30,'7':30,'8':30,'9':10},
							
						},
						end: true
					},
				}
			},
			13: {
				name: 'Naval District Sea',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [12],
				bgmMap: 42,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 2,
				bgmNB: 2,
				bossnode: 7,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 128,
						y: 141,
						routeR: { 'A': .35, 'B': .65 }
					},
					'A': {
						type: 4,
						x: 237,
						y: 241,
						resource: 1,
						lostMax: 0.1,
						routeC: function(ships) {
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 2) return 'D';
							return (Math.random() < .7)? 'D' : 'C';
						}
					},
					'B': {
						type: 1,
						x: 292,
						y: 88,
						compDiff: {
							3: {'1':40,'2':60},
							2: {'3':35,'4':35,'5':30},
							1: {'6':30,'7':40,'8':20,'9':10},
							
						},
						route: 'F'
					},
					'C': {
						type: 1,
						x: 337,
						y: 321,
						compDiff: {
							3: {'1':40,'2':60},
							2: {'3':35,'4':35,'5':30},
							1: {'6':30,'7':40,'8':20,'9':10},
							
						},
						route: 'E'
					},
					'D': {
						type: 2,
						x: 398,
						y: 225,
						resource: 1,
						amount: [20],
						route: 'E'
					},
					'E': {
						type: 1,
						x: 462,
						y: 335,
						compDiff: {
							3: {'1':60,'2':40},
							2: {'3':40,'4':30,'5':30},
							1: {'6':30,'7':30,'8':30,'9':10},
							
						},
						end: true
					},
					'F': {
						type: 2,
						x: 484,
						y: 162,
						resource: 1,
						amount: [10],
						routeC: function(ships) {
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 4) return 'G';
							return (Math.random() < .7)? 'G' : 'D';
						}
					},
					'G': {
						type: 1,
						x: 614,
						y: 312,
						boss: true,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'3':40,'4':35,'5':25},
							1: {'6':50,'7':30,'8':10,'9':10},
							
						},
						end: true
					},
				}
			},
			14: {
				name: 'Naval District Sea',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [13],
				bgmMap: 31,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 10,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 116,
						y: 239,
						routeR: { 'A': .3, 'B': .3, 'C': .4 }
					},
					'A': {
						type: 1,
						x: 235,
						y: 82,
						compDiff: {
							3: {'1':60,'2':40},
							2: {'3':30,'4':30,'5':40},
							1: {'6':50,'7':30,'8':10,'9':10},
							
						},
						route: 'D'
					},
					'B': {
						type: 2,
						x: 263,
						y: 261,
						resource: 2,
						amount: [10],
						route: 'E'
					},
					'C': {
						type: 1,
						x: 278,
						y: 196,
						compDiff: {
							3: {'1':60,'2':40},
							2: {'3':30,'4':30,'5':40},
							1: {'6':40,'7':30,'8':20,'9':10},
							
						},
						route: 'D'
					},
					'D': {
						type: 2,
						x: 383,
						y: 124,
						resource: 4,
						amount: [10],
						routeR: { 'F': .5, 'H': .5 }
					},
					'E': {
						type: 2,
						x: 393,
						y: 257,
						resource: 4,
						amount: [10],
						route: 'G'
					},
					'F': {
						type: 1,
						x: 500,
						y: 190,
						compDiff: {
							3: {'1':35,'2':65},
							2: {'3':35,'4':35,'5':30},
							1: {'6':40,'7':40,'8':10,'9':10},
							
						},
						route: 'J'
					},
					'G': {
						type: 1,
						x: 521,
						y: 275,
						compDiff: {
							3: {'1':35,'2':65},
							2: {'3':35,'4':35,'5':30},
							1: {'6':40,'7':40,'8':10,'9':10},
							
						},
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 3) return 'J';
							return (Math.random() < .55)? 'J': 'I';
						}
					},
					'H': {
						type: 2,
						x: 559,
						y: 93,
						resource: 3,
						amount: [10],
						route: 'J'
					},
					'I': {
						type: 1,
						x: 700,
						y: 312,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'3':35,'4':35,'5':30},
							1: {'6':30,'7':30,'8':30,'9':10},
							
						},
						end: true
					},
					'J': {
						type: 1,
						x: 655,
						y: 182,
						boss: true,
						compDiff: {
							3: {'1':40,'2':60},
							2: {'3':40,'4':35,'5':25},
							1: {'6':40,'7':30,'8':20,'9':10},
							
						},
						end: true
					},
				}
			},
			21: {
				name: 'Nansei Islands',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [94],
				bgmMap: 42,
				bgmDN: 11,
				bgmNN: 2,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 9,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 180,
						y: 131,
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 4) return 'B';
							if (ships.CV + ships.CVB) return 'C';
							if (ships.aCV >= 3) return 'C';
							if (ships.CL && ships.DD >= 3) return 'B';
							if (ships.aBB + ships.CV + ships.CVB >= 2 && Math.random() < .35) return 'A';
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'A';
							if (ships.speed <= 5) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 4,
						x: 95,
						y: 218,
						resource: 1,
						lostMax: 0.2,
						route: 'B'
					},
					'B': {
						type: 1,
						x: 276,
						y: 311,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':15,'6':5},
							1: {'5':20,'6':25,'7':25,'8':30},
							
						},
						route: 'F'
					},
					'C': {
						type: 1,
						x: 288,
						y: 169,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'2':15,'3':30,'4':30,'5':15,'6':10},
							1: {'5':10,'6':20,'7':35,'8':35},
							
						},
						route: 'E'
					},
					'D': {
						type: 3,
						x: 296,
						y: 89,
						end: true
					},
					'E': {
						type: 4,
						x: 386,
						y: 143,
						resource: 1,
						lostMax: 0.2,
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV >= 6) return 'D';
							this.showLoSPlane = 'G';
							return checkELoS33(getELoS33(1,3),{ 43: 'G', 40: 'D' });
						}
					},
					'F': {
						type: 1,
						x: 399,
						y: 319,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':25,'4':35,'5':40},
							1: {'5':15,'6':30,'7':30,'8':25},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB) return 'E';
							if (ships.speed <= 5) return 'E';
							return 'H';
						}
					},
					'G': {
						type: 1,
						x: 468,
						y: 86,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'5':10,'6':20,'7':40,'8':30},
							
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB) return 'H';
							if (ships.aCV >= 3) return 'H';
							return 'I';
						}
					},
					'H': {
						type: 1,
						x: 515,
						y: 168,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'3':30,'4':35,'5':20,'6':15},
							1: {'5':10,'6':20,'7':40,'8':30},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV >= 5) return 'J';
							this.showLoSPlane = 'I';
							return checkELoS33(getELoS33(1,3),{ 13: 'I', 12: 'J' });
						}
					},
					'I': {
						type: 1,
						x: 631,
						y: 124,
						boss: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':10,'6':10,'7':40,'8':40},
							
						},
						end: true
					},
					'J': {
						type: 3,
						x: 649,
						y: 226,
						end: true
					},
				}
			},
			22: {
				name: 'Nansei Islands',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [21],
				bgmMap: 42,
				bgmDN: 11,
				bgmNN: 2,
				bgmDB: 21,
				bgmNB: 21,
				bossnode: 8,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.FBB + ships.BB + ships.BBV) errors.push('No (F)BB(V)');
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 106,
						y: 99,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 183,
						y: 184,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':20,'4':40,'5':20},
							1: {'4':5,'5':10,'6':20,'7':45,'8':20},
							
						},
						routeC: function(ships) {
							let num = ships.CAV + ships.aCV + ships.BBV + ships.AV;
							if (num >= 3) return 'C';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3 && ships.CA <= 2) return 'B';
							if (num >= 2) return 'C';
							if (ships.CL && ships.DD >= 4) return 'B';
							return 'C';
						}
					},
					'B': {
						type: 3,
						x: 269,
						y: 220,
						route: 'D'
					},
					'C': {
						type: 1,
						x: 296,
						y: 127,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':20,'4':40,'5':40},
							1: {'4':5,'5':10,'6':25,'7':30,'8':15,'9':15},
							
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 363,
						y: 213,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':25,'3':25,'4':25,'5':25},
							1: {'4':5,'5':15,'6':30,'7':50},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CA + ships.CAV + ships.CLT >= 3) return 'F';
							if (ships.aCV) return 'F';
							if (ships.CL && ships.DD >= 4) return 'E';
							return 'F';
						}
					},
					'E': {
						type: 2,
						x: 444,
						y: 263,
						resource: 1,
						amount: [20],
						route: 'H'
					},
					'F': {
						type: 1,
						x: 472,
						y: 154,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'3':30,'4':30,'5':30,'6':10},
							1: {'5':10,'6':15,'7':50,'8':25},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV >= 4) return 'G';
							this.showLoSPlane = 'H';
							return checkELoS33(getELoS33(1,3),{ 26: 'H', 25: 'G' });
						}
					},
					'G': {
						type: 3,
						x: 564,
						y: 85,
						end: true
					},
					'H': {
						type: 1,
						x: 539,
						y: 271,
						boss: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':25,'4':35,'5':40},
							1: {'5':15,'6':25,'7':45,'8':15},
							
						},
						end: true
					},
				}
			},
			23: {
				name: 'Nansei Islands',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [22],
				bgmMap: 30,
				bgmDN: 8,
				bgmNN: 2,
				bgmDB: 21,
				bgmNB: 21,
				bossnode: 10,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 353,
						y: 82,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'E';
							if (ships.SS + ships.SSV >= 4) return 'E';
							if (ships.CL && ships.DD >= 3) return 'B';
							return (Math.random() < .4)? 'E' : 'B';
						}
					},
					'A': {
						type: 2,
						x: 111,
						y: 210,
						resource: 2,
						amount: [20],
						end: true
					},
					'B': {
						type: 1,
						x: 264,
						y: 152,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'6':15,'7':30,'8':40,'9':15},
							
						},
						routeC: function(ships) {
							if (ships.BBV >= 2) return 'A';
							if (ships.CL && ships.DD >= 3) return 'C';
							if (ships.CA + ships.CAV >= 2 && ships.DD >= 2) return 'C';
							return (Math.random() < .35)? 'A' : 'C';
						}
					},
					'C': {
						type: 1,
						x: 353,
						y: 234,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':25,'4':35,'5':30,'6':10},
							1: {'6':20,'7':30,'8':35,'9':15},
							
						},
						route: 'D'
					},
					'D': {
						type: 4,
						x: 357,
						y: 304,
						resource: 1,
						lostMax: 0.2,
						route: 'F'
					},
					'E': {
						type: 1,
						x: 402,
						y: 154,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':25,'4':30,'5':35,'6':10},
							1: {'6':20,'7':30,'8':50},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'C';
							if (ships.CV + ships.CVB) return 'C';
							if (ships.SS + ships.SSV >= 4) return 'C';
							if (ships.DD <= 2) return 'C';
							return 'G';
						}
					},
					'F': {
						type: 1,
						x: 446,
						y: 319,
						night: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':10,'6':20,'7':40,'8':30},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV >= 4) return 'H';
							this.showLoSPlane = 'J';
							return checkELoS33(getELoS33(1,3),{ 32: 'J', 30: 'H' });
						}
					},
					'G': {
						type: 1,
						x: 478,
						y: 204,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'2':20,'3':20,'4':20,'5':20,'6':20},
							1: {'5':15,'6':20,'7':35,'8':30},
							
						},
						routeC: function(ships) {
							let num = ships.aBB + ships.CV + ships.CVB;
							if (num >= 6) return 'H';
							let r = Math.random();
							if (num == 5 && r < .75) return 'H';
							if (num == 4 && r < .5) return 'H';
							if (ships.SS + ships.SSV >= 5) return 'H';
							return 'J';
						}
					},
					'H': {
						type: 3,
						x: 561,
						y: 344,
						end: true
					},
					'I': {
						type: 4,
						x: 580,
						y: 151,
						resource: 1,
						lostMax: 0.2,
						end: true
					},
					'J': {
						type: 1,
						x: 593,
						y: 242,
						boss: true,
						compDiff: {
							3: {'1':30,'2':35,'3':35},
							2: {'2':10,'3':20,'4':30,'5':30,'6':10},
							1: {'5':15,'6':25,'7':30,'8':30},
							
						},
						end: true
					},
				}
			},
			24: {
				name: 'Nansei Islands',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [23],
				bgmMap: 31,
				bgmDN: 8,
				bgmNN: 2,
				bgmDB: 46,
				bgmNB: 46,
				bossnode: 12,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 248,
						y: 82,
						routeC: function(ships) {
							let num = ships.aBB + ships.CV + ships.CVB;
							if (num >= 4) return 'D';
							if (ships.CV + ships.CVB) return 'D';
							if (ships.SS + ships.SSV >= 3) return 'A';
							if (ships.speed <= 5) return 'D';
							if (ships.CL && ships.DD >= 3) return 'A';
							if (num >= 3 && Math.random() < .5) return 'D';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 193,
						y: 210,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'4':10,'5':15,'6':30,'7':25,'8':20},
							
						},
						route: 'B'
					},
					'B': {
						type: 2,
						x: 212,
						y: 285,
						resource: 3,
						amount: [20],
						route: 'C'
					},
					'C': {
						type: 1,
						x: 314,
						y: 325,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'2':10,'3':20,'4':35,'5':35},
							1: {'5':10,'6':20,'7':30,'8':20,'9':20},
							
						},
						route: 'H'
					},
					'D': {
						type: 1,
						x: 330,
						y: 146,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'5':10,'6':25,'7':40,'8':25},
							
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 430,
						y: 200,
						compDiff: {
							3: {'1':30,'2':35,'3':20,'4':15},
							2: {'3':20,'4':30,'5':35,'6':15},
							1: {'5':10,'6':20,'7':30,'8':40},
							
						},
						route: 'H'
					},
					'F': {
						type: 3,
						x: 440,
						y: 350,
						end: true
					},
					'G': {
						type: 4,
						x: 447,
						y: 109,
						resource: 1,
						lostMax: 0.2,
						routeC: function(ships) {
							let num = ships.aBB + ships.CV + ships.CVB;
							if (num >= 4) return 'J';
							if (ships.CV + ships.CVB >= 2) return 'J';
							if (ships.DD >= 2) return 'E';
							if (num <= 2 && ships.CL) return 'E';
							if (ships.CA + ships.CAV >= 4 && ships.CL) return 'E';
							if (ships.CA + ships.CAV >= 3 && ships.DD) return 'E'
							return 'J';
						}
					},
					'H': {
						type: 1,
						x: 450,
						y: 268,
						night: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':30,'4':30,'5':25,'6':15},
							1: {'5':10,'6':15,'7':40,'8':35},
							
						},
						routeLC: 3,
						routeL: { 35: 'L', 33: 'F' }
					},
					'I': {
						type: 1,
						x: 522,
						y: 221,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':25,'4':25,'5':15,'6':15},
							1: {'5':15,'6':25,'7':30,'8':30},
							
						},
						routeLC: 3,
						routeL: { 43: 'L', 40: 'K' }
					},
					'J': {
						type: 1,
						x: 550,
						y: 133,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'2':15,'3':35,'4':30,'5':20},
							1: {'5':15,'6':25,'7':30,'8':30},
							
						},
						route: 'I'
					},
					'K': {
						type: 3,
						x: 635,
						y: 219,
						end: true
					},
					'L': {
						type: 1,
						x: 562,
						y: 310,
						boss: true,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'3':25,'4':45,'5':30},
							1: {'5':15,'6':25,'7':30,'8':30},
							
						},
						end: true
					},
				}
			},
			31: {
				name: 'North Sea',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [84],
				bgmMap: 18,
				bgmDN: 19,
				bgmNN: 2,
				bgmDB: 14,
				bgmNB: 14,
				bossnode: 6,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 85,
						y: 225,
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 3) return 'C'
							return (Math.random() < .7)? 'C' : 'A';
						}
					},
					'A': {
						type: 1,
						x: 156,
						y: 162,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':35,'4':25,'5':20},
							1: {'5':15,'6':30,'7':30,'8':25},
							
						},
						routeC: function(ships) {
							if (ships.AV) return 'B';
							return (Math.random() < .5)? 'B' : 'D';
						}
					},
					'B': {
						type: 2,
						x: 162,
						y: 68,
						resource: 3,
						amount: [40],
						end: true
					},
					'C': {
						type: 1,
						x: 174,
						y: 309,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':35,'4':25,'5':20},
							1: {'5':15,'6':30,'7':50,'8':5},
							
						},
						routeC: function(ships) {
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 2) return 'F';
							if (ships.aBB + ships.CV + ships.CVB <= 0 && ships.DD >= 2) return 'F';
							if (isShipInList(ship.ids,445)) return 'F';
							return (Math.random() < .6)? 'F' : 'E';
						}
					},
					'D': {
						type: 1,
						x: 250,
						y: 141,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':20,'4':25,'5':20,'6':15},
							1: {'5':5,'6':15,'7':40,'8':40},
							
						},
						end: true
					},
					'E': {
						type: 1,
						x: 294,
						y: 308,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':15,'3':25,'4':35,'5':15,'6':10},
							1: {'4':10,'5':10,'6':20,'7':40,'8':20},
							
						},
						end: true
					},
					'F': {
						type: 1,
						x: 265,
						y: 206,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':30,'4':30,'5':30,'6':10},
							1: {'4':5,'5':5,'6':20,'7':70},
							
						},
						end: true
					},
				}
			},
			32: {
				name: 'North Sea',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [31],
				bgmMap: 18,
				bgmDN: 19,
				bgmNN: 2,
				bgmDB: 14,
				bgmNB: 14,
				bossnode: 8,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 85,
						y: 225,
						routeC: function(ships) {
							if (ships.DD <= 3) return 'A';
							if (ships.DD <= 4) return 'C';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 4) {
								return (Math.random() < .25)? 'C' : 'B';
							}
							if (ships.DD >= 6) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 119,
						y: 134,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'2':10,'3':35,'4':35,'5':10,'6':10},
							1: {'5':40,'6':40,'7':10,'8':10},
							
						},
						route: 'D'
					},
					'B': {
						type: 1,
						x: 182,
						y: 297,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':15,'6':5},
							1: {'5':30,'6':30,'7':20,'8':20},
							
						},
						route: 'E'
					},
					'C': {
						type: 4,
						x: 205,
						y: 197,
						resource: 1,
						lostMax: 0.3,
						routeC: function(ships) {
							if (ships.DD <= 3) return 'D';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 4) return 'E';
							return 'D';
						}
					},
					'D': {
						type: 2,
						x: 206,
						y: 85,
						resource: 3,
						amount: [50],
						route: 'F'
					},
					'E': {
						type: 1,
						x: 283,
						y: 301,
						compDiff: {
							3: {'1':30,'2':35,'3':35},
							2: {'3':25,'4':50,'5':25},
							1: {'5':20,'6':40,'7':40},
							
						},
						routeC: function(ships) {
							if (ships.DD >= 6) return 'H';
							if (ships.CL && ships.DD >= 5 && Math.random() < .5) return 'H';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 4 && Math.random() < .9) return 'H';
							return 'G';
						}
					},
					'F': {
						type: 1,
						x: 325,
						y: 83,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':40},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						end: true
					},
					'G': {
						type: 1,
						x: 375,
						y: 163,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':20,'3':15,'4':35,'5':30},
							1: {'4':20,'5':35,'6':20,'7':25},
							
						},
						end: true
					},
					'H': {
						type: 1,
						x: 412,
						y: 255,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':35,'4':40,'5':25},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						end: true
					},
				}
			},
			33: {
				name: 'North Sea',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [32],
				bgmMap: 18,
				bgmDN: 23,
				bgmNN: 2,
				bgmDB: 15,
				bgmNB: 15,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 85,
						y: 225,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 182,
						y: 297,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':25,'3':30,'4':20,'5':15,'6':10},
							1: {'5':15,'6':20,'7':30,'8':35},
							
						},
						routeC: function(ships) {
							if (ships.aCV >= 3) return 'B';
							return (Math.random() < .5)? 'C' : 'D';
						}
					},
					'B': {
						type: 4,
						x: 223,
						y: 203,
						resource: 1,
						lostMax: 0.3,
						route: 'E'
					},
					'C': {
						type: 1,
						x: 307,
						y: 261,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':20,'4':30,'5':20,'6':10},
							1: {'4':5,'5':5,'6':20,'7':40,'8':30},
							
						},
						routeR: { 'F': .5, 'H': .5 }
					},
					'D': {
						type: 4,
						x: 336,
						y: 315,
						resource: 1,
						lostMax: 0.4,
						route: 'H'
					},
					'E': {
						type: 1,
						x: 386,
						y: 132,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':25,'4':35,'5':10,'6':10},
							1: {'4':5,'5':10,'6':20,'7':40,'8':25},
							
						},
						route: 'G'
					},
					'F': {
						type: 4,
						x: 464,
						y: 163,
						resource: 1,
						lostMax: 0.3,
						route: 'K'
					},
					'G': {
						type: 1,
						x: 484,
						y: 113,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'5':10,'6':20,'7':40,'8':30},
							
						},
						end: true
					},
					'H': {
						type: 1,
						x: 486,
						y: 259,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':40,'4':40},
							1: {'5':10,'6':20,'7':40,'8':30},
							
						},
						routeC: function(ships) {
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 4) return 'K';
							if (ships.CL && ships.DD >= 2 && Math.random() < .8) return 'K';
							if (ships.aBB <= 0 && ships.CL && Math.random() < .7) return 'K';
							if (Math.random() < .5) return 'J';
							if (Math.random() < .5) return 'I';
							return 'K';
						}
					},
					'I': {
						type: 2,
						x: 615,
						y: 316,
						resource: 10,
						amount: [1],
						end: true
					},
					'J': {
						type: 2,
						x: 628,
						y: 245,
						resource: 8,
						amount: [1],
						end: true
					},
					'K': {
						type: 1,
						x: 589,
						y: 161,
						boss: true,
						compDiff: {
							3: {'1':30,'2':35,'3':35},
							2: {'3':30,'4':40,'5':30},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						end: true
					},
				}
			},
			34: {
				name: 'North Sea',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [33],
				bgmMap: 48,
				bgmDN: 14,
				bgmNN: 2,
				bgmDB: 15,
				bgmNB: 15,
				bossnode: 10,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 99,
						y: 293,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB) return 'B';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 1,
						x: 165,
						y: 167,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':5,'5':15,'6':25,'7':40,'8':15},
							
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 240,
						y: 335,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'4':5,'5':15,'6':25,'7':35,'8':15,'9':5},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'D';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 2) return 'E';
							if (ships.CL && ships.DD >= 3) return 'E';
							if (ships.aCV <= 2 && Math.random() < .5) return 'E';
							return 'D';
						}
					},
					'C': {
						type: 1,
						x: 293,
						y: 127,
						subonly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':10,'6':20,'7':30,'8':25,'9':15},
							
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,445) && ships.DD >= 2) return 'H';
							if (ships.aBB + ships.CA + ships.CAV + ships.CLT >= 4) return 'D';
							if (ships.aCV >= 3) return 'D';
							if (ships.speed <= 5) return 'D';
							if (ships.CL && ships.DD >= 2) return 'H';
							if (ships.DD >= 4) return 'H';
							return 'D';
						}
					},
					'D': {
						type: 1,
						x: 310,
						y: 222,
						subonly: true,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':30,'5':30,'6':20,'7':20},
							
						},
						route: 'E'
					},
					'E': {
						type: 3,
						x: 354,
						y: 319,
						routeS: ['F','G']
					},
					'F': {
						type: 1,
						x: 448,
						y: 264,
						compDiff: {
							3: {'1':60,'2':20,'3':20},
							2: {'2':10,'3':25,'4':30,'5':20,'6':15},
							1: {'5':5,'6':15,'7':40,'8':40},
							
						},
						route: 'J'
					},
					'G': {
						type: 1,
						x: 462,
						y: 346,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'2':20,'3':20,'4':30,'5':20,'6':10},
							1: {'5':5,'6':15,'7':40,'8':40},
							
						},
						route: 'J'
					},
					'H': {
						type: 1,
						x: 496,
						y: 76,
						compDiff: {
							3: {'1':25,'2':35,'3':40},
							2: {'3':30,'4':35,'5':35},
							1: {'4':5,'5':10,'6':20,'7':40,'8':25},
							
						},
						route: 'I'
					},
					'I': {
						type: 1,
						x: 664,
						y: 136,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':30,'4':30,'5':40},
							1: {'5':5,'6':15,'7':30,'8':50},
							
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 577,
						y: 274,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':25,'6':15},
							1: {'5':10,'6':20,'7':40,'8':30},
							
						},
						end: true
					},
				}
			},
			41: {
				name: 'West Sea',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [104,114],
				bgmMap: 39,
				bgmDN: 39,
				bgmNN: 2,
				bgmDB: 40,
				bgmNB: 40,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 599,
						y: 315,
						routeC: function(ships) {
							if (ships.CV + ships.CVB) return 'A';
							if (ships.SS + ships.SSV <= 1) return 'C';
							if (ships.aCV >= 2) return 'A';
							return 'C';
						}
					},
					'A': {
						type: 1,
						x: 645,
						y: 217,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':25,'4':35,'5':40},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						route: 'B'
					},
					'B': {
						type: 3,
						x: 509,
						y: 170,
						routeS: ['D','E']
					},
					'C': {
						type: 3,
						x: 491,
						y: 287,
						route: 'F'
					},
					'D': {
						type: 1,
						x: 430,
						y: 97,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':30,'6':10},
							1: {'5':30,'6':40,'7':30},
							
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 382,
						y: 225,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':40},
							1: {'5':30,'6':30,'7':40},
							
						},
						route: 'G'
					},
					'F': {
						type: 3,
						x: 370,
						y: 310,
						routeS: ['E','H']
					},
					'G': {
						type: 1,
						x: 325,
						y: 133,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						routeC: function(ships) {
							let los;
							if (ships.DD == 1) {
								los = { 39: 'K', 37: 'I' };
							} else if (ships.DD >= 2) {
								los = { 29: 'K', 28: 'I' };
							} else {
								los = { 49: 'K', 46: 'I' };
							}
							return checkELoS33(getELoS33(1,3),los);
						}
					},
					'H': {
						type: 4,
						x: 245,
						y: 320,
						resource: 1,
						lostMax: 0.3,
						route: 'J'
					},
					'I': {
						type: 3,
						x: 240,
						y: 91,
						end: true
					},
					'J': {
						type: 1,
						x: 186,
						y: 284,
						compDiff: {
							3: {'1':50,'2':40,'3':10},
							2: {'3':35,'4':35,'5':30},
							1: {'5':25,'6':30,'7':30,'8':15},
							
						},
						route: 'E'
					},
					'K': {
						type: 1,
						x: 191,
						y: 194,
						boss: true,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'5':30,'6':30,'7':40},
							
						},
						end: true
					},
				}
			},
			42: {
				name: 'West Sea',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [41],
				bgmMap: 42,
				bgmDN: 39,
				bgmNN: 2,
				bgmDB: 40,
				bgmNB: 40,
				bossnode: 10,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.BB + ships.BBV) errors.push('No BB(V)');
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 660,
						y: 243,
						routeC: function(ships) {
							let num = ships.aBB + ships.CA + ships.CAV + ships.CLT;
							if (num + ships.CVL >= 4) return 'A';
							if (num + ships.CVL >= 3 && ships.DD <= 0) return 'A';
							if (num >= 3 && ships.DD <= 1) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 3,
						x: 561,
						y: 152,
						route: 'C'
					},
					'B': {
						type: 1,
						x: 518,
						y: 322,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'2':10,'3':35,'4':35,'5':10,'6':10},
							1: {'5':20,'6':30,'7':25,'8':25},
							
						},
						route: 'F'
					},
					'C': {
						type: 1,
						x: 486,
						y: 230,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'5':20,'6':20,'7':30,'8':30},
							
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 465,
						y: 133,
						compDiff: {
							3: {'1':30,'2':40,'3':20,'4':10},
							2: {'3':30,'4':40,'5':20,'6':10},
							1: {'5':15,'6':30,'7':35,'8':20},
							
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 376,
						y: 98,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':35,'4':35,'5':30},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						routeLC: 3,
						routeL: { 44: 'J', 40: 'G' }
					},
					'F': {
						type: 3,
						x: 364,
						y: 286,
						routeS: ['D','H']
					},
					'G': {
						type: 3,
						x: 304,
						y: 191,
						end: true
					},
					'H': {
						type: 1,
						x: 215,
						y: 320,
						compDiff: {
							3: {'1':40,'2':30,'3':20,'4':10},
							2: {'3':40,'4':30,'5':20,'6':10},
							1: {'6':20,'7':30,'8':40,'9':10},
							
						},
						route: 'I'
					},
					'I': {
						type: 1,
						x: 174,
						y: 200,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':25,'6':15},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						routeLC: 3,
						routeL: { 24: 'J', 22: 'G' }
					},
					'J': {
						type: 1,
						x: 253,
						y: 94,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'5':15,'6':35,'7':50},
							
						},
						end: true
					},
				}
			},
			43: {
				name: 'West Sea',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [42],
				bgmMap: 43,
				bgmDN: 12,
				bgmNN: 2,
				bgmDB: 41,
				bgmNB: 41,
				bossnode: 13,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 636,
						y: 228,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'A';
							if (ships.aCV >= 2) return 'A';
							if (ships.CV + ships.CVB) return 'A';
							if (ships.DD <= 1) return 'A';
							if (ships.SS + ships.SSV >= 5) return 'A';
							if (ships.CL && ships.DD >= 3) return 'B';
							if (ships.CL && ships.DD >= 2 && ships.aBB <= 0) return 'B';
							if (ships.aBB <= 2 && Math.random() < .75) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 3,
						x: 550,
						y: 120,
						routeS: ['C','D']
					},
					'B': {
						type: 3,
						x: 529,
						y: 281,
						routeS: ['C','E']
					},
					'C': {
						type: 1,
						x: 460,
						y: 191,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':10,'6':20,'7':30,'8':40},
							
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 453,
						y: 77,
						compDiff: {
							3: {'1':30,'2':40,'3':20,'4':10},
							2: {'3':30,'4':40,'5':20,'6':10},
							1: {'5':10,'6':25,'7':30,'8':35},
							
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 438,
						y: 319,
						compDiff: {
							3: {'1':25,'2':35,'3':15,'4':25},
							2: {'3':25,'4':35,'5':15,'6':25},
							1: {'5':10,'6':20,'7':30,'8':40},
							
						},
						route: 'H'
					},
					'F': {
						type: 4,
						x: 378,
						y: 212,
						resource: 1,
						lostMax: 0.4,
						routeC: function(ships) {
							let num = ships.aBB + ships.CV + ships.CVB;
							if (num >= 5) return 'I';
							if (ships.aCV >= 4) return 'I';
							if (ships.SS + ships.SSV) return 'I';
							if (ships.speed <= 5 && num >= 3) return 'I';
							if (ships.speed <= 5 && num >= 2 && Math.random() < .75) return 'I';
							if (ships.speed <= 5 && num >= 1 && Math.random() < .5) return 'I';
							if (ships.CL && ships.DD >= 2 && ships.aBB <= 0 && ships.aCV) return 'J';
							if (ships.CL && ships.DD >= 2 && num <= 0) return 'J';
							if (ships.CL && ships.DD >= 3) return 'J';
							return 'H';
						}
					},
					'G': {
						type: 3,
						x: 348,
						y: 97,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'F';
							if (ships.aCV >= 4) return 'F';
							if (ships.SS + ships.SSV) return 'I';
							if (ships.DD >= 2) return 'F';
							if (ships.speed <= 5) return 'F';
							return 'I';
						}
					},
					'H': {
						type: 1,
						x: 338,
						y: 307,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'6':30,'7':30,'8':40},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV) return 'K';
							this.showLoSPlane = 'M';
							return checkELoS33(getELoS33(1,3),{ 59: 'M', 55: 'K' });
						}
					},
					'I': {
						type: 1,
						x: 270,
						y: 154,
						compDiff: {
							3: {'1':30,'2':30,'3':15,'4':25},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':15,'6':20,'7':35,'8':30},
							
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 264,
						y: 275,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'5':5,'6':15,'7':35,'8':45},
							
						},
						routeLC: 3,
						routeL: { 29: 'M', 27: 'L' }
					},
					'K': {
						type: 3,
						x: 250,
						y: 342,
						end: true
					},
					'L': {
						type: 3,
						x: 210,
						y: 191,
						end: true
					},
					'M': {
						type: 1,
						x: 155,
						y: 311,
						boss: true,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'2':20,'3':25,'4':25,'5':20,'6':10},
							1: {'5':10,'6':25,'7':35,'8':30},
							
						},
						end: true
					},
				}
			},
			44: {
				name: 'West Sea',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [43],
				bgmMap: 43,
				bgmDN: 40,
				bgmNN: 2,
				bgmDB: 41,
				bgmNB: 41,
				bossnode: 14,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 640,
						y: 113,
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 2) return 'B';
							if (isShipInList(ships.ids,445)) return 'B';
							return (Math.random() < .3)? 'B' : 'A';
						}
					},
					'A': {
						type: 1,
						x: 604,
						y: 250,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':30,'6':10},
							1: {'5':30,'6':40,'7':30},
							
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,445)) return 'D';
							if (ships.speed <= 5) return 'C';
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'C';
							if (ships.aCV >= 4) return 'C';
							return 'D';
						}
					},
					'B': {
						type: 1,
						x: 508,
						y: 114,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':15,'3':35,'4':35,'5':15},
							1: {'5':30,'6':40,'7':30},
							
						},
						route: 'D'
					},
					'C': {
						type: 4,
						x: 488,
						y: 309,
						resource: 1,
						lostMax: 0.5,
						route: 'F'
					},
					'D': {
						type: 3,
						x: 446,
						y: 201,
						routeS: ['F','G']
					},
					'E': {
						type: 3,
						x: 393,
						y: 325,
						end: true
					},
					'F': {
						type: 1,
						x: 363,
						y: 250,
						aironly: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':35,'4':35,'5':30},
							1: {'4':20,'5':50,'6':30},
							
						},
						routeC: function(ships) {
							let num = ships.aBB + ships.CV + ships.CVB;
							if (ships.SS + ships.SSV >= 3) return 'E';
							if (num >= 6) return 'E';
							if (ships.DD <= 0) return 'I';
							if (num == 5) return 'I';
							if (ships.aCV >= 6) return 'E';
							if (ships.aCV == 5) return 'I';
							return 'H';
						}
					},
					'G': {
						type: 1,
						x: 333,
						y: 135,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':30,'4':30,'5':30,'6':10},
							1: {'5':20,'6':30,'7':40,'8':10},
							
						},
						route: 'H'
					},
					'H': {
						type: 3,
						x: 246,
						y: 227,
						routeS: ['I','K']
					},
					'I': {
						type: 1,
						x: 243,
						y: 337,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'5':30,'6':30,'7':40},
							
						},
						routeLC: 3,
						routeL: { 54: 'N', 50: 'E' }
					},
					'J': {
						type: 2,
						x: 181,
						y: 72,
						resource: 2,
						amount: [80],
						end: true
					},
					'K': {
						type: 1,
						x: 167,
						y: 186,
						subonly: true,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'3':10,'4':10,'5':25,'6':25,'7':15,'8':15},
							
						},
						route: 'L'
					},
					'L': {
						type: 1,
						x: 111,
						y: 215,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':30,'6':40,'7':15,'8':15},
							
						},
						showLoSPlane: 'N',
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'M';
							if (Math.random() < .5) {
								if (checkELoS33(getELoS33(1,3),{ 33: 'N', 32: 'M' }) == 'M') return 'M';
							}
							return checkELoS33(getELoS33(1,3),{ 43: 'N', 40: 'J' });
						}
					},
					'M': {
						type: 3,
						x: 105,
						y: 111,
						end: true
					},
					'N': {
						type: 1,
						x: 155,
						y: 291,
						boss: true,
						compDiff: {
							3: {'1':60,'2':40},
							2: {'3':55,'4':45},
							1: {'5':50,'6':35,'7':15},
							
						},
						end: true
					},
				}
			},
			51: {
				name: 'South Sea',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [41,73],
				bgmMap: 42,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 5,
				bgmNB: 5,
				bossnode: 9,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 92,
						y: 91,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'A';
							if (ships.speed <= 5) return 'B';
							if (ships.CL && ships.DD >= 2) return 'B';
							if (ships.CL && ships.CA + ships.CAV >= 3) return 'B';
							return (Math.random() < .4)? 'B' : 'A';
						}
					},
					'A': {
						type: 4,
						x: 92,
						y: 231,
						resource: 1,
						lostMax: 0.2,
						route: 'C'
					},
					'B': {
						type: 1,
						x: 229,
						y: 170,
						compDiff: {
							3: {'1':50,'2':40,'3':10},
							2: {'2':20,'3':30,'4':30,'5':15,'6':5},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return 'E';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 2) return 'D';
							if (ships.CL && ships.DD >= 3) return 'D';
							if (ships.DD >= 4) return 'D';
							return 'E';
						}
					},
					'C': {
						type: 1,
						x: 260,
						y: 344,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'2':10,'3':20,'4':35,'5':35},
							1: {'5':10,'6':25,'7':30,'8':35},
							
						},
						route: 'E'
					},
					'D': {
						type: 2,
						x: 399,
						y: 125,
						resource: 3,
						amount: [20],
						routeC: function(ships) {
							let numDrum = 0;
							for (let ship of FLEETS1[0].ships) {
								numDrum += ship.equips.filter(eq => eq.type == DRUM).length;
							}
							if (numDrum >= 3) return 'F';
							if (ships.BBV >= 2) return 'F';
							if (ships.CAV >= 2) return 'F';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3) return 'G';
							if (ships.CL && ships.DD >= 4) return 'G';
							if (ships.DD >= 5) return 'G';
							return (Math.random() < .4)? 'F' : 'G';
						}
					},
					'E': {
						type: 1,
						x: 421,
						y: 277,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':25,'6':15},
							1: {'5':25,'6':25,'7':30,'8':20},
							
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 549,
						y: 132,
						compDiff: {
							3: {'1':30,'2':35,'3':35},
							2: {'3':25,'4':50,'5':25},
							1: {'5':15,'6':30,'7':35,'8':20},
							
						},
						routeC: function(ships) {
							if (ships.BBV >= 2 && Math.random() < .6) return 'H';
							if (ships.CAV >= 2 && Math.random() < .6) return 'H';
							let numDrum = 0;
							for (let ship of FLEETS1[0].ships) {
								numDrum += ship.equips.filter(eq => eq.type == DRUM).length;
							}
							if (numDrum >= 3) return 'H';
							return (Math.random() < .4)? 'H' : 'G';
						}
					},
					'G': {
						type: 1,
						x: 552,
						y: 253,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'5':15,'6':20,'7':40,'8':25},
							
						},
						route: 'I'
					},
					'H': {
						type: 2,
						x: 652,
						y: 81,
						resource: 1,
						amount: [20],
						end: true
					},
					'I': {
						type: 1,
						x: 605,
						y: 345,
						boss: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':10,'6':15,'7':25,'8':25,'9':25},
							
						},
						end: true
					},
				}
			},
			52: {
				name: 'South Sea',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [51],
				bgmMap: 42,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 6,
				bgmNB: 6,
				bossnode: 10,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 126,
						y: 269,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 232,
						y: 237,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'4':10,'5':20,'6':30,'7':40},
							
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB == 2 && ships.CL == 1) return 'B';
							return 'C';
						}
					},
					'B': {
						type: 1,
						x: 281,
						y: 112,
						compDiff: {
							3: {'1':40,'2':30,'3':15,'4':15},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'5':20,'6':25,'7':25,'8':30},
							
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB == 2 && ships.CVL == 1 && ships.aBB <= 2) return 'F';
							return 'D';
						}
					},
					'C': {
						type: 1,
						x: 325,
						y: 333,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'2':10,'3':20,'4':35,'5':20,'6':15},
							1: {'5':15,'6':30,'7':30,'8':25},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'G';
							if (ships.speed <= 5) return 'G';
							return 'D';
						}
					},
					'D': {
						type: 1,
						x: 419,
						y: 252,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':20,'3':15,'4':35,'5':30},
							1: {'4':20,'5':20,'6':20,'7':20,'8':20},
							
						},
						routeC: function(ships) {
							if (ships.CV + ship.CVB <= 2 && ships.CVL >= 1 && ships.aBB <= 2) return 'E';
							let numDrum = 0;
							for (let ship of FLEETS1[0].ships) {
								numDrum += ship.equips.filter(eq => eq.type == DRUM).length;
							}
							if (numDrum >= 3) return 'H';
							return (Math.random() < .3)? 'E' : 'H';
						}
					},
					'E': {
						type: 4,
						x: 437,
						y: 156,
						resource: 1,
						lostMax: 0.2,
						route: 'J'
					},
					'F': {
						type: 1,
						x: 461,
						y: 71,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':40},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						route: 'J'
					},
					'G': {
						type: 1,
						x: 488,
						y: 345,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':20,'3':15,'4':35,'5':30},
							1: {'4':15,'5':25,'6':25,'7':25,'8':10},
							
						},
						routeC: function(ships) {
							let numDrum = 0;
							for (let ship of FLEETS1[0].ships) {
								numDrum += ship.equips.filter(eq => eq.type == DRUM).length;
							}
							if (numDrum >= 3) return 'H';
							if (ships.CL && ships.DD >= 3) return 'H';
							if (ships.DD >= 4) return 'H';
							return 'I';
						}
					},
					'H': {
						type: 2,
						x: 567,
						y: 255,
						resource: 4,
						amount: [20],
						route: 'I'
					},
					'I': {
						type: 1,
						x: 640,
						y: 337,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'5':25,'6':30,'7':30,'8':15},
							
						},
						end: true
					},
					'J': {
						type: 1,
						x: 605,
						y: 67,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':40},
							1: {'5':20,'6':25,'7':35,'8':20},
							
						},
						end: true
					},
				}
			},
			53: {
				name: 'South Sea',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [52],
				bgmMap: 4,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 5,
				bgmNB: 5,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 107,
						y: 106,
						route: 'B'
					},
					'A': {
						type: 4,
						x: 188,
						y: 316,
						resource: 1,
						lostMax: 0.2,
						end: true
					},
					'B': {
						type: 3,
						x: 245,
						y: 90,
						routeC: function(ships) {
							if (ships.speed <= 5 && Math.random() < .75) return 'D';
							return 'F';
						}
					},
					'C': {
						type: 2,
						x: 275,
						y: 291,
						resource: 2,
						amount: [20],
						routeC: function(ships) {
							if (ships.DD >= 2) return 'K';
							return (Math.random() < .25)? 'K' : 'A';
						}
					},
					'D': {
						type: 1,
						x: 343,
						y: 172,
						night: true,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':20,'5':30,'6':30,'7':20},
							
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 384,
						y: 334,
						night: true,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'2':10,'3':20,'4':35,'5':35},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						route: 'C'
					},
					'F': {
						type: 1,
						x: 405,
						y: 165,
						night: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'2':25,'3':25,'4':20,'5':20,'6':10},
							1: {'5':20,'6':20,'7':20,'8':40},
							
						},
						route: 'G'
					},
					'G': {
						type: 3,
						x: 512,
						y: 231,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'J';
							if (ships.CV + ships.CVB) return 'J';
							if (ships.aCV >= 2) return 'J';
							if (ships.CA + ships.CAV >= 2 && ships.CL) return 'I';
							let r = Math.random();
							if (r < .1) return 'J';
							if (r < .4) return 'I';
							return 'C';
						}
					},
					'H': {
						type: 3,
						x: 533,
						y: 341,
						routeC: function(ships) {
							if (ships.speed <= 5) return 'E';
							if (ships.aBB + ships.CV + ships.CVB) return 'E';
							if (ships.CA + ships.CAV >= 4 && ships.CL == 1 && ships.DD == 1) return 'C';
							if (ships.CL && ships.DD >= 3) return 'C';
							if (ships.DD >= 4) return 'C';
							return 'E';
						}
					},
					'I': {
						type: 1,
						x: 602,
						y: 279,
						night: true,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'3':35,'4':35,'5':30},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						route: 'H'
					},
					'J': {
						type: 1,
						x: 612,
						y: 174,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':15,'6':25,'7':30,'8':30},
							
						},
						end: true
					},
					'K': {
						type: 1,
						x: 194,
						y: 203,
						boss: true,
						compDiff: {
							3: {'1':30,'2':35,'3':35},
							2: {'3':20,'4':30,'5':40,'6':10},
							1: {'6':10,'7':30,'8':60},
							
						},
						end: true
					},
				}
			},
			54: {
				name: 'South Sea',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [53,74],
				bgmMap: 5,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 22,
				bgmNB: 22,
				bossnode: 15,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 149,
						y: 123,
						routeC: function(ships) {
							if (ships.aCV >= 2) return 'D';
							if (ships.speed <= 5) return 'B';
							if (ships.CL && ships.DD >= 2) return 'A';
							if (ships.DD >= 3) return 'A';
							if (ships.aBB <= 1) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 193,
						y: 253,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'4':10,'5':25,'6':30,'7':35},
							
						},
						route: 'C'
					},
					'B': {
						type: 3,
						x: 219,
						y: 174,
						route: 'E'
					},
					'C': {
						type: 1,
						x: 277,
						y: 299,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':25,'4':35,'5':20,'6':20},
							1: {'5':15,'6':20,'7':30,'8':35},
							
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 282,
						y: 77,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'4':10,'5':20,'6':25,'7':35,'8':10},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'H';
							if (ships.speed <= 5) return 'H';
							if (ships.aBB >= 3) return 'H';
							return 'G';
						}
					},
					'E': {
						type: 1,
						x: 304,
						y: 209,
						night: true,
						compDiff: {
							3: {'1':25,'2':30,'3':30,'4':15},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'4':10,'5':20,'6':25,'7':25,'8':20},
							
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 368,
						y: 234,
						night: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':30,'4':30,'5':30,'6':10},
							1: {'5':10,'6':20,'7':70},
							
						},
						route: 'I'
					},
					'G': {
						type: 3,
						x: 399,
						y: 127,
						route: 'L'
					},
					'H': {
						type: 4,
						x: 414,
						y: 67,
						resource: 1,
						lostMax: 0.3,
						route: 'L'
					},
					'I': {
						type: 3,
						x: 451,
						y: 272,
						routeC: function(ships) {
							if (ships.speed <= 5) return 'J';
							if (ships.CL && ships.DD >= 2) return 'K';
							if (ships.DD >= 3) return 'K';
							if (ships.aBB <= 1) return 'K';
							return 'J';
						}
					},
					'J': {
						type: 1,
						x: 479,
						y: 341,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':25,'6':15},
							1: {'5':10,'6':20,'7':40,'8':30},
							
						},
						route: 'O'
					},
					'K': {
						type: 2,
						x: 524,
						y: 273,
						resource: 1,
						amount: [20],
						route: 'O'
					},
					'L': {
						type: 1,
						x: 545,
						y: 93,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':10,'6':20,'7':35,'8':35},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = 'M';
							let numDrum = 0;
							for (let ship of FLEETS1[0].ships) {
								numDrum += ship.equips.filter(eq => eq.type == DRUM).length;
							}
							if (numDrum >= 3 && ships.DD >= 2) this.showLoSPlane = 'K';
							if (checkELoS33(getELoS33(1,3),{ 43: 'X', 40: 'N' }) == 'N') return 'N';
							if (this.showLoSPlane == 'K') return 'K';
							return checkELoS33(getELoS33(1,3),{ 54: 'M', 50: 'N' });
						}
					},
					'M': {
						type: 1,
						x: 618,
						y: 224,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':20,'4':25,'5':25,'6':10},
							1: {'5':20,'6':25,'7':30,'8':25},
							
						},
						route: 'O'
					},
					'N': {
						type: 3,
						x: 651,
						y: 179,
						end: true
					},
					'O': {
						type: 1,
						x: 633,
						y: 309,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'5':15,'6':25,'7':60},
							
						},
						end: true
					},
				}
			},
			61: {
				name: 'Central Sea',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [52],
				bgmMap: 20,
				bgmDN: 20,
				bgmNN: 20,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 120,
						y: 205,
						routeC: function(ships) {
							if (ships.aBB + ships.aCV + ships.CA + ships.CAV >= 4) return 'B';
							if (ships.aBB >= 2) return 'B';
							if (ships.SS + ships.SSV >= 3 && ships.SS + ships.SSV >= ships.total) return 'A';
							if (ships.AS && ships.SS + ships.SSV == 3 && ships.DD == 2) return 'A';
							if (ships.AS && ships.SS + ships.SSV == 4 && ships.DD + ships.CL == 1) return 'A';
							if (ships.AS && ships.SS + ships.SSV >= 3 && ships.SS + ships.SSV == ships.total-1) return 'A';
							if (ships.DD + ships.CL <= 0) return 'B';
							return 'C';
						}
					},
					'A': {
						type: 3,
						x: 227,
						y: 149,
						routeC: function(ships) {
							if (ships.AS) return 'F';
							return 'D';
						}
					},
					'B': {
						type: 3,
						x: 237,
						y: 300,
						end: true
					},
					'C': {
						type: 1,
						x: 291,
						y: 212,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':15,'6':25,'7':25,'8':25,'9':10},
							
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 337,
						y: 86,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':35,'4':25,'5':20},
							1: {'5':25,'6':30,'7':20,'8':25},
							
						},
						route: 'F'
					},
					'E': {
						type: 3,
						x: 349,
						y: 290,
						end: true
					},
					'F': {
						type: 1,
						x: 381,
						y: 164,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':35,'4':25,'5':20},
							1: {'5':30,'6':30,'7':20,'8':20},
							
						},
						route: 'G'
					},
					'G': {
						type: 3,
						x: 428,
						y: 244,
						routeC: function(ships) {
							if (ships.aBB + ships.aCV + ships.CA + ships.CAV >= 3) return 'I';
							if (ships.SS + ships.SSV <= 2 && Math.random() < .35) return 'I';
							return 'H';
						}
					},
					'H': {
						type: 1,
						x: 476,
						y: 321,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':25,'4':35,'5':40},
							1: {'5':15,'6':25,'7':30,'8':30},
							
						},
						showLoSPlane: 'K',
						routeC: function(ships) {
							if (checkELoS33(getELoS33(1,3),{ 9: 'K', 7: 'E' }) == 'E') return 'E';
							if (ships.AS) return 'K';
							if (checkELoS33(getELoS33(1,3),{ 14: 'K', 10: 'J' }) == 'K') return 'K';
							if (ships.SS + ships.SSV <= 3 && ships.DD <= 1 && Math.random() < .35) return 'J';
							if (ships.SS + ships.SSV <= 2 && ships.DD <= 1 && Math.random() < .7) return 'J';
							return 'K';
						}
					},
					'I': {
						type: 1,
						x: 493,
						y: 104,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':40},
							1: {'5':30,'6':30,'7':40},
							
						},
						end: true
					},
					'J': {
						type: 1,
						x: 641,
						y: 323,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'3':35,'4':30,'5':20,'6':15},
							1: {'5':30,'6':30,'7':40},
							
						},
						end: true
					},
					'K': {
						type: 1,
						x: 652,
						y: 221,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':25,'6':15},
							1: {'5':15,'6':25,'7':40,'8':20},
							
						},
						end: true
					},
				}
			},
			62: {
				name: 'Central Sea',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [61],
				bgmMap: 51,
				bgmDN: 25,
				bgmNN: 2,
				bgmDB: 26,
				bgmNB: 26,
				bossnode: 8,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 105,
						y: 210,
						routeC: function(ships) {
							let num = ships.aBB + ships.CV + ships.CVB;
							let r = Math.random();
							if (num >= 5) return 'B';
							if (r < .2) return 'A';
							if (num >= 4) return 'B';
							if (r < .35) return 'A';
							if (ships.DD <= 0) return 'B';
							if (ships.CL && ships.DD >= 2) return 'A';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 1,
						x: 210,
						y: 203,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'4':10,'5':20,'6':30,'7':25,'8':15},
							
						},
						routeC: function(ships) {
							if (ships.aCV >= 5) return 'B';
							if (ships.CV + ships.CVB >= 3) return 'B';
							if (ships.SS + ships.SSV >= 5) return 'B';
							return 'C';
						}
					},
					'B': {
						type: 3,
						x: 268,
						y: 310,
						end: true
					},
					'C': {
						type: 1,
						x: 281,
						y: 143,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':15,'6':20,'7':25,'8':25,'9':15},
							
						},
						routeC: function(ships) {
							let num = ships.aBB + ships.CV + ships.CVB;
							if (ships.aCV <= 0 && ships.CL && ships.DD >= 2 && num <= 2) return 'E';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3 && ships.CA + ships.CAV == 1 && ships.CL + ships.CLT + ships.CT == 1) return 'E';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3 && ships.CA + ships.CAV == 2) return 'E';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 2 && isShipInList(ships.ids,445)) return 'E';
							if (ships.CL && ships.DD >= 3 && num <= 1) return 'E';
							return 'D';
						}
					},
					'D': {
						type: 1,
						x: 381,
						y: 281,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':40},
							1: {'5':10,'6':25,'7':30,'8':35},
							
						},
						routeC: function(ships) {
							let r = Math.random();
							let num = ships.aBB + ships.CV + ships.CVB;
							if (num >= 4 && r < .6) return 'F';
							if (num >= 3 && r < .3) return 'F';
							if (ships.DD <= 0) return 'F';
							if (ships.CL <= 0) return 'F';
							return 'E';
						}
					},
					'E': {
						type: 1,
						x: 424,
						y: 114,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':25,'4':35,'5':40},
							1: {'6':25,'7':30,'8':30,'9':15},
							
						},
						routeLC: 3,
						routeL: { 14: 'H', 12: 'G' }
					},
					'F': {
						type: 1,
						x: 551,
						y: 329,
						subonly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':15,'6':20,'7':25,'8':25,'9':15},
							
						},
						end: true
					},
					'G': {
						type: 3,
						x: 595,
						y: 78,
						end: true
					},
					'H': {
						type: 1,
						x: 558,
						y: 206,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':35,'4':40,'5':25},
							1: {'5':25,'6':35,'7':40},
							
						},
						end: true
					},
				}
			},
			63: {
				name: 'Central Sea',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [62],
				bgmMap: 8,
				bgmDN: 8,
				bgmNN: 2,
				bgmDB: 26,
				bgmNB: 26,
				bossnode: 10,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 88,
						y: 214,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 204,
						y: 191,
						routeS: ['B','C']
					},
					'B': {
						type: 1,
						x: 234,
						y: 121,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':35,'4':25,'5':20},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 275,
						y: 274,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':10,'6':15,'7':35,'8':25,'9':15},
							
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 322,
						y: 103,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':10,'5':25,'6':30,'7':20,'8':15},
							
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 370,
						y: 185,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'2':10,'3':20,'4':35,'5':35},
							1: {'5':15,'6':20,'7':30,'8':35},
							
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,445)) return 'G';
							if (ships.AV >= 2) return 'F';
							if (ships.CL <= 1 && ships.DD >= 3) return 'G';
							if (ships.CL >= 3) return 'F';
							return (Math.random() < .4)? 'G' : 'F';
						}
					},
					'F': {
						type: 1,
						x: 468,
						y: 294,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':25,'4':35,'5':25,'6':15},
							1: {'5':20,'6':25,'7':30,'8':25},
							
						},
						route: 'H'
					},
					'G': {
						type: 2,
						x: 486,
						y: 162,
						resource: 6,
						amount: [1],
						route: 'H'
					},
					'H': {
						type: 2,
						x: 588,
						y: 240,
						resource: 4,
						amount: [50],
						routeLC: 3,
						routeL: { 29: 'J', 27: 'I' }
					},
					'I': {
						type: 3,
						x: 631,
						y: 312,
						end: true
					},
					'J': {
						type: 1,
						x: 646,
						y: 153,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':15,'6':30,'7':25,'8':30},
							
						},
						end: true
					},
				}
			},
			64: {
				name: 'Central Sea',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [63],
				bgmMap: 31,
				bgmDN: 27,
				bgmNN: 2,
				bgmDB: 28,
				bgmNB: 28,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 113,
						y: 202,
						routeC: function(ships) {
							let num = ships.aBB + ships.CV + ships.CVB;
							if (ships.CL && ships.DD >= 4) return 'B';
							if (ships.CVL + ships.CAV + ships.AV + ships.LHA >= 2) return 'C';
							if (ships.SS + ships.SSV >= 5) return 'C';
							if (num >= 5) return 'B';
							if (Math.random() < .35) return 'C';
							if (num >= 4) return 'B';
							return 'C';
						}
					},
					'A': {
						type: 3,
						x: 180,
						y: 301,
						end: true
					},
					'B': {
						type: 1,
						x: 228,
						y: 145,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':25,'4':35,'5':25,'6':15},
							1: {'5':10,'6':15,'7':40,'8':35},
							
						},
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 3) return 'D';
							if (ships.aCV >= 3) return 'C';
							if (ships.aBB <= 0 && Math.random() < .3) return 'D';
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 262,
						y: 243,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':25,'4':35,'5':20,'6':20},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 6) return 'A';
							let num = ships.aBB + ships.CV + ships.CVB;
							if (num >= 5) return 'A';
							if (num + ships.CA + ships.CAV >= 6) return 'A';
							if (num + ships.SS + ships.SSV >= 6) return 'A';
							if (ships.aCV >= 3) return 'D';
							if (ships.aCV + ships.aBB >= 3) return 'D';
							return 'E';
						}
					},
					'D': {
						type: 4,
						x: 395,
						y: 129,
						resource: 1,
						lostMax: 0.5,
						routeC: function(ships) {
							if (ships.DD <= 2) return 'F';
							if (ships.DD + ships.CL >= 6) return 'H';
							if (ships.aBB + ships.aCV) return 'F';
							if (ships.DD + ships.CL == 5) return 'H';
							return 'F';
						}
					},
					'E': {
						type: 3,
						x: 397,
						y: 318,
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.aBB >= 2) return 'F';
							if (ships.aCV >= 2) return 'F';
							if (ships.aBB + ships.aCV >= 3) return 'F';
							if (ships.DD <= 1) return 'F';
							if (ships.SS + ships.SSV >= 5) return 'F';
							this.showLoSPlane = 'J';
							return checkELoS33(getELoS33(1,3),{ 49: 'J', 45: 'I' });
						}
					},
					'F': {
						type: 1,
						x: 407,
						y: 221,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':10,'6':20,'7':40,'8':30},
							
						},
						route: 'I'
					},
					'G': {
						type: 3,
						x: 489,
						y: 176,
						end: true
					},
					'H': {
						type: 1,
						x: 512,
						y: 99,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'2':10,'3':35,'4':35,'5':10,'6':10},
							1: {'5':15,'6':25,'7':25,'8':35},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV >= 4) return 'G';
							this.showLoSPlane = 'K';
							return checkELoS33(getELoS33(1,3),{ 14: 'K', 13: 'G' });
						}
					},
					'I': {
						type: 1,
						x: 532,
						y: 257,
						compDiff: {
							3: {'1':30,'2':35,'3':35},
							2: {'2':10,'3':20,'4':30,'5':30,'6':10},
							1: {'5':10,'6':20,'7':25,'8':45},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV >= 4) return 'G';
							this.showLoSPlane = 'K';
							return checkELoS33(getELoS33(1,3),{ 39: 'K', 36: 'G' });
						}
					},
					'J': {
						type: 1,
						x: 610,
						y: 260,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':30,'4':30,'5':30,'6':10},
							1: {'4':10,'5':15,'6':25,'7':35,'8':15},
							
						},
						route: 'K'
					},
					'K': {
						type: 1,
						x: 654,
						y: 115,
						boss: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':20,'6':20,'7':30,'8':30},
							
						},
						end: true
					},
				}
			},
			71: {
				name: 'South Anchorage Sea',
				nameT: '1',
				fleetTypes: [0],
				bgmMap: 42,
				bgmDN: 37,
				bgmNN: 2,
				bgmDB: 52,
				bgmNB: 52,
				bossnode: 9,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.total > ships.DD + ships.CL + ships.CT + ships.CVL) errors.push('DD/CL/CT/CVL only');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 355,
						y: 237,
						routeR: { 'A': .5, 'B': .5 }
					},
					'A': {
						type: 1,
						x: 339,
						y: 319,
						subonly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'4':10,'5':10,'6':25,'7':25,'8':30},
							
						},
						route: 'C'
					},
					'B': {
						type: 3,
						x: 253,
						y: 305,
						route: 'E'
					},
					'C': {
						type: 3,
						x: 482,
						y: 340,
						route: 'D'
					},
					'D': {
						type: 1,
						x: 612,
						y: 260,
						subonly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':10,'6':15,'7':35,'8':30,'9':10},
							
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 145,
						y: 257,
						subonly: true,
						compDiff: {
							3: {'1':30,'2':25,'3':25,'4':10,'5':10},
							2: {'2':20,'3':20,'4':20,'5':20,'6':10,'7':10},
							1: {'6':30,'7':30,'8':30,'9':10},
							
						},
						route: 'F'
					},
					'F': {
						type: 3,
						x: 161,
						y: 147,
						routeLC: 3,
						routeL: { 5: 'H', 4.99: 'J' }
					},
					'G': {
						type: 1,
						x: 590,
						y: 174,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'6':20,'7':40,'8':40},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.CL >= 5) return 'K';
							this.showLoSPlane = 'I';
							return (getELoS33(1,3) < 5)? 'K' : 'I';
						}
					},
					'H': {
						type: 1,
						x: 330,
						y: 88,
						subonly: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'5':15,'6':15,'7':40,'8':30},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.CL <= 1) return 'I';
							if (ships.CL >= 4) return 'J';
							this.showLoSPlane = 'G';
							return (getELoS33(1,3) < 3)? 'J' : 'G';
						}
					},
					'I': {
						type: 1,
						x: 546,
						y: 101,
						subonly: true,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'2':10,'3':25,'4':25,'5':30,'6':10},
							1: {'6':15,'7':35,'8':50},
							
						},
						end: true
					},
					'J': {
						type: 3,
						x: 258,
						y: 200,
						end: true
					},
					'K': {
						type: 3,
						x: 648,
						y: 125,
						end: true
					},
				}
			},
			72: {
				name: 'South Anchorage Sea',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [71],
				bgmMap: 42,
				bgmDN: 8,
				bgmNN: 2,
				bgmDB: 6,
				bgmNB: 6,
				bossnode: 9,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 247,
						y: 184,
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 4) return 'B';
							if (ships.CLT >= 2) return 'B';
							if (ships.CV + ships.CVB >= 3) return 'B';
							if (ships.aBB >= 3) return 'B';
							if (ships.aBB + ships.CV + ships.CVB + ships.CA + ships.CAV + ships.CLT >= 5) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 336,
						y: 240,
						compDiff: {
							3: {'1':25,'2':30,'3':30,'4':15},
							2: {'2':10,'3':25,'4':25,'5':20,'6':20},
							1: {'6':15,'7':40,'8':45},
							
						},
						routeC: function(ships) {
							if (ships.CL == 2 && ships.DD == 4) return 'D';
							if (ships.CL == 1 && ships.DD >= 4 && ships.speed >= 10) return 'D';
							if (ships.CAV == 1 && ships.CL == 1 && ships.DD == 3 && ships.speed >= 10) return 'D';
							if (ships.CAV == 2 && ships.CL == 1 && ships.DD == 3) return 'D';
							return 'F';
						}
					},
					'B': {
						type: 4,
						x: 210,
						y: 108,
						resource: 1,
						lostMax: 0.2,
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 5) return 'J';
							if (ships.aBB + ships.CV + ships.CVB + ships.CA + ships.CAV + ships.CLT >= 6) return 'J';
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 360,
						y: 113,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':15,'5':10},
							2: {'2':15,'3':25,'4':25,'5':25,'6':10},
							1: {'6':20,'7':40,'8':40},
							
						},
						route: 'F'
					},
					'D': {
						type: 3,
						x: 247,
						y: 307,
						route: 'E'
					},
					'E': {
						type: 1,
						x: 423,
						y: 285,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'6':20,'7':40,'8':30,'9':10},
							
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 469,
						y: 201,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'2':15,'3':25,'4':25,'5':20,'6':15},
							1: {'6':15,'7':40,'8':45},
							
						},
						routeC: function(ships) {
							if (ships.CLT >= 2) return 'H';
							if (ships.CV + ships.CVB >= 2) return 'H';
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'H';
							if (ships.DD <= 0) return 'H';
							return 'G';
						}
					},
					'G': {
						type: 1,
						x: 557,
						y: 328,
						compDiff: {
							3: {'1':20,'2':30,'3':30,'4':10,'5':10},
							2: {'2':10,'3':20,'4':30,'5':30,'6':10},
							1: {'6':25,'7':40,'8':35},
							
						},
						routeLC: 3,
						routeL: { 15: 'I', 14.99: 'L' }
					},
					'H': {
						type: 1,
						x: 565,
						y: 134,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':10,'3':25,'4':35,'5':30},
							1: {'6':20,'7':40,'8':40},
							
						},
						routeLC: 3,
						routeL: { 21: 'I', 20: 'K' }
					},
					'I': {
						type: 1,
						x: 638,
						y: 210,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':10,'5':10},
							2: {'2':10,'3':25,'4':25,'5':25,'6':15},
							1: {'6':10,'7':50,'8':40},
							
						},
						end: true
					},
					'J': {
						type: 3,
						x: 108,
						y: 192,
						end: true
					},
					'K': {
						type: 3,
						x: 645,
						y: 94,
						end: true
					},
					'L': {
						type: 3,
						x: 659,
						y: 276,
						end: true
					},
				}
			},
			73: {
				name: 'South Anchorage Sea',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [72],
				bgmMap: 31,
				bgmDN: 8,
				bgmNN: 2,
				bgmDB: 6,
				bgmNB: 6,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 103,
						y: 152,
						routeR: { 'A': .5, 'C': .5 }
					},
					'A': {
						type: 3,
						x: 236,
						y: 112,
						route: 'B'
					},
					'B': {
						type: 1,
						x: 350,
						y: 178,
						compDiff: {
							3: {'1':25,'2':50,'3':25},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':25,'9':5},
							
						},
						routeC: function(ships) {
							let num = ships.aBB + ships.CV + ships.CVB;
							if (num >= 3) return 'G';
							if (num + ships.CA + ships.CAV >= 4) return 'G';
							if (ships.DD + ships.CL <= 0) return 'G';
							return 'F';
						}
					},
					'C': {
						type: 1,
						x: 315,
						y: 273,
						compDiff: {
							3: {'1':25,'2':40,'3':35},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':25,'9':5},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.aBB + ships.CV + ships.CVB >= 2) return 'B';
							if (ships.SS + ships.SSV) return 'D';
							this.showLoSPlane = 'E';
							return checkELoS33(getELoS33(1,3),{ 21: 'E', 20: 'D' });
						}
					},
					'D': {
						type: 3,
						x: 214,
						y: 313,
						end: true
					},
					'E': {
						type: 1,
						x: 419,
						y: 330,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':30},
							
						},
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 2) return 'F';
							return (Math.random() < .4)? 'F' : 'H';
						}
					},
					'F': {
						type: 3,
						x: 430,
						y: 265,
						routeS: ['G','H']
					},
					'G': {
						type: 1,
						x: 496,
						y: 150,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':25,'9':5},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV >= 2) return 'J';
							this.showLoSPlane = 'I';
							return checkELoS33(getELoS33(1,3),{ 27: 'I', 25: 'J' });
						}
					},
					'H': {
						type: 1,
						x: 544,
						y: 313,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':25,'9':5},
							
						},
						route: 'K'
					},
					'I': {
						type: 1,
						x: 614,
						y: 215,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':25,'9':5},
							
						},
						route: 'K'
					},
					'J': {
						type: 3,
						x: 630,
						y: 89,
						end: true
					},
					'K': {
						type: 1,
						x: 655,
						y: 278,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':25,'9':5},
							
						},
						end: true
					},
				}
			},
			74: {
				name: 'South Anchorage Sea',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [73],
				bgmMap: 8,
				bgmDN: 8,
				bgmNN: 2,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 10,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 139,
						y: 199,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'A';
							if (ships.CL + ships.DD >= 2) return 'B';
							if (ships.CLT <= 0) return 'B';
							return (Math.random() < .4)? 'B' : 'A';
						}
					},
					'A': {
						type: 3,
						x: 234,
						y: 207,
						routeS: ['C','D']
					},
					'B': {
						type: 1,
						x: 221,
						y: 310,
						compDiff: {
							3: {'1':25,'2':50,'3':25},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':25,'9':5},
							
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 314,
						y: 120,
						compDiff: {
							3: {'1':25,'2':50,'3':25},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':25,'9':5},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'M';
							if (ships.SS + ships.SSV >= 3) return 'M';
							return 'E';
						}
					},
					'D': {
						type: 1,
						x: 357,
						y: 274,
						compDiff: {
							3: {'1':25,'2':40,'3':35},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':25,'9':5},
							
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'F';
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'E';
							if (ships.speed <= 5 && Math.random() < .7) return 'E';
							return 'F';
						}
					},
					'E': {
						type: 1,
						x: 454,
						y: 90,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':15,'6':20,'7':35,'8':30},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = (Math.random() < .5)? 'G' : 'H';
							return checkELoS33(getELoS33(1,3),{ 38: this.showLoSPlane, 35: 'L' });
						}
					},
					'F': {
						type: 4,
						x: 474,
						y: 309,
						resource: 1,
						lostMax: 0.3,
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV >= 3) return 'K';
							this.showLoSPlane = (Math.random() < .5)? 'G' : 'I';
							return checkELoS33(getELoS33(1,3),{ 32: this.showLoSPlane, 30: 'K' });
						}
					},
					'G': {
						type: 1,
						x: 522,
						y: 207,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':25,'9':5},
							
						},
						route: 'J'
					},
					'H': {
						type: 1,
						x: 630,
						y: 142,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':25,'9':5},
							
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 629,
						y: 278,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':25,'9':5},
							
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 599,
						y: 208,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':20,'4':35,'5':45},
							1: {'6':30,'7':30,'8':40},
							
						},
						end: true
					},
					'K': {
						type: 3,
						x: 585,
						y: 333,
						end: true
					},
					'L': {
						type: 3,
						x: 636,
						y: 80,
						end: true
					},
					'M': {
						type: 3,
						x: 182,
						y: 108,
						end: true
					},
				}
			},
			81: {
				name: 'North Anchorage Sea',
				nameT: '1',
				fleetTypes: [0],
				bgmMap: 42,
				bgmDN: 19,
				bgmNN: 2,
				bgmDB: 11,
				bgmNB: 11,
				bossnode: 6,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 359,
						y: 215,
						routeR: { 'B' : .5, 'E': .5 }
					},
					'A': {
						type: 2,
						x: 112,
						y: 250,
						resource: 3,
						amount: [10],
						route: 'C'
					},
					'B': {
						type: 2,
						x: 153,
						y: 140,
						resource: 2,
						amount: [10],
						route: 'A'
					},
					'C': {
						type: 1,
						x: 284,
						y: 352,
						subonly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':20,'6':20,'7':60},
							
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 455,
						y: 302,
						compDiff: {
							3: {'1':40,'2':60},
							2: {'3':50,'4':30,'5':20},
							1: {'6':30,'7':30,'8':40},
							
						},
						route: 'F'
					},
					'E': {
						type: 1,
						x: 530,
						y: 163,
						subonly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':10,'6':20,'7':20,'8':30,'9':20},
							
						},
						routeC: function(ships) {
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 4) return 'F';
							if (ships.aBB + ships.CV + ships.CVB) return 'D';
							return (Math.random() < .4)? 'F' : 'D';
						}
					},
					'F': {
						type: 1,
						x: 654,
						y: 317,
						boss: true,
						compDiff: {
							3: {'1':40,'2':60},
							2: {'3':25,'4':30,'5':30,'6':15},
							1: {'6':30,'7':30,'8':40},
							
						},
						end: true
					},
				}
			},
			82: {
				name: 'North Anchorage Sea',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [81],
				bgmMap: 42,
				bgmDN: 7,
				bgmNN: 2,
				bgmDB: 11,
				bgmNB: 11,
				bossnode: 9,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 509,
						y: 144,
						routeR: { 'D': .5, 'F': .5 }
					},
					'A': {
						type: 3,
						x: 156,
						y: 327,
						route: 'C'
					},
					'B': {
						type: 2,
						x: 182,
						y: 258,
						resource: 2,
						amount: [10],
						route: 'A'
					},
					'C': {
						type: 1,
						x: 310,
						y: 343,
						subonly: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':20,'4':20,'5':30,'6':30},
							1: {'5':20,'6':20,'7':30,'8':30},
							
						},
						routeC: function(ships) {
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3) return 'I';
							if (ships.aBB + ships.CV + ships.CVB) return 'E';
							if (ships.CVL + ships.CAV + ships.AV + ships.LHA) return 'I';
							return (Math.random() < .35)? 'I' : 'E';
						}
					},
					'D': {
						type: 1,
						x: 352,
						y: 140,
						compDiff: {
							3: {'1':35,'2':35,'3':20,'4':10},
							2: {'1':5,'2':10,'3':25,'4':25,'5':15,'6':20},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						route: 'B'
					},
					'E': {
						type: 1,
						x: 451,
						y: 253,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':5,'6':15,'7':30,'8':50},
							
						},
						route: 'I'
					},
					'F': {
						type: 1,
						x: 649,
						y: 87,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'3':20},
							2: {'3':20,'4':30,'5':30,'6':20},
							1: {'6':25,'7':40,'8':35},
							
						},
						route: 'H'
					},
					'G': {
						type: 1,
						x: 665,
						y: 322,
						compDiff: {
							3: {'1':35,'2':40,'3':25},
							2: {'3':40,'4':40,'5':20},
							1: {'5':10,'6':30,'7':40,'8':20},
							
						},
						route: 'I'
					},
					'H': {
						type: 2,
						x: 717,
						y: 219,
						resource: 2,
						amount: [10],
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB) return 'G';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3) return 'E';
							if (ships.CVL + ships.CAV + ships.AV + ships.LHA >= 2) return 'E';
							return (Math.random() < .5)? 'E' : 'G';
						}
					},
					'I': {
						type: 1,
						x: 515,
						y: 349,
						boss: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':40,'4':40,'5':20},
							1: {'6':30,'7':40,'8':30},
							
						},
						end: true
					},
				}
			},
			83: {
				name: 'North Anchorage Sea',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [82],
				bgmMap: 19,
				bgmDN: 19,
				bgmNN: 2,
				bgmDB: 8,
				bgmNB: 8,
				bossnode: 8,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 206,
						y: 244,
						routeR: { 'A': .5, 'B': .5 }
					},
					'A': {
						type: 1,
						x: 279,
						y: 342,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':25,'3':25,'4':20,'5':20,'6':10},
							1: {'6':15,'7':30,'8':40,'9':15},
							
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 354,
						y: 189,
						compDiff: {
							3: {'1':30,'2':35,'3':35},
							2: {'2':10,'3':20,'4':35,'5':35},
							1: {'6':20,'7':30,'8':40,'9':10},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB) return 'E';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3) return 'D';
							if (ships.CA && ships.CA <= 3 && ships.DD >= 2) return 'D';
							return (Math.random() < .3)? 'D' : 'E';
						}
					},
					'C': {
						type: 4,
						x: 410,
						y: 355,
						resource: 1,
						lostMax: 0.1,
						route: 'E'
					},
					'D': {
						type: 1,
						x: 472,
						y: 122,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':35,'3':35,'4':15,'5':15},
							1: {'6':20,'7':30,'8':50},
							
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 482,
						y: 274,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':10,'3':20,'4':30,'5':30,'6':10},
							1: {'6':10,'7':30,'8':60},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB) return 'F';
							let num = ships.CVL + ships.CAV + ships.AV + ships.LHA;
							if (num && num <= 2 && ships.DD >= 2) return 'G';
							if (ships.LHA && ships.DD >= 2) return 'G';
							return (Math.random() < .4)? 'G' : 'F';
						}
					},
					'F': {
						type: 1,
						x: 603,
						y: 327,
						compDiff: {
							3: {'1':35,'2':35,'3':20,'4':10},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':5,'6':10,'7':30,'8':30,'9':25},
							
						},
						route: 'H'
					},
					'G': {
						type: 2,
						x: 660,
						y: 123,
						resource: 4,
						amount: [20],
						route: 'H'
					},
					'H': {
						type: 1,
						x: 688,
						y: 273,
						boss: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'6':10,'7':40,'8':50},
							
						},
						end: true
					},
				}
			},
			84: {
				name: 'North Anchorage Sea',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [83,112],
				bgmMap: 19,
				bgmDN: 19,
				bgmNN: 2,
				bgmDB: 6,
				bgmNB: 6,
				bossnode: 9,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 104,
						y: 237,
						routeR: { 'A': .5, 'B': .5 }
					},
					'A': {
						type: 4,
						x: 219,
						y: 325,
						resource: 1,
						lostMax: 0.2,
						route: 'C'
					},
					'B': {
						type: 1,
						x: 262,
						y: 192,
						subonly: true,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'3':35,'4':35,'5':30},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB) return 'E';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3) return 'D';
							if (ships.CA && ships.CA <= 2 && ships.DD >= 3) return 'D';
							if (ships.SS + ships.SSV >= 3) return 'E';
							return (Math.random() < .25)? 'D' : 'E';
						}
					},
					'C': {
						type: 1,
						x: 373,
						y: 353,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':40,'4':40,'5':10,'6':10},
							1: {'5':20,'6':25,'7':20,'8':20,'9':15},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB) return 'E';
							if (ships.SS + ships.SSV) return 'E';
							if (ships.DD <= 1) return 'E';
							return 'F';
						}
					},
					'D': {
						type: 1,
						x: 376,
						y: 116,
						compDiff: {
							3: {'1':40,'2':60},
							2: {'3':40,'4':40,'5':10,'6':10},
							1: {'5':10,'6':20,'7':30,'8':40},
							
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 445,
						y: 234,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':35,'4':35,'5':20,'6':10},
							1: {'5':10,'6':30,'7':30,'8':30},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 2) return 'F';
							if (ships.DD >= 4) return 'G';
							if (ships.LHA && ships.DD >= 2) return 'G';
							if (ships.CL && ships.DD >= 3) return 'G';
							if (ships.SS + ships.SSV >= 2) return 'F';
							return (Math.random() < .35)? 'G' : 'F';
						}
					},
					'F': {
						type: 1,
						x: 525,
						y: 353,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'6':10,'7':20,'8':30,'9':40},
							
						},
						route: 'I'
					},
					'G': {
						type: 2,
						x: 553,
						y: 98,
						resource: 1,
						amount: [20],
						route: 'H'
					},
					'H': {
						type: 2,
						x: 691,
						y: 157,
						resource: 2,
						amount: [30],
						route: 'I'
					},
					'I': {
						type: 1,
						x: 648,
						y: 281,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':25,'4':30,'5':30,'6':15},
							1: {'6':15,'7':30,'8':55},
							
						},
						end: true
					},
				}
			},
			91: {
				name: 'South Connecting Sea',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [14],
				bgmMap: 42,
				bgmDN: 7,
				bgmNN: 2,
				bgmDB: 11,
				bgmNB: 11,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 493,
						y: 69,
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'E';
							if (ships.aCV >= 3) return 'I';
							if (ships.aCV + ships.CAV + ships.BBV + ships.AV >= 4) return 'I';
							return 'E';
						}
					},
					'A': {
						type: 1,
						x: 102,
						y: 288,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'6':20,'7':60,'8':20},
							
						},
						end: true
					},
					'B': {
						type: 2,
						x: 191,
						y: 163,
						resource: 2,
						amount: [20],
						route: 'D'
					},
					'C': {
						type: 2,
						x: 217,
						y: 349,
						resource: 1,
						amount: [20],
						route: 'F'
					},
					'D': {
						type: 4,
						x: 256,
						y: 263,
						resource: 1,
						lostMax: 0.1,
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 2) return 'A';
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'A';
							if (ships.CL <= 0) return 'A';
							return 'C';
						}
					},
					'E': {
						type: 1,
						x: 363,
						y: 143,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'6':60,'7':40},
							
						},
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 4) return 'B';
							if (ships.BBV >= 2 && ships.CL && ships.DD >= 2) return 'B';
							if (ships.LHA && ships.DD >= 2) return 'B';
							return (Math.random() < .4)? 'B' : 'F';
						}
					},
					'F': {
						type: 1,
						x: 381,
						y: 308,
						compDiff: {
							3: {'1':60,'2':40},
							2: {'3':40,'4':30,'5':20,'6':10},
							1: {'5':10,'6':20,'7':30,'8':40},
							
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'G';
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'G';
							return 'K';
						}
					},
					'G': {
						type: 1,
						x: 504,
						y: 355,
						compDiff: {
							3: {'1':45,'2':45,'3':10},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':10,'6':15,'7':30,'8':45},
							
						},
						route: 'K'
					},
					'H': {
						type: 1,
						x: 512,
						y: 209,
						compDiff: {
							3: {'1':30,'2':35,'3':35},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'6':30,'7':50,'8':20},
							
						},
						route: 'K'
					},
					'I': {
						type: 3,
						x: 593,
						y: 118,
						route: 'J'
					},
					'J': {
						type: 1,
						x: 675,
						y: 192,
						subonly: true,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'5':15,'6':15,'7':40,'8':30},
							
						},
						route: 'H'
					},
					'K': {
						type: 1,
						x: 629,
						y: 310,
						boss: true,
						compDiff: {
							3: {'1':50,'2':40,'3':10},
							2: {'3':20,'4':40,'5':40},
							1: {'6':30,'7':30,'8':40},
							
						},
						end: true
					},
				}
			},
			92: {
				name: 'South Connecting Sea',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [91],
				bgmMap: 42,
				bgmDN: 37,
				bgmNN: 2,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 9,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 154,
						y: 155,
						route: 'B'
					},
					'A': {
						type: 3,
						x: 292,
						y: 215,
						end: true
					},
					'B': {
						type: 1,
						x: 312,
						y: 88,
						subonly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':30,'4':40,'5':30},
							1: {'4':20,'5':50,'6':30},
							
						},
						route: 'E'
					},
					'C': {
						type: 1,
						x: 453,
						y: 211,
						subonly: true,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'2':10,'3':40,'4':50},
							1: {'5':10,'6':10,'7':30,'8':30,'9':20},
							
						},
						routeC: function(ships) {
							if (ships.total >= 5) return 'A';
							if (ships.SS + ships.SSV) return 'A';
							return (Math.random() < .25)? 'A' : 'I';
						}
					},
					'D': {
						type: 1,
						x: 486,
						y: 349,
						compDiff: {
							3: {'1':30,'2':35,'3':35},
							2: {'2':15,'3':15,'4':35,'5':35},
							1: {'6':20,'7':35,'8':25,'9':20},
							
						},
						end: true
					},
					'E': {
						type: 1,
						x: 511,
						y: 101,
						subonly: true,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'5':20,'6':20,'7':30,'8':30},
							
						},
						routeC: function(ships) {
							if (ships.total <= 4) return 'G';
							return (Math.random() < .5)? 'C' : 'G';
						}
					},
					'F': {
						type: 3,
						x: 530,
						y: 273,
						routeC: function(ships) {
							if (ships.total <= 3) return 'I';
							if (ships.CVL + ships.LHA == 1) return 'I';
							if (ships.AV + ships.CAV == 1) return 'I';
							return (Math.random() < .5)? 'I' : 'D';
						}
					},
					'G': {
						type: 1,
						x: 587,
						y: 181,
						subonly: true,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'2':10,'3':35,'4':55},
							1: {'5':10,'6':20,'7':25,'8':35,'7':10},
							
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'H';
							if (ships.aBB) return 'H';
							if (ships.CL + ships.CLT + ships.CT >= 3) return 'H';
							if (ships.total >= 5) return 'H';
							return 'F';
						}
					},
					'H': {
						type: 1,
						x: 594,
						y: 295,
						compDiff: {
							3: {'1':30,'2':35,'3':35},
							2: {'2':10,'3':30,'4':40,'5':20},
							1: {'6':35,'7':40,'8':25},
							
						},
						end: true
					},
					'I': {
						type: 1,
						x: 292,
						y: 301,
						subonly: true,
						boss: true,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'1':10,'2':10,'3':25,'4':25,'5':15,'6':15},
							1: {'3':10,'4':10,'5':15,'6':15,'7':30,'8':20},
							
						},
						end: true
					},
				}
			},
			93: {
				name: 'South Connecting Sea',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [92],
				bgmMap: 30,
				bgmDN: 37,
				bgmNN: 2,
				bgmDB: 8,
				bgmNB: 8,
				bossnode: 14,
				hpmode: 1,
				bossHP: 1,
				transport: 'N',
				transportCalc: function() { return 1; },
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.BB + ships.BBV) errors.push('No BB(V)');
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
					if (ships.CLT) errors.push('No CLT');
					if (ships.SS + ships.SSV) errors.push('No SS(V)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 118,
						y: 244,
						routeC: function(ships) {
							if (ships.CVL + ships.BBV + ships.CA) return 'C';
							if (ships.CAV >= 2) return 'C';
							if (ships.DD <= 3) return 'C';
							return 'A';
						}
					},
					'A': {
						type: 3,
						x: 221,
						y: 286,
						route: 'E'
					},
					'B': {
						type: 1,
						x: 238,
						y: 248,
						compDiff: {
							3: {'1':25,'2':35,'3':20,'4':20},
							2: {'2':10,'3':30,'4':30,'5':30},
							1: {'6':30,'7':30,'8':30,'9':10},
							
						},
						route: 'N'
					},
					'C': {
						type: 1,
						x: 280,
						y: 210,
						subonly: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':10,'5':10},
							2: {'2':10,'3':25,'4':25,'5':25,'6':15},
							1: {'6':30,'7':30,'8':40},
							
						},
						route: 'H'
					},
					'D': {
						type: 1,
						x: 278,
						y: 164,
						aironly: true,
						compDiff: {
							3: {'1':30,'2':50,'3':20},
							2: {'2':10,'3':25,'4':30,'5':25,'6':10},
							1: {'5':5,'6':15,'7':40,'8':40},
							
						},
						route: 'N'
					},
					'E': {
						type: 1,
						x: 318,
						y: 328,
						subonly: true,
						compDiff: {
							3: {'1':50,'2':25,'3':25},
							2: {'2':10,'3':15,'4':25,'5':25,'6':25},
							1: {'6':10,'7':40,'8':50},
							
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 335,
						y: 289,
						aironly: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':25,'4':35,'5':30,'6':10},
							1: {'5':5,'6':10,'7':30,'8':30,'9':25},
							
						},
						route: 'B'
					},
					'G': {
						type: 2,
						x: 405,
						y: 344,
						resource: 2,
						amount: [20],
						routeC: function(ships) {
							if (ships.CL == 1 && ships.DD == 5) return 'F';
							return (Math.random() < .75)? 'F' : 'K';
						}
					},
					'H': {
						type: 3,
						x: 432,
						y: 210,
						route: 'K'
					},
					'I': {
						type: 1,
						x: 432,
						y: 167,
						subonly: true,
						compDiff: {
							3: {'1':50,'2':20,'3':30},
							2: {'2':25,'3':25,'4':25,'5':25},
							1: {'4':10,'5':10,'6':30,'7':30,'8':20},
							
						},
						route: 'D'
					},
					'J': {
						type: 1,
						x: 505,
						y: 101,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':20,'4':30,'5':30,'6':20},
							1: {'6':10,'7':40,'8':50},
							
						},
						route: 'D'
					},
					'K': {
						type: 1,
						x: 565,
						y: 210,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'6':20,'7':40,'8':20,'9':20},
							
						},
						route: 'M'
					},
					'L': {
						type: 1,
						x: 565,
						y: 168,
						aironly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':20,'4':35,'5':25,'6':20},
							1: {'6':10,'7':25,'8':65},
							
						},
						route: 'I'
					},
					'M': {
						type: 2,
						x: 677,
						y: 190,
						resource: 1,
						amount: [40],
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.BBV + ships.CA + ships.CVL >= 3) return 'L';
							if (ships.BBV + ships.CA + ships.CAV >= 3) return 'L';
							if (ships.DD <= 2) return 'L';
							this.showLoSPlane = 'J';
							return checkELoS33(getELoS33(1,3),{ 9: 'J', 7: 'L' });
						}
					},
					'N': {
						type: 2,
						x: 121,
						y: 194,
						resource: 1,
						amount: [300,500,700,1000],
						dropoff: true,
						end: true
					},
				}
			},
			94: {
				name: 'South Connecting Sea',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [93],
				bgmMap: 31,
				bgmDN: 8,
				bgmNN: 2,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 10,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 564,
						y: 69,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'I';
							if (ships.SS + ships.SSV) return 'I';
							return (Math.random() < .5)? 'F' : 'G';
						}
					},
					'A': {
						type: 2,
						x: 154,
						y: 212,
						resource: 2,
						amount: [30],
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'B';
							if (ships.DD <= 1) return 'B';
							if (ships.CL <= 0) return 'B';
							if (ships.SS + ships.SSV) return 'B';
							return 'D';
						}
					},
					'B': {
						type: 1,
						x: 160,
						y: 286,
						compDiff: {
							3: {'1':35,'2':65},
							2: {'3':35,'4':35,'5':30},
							1: {'5':35,'6':35,'7':30},
							
						},
						route: 'J'
					},
					'C': {
						type: 1,
						x: 252,
						y: 162,
						compDiff: {
							3: {'1':40,'2':60},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'5':10,'6':15,'7':30,'8':45},
							
						},
						route: 'A'
					},
					'D': {
						type: 4,
						x: 347,
						y: 302,
						resource: 1,
						lostMax: 0.2,
						route: 'J'
					},
					'E': {
						type: 1,
						x: 394,
						y: 216,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'6':15,'7':30,'8':35,'9':20},
							
						},
						routeC: function(ships) {
							if (ships.BBV >= 2 && ships.CL && ships.DD >= 2) return 'A';
							if (ships.LHA && ships.CL && ships.DD >= 2) return 'A';
							if (ships.CL && ships.DD >= 3) return 'A';
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'A';
							return (Math.random() < .5)? 'A' : 'D';
						}
					},
					'F': {
						type: 1,
						x: 454,
						y: 164,
						compDiff: {
							3: {'1':30,'2':35,'3':35},
							2: {'2':25,'3':25,'4':20,'5':20,'6':10},
							1: {'4':5,'5':10,'6':25,'7':35,'8':25},
							
						},
						route: 'C'
					},
					'G': {
						type: 1,
						x: 520,
						y: 188,
						subonly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'5':30,'6':30,'7':15,'8':25},
							
						},
						route: 'E'
					},
					'H': {
						type: 1,
						x: 619,
						y: 320,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':25,'4':30,'5':25,'6':20},
							1: {'6':10,'7':60,'8':20,'9':10},
							
						},
						route: 'G'
					},
					'I': {
						type: 4,
						x: 702,
						y: 218,
						resource: 1,
						lostMax: 0.1,
						route: 'H'
					},
					'J': {
						type: 1,
						x: 226,
						y: 351,
						boss: true,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'3':10,'4':30,'5':40,'6':20},
							1: {'6':20,'7':30,'8':30,'9':20},
							
						},
						end: true
					},
				}
			},
			101: {
				name: 'Southwest Sea',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [22,94,113],
				bgmMap: 42,
				bgmDN: 39,
				bgmNN: 2,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 7,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.BB + ships.BBV) errors.push('No BB(V)');
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 650,
						y: 101,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 574,
						y: 157,
						routeS: ['B','D']
					},
					'B': {
						type: 1,
						x: 576,
						y: 279,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':30,'4':25,'5':15,'6':10},
							1: {'5':15,'6':35,'7':30,'8':20},
							
						},
						route: 'C'
					},
					'C': {
						type: 1,
						x: 513,
						y: 336,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':5,'6':15,'7':40,'8':40},
							
						},
						route: 'G'
					},
					'D': {
						type: 1,
						x: 475,
						y: 147,
						compDiff: {
							3: {'1':35,'2':25,'3':15,'4':15,'5':10},
							2: {'2':10,'3':35,'4':35,'5':20},
							1: {'6':20,'7':40,'8':40},
							
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 430,
						y: 231,
						subonly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':15,'6':20,'7':30,'8':25,'9':10},
							
						},
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 4) return 'F';
							if (ships.aCV) return 'C';
							if (ships.CL && ships.DD >= 3) return 'F';
							if (ships.DD <= 1 && Math.random() < .6) return 'C';
							if (ships.CL && ships.DD >= 2) return 'F';
							return 'C';
						}
					},
					'F': {
						type: 1,
						x: 337,
						y: 242,
						compDiff: {
							3: {'1':40,'2':35,'3':15,'4':10},
							2: {'3':25,'4':30,'5':25,'6':20},
							1: {'5':10,'6':30,'7':60},
							
						},
						route: 'G'
					},
					'G': {
						type: 1,
						x: 369,
						y: 319,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':30,'6':10},
							1: {'5':15,'6':30,'7':25,'8':30},
							
						},
						end: true
					},
				}
			},
			102: {
				name: 'Southwest Sea',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [101],
				bgmMap: 42,
				bgmDN: 39,
				bgmNN: 2,
				bgmDB: 8,
				bgmNB: 8,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 489,
						y: 121,
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 4) return 'F';
							if (ships.BBV >= 2 && ships.CL && ships.DD >= 3) return 'F';
							if (isShipInList(ships.ids,445) && ships.aCV <= 0 && ships.DD >= 2) return 'F';
							if (ships.DD >= 2 && ships.aCV <= 0 && Math.random() < .5) return 'F';
							return 'C';
						}
					},
					'A': {
						type: 2,
						x: 693,
						y: 307,
						resource: 1,
						amount: [30],
						route: 'D'
					},
					'B': {
						type: 3,
						x: 655,
						y: 204,
						routeS: ['A','E']
					},
					'C': {
						type: 1,
						x: 586,
						y: 121,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'2':10,'3':20,'4':25,'5':20,'6':25},
							1: {'5':10,'6':20,'7':35,'8':35},
							
						},
						route: 'B'
					},
					'D': {
						type: 1,
						x: 584,
						y: 332,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':30,'6':30,'7':25,'8':15},
							
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 521,
						y: 244,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':25,'6':15},
							1: {'5':10,'6':25,'7':30,'8':35},
							
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 415,
						y: 216,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'4':10,'5':15,'6':30,'7':45},
							
						},
						route: 'G'
					},
					'G': {
						type: 1,
						x: 412,
						y: 337,
						subonly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':15,'6':15,'7':30,'8':30,'9':10},
							
						},
						route: 'I'
					},
					'H': {
						type: 2,
						x: 325,
						y: 152,
						resource: 3,
						amount: [40],
						routeLC: 3,
						routeL: { 29: 'K', 25: 'J' }
					},
					'I': {
						type: 1,
						x: 303,
						y: 268,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':10,'5':10,'6':25,'7':30,'8':25},
							
						},
						route: 'H'
					},
					'J': {
						type: 3,
						x: 228,
						y: 218,
						end: true
					},
					'K': {
						type: 1,
						x: 215,
						y: 124,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'5':15,'6':20,'7':30,'8':35},
							
						},
						end: true
					},
				}
			},
			103: {
				name: 'Southwest Sea',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [102],
				bgmMap: 43,
				bgmDN: 38,
				bgmNN: 2,
				bgmDB: 46,
				bgmNB: 46,
				bossnode: 10,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 638,
						y: 94,
						route: 'B'
					},
					'A': {
						type: 1,
						x: 568,
						y: 218,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':15,'5':15,'6':20,'7':25,'8':25},
							
						},
						route: 'C'
					},
					'B': {
						type: 3,
						x: 541,
						y: 130,
						routeS: ['A','D']
					},
					'C': {
						type: 1,
						x: 507,
						y: 281,
						subonly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':20,'4':30,'5':30},
							1: {'4':10,'5':15,'6':25,'7':35,'8':15},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'H';
							if (ships.CL && ships.DD >= 3) return 'F';
							if (ships.aBB >= 3) return 'H';
							if (ships.DD >= 2 && ships.aCV <= 3) return 'F';
							if (ships.DD >= 2 && isShipInList(ships.ids,445)) return 'F';
							return 'H';
						}
					},
					'D': {
						type: 3,
						x: 450,
						y: 81,
						route: 'G'
					},
					'E': {
						type: 3,
						x: 437,
						y: 187,
						routeLC: 3,
						routeL: { 39: 'H', 37: 'I' }
					},
					'F': {
						type: 1,
						x: 420,
						y: 350,
						compDiff: {
							3: {'1':40,'2':35,'3':15,'4':10},
							2: {'2':20,'3':20,'4':30,'5':20,'6':10},
							1: {'5':15,'6':25,'7':40,'8':20},
							
						},
						route: 'J'
					},
					'G': {
						type: 1,
						x: 382,
						y: 106,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':10,'5':20,'6':30,'7':30,'8':10},
							
						},
						route: 'E'
					},
					'H': {
						type: 1,
						x: 349,
						y: 228,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'2':10,'3':30,'4':30,'5':20,'6':10},
							1: {'5':15,'6':30,'7':35,'8':20},
							
						},
						route: 'F'
					},
					'I': {
						type: 3,
						x: 320,
						y: 152,
						end: true
					},
					'J': {
						type: 1,
						x: 294,
						y: 312,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':25,'4':40,'5':25,'6':10},
							1: {'5':10,'6':25,'7':40,'8':25},
							
						},
						end: true
					},
				}
			},
			104: {
				name: 'Southwest Sea',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [103],
				bgmMap: 43,
				bgmDN: 38,
				bgmNN: 2,
				bgmDB: 47,
				bgmNB: 47,
				bossnode: 12,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 482,
						y: 80,
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 2) return 'F';
							if (ships.CV + ships.CVB) return 'B';
							if (ships.aBB <= 2 && ships.DD >= 2) return 'F';
							if (ships.DD >= 2 && isShipInList(ships.ids,445)) return 'F';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 599,
						y: 200,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':15,'6':35,'7':40,'8':10},
							
						},
						route: 'C'
					},
					'B': {
						type: 3,
						x: 566,
						y: 132,
						route: 'A'
					},
					'C': {
						type: 3,
						x: 516,
						y: 249,
						routeS: ['D','E']
					},
					'D': {
						type: 1,
						x: 454,
						y: 334,
						compDiff: {
							3: {'1':40,'2':30,'3':20,'4':10},
							2: {'2':10,'3':25,'4':25,'5':20,'6':20},
							1: {'5':10,'6':20,'7':30,'8':40},
							
						},
						route: 'I'
					},
					'E': {
						type: 1,
						x: 401,
						y: 271,
						compDiff: {
							3: {'1':50,'2':20,'3':20,'4':10},
							2: {'2':30,'3':20,'4':20,'5':20,'6':10},
							1: {'5':15,'6':30,'7':25,'8':30},
							
						},
						route: 'I'
					},
					'F': {
						type: 1,
						x: 383,
						y: 120,
						subonly: true,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':10,'5':15,'6':25,'7':50},
							
						},
						routeLC: 3,
						routeL: { 33: 'G', 32: 'H' }
					},
					'G': {
						type: 1,
						x: 352,
						y: 197,
						compDiff: {
							3: {'1':40,'2':30,'3':20,'4':10},
							2: {'1':10,'2':10,'3':30,'4':30,'5':10,'6':10},
							1: {'5':15,'6':30,'7':30,'8':25},
							
						},
						route: 'E'
					},
					'H': {
						type: 3,
						x: 299,
						y: 98,
						end: true
					},
					'I': {
						type: 1,
						x: 293,
						y: 315,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':20,'4':30,'5':30,'6':20},
							1: {'6':10,'7':50,'8':40},
							
						},
						route: 'J'
					},
					'J': {
						type: 3,
						x: 197,
						y: 246,
						routeLC: 3,
						routeL: { 44: 'L', 42: 'K' }
					},
					'K': {
						type: 2,
						x: 159,
						y: 136,
						resource: 2,
						amount: [50],
						end: true
					},
					'L': {
						type: 1,
						x: 84,
						y: 125,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'2':10,'3':30,'4':35,'5':15,'6':10},
							1: {'4':10,'5':25,'6':35,'7':30},
							
						},
						end: true
					},
				}
			},
			111: {
				name: 'Central Western Sea',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [81,91],
				bgmMap: 42,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 8,
				bgmNB: 8,
				bossnode: 7,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 65,
						y: 227,
						routeR: { 'A': .5, 'C': .5 }
					},
					'A': {
						type: 1,
						x: 130,
						y: 163,
						compDiff: {
							3: {'1':50,'2':40,'3':10},
							2: {'2':20,'3':30,'4':30,'5':15,'6':5},
							1: {'5':15,'6':15,'7':35,'8':35},
							
						},
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 3) return 'C';
							return (Math.random() < .3)? 'D' : 'C';
						}
					},
					'B': {
						type: 2,
						x: 185,
						y: 77,
						resource: 4,
						amount: [20],
						end: true
					},
					'C': {
						type: 2,
						x: 189,
						y: 241,
						resource: 4,
						amount: [10],
						routeC: function(ships) {
							if (ships.aCV + ships.CAV + ships.BBV + ships.AV) return 'G';
							return (Math.random() < .3)? 'E' : 'G';
						}
					},
					'D': {
						type: 2,
						x: 259,
						y: 139,
						resource: 5,
						amount: [1],
						routeR: { 'B': .5, 'F': .5 }
					},
					'E': {
						type: 1,
						x: 312,
						y: 316,
						compDiff: {
							3: {'1':50,'2':40,'3':10},
							2: {'3':35,'4':35,'5':30},
							1: {'5':25,'6':20,'7':30,'8':25},
							
						},
						end: true
					},
					'F': {
						type: 1,
						x: 381,
						y: 119,
						compDiff: {
							3: {'1':50,'2':40,'3':10},
							2: {'2':10,'3':25,'4':30,'5':35},
							1: {'6':30,'7':30,'8':40},
							
						},
						end: true
					},
					'G': {
						type: 1,
						x: 381,
						y: 217,
						boss: true,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'5':20,'6':20,'7':30,'8':30},
							
						},
						end: true
					},
				}
			},
			112: {
				name: 'Central Western Sea',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [111],
				bgmMap: 42,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 65,
						y: 227,
						routeR: { 'A': .5, 'B': .5 }
					},
					'A': {
						type: 2,
						x: 132,
						y: 161,
						resource: 1,
						amount: [10],
						route: 'D'
					},
					'B': {
						type: 1,
						x: 225,
						y: 234,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'2':10,'3':20,'4':50,'5':20},
							1: {'6':25,'7':25,'8':50},
							
						},
						routeC: function(ships) {
							if (ships.aCV + ships.CAV + ships.BBV + ships.AV && Math.random() < .75) return 'E'
							return (Math.random() < .6)? 'C' : 'E';
						}
					},
					'C': {
						type: 1,
						x: 248,
						y: 332,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':15,'4':45,'5':40},
							1: {'6':35,'7':35,'8':15,'9':15},
							
						},
						route: 'G'
					},
					'D': {
						type: 1,
						x: 269,
						y: 76,
						compDiff: {
							3: {'1':40,'2':20,'3':20,'4':20},
							2: {'2':20,'3':30,'4':40,'5':10},
							1: {'6':25,'7':35,'8':40},
							
						},
						route: 'F'
					},
					'E': {
						type: 2,
						x: 307,
						y: 175,
						resource: 2,
						amount: [20],
						route: 'F'
					},
					'F': {
						type: 2,
						x: 381,
						y: 175,
						resource: 1,
						amount: [20],
						routeC: function(ships) {
							if (ships.AV) return 'K';
							return (Math.random() < .7)? 'K' : 'H';
						}
					},
					'G': {
						type: 1,
						x: 398,
						y: 271,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':20,'3':15,'4':35,'5':30},
							1: {'6':20,'7':30,'8':40,'9':10},
							
						},
						routeC: function(ships) {
							if (SHIPDATA[ships.ids[0]].type == 'SSV') return 'I';
							if (SHIPDATA[ships.ids[0]].type == 'CL') return 'I';
							if (Math.random() < .4) return 'I';
							if (ships.BBV >= 2) return 'J';
							if (ships.LHA) return 'J';
							return (Math.random() < .3)? 'J' : 'I';
						}
					},
					'H': {
						type: 1,
						x: 438,
						y: 68,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'3':30,'4':40,'5':30},
							1: {'6':25,'7':40,'8':35},
							
						},
						end: true
					},
					'I': {
						type: 2,
						x: 428,
						y: 188,
						resource: 2,
						amount: [30],
						end: true
					},
					'J': {
						type: 1,
						x: 539,
						y: 268,
						compDiff: {
							3: {'1':40,'2':50,'3':10},
							2: {'3':30,'4':30,'5':25,'6':15},
							1: {'6':15,'7':30,'8':55},
							
						},
						end: true
					},
					'K': {
						type: 1,
						x: 598,
						y: 115,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':10,'4':25,'5':35,'6':30},
							1: {'6':10,'7':20,'8':40,'9':30},
							
						},
						end: true
					},
				}
			},
			113: {
				name: 'Central Western Sea',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [112],
				bgmMap: 11,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 16,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 65,
						y: 227,
						route: 'E'
					},
					'A': {
						type: 2,
						x: 144,
						y: 209,
						resource: 1,
						amount: [30],
						route: 'B'
					},
					'B': {
						type: 1,
						x: 167,
						y: 145,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':20,'4':35,'5':45},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						route: 'H'
					},
					'C': {
						type: 2,
						x: 180,
						y: 85,
						resource: 2,
						amount: [20],
						end: true
					},
					'D': {
						type: 1,
						x: 218,
						y: 315,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':20,'4':40,'5':20,'6':20},
							1: {'5':15,'6':20,'7':40,'8':25},
							
						},
						end: true
					},
					'E': {
						type: 1,
						x: 227,
						y: 257,
						compDiff: {
							3: {'1':30,'2':30,'3':30,'4':10},
							2: {'2':15,'3':25,'4':20,'5':20,'6':20},
							1: {'5':15,'6':25,'7':40,'8':20},
							
						},
						routeC: function(ships) {
							let r = Math.random();
							if (ships.CL >= 2 && ships.SS + ships.SSV <= 0 && r < .8) return 'F';
							if (ships.CL >= 1 && ships.SS + ships.SSV <= 0 && r < .65) return 'F';
							r = Math.random();
							if (r < .35) return 'A';
							if (r < .7) return 'F';
							return 'I';
						}
					},
					'F': {
						type: 1,
						x: 287,
						y: 167,
						compDiff: {
							3: {'1':20,'2':30,'3':25,'4':25},
							2: {'2':10,'3':25,'4':30,'5':30,'6':5},
							1: {'5':20,'6':20,'7':35,'8':25},
							
						},
						route: 'J'
					},
					'G': {
						type: 2,
						x: 311,
						y: 322,
						resource: 5,
						amount: [1],
						route: 'D'
					},
					'H': {
						type: 1,
						x: 324,
						y: 108,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'2':15,'3':30,'4':30,'5':25},
							1: {'5':5,'6':25,'7':40,'8':30},
							
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3 && ships.AS) return 'J';
							if (ships.SS + ships.SSV <= 4 && ships.SSV >= 2) return 'J';
							if (ships.SSV + ships.SSV <= 0) return 'J';
							return (Math.random() < .5)? 'J' : 'C';
						}
					},
					'I': {
						type: 2,
						x: 374,
						y: 238,
						resource: 6,
						amount: [1],
						route: 'K'
					},
					'J': {
						type: 1,
						x: 418,
						y: 141,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'2':10,'3':20,'4':35,'5':35},
							1: {'5':10,'6':25,'7':30,'8':35},
							
						},
						routeR: { 'L': .5, 'N': .5 }
					},
					'K': {
						type: 1,
						x: 412,
						y: 323,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':10,'5':15},
							2: {'2':10,'3':15,'4':25,'5':25,'6':25},
							1: {'6':10,'7':30,'8':60},
							
						},
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 2) return 'M';
							return (Math.random() < .7)? 'M' : 'G';
						}
					},
					'L': {
						type: 3,
						x: 515,
						y: 224,
						route: 'P'
					},
					'M': {
						type: 1,
						x: 528,
						y: 309,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'2':10,'3':20,'4':30,'5':25,'6':15},
							1: {'5':10,'6':20,'7':30,'8':40},
							
						},
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 2) return 'P';
							if (ships.aCV + ships.CAV + ships.BBV + ships.AV >= 2) return 'P';
							return (Math.random() < .65)? 'P' : 'O';
						}
					},
					'N': {
						type: 1,
						x: 537,
						y: 92,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':30,'4':40,'5':20,'6':10},
							1: {'6':15,'7':35,'8':50},
							
						},
						route: 'P'
					},
					'O': {
						type: 1,
						x: 709,
						y: 312,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':10,'3':30,'4':30,'5':20,'6':10},
							1: {'6':10,'7':25,'8':65},
							
						},
						end: true
					},
					'P': {
						type: 1,
						x: 664,
						y: 247,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':25,'4':15},
							2: {'3':20,'4':30,'5':35,'6':15},
							1: {'6':15,'7':40,'8':45},
							
						},
						end: true
					},
				}
			},
			114: {
				name: 'Central Western Sea',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [113],
				bgmMap: 31,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 10,
				bgmNB: 10,
				bossnode: 12,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 145,
						y: 247,
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 4) return 'B';
							if (ships.DD >= 4) return 'B';
							if (ships.aCV) return 'C';
							if (ships.AV >= 2) return 'C';
							let numDrumShip = 0;
							for (let ship of FLEETS1[0].ships) {
								if (ship.equips.find(eq => eq.type == DRUM)) numDrumShip++;
							}
							if (numDrumShip >= 2) return 'C';
							if (ships.CL && ships.DD >= 3) return 'B';
							if (ships.aBB >= 2) return 'C';
							return (Math.random() < .3)? 'C' : 'B';
						}
					},
					'A': {
						type: 3,
						x: 179,
						y: 92,
						end: true
					},
					'B': {
						type: 1,
						x: 250,
						y: 147,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'2':10,'3':20,'4':30,'5':30,'6':10},
							1: {'5':10,'6':10,'7':50,'8':30},
							
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'A';
							return 'E';
						}
					},
					'C': {
						type: 1,
						x: 264,
						y: 329,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':15,'3':25,'4':20,'5':20,'6':20},
							1: {'5':5,'6':15,'7':45,'8':35},
							
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'F';
							if (ships.CV + ships.CVB >= 3) return 'F';
							if (ships.BB + ships.BBV >= 3) return 'F';
							if (ships.CV + ships.CVB >= 2 && ships.CVL >= 2) return 'F';
							let r = Math.random();
							if (ships.CV + ships.CVB >= 2 && r < .25) return 'F';
							if (ships.DD <= 1 && r < .3) return 'F';
							if (ships.AV) return 'D';
							if (ships.FBB >= 3) return 'F';
							return 'D';
						}
					},
					'D': {
						type: 1,
						x: 391,
						y: 243,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':5,'6':15,'7':40,'8':40},
							
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB) return 'I';
							if (ships.CVL >= 2) return 'I';
							if (ships.aBB) return 'I';
							let numDrumShip = 0;
							for (let ship of FLEETS1[0].ships) {
								if (ship.equips.find(eq => eq.type == DRUM)) numDrumShip++;
							}
							if (numDrumShip >= 2) return 'I';
							if (ships.DD >= 3) return 'H';
							if (ships.CL && ships.DD >= 2) return 'H';
							if (ships.CA == 2 && ships.DD >= 2) return 'H';
							if (ships.CAV == 2 && ships.DD >= 2) return 'H';
							return (Math.random() < .35)? 'H' : 'I';
						}
					},
					'E': {
						type: 1,
						x: 396,
						y: 149,
						night: true,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'2':20,'3':20,'4':20,'5':20,'6':20},
							1: {'4':10,'5':20,'6':20,'7':30,'8':20},
							
						},
						routeC: function(ships) {
							if (ships.aBB <= 0) return 'H';
							if (ships.DD >= 4) return 'H';
							if (ships.CL && ships.DD >= 3) return 'H';
							if (ships.CAV && ships.DD >= 3) return 'H';
							if (ships.AV) return 'H';
							if (ships.BB + ships.BBV && Math.random() < .4) return 'G';
							return (Math.random() < .25)? 'G' : 'H';
						}
					},
					'F': {
						type: 3,
						x: 395,
						y: 342,
						end: true
					},
					'G': {
						type: 3,
						x: 507,
						y: 109,
						end: true
					},
					'H': {
						type: 3,
						x: 519,
						y: 201,
						routeLC: 3,
						routeL: { 34: 'L', 30: 'K' }
					},
					'I': {
						type: 1,
						x: 520,
						y: 299,
						compDiff: {
							3: {'1':30,'2':25,'3':25,'4':20},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':5,'6':15,'7':40,'8':40},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							let numDrumShip = 0;
							for (let ship of FLEETS1[0].ships) {
								if (ship.equips.find(eq => eq.type == DRUM)) numDrumShip++;
							}
							if (numDrumShip >= 2) return 'J';
							this.showLoSPlane = 'L';
							if (checkELoS33(getELoS33(1,3),{ 29: 'L', 25: 'H' }) == 'H') return 'H';
							return checkELoS33(getELoS33(1,3),{ 44: 'L', 40: 'J' });
						}
					},
					'J': {
						type: 2,
						x: 573,
						y: 320,
						resource: 1,
						amount: [50],
						end: true
					},
					'K': {
						type: 3,
						x: 589,
						y: 126,
						end: true
					},
					'L': {
						type: 1,
						x: 641,
						y: 215,
						boss: true,
						compDiff: {
							3: {'1':20,'2':30,'3':30,'4':20},
							2: {'2':25,'3':25,'4':20,'5':20,'6':10},
							1: {'5':10,'6':30,'7':50,'8':10},
							
						},
						end: true
					},
				}
			},
			121: {
				name: 'MI Sea',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [132],
				bgmMap: 18,
				bgmDN: 8,
				bgmNN: 2,
				bgmDB: 16,
				bgmNB: 16,
				bossnode: 12,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.total > ships.SS + ships.SSV + ships.AS + ships.DD + ships.CL + ships.CT) errors.push('SS(V)/AS/DD/CL/CT only');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 116,
						y: 171,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 226,
						y: 210,
						routeS: ['B','C']
					},
					'B': {
						type: 1,
						x: 290,
						y: 328,
						compDiff: {
							3: {'1':50,'2':30,'3':10,'4':10},
							2: {'1':10,'2':20,'3':30,'4':20,'5':10,'6':10},
							1: {'5':30,'6':30,'7':20,'8':20},
							
						},
						route: 'D'
					},
					'C': {
						type: 3,
						x: 321,
						y: 136,
						routeC: function(ships) {
							if (ships.total >= 6) return 'E';
							if (ships.CL + ships.CT >= 3) return 'E';
							if (ships.CL + ships.CT >= 2 && Math.random() < .5) return 'E';
							return 'F';
						}
					},
					'D': {
						type: 3,
						x: 395,
						y: 277,
						routeS: ['F','G']
					},
					'E': {
						type: 1,
						x: 385,
						y: 84,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'1':15,'2':15,'3':25,'4':25,'5':10,'6':10},
							1: {'5':30,'6':30,'7':20,'8':20},
							
						},
						end: true
					},
					'F': {
						type: 1,
						x: 447,
						y: 207,
						compDiff: {
							3: {'1':40,'2':30,'3':15,'4':15},
							2: {'1':10,'2':20,'3':30,'4':20,'5':10,'6':10},
							1: {'5':30,'6':30,'7':20,'8':20},
							
						},
						routeC: function(ships) {
							if (ships.total <= 4 && Math.random() < .75) return 'L';
							if (ships.total <= 3) return 'L';
							return 'H';
						}
					},
					'G': {
						type: 1,
						x: 505,
						y: 342,
						compDiff: {
							3: {'1':50,'2':30,'3':10,'4':10},
							2: {'1':10,'2':20,'3':30,'4':20,'5':10,'6':10},
							1: {'5':30,'6':30,'7':20,'8':20},
							
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 519,
						y: 117,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'4':10,'5':30,'6':30,'7':30},
							
						},
						routeLC: 3,
						routeL: { 7: 'L', 6: 'J' }
					},
					'I': {
						type: 1,
						x: 606,
						y: 329,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':15,'5':15,'6':35,'7':35},
							
						},
						routeLC: 3,
						routeL: { 8: 'L', 7: 'K' }
					},
					'J': {
						type: 3,
						x: 634,
						y: 135,
						end: true
					},
					'K': {
						type: 3,
						x: 681,
						y: 310,
						end: true
					},
					'L': {
						type: 1,
						x: 552,
						y: 237,
						boss: true,
						compDiff: {
							3: {'1':50,'2':30,'3':20},
							2: {'2':15,'3':35,'4':30,'5':20},
							1: {'4':10,'5':15,'6':25,'7':40,'8':10},
							
						},
						end: true
					},
				}
			},
			122: {
				name: 'MI Sea',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [121],
				bgmMap: 16,
				bgmDN: 16,
				bgmNN: 2,
				bgmDB: 12,
				bgmNB: 12,
				bossnode: 10,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.BB + ships.BBV) errors.push('No BB(V)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 98,
						y: 210,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 213,
						y: 170,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'C';
							if (ships.aCV >= 4) return 'C';
							if (ships.aBB >= 3) return 'C';
							if (ships.CV + ships.CVB >= 3) return 'C';
							if (isShipInList(ships.ids,445) && ships.CL && ships.DD >= 2) return 'B';
							if (ships.speed >= 10 && ships.CL && ships.DD >= 2) return 'B';
							return 'D';
						}
					},
					'B': {
						type: 1,
						x: 295,
						y: 245,
						aironly: true,
						compDiff: {
							3: {'1':35,'2':35,'3':20,'4':10},
							2: {'2':10,'3':30,'4':40,'5':20},
							1: {'5':30,'6':30,'7':40},
							
						},
						route: 'E'
					},
					'C': {
						type: 1,
						x: 346,
						y: 112,
						aironly: true,
						compDiff: {
							3: {'1':50,'2':30,'3':20},
							2: {'2':30,'3':30,'4':30,'5':10},
							1: {'4':10,'5':30,'6':30,'7':30},
							
						},
						route: 'F'
					},
					'D': {
						type: 4,
						x: 367,
						y: 204,
						resource: 1,
						lostMax: 0.3,
						route: 'F'
					},
					'E': {
						type: 3,
						x: 425,
						y: 305,
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV) return 'I';
							this.showLoSPlane = 'H';
							return checkELoS33(getELoS33(1,3),{ 32: 'H', 30: 'I' });
						}
					},
					'F': {
						type: 1,
						x: 475,
						y: 171,
						aironly: true,
						compDiff: {
							3: {'1':35,'2':35,'3':20,'4':10},
							2: {'2':10,'3':30,'4':40,'5':20},
							1: {'5':30,'6':40,'7':30},
							
						},
						route: 'H'
					},
					'G': {
						type: 3,
						x: 517,
						y: 119,
						end: true
					},
					'H': {
						type: 1,
						x: 572,
						y: 223,
						aironly: true,
						compDiff: {
							3: {'1':60,'2':20,'3':20},
							2: {'2':30,'3':40,'4':30},
							1: {'4':10,'5':30,'6':40,'7':20},
							
						},
						routeLC: 3,
						routeL: { 49: 'J', 45: 'G' }
					},
					'I': {
						type: 3,
						x: 603,
						y: 320,
						end: true
					},
					'J': {
						type: 1,
						x: 617,
						y: 120,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':20,'4':35,'5':25,'6':20},
							1: {'5':15,'6':25,'7':45,'8':15},
							
						},
						end: true
					},
				}
			},
			123: {
				name: 'MI Sea',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [122,133],
				bgmMap: 12,
				bgmDN: 16,
				bgmNN: 2,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 109,
						y: 148,
						routeC: function(ships) {
							if (ships.LHA) return 'B';
							if (ships.CL && ships.DD >= 2) return 'B';
							if (ships.speed >= 10 && ships.aBB + ships.CA + ships.CAV + ships.CLT >= 4) return 'C';
							return (Math.random() < .5)? 'B' : 'C';
						}
					},
					'A': {
						type: 3,
						x: 184,
						y: 309,
						end: true
					},
					'B': {
						type: 1,
						x: 247,
						y: 197,
						aironly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':30,'4':20,'5':20,'6':10},
							1: {'5':15,'6':25,'7':40,'8':20},
							
						},
						routeC: function(ships) {
							if (ships.aCV >= 3) return 'E';
							if (ships.DD >= 2) return 'D';
							return (Math.random() < .5)? 'D' : 'E';
						}
					},
					'C': {
						type: 1,
						x: 260,
						y: 106,
						aironly: true,
						compDiff: {
							3: {'1':40,'2':30,'3':15,'4':15},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'5':20,'6':25,'7':30,'8':25},
							
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 275,
						y: 277,
						aironly: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':30,'3':30,'4':30,'5':10},
							1: {'5':20,'6':35,'7':25,'8':20},
							
						},
						routeLC: 3,
						routeL: { 29: 'F', 27: 'A' }
					},
					'E': {
						type: 1,
						x: 372,
						y: 135,
						subonly: true,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'3':10,'4':10,'5':25,'6':25,'7':15,'8':15},
							
						},
						routeC: function(ships) {
							if (ships.aCV >= 5) return 'I';
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'I';
							return 'H';
						}
					},
					'F': {
						type: 1,
						x: 373,
						y: 328,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'2':10,'3':30,'4':30,'5':20,'6':10},
							1: {'5':25,'6':30,'7':30,'8':15},
							
						},
						route: 'K'
					},
					'G': {
						type: 1,
						x: 494,
						y: 306,
						aironly: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':25,'3':30,'4':30,'5':15},
							1: {'5':25,'6':35,'7':25,'8':15},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV) return 'F';
							this.showLoSPlane = 'K';
							return checkELoS33(getELoS33(1,3),{ 46: 'K', 42: 'F' });
						}
					},
					'H': {
						type: 1,
						x: 541,
						y: 176,
						compDiff: {
							3: {'1':40,'2':30,'3':15,'4':15},
							2: {'1':10,'2':20,'3':30,'4':20,'5':10,'6':10},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV >= 2) return 'J';
							this.showLoSPlane = 'G';
							return checkELoS33(getELoS33(1,3),{ 36: 'G', 32: 'J' });
						}
					},
					'I': {
						type: 1,
						x: 567,
						y: 93,
						aironly: true,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'5':15,'6':25,'7':40,'8':20},
							
						},
						end: true
					},
					'J': {
						type: 3,
						x: 626,
						y: 247,
						end: true
					},
					'K': {
						type: 1,
						x: 392,
						y: 242,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':30,'4':30,'5':25,'6':15},
							1: {'5':15,'6':30,'7':35,'8':20},
							
						},
						end: true
					},
				}
			},
			124: {
				name: 'MI Sea',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [54,123],
				bgmMap: 12,
				bgmDN: 12,
				bgmNN: 2,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 12,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 111,
						y: 140,
						routeC: function(ships) {
							let num = ships.aBB + ships.CV + ships.CVB;
							if (ships.speed >= 10 && num <= 2 && ships.CL && ships.DD >= 2) return 'A';
							if (ships.speed >= 10 && ships.CAV >= 2 && ships.DD >= 2) return 'A';
							if (num >= 3) return 'B';
							if (ships.aCV >= 4) return 'B';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 1,
						x: 201,
						y: 236,
						subonly: true,
						compDiff: {
							3: {'1':30,'2':35,'3':35},
							2: {'2':20,'3':20,'4':25,'5':35},
							1: {'4':10,'5':10,'6':40,'7':40},
							
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 231,
						y: 184,
						subonly: true,
						compDiff: {
							3: {'1':30,'2':35,'3':35},
							2: {'2':20,'3':20,'4':25,'5':35},
							1: {'4':10,'5':10,'6':40,'7':40},
							
						},
						routeC: function(ships) {
							if (ships.aCV >= 4) return 'D';
							if (ships.CV + ships.CVB >= 3) return 'D';
							return (Math.random() < .5)? 'D' : 'E';
						}
					},
					'C': {
						type: 1,
						x: 322,
						y: 301,
						aironly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':20,'4':30,'5':10,'6':20},
							1: {'5':25,'6':30,'7':30,'8':15},
							
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 2) return 'G';
							if (checkELoS33(getELoS33(1,3),{ 29: 'F', 28: 'G' }) == 'G') return 'G';
							if (ships.speed <= 5) return 'F';
							if (ships.aBB + ships.CV + ships.CVB <= 2 && ships.CL && ships.DD >= 2) return 'G';
							if (ships.CAV >= 2 && ships.DD >= 2) return 'G';
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'F';
							return (Math.random() < .5)? 'F' : 'G';
						}
					},
					'D': {
						type: 1,
						x: 361,
						y: 113,
						aironly: true,
						compDiff: {
							3: {'1':30,'2':40,'3':15,'4':15},
							2: {'2':20,'3':30,'4':30,'5':10,'6':10},
							1: {'5':30,'6':30,'7':40},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV) return 'I';
							this.showLoSPlane = 'H';
							return checkELoS33(getELoS33(1,3),{ 47: 'H', 43: 'I' });
						}
					},
					'E': {
						type: 1,
						x: 361,
						y: 199,
						compDiff: {
							3: {'1':50,'2':30,'3':20},
							2: {'2':15,'3':35,'4':30,'5':20},
							1: {'5':15,'6':20,'7':35,'8':30},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'H';
							if (ships.SS + ships.SSV >= 4) return 'H';
							return (Math.random() < .5)? 'H' : 'F';
						}
					},
					'F': {
						type: 1,
						x: 463,
						y: 239,
						aironly: true,
						compDiff: {
							3: {'1':30,'2':40,'3':15,'4':15},
							2: {'2':20,'3':30,'4':30,'5':10,'6':10},
							1: {'5':15,'6':25,'7':40,'8':20},
							
						},
						route: 'L'
					},
					'G': {
						type: 1,
						x: 472,
						y: 299,
						aironly: true,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'3':20,'4':40,'5':30,'6':10},
							1: {'5':20,'6':20,'7':40,'8':20},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.SS + ships.SSV) return 'K';
							this.showLoSPlane = 'L';
							return checkELoS33(getELoS33(1,3),{ 34: 'L', 30: 'K' });
						}
					},
					'H': {
						type: 1,
						x: 497,
						y: 154,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':25,'3':45,'4':15,'5':15},
							1: {'4':10,'5':10,'6':30,'7':30,'8':20},
							
						},
						routeLC: 3,
						routeL: { 52: 'L', 48: 'J' }
					},
					'I': {
						type: 3,
						x: 521,
						y: 81,
						end: true
					},
					'J': {
						type: 3,
						x: 615,
						y: 123,
						end: true
					},
					'K': {
						type: 3,
						x: 616,
						y: 323,
						end: true
					},
					'L': {
						type: 1,
						x: 594,
						y: 230,
						boss: true,
						compDiff: {
							3: {'1':50,'2':30,'3':20},
							2: {'2':20,'3':25,'4':25,'5':20,'6':10},
							1: {'4':5,'5':15,'6':25,'7':40,'8':15},
							
						},
						end: true
					},
				}
			},
			131: {
				name: 'AL Sea',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [34,52,114],
				bgmMap: 18,
				bgmDN: 19,
				bgmNN: 2,
				bgmDB: 14,
				bgmNB: 14,
				bossnode: 7,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.FBB + ships.BB + ships.BBV) errors.push('No (F)BB(V)');
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
					if (ships.CA + ships.CAV) errors.push('No CA(V)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 138,
						y: 253,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 259,
						y: 209,
						routeS: ['B','C']
					},
					'B': {
						type: 1,
						x: 350,
						y: 119,
						compDiff: {
							3: {'1':30,'2':50,'3':20},
							2: {'2':20,'3':30,'4':30,'5':10,'6':10},
							1: {'5':20,'6':25,'7':20,'8':35},
							
						},
						routeC: function(ships) {
							if (ships.LHA + ships.AO + ships.AR) return 'D';
							if (ships.DD <= 1) return 'D';
							return 'E';
						}
					},
					'C': {
						type: 1,
						x: 389,
						y: 298,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'2':40,'3':30,'4':30},
							1: {'5':25,'6':30,'7':20,'8':25},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.DD <= 4) return 'F';
							if (ships.SS + ships.SSV >= 6) return 'F';
							this.showLoSPlane = 'E';
							return checkELoS33(getELoS33(1,3),{ 5: 'E', 4: 'F' });
						}
					},
					'D': {
						type: 2,
						x: 433,
						y: 91,
						resource: 2,
						amount: [20],
						end: true
					},
					'E': {
						type: 1,
						x: 481,
						y: 208,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'1':15,'2':15,'3':30,'4':30,'5':10},
							1: {'5':10,'6':30,'7':30,'8':20,'9':10},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.CL + ships.CT + ships.DD <= 4) return 'F';
							if (ships.SS + ships.SSV >= 5) return 'F';
							this.showLoSPlane = 'G';
							return checkELoS33(getELoS33(1,3),{ 8: 'G', 7: 'F' });
						}
					},
					'F': {
						type: 3,
						x: 535,
						y: 297,
						end: true
					},
					'G': {
						type: 1,
						x: 606,
						y: 198,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'2':10,'3':20,'4':30,'5':40},
							1: {'5':15,'6':25,'7':30,'8':30},
							
						},
						end: true
					},
				}
			},
			132: {
				name: 'AL Sea',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [131],
				bgmMap: 18,
				bgmDN: 14,
				bgmNN: 2,
				bgmDB: 15,
				bgmNB: 15,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.FBB + ships.BB + ships.BBV) errors.push('No (F)BB(V)');
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 179,
						y: 295,
						route: 'C'
					},
					'A': {
						type: 3,
						x: 169,
						y: 130,
						end: true
					},
					'B': {
						type: 1,
						x: 249,
						y: 165,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':20,'6':25,'7':35,'8':20},
							
						},
						routeC: function(ships) {
							if (ships.aCV >= 3) return 'A';
							if (ships.SS + ships.SSV >= 5) return 'A';
							if (ships.CL && ships.DD >= 2) return 'D';
							return (Math.random() < .3)? 'D' : 'E';
						}
					},
					'C': {
						type: 1,
						x: 297,
						y: 252,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'4':10,'5':20,'6':30,'7':35,'8':5},
							
						},
						routeC: function(ships) {
							if (ships.aCV >= 2) return 'B';
							if (ships.SS + ships.SSV >= 3) return 'B';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3) return 'F';
							if (isShipInList(ships.ids,445) && ships.DD >= 2) return 'E';
							if (ships.CVL + ships.CAV + ships.AV + ships.LHA && ships.DD >= 2) return 'E';
							return (Math.random() < .5)? 'E' : 'F';
						}
					},
					'D': {
						type: 1,
						x: 364,
						y: 97,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':35,'4':40,'5':25},
							1: {'5':20,'6':40,'7':30,'8':10},
							
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 410,
						y: 203,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':20,'5':25,'6':25,'7':20,'8':10},
							
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 424,
						y: 314,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'4':10,'5':20,'6':30,'7':40},
							
						},
						route: 'H'
					},
					'G': {
						type: 1,
						x: 503,
						y: 129,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':15,'5':30,'6':20,'7':25,'8':10},
							
						},
						routeLC: 3,
						routeL: { 29: 'K', 25: 'I' }
					},
					'H': {
						type: 1,
						x: 532,
						y: 263,
						compDiff: {
							3: {'1':50,'2':25,'3':25},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':10,'5':20,'6':30,'7':30,'8':10},
							
						},
						routeLC: 3,
						routeL: { 8: 'K', 7: 'J' }
					},
					'I': {
						type: 3,
						x: 613,
						y: 96,
						end: true
					},
					'J': {
						type: 3,
						x: 619,
						y: 301,
						end: true
					},
					'K': {
						type: 1,
						x: 584,
						y: 181,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'5':20,'6':25,'7':40,'8':15},
							
						},
						end: true
					},
				}
			},
			133: {
				name: 'AL Sea',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [132],
				bgmMap: 18,
				bgmDN: 14,
				bgmNN: 2,
				bgmDB: 15,
				bgmNB: 15,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 181,
						y: 327,
						routeC: function(ships) {
							if (ships.aCV >= 3) return 'A';
							if (ships.aBB + ships.CV + ships.CVB <= 1 && ships.CL && ships.DD >= 2) return 'C';
							return 'A';
						}
					},
					'A': {
						type: 3,
						x: 107,
						y: 221,
						route: 'B'
					},
					'B': {
						type: 1,
						x: 217,
						y: 129,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':15,'6':25,'7':40,'8':20},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.aCV >= 4) return 'F';
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'F';
							this.showLoSPlane = 'D';
							return checkELoS33(getELoS33(1,3),{ 22: 'D', 20: 'F' });
						}
					},
					'C': {
						type: 1,
						x: 304,
						y: 311,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':20,'3':30,'4':20,'5':15,'6':15},
							1: {'4':10,'5':15,'6':30,'7':25,'8':20},
							
						},
						routeC: function(ships) {
							if (ships.aCV >= 2) return 'D';
							if (ships.CA + ships.CAV >= 3) return 'D';
							return 'G';
						}
					},
					'D': {
						type: 1,
						x: 314,
						y: 209,
						compDiff: {
							3: {'1':35,'2':35,'3':20,'4':10},
							2: {'2':10,'3':30,'4':40,'5':20},
							1: {'5':20,'6':25,'7':30,'8':25},
							
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 372,
						y: 149,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':10,'3':40,'4':25,'5':25},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						routeLC: 3,
						routeL: { 37: 'K', 33: 'F' }
					},
					'F': {
						type: 3,
						x: 450,
						y: 83,
						end: true
					},
					'G': {
						type: 1,
						x: 501,
						y: 291,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':25,'4':35,'5':20,'6':20},
							1: {'5':20,'6':25,'7':25,'8':30},
							
						},
						showLoSPlane: 'E',
						routeC: function(ships) {
							if (checkELoS33(getELoS33(1,3),{ 17: 'E', 15: 'I' }) == 'E') return 'E';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 2) return 'H';
							if (Math.random() < .3) return 'H';
							if (ships.DD >= 2) return 'E';
							return 'I';
						}
					},
					'H': {
						type: 1,
						x: 615,
						y: 242,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'3':35,'4':35,'5':30},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						routeC: function(ships) {
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3) return 'K';
							return (Math.random() < .5)? 'K' : 'J';
						}
					},
					'I': {
						type: 3,
						x: 626,
						y: 322,
						end: true
					},
					'J': {
						type: 2,
						x: 657,
						y: 152,
						resource: 2,
						amount: [30],
						end: true
					},
					'K': {
						type: 1,
						x: 537,
						y: 143,
						boss: true,
						compDiff: {
							3: {'1':60,'2':20,'3':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'4':10,'5':35,'6':25,'7':30},
							
						},
						end: true
					},
				}
			},
			134: {
				name: 'AL Sea',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [133,122],
				bgmMap: 51,
				bgmDN: 15,
				bgmNN: 2,
				bgmDB: 16,
				bgmNB: 16,
				bossnode: 13,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 148,
						y: 319,
						route: 'C'
					},
					'A': {
						type: 3,
						x: 161,
						y: 89,
						end: true
					},
					'B': {
						type: 1,
						x: 224,
						y: 149,
						subonly: true,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'2':35,'3':35,'4':15,'5':15},
							1: {'3':10,'4':10,'5':25,'6':25,'7':15,'8':15},
							
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'A';
							return 'D';
						}
					},
					'C': {
						type: 1,
						x: 246,
						y: 262,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'2':20,'3':30,'4':20,'5':20,'6':10},
							1: {'4':10,'5':15,'6':30,'7':30,'8':15},
							
						},
						routeC: function(ships) {
							let num = ships.aBB + ships.CV + ships.CVB;
							if (ships.aCV >= 3) return 'E';
							if (num <= 3 && ships.CL && ships.DD >= 2) return 'B';
							if (num <= 2 && ships.DD >= 2) return 'B';
							return 'E';
						}
					},
					'D': {
						type: 4,
						x: 280,
						y: 95,
						resource: 1,
						lostMax: 0.2,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 2) return 'G';
							if (ships.aBB + ships.CA + ships.CAV + ships.CLT >= 3) return 'G';
							return 'F';
						}
					},
					'E': {
						type: 3,
						x: 330,
						y: 316,
						routeS: ['G','H']
					},
					'F': {
						type: 1,
						x: 381,
						y: 105,
						compDiff: {
							3: {'1':35,'2':35,'3':20,'4':10},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':15,'6':30,'7':35,'8':20},
							
						},
						route: 'M'
					},
					'G': {
						type: 1,
						x: 386,
						y: 220,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':30,'3':30,'4':30,'5':10},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						route: 'I'
					},
					'H': {
						type: 4,
						x: 476,
						y: 322,
						resource: 1,
						lostMax: 0.4,
						route: 'J'
					},
					'I': {
						type: 1,
						x: 536,
						y: 178,
						compDiff: {
							3: {'1':35,'2':35,'3':20,'4':10},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':15,'6':30,'7':20,'8':35},
							
						},
						routeLC: 3,
						routeL: { 40: 'M', 36: 'L' }
					},
					'J': {
						type: 1,
						x: 590,
						y: 304,
						subonly: true,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'3':10,'4':10,'5':25,'6':25,'7':15,'8':15},
							
						},
						route: 'K'
					},
					'K': {
						type: 1,
						x: 620,
						y: 222,
						compDiff: {
							3: {'1':50,'2':30,'3':10,'4':10},
							2: {'3':30,'4':35,'5':20,'6':15},
							1: {'5':30,'6':30,'7':40},
							
						},
						routeC: function(ships) {
							if (ships.DD + ships.CL <= 1) return 'L';
							return 'I';
						}
					},
					'L': {
						type: 3,
						x: 640,
						y: 126,
						end: true
					},
					'M': {
						type: 1,
						x: 494,
						y: 87,
						boss: true,
						compDiff: {
							3: {'1':60,'2':20,'3':20},
							2: {'3':20,'4':30,'5':20,'6':30},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						end: true
					},
				}
			},
			141: {
				name: 'FS Sea',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [54,61],
				bgmMap: 51,
				bgmDN: 52,
				bgmNN: 2,
				bgmDB: 53,
				bgmNB: 53,
				bossnode: 9,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.FBB + ships.BB + ships.BBV) errors.push('No (F)BB(V)');
					if (ships.CV + ships.CVB + ships.CVL) errors.push('No CV(L/B)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 224,
						y: 108,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 350,
						y: 173,
						routeS: ['B','C']
					},
					'B': {
						type: 1,
						x: 353,
						y: 285,
						subonly: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'3':10,'4':10,'5':25,'6':25,'7':15,'8':15},
							
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 433,
						y: 83,
						compDiff: {
							3: {'1':50,'2':25,'3':25},
							2: {'2':20,'3':20,'4':20,'5':25,'6':15},
							1: {'4':15,'5':15,'6':30,'7':30,'8':10},
							
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 436,
						y: 327,
						compDiff: {
							3: {'1':60,'2':20,'3':20},
							2: {'1':20,'2':10,'3':35,'4':35},
							1: {'4':15,'5':20,'6':25,'7':20,'8':20},
							
						},
						routeC: function(ships) {
							if (ships.DD >= 4) return 'F';
							if (ships.CL + ships.CLT + ships.CT + ships.CA + ships.CAV <= 3 && ships.DD >= 3) return 'F';
							if (isShipInList(ships.ids,445) && ships.DD >= 2) return 'F';
							return 'E';
						}
					},
					'E': {
						type: 1,
						x: 557,
						y: 160,
						compDiff: {
							3: {'1':50,'2':30,'3':20},
							2: {'2':30,'3':20,'4':30,'5':20},
							1: {'4':10,'5':20,'6':30,'7':30,'8':10},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = 'I';
							if (ships.DD <= 1) this.showLoSPlane = 'F';
							if (ships.CL + ships.CLT + ships.CT + ships.CA + ships.CAV >= 5) this.showLoSPlane = 'F';
							return checkELoS33(getELoS33(1,3),{ 29: this.showLoSPlane, 25: 'G' });
						}
					},
					'F': {
						type: 1,
						x: 570,
						y: 277,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':20,'3':20,'4':30,'5':20,'6':10},
							1: {'4':10,'5':20,'6':20,'7':30,'8':20},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.DD <= 1) return 'H';
							this.showLoSPlane = 'I';
							return checkELoS33(getELoS33(1,3),{ 24: 'I', 20: 'H' });
						}
					},
					'G': {
						type: 3,
						x: 630,
						y: 112,
						end: true
					},
					'H': {
						type: 2,
						x: 666,
						y: 332,
						resource: 3,
						amount: [20],
						end: true
					},
					'I': {
						type: 1,
						x: 669,
						y: 230,
						boss: true,
						compDiff: {
							3: {'1':30,'2':25,'3':25,'4':20},
							2: {'2':20,'3':20,'4':20,'5':20,'6':20},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						end: true
					},
				}
			},
			142: {
				name: 'FS Sea',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [141],
				bgmMap: 51,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 5,
				bgmNB: 5,
				bossnode: 13,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 169,
						y: 113,
						routeC: function(ships) {
							if (ships.aCV >= 2) return 'D';
							if (isShipInList(ships.ids,445)) return 'A';
							if (ships.LHA) return 'A';
							return (Math.random() < .5)? 'A' : 'D';
						}
					},
					'A': {
						type: 1,
						x: 156,
						y: 255,
						subonly: true,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':35,'4':35,'5':15,'6':15},
							1: {'3':10,'4':10,'5':25,'6':25,'7':15,'8':15},
							
						},
						route: 'C'
					},
					'B': {
						type: 2,
						x: 229,
						y: 356,
						resource: 4,
						amount: [20],
						end: true
					},
					'C': {
						type: 1,
						x: 263,
						y: 301,
						compDiff: {
							3: {'1':40,'2':35,'3':10,'4':15},
							2: {'2':25,'3':30,'4':25,'5':20},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						routeC: function(ships) {
							if (ships.DD <= 0) return 'B';
							if (ships.SS + ships.SSV >= 4) return 'B';
							if (ships.LHA) return 'B';
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'B';
							return 'F';
						}
					},
					'D': {
						type: 1,
						x: 334,
						y: 131,
						aironly: true,
						compDiff: {
							3: {'1':30,'2':40,'3':20,'4':10},
							2: {'2':20,'3':30,'4':20,'5':20,'6':10},
							1: {'5':20,'6':20,'7':20,'8':20,'9':20},
							
						},
						route: 'F'
					},
					'E': {
						type: 3,
						x: 376,
						y: 350,
						end: true
					},
					'F': {
						type: 3,
						x: 402,
						y: 214,
						routeS: ['G','H']
					},
					'G': {
						type: 1,
						x: 463,
						y: 307,
						compDiff: {
							3: {'1':30,'2':20,'3':30,'4':10,'5':10},
							2: {'2':15,'3':30,'4':20,'5':25,'6':10},
							1: {'5':15,'6':20,'7':25,'8':20,'9':20},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'E';
							this.showLoSPlane = 'I';
							return checkELoS33(getELoS33(1,3),{ 34: 'I', 30: 'E' });
						}
					},
					'H': {
						type: 1,
						x: 511,
						y: 148,
						subonly: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':20,'6':20,'7':20,'8':20,'9':20},
							
						},
						routeLC: 3,
						routeL: { 37: 'L', 33: 'J' }
					},
					'I': {
						type: 4,
						x: 557,
						y: 347,
						resource: 1,
						lostMax: 0.4,
						route: 'K'
					},
					'J': {
						type: 3,
						x: 603,
						y: 85,
						end: true
					},
					'K': {
						type: 1,
						x: 640,
						y: 329,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':25,'3':30,'4':15,'5':15,'6':15},
							1: {'4':10,'5':10,'6':25,'7':25,'8':30},
							
						},
						route: 'M'
					},
					'L': {
						type: 1,
						x: 665,
						y: 238,
						compDiff: {
							3: {'1':50,'2':30,'3':20},
							2: {'2':25,'3':30,'4':25,'5':20},
							1: {'4':15,'5':20,'6':25,'7':40},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'K';
							if (ships.aBB + ships.CA + ships.CAV + ships.CLT >= 4) return 'K';
							if (ships.CL + ships.CT + ships.DD <= 1) return 'K';
							return 'M';
						}
					},
					'M': {
						type: 1,
						x: 560,
						y: 292,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':30,'3':30,'4':20,'5':10,'6':10},
							1: {'5':20,'6':40,'7':30,'8':10},
							
						},
						end: true
					},
				}
			},
			143: {
				name: 'FS Sea',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [142],
				bgmMap: 53,
				bgmDN: 46,
				bgmNN: 2,
				bgmDB: 47,
				bgmNB: 47,
				bossnode: 12,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 183,
						y: 136,
						route: 'C'
					},
					'A': {
						type: 2,
						x: 136,
						y: 336,
						resource: 4,
						amount: [30],
						end: true
					},
					'B': {
						type: 1,
						x: 262,
						y: 301,
						compDiff: {
							3: {'1':50,'2':30,'3':20},
							2: {'2':30,'3':30,'4':25,'5':15},
							1: {'5':30,'6':30,'7':20,'8':20},
							
						},
						routeC: function(ships) {
							let r = Math.random();
							if (ships.aBB + ships.CV + ships.CVB >= 4 && r < .6) return 'A';
							if (ships.aCV >= 3 && r < .5) return 'A';
							if (ships.aBB + ships.CA + ships.CAV + ships.CLT >= 4 && r < .4) return 'A';
							if (ships.DD <= 0) return 'A';
							return 'D';
						}
					},
					'C': {
						type: 3,
						x: 314,
						y: 198,
						routeS: ['B','E']
					},
					'D': {
						type: 1,
						x: 384,
						y: 338,
						compDiff: {
							3: {'1':50,'2':30,'3':20},
							2: {'2':10,'3':25,'4':25,'5':20,'6':20},
							1: {'4':10,'5':20,'6':25,'7':30,'8':15},
							
						},
						routeC: function(ships) {
							if (ships.LHA && ships.CL && ships.DD >= 2) return 'L';
							return 'H';
						}
					},
					'E': {
						type: 1,
						x: 394,
						y: 123,
						compDiff: {
							3: {'1':50,'2':30,'3':20},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':15,'5':15,'6':20,'7':20,'8':30},
							
						},
						route: 'G'
					},
					'F': {
						type: 2,
						x: 460,
						y: 188,
						resource: 3,
						amount: [30],
						end: true
					},
					'G': {
						type: 1,
						x: 508,
						y: 94,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':15,'3':20,'4':30,'5':20,'6':15},
							1: {'4':10,'5':15,'6':25,'7':35,'8':15},
							
						},
						routeC: function(ships) {
							let r = Math.random();
							if (ships.aBB + ships.CV + ships.CVB >= 4 && r < .6) return 'F';
							if (ships.CV + ships.CVB >= 3 && r < .5) return 'F';
							if (ships.aBB + ships.CA + ships.CAV + ships.CLT >= 4 && r < .4) return 'F';
							if (ships.DD + ships.CL + ships.CT <= 0) return 'F';
							return 'I';
						}
					},
					'H': {
						type: 1,
						x: 557,
						y: 294,
						compDiff: {
							3: {'1':30,'2':40,'3':20,'4':10},
							2: {'2':15,'3':20,'4':25,'5':25,'6':15},
							1: {'5':25,'6':25,'7':30,'8':20},
							
						},
						routeLC: 3,
						routeL: { 40: 'L', 36: 'J' }
						
					},
					'I': {
						type: 1,
						x: 620,
						y: 211,
						compDiff: {
							3: {'1':30,'2':40,'3':20,'4':10},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'5':20,'6':25,'7':30,'8':25},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = 'L';
							let num = ships.aBB + ships.CV + ships.CVB;
							if (num >= 6) this.showLoSPlane = 'K';
							let r = Math.random();
							if (num >= 5 && r < .75) this.showLoSPlane = 'K';
							if (num >= 4 && r < .5) this.showLoSPlane = 'K';
							return checkELoS33(getELoS33(1,3),{ 50: this.showLoSPlane, 46: 'J' });
						}
					},
					'J': {
						type: 3,
						x: 670,
						y: 302,
						end: true
					},
					'K': {
						type: 1,
						x: 660,
						y: 121,
						compDiff: {
							3: {'1':50,'2':30,'3':20},
							2: {'2':20,'3':30,'4':20,'5':30},
							1: {'4':10,'5':20,'6':30,'7':30,'8':10},
							
						},
						end: true
					},
					'L': {
						type: 1,
						x: 409,
						y: 245,
						boss: true,
						compDiff: {
							3: {'1':35,'2':30,'3':20,'4':15},
							2: {'2':20,'3':20,'4':20,'5':20,'6':20},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						end: true
					},
				}
			},
			144: {
				name: 'FS Sea',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [143],
				bgmMap: 53,
				bgmDN: 49,
				bgmNN: 2,
				bgmDB: 50,
				bgmNB: 50,
				bossnode: 13,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 157,
						y: 192,
						routeC: function(ships) {
							let num = ships.aBB + ships.CV + ships.CVB;
							if (num >= 6) return 'C';
							let r = Math.random();
							if (num >= 5 && r < .75) return 'C';
							if (num >= 4 && r < .5) return 'C';
							if (ships.aCV >= 4) return 'C';
							if (ships.CV + ships.CVB >= 3) return 'C';
							if (ships.aBB + ships.CA + ships.CAV + ships.CLT >= 5) return 'C';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 2) return 'A';
							if (ships.CL && ships.DD >= 3) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 282,
						y: 109,
						compDiff: {
							3: {'1':40,'2':20,'3':20,'4':20},
							2: {'2':20,'3':20,'4':20,'5':20,'6':20},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						route: 'E'
					},
					'B': {
						type: 1,
						x: 298,
						y: 180,
						compDiff: {
							3: {'1':40,'2':20,'3':20,'4':20},
							2: {'2':20,'3':20,'4':20,'5':20,'6':20},
							1: {'5':15,'6':25,'7':25,'8':35},
							
						},
						route: 'E'
					},
					'C': {
						type: 1,
						x: 314,
						y: 254,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':20,'3':25,'4':20,'5':20,'6':15},
							1: {'4':20,'5':20,'6':30,'7':15,'8':15},
							
						},
						route: 'F'
					},
					'D': {
						type: 2,
						x: 318,
						y: 335,
						resource: 3,
						amount: [40],
						end: true
					},
					'E': {
						type: 3,
						x: 395,
						y: 152,
						routeS: ['F','G']
					},
					'F': {
						type: 1,
						x: 425,
						y: 272,
						compDiff: {
							3: {'1':30,'2':20,'3':30,'4':10,'5':10},
							2: {'2':15,'3':30,'4':20,'5':25,'6':10},
							1: {'5':15,'6':20,'7':30,'8':35},
							
						},
						routeC: function(ships) {
							let num = ships.aBB + ships.CV + ships.CVB;
							if (num >= 6) return 'D';
							if (ships.DD <= 0) return 'D';
							if (ships.DD == 1) return 'H';
							if (num == 4) return 'H';
							if (ships.LHA) return 'I';
							if (ships.aCV >= 3) return 'H';
							if (ships.aBB + ships.CA + ships.CAV + ships.CLT >= 4) return 'H';
							return 'I';
						}
					},
					'G': {
						type: 1,
						x: 490,
						y: 84,
						compDiff: {
							3: {'1':30,'2':20,'3':30,'4':10,'5':10},
							2: {'2':15,'3':30,'4':20,'5':25,'6':10},
							1: {'5':15,'6':25,'7':35,'8':25},
							
						},
						route: 'J'
					},
					'H': {
						type: 4,
						x: 512,
						y: 196,
						resource: 1,
						lostMax: 0.5,
						route: 'J'
					},
					'I': {
						type: 1,
						x: 535,
						y: 320,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':15,'3':25,'4':25,'5':20,'6':15},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						routeLC: 3,
						routeL: { 41: 'M', 38: 'K' }
					},
					'J': {
						type: 1,
						x: 602,
						y: 110,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':20,'4':20,'5':20,'6':20},
							1: {'4':10,'5':20,'6':20,'7':30,'8':20},
							
						},
						routeLC: 3,
						routeL: { 47: 'M', 43: 'L' }
					},
					'K': {
						type: 3,
						x: 658,
						y: 305,
						end: true
					},
					'L': {
						type: 3,
						x: 682,
						y: 181,
						end: true
					},
					'M': {
						type: 1,
						x: 599,
						y: 213,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':30,'4':10},
							2: {'2':10,'3':25,'4':25,'5':20,'6':20},
							1: {'5':20,'6':20,'7':30,'8':30},
							
						},
						end: true
					},
				}
			},
			151: {
				name: 'Deep Sea Rear Ocean',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [124,134],
				bgmMap: 45,
				bgmDN: 40,
				bgmNN: 2,
				bgmDB: 49,
				bgmNB: 49,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 112,
						y: 121,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 236,
						y: 191,
						routeS: ['B','C']
					},
					'B': {
						type: 1,
						x: 249,
						y: 304,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':25,'3':25,'4':25,'5':25},
							1: {'4':5,'5':15,'6':20,'7':30,'8':30},
							
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 333,
						y: 112,
						compDiff: {
							3: {'1':40,'2':35,'3':25},
							2: {'2':30,'3':30,'4':20,'5':20},
							1: {'4':15,'5':20,'6':35,'7':30},
							
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 390,
						y: 325,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						routeC: function(ships) {
							if (ships.DD >= 3) return 'G';
							if (ships.CL && ships.DD >= 2) return 'G';
							if (isShipInList(ships.ids,445) && ships.DD >= 2) return 'G';
							return 'E';
						}
					},
					'E': {
						type: 1,
						x: 464,
						y: 208,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 469,
						y: 94,
						compDiff: {
							3: {'1':50,'2':25,'3':15,'4':10},
							2: {'2':30,'3':30,'4':30,'5':10},
							1: {'5':20,'6':25,'7':30,'8':25},
							
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return 'E';
							return 'H';
						}
					},
					'G': {
						type: 1,
						x: 554,
						y: 279,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':40,'5':15,'6':15},
							1: {'5':20,'6':25,'7':20,'8':35},
							
						},
						routeLC: 3,
						routeL: { 34: 'K', 30: 'I' }
					},
					'H': {
						type: 1,
						x: 592,
						y: 160,
						compDiff: {
							3: {'1':35,'2':35,'3':15,'4':15},
							2: {'3':30,'4':40,'5':15,'6':15},
							1: {'5':20,'6':25,'7':20,'8':35},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'J';
							this.showLoSPlane = 'K';
							return checkELoS33(getELoS33(1,3),{ 29: 'K', 25: 'J' });
						}
					},
					'I': {
						type: 3,
						x: 638,
						y: 339,
						end: true
					},
					'J': {
						type: 2,
						x: 660,
						y: 87,
						resource: 3,
						amount: [30],
						end: true
					},
					'K': {
						type: 1,
						x: 656,
						y: 268,
						boss: true,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'3':50,'4':50},
							1: {'6':50,'7':50},
							
						},
						end: true
					},
				}
			},
			152: {
				name: 'Deep Sea Rear Ocean',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [151],
				bgmMap: 40,
				bgmDN: 53,
				bgmNN: 54,
				bgmDB: 28,
				bgmNB: 28,
				bossnode: 15,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 96,
						y: 180,
						routeC: function(ships) {
							if (ships.speed <= 5) return 'A';
							if (ships.aCV <= 0) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 153,
						y: 271,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 209,
						y: 121,
						aironly: true,
						compDiff: {
							3: {'1':30,'2':30,'3':30,'4':10},
							2: {'2':30,'3':30,'4':30,'5':10},
							1: {'5':10,'6':25,'7':35,'8':30},
							
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 259,
						y: 302,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':10,'6':15,'7':40,'8':35},
							
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 301,
						y: 133,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						route: 'E'
					},
					'E': {
						type: 3,
						x: 345,
						y: 211,
						routeS: ['F','H']
					},
					'F': {
						type: 1,
						x: 364,
						y: 323,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':50,'4':20,'5':10},
							1: {'4':10,'5':15,'6':30,'7':45},
							
						},
						routeLC: 3,
						routeL: { 39: 'G', 35: 'I' }
					},
					'G': {
						type: 1,
						x: 423,
						y: 270,
						compDiff: {
							3: {'1':30,'2':20,'3':30,'4':10,'5':10},
							2: {'2':15,'3':30,'4':20,'5':25,'6':10},
							1: {'5':10,'6':20,'7':35,'8':35},
							
						},
						route: 'O'
					},
					'H': {
						type: 4,
						x: 445,
						y: 146,
						resource: 1,
						lostMax: 0.4,
						route: 'J'
					},
					'I': {
						type: 3,
						x: 490,
						y: 341,
						end: true
					},
					'J': {
						type: 1,
						x: 540,
						y: 165,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':25,'3':35,'4':30,'5':10},
							1: {'4':10,'5':15,'6':30,'7':45},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'K';
							if (ships.DD <= 1) return 'K';
							return 'M';
						}
					},
					'K': {
						type: 2,
						x: 567,
						y: 86,
						resource: 2,
						amount: [40],
						end: true
					},
					'L': {
						type: 1,
						x: 574,
						y: 354,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						routeLC: 3,
						routeL: { 29: 'O', 25: 'I' }
					},
					'M': {
						type: 3,
						x: 601,
						y: 301,
						route: 'N'
					},
					'N': {
						type: 1,
						x: 702,
						y: 312,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':25,'4':30,'5':25},
							1: {'4':10,'5':20,'6':20,'7':30,'8':20},
							
						},
						route: 'L'
					},
					'O': {
						type: 1,
						x: 510,
						y: 275,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'5':35,'6':35,'7':30},
							
						},
						end: true
					},
				}
			},
			153: {
				name: 'Deep Sea Rear Ocean',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [152],
				bgmMap: 40,
				bgmDN: 53,
				bgmNN: 54,
				bgmDB: 41,
				bgmNB: 41,
				bossnode: 13,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 96,
						y: 210,
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.DD >= 2) return 'C';
							if (isShipInList(ships.ids,445) && ships.DD >= 2) return 'C';
							if (ships.speed <= 5) return 'A';
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 189,
						y: 290,
						subonly: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'3':20,'4':30,'5':30,'6':20},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						route: 'D'
					},
					'B': {
						type: 1,
						x: 208,
						y: 211,
						subonly: true,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'3':20,'4':30,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':25,'9':5},
							
						},
						route: 'C'
					},
					'C': {
						type: 3,
						x: 268,
						y: 138,
						routeS: ['D','F']
					},
					'D': {
						type: 1,
						x: 303,
						y: 240,
						aironly: true,
						compDiff: {
							3: {'1':60,'2':25,'3':15},
							2: {'2':25,'3':50,'4':25},
							1: {'4':15,'5':25,'6':40,'7':20},
							
						},
						route: 'E'
					},
					'E': {
						type: 3,
						x: 356,
						y: 316,
						routeS: ['G','H']
					},
					'F': {
						type: 1,
						x: 357,
						y: 110,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'3':25,'4':35,'5':30,'6':10},
							1: {'5':15,'6':25,'7':35,'8':25},
							
						},
						route: 'G'
					},
					'G': {
						type: 1,
						x: 376,
						y: 202,
						aironly: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'5':10,'6':20,'7':35,'8':35},
							
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 435,
						y: 338,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':20,'3':40,'4':30,'5':10},
							1: {'5':15,'6':25,'7':30,'8':30},
							
						},
						route: 'K'
					},
					'I': {
						type: 1,
						x: 446,
						y: 222,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'5':10,'6':20,'7':35,'8':35},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (Math.random() < .4) return 'J';
							this.showLoSPlane = 'M';
							return checkELoS33(getELoS33(1,3),{ 34: 'M', 30: 'J' });
						}
					},
					'J': {
						type: 1,
						x: 465,
						y: 117,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':40,'4':20,'5':20},
							1: {'4':15,'5':20,'6':25,'7':40},
							
						},
						end: true
					},
					'K': {
						type: 1,
						x: 493,
						y: 312,
						compDiff: {
							3: {'1':40,'2':30,'3':30},
							2: {'2':25,'3':25,'4':25,'5':25},
							1: {'5':15,'6':30,'7':35,'8':20},
							
						},
						routeLC: 3,
						routeL: { 39: 'M', 35: 'L' }
					},
					'L': {
						type: 2,
						x: 614,
						y: 320,
						resource: 1,
						amount: [40],
						end: true
					},
					'M': {
						type: 1,
						x: 561,
						y: 213,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':25,'3':30,'4':30,'5':15},
							1: {'4':35,'5':40,'6':25},
							
						},
						end: true
					},
				}
			},
			154: {
				name: 'Deep Sea Rear Ocean',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [153],
				bgmMap: 48,
				bgmDN: 49,
				bgmNN: 49,
				bgmDB: 50,
				bgmNB: 50,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 115,
						y: 244,
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.DD >= 2) return 'A';
							if (isShipInList(ships.ids,445) && ships.DD >= 2) return 'A';
							if (SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3) return 'A';
							if (ships.speed <= 5) return 'C';
							if (ships.CL && ships.DD >= 2 && Math.random() < .5) return 'A';
							return 'C';
						}
					},
					'A': {
						type: 3,
						x: 205,
						y: 204,
						routeS: ['B','D']
					},
					'B': {
						type: 1,
						x: 228,
						y: 137,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'2':15,'3':15,'4':30,'5':30,'6':10},
							1: {'3':15,'4':30,'5':30,'6':25},
							
						},
						route: 'E'
					},
					'C': {
						type: 1,
						x: 264,
						y: 310,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'4':25,'5':25,'6':50},
							
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 311,
						y: 235,
						compDiff: {
							3: {'1':30,'2':25,'3':25,'4':15,'5':5},
							2: {'2':15,'3':15,'4':25,'5':25,'6':20},
							1: {'3':15,'4':25,'5':25,'6':35},
							
						},
						routeC: function(ships) {
							if (ships.speed >= 10 && SHIPDATA[ships.ids[0]].type == 'CL' && ships.DD >= 3) return 'G';
							if (ships.speed >= 10 && ships.CL && ships.DD >= 2 && Math.random() < .5) return 'G';
							if (ships.speed >= 10 && ships.CL && ships.DD >= 4) return 'G';
							return 'E';
						}
					},
					'E': {
						type: 1,
						x: 331,
						y: 133,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'4':25,'5':25,'6':50},
							
						},
						route: 'H'
					},
					'F': {
						type: 3,
						x: 380,
						y: 336,
						end: true
					},
					'G': {
						type: 3,
						x: 407,
						y: 187,
						routeS: ['I','J']
					},
					'H': {
						type: 1,
						x: 444,
						y: 89,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':10,'3':30,'4':30,'5':15,'6':15},
							1: {'3':30,'4':30,'5':15,'6':25},
							
						},
						route: 'G'
					},
					'I': {
						type: 1,
						x: 447,
						y: 275,
						aironly: true,
						compDiff: {
							3: {'1':30,'2':40,'3':15,'4':15},
							2: {'2':15,'3':30,'4':30,'5':15,'6':10},
							1: {'3':30,'4':30,'5':15,'6':25},
							
						},
						showLoSPlane: 'K',
						routeC: function(ships) {
							let los;
							if (ships.DD >= 3) {
								los = { 19: 'K', 15: 'F' };
							} else if (ships.DD == 2) {
								los = { 24: 'K', 20: 'F' };
							} else {
								los = { 34: 'K', 30: 'F' };
							}
							return checkELoS33(getELoS33(1,3),los);
						}
					},
					'J': {
						type: 2,
						x: 525,
						y: 239,
						resource: 4,
						amount: [30],
						end: true
					},
					'K': {
						type: 1,
						x: 548,
						y: 325,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':40},
							2: {'2':15,'3':20,'4':35,'5':15,'6':15},
							1: {'3':20,'4':35,'5':15,'6':30},
							
						},
						end: true
					},
				}
			},
			161: {
				name: 'Deep Sea Canal',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [123,144],
				bgmMap: 45,
				bgmDN: 52,
				bgmNN: 2,
				bgmDB: 49,
				bgmNB: 49,
				bossnode: 14,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.FBB + ships.BB + ships.BBV) errors.push('No (F)BB(V)');
					if (ships.CV + ships.CVB + ships.CVL) errors.push('No CV(L/B)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 97,
						y: 162,
						routeC: function(ships) {
							let num = ships.SS + ships.SSV;
							if (num >= ships.total) return 'A';
							if (num == 5 && ships.AS == 1) return 'A';
							if (num == 4 && ships.AS == 1 && ships.total == 5) return 'A';
							if (num == 3 && ships.AS == 1 && ships.total == 4) return 'A';
							if (num == 2 && ships.AS == 1 && ships.total == 3) return 'A';
							if (num == 4 && ships.AS == 1 && ships.DD == 1) return 'A';
							if (num == 3 && ships.AS == 1 && ships.DD == 2) return 'A';
							if (num == 2 && ships.AS == 1 && ships.CL && ships.DD >= 2) return 'A';
							if (num == 2 && ships.AS == 1 && ships.DD == 2 && ships.total == 5) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 3,
						x: 194,
						y: 229,
						routeS: ['C','D']
					},
					'B': {
						type: 1,
						x: 245,
						y: 128,
						compDiff: {
							3: {'1':40,'2':40,'3':20},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'4':15,'5':20,'6':25,'7':40},
							
						},
						route: 'E'
					},
					'C': {
						type: 1,
						x: 269,
						y: 328,
						compDiff: {
							3: {'1':40,'2':20,'3':20,'4':20},
							2: {'2':20,'3':20,'4':20,'5':20,'6':20},
							1: {'5':20,'6':20,'7':20,'8':20,'9':20},
							
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 334,
						y: 212,
						compDiff: {
							3: {'1':40,'2':20,'3':20,'4':20},
							2: {'2':20,'3':20,'4':20,'5':20,'6':20},
							1: {'5':20,'6':20,'7':20,'8':20,'9':20},
							
						},
						route: 'F'
					},
					'E': {
						type: 3,
						x: 371,
						y: 108,
						routeS: ['G','H']
					},
					'F': {
						type: 1,
						x: 408,
						y: 312,
						compDiff: {
							3: {'1':30,'2':20,'3':30,'4':20},
							2: {'2':25,'3':25,'4':30,'5':20},
							1: {'5':20,'6':40,'7':20,'8':20},
							
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 443,
						y: 234,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':30},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'F';
							if (ships.AV) return 'I';
							if (ships.speed <= 5) return 'F';
							if (ships.DD <= 0) return 'F';
							return 'I';
						}
					},
					'H': {
						type: 1,
						x: 477,
						y: 155,
						aironly: true,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'2':20,'3':30,'4':30,'5':20},
							1: {'5':20,'6':25,'7':35,'8':20},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'I';
							if (ships.AV + ships.LHA) return 'J';
							let numDaihatsu = false;
							for (let ship of FLEETS1[0].ships) {
								numDaihatsu += ship.equips.filter(eq => eq.mid == 68).length;
							}
							if (numDaihatsu) return 'J';
							if (ships.CL && ships.DD >= 2) return 'L';
							return 'I';
						}
					},
					'I': {
						type: 1,
						x: 545,
						y: 252,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'3':30,'4':30,'5':20,'6':20},
							1: {'5':15,'6':20,'7':35,'8':30},
							
						},
						routeLC: 3,
						routeL: { 12: 'N', 8: 'K' }
					},
					'J': {
						type: 2,
						x: 560,
						y: 116,
						resource: 1,
						amount: [30],
						route: 'L'
					},
					'K': {
						type: 3,
						x: 566,
						y: 337,
						end: true
					},
					'L': {
						type: 1,
						x: 607,
						y: 201,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':30,'3':30,'4':25,'5':15},
							1: {'5':30,'6':30,'7':30,'8':10},
							
						},
						routeLC: 3,
						routeL: { 29: 'N', 25: 'M' }
					},
					'M': {
						type: 3,
						x: 685,
						y: 190,
						end: true
					},
					'N': {
						type: 1,
						x: 655,
						y: 282,
						boss: true,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'3':35,'4':30,'5':35},
							1: {'4':40,'5':40,'6':20},
							
						},
						end: true
					},
				}
			},
			162: {
				name: 'Deep Sea Canal',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [161],
				bgmMap: 40,
				bgmDN: 20,
				bgmNN: 20,
				bgmDB: 28,
				bgmNB: 28,
				bossnode: 12,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 114,
						y: 133,
						routeC: function(ships) {
							let num = ships.SS + ships.SSV;
							if (num >= ships.total) return 'B';
							if (num == 5 && ships.AS == 1) return 'B';
							if (num == 4 && ships.AS == 1 && ships.total == 5) return 'B';
							if (num == 3 && ships.AS == 1 && ships.total == 4) return 'B';
							if (num == 2 && ships.AS == 1 && ships.total == 3) return 'B';
							if (num == 4 && ships.AS == 1 && ships.DD == 1) return 'B';
							if (num == 3 && ships.AS == 1 && ships.DD == 2) return 'B';
							if (num == 2 && ships.AS == 1 && ships.CL && ships.DD >= 2) return 'B';
							if (num == 2 && ships.AS == 1 && ships.DD == 2 && ships.total == 5) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 4,
						x: 156,
						y: 264,
						resource: 1,
						lostMax: 0.4,
						route: 'C'
					},
					'B': {
						type: 3,
						x: 195,
						y: 183,
						routeS: ['C','D']
					},
					'C': {
						type: 1,
						x: 261,
						y: 314,
						aironly: true,
						compDiff: {
							3: {'1':40,'2':30,'3':20,'4':10},
							2: {'1':40,'2':30,'3':30},
							1: {'4':40,'5':40,'6':20},
							
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 287,
						y: 176,
						compDiff: {
							3: {'1':35,'2':35,'3':20,'4':10},
							2: {'1':35,'2':35,'3':30},
							1: {'5':35,'6':35,'7':30},
							
						},
						routeC: function(ships) {
							if (ships.AS == 1) return 'G';
							if (ships.SS + ships.SSV >= ships.total && Math.random() < .4) return 'G';
							return 'E';
						}
					},
					'E': {
						type: 4,
						x: 324,
						y: 279,
						resource: 1,
						lostMax: 0.2,
						route: 'G'
					},
					'F': {
						type: 1,
						x: 340,
						y: 353,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'1':20,'2':30,'3':40,'4':10},
							1: {'4':40,'5':40,'6':20},
							
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= ships.total) return 'H';
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'J';
							if (ships.CV + ships.CVB >= 3) return 'J';
							return 'H';
						}
					},
					'G': {
						type: 1,
						x: 386,
						y: 236,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'1':25,'2':25,'3':40,'4':10},
							1: {'5':35,'6':30,'7':35},
							
						},
						route: 'H'
					},
					'H': {
						type: 1,
						x: 475,
						y: 286,
						compDiff: {
							3: {'1':40,'2':40,'3':10,'4':10},
							2: {'1':35,'2':35,'3':30},
							1: {'5':35,'6':35,'7':30},
							
						},
						routeLC: 3,
						routeL: { 12: 'L', 8: 'I' }
					},
					'I': {
						type: 3,
						x: 519,
						y: 205,
						end: true
					},
					'J': {
						type: 1,
						x: 555,
						y: 332,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'1':30,'2':30,'3':30,'4':10},
							1: {'5':30,'6':30,'7':40},
							
						},
						routeLC: 3,
						routeL: { 44: 'L', 40: 'K' }
					},
					'K': {
						type: 3,
						x: 645,
						y: 304,
						end: true
					},
					'L': {
						type: 1,
						x: 593,
						y: 231,
						boss: true,
						compDiff: {
							3: {'1':70,'2':30},
							2: {'2':70,'3':30},
							1: {'5':60,'6':30,'7':10},
							
						},
						end: true
					},
				}
			},
			163: {
				name: 'Deep Sea Canal',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [162],
				bgmMap: 40,
				bgmDN: 20,
				bgmNN: 20,
				bgmDB: 41,
				bgmNB: 41,
				bossnode: 13,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 88,
						y: 223,
						routeC: function(ships) {
							let num = ships.SS + ships.SSV;
							if (num >= ships.total) return 'A';
							if (num == 5 && ships.AS == 1) return 'A';
							if (num == 4 && ships.AS == 1 && ships.total == 5) return 'A';
							if (num == 3 && ships.AS == 1 && ships.total == 4) return 'A';
							if (num == 2 && ships.AS == 1 && ships.total == 3) return 'A';
							if (num == 4 && ships.AS == 1 && ships.DD == 1) return 'A';
							if (num == 3 && ships.AS == 1 && ships.DD == 2) return 'A';
							if (num == 2 && ships.AS == 1 && ships.CL && ships.DD >= 2) return 'A';
							if (num == 2 && ships.AS == 1 && ships.DD == 2 && ships.total == 5) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 3,
						x: 189,
						y: 266,
						routeS: ['C','D']
					},
					'B': {
						type: 1,
						x: 208,
						y: 139,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'3':20,'4':20,'5':25,'6':25,'7':10},
							
						},
						route: 'E'
					},
					'C': {
						type: 1,
						x: 257,
						y: 324,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'1':25,'2':25,'3':30,'4':20},
							1: {'5':35,'6':35,'7':30},
							
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 295,
						y: 243,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'1':25,'2':25,'3':30,'4':20},
							1: {'5':25,'6':25,'7':40,'8':10},
							
						},
						route: 'F'
					},
					'E': {
						type: 3,
						x: 333,
						y: 162,
						routeS: ['G','H']
					},
					'F': {
						type: 3,
						x: 358,
						y: 335,
						routeLC: 3,
						routeL: { 13: 'J', 9: 'I' }
					},
					'G': {
						type: 1,
						x: 411,
						y: 268,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'3':15,'4':15,'5':25,'6':25,'7':20},
							
						},
						route: 'K'
					},
					'H': {
						type: 1,
						x: 449,
						y: 213,
						aironly: true,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'1':25,'2':25,'3':25,'4':20,'5':5},
							1: {'5':25,'6':30,'7':40,'8':5},
							
						},
						route: 'K'
					},
					'I': {
						type: 3,
						x: 454,
						y: 321,
						end: true
					},
					'J': {
						type: 1,
						x: 499,
						y: 357,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'2':35,'3':35,'4':30},
							1: {'4':15,'5':25,'6':25,'7':25,'8':10},
							
						},
						route: 'L'
					},
					'K': {
						type: 1,
						x: 534,
						y: 303,
						compDiff: {
							3: {'1':40,'2':25,'3':25,'4':10},
							2: {'1':35,'2':25,'3':25,'4':15},
							1: {'5':25,'6':30,'7':40,'8':5},
							
						},
						routeLC: 3,
						routeL: { 44: 'L', 40: 'I' }
					},
					'L': {
						type: 1,
						x: 627,
						y: 326,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'2':25,'3':25,'4':25,'5':25},
							1: {'5':25,'6':40,'7':35},
							
						},
						route: 'M'
					},
					'M': {
						type: 1,
						x: 655,
						y: 270,
						boss: true,
						compDiff: {
							3: {'1':30,'2':30,'3':25,'4':15},
							2: {'1':25,'2':25,'3':30,'4':20},
							1: {'6':40,'7':60},
							
						},
						end: true
					},
				}
			},
			164: {
				name: 'Deep Sea Canal',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [163],
				bgmMap: 48,
				bgmDN: 27,
				bgmNN: 27,
				bgmDB: 50,
				bgmNB: 50,
				bossnode: 14,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 93,
						y: 167,
						routeC: function(ships) {
							let num = ships.SS + ships.SSV;
							if (num >= ships.total) return 'B';
							if (num == 5 && ships.AS == 1) return 'B';
							if (num == 4 && ships.AS == 1 && ships.total == 5) return 'B';
							if (num == 3 && ships.AS == 1 && ships.total == 4) return 'B';
							if (num == 2 && ships.AS == 1 && ships.total == 3) return 'B';
							if (num == 4 && ships.AS == 1 && ships.DD == 1) return 'B';
							if (num == 3 && ships.AS == 1 && ships.DD == 2) return 'B';
							if (num == 2 && ships.AS == 1 && ships.CL && ships.DD >= 2) return 'B';
							if (num == 2 && ships.AS == 1 && ships.DD == 2 && ships.total == 5) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 3,
						x: 154,
						y: 286,
						routeS: ['C','D']
					},
					'B': {
						type: 3,
						x: 202,
						y: 145,
						routeS: ['E','F']
					},
					'C': {
						type: 1,
						x: 232,
						y: 345,
						aironly: true,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'1':20,'2':30,'3':30,'4':20},
							1: {'5':20,'6':30,'7':40,'8':10},
							
						},
						route: 'H'
					},
					'D': {
						type: 1,
						x: 246,
						y: 260,
						aironly: true,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'1':20,'2':30,'3':30,'4':20},
							1: {'5':20,'6':30,'7':30,'8':20},
							
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'G';
							if (ships.CV + ships.CVB >= 3) return 'G';
							if (ships.speed <= 5) return 'G';
							return 'H';
						}
					},
					'E': {
						type: 1,
						x: 281,
						y: 203,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'1':20,'2':20,'3':30,'4':30},
							1: {'5':35,'6':35,'7':30},
							
						},
						route: 'J'
					},
					'F': {
						type: 1,
						x: 315,
						y: 150,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'1':20,'2':20,'3':30,'4':30},
							1: {'5':20,'6':20,'7':45,'8':15},
							
						},
						route: 'J'
					},
					'G': {
						type: 1,
						x: 323,
						y: 269,
						subonly: true,
						compDiff: {
							3: {'1':30,'2':30,'3':20,'4':20},
							2: {'1':15,'2':15,'3':30,'4':30,'5':10},
							1: {'3':10,'4':10,'5':25,'6':25,'7':25,'8':5},
							
						},
						route: 'H'
					},
					'H': {
						type: 1,
						x: 370,
						y: 345,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'1':20,'2':30,'3':30,'4':20},
							1: {'5':20,'6':30,'7':40,'8':10},
							
						},
						routeC: function(ships) {
							this.showLoSPlane = 'L';
							if (ships.aBB + ships.CV + ships.CVB >= 3) this.showLoSPlane = 'K';
							if (ships.DD <= 0) this.showLoSPlane = 'K';
							return checkELoS33(getELoS33(1,3),{ 49: this.showLoSPlane, 45: 'I' });
						}
					},
					'I': {
						type: 3,
						x: 400,
						y: 288,
						end: true
					},
					'J': {
						type: 1,
						x: 411,
						y: 218,
						compDiff: {
							3: {'1':35,'2':35,'3':30},
							2: {'1':30,'2':35,'3':35},
							1: {'4':40,'5':25,'6':25,'7':10},
							
						},
						routeLC: 3,
						routeL: { 12: 'L', 10: 'I' }
					},
					'K': {
						type: 1,
						x: 484,
						y: 354,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						route: 'M'
					},
					'L': {
						type: 4,
						x: 497,
						y: 305,
						resource: 1,
						lostMax: 0.2,
						route: 'M'
					},
					'M': {
						type: 1,
						x: 605,
						y: 348,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'1':25,'2':25,'3':25,'4':25},
							1: {'5':60,'6':40},
							
						},
						route: 'N'
					},
					'N': {
						type: 1,
						x: 630,
						y: 261,
						boss: true,
						compDiff: {
							3: {'1':35,'2':30,'3':35},
							2: {'1':15,'2':15,'3':30,'4':30,'5':10},
							1: {'6':40,'7':60},
							
						},
						end: true
					},
				}
			},
			171: {
				name: 'Deep Sea Central Ocean',
				nameT: '1',
				fleetTypes: [0],
				requiresMap: [124,64],
				bgTint: 0xFF0000,
				bgmMap: 40,
				bgmDN: 30,
				bgmNN: 30,
				bgmDB: 41,
				bgmNB: 41,
				bossnode: 12,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				additionalChecks: function(ships,errors) {
					if (ships.FBB + ships.BB + ships.BBV) errors.push('No (F)BB(V)');
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 110,
						y: 215,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 203,
						y: 185,
						routeS: ['B','C']
					},
					'B': {
						type: 1,
						x: 251,
						y: 277,
						compDiff: {
							3: {'1':100},
							2: {'2':100},
							1: {'4':20,'5':30,'6':40,'7':10},
							
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 306,
						y: 148,
						compDiff: {
							3: {'1':100},
							2: {'2':100},
							1: {'4':20,'5':40,'6':40},
							
						},
						routeC: function(ships) {
							if (ships.CA + ships.CAV + ships.aCV >= 3) return 'F';
							if (ships.SS + ships.SSV) return 'F';
							if (ships.DD <= 0) return 'F';
							return (Math.random() < .5)? 'E' : 'F';
						}
					},
					'D': {
						type: 1,
						x: 356,
						y: 323,
						compDiff: {
							3: {'1':100},
							2: {'2':100},
							1: {'5':70,'6':30},
							
						},
						routeC: function(ships) {
							if (ships.DD <= 1) return 'E';
							if (ships.speed <= 5) return 'E';
							if (ships.aCV >= 2) return 'E';
							if (ships.CL && ships.DD >= 3) return 'I';
							if (ships.CAV + ships.AV + ships.DD >= 4) return 'I';
							return 'E';
						}
					},
					'E': {
						type: 1,
						x: 376,
						y: 243,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':30},
							
						},
						routeC: function(ships) {
							if (ships.CA + ships.CAV + ships.aCV >= 4) return 'G';
							if (ships.speed <= 5) return 'G';
							if (ships.CA + ships.CAV >= 2 && Math.random() < .5) return 'G';
							return 'I';
						}
					},
					'F': {
						type: 1,
						x: 433,
						y: 106,
						compDiff: {
							3: {'1':100},
							2: {'2':100},
							1: {'5':70,'6':30},
							
						},
						routeC: function(ships) {
							if (ships.LHA + ships.aCV) {
								this.showLoSPlane = 'G';
							} else if (ships.CL && ships.DD >= 2) {
								this.showLoSPlane = 'K';
							} else {
								this.showLoSPlane = 'G';
							}
							return checkELoS33(getELoS33(1,3),{ 29: this.showLoSPlane, 25: 'H' });
						}
					},
					'G': {
						type: 1,
						x: 503,
						y: 189,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'2':50,'3':50},
							1: {'5':50,'6':50},
							
						},
						routeLC: 3,
						routeL: { 40: 'L', 36: 'J' }
					},
					'H': {
						type: 3,
						x: 515,
						y: 74,
						end: true
					},
					'I': {
						type: 1,
						x: 535,
						y: 335,
						compDiff: {
							3: {'1':30,'2':35,'3':20,'4':15},
							2: {'1':15,'2':20,'3':30,'4':35},
							1: {'5':15,'6':20,'7':50,'8':15},
							
						},
						routeLC: 3,
						routeL: { 22: 'L', 18: 'J' }
					},
					'J': {
						type: 3,
						x: 551,
						y: 265,
						end: true
					},
					'K': {
						type: 1,
						x: 595,
						y: 129,
						compDiff: {
							3: {'1':30,'2':35,'3':20,'4':15},
							2: {'1':15,'2':20,'3':30,'4':35},
							1: {'5':15,'6':20,'7':50,'8':15},
							
						},
						route: 'L'
					},
					'L': {
						type: 1,
						x: 643,
						y: 250,
						boss: true,
						compDiff: {
							3: {'1':100},
							2: {'2':100},
							1: {'6':60,'7':40},
							
						},
						end: true
					},
				}
			},
			172: {
				name: 'Deep Sea Central Ocean',
				nameT: '2',
				fleetTypes: [0],
				requiresMap: [171],
				bgTint: 0xFF0000,
				bgmMap: 16,
				bgmDN: 31,
				bgmNN: 31,
				bgmDB: 50,
				bgmNB: 50,
				bossnode: 11,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 124,
						y: 169,
						routeC: function(ships) {
							if (ships.speed <= 5) return 'A';
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 199,
						y: 296,
						subonly: true,
						compDiff: {
							3: {'1':50,'2':50},
							2: {'2':50,'3':50},
							1: {'5':50,'6':50},
							
						},
						route: 'D'
					},
					'B': {
						type: 3,
						x: 266,
						y: 209,
						routeS: ['C','D']
					},
					'C': {
						type: 1,
						x: 312,
						y: 114,
						aironly: true,
						compDiff: {
							3: {'1':80,'2':20},
							2: {'2':80,'3':20},
							1: {'4':25,'5':35,'6':40},
							
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 4) return 'G';
							if (ships.SS + ships.SSV >= 3 && ships.AS == 1) return 'G';
							if (ships.speed <= 5) return 'E';
							if (ships.aCV >= 4) return 'E';
							if (ships.aBB >= 4) return 'E';
							return 'G';
						}
					},
					'D': {
						type: 1,
						x: 366,
						y: 307,
						aironly: true,
						compDiff: {
							3: {'1':80,'2':20},
							2: {'2':80,'3':20},
							1: {'4':30,'5':40,'6':30},
							
						},
						routeC: function(ships) {
							if (ships.DD <= 1) return 'E';
							if (ships.speed <= 5) return 'E';
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'E';
							if (ships.CL && ships.DD >= 2) return 'H';
							if (ships.CAV + ships.LHA + ships.DD >= 4) return 'H';
							return 'E';
						}
					},
					'E': {
						type: 1,
						x: 390,
						y: 211,
						compDiff: {
							3: {'1':70,'2':30},
							2: {'2':70,'3':30},
							1: {'5':50,'6':50},
							
						},
						route: 'H'
					},
					'F': {
						type: 3,
						x: 448,
						y: 180,
						end: true
					},
					'G': {
						type: 1,
						x: 496,
						y: 101,
						compDiff: {
							3: {'1':30,'2':20,'3':30,'4':10,'5':10},
							2: {'2':15,'3':30,'4':20,'5':25,'6':10},
							1: {'5':20,'6':30,'7':40,'8':10},
							
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'I';
							if (ships.speed <= 5) return 'H';
							let num = ships.aBB + ships.CV + ships.CVB;
							if (num >= 5) return 'H';
							if (ships.CL && ships.DD >= 2) return 'I';
							if (ships.AV + ships.DD >= 3) return 'I';
							let r = Math.random();
							if (num <= 2 && r < .7) return 'I';
							if (num == 3 && r < .5) return 'I';
							if (num == 4 && r < .3) return 'I';
							return 'H';
						}
					},
					'H': {
						type: 1,
						x: 516,
						y: 230,
						compDiff: {
							3: {'1':100},
							2: {'2':100},
							1: {'5':100},
							
						},
						routeLC: 3,
						routeL: { 49: 'K', 45: 'F' }
					},
					'I': {
						type: 1,
						x: 637,
						y: 232,
						compDiff: {
							3: {'1':100},
							2: {'2':100},
							1: {'5':50,'6':50},
							
						},
						routeLC: 3,
						routeL: { 20: 'K', 16: 'J' }
					},
					'J': {
						type: 3,
						x: 645,
						y: 129,
						end: true
					},
					'K': {
						type: 1,
						x: 480,
						y: 314,
						boss: true,
						compDiff: {
							3: {'1':100},
							2: {'2':100},
							1: {'6':60,'7':40},
							
						},
						end: true
					},
				}
			},
			173: {
				name: 'Deep Sea Central Ocean',
				nameT: '3',
				fleetTypes: [0],
				requiresMap: [171],
				bgTint: 0xFF0000,
				bgmMap: 17,
				bgmDN: 55,
				bgmNN: 56,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 14,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 672,
						y: 242,
						routeC: function(ships) {
							if (ships.speed <= 5) return 'A';
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 617,
						y: 153,
						subonly: true,
						compDiff: {
							3: {'1':40,'2':30,'3':15,'4':15},
							2: {'1':40,'2':25,'3':25,'4':10},
							1: {'5':40,'6':40,'7':20},
							
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 567,
						y: 221,
						compDiff: {
							3: {'1':30,'2':40,'3':30},
							2: {'1':25,'2':35,'3':35,'4':5},
							1: {'5':40,'6':25,'7':35},
							
						},
						routeC: function(ships) {
							if (ships.CL && ships.DD >= 2) return 'D';
							if (ships.AV + ships.DD >= 2 && Math.random() < .8) return 'D';
							if (ships.speed <= 5 && Math.random() < .75) return 'C';
							if (ships.CV + ships.CVB >= 3 && Math.random() < .6) return 'C';
							if (ships.aBB >= 3 && Math.random() < .6) return 'C';
							return (Math.random() < .35)? 'C' : 'E';
						}
					},
					'C': {
						type: 1,
						x: 524,
						y: 307,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'5':20,'6':20,'7':30,'8':30},
							
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 506,
						y: 140,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 479,
						y: 225,
						subonly: true,
						compDiff: {
							3: {'1':25,'2':25,'3':25,'4':25},
							2: {'3':25,'4':25,'5':25,'6':25},
							1: {'5':25,'6':25,'7':25,'8':25},
							
						},
						route: 'G'
					},
					'F': {
						type: 4,
						x: 430,
						y: 326,
						resource: 1,
						lostMax: 0.5,
						route: 'G'
					},
					'G': {
						type: 3,
						x: 377,
						y: 224,
						routeS: ['H','J']
					},
					'H': {
						type: 1,
						x: 295,
						y: 294,
						compDiff: {
							3: {'1':70,'2':30},
							2: {'2':50,'3':50},
							1: {'6':40,'7':60},
							
						},
						route: 'K'
					},
					'I': {
						type: 3,
						x: 294,
						y: 91,
						end: true
					},
					'J': {
						type: 1,
						x: 286,
						y: 176,
						compDiff: {
							3: {'1':100},
							2: {'2':100},
							1: {'6':50,'7':50},
							
						},
						routeLC: 3,
						routeL: { 59: 'L', 55: 'I' }
					},
					'K': {
						type: 4,
						x: 200,
						y: 322,
						resource: 1,
						lostMax: 0.5,
						routeLC: 3,
						routeL: { 39: 'L', 35: 'M' }
					},
					'L': {
						type: 1,
						x: 138,
						y: 204,
						compDiff: {
							3: {'1':70,'2':30},
							2: {'2':70,'3':30},
							1: {'6':50,'7':50},
							
						},
						route: 'N'
					},
					'M': {
						type: 3,
						x: 105,
						y: 303,
						end: true
					},
					'N': {
						type: 1,
						x: 98,
						y: 113,
						boss: true,
						compDiff: {
							3: {'1':100},
							2: {'2':100},
							1: {'6':50,'7':50},
							
						},
						end: true
					},
				}
			},
			174: {
				name: 'Deep Sea Central Ocean',
				nameT: '4',
				fleetTypes: [0],
				requiresMap: [171],
				bgTint: 0xFF0000,
				bgmMap: 17,
				bgmDN: 55,
				bgmNN: 56,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 4,
				hpmode: 1,
				bossHP: 1,
				maphp: {
					3: { 1: 1 },
					2: { 1: 1 },
					1: { 1: 1 },
				},
				nodes: {
					'Start': {
						type: 0,
						x: 117,
						y: 121,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 217,
						y: 211,
						compDiff: {
							3: {'1':80,'2':20},
							2: {'2':80,'3':20},
							1: {'4':40,'5':40,'6':20},
							
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 335,
						y: 269,
						compDiff: {
							3: {'1':80,'2':20},
							2: {'2':80,'3':20},
							1: {'4':40,'5':40,'6':20},
							
						},
						route: 'C'
					},
					'C': {
						type: 1,
						x: 490,
						y: 302,
						compDiff: {
							3: {'1':100},
							2: {'2':80,'3':20},
							1: {'4':60,'5':40},
							
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 642,
						y: 253,
						boss: true,
						compDiff: {
							3: {'1':100},
							2: {'2':80,'3':20},
							1: {'4':60,'5':40},
							
						},
						end: true
					},
				}
			},
		}
	};