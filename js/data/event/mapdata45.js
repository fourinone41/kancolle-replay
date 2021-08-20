var MAPDATA45 = {
	45: {
		name: 'Summer 2019',
		date: '2019-08-30',
		diffMode: 2,
		allowDiffs: [4,1,2,3],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		allowVanguard: true,
		vanguardConsts: { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 },
		newResupplyCosts: true,
		allowStrongFF: true,
		bannerImg: 'assets/maps/45/banner1.png',
		bannerImgAlt: 'assets/maps/45/banner2.png',
		transportCalc: transportCalcStandard,
		friendFleet: {
			'E1-1': { ships: [
				{ mid: 611, LVL: 44, FP: 17, TP: 0, AA: 36, AR: 16, equips: [229,91] },
				{ mid: 383, LVL: 60, FP: 37, TP: 0, AA: 54, AR: 33, equips: [229,91,88] },
				{ mid: 685, LVL: 56, FP: 35, TP: 0, AA: 52, AR: 34, equips: [229,91,88] },
			] },
			'E1-2': { ships: [
				{ mid: 145, LVL: 79, FP: 59, TP: 85, AA: 72, AR: 52, equips: [266,286,88] },
				{ mid: 497, LVL: 78, FP: 62, TP: 86, AA: 71, AR: 50, equips: [286,286,286] },
			] },
			'E1-3': { ships: [
				{ mid: 497, LVL: 78, FP: 62, TP: 86, AA: 71, AR: 50, equips: [266,286,88] },
				{ mid: 145, LVL: 79, FP: 59, TP: 85, AA: 72, AR: 52, equips: [286,286,286] },
			] },
			'E1-4': { ships: [
				{ mid: 176, LVL: 44, FP: 54, TP: 59, AA: 41, AR: 64, equips: [123,123,84], damage: [.8,.9] },
				{ mid: 330, LVL: 55, FP: 54, TP: 54, AA: 115, AR: 53, equips: [122,122,101] },
				{ mid: 346, LVL: 53, FP: 58, TP: 56, AA: 113, AR: 51, equips: [122,179,106] },
			] },
			'E1-5': { ships: [
				{ mid: 176, LVL: 44, FP: 54, TP: 59, AA: 41, AR: 64, equips: [123,123,84], damage: [.8,.9] },
				{ mid: 145, LVL: 79, FP: 59, TP: 85, AA: 72, AR: 52, equips: [266,266,101] },
				{ mid: 497, LVL: 78, FP: 62, TP: 86, AA: 71, AR: 50, equips: [286,286,286] },
			] },
			'E1-6': { ships: [
				{ mid: 145, LVL: 79, FP: 59, TP: 85, AA: 72, AR: 52, equips: [266,266,74] },
				{ mid: 372, LVL: 60, FP: 58, TP: 0, AA: 48, AR: 56, equips: [194,303,303,101], damage: [.89,.99] },
				{ mid: 176, LVL: 44, FP: 54, TP: 59, AA: 41, AR: 64, equips: [123,123,84], damage: [.7,.8] },
				{ mid: 497, LVL: 78, FP: 62, TP: 86, AA: 71, AR: 50, equips: [286,286,286] },
			] },
			'E1-7': { ships: [
				{ mid: 497, LVL: 78, FP: 62, TP: 86, AA: 71, AR: 50, equips: [266,266,74] },
				{ mid: 372, LVL: 60, FP: 58, TP: 0, AA: 48, AR: 56, equips: [194,303,303,101], damage: [.8,.9] },
				{ mid: 145, LVL: 79, FP: 59, TP: 85, AA: 72, AR: 52, equips: [286,286,286] },
			] },
			'E2-1': { ships: [
				{ mid: 329, LVL: 77, FP: 48, TP: 79, AA: 49, AR: 49, equips: [266,286,240] },
				{ mid: 294, LVL: 77, FP: 49, TP: 79, AA: 49, AR: 49, equips: [286,286,286] },
			], },
			'E2-2': { ships: [
				{ mid: 329, LVL: 77, FP: 48, TP: 79, AA: 49, AR: 49, equips: [266,266,74] },
				{ mid: 294, LVL: 77, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,266,101] },
				{ mid: 354, LVL: 76, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,15,88] },
				{ mid: 355, LVL: 76, FP: 50, TP: 79, AA: 49, AR: 49, equips: [15,15,15] },
			], },
			'E2-3': { ships: [
				{ mid: 306, LVL: 85, FP: 68, TP: 79, AA: 72, AR: 69, equips: [139,139,101] },
				{ mid: 329, LVL: 77, FP: 48, TP: 79, AA: 49, AR: 49, equips: [266,15,88] },
				{ mid: 294, LVL: 77, FP: 49, TP: 79, AA: 49, AR: 49, equips: [15,15,15] },
			], },
			'E2-4': { ships: [
				{ mid: 307, LVL: 80, FP: 70, TP: 79, AA: 74, AR: 69, equips: [139,139,74] },
				{ mid: 354, LVL: 76, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,286,240] },
				{ mid: 355, LVL: 76, FP: 50, TP: 79, AA: 49, AR: 49, equips: [15,15,15] },
			], },
			'E2-5': { ships: [
				{ mid: 591, LVL: 95, FP: 98, TP: 42, AA: 89, AR: 88, equips: [329,329,116,74] },
				{ mid: 329, LVL: 77, FP: 48, TP: 79, AA: 49, AR: 49, equips: [266,286,240] },
				{ mid: 294, LVL: 77, FP: 49, TP: 79, AA: 49, AR: 49, equips: [286,286,286] },
			], },
			'E2-6': { ships: [
				{ mid: 599, LVL: 95, FP: 67, TP: 0, AA: 84, AR: 81, equips: [339,320,343,154,108] },
				{ mid: 278, LVL: 92, FP: 50, TP: 0, AA: 79, AR: 79, equips: [338,320,342,259] },
				{ mid: 145, LVL: 89, FP: 59, TP: 86, AA: 72, AR: 52, equips: [296,286,240] },
				{ mid: 228, LVL: 90, FP: 59, TP: 89, AA: 59, AR: 59, equips: [286,286,286] },
			], },
			'E2-7': { ships: [
				{ mid: 599, LVL: 95, FP: 67, TP: 0, AA: 84, AR: 81, equips: [339,320,343,154,108] },
				{ mid: 591, LVL: 95, FP: 98, TP: 42, AA: 89, AR: 88, equips: [329,329,116,74] },
				{ mid: 329, LVL: 77, FP: 48, TP: 79, AA: 49, AR: 49, equips: [266,286,240] },
				{ mid: 294, LVL: 77, FP: 49, TP: 79, AA: 49, AR: 49, equips: [15,15,15] },
			], },
			'E2-8': { ships: [
				{ mid: 397, LVL: 77, FP: 58, TP: 0, AA: 95, AR: 90, equips: [255,257,257,259] },
				{ mid: 545, LVL: 90, FP: 62, TP: 0, AA: 94, AR: 85, equips: [255,257,257,257] },
				{ mid: 692, LVL: 78, FP: 54, TP: 72, AA: 91, AR: 52, equips: [313,314,315] },
				{ mid: 689, LVL: 71, FP: 55, TP: 72, AA: 90, AR: 52, equips: [313,314,315] },
			], },
			'E2-9': { ships: [
				{ mid: 307, LVL: 80, FP: 70, TP: 79, AA: 74, AR: 69, equips: [139,139,74] },
				{ mid: 329, LVL: 77, FP: 48, TP: 79, AA: 49, AR: 49, equips: [266,266,101] },
				{ mid: 294, LVL: 77, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,15,88] },
				{ mid: 354, LVL: 76, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,15,88] },
				{ mid: 355, LVL: 76, FP: 50, TP: 79, AA: 49, AR: 49, equips: [15,15,15] },
			], },
			'E3-1': { ships: [
				{ mid: 329, LVL: 77, FP: 48, TP: 79, AA: 49, AR: 49, equips: [266,266,348] },
				{ mid: 294, LVL: 77, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,266,348] },
			], },
			'E3-2': { ships: [
				{ mid: 329, LVL: 77, FP: 48, TP: 79, AA: 49, AR: 49, equips: [266,266,74] },
				{ mid: 327, LVL: 75, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,266,348], damage: [.87,.97] },
				{ mid: 328, LVL: 74, FP: 49, TP: 77, AA: 49, AR: 48, equips: [266,266,347], damage: [.87,.97] },
			], },
			'E3-3': { ships: [
				{ mid: 586, LVL: 70, FP: 60, TP: 75, AA: 65, AR: 47, equips: [310,310,167,166] },
				{ mid: 329, LVL: 77, FP: 48, TP: 79, AA: 49, AR: 49, equips: [266,266,101] },
				{ mid: 327, LVL: 75, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,266,348], damage: [.87,.97] },
				{ mid: 328, LVL: 74, FP: 49, TP: 77, AA: 49, AR: 48, equips: [266,266,347], damage: [.87,.97] },
			], },
			'E3-4': { ships: [
				{ mid: 580, LVL: 58, FP: 47, TP: 67, AA: 61, AR: 50, equips: [147,147,126] },
				{ mid: 619, LVL: 57, FP: 50, TP: 57, AA: 75, AR: 50, equips: [147,147,126] },
			], },
			'E3-5': { ships: [
				{ mid: 619, LVL: 57, FP: 50, TP: 57, AA: 75, AR: 50, equips: [147,147,101] },
				{ mid: 580, LVL: 58, FP: 47, TP: 67, AA: 61, AR: 50, equips: [147,147,126] },
				{ mid: 347, LVL: 56, FP: 48, TP: 65, AA: 57, AR: 46, equips: [147,147,126] },
			], },
			'E3-6': { ships: [
				{ mid: 693, LVL: 56, FP: 68, TP: 70, AA: 60, AR: 75, equips: [341,341,126,101] },
				{ mid: 691, LVL: 55, FP: 72, TP: 61, AA: 70, AR: 68, equips: [341,341,126,74] },
				{ mid: 580, LVL: 58, FP: 47, TP: 67, AA: 61, AR: 50, equips: [147,147,126] },
				{ mid: 619, LVL: 57, FP: 50, TP: 57, AA: 75, AR: 50, equips: [147,147,126] },
			], },
			'E3-7': { ships: [
				{ mid: 365, LVL: 52, FP: 27, TP: 0, AA: 67, AR: 58, equips: [188,255,257,259] },
				{ mid: 691, LVL: 55, FP: 72, TP: 61, AA: 70, AR: 68, equips: [341,341,101,74] },
				{ mid: 619, LVL: 57, FP: 50, TP: 57, AA: 75, AR: 50, equips: [147,147,126] },
				{ mid: 347, LVL: 56, FP: 48, TP: 65, AA: 57, AR: 46, equips: [147,147,126] },
			], },
			'E3-8': { ships: [
				{ mid: 586, LVL: 70, FP: 60, TP: 66, AA: 65, AR: 47, equips: [310,310,167,166] },
				{ mid: 354, LVL: 76, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,266,348] },
				{ mid: 355, LVL: 76, FP: 50, TP: 79, AA: 49, AR: 49, equips: [266,266,348] },
			], },
			'E3-9': { ships: [
				{ mid: 619, LVL: 57, FP: 50, TP: 57, AA: 75, AR: 50, equips: [147,147,126] },
				{ mid: 691, LVL: 55, FP: 72, TP: 64, AA: 57, AR: 74, equips: [341,341,101,74] },
				{ mid: 580, LVL: 58, FP: 47, TP: 67, AA: 61, AR: 50, equips: [147,147,126] },
				{ mid: 347, LVL: 56, FP: 48, TP: 65, AA: 57, AR: 46, equips: [147,147,126] },
			], },
			'E3-10': { ships: [
				{ mid: 619, LVL: 57, FP: 50, TP: 57, AA: 75, AR: 50, equips: [147,147,74] },
				{ mid: 580, LVL: 58, FP: 47, TP: 67, AA: 61, AR: 50, equips: [147,147,101] },
				{ mid: 347, LVL: 56, FP: 48, TP: 65, AA: 57, AR: 46, equips: [147,147,126] },
				{ mid: 179, LVL: 72, FP: 49, TP: 71, AA: 64, AR: 53, equips: [78,78,126] },
				{ mid: 180, LVL: 71, FP: 47, TP: 71, AA: 68, AR: 53, equips: [78,78,126] },
			], },
			'E3-11': { ships: [
				{ mid: 693, LVL: 56, FP: 68, TP: 70, AA: 60, AR: 75, equips: [341,341,126,101] },
				{ mid: 691, LVL: 55, FP: 72, TP: 61, AA: 70, AR: 68, equips: [341,341,126,74] },
				{ mid: 586, LVL: 70, FP: 60, TP: 75, AA: 65, AR: 47, equips: [310,310,167,355] },
				{ mid: 373, LVL: 63, FP: 52, TP: 76, AA: 58, AR: 49, equips: [267,267,348] },
				{ mid: 688, LVL: 62, FP: 50, TP: 75, AA: 58, AR: 49, equips: [267,267,348] },
			], },
			'E3-12': { ships: [
				{ mid: 693, LVL: 56, FP: 68, TP: 70, AA: 60, AR: 75, equips: [341,341,126,101] },
				{ mid: 691, LVL: 55, FP: 72, TP: 61, AA: 70, AR: 68, equips: [341,341,126,74] },
				{ mid: 365, LVL: 52, FP: 27, TP: 0, AA: 67, AR: 58, equips: [188,255,257,259] },
				{ mid: 586, LVL: 70, FP: 60, TP: 75, AA: 65, AR: 47, equips: [310,310,167,355] },
				{ mid: 373, LVL: 63, FP: 52, TP: 76, AA: 58, AR: 49, equips: [267,267,348] },
				{ mid: 680, LVL: 61, FP: 52, TP: 78, AA: 59, AR: 49, equips: [267,267,347] },
			], },
			'E3-13': { ships: [
				{ mid: 364, LVL: 95, FP: 106, TP: 0, AA: 98, AR: 93, equips: [192,192,192,191] },
				{ mid: 393, LVL: 85, FP: 50, TP: 0, AA: 82, AR: 70, equips: [244,257,255,259] },
				{ mid: 691, LVL: 55, FP: 72, TP: 61, AA: 70, AR: 68, equips: [341,341,126,74], damage: [.85,.95] },
				{ mid: 693, LVL: 56, FP: 68, TP: 70, AA: 60, AR: 75, equips: [341,341,126,101], damage: [.85,.95] },
				{ mid: 586, LVL: 70, FP: 60, TP: 75, AA: 65, AR: 47, equips: [310,310,167,355] },
				{ mid: 893, LVL: 88, FP: 53, TP: 90, AA: 72, AR: 50, equips: [280,179,315] },
			], },
			'E3-14': { ships: [
				{ mid: 364, LVL: 95, FP: 106, TP: 0, AA: 98, AR: 93, equips: [192,192,192,191] },
				{ mid: 586, LVL: 70, FP: 60, TP: 75, AA: 65, AR: 47, equips: [310,310,167,166] },
				{ mid: 500, LVL: 69, FP: 25, TP: 0, AA: 34, AR: 33, equips: [91,91,355] },
				{ mid: 691, LVL: 55, FP: 72, TP: 61, AA: 70, AR: 68, equips: [341,341,126,74], damage: [.85,.95] },
				{ mid: 693, LVL: 56, FP: 68, TP: 70, AA: 60, AR: 75, equips: [341,341,126,101], damage: [.85,.95] },
				{ mid: 893, LVL: 88, FP: 53, TP: 90, AA: 72, AR: 50, equips: [280,179,315], damage: [.75,.85] },
			], },
		},
		overrideStats: {
			1700: { HP: 650 },
			1701: { HP: 750 },
			1702: { HP: 500 },
			1703: { HP: 650 },
			1704: { HP: 750 },
			1705: { HP: 400 },
			1706: { HP: 450, AR: 179 },
			1707: { HP: 550, AR: 199 },
			1834: { AR: 144 },
			1835: { AR: 184 },
			1836: { AR: 224 },
			1837: { AR: 174 },
			1838: { AR: 214 },
			1839: { AR: 254 },
			1863: { HP: 540 },
			1864: { HP: 540 },
		},
		voiceSpecial: {
			1837: { 'sunk': 'assets/voice/French_Battleship_Princess_Broken_Form_Damaged.ogg' },
			1838: { 'sunk': 'assets/voice/French_Battleship_Princess_Broken_Form_Damaged.ogg' },
			1839: { 'sunk': 'assets/voice/French_Battleship_Princess_Broken_Form_Damaged.ogg' },
		},
		historical: {
			'german': [171,174,175,176,431,432],
			'italian': [441,442,443,444,448,449,535,575,589,590,614],
			'french': [491,492],
			'british': [439,515,519,520,571],
			'usa': [433,440,544,549,561,562,596,601],
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Brest Defence Operation',
				fleetTypes: [0],
				bgmMap: 139,
				bgmDN: 140,
				bgmNN: 140,
				bgmDB: 143,
				bgmNB: 143,
				bossnode: 14,
				currentBoss: 'N',
				checkLock: [2,3],
				giveLock: 1,
				lbas: 1,
				maphp: {
					3: { 1: 3850 },
					2: { 1: 3080 },
					1: { 1: 2310 },
					4: { 1: 2310 },
				},
				finalhp: {
					3: 770,
					2: 770,
					1: 770,
					4: 770,
				},
				reward: {
					3: { items: [351,348,346,346], firstOnly: true },
					2: { items: [351,346,346], firstOnly: true },
					1: { items: [351,346], firstOnly: true },
					4: { items: [351], firstOnly: true },
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '1_1.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							let diff = CHDATA.event.maps[1].diff
							if (diff == 3 || diff == 2) {
								return debuff.A && debuff.D && debuff.K && debuff.L;
							} else if (diff == 1) {
								return debuff.AD && debuff.K && debuff.L;
							} else {
								return debuff.K && debuff.L;
							}
						}
					},
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				startCheck: function(ships) {
					let bonusTypes = {
						'italian': 1.1,
						'german': 1.15,
						'british': 1.15,
						'french': 1.25,
					};
					for (let ship of FLEETS1[0].ships) {
						let mid = getBaseId(ship.mid);
						for (let type in bonusTypes) {
							if (MAPDATA[45].historical[type].indexOf(mid) != -1) {
								ship.bonusSpecial = [{mod:bonusTypes[type]}];
							}
						}
						if (mid == 574) ship.bonusSpecial = [{mod:1.2}];
					}
					return 'Start';
				},
				nodes: {
					'Start': {
						type: 0,
						x: 503,
						y: 215,
						route: 'C'
					},
					'A': {
						type: 1,
						x: 580,
						y: 87,
						distance: 2,
						subonly: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':40,'Hard 3':40},
							2: {'Medium 1':15,'Medium 2':20,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':55,'Casual 2':45},
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[1].debuff.A = 1;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[1].debuff.AD = 1;
						},
						end: true
					},
					'B': {
						type: 1,
						x: 501,
						y: 128,
						distance: 2,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':30,'Medium 2':30,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':30,'Easy 2':30,'Easy 3':20,'Easy 4':20},
							4: {'Casual 1':50,'Casual 2':25,'Casual 3':25},
						},
						route: 'A'
					},
					'C': {
						type: 1,
						x: 447,
						y: 222,
						distance: 2,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':30,'Hard 4':30},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':30,'Easy 2':40,'Easy 3':30},
							4: {'Casual 1':60,'Casual 2':20,'Casual 3':20},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: {'Easy 1':30,'Easy 2':40,'Easy 3':30},
							4: {'Casual 1':60,'Casual 2':20,'Casual 3':20},
						},
						routeC: function(ships) {
							if (ships.DD + ships.DE >= 2) return 'E';
							return 'F';
						}
					},
					'D': {
						type: 1,
						x: 407,
						y: 330,
						distance: 3,
						subonly: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':40,'Hard 3':30},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':50,'Casual 2':50},
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[1].debuff.D = 1;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[1].debuff.AD = 1;
						},
						end: true
					},
					'E': {
						type: 3,
						x: 375,
						y: 231,
						distance: 3,
						routeS: ['F','H']
					},
					'F': {
						type: 3,
						x: 362,
						y: 155,
						distance: 3,
						routeS: ['B','G']
					},
					'G': {
						type: 1,
						x: 330,
						y: 110,
						distance: 4,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':25,'Medium 2':25,'Medium 3':25,'Medium 4':25},
							1: {'Easy 1':30,'Easy 2':30,'Easy 3':20,'Easy 4':20},
							4: {'Casual 1':60,'Casual 2':20,'Casual 3':20},
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (CHDATA.event.maps[1].diff == 3) {
								let radars = checkSurfaceRadar(FLEETS1[0].ships);
								if (radars.num < 2) return 'I';
							}
							this.showLoSPlane = 'K';
							if (CHDATA.event.maps[1].routes.indexOf(1) != -1) {
								if (ships.DD + ships.DE >= 2) this.showLoSPlane = 'M';
							}
							return checkELoS33(getELoS33(1,4),{ 65: this.showLoSPlane, 63: 'I' });
						}
					},
					'H': {
						type: 1,
						x: 316,
						y: 281,
						distance: 4,
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								let mid = getBaseId(ship.mid);
								if (MAPDATA[45].historical.french.indexOf(mid) != -1) {
									ship.bonusSpecial.push({mod:1.1});
								}
							}
						},
						compDiff: {
							3: {'Hard 1':25,'Hard 2':25,'Hard 3':25,'Hard 4':25},
							2: {'Medium 1':25,'Medium 2':35,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
							4: {'Casual 1':50,'Casual 2':25,'Casual 3':25},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: {'Medium 1':25,'Medium 2':35,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
							4: {'Casual 1':50,'Casual 2':25,'Casual 3':25},
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (CHDATA.event.maps[1].diff == 3) {
								let radars = checkSurfaceRadar(FLEETS1[0].ships);
								if (radars.num < 2) return 'J';
							}
							if (ships.CL + ships.DD + ships.DE >= 5 && ships.CL + ships.aCV <= 1 && ships.CA + ships.CAV + ships.aBB <= 0) return 'D';
							if (CHDATA.event.maps[1].routes.indexOf(1) != -1) {
								this.showLoSPlane = 'M';
							}
							if (ships.aBB + ships.aCV + ships.CA + ships.CAV <= 3) this.showLoSPlane = 'L';
							if (!this.showLoSPlane) return 'J';
							return checkELoS33(getELoS33(1,4),{ 70: this.showLoSPlane, 68: 'J' });
						}
					},
					'I': {
						type: 3,
						x: 294,
						y: 60,
						distance: 5,
						end: true
					},
					'J': {
						type: 3,
						x: 249,
						y: 335,
						distance: 5,
						end: true
					},
					'K': {
						type: 1,
						x: 240,
						y: 128,
						distance: 5,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':30,'Hard 4':30},
							2: {'Medium 1':10,'Medium 2':10,'Medium 3':30,'Medium 4':35,'Medium 5':10,'Medium 6':10},
							1: {'Easy 1':20,'Easy 2':30,'Easy 3':30,'Easy 4':10,'Easy 5':10},
							4: {'Casual 1':65,'Casual 2':20,'Casual 3':20},
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[1].debuff.K = 1;
						},
						end: true
					},
					'L': {
						type: 1,
						x: 234,
						y: 239,
						distance: 5,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':25,'Hard 3':25},
							2: {'Medium 1':45,'Medium 2':30,'Medium 3':25},
							1: {'Easy 1':35,'Easy 2':30,'Easy 3':15,'Easy 4':10,'Easy 5':10},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						compDiffF: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: {'Easy 1':35,'Easy 2':30,'Easy 3':15,'Easy 4':10,'Easy 5':10},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[1].debuff.L = 1;
						},
						get end() {
							return CHDATA.event.maps[1].routes.indexOf(1) == -1;
						},
						route: 'N'
					},
					'M': {
						type: 1,
						x: 280,
						y: 175,
						distance: 4,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':40,'Hard 3':40},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':50,'Casual 2':50},
						},
						routeC: function(ships) {
							if (ships.CL && ships.DD + ships.DE >= 3 && (ships.speed >= 10 || ships.aBB + ships.aCV <= 0)) return 'N';
							return 'L';
						}
					},
					'N': {
						type: 1,
						x: 150,
						y: 197,
						distance: 5,
						hidden: 1,
						boss: true,
						friendFleet: ['E1-1','E1-2','E1-3'],
						friendFleetS: ['E1-4','E1-5','E1-6','E1-7'],
						setupSpecial: function() {
							for (let ship of FLEETS1[0].ships) {
								let mid = getBaseId(ship.mid);
								if (MAPDATA[45].historical.french.indexOf(mid) != -1) {
									ship.bonusSpecial.push({mod:1.1});
									ship.bonusSpecial.push({mod:1.3,on:[FLEETS2[0].ships[0].mid]});
								}
							}
						},
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Crossing Gibraltar',
				fleetTypes: [0,1,2,3],
				bgmMap: 139,
				bgmDN: 140,
				bgmNN: 140,
				bgmDB: 141,
				bgmNB: 141,
				bossnode: [14,22],
				checkLock: [1,3],
				giveLock: 2,
				lbas: 2,
				parts: {
					1: {
						currentBoss: 'N',
						maphp: {
							3: { 1: 3000 },
							2: { 1: 2600 },
							1: { 1: 1500 },
							4: { 1: 1500 },
						},
						finalhp: {
							3: 750,
							2: 650,
							1: 500,
							4: 500,
						},
					},
					2: {
						currentBoss: 'V',
						maphp: {
							3: { 1: 3950 },
							2: { 1: 3700 },
							1: { 1: 2800 },
							4: { 1: 2800 },
						},
						finalhp: {
							3: 790,
							2: 740,
							1: 700,
							4: 700,
						},
					},
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[2].part >= 2;
						}
					},
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
					chance: { 3: .25, 2: .25, 1: .25, 4: .25 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
						1: ['Easy 1','Easy 2','Easy 3'],
						4: ['Easy 1','Easy 2'],
					},
					compFPart: 2,
					compDiffF: {
						3: ['Hard 3'],
						2: ['Medium 3'],
						1: ['Easy 3'],
						4: ['Easy 2'],
					},
				},
				reward: {
					3: { items: [{id:348,limit:2},350,355], firstOnly: true },
					2: { items: [{id:348,limit:2},350], firstOnly: true },
					1: { items: [{id:348,limit:2}], firstOnly: true },
				},
				startCheck: function(ships) {
					let bonusTypes = {
						'italian': 1.1,
						'german': 1.1,
						'british': 1.15,
						'french': 1.1,
					};
					let s = FLEETS1[0].ships;
					if (FLEETS1[1]) s = s.concat(FLEETS1[1].ships);
					for (let ship of s) {
						let mid = getBaseId(ship.mid);
						for (let type in bonusTypes) {
							if (MAPDATA[45].historical[type].indexOf(mid) != -1) {
								ship.bonusSpecial = [{mod:bonusTypes[type]}];
							}
						}
					}
					
					if (CHDATA.event.maps[2].routes.indexOf(1) != -1) {
						if (CHDATA.fleets.combined == 2) return 'Start2';
						if (CHDATA.fleets.combined == 3) {
							if (ships.c.AV + ships.c.AO + ships.c.AR + ships.c.AS) return 'Start2';
						}
					}
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 54,
						y: 100,
						route: 'B'
					},
					'Start2': {
						type: 0,
						x: 505,
						y: 305,
						hidden: 1,
						route: 'O'
					},
					'A': {
						type: 1,
						x: 84,
						y: 221,
						distance: 7,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':15,'Hard 3':40,'Hard 4':20},
							2: {'Medium 1':40,'Medium 2':15,'Medium 3':30,'Medium 4':15},
							1: {'Easy 1':40,'Easy 2':15,'Easy 3':30,'Easy 4':15},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':40},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: {'Medium 1':40,'Medium 2':15,'Medium 3':30,'Medium 4':15},
							1: {'Easy 1':40,'Easy 2':15,'Easy 3':30,'Easy 4':15},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':40},
						},
						route: 'C'
					},
					'B': {
						type: 3,
						x: 113,
						y: 147,
						distance: 7,
						routeS: ['A','D']
					},
					'C': {
						type: 1,
						x: 145,
						y: 267,
						distance: 6,
						subonly: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':40,'Hard 3':40},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':50,'Casual 2':50},
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) return 'E';
							if (CHDATA.fleets.combined == 3 && ships.aBB <= 0) return 'E';
							return 'G';
						}
					},
					'D': {
						type: 1,
						x: 170,
						y: 115,
						distance: 6,
						subonly: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':40,'Hard 3':40},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':50,'Casual 2':50},
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3) return 'G';
							if (ships.speed >= 10 && ships.c.aCV <= 1 && ships.c.aBB + ships.c.aCV <= 2) return 'G';
							return 'F';
						}
					},
					'E': {
						type: 1,
						x: 207,
						y: 311,
						distance: 5,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':10,'Hard 3':40,'Hard 4':20},
							2: {'Medium 1':40,'Medium 2':20,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':30,'Easy 2':30,'Easy 3':20,'Easy 4':20},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':50},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: {'Medium 1':40,'Medium 2':20,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':30,'Easy 2':30,'Easy 3':20,'Easy 4':20},
							4: {'Casual 1':30,'Casual 2':20,'Casual 3':50},
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (CHDATA.fleets.combined == 3) return 'M';
							this.showLoSPlane = 'I';
							return checkELoS33(getELoS33(1,1)+getELoS33(2,1),{ 25: 'I', 24: 'H' });
						}
					},
					'F': {
						type: 1,
						x: 236,
						y: 78,
						distance: 5,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':15,'Hard 3':40,'Hard 4':30},
							2: {'Medium 1':40,'Medium 2':15,'Medium 3':30,'Medium 4':15},
							1: {'Easy 1':40,'Easy 2':15,'Easy 3':30,'Easy 4':15},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':40},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: {'Medium 1':40,'Medium 2':15,'Medium 3':30,'Medium 4':15},
							1: {'Easy 1':40,'Easy 2':15,'Easy 3':30,'Easy 4':15},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':40},
						},
						route: 'J'
					},
					'G': {
						type: 1,
						x: 240,
						y: 206,
						distance: 4,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':30,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':10,'Medium 2':10,'Medium 3':30,'Medium 4':35,'Medium 5':10,'Medium 6':5},
							1: {'Easy 1':30,'Easy 2':40,'Easy 3':20,'Easy 4':10},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						compDiffF: {
							3: ['Hard 3','Hard 4'],
							2: {'Medium 3':40,'Medium 4':30,'Medium 5':15,'Medium 6':15},
							1: {'Easy 1':30,'Easy 2':40,'Easy 3':20,'Easy 4':10},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						routeC: function(ships) {
							if (ships.c.aCV <= 0) return 'K';
							if (ships.c.aCV <= 1 && ships.c.aBB <= 0) return 'K';
							return 'I';
						}
					},
					'H': {
						type: 3,
						x: 252,
						y: 344,
						distance: 4,
						end: true
					},
					'I': {
						type: 1,
						x: 298,
						y: 280,
						distance: 3,
						subonly: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':25,'Medium 2':25,'Medium 3':25,'Medium 4':25},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':50,'Casual 2':50},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: {'Medium 1':25,'Medium 2':25,'Medium 3':25,'Medium 4':25},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':50,'Casual 2':50},
						},
						route: 'K'
					},
					'J': {
						type: 1,
						x: 307,
						y: 100,
						distance: 4,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':30,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':10,'Medium 2':10,'Medium 3':30,'Medium 4':35,'Medium 5':10,'Medium 6':5},
							1: {'Easy 1':30,'Easy 2':40,'Easy 3':20,'Easy 4':10},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						compDiffF: {
							3: ['Hard 3','Hard 4'],
							2: {'Medium 3':40,'Medium 4':30,'Medium 5':15,'Medium 6':15},
							1: {'Easy 1':30,'Easy 2':40,'Easy 3':20,'Easy 4':10},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						routeC: function(ships) {
							this.showLoSPlane = 'G';
							let num = ships.c.aCV + ships.c.aBB + ships.c.LHA;
							if (num <= 4 && ships.c.aCV <= 2 && ships.speed >= 10) this.showLoSPlane = 'K';
							return checkELoS33(getELoS33(1,1)+getELoS33(2,1),{ 30: this.showLoSPlane, 25: 'L' });
						}
					},
					'K': {
						type: 1,
						x: 366,
						y: 254,
						distance: 2,
						setupSpecial: function() {
							let ships = FLEETS1[0].ships;
							if (FLEETS1[1]) ships = ships.concat(FLEETS1[1].ships);
							for (let ship of ships) {
								let mid = getBaseId(ship.mid);
								if (MAPDATA[45].historical.british.indexOf(mid) != -1) {
									ship.bonusSpecial.push({mod:1.08});
								}
								if (mid == 515) ship.bonusSpecial.push({mod:1.25});
								if (mid == 519) ship.bonusSpecial.push({mod:1.2});
							}
						},
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':25,'Medium 4':25,'Medium 5':10,'Medium 6':10},
							1: {'Easy 1':10,'Easy 2':35,'Easy 3':35,'Easy 4':10,'Easy 5':10},
							4: {'Casual 1':40,'Casual 2':35,'Casual 3':25},
						},
						compDiffF: {
							3: {'Hard 3':70,'Hard 4':30},
							2: {'Medium 3':25,'Medium 4':25,'Medium 5':25,'Medium 6':25},
							1: {'Easy 1':10,'Easy 2':35,'Easy 3':35,'Easy 4':10,'Easy 5':10},
							4: {'Casual 1':40,'Casual 2':35,'Casual 3':25},
						},
						route: 'M'
					},
					'L': {
						type: 3,
						x: 368,
						y: 121,
						distance: 3,
						end: true
					},
					'M': {
						type: 3,
						x: 386,
						y: 306,
						distance: 3,
						route: 'N'
					},
					'N': {
						type: 1,
						x: 453,
						y: 304,
						distance: 2,
						boss: true,
						setupSpecial: function() {
							let ships = FLEETS1[0].ships;
							if (FLEETS1[1]) ships = ships.concat(FLEETS1[1].ships);
							for (let ship of ships) {
								let mid = getBaseId(ship.mid);
								if (MAPDATA[45].historical.british.indexOf(mid) != -1) {
									ship.bonusSpecial = [{mod:1.15}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1','Casual 2'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 3'],
						},
						end: true
					},
					'O': {
						type: 1,
						x: 560,
						y: 288,
						distance: 2,
						hidden: 1,
						setupSpecial: function() {
							let ships = FLEETS1[0].ships;
							if (FLEETS1[1]) ships = ships.concat(FLEETS1[1].ships);
							for (let ship of ships) {
								let mid = getBaseId(ship.mid);
								if (MAPDATA[45].historical.italian.indexOf(mid) != -1) {
									ship.bonusSpecial.push({mod:1.1});
									ship.bonusSpecial.push({mod:1.15,on:[FLEETS2[0].ships[0].mid]});
								}
								if (mid == 515) ship.bonusSpecial.push({mod:1.25});
								if (mid == 519) ship.bonusSpecial.push({mod:1.2});
								if (mid == 444) ship.bonusSpecial = [{mod:1.68}];
							}
						},
						compDiff: {
							3: {'Hard 1':25,'Hard 2':15,'Hard 3':40,'Hard 4':20},
							2: {'Medium 1':40,'Medium 2':15,'Medium 3':30,'Medium 4':15},
							1: {'Easy 1':15,'Easy 2':15,'Easy 3':40,'Easy 4':30},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':40},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: {'Medium 1':40,'Medium 2':15,'Medium 3':30,'Medium 4':15},
							1: {'Easy 1':15,'Easy 2':15,'Easy 3':40,'Easy 4':30},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':40},
						},
						routeC: function(ships) {
							if (ships.c.SS + ships.c.SSV) return 'R';
							let num = ships.c.aBB + ships.c.aCV;
							if (num + ships.c.LHA <= 3 && num + ships.c.CA + ships.c.CAV <= 6) return 'P';
							return 'R';
						}
					},
					'P': {
						type: 1,
						x: 593,
						y: 242,
						distance: 2,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':40,'Hard 3':40},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':50,'Casual 2':50},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':50,'Casual 2':50},
						},
						route: 'T'
					},
					'Q': {
						type: 1,
						x: 621,
						y: 178,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':40,'Hard 3':20},
							2: {'Medium 1':40,'Medium 2':40,'Medium 3':20},
							1: {'Easy 1':20,'Easy 2':40,'Easy 3':40},
							4: {'Casual 1':70,'Casual 2':30},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 2'],
						},
						routeC: function(ships) {
							let ids = ships.c.ids;
							if (isShipInList(ids,187) || isShipInList(ids,450)) return 'S';
							return 'V';
						}
					},
					'R': {
						type: 1,
						x: 631,
						y: 264,
						distance: 3,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':15,'Hard 3':40,'Hard 4':20},
							2: {'Medium 1':40,'Medium 2':15,'Medium 3':30,'Medium 4':15},
							1: {'Easy 1':40,'Easy 2':15,'Easy 3':30,'Easy 4':15},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':40},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: {'Medium 1':40,'Medium 2':15,'Medium 3':30,'Medium 4':15},
							1: {'Easy 1':40,'Easy 2':15,'Easy 3':30,'Easy 4':15},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':40},
						},
						route: 'T'
					},
					'S': {
						type: 3,
						x: 636,
						y: 130,
						distance: 5,
						hidden: 1,
						repair: true,
						route: 'V'
					},
					'T': {
						type: 1,
						x: 663,
						y: 216,
						distance: 5,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':25,'Hard 3':25,'Hard 4':25},
							2: {'Medium 1':40,'Medium 2':20,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':30},
						},
						compDiffF: {
							3: ['Hard 4'],
							2: {'Medium 1':40,'Medium 2':20,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':30},
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							let num = ships.c.aCV + ships.c.aBB;
							if (ships.speed >= 10 && num <= 4 && num + ships.c.CA + ships.c.CAV <= 7) return 'V';
							this.showLoSPlane = 'Q';
							return checkELoS33(getELoS33(1,1)+getELoS33(1,2),{ 35: 'Q', 24: 'U' });
						}
					},
					'U': {
						type: 3,
						x: 692,
						y: 258,
						distance: 6,
						hidden: 1,
						end: true
					},
					'V': {
						type: 1,
						x: 681,
						y: 151,
						distance: 6,
						hidden: 1,
						boss: true,
						friendFleet: ['E2-1','E2-2','E2-3','E2-4','E2-5'],
						friendFleetS: ['E2-6','E2-7','E2-8','E2-9'],
						setupSpecial: function() {
							let ships = FLEETS1[0].ships;
							if (FLEETS1[1]) ships = ships.concat(FLEETS1[1].ships);
							for (let ship of ships) {
								let mid = getBaseId(ship.mid);
								if (MAPDATA[45].historical.italian.indexOf(mid) != -1) {
									ship.bonusSpecial = [{mod:1.25}];
								}
								if (mid == 444) ship.bonusSpecial.push({mod:1.4});
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Commence! Operation Shingle',
				fleetTypes: [0,1,2,3],
				bgmMap: 142,
				bgmDN: 141,
				bgmNN: 141,
				bgmDB: 144,
				bgmNB: 144,
				bossnode: [10,21],
				checkLockHard: [1,2],
				giveLockHard: 3,
				lbas: 3,
				parts: {
					1: {
						currentBoss: 'J',
						maphp: {
							3: { 1: 2200 },
							2: { 1: 1800 },
							1: { 1: 1600 },
							4: { 1: 1600 },
						},
						finalhp: {
							3: 490,
							2: 490,
							1: 490,
							4: 490,
						},
					},
					2: {
						currentBoss: 'U',
						maphp: {
							3: { 1: 4800 },
							2: { 1: 4200 },
							1: { 1: 4000 },
							4: { 1: 4000 },
						},
						finalhp: {
							3: 888,
							2: 840,
							1: 800,
							4: 800,
						},
					},
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlock: function() {
							return CHDATA.event.maps[3].part >= 2;
						}
					},
					2: {
						images: [{ name: '3_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							let diff = CHDATA.event.maps[3].diff;
							if (diff == 3) {
								return debuff.O >= 2 && debuff.K && debuff.E && (debuff.AB1 >= 2 || CHDATA.config.disableRaidReq);
							} else if (diff == 2) {
								return debuff.O && debuff.K && debuff.EA;
							} else {
								return debuff.OB && debuff.KA && debuff.EA;
							}
						}
					},
					3: {
						images: [{ name: '3_3.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (!debuff) return false;
							let diff = CHDATA.event.maps[3].diff;
							if (diff == 3) {
								return debuff.T >= 2 && debuff.D && debuff.R && debuff.U >= 2 && (debuff.AB2 || CHDATA.config.disableRaidReq);
							} else if (diff == 2) {
								return debuff.T && debuff.D && debuff.R && debuff.U && (debuff.AB2 || CHDATA.config.disableRaidReq);
							} else {
								return debuff.T && debuff.D && debuff.U;
							}
						}
					},
				},
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
					chance: { 3: .25, 2: .25, 1: .25, 4: .25 },
					compName: 'AB',
					compDiff: {
						3: ['Hard 1','Hard 2','Hard 3'],
						2: ['Medium 1','Medium 2','Medium 3'],
						1: ['Easy 1','Easy 2','Easy 3'],
						4: ['Easy 1','Easy 2'],
					},
					compFPart: 2,
					compDiffF: {
						3: ['Hard 3'],
						2: ['Medium 3'],
						1: ['Easy 3'],
						4: ['Easy 2'],
					},
					debuffGive: function(airState,totalHPLost) {
						if (CHDATA.event.maps[3].part == 1) return;
						if (CHDATA.event.maps[3].routes.indexOf(2) == -1) {
							if (airState >= 1) CHDATA.event.maps[3].debuff.AB1 = CHDATA.event.maps[3].debuff.AB1 + 1 || 1;
						} else if (CHDATA.event.maps[3].routes.indexOf(3) == -1) {
							if (airState >= 1) CHDATA.event.maps[3].debuff.AB2 = 1;
						}
						if (CHDATA.event.maps[3].hp <= MAPDATA[45].maps[3].parts[2].finalhp[CHDATA.event.maps[3].diff]) {
							if (airState >= 1) CHDATA.event.maps[3].debuff.AB3 = 1;
						}
					}
				},
				reward: {
					ships: [520]
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					let debuffed = false, diff = CHDATA.event.maps[3].diff;
					if (diff == 3) {
						debuffed = debuff.J && debuff.O2 && debuff.D2 && debuff.H && debuff.E2 && (debuff.AB3 || CHDATA.config.disableRaidReq);
					} else if (diff == 2) {
						debuffed = debuff.J && debuff.O2 && debuff.D2 && (debuff.AB3 || CHDATA.config.disableRaidReq);
					} else if (diff == 1) {
						debuffed = debuff.J && debuff.O2 && debuff.D2;
					} else {
						debuffed = debuff.J && debuff.O2;
					}
					if (debuffed) {
						SM.playNew('assets/voice/258.mp3');
						setTimeout(function() { alert('DEBUFF'); }, 1);
						CHDATA.event.maps[3].debuffed = true;
					}
				},
				startCheck: function(ships) {
					let bonusTypes = {
						'italian': 1.1,
						'german': 1.1,
						'usa': 1.1,
						'british': 1.15,
					};
					let s = FLEETS1[0].ships;
					if (FLEETS1[1]) s = s.concat(FLEETS1[1].ships);
					for (let ship of s) {
						let mid = getBaseId(ship.mid);
						for (let type in bonusTypes) {
							if (MAPDATA[45].historical[type].indexOf(mid) != -1) {
								ship.bonusSpecial = [{mod:bonusTypes[type]}];
							}
						}
					}
					
					if (CHDATA.event.maps[3].routes.indexOf(3) != -1) {
						if (CHDATA.fleets.combined == 1 || CHDATA.fleets.combined == 3) return 'Start2';
					}
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 110,
						y: 267,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 249,
						y: 97,
						hidden: 3,
						route: 'D'
					},
					'A': {
						type: 1,
						x: 207,
						y: 221,
						distance: 1,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':15,'Hard 3':40,'Hard 4':20},
							2: {'Medium 1':40,'Medium 2':15,'Medium 3':30,'Medium 4':15},
							1: {'Easy 1':40,'Easy 2':15,'Easy 3':30,'Easy 4':15},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':40},
						},
						routeC: function(ships) {
							if (!CHDATA.fleets.combined || CHDATA.fleets.combined == 3) return 'B';
							if (ships.c.aCV >= 3) return 'C';
							if (ships.c.aCV + ships.c.aBB >= 5) return 'C';
							return 'F';
						}
					},
					'B': {
						type: 3,
						x: 294,
						y: 181,
						routeS: ['D','F']
					},
					'C': {
						type: 1,
						x: 353,
						y: 295,
						distance: 3,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':30,'Hard 3':35,'Hard 4':15},
							2: {'Medium 1':20,'Medium 2':30,'Medium 3':35,'Medium 4':15},
							1: {'Easy 1':40,'Easy 2':40,'Easy 3':20},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						compFPart: 2,
						compDiffF: {
							3: ['Hard 3','Hard 4'],
							2: ['Medium 3','Medium 4'],
							1: {'Easy 1':40,'Easy 2':40,'Easy 3':20},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 360,
						y: 149,
						distance: 3,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':30,'Hard 3':35,'Hard 4':15},
							2: {'Medium 1':20,'Medium 2':30,'Medium 3':35,'Medium 4':15},
							1: {'Easy 1':40,'Easy 2':40,'Easy 3':20},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						compFPart: 2,
						compDiffF: {
							3: ['Hard 3','Hard 4'],
							2: ['Medium 3','Medium 4'],
							1: {'Easy 1':40,'Easy 2':40,'Easy 3':20},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part == 1) return;
							if (CHDATA.event.maps[3].routes.indexOf(2) != -1) {
								if (FLEETS1[0].AS >= 1) CHDATA.event.maps[3].debuff.D = 1;
							}
							if (CHDATA.event.maps[3].hp <= MAPDATA[45].maps[3].parts[2].finalhp[CHDATA.event.maps[3].diff]) {
								if (FLEETS1[0].AS >= 1) CHDATA.event.maps[3].debuff.D2 = 1;
							}
						},
						routeC: function(ships) {
							if (!CHDATA.fleets.combined || CHDATA.fleets.combined == 3) return 'E';
							return 'F';
						}
					},
					'E': {
						type: 1,
						x: 416,
						y: 123,
						distance: 4,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compFPart: 2,
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part == 1) return;
							let debuff = CHDATA.event.maps[3].debuff, rank = CHDATA.temp.rank;
							if (rank == 'S') debuff.E = 1;
							if (rank == 'S' || rank == 'A') debuff.EA = 1;
							if (CHDATA.event.maps[3].hp <= MAPDATA[45].maps[3].parts[2].finalhp[CHDATA.event.maps[3].diff]) {
								if (rank == 'S' || rank == 'A') debuff.E2 = 1;
							}
							
						},
						end: true
					},
					'F': {
						type: 1,
						x: 438,
						y: 256,
						distance: 4,
						subonly: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':40,'Hard 3':40},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':50,'Casual 2':50},
						},
						compFPart: 2,
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':50,'Casual 2':50},
						},
						routeC: function(ships) {
							if (!CHDATA.fleets.combined || CHDATA.fleets.combined == 3) return 'I';
							if (ships.speed <= 5) return 'G';
							if (ships.c.aCV) return 'G';
							if (ships.c.aCV + ships.c.aBB >= 4) return 'G';
							return 'I';
						}
					},
					'G': {
						type: 1,
						x: 514,
						y: 194,
						distance: 5,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':40,'Hard 3':10,'Hard 4':30},
							2: {'Medium 1':30,'Medium 2':30,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
							4: {'Casual 1':35,'Casual 2':40,'Casual 3':25},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 2':70,'Hard 4':30},
							2: {'Medium 1':30,'Medium 2':30,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
							4: {'Casual 1':35,'Casual 2':40,'Casual 3':25},
						},
						routeC: function(ships) {
							let num = ships.c.aCV + ships.c.aBB;
							if (CHDATA.event.maps[3].routes.indexOf(1) != -1) {
								if (ships.CV > 2) return 'H';
								if (num > 5) return 'H';
								if (ships.speed <= 5 && num > 4) return 'H';
								return 'M';
							} else {
								if (ships.c.aBB + ships.c.CV > 2) return 'H';
								if (ships.speed <= 5 && num > 3) return 'H';
								return 'I';
							}
						}
					},
					'H': {
						type: 1,
						x: 568,
						y: 220,
						distance: 6,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':30,'Hard 3':35,'Hard 4':15},
							2: {'Medium 1':20,'Medium 2':30,'Medium 3':35,'Medium 4':15},
							1: {'Easy 1':40,'Easy 2':40,'Easy 3':20},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						compFPart: 2,
						compDiffF: {
							3: ['Hard 3','Hard 4'],
							2: ['Medium 3','Medium 4'],
							1: {'Easy 1':40,'Easy 2':40,'Easy 3':20},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part == 1) return;
							if (CHDATA.event.maps[3].hp <= MAPDATA[45].maps[3].parts[2].finalhp[CHDATA.event.maps[3].diff]) {
								if (FLEETS1[0].AS >= 1) CHDATA.event.maps[3].debuff.H = 1;
							}
						},
						routeC: function(ships) {
							if (CHDATA.event.maps[3].routes.indexOf(1) != -1) {
								return 'M';
							}
							return 'I';
						}
					},
					'I': {
						type: 1,
						x: 593,
						y: 296,
						distance: 7,
						compDiff: {
							3: {'Hard 1':55,'Hard 2':45},
							2: {'Medium 1':25,'Medium 2':25,'Medium 3':25,'Medium 4':25},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						compFPart: 1,
						compDiffF: {
							3: ['Hard 1'],
							2: ['Medium 3'],
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 677,
						y: 336,
						distance: 8,
						boss: true,
						friendFleet: ['E3-4','E3-5'],
						friendFleetS: ['E3-1','E3-8','E3-9'],
						setupSpecial: function() {
							let ships = FLEETS1[0].ships;
							if (FLEETS1[1]) ships = ships.concat(FLEETS1[1].ships);
							if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships); 
							for (let ship of ships) {
								let mid = getBaseId(ship.mid);
								if (MAPDATA[45].historical.german.indexOf(mid) != -1) {
									ship.bonusSpecial = [{mod:1.1}];
								}
								if (MAPDATA[45].historical.italian.indexOf(mid) != -1) {
									ship.bonusSpecial = [{mod:1.2}];
								}
								if (MAPDATA[45].historical.british.indexOf(mid) != -1) {
									ship.bonusSpecial = [{mod:1.25}];
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compFPart: 1,
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part == 1) return;
							if (CHDATA.event.maps[3].hp <= MAPDATA[45].maps[3].parts[2].finalhp[CHDATA.event.maps[3].diff]) {
								if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[3].debuff.J = 1;
							}
						},
						end: true
					},
					'K': {
						type: 1,
						x: 530,
						y: 104,
						distance: 6,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':30,'Easy 2':35,'Easy 3':35},
							4: {'Casual 1':55,'Casual 2':45},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 3'],
							4: ['Casual 1'],
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part == 1) return;
							let debuff = CHDATA.event.maps[3].debuff, rank = CHDATA.temp.rank;
							if (rank == 'S') debuff.K = 1;
							if (rank == 'S' || rank == 'A') debuff.KA = 1;
						},
						routeC: function(ships) {
							let num = ships.c.aCV + ships.c.aBB;
							let ids = ships.c.ids;
							if (ships.c.aBB <= 2 && num + ships.c.LHA <= 4) {
								this.showLoSPlane = 'R';
							} else if (ships.c.SS + ships.c.SSV) {
								this.showLoSPlane = 'P';
							} else if (ships.c.DD < 2) {
								this.showLoSPlane = 'P';
							} else if (isShipInList(ids,187) || isShipInList(ids,450)) {
								let numQ = num + ships.c.LHA + ships.c.AO + ships.c.CA + ships.c.CAV + ships.c.CL + ships.c.CLT;
								this.showLoSPlane = (numQ <= 8)? 'R' : 'P';
							} else if (num > 5) {
								this.showLoSPlane = 'P';
							} else if (ships.speed <= 5 && num > 4) {
								this.showLoSPlane = 'P';
							} else if (CHDATA.event.maps[3].diff != 4 && ships.c.aBB > 2) {
								this.showLoSPlane = 'P';
							} else {
								this.showLoSPlane = 'R';
							}
							return checkELoS33(getELoS33(1,1)+getELoS33(2,1),{ 42: this.showLoSPlane, 30: 'S' });
						},
						get end() {
							return CHDATA.event.maps[3].routes.indexOf(2) == -1;
						}
					},
					'L': {
						type: 3,
						x: 531,
						y: 148,
						distance: 5,
						hidden: 1,
						routeC: function(ships) {
							let ids = ships.c.ids;
							if (isShipInList(ids,187) || isShipInList(ids,450)) return 'Q';
							return 'K';
						}
					},
					'M': {
						type: 3,
						x: 586,
						y: 138,
						distance: 6,
						hidden: 1,
						routeS: ['L','N']
					},
					'N': {
						type: 1,
						x: 650,
						y: 178,
						distance: 7,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':30,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':25,'Medium 2':30,'Medium 3':30,'Medium 4':15},
							1: {'Easy 1':40,'Easy 2':45,'Easy 3':15},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						routeC: function(ships) {
							this.showNoCompass = true;
							if (CHDATA.event.maps[3].routes.indexOf(2) != -1) {
								this.showNoCompass = false;
								let num = ships.c.SS + ships.c.SSV;
								if (num >= 6) return 'T';
								if (ships.c.AS && num >= 3) return 'T';
							}
							return 'O';
						}
					},
					'O': {
						type: 1,
						x: 667,
						y: 98,
						distance: 8,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':50},
							2: {'Medium 1':50,'Medium 2':50},
							1: {'Easy 1':50,'Easy 2':50},
							4: {'Casual 1':50,'Casual 2':50},
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part == 1) return;
							let debuff = CHDATA.event.maps[3].debuff, rank = CHDATA.temp.rank;
							if (rank == 'S' || rank == 'A') debuff.O = debuff.O + 1 || 1;
							if (rank == 'S' || rank == 'A' || rank == 'B') debuff.OB = 1;
							if (CHDATA.event.maps[3].hp <= MAPDATA[45].maps[3].parts[2].finalhp[CHDATA.event.maps[3].diff]) {
								if (rank == 'S' || rank == 'A') debuff.O2 = 1;
							}
						},
						end: true
					},
					'P': {
						type: 1,
						x: 476,
						y: 73,
						distance: 5,
						hidden: 2,
						subonly: true,
						compDiff: {
							3: {'Hard 1':35,'Hard 2':35,'Hard 3':30},
							2: {'Medium 1':25,'Medium 2':25,'Medium 3':25,'Medium 4':25},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':30,'Easy 4':30},
							4: {'Casual 1':50,'Casual 2':50},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: {'Casual 1':50,'Casual 2':50},
						},
						route: 'R'
					},
					'Q': {
						type: 3,
						x: 489,
						y: 128,
						distance: 5,
						hidden: 2,
						repair: true,
						routeC: function(ships) {
							this.showNoCompass = true;
							if (CHDATA.event.maps[3].routes.indexOf(3) != -1) {
								this.showNoCompass = false;
								if (ships.speed >= 15) return 'P';
								if (ships.c.aCV + ships.c.aBB > 5) return 'K';
								if (ships.c.aBB + ships.c.CA + ships.c.CAV + ships.c.CLT + ships.c.AV > 6) return 'K';
								return 'P';
							}
							return 'K';
						}
					},
					'R': {
						type: 1,
						x: 530,
						y: 62,
						distance: 6,
						hidden: 2,
						raid: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':40,'Hard 3':20},
							2: {'Medium 1':40,'Medium 2':40,'Medium 3':20},
							1: {'Easy 1':25,'Easy 2':40,'Easy 3':35},
							4: {'Casual 1':65,'Casual 2':35},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: ['Medium 3'],
							1: ['Easy 3'],
							4: ['Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part == 1) return;
							if (CHDATA.event.maps[3].routes.indexOf(2) != -1) {
								if (FLEETS1[0].AS >= 1) CHDATA.event.maps[3].debuff.R = 1;
							}
						},
						route: 'U'
					},
					'S': {
						type: 3,
						x: 615,
						y: 105,
						distance: 7,
						hidden: 2,
						end: true
					},
					'T': {
						type: 1,
						x: 694,
						y: 175,
						distance: 8,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':50,'Hard 3':25},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':50,'Easy 2':50},
							4: {'Casual 1':50,'Casual 2':50},
						},
						compDiffF: {
							3: ['Hard 3'],
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':50,'Easy 2':50},
							4: {'Casual 1':50,'Casual 2':50},
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part == 1) return;
							let debuff = CHDATA.event.maps[3].debuff, rank = CHDATA.temp.rank;
							if (rank == 'S') debuff.T = debuff.T + 1 || 1;
							if (CHDATA.event.maps[3].hp <= MAPDATA[45].maps[3].parts[2].finalhp[CHDATA.event.maps[3].diff]) {
								if (rank == 'S' || rank == 'A') debuff.O2 = 1;
							}
						},
						end: true
					},
					'U': {
						type: 1,
						x: 594,
						y: 63,
						distance: 7,
						hidden: 2,
						boss: true,
						friendFleet: ['E3-4','E3-2','E3-3','E3-5','E3-6','E3-7'],
						friendFleetS: ['E3-10','E3-11','E3-12','E3-13','E3-14'],
						setupSpecial: function() {							
							let ships = FLEETS1[0].ships;
							if (FLEETS1[1]) ships = ships.concat(FLEETS1[1].ships);
							if (CHDATA.sortie.fleetFriend) ships = ships.concat(CHDATA.sortie.fleetFriend.ships); 
							let shortcut = CHDATA.event.maps[3].routes.indexOf(3) != -1;
							for (let ship of ships) {
								let mid = getBaseId(ship.mid);
								if (MAPDATA[45].historical.german.indexOf(mid) != -1) {
									ship.bonusSpecial = [{mod:1.1}];
								}
								if (MAPDATA[45].historical.italian.indexOf(mid) != -1) {
									ship.bonusSpecial = [{mod:1.15}];
								}
								if (MAPDATA[45].historical.usa.indexOf(mid) != -1) {
									ship.bonusSpecial = [{mod:1.25}];
								}
								if (MAPDATA[45].historical.british.indexOf(mid) != -1) {
									ship.bonusSpecial = [{mod:1.3}];
								}
								if (shortcut) {
									if (!ship.bonusSpecial) ship.bonusSpecial = [];
									ship.bonusSpecial.push({mod:1.07});
								}
							}
						},
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
							4: ['Casual 1'],
						},
						compDiffF: {
							3: ['Hard 2'],
							2: ['Medium 2'],
							1: ['Easy 2'],
							4: ['Casual 2'],
						},
						debuffGive: function() {
							if (CHDATA.event.maps[3].part == 1) return;
							let debuff = CHDATA.event.maps[3].debuff, rank = CHDATA.temp.rank;
							if (rank == 'S' || rank == 'A') debuff.U = debuff.U + 1 || 1;
						},
						end: true
					},
				}
			}
		}
	}
};
MAPDATA[45] = MAPDATA45[45];