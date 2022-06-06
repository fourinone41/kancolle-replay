MAPDATA[52] = 
	{
		name: 'Fall 2021 Event',
		date: '2021-10-29',
		diffMode: 2,
		allowDiffs: [4,1,2,3],
		allowFleets: [0,1,2,3,7],
		allowLBAS: true,
		allowVanguard: true,
		newResupplyCosts: true,
		allowStrongFF: true,
		bannerImg: 'assets/maps/52/banner1.png',
		bannerImgAlt: 'assets/maps/52/banner2.png',
		transportCalc: transportCalcStandard,
		overrideStats: {
			
		},
		friendFleetWaves: {
			1: { date: '2021-10-29' },
			2: { date: '2021-11-19' },
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Northern Inshore Patrols',
				fleetTypes: [0],
				bgmMap: 188,
				bgmDN: 189,
				bgmNN: 189,
				bgmDB: 92,
				bgmNB: 92,
				bossnode: ['N','R'],
				overrideBGM: {
					13: { bgmDN: 81, bgmNN: 81 },
					18: { bgmDB: 91, bgmNB: 91 },
				},
				giveLock: ['52_1'],
				checkLock: ['52_2','52_3','52_4'],
				lockSpecial: true,
				parts: {
					1: {
						currentBoss: 'N',
						maphp: {
							3: { 1: 480 },
							2: { 1: 450 },
							1: { 1: 420 },
							4: { 1: 420 },
						},
						finalhp: {
							3: 98,
							2: 98,
							1: 90,
							4: 90,
						},
					},
					2: {
						currentBoss: 'R',
						maphp: {
							3: { 1: 2800 },
							2: { 1: 2600 },
							1: { 1: 2300 },
							4: { 1: 2000 },
						},
						finalhp: {
							3: 570,
							2: 570,
							1: 570,
							4: 570,
						},
					},
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '1_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('route', 2, 1, [
							{ type: 'battle', node: 'M', rank: 'A', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 } },
						])
					},
					
				},
				getMapBanner: function() {
					return CHDATA.event.maps[1].isAfterSanma ? 'assets/maps/52/1m_2.png' : 'assets/maps/52/1m.png';
				},
				additionalChecks: function(ships,errors) {
					if ((!CHDATA.event.maps[1].isAfterSanma && CHDATA.fleets.ffWave == 2) || (CHDATA.event.maps[1].isAfterSanma && CHDATA.fleets.ffWave == 1)) {
						errors.push('Note: "Wave 1" disables locks for this map');
						CHDATA.event.maps[1].isAfterSanma = CHDATA.fleets.ffWave-1;
						$('#srtMapImg').attr('src',this.getMapBanner());
					}
				},
				bonuses: {
					base: [
						{ dmg: 1.1, acc: 1.1, ev: 1.1, idsBase: [15,16,18,38,40,41,49,63,64,100,101,114,631] },
						{ dmg: 1.1, acc: 1.1, ev: 1.1, idsBase: [35,511,516] },
						{ dmg: 1.1, acc: 1.1, ev: 1.1, idsBase: [699] },
						{ dmg: 1.1, acc: 1.1, ev: 1.1, types: ['DE'] },
					],
					p2: [
						{ dmg: 1.15, idsBase: [15,16,18,38,40,41,49,63,64,100,101,114,631] },
						{ dmg: 1.15, idsBase: [35,511,516] },
						{ dmg: 1.15, idsBase: [517,518,524,565,699] },
						{ dmg: 1.15, idsBase: [699] },
						{ dmg: 1.15, types: ['DE'] },
					],
					N: [
						{ dmg: 1.15, idsBase: [15,16,18,38,40,41,49,63,64,100,101,114,631] },
						{ dmg: 1.25, idsBase: [517,518,524,565,699] },
					],
					R: [
						{ dmg: 1.15, ctypes: [6], on:[1821,1822,1823,1824,1825,1826] },
						{ dmg: 1.2, idsBase: [83,110,111], on:[1821,1822,1823,1824,1825,1826] },
						{ dmg: 1.38, reqEquipTypes: [TYPE3SHELL], on:[1821,1822,1823,1824,1825,1826] },
						{ dmg: 1.3, reqEquipTypes: [SEAPLANEBOMBER,SEAPLANEFIGHTER], on:[1821,1822,1823,1824,1825,1826] },
						{ dmg: 1.1, reqEquipTypes: [SEAPLANEBOMBER,SEAPLANEFIGHTER], reqEquipTypesNum: 2, on:[1821,1822,1823,1824,1825,1826] },
						{ dmg: 1.4, reqEquipTypes: [DIVEBOMBER], on:[1821,1822,1823,1824,1825,1826] },
						{ dmg: 1.6, reqEquipTypes: [DIVEBOMBER], reqEquipTypesNum: 2, on:[1821,1822,1823,1824,1825,1826] },
					],
				},
				startCheck: function(ships) {
					chApplyBonus(this.bonuses.base);
					if (CHDATA.event.maps[1].isAfterSanma) chGiveLockAllCurrent('52_1');
					return 'Start';
				},
				nodes: {
					'Start': {
						type: 0,
						x: 71,
						y: 209,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 130,
						y: 216,
						routeS: ['B','D']
					},
					'B': {
						type: 1,
						x: 150,
						y: 259,
						raid: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':60},
							2: {'Medium 1':40,'Medium 2':60},
							1: {'Easy 1':40,'Easy 2':60},
							4: {'Casual 1':50,'Casual 2':50},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 2':50,'Hard 3':50},
							2: {'Medium 2':60,'Medium 3':40},
							1: {'Easy 2':60,'Easy 3':40},
							4: {'Casual 2':60,'Casual 3':40},
						},
						debuffGive: function() {
							CHDATA.sortie.B = 1;
						},
						route: 'C'
					},
					'C': {
						type: 1,
						x: 175,
						y: 314,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':60,'Easy 2':40},
							4: {'Casual 1':60,'Casual 2':40},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 3':100},
						},
						routeC: function(ships) {
							if (ships.speed >= 15) return 'F';
							if (ships.aCV >= 3) return 'E';
							if (ships.DD + ships.DE >= 3) return 'F';
							if (ships.DD >= 2 && ships.speed >= 10) return 'F';
							return 'E';
						}
					},
					'D': {
						type: 1,
						x: 188,
						y: 223,
						subonly: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':10,'Hard 6':10},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':20,'Medium 4':20,'Medium 5':10,'Medium 6':10},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':30,'Easy 4':30,'Easy 5':10,'Easy 6':10},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':15,'Casual 4':15},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 5':50,'Hard 6':50},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':20,'Medium 4':20,'Medium 5':10,'Medium 6':10},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':30,'Easy 4':30,'Easy 5':10,'Easy 6':10},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':15,'Casual 4':15},
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 274,
						y: 258,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':60,'Easy 2':40},
							4: {'Casual 1':60,'Casual 2':40},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 2':30,'Casual 3':70},
						},
						routeC: function(ships) {
							if (CHDATA.sortie.B) return 'F';
							if (ships.CL) {
								if (ships.DD + ships.DE >= 2) return 'G';
								if (ships.AO + ships.AS) return 'G';
								if (ships.speed >= 10) return 'G';
								return 'F';
							}
							if (ships.aBB + ships.aCV >= 3) return 'F';
							if (ships.DD + ships.DE >= 3) return 'G';
							return 'F';
						}
					},
					'F': {
						type: 1,
						x: 352,
						y: 301,
						subonly: true,
						compDiff: {
							3: {'Hard 1':15,'Hard 2':15,'Hard 3':20,'Hard 4':20,'Hard 5':15,'Hard 6':15},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':20,'Medium 4':20,'Medium 5':15,'Medium 6':15},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':25,'Easy 4':25,'Easy 5':15,'Easy 6':15},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 5':50,'Hard 6':50},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':20,'Medium 4':20,'Medium 5':15,'Medium 6':15},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':25,'Easy 4':25,'Easy 5':15,'Easy 6':15},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						routeC: function(ships) {
							if (ships.speed >= 15) return 'I';
							if (ships.aBB + ships.aCV >= 4) return 'H';
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'H';
							if (ships.aCV + +isShipInList(ships.ids,161) >= 3) return 'H';
							return 'I';
						}
					},
					'G': {
						type: 3,
						x: 375,
						y: 200,
						routeS: ['J','L']
					},
					'H': {
						type: 1,
						x: 415,
						y: 245,
						raid: true,
						compDiff: {
							3: {'Hard 1':35,'Hard 2':65},
							2: {'Medium 1':35,'Medium 2':65},
							1: {'Easy 1':35,'Easy 2':65},
							4: {'Casual 1':40,'Casual 2':60},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 2':40,'Casual 3':60},
						},
						route: 'I'
					},
					'I': {
						type: 1,
						x: 426,
						y: 317,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':60},
							2: {'Medium 1':40,'Medium 2':60},
							1: {'Easy 1':40,'Easy 2':60},
							4: {'Casual 1':40,'Casual 2':60},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 2':40,'Casual 3':60},
						},
						showLoSPlane: 'N',
						routeC: function(ships) {
							let vals = {
								3: { 58: 'N', 54: 'K' },
								2: { 47: 'N', 44: 'K' },
								1: { 38: 'N', 36: 'K' },
								4: { 31: 'N', 30: 'K' },
							}[getDiff()];
							let los = getELoS33(1,4);
							return checkELoS33(los,vals);
						}
					},
					'J': {
						type: 1,
						x: 476,
						y: 117,
						setupSpecial: function() {
							chApplyBonus(MAPDATA[52].maps[1].bonuses.p2);
						},
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':30,'Medium 3':30},
							1: {'Easy 1':40,'Easy 2':30,'Easy 3':30},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						route: 'M'
					},
					'K': {
						type: 3,
						x: 498,
						y: 332,
						end: true
					},
					'L': {
						type: 1,
						x: 520,
						y: 224,
						raid: true,
						setupSpecial: function() {
							chApplyBonus(MAPDATA[52].maps[1].bonuses.p2);
						},
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 3':100},
						},
						// compDiffC: {
							// 3: {'Hard 2':100},
							// 2: {'Medium 2':100},
							// 1: {'Easy 2':100},
							// 4: {'Casual 2':100},
						// },
						get end() {
							return !checkRoute(1);
						},
						routeC: function(ships) {
							if (ships.speed >= 20) return 'P';
							if (ships.aCV >= 3) return 'O';
							if (ships.DD + ships.DE <= 1) return 'O';
							return 'P';
						}
					},
					'M': {
						type: 1,
						x: 545,
						y: 89,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':30,'Hard 3':40},
							2: {'Medium 1':30,'Medium 2':30,'Medium 3':40},
							1: {'Easy 1':30,'Easy 2':30,'Easy 3':40},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						end: true
					},
					'N': {
						type: 1,
						x: 574,
						y: 270,
						boss: true,
						setupSpecial: function() {
							chApplyBonus(MAPDATA[52].maps[1].bonuses.N);
						},
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':60,'Easy 2':40},
							4: {'Casual 1':60,'Casual 2':40},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 2':30,'Casual 3':70},
						},
						end: true
					},
					'O': {
						type: 1,
						x: 504,
						y: 159,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':10,'Hard 6':10},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':20,'Medium 4':20,'Medium 5':10,'Medium 6':10},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':10,'Easy 6':10},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':15,'Casual 4':15},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 5':50,'Hard 6':50},
							2: {'Medium 5':50,'Medium 6':50},
							1: {'Easy 5':50,'Easy 6':50},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':15,'Casual 4':15},
						},
						route: 'P'
					},
					'P': {
						type: 1,
						x: 578,
						y: 192,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':45,'Hard 2':30,'Hard 3':25},
							2: {'Medium 1':45,'Medium 2':30,'Medium 3':25},
							1: {'Easy 1':45,'Easy 2':30,'Easy 3':25},
							4: {'Casual 1':45,'Casual 2':30,'Casual 3':25},
						},
						showLoSPlane: 'R',
						routeC: function(ships) {
							let vals = {
								3: { 62: 'R', 55: 'Q' },
								2: { 50: 'R', 45: 'Q' },
								1: { 40: 'R', 37: 'Q' },
								4: { 32: 'R', 31: 'Q' },
							}[getDiff()];
							let los = getELoS33(1,4);
							return checkELoS33(los,vals);
						}
					},
					'Q': {
						type: 3,
						x: 661,
						y: 229,
						hidden: 1,
						end: true
					},
					'R': {
						type: 1,
						x: 612,
						y: 112,
						hidden: 1,
						boss: true,
						setupSpecial: function() {
							chApplyBonus(MAPDATA[52].maps[1].bonuses.R);
						},
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 3':100},
						},
						compDiffC: {
							3: {'Hard 2':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Operation Nangou',
				fleetTypes: [0],
				bgmMap: 190,
				bgmDN: 191,
				bgmNN: 191,
				bgmDB: 192,
				bgmNB: 192,
				bossnode: ['Q','U'],
				giveLock: '52_2',
				checkLock: ['52_1','52_3','52_4'],
				lbas: 2,
				lbasSortie: 1,
				lbX: 639,
				lbY: 127,
				parts: {
					1: {
						currentBoss: 'Q',
						transport: 'O',
						maphp: {
							3: { 1: 650  },
							2: { 1: 550 },
							1: { 1: 480 },
							4: { 1: 480 },
						},
						finalhp: null,
					},
					2: {
						currentBoss: 'U',
						transport: null,
						maphp: {
							3: { 1: 920  },
							2: { 1: 880 },
							1: { 1: 800 },
							4: { 1: 480 },
						},
						finalhp: {
							3: 160,
							2: 160,
							1: 160,
							4: 96,
						},
					},
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('route', 1, 2, [
							{ type: 'battle', node: 'G', rank: 'A', timesRequiredPerDiff: { 1:1, 2:1, 3:1 } },
							{ type: 'battle', node: 'K', rank: 'A', timesRequiredPerDiff: { 1:1, 2:1, 3:1 } },
							{ type: 'ReachNode', node: 'K', key: 'K_r', timesRequiredPerDiff: { 4:1 } },
							{ type: 'battle', node: 'L', rank: 'A', timesRequiredPerDiff: { 1:1, 2:1, 3:2 } },
						])
					},
					2: {
						images: [{ name: '2_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('route', 2, 2, [
							{ type: 'AirState', node: 'C', airState: 'AS', timesRequiredPerDiff: { 1:1, 2:1, 3:1 } },
							{ type: 'battle', node: 'P', rank: 'A', timesRequiredPerDiff: { 3:1 } },
							{ type: 'AirState', node: 'AB', airState: 'AS', timesRequiredPerDiff: { 1:1, 2:1, 3:1 } },
						], { routeUnlockRequired: 1 } )
					},
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
					chance: { 3: .15, 2: .15, 1: .15, 4: .15 },
					highAltitude: { 3: 1, 2: 1 },
					compName: 'AB',
					compDiff: {
						3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':40},
						2: {'Medium 1':30,'Medium 2':40,'Medium 3':30},
						1: {'Easy 1':25,'Easy 2':50,'Easy 3':25},
						4: {'Casual 1':25,'Casual 2':50,'Casual 3':25},
					},
				},
				bonuses: {
					base: [
						{ dmg: 1.085, acc: 1.125, ev: 1.1, idsBase: [14,43,167,170,181,472,475,485] },
						{ dmg: 1.25, acc: 1.1, ev: 1.1, idsBase: [161,162,460,621] },
						{ dmg: 1.265, acc: 1.1, ctypes: [51,75,76] },
						{ dmg: 1.125, acc: 1.1, ev: 1.125, types: ['DD'] },
						{ dmg: 1.36, acc: 1.36, ev: 1.36, types: ['DE'] },
					],
					QU: [
						{ dmg: 1.11, idsBase: [14,43,167,170,181,472,475,485] },
						{ dmg: 1.18, idsBase: [161,162,460,621] },
						{ dmg: 1.18, ctypes: [51,75,76] },
						{ dmg: 1.22, types: ['DE'] },
					],
				},
				startCheck: function(ships) {
					chApplyBonus(this.bonuses.base);
					return 'Start';
				},
				nodes: {
					'Start': {
						type: 0,
						x: 166,
						y: 320,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 277,
						y: 304,
						distance: 7,
						raid: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':35,'Hard 3':25},
							2: {'Medium 1':40,'Medium 2':35,'Medium 3':25},
							1: {'Easy 1':40,'Easy 2':35,'Easy 3':25},
							4: {'Casual 1':40,'Casual 2':35,'Casual 3':25},
						},
						routeC: function(ships) {
							if (ships.speed >= 20) return 'B';
							if (ships.aBB + ships.CV + ships.CVB + ships.CA + ships.CAV) return 'E';
							if (ships.speed >= 15) return 'B';
							if (ships.DD + ships.DE >= 6) return 'B';
							if (ships.DD + ships.DE >= 5 && ships.CL + ships.CT) return 'B';
							if (ships.DD + ships.DE >= 5 && ships.speed >= 10) return 'B';
							if (ships.DD + ships.DE >= 4 && ships.speed >= 10 && ships.CVL <= 1 && ships.CL <= 1) return 'B';
							return 'E';
						}
					},
					'B': {
						type: 1,
						x: 326,
						y: 209,
						distance: 5,
						subonly: true,
						compDiff: {
							3: {'Hard 1':15,'Hard 2':10,'Hard 3':30,'Hard 4':20,'Hard 5':15,'Hard 6':10},
							2: {'Medium 1':15,'Medium 2':10,'Medium 3':30,'Medium 4':20,'Medium 5':15,'Medium 6':10},
							1: {'Easy 1':10,'Easy 2':15,'Easy 3':30,'Easy 4':20,'Easy 5':15,'Easy 6':10},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':30,'Casual 4':20},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 5':60,'Hard 6':40},
							2: {'Medium 1':15,'Medium 2':10,'Medium 3':30,'Medium 4':20,'Medium 5':15,'Medium 6':10},
							1: {'Easy 1':10,'Easy 2':15,'Easy 3':30,'Easy 4':20,'Easy 5':15,'Easy 6':10},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':30,'Casual 4':20},
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 364,
						y: 121,
						distance: 4,
						raid: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':30,'Medium 3':30},
							1: {'Easy 1':40,'Easy 2':30,'Easy 3':30},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						get end() {
							return !checkRoute(2);
						},
						route: 'R'
					},
					'D': {
						type: 3,
						x: 384,
						y: 187,
						distance: 4,
						routeS: ['C','F']
					},
					'E': {
						type: 1,
						x: 392,
						y: 286,
						distance: 5,
						raid: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':40,'Hard 3':30},
							2: {'Medium 1':30,'Medium 2':40,'Medium 3':30},
							1: {'Easy 1':30,'Easy 2':40,'Easy 3':30},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB) return 'I';
							if (ships.aBB >= 2) return 'I';
							if (ships.CA + ships.CAV >= 3) return 'I';
							if (ships.DD + ships.DE <= 1) return 'I';
							if (ships.DD + ships.DE >= 5) return 'B';
							if (ships.DD + ships.DE >= 3) {
								if (ships.CVL + ships.CL) return 'B';
								return 'I';
							}
							if (ships.speed <= 5) return 'I';
							return 'B';
						}
					},
					'F': {
						type: 3,
						x: 443,
						y: 166,
						distance: 3,
						routeS: ['G','J']
					},
					'G': {
						type: 1,
						x: 455,
						y: 102,
						distance: 3,
						subonly: true,
						compDiff: {
							3: {'Hard 1':35,'Hard 2':25,'Hard 3':25,'Hard 4':15},
							2: {'Medium 1':35,'Medium 2':25,'Medium 3':25,'Medium 4':15},
							1: {'Easy 1':35,'Easy 2':25,'Easy 3':25,'Easy 4':15},
							4: {'Casual 1':35,'Casual 2':25,'Casual 3':25,'Casual 4':15},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':60,'Hard 4':40},
							2: {'Medium 3':60,'Medium 4':40},
							1: {'Easy 1':35,'Easy 2':25,'Easy 3':25,'Easy 4':15},
							4: {'Casual 1':35,'Casual 2':25,'Casual 3':25,'Casual 4':15},
						},
						get end() {
							return !checkRoute(1);
						},
						route: 'M'
					},
					'H': {
						type: 1,
						x: 461,
						y: 248,
						distance: 4,
						subonly: true,
						compDiff: {
							3: {'Hard 1':35,'Hard 2':15,'Hard 3':25,'Hard 4':25},
							2: {'Medium 1':15,'Medium 2':10,'Medium 3':10,'Medium 4':10,'Medium 5':40,'Medium 6':15},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':15,'Easy 4':25,'Easy 5':5,'Easy 6':10,'Easy 7':15,'Easy 8':10},
							4: {'Casual 1':25,'Casual 2':20,'Casual 3':25,'Casual 4':30},
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB) return 'J';
							if (ships.DD + ships.DE <= 1) return 'J';
							if (ships.DD + ships.DE >= 4) return 'F';
							if (ships.LHA) return 'F';
							if (ships.speed >= 10) return 'F';
							return 'J';
						}
					},
					'I': {
						type: 1,
						x: 473,
						y: 310,
						distance: 4,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':35,'Hard 3':35},
							2: {'Medium 1':30,'Medium 2':35,'Medium 3':35},
							1: {'Easy 1':30,'Easy 2':35,'Easy 3':35},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						route: 'H'
					},
					'J': {
						type: 3,
						x: 528,
						y: 241,
						distance: 3,
						routeS: ['K','L']
					},
					'K': {
						type: 1,
						x: 557,
						y: 174,
						distance: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':15,'Hard 3':35,'Hard 4':25},
							2: {'Medium 1':25,'Medium 2':15,'Medium 3':35,'Medium 4':25},
							1: {'Easy 1':35,'Easy 2':5,'Easy 3':35,'Easy 4':25},
							4: {'Casual 1':35,'Casual 2':25,'Casual 3':25,'Casual 4':15},
						},
						end: true
					},
					'L': {
						type: 1,
						x: 660,
						y: 284,
						distance: 3,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':35,'Hard 3':35},
							2: {'Medium 1':30,'Medium 2':35,'Medium 3':35},
							1: {'Easy 1':30,'Easy 2':35,'Easy 3':35},
							4: {'Casual 1':20,'Casual 2':45,'Casual 3':35},
						},
						get end() {
							return !checkRoute(1);
						},
						route: 'P'
					},
					'M': {
						type: 1,
						x: 526,
						y: 124,
						distance: 2,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':30,'Medium 2':20,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':30,'Easy 2':20,'Easy 3':30,'Easy 4':20},
							4: {'Casual 1':50,'Casual 2':25,'Casual 3':15,'Casual 4':10},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':70,'Hard 4':30},
							2: {'Medium 1':30,'Medium 2':20,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':30,'Easy 2':20,'Easy 3':30,'Easy 4':20},
							4: {'Casual 1':50,'Casual 2':25,'Casual 3':15,'Casual 4':10},
						},
						route: 'O'
					},
					'N': {
						type: 3,
						x: 577,
						y: 94,
						distance: 1,
						hidden: 1,
						end: true
					},
					'O': {
						type: 2,
						x: 617,
						y: 150,
						distance: 1,
						hidden: 1,
						resource: 0,
						showLoSPlane: 'Q',
						routeC: function(ships) {
							let vals = {
								3: { 68: 'Q', 61: 'N' },
								2: { 55: 'Q', 50: 'N' },
								1: { 40: 'Q', 37: 'N' },
								4: { 32: 'Q', 31: 'N' },
							}[getDiff()];
							let los = getELoS33(1,4);
							return checkELoS33(los,vals);
						}
					},
					'P': {
						type: 1,
						x: 680,
						y: 220,
						distance: 2,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':55,'Hard 2':45},
							2: {'Medium 1':55,'Medium 2':45},
							1: {'Easy 1':55,'Easy 2':45},
							4: {'Casual 1':80,'Casual 2':20},
						},
						end: true
					},
					'Q': {
						type: 1,
						x: 599,
						y: 222,
						distance: 2,
						hidden: 1,
						boss: true,
						setupSpecial: function() {
							chApplyBonus(MAPDATA[52].maps[2].bonuses.QU);
						},
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':30,'Medium 3':30},
							1: {'Easy 1':40,'Easy 2':30,'Easy 3':30},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 2':40,'Hard 3':60},
							2: {'Medium 2':40,'Medium 3':60},
							1: {'Easy 2':40,'Easy 3':60},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						end: true
					},
					'R': {
						type: 1,
						x: 320,
						y: 139,
						distance: 5,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':60,'Easy 2':40},
							4: {'Casual 1':60,'Casual 2':40},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 3':100},
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.CV + ships.CVB) return 'S';
							if (ships.aBB + ships.CVL >= 2) return 'S';
							this.showLoSPlane = 'U';
							let vals = {
								3: { 68: 'U', 61: 'S' },
								2: { 55: 'U', 50: 'S' },
								1: { 40: 'U', 37: 'S' },
								4: { 32: 'U', 31: 'S' },
							}[getDiff()];
							let los = getELoS33(1,4);
							return checkELoS33(los,vals);
						}
					},
					'S': {
						type: 1,
						x: 261,
						y: 235,
						distance: 6,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':25,'Hard 3':25},
							2: {'Medium 1':50,'Medium 2':25,'Medium 3':25},
							1: {'Easy 1':50,'Easy 2':25,'Easy 3':25},
							4: {'Casual 1':50,'Casual 2':25,'Casual 3':25},
						},
						showLoSPlane: 'U',
						routeC: function(ships) {
							let vals = {
								3: { 63: 'U', 60: 'T' },
								2: { 53: 'U', 50: 'T' },
								1: { 40: 'U', 37: 'T' },
								4: { 32: 'U', 31: 'T' },
							}[getDiff()];
							let los = getELoS33(1,4);
							return checkELoS33(los,vals);
						}
					},
					'T': {
						type: 3,
						x: 195,
						y: 207,
						distance: 7,
						hidden: 2,
						end: true
					},
					'U': {
						type: 1,
						x: 250,
						y: 170,
						distance: 6,
						hidden: 2,
						boss: true,
						setupSpecial: function() {
							chApplyBonus(MAPDATA[52].maps[2].bonuses.QU);
						},
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 2':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Decisive Patrol Line outside Hachijou-Jima',
				bgmMap: 190,
				bgmDN: 191,
				bgmNN: 191,
				bgmDB: 192,
				bgmNB: 192,
				bossnode: ['I','R','Z'],
				overrideBGM: {
					'R2': { bgmDN: 192, bgmNN: 192 },
					18: { bgmDB: 193, bgmNB: 193 },
					26: { bgmDB: 193, bgmNB: 193 },
				},
				giveLock: ['52_3','52_4'],
				checkLock: ['52_1','52_2'],
				lockSpecial: true,
				lbas: 3,
				lbasSortie: 2,
				lbX: 331,
				lbY: 111,
				parts: {
					1: {
						currentBoss: 'I',
						fleetTypes: [0],
						transport: 'H',
						maphp: {
							3: { 1: 550  },
							2: { 1: 450 },
							1: { 1: 400 },
							4: { 1: 400 },
						},
						finalhp: null,
					},
					2: {
						currentBoss: 'R',
						fleetTypes: [0,1,2,3],
						transport: null,
						maphp: {
							3: { 1: 3000  },
							2: { 1: 2750 },
							1: { 1: 2500 },
							4: { 1: 2500 },
						},
						finalhp: {
							3: 600,
							2: 550,
							1: 500,
							4: 500,
						},
					},
					3: {
						currentBoss: 'Z',
						fleetTypes: [0,1,2,3,7],
						transport: null,
						maphp: {
							3: { 1: 3400  },
							2: { 1: 2800 },
							1: { 1: 1660 },
							4: { 1: 1660 },
						},
						finalhp: {
							3: 577,
							2: 477,
							1: 277,
							4: 277,
						},
					},
				},
				reward: { ships: [299], firstOnly: true },
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('route', 2, 3, [])
					},
					2: {
						images: [{ name: '3_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('route', 3, 3, [])
					},
					3: {
						images: [{ name: '3_3.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('route', 3, 3, [
							{ type: 'battle', node: 'R2', rank: 'S', timesRequiredPerDiff: { 1:1, 2:1, 3:1 } },
						])
					},
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
					chance: { 3: .15, 2: .15, 1: .15, 4: .15 },
					highAltitude: { 3: 1, 2: 1 },
					compName: 'AB',
					compDiff: {
						3: {'Hard 1':15,'Hard 2':30,'Hard 3':25,'Hard 4':30},
						2: {'Medium 1':45,'Medium 2':30,'Medium 3':25},
						1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':40},
						4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
					},
				},
				debuffRules: new ChGimmickList('debuff', 3, 3, [
					{ type: 'AirState', node: 'AB', airState: 'AS', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 } },
					{ type: 'AirState', node: 'V', airState: 'AS', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 } },
					{ type: 'battle', node: 'I', rank: 'A', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 } },
					{ type: 'battle', node: 'S', rank: 'S', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 } },
					{ type: 'battle', node: 'W', rank: 'S', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 } },
					{ type: 'battle', node: 'X', rank: 'S', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 } },
				], { lastDanceOnly: true }),
				/*additionalChecks: function(ships,errors) {
					if (getDiff() == 1 || getDiff() == 4 || CHDATA.config.disablelock) return;
					let lock = CHDATA.fleets.combined ? '52_4' : '52_3';
					
					let allSame = true;
					let num = CHDATA.fleets.combined ? 2 : 1;
					for (let n=1; n<=num; n++) {
						for (let sid of CHDATA.fleets[n]) {
							if (sid && CHDATA.ships[sid].lock) {
								if (lock != CHDATA.ships[sid].lock) { allSame = false; break; }
							}
						}
					}
					if (!allSame) {
						if (lock == '52_3') errors.push('Only GREY locks allowed.');
						else errors.push('Only BLUE locks allowed.');
					}
				},*/
				lockInfos: {
					isTagAllowed: {
						fleetType: {
							0: ['52_3'],
							1: ['52_4'],
							2: ['52_4'],
							3: ['52_4'],
							7: ['52_3'],
						}
					},

					tagGiven: {
						fleetType: {
							0: '52_3',
							1: '52_4',
							2: '52_4',
							3: '52_4',
							7: '52_3',
						}
					},
				},
				bonuses: {
					base: [
						{ dmg: 1.125, acc: 1.05, idsBase: [80] },
						{ dmg: 1.2, acc: 1.2, ev: 1.14, idsBase: [475,641] },
						{ dmg: 1.115, acc: 1.05, idsBase: [93,133,642,644] },
						{ dmg: 1.2, acc: 1.2, ev: 1.2, idsBase: [637,699] },
						{ dmg: 1.125, acc: 1.025, idsBase: [638] },
						{ dmg: 1.075, acc: 1.0125, ev: 1.075, types: ['DD'] },
						{ dmg: 1.15, acc: 1.075, ev: 1.1, types: ['DE'] },
					],
					IZSub: [
						{ dmg: 1.075, acc: 1.05, idsBase: [80] },
						{ dmg: 1.16, acc: 1.16, ev: 1.16, idsBase: [475,641] },
						{ dmg: 1.08, acc: 1.05, ev: 1.08, idsBase: [93,133,642,644] },
						{ dmg: 1.175, acc: 1.175, ev: 1.175, idsBase: [637,699] },
						{ dmg: 1.075, acc: 1.075, ev: 1.075, idsBase: [638] },
						{ dmg: 1.0375, acc: 1.0125, types: ['DD'] },
						{ dmg: 1.1, acc: 1.1, ev: 1.1, types: ['DE'] },
					],
					p2: [
						{ ev: -1, types: ['DD'] },
						{ dmg: 1.23, acc: 1.1, ev: 1.2, idsBase: [61,79,140,183] },
						{ dmg: 1.125, acc: 1.05, ev: 1.075, idsBase: [16,20,25,35,41,49,71,77,87,131,139,167,184,331,425,532] },
					],
					debuff: [
						{ dmg: 1.1 },
						{ dmg: 1.09, idsBase: [80,475,641,93,133,642,644,637,699,638] },
						{ dmg: 1.1, on: [2056,2057,2058] },
					],
				},
				startCheck: function(ships) {
					/*let lock = CHDATA.fleets.combined ? '52_4' : '52_3';
					chGiveLockAllCurrent(lock);*/
					
					chApplyBonus(this.bonuses.base);
					
					if (checkRoute(1) && CHDATA.fleets.combined) return 'Start2';
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 319,
						y: 76,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 100,
						y: 194,
						hidden: 1,
						route: 'J'
					},
					'A': {
						type: 1,
						x: 288,
						y: 169,
						distance: 1,
						subonly: true,
						setupSpecial: function() {
							chApplyBonus(MAPDATA[52].maps[3].bonuses.IZSub);
						},
						debuffGive: function() {
							chResetBonus();
							chApplyBonus(MAPDATA[52].maps[3].bonuses.base);
						},
						compDiff: {
							3: {'Hard 1':15,'Hard 2':10,'Hard 3':30,'Hard 4':20,'Hard 5':15,'Hard 6':10},
							2: {'Medium 1':15,'Medium 2':10,'Medium 3':30,'Medium 4':20,'Medium 5':15,'Medium 6':10},
							1: {'Easy 1':10,'Easy 2':15,'Easy 3':30,'Easy 4':20,'Easy 5':15,'Easy 6':10},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':30,'Casual 4':20},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 5':60,'Hard 6':40},
							2: {'Medium 1':15,'Medium 2':10,'Medium 3':30,'Medium 4':20,'Medium 5':15,'Medium 6':10},
							1: {'Easy 1':10,'Easy 2':15,'Easy 3':30,'Easy 4':20,'Easy 5':15,'Easy 6':10},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':30,'Casual 4':20},
						},
						routeC: function(ships) {
							if (checkRoute(3) && ships.total >= 7) return 'T';
							if (ships.c.DD + ships.c.DE <= 1) return 'B';
							if (ships.c.aBB + ships.c.CV + ships.c.CVB >= 3) return 'B';
							if (ships.c.aBB + ships.c.aCV >= 2) return 'E';
							if (ships.c.DD + ships.c.DE >= 5) return 'B';
							if (ships.c.DD + ships.c.DE >= 4 && ships.c.CL + ships.c.CT) return 'B';
							if (ships.c.aBB + ships.c.CV + ships.c.CVB) return 'E';
							if (ships.speed <= 5) return 'E';
							if (ships.c.DD + ships.c.DE >= 4) return 'B';
							if (ships.c.CL + ships.c.CT <= 0) return 'E';
							if (ships.c.DD + ships.c.DE >= 3) return 'B';
							if (ships.c.CA + ships.c.CAV) return 'E';
							return 'B';
						}
					},
					'B': {
						type: 1,
						x: 234,
						y: 226,
						distance: 2,
						raid: true,
						compDiffPart: {
							1: {
								compDiff: {
									3: {'Hard 1':30,'Hard 2':25,'Hard 3':25,'Hard 4':20},
									2: {'Medium 1':30,'Medium 2':40,'Medium 3':30},
									1: {'Easy 1':20,'Easy 2':20,'Easy 3':40,'Easy 4':20},
									4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
								},
							},
							2: {
								compDiff: {
									3: {'Hard 2':60,'Hard 4':20,'Hard 5':20},
									2: {'Medium 1':30,'Medium 2':40,'Medium 3':30},
									1: {'Easy 1':20,'Easy 2':20,'Easy 3':40,'Easy 4':20},
									4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
								},
								compDiffF: {
									3: {'Hard 4':50,'Hard 5':50},
									2: {'Medium 3':50,'Medium 4':50},
									1: {'Easy 1':20,'Easy 2':20,'Easy 3':40,'Easy 4':20},
									4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
								},
							},
							3: {
								compDiff: {
									3: {'Hard 1':30,'Hard 2':25,'Hard 3':25,'Hard 4':20},
									2: {'Medium 1':30,'Medium 2':40,'Medium 3':30},
									1: {'Easy 1':20,'Easy 2':20,'Easy 3':40,'Easy 4':20},
									4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
								},
							},
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined) return 'E';
							if (ships.c.DD + ships.c.DE <= 1) return 'E';
							if (ships.c.aBB + ships.c.CV + ships.c.CVB + ships.c.CA + ships.c.CAV >= 2) return 'E';
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 211,
						y: 285,
						distance: 4,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':30,'Medium 2':20,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':30,'Easy 2':20,'Easy 3':30,'Easy 4':20},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':30,'Casual 4':20},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':60,'Hard 4':40},
							2: {'Medium 3':60,'Medium 4':40},
							1: {'Easy 1':30,'Easy 2':20,'Easy 3':30,'Easy 4':20},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':30,'Casual 4':20},
						},
						route: 'H'
					},
					'D': {
						type: 3,
						x: 190,
						y: 328,
						distance: 5,
						end: true
					},
					'E': {
						type: 1,
						x: 326,
						y: 218,
						distance: 2,
						raid: true,
						compDiffPart: {
							1: {
								compDiff: {
									3: {'Hard 1':30,'Hard 2':25,'Hard 3':25,'Hard 4':20},
									2: {'Medium 1':30,'Medium 2':40,'Medium 3':30},
									1: {'Easy 1':20,'Easy 2':20,'Easy 3':40,'Easy 4':20},
									4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
								},
							},
							2: {
								compDiff: {
									3: {'Hard 2':60,'Hard 4':20,'Hard 5':20},
									2: {'Medium 1':30,'Medium 2':40,'Medium 3':30},
									1: {'Easy 1':20,'Easy 2':20,'Easy 3':40,'Easy 4':20},
									4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
								},
								compDiffF: {
									3: {'Hard 4':50,'Hard 5':50},
									2: {'Medium 3':50,'Medium 4':50},
									1: {'Easy 1':20,'Easy 2':20,'Easy 3':40,'Easy 4':20},
									4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
								},
							},
							3: {
								compDiff: {
									3: {'Hard 1':30,'Hard 2':25,'Hard 3':25,'Hard 4':20},
									2: {'Medium 1':30,'Medium 2':40,'Medium 3':30},
									1: {'Easy 1':20,'Easy 2':20,'Easy 3':40,'Easy 4':20},
									4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
								},
							},
						},
						routeC: function(ships) {
							if (checkRoute(1) && CHDATA.fleets.combined) return 'L';
							return 'F';
						}
					},
					'F': {
						type: 1,
						x: 313,
						y: 256,
						distance: 3,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':30,'Medium 2':20,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':30,'Easy 2':20,'Easy 3':30,'Easy 4':20},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':30,'Casual 4':20},
						},
						route: 'G'
					},
					'G': {
						type: 1,
						x: 302,
						y: 293,
						distance: 4,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':30,'Medium 2':20,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':70,'Easy 2':30},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':30,'Casual 4':20},
						},
						route: 'H'
					},
					'H': {
						type: 2,
						x: 264,
						y: 314,
						distance: 4,
						resource: 0,
						showLoSPlane: 'I',
						routeC: function(ships) {
							let vals = {
								3: { 64: 'I', 57: 'D' },
								2: { 52: 'I', 47: 'D' },
								1: { 42: 'I', 39: 'D' },
								4: { 35: 'I', 34: 'D' },
							}[getDiff()];
							let los = getELoS33(1,4);
							return checkELoS33(los,vals);
						}
					},
					'I': {
						type: 1,
						x: 268,
						y: 262,
						distance: 3,
						boss: true,
						setupSpecial: function() {
							chApplyBonus(MAPDATA[52].maps[3].bonuses.IZSub);
						},
						compDiff: {
							3: {'Hard 1':45,'Hard 2':55},
							2: {'Medium 1':45,'Medium 2':55},
							1: {'Easy 1':45,'Easy 2':55},
							4: {'Casual 1':45,'Casual 2':55},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 3':100},
						},
						end: true
					},
					'J': {
						type: 3,
						x: 156,
						y: 209,
						distance: 3,
						hidden: 1,
						routeC: function(ships) {
							if (ships.c.aCV >= 4 && ships.speed <= 5) return 'K';
							let diff = getDiff();
							if (ships.c.aBB + ships.c.CV + ships.c.CVB >= 6) return 'K';
							if ((diff == 3 || diff == 2) && ships.c.aBB + ships.c.CV + ships.c.CVB >= 5) return 'K';
							return 'B';
						}
					},
					'K': {
						type: 1,
						x: 164,
						y: 270,
						distance: 4,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':35,'Hard 2':25,'Hard 3':25,'Hard 4':15},
							2: {'Medium 1':35,'Medium 2':25,'Medium 3':25,'Medium 4':15},
							1: {'Easy 1':35,'Easy 2':25,'Easy 3':25,'Easy 4':15},
							4: {'Casual 1':35,'Casual 2':25,'Casual 3':25,'Casual 4':15},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 3':60,'Hard 4':40},
							2: {'Medium 1':35,'Medium 2':25,'Medium 3':25,'Medium 4':15},
							1: {'Easy 1':35,'Easy 2':25,'Easy 3':25,'Easy 4':15},
							4: {'Casual 1':35,'Casual 2':25,'Casual 3':25,'Casual 4':15},
						},
						route: 'B'
					},
					'L': {
						type: 3,
						x: 421,
						y: 199,
						distance: 3,
						hidden: 1,
						routeS: ['M','S1']
					},
					'M': {
						type: 1,
						x: 489,
						y: 247,
						distance: 4,
						hidden: 1,
						raid: true,
						setupSpecial: function() {
							chApplyBonus(MAPDATA[52].maps[3].bonuses.p2);
						},
						compDiff: {
							3: {'Hard 1':25,'Hard 2':25,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':30,'Medium 2':40,'Medium 3':30},
							1: {'Easy 1':10,'Easy 2':25,'Easy 3':40,'Easy 4':25},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 3':50,'Hard 4':50},
							2: {'Medium 2':50,'Medium 3':50},
							1: {'Easy 1':10,'Easy 2':25,'Easy 3':40,'Easy 4':25},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3) return 'S3';
							if (ships.speed >= 15) return 'S3';
							if (ships.speed >= 10) return 'N';
							if (ships.c.aBB + ships.c.CV + ships.c.CVB >= 7) return 'S2';
							if (ships.c.SS + ships.c.SSV) return 'S2';
							if (ships.c.DD <= 1) return 'S2';
							if (ships.c.DD >= 3) return 'N';
							if (ships.c.CL >= 2) return 'N';
							return 'S2';
						}
					},
					'N': {
						type: 1,
						x: 556,
						y: 292,
						distance: 6,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':45,'Hard 2':25,'Hard 3':30},
							2: {'Medium 1':45,'Medium 2':25,'Medium 3':30},
							1: {'Easy 1':45,'Easy 2':25,'Easy 3':30},
							4: {'Casual 1':45,'Casual 2':25,'Casual 3':30},
						},
						routeC: function(ships) {
							this.showNoCompass = !checkRoute(2);
							if (checkRoute(2) && CHDATA.fleets.combined == 1) return 'R1';
							return 'P';
						}
					},
					'O': {
						type: 1,
						x: 593,
						y: 143,
						distance: 6,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':40,'Hard 3':30},
							2: {'Medium 1':30,'Medium 2':40,'Medium 3':30},
							1: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						route: 'P'
					},
					'O1': {
						type: 1,
						x: 518,
						y: 85,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':25,'Hard 3':25,'Hard 4':15,'Hard 5':10},
							2: {'Hard 1':25,'Hard 2':25,'Hard 3':25,'Hard 4':15,'Hard 5':10},
							1: {'Easy 1':25,'Easy 2':50,'Easy 3':25},
							4: {'Easy 1':25,'Easy 2':50,'Easy 3':25},
						},
						routeC: function(ships) {
							if (ships.c.SS + ships.c.SSV && ships.c.AS <= 0) return 'O2';
							if (ships.c.CV + ships.c.CVB >= 3 && ships.speed <= 5) return 'O2';
							if (ships.c.aBB + ships.c.aCV + +isShipInList(ships.c.ids,161) >= 5) return 'O';
							if (ships.c.aBB + ships.c.CV + ships.c.CVB >= 3) return 'O';
							return 'S4';
						}
					},
					'O2': {
						type: 1,
						x: 590,
						y: 79,
						distance: 5,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':25,'Hard 3':30,'Hard 4':20},
							2: {'Hard 1':25,'Hard 2':25,'Hard 3':30,'Hard 4':20},
							1: {'Easy 1':25,'Easy 2':50,'Easy 3':25},
							4: {'Easy 1':25,'Easy 2':50,'Easy 3':25},
						},
						route: 'O'
					},
					'P': {
						type: 1,
						x: 598,
						y: 220,
						distance: 6,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 2':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						showLoSPlane: 'R',
						routeC: function(ships) {
							let vals = {
								3: { 80: 'R', 72: 'Q' },
								2: { 58: 'R', 55: 'Q' },
								1: { 45: 'R', 42: 'Q' },
								4: { 25: 'R', 22: 'Q' },
							}[getDiff()];
							let los = getELoS33(1,2) + getELoS33(2,2);
							return checkELoS33(los,vals);
						}
					},
					'Q': {
						type: 3,
						x: 664,
						y: 168,
						distance: 7,
						hidden: 1,
						end: true
					},
					'R': {
						type: 1,
						x: 662,
						y: 254,
						distance: 7,
						hidden: 1,
						boss: true,
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 2':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						end: true
					},
					'R1': {
						type: 1,
						x: 598,
						y: 302,
						distance: 7,
						hidden: 2,
						subonly: true,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':15,'Hard 3':35,'Hard 4':25},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':50,'Medium 4':20},
							1: {'Easy 1':30,'Easy 2':5,'Easy 3':35,'Easy 4':30},
							4: {'Casual 1':30,'Casual 2':15,'Casual 3':30,'Casual 4':25},
						},
						route: 'R2'
					},
					'R2': {
						type: 1,
						x: 650,
						y: 315,
						distance: 8,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':55,'Hard 2':45},
							2: {'Medium 1':50,'Medium 2':50},
							1: {'Easy 1':60,'Easy 2':40},
							4: {'Casual 1':55,'Casual 2':45},
						},
						end: true
					},
					'S': {
						type: 1,
						x: 390,
						y: 155,
						distance: 1,
						hidden: 3,
						subonly: true,
						setupSpecial: function() {
							chApplyBonus(MAPDATA[52].maps[3].bonuses.IZSub);
						},
						debuffGive: function() {
							chResetBonus();
							chApplyBonus(MAPDATA[52].maps[3].bonuses.base);
						},
						compDiff: {
							3: {'Hard 1':35,'Hard 2':25,'Hard 3':25,'Hard 4':15},
							2: {'Medium 1':35,'Medium 2':25,'Medium 3':25,'Medium 4':15},
							1: {'Easy 1':35,'Easy 2':25,'Easy 3':25,'Easy 4':15},
							4: {'Casual 1':45,'Casual 2':20,'Casual 3':15,'Casual 4':20},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':60,'Hard 4':40},
							2: {'Medium 3':60,'Medium 4':40},
							1: {'Easy 1':35,'Easy 2':25,'Easy 3':25,'Easy 4':15},
							4: {'Casual 1':45,'Casual 2':20,'Casual 3':15,'Casual 4':20},
						},
						route: 'U'
					},
					'S1': {
						type: 1,
						x: 488,
						y: 156,
						distance: 4,
						hidden: 1,
						subonly: true,
						setupSpecial: function() {
							chApplyBonus(MAPDATA[52].maps[3].bonuses.p2);
						},
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
							4: {'Easy 1':30,'Easy 2':30,'Easy 3':20,'Casual 1':20},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':60,'Hard 4':40},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
							4: {'Easy 1':30,'Easy 2':30,'Easy 3':20,'Casual 1':20},
						},
						route: 'O1'
					},
					'S2': {
						type: 1,
						x: 505,
						y: 317,
						distance: 5,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':15,'Hard 3':35,'Hard 4':25},
							2: {'Medium 1':10,'Medium 2':5,'Medium 3':45,'Medium 4':10,'Medium 5':20,'Medium 6':10},
							1: {'Easy 1':10,'Easy 2':5,'Easy 3':25,'Easy 4':15,'Easy 5':15,'Easy 6':10,'Easy 7':15,'Easy 8':5},
							4: {'Casual 1':40,'Casual 2':15,'Casual 3':30,'Casual 4':15},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':60,'Hard 4':40},
							2: {'Medium 1':10,'Medium 2':5,'Medium 3':45,'Medium 4':10,'Medium 5':20,'Medium 6':10},
							1: {'Easy 1':10,'Easy 2':5,'Easy 3':25,'Easy 4':15,'Easy 5':15,'Easy 6':10,'Easy 7':15,'Easy 8':5},
							4: {'Casual 1':40,'Casual 2':15,'Casual 3':30,'Casual 4':15},
						},
						route: 'N'
					},
					'S3': {
						type: 1,
						x: 543,
						y: 235,
						distance: 5,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':15,'Hard 3':35,'Hard 4':20},
							2: {'Hard 1':30,'Hard 2':20,'Easy 1':30,'Easy 2':20},
							1: {'Easy 1':30,'Easy 2':20,'Casual 3':30,'Casual 4':20},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':30,'Casual 4':20},
						},
						route: 'P'
					},
					'S4': {
						type: 1,
						x: 567,
						y: 169,
						distance: 5,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':35,'Hard 2':25,'Hard 3':25,'Hard 4':15},
							2: {'Hard 1':35,'Hard 2':25,'Easy 3':25,'Easy 4':15},
							1: {'Easy 1':35,'Easy 2':25,'Easy 3':25,'Easy 4':15},
							4: {'Casual 1':35,'Casual 2':25,'Easy 1':25,'Easy 2':15},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':60,'Hard 4':40},
							2: {'Hard 1':35,'Hard 2':25,'Easy 3':25,'Easy 4':15},
							1: {'Easy 1':35,'Easy 2':25,'Easy 3':25,'Easy 4':15},
							4: {'Casual 1':35,'Casual 2':25,'Easy 1':25,'Easy 2':15},
						},
						route: 'P'
					},
					'T': {
						type: 1,
						x: 348,
						y: 180,
						distance: 1,
						hidden: 3,
						raid: true,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':20,'Hard 3':25,'Hard 4':15,'Hard 5':15},
							2: {'Medium 1':30,'Medium 2':40,'Medium 3':30},
							1: {'Easy 1':15,'Easy 2':20,'Easy 3':40,'Easy 4':25},
							4: {'Casual 1':25,'Casual 2':50,'Casual 3':25},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 2':40,'Hard 4':30,'Hard 5':30},
							2: {'Medium 2':40,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':15,'Easy 2':20,'Easy 3':40,'Easy 4':25},
							4: {'Casual 1':25,'Casual 2':50,'Casual 3':25},
						},
						routeC: function(ships) {
							if (isShipInList(ships.c.ids,457)) return 'S';
							if (ships.c.CV + ships.c.CVB) return 'S';
							if (ships.c.aBB + ships.c.CVL >= 3) return 'S';
							return 'U';
						}
						
					},
					'U': {
						type: 1,
						x: 400,
						y: 240,
						distance: 3,
						hidden: 3,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: {'Medium 1':40,'Medium 2':60},
							1: {'Easy 1':60,'Easy 2':40},
							4: {'Casual 1':60,'Casual 2':40},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						routeC: function(ships) {
							if (ships.c.DD + ships.c.DE <= 2) return 'V';
							if (ships.c.DD + ships.c.DE <= 3 && ships.speed <= 5) return 'V';
							if (isShipInList(ships.c.ids,457)) return 'X';
							if (ships.c.CV + ships.c.CVB) return 'W';
							if (ships.c.CVL >= 2) return 'W';
							if (ships.c.aBB >= 2) return 'W';
							if (ships.c.DD + ships.c.DE >= 5) return 'X';
							if (ships.c.CL) return 'X';
							return 'W';
						}
					},
					'V': {
						type: 1,
						x: 355,
						y: 257,
						distance: 3,
						hidden: 3,
						raid: true,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':20,'Hard 3':25,'Hard 4':15,'Hard 5':15},
							2: {'Medium 1':30,'Medium 2':40,'Medium 3':30},
							1: {'Easy 1':15,'Easy 2':20,'Easy 3':40,'Easy 4':25},
							4: {'Casual 1':25,'Casual 2':50,'Casual 3':25},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 2':40,'Hard 4':30,'Hard 5':30},
							2: {'Medium 2':40,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':15,'Easy 2':20,'Easy 3':40,'Easy 4':25},
							4: {'Casual 1':25,'Casual 2':50,'Casual 3':25},
						},
						showLoSPlane: 'W',
						routeC: function(ships) {
							let vals = {
								3: { 70: 'W', 62: 'Y' },
								2: { 50: 'W', 45: 'Y' },
								1: { 40: 'W', 38: 'Y' },
								4: { 35: 'W', 34: 'Y' },
							}[getDiff()];
							let los = getELoS33(1,4);
							return checkELoS33(los,vals);
						}
					},
					'W': {
						type: 1,
						x: 446,
						y: 283,
						distance: 4,
						hidden: 3,
						subonly: true,
						setupSpecial: function() {
							chApplyBonus(MAPDATA[52].maps[3].bonuses.IZSub);
						},
						debuffGive: function() {
							chResetBonus();
							chApplyBonus(MAPDATA[52].maps[3].bonuses.base);
						},
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':25,'Medium 2':25,'Medium 3':50},
							1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':15,'Easy 5':5,'Easy 6':5,'Easy 7':15,'Easy 8':5},
							4: {'Casual 1':20,'Casual 2':20,'Casual 3':40,'Casual 4':20},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':60,'Hard 4':40},
							2: {'Medium 1':25,'Medium 2':25,'Medium 3':50},
							1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':15,'Easy 5':5,'Easy 6':5,'Easy 7':15,'Easy 8':5},
							4: {'Casual 1':20,'Casual 2':20,'Casual 3':40,'Casual 4':20},
						},
						route: 'X'
					},
					'X': {
						type: 1,
						x: 432,
						y: 328,
						distance: 5,
						hidden: 3,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':30,'Hard 3':50},
							2: {'Medium 1':20,'Medium 2':35,'Medium 3':45},
							1: {'Easy 1':20,'Easy 2':35,'Easy 3':45},
							4: {'Casual 1':25,'Casual 2':50,'Casual 3':25},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 1':25,'Casual 2':50,'Casual 3':25},
						},
						showLoSPlane: 'Z',
						routeC: function(ships) {
							let vals = {
								3: { 80: 'Z', 72: 'Y' },
								2: { 60: 'Z', 55: 'Y' },
								1: { 50: 'Z', 48: 'Y' },
								4: { 45: 'Z', 44: 'Y' },
							}[getDiff()];
							let los = getELoS33(1,4);
							return checkELoS33(los,vals);
						}
					},
					'Y': {
						type: 3,
						x: 339,
						y: 338,
						distance: 4,
						hidden: 3,
						end: true
					},
					'Z': {
						type: 1,
						x: 381,
						y: 299,
						distance: 4,
						hidden: 3,
						boss: true,
						setupSpecial: function() {
							chApplyBonus(MAPDATA[52].maps[3].bonuses.IZSub);
							if (CHDATA.event.maps[3].debuffed || MAPDATA[52].maps[3].debuffRules.check()) {
								chApplyBonus(MAPDATA[52].maps[3].bonuses.debuff);
							}
						},
						compDiff: {
							3: {'Hard 1':40,'Hard 2':60},
							2: {'Medium 1':40,'Medium 2':60},
							1: {'Easy 1':40,'Easy 2':60},
							4: {'Casual 1':40,'Casual 2':60},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 3':100},
						},
						end: true
					},
				}
			},
		}
	}