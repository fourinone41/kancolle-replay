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
						unlockRules: new ChGimmickList('mapPart', null, 1, [
							// --- TODO : on easy you only needed either A or D 
							{ node: 'A', type: 'battle', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'A', 2:'S', 3:'S' } },
							{ node: 'D', type: 'battle', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'A', 2:'S', 3:'S' } },
							{ node: 'K', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
							{ node: 'L', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
						], {
							partToUnlock: 1
						})
					},
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				mapInfo: 'No CV(B) allowed',
				startBonus: [
					new ChShipIdsBonuses({ type: 'set' }, 'event.historical.italian', 1.1),
					new ChShipIdsBonuses({ type: 'set' }, 'event.historical.german', 1.15),
					new ChShipIdsBonuses({ type: 'set' }, 'event.historical.british', 1.15),
					new ChShipIdsBonuses({ type: 'set' }, 'event.historical.french', 1.25),
					new ChShipIdsBonuses({ type: 'set' }, [574], 1.2),
				],
				nodes: {
					'Start': {
						type: 0,
						x: 503,
						y: 215,
						rules: [
							ChFixedRoutingRule('C')
						]
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
						rules: [
							ChFixedRoutingRule('A')
						]
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
						rules: [
							ChShipTypeRoutingRule(['DD', 'DE'], '>=', 2, 'E', 'F'),
						]
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
						end: true
					},
					'E': {
						type: 3,
						x: 375,
						y: 231,
						distance: 3,
						rules: [
							ChSelectRouteRule(['F','H']),
						]
					},
					'F': {
						type: 3,
						x: 362,
						y: 155,
						distance: 3,
						rules: [
							ChSelectRouteRule(['B','G']),
						]
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
						rules: [
							ChMultipleRulesRule([
								ChDifficultyRule([3], 'I'),
								ChEquipTypeRule({
									equipTypes: [RADARS, RADARL, RADARXL],
									LOS: 5,
								}, '<', 2, 2, 'I'),
							], 'AND', 'I'),

							ChIfThenElseRule(
								ChMultipleRulesRule([
									ChIsRouteUnlockedRule(1, 'M'),
									ChShipTypeRoutingRule(['DD', 'DE'], '>=', 2, 'M'),
								], 'AND', 'M'),
								ChLOSRule({ 65: 'M', 63: 'I' }, 4),
								ChLOSRule({ 65: 'K', 63: 'I' }, 4),
							)
						]
					},
					'H': {
						type: 1,
						x: 316,
						y: 281,
						distance: 4,
						bonuses: [
							new ChShipIdsBonuses({ type: 'add' }, 'event.historical.french', 1.1)
						],
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
						rules: [
							ChMultipleRulesRule([
								ChDifficultyRule([3], 'J'),
								ChEquipTypeRule({
									equipTypes: [RADARS, RADARL, RADARXL],
									LOS: 5,
								}, '<', 2, 2, 'J'),
							], 'AND', 'J'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CL', 'DD', 'DE'], '>=', 5, 'D'),
								ChShipTypeRoutingRule(['CL', 'aCV'], '<=', 1, 'D'),
								ChShipTypeRoutingRule(['CA', 'CAV', 'aBB'], '=', 0, 'D'),
							], 'AND', 'D'),

							ChIfThenElseRule(
								ChShipTypeRoutingRule(['aBB', 'aCV', 'CA', 'CAV'], '<=', 3, 'L'),
								ChLOSRule({ 70: 'L', 68: 'J' }, 4),
							),
							
							ChIfThenElseRule(
								ChIsRouteUnlockedRule(1, 'M'),
								ChLOSRule({ 70: 'M', 68: 'J' }, 4)
							),

							ChDefaultRouteRule('J')
						]
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
						get end() {
							return CHDATA.event.maps[1].routes.indexOf(1) == -1;
						},
						rules: [
							ChFixedRoutingRule('N')
						]
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
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CL', 'DD', 'DE'], '>=', 3, 'N'),

								ChMultipleRulesRule([
									ChSpeedRule('>=', 10, 'N'),
									ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 0, 'N'),
								], 'OR', 'N')

							], 'AND', 'N', 'L'),
						]
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
						bonuses: [
							new ChShipIdsBonuses({ type: 'add', excludeFF: true }, 'event.historical.french', 1.1),
							new ChShipIdsBonuses({ type: 'add', excludeFF: true, on: [1834,1835,1836,1837,1838,1839] }, 'event.historical.french', 1.3),
						],
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
						unlockRules: new ChGimmickList('mapPart', 2, 2, [], {
							partToUnlock: 1
						})
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
				startBonus: [
					new ChShipIdsBonuses({ type: 'set', }, 'event.historical.italian', 1.1),
					new ChShipIdsBonuses({ type: 'set', }, 'event.historical.german', 1.1),
					new ChShipIdsBonuses({ type: 'set', }, 'event.historical.british', 1.15),
					new ChShipIdsBonuses({ type: 'set', }, 'event.historical.french', 1.1),
				],
				startCheckRule: [
					// --- Part 1
					ChMapPartRule([1], ChFixedRoutingRule('Start1')),

					// --- Part 2
					ChFleetTypeRule([2], 'Start2'),

					ChMultipleRulesRule([
						ChFleetTypeRule([3], 'Start2'),
						ChShipTypeRoutingRule(['AV', 'AO', 'AR', 'AS'], '>', 0, 'Start2'),
					], 'AND', 'Start2'),

					ChDefaultRouteRule('Start1')
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 54,
						y: 100,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'Start2': {
						type: 0,
						x: 505,
						y: 305,
						hidden: 1,
						rules: [
							ChFixedRoutingRule('O')
						]
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
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'B': {
						type: 3,
						x: 113,
						y: 147,
						distance: 7,
						rules: [
							ChSelectRouteRule(['A','D']),
						]
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
						rules: [
							ChFleetTypeRule([2], 'E'),

							ChMultipleRulesRule([
								ChFleetTypeRule([3], 'E'),
								ChShipTypeRoutingRule(['aBB'], '=', 0, 'E'),
							], 'AND', 'E', 'G'),
						]
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
						rules: [
							ChFleetTypeRule([3], 'G'),

							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'G'),
								ChShipTypeRoutingRule(['aCV'], '<=', 1, 'G'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 2, 'G'),
							], 'AND', 'G', 'F'),
						]
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
						rules: [
							ChFleetTypeRule([3], 'M'),
							ChLOSRule({ 25: 'I', 24: 'H' }),
						]
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
						rules: [
							ChFixedRoutingRule('J')
						]
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
						rules: [
							ChShipTypeRoutingRule(['aCV'], '=', 0, 'K'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aCV'], '<=', 1, 'K'),
								ChShipTypeRoutingRule(['aBB'], '=', 0, 'K'),
							], 'AND', 'K', 'I'),
						]
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
						rules: [
							ChFixedRoutingRule('K')
						]
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
						rules: [
							ChIfThenElseRule(
								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['aCV', 'aBB', 'LHA'], '<=', 4, 'K'),
									ChShipTypeRoutingRule(['aCV'], '<=', 2, 'K'),
									ChSpeedRule('>=', 10, 'K')
								], 'AND', 'K'),
								ChLOSRule({ 30: 'K', 25: 'L' }),
								ChLOSRule({ 30: 'G', 25: 'L' }),
							)
						]
					},
					'K': {
						type: 1,
						x: 366,
						y: 254,
						distance: 2,
						bonuses: [
							new ChShipIdsBonuses({ type: 'add', }, 'event.historical.british', 1.08),
							new ChShipIdsBonuses({ type: 'add', }, [515], 1.25),
							new ChShipIdsBonuses({ type: 'add', }, [519], 1.2),
						],
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
						rules: [
							ChFixedRoutingRule('M')
						]
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
						rules: [
							ChFixedRoutingRule('N')
						]
					},
					'N': {
						type: 1,
						x: 453,
						y: 304,
						distance: 2,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set', }, 'event.historical.british', 1.15),
						],
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
						bonuses: [
							new ChShipIdsBonuses({ type: 'add', }, 'event.historical.italian', 1.1),
							new ChShipIdsBonuses({ type: 'add', on: [1696,1697,1698] }, 'event.historical.italian', 1.15),
							new ChShipIdsBonuses({ type: 'add', }, [515], 1.25),
							new ChShipIdsBonuses({ type: 'add', }, [519], 1.2),
							new ChShipIdsBonuses({ type: 'set', }, [444], 1.68),
						],
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
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'R'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV', 'LHA'], '<=', 3, 'P'),
								ChShipTypeRoutingRule(['aBB', 'aCV', 'CA', 'CAV'], '<=', 6, 'P'),
							], 'AND', 'P'),

							ChDefaultRouteRule('R')
						]
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
						rules: [
							ChFixedRoutingRule('T')
						]
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
						rules: [
							ChShipIdsRoutingRule([187, 450], '>', 0, 'S', 'V')
						]
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
						rules: [
							ChFixedRoutingRule('T')
						]
					},
					'S': {
						type: 3,
						x: 636,
						y: 130,
						distance: 5,
						hidden: 1,
						repair: true,
						rules: [
							ChFixedRoutingRule('V')
						]
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
						rules: [
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'V'),
								ChShipTypeRoutingRule(['aCV', 'aBB'], '<=', 4, 'V'),
								ChShipTypeRoutingRule(['aCV', 'aBB', 'CA', 'CAV'], '<=', 7, 'V'),
							], 'AND', 'V'),

							ChLOSRule({ 35: 'Q', 24: 'U' }),
						]
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
						bonuses: [
							new ChShipIdsBonuses({ type: 'set', excludeFF: true }, 'event.historical.italian', 1.25),
							new ChShipIdsBonuses({ type: 'add', excludeFF: true }, [444], 1.4),
						],
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
						unlockRules: new ChGimmickList('mapPart', 2, 3, [], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '3_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 3, [
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 3:2 }, ranksRequiredPerDiff: { 3:'AS' } },
							{ node: 'E', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'S' } },
							{ node: 'K', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'S', 3:'S' } },
							{ node: 'O', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:2 }, ranksRequiredPerDiff: { 4:'B', 1:'A', 2:'A', 3:'A' } },
						], {
							partToUnlock: 2
						})
					},
					3: {
						images: [{ name: '3_3.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', 2, 3, [
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
							{ node: 'D', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS', 1:'AS', 2:'AS', 3:'AS' } },
							{ node: 'R', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
							{ node: 'T', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:2 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
							{ node: 'U', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:2 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
						], {
							partToUnlock: 3, 
							routeUnlockRequired: 2
						})
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
					ships: [520]
				},
				debuffRules: new ChGimmickList('debuff', 2, 3, [
					{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
					{ node: 'J', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
					{ node: 'O', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
					{ node: 'D', type: 'AirState', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'AS', 2:'AS', 3:'AS' } },
					{ node: 'H', type: 'AirState', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'AS' } },
					{ node: 'E', type: 'battle', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'A' } },
				], {
					lastDanceOnly: true,
					specialSoundOnCompletion: 'assets/voice/258.mp3'
				}),
				startCheckRule: [
					ChMultipleRulesRule([
						ChIsRouteUnlockedRule(3, 'Start2'),
						ChFleetTypeRule([1,3], 'Start2'),
					], 'AND', 'Start2', 'Start1'),
				],
				startBonus: [
					new ChShipIdsBonuses({ type: 'set', }, 'event.historical.italian', 1.1),
					new ChShipIdsBonuses({ type: 'set', }, 'event.historical.german', 1.1),
					new ChShipIdsBonuses({ type: 'set', }, 'event.historical.usa', 1.1),
					new ChShipIdsBonuses({ type: 'set', }, 'event.historical.british', 1.15),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 110,
						y: 267,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 249,
						y: 97,
						hidden: 3,
						rules: [
							ChFixedRoutingRule('D')
						]
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
						rules: [
							ChFleetTypeRule([0,3], 'B'),
							ChShipTypeRoutingRule(['aCV'], '>=', 3, 'C'),
							ChShipTypeRoutingRule(['aCV', 'aBB'], '>=', 5, 'C', 'F'),
						]
					},
					'B': {
						type: 3,
						x: 294,
						y: 181,
						rules: [
							ChSelectRouteRule(['D','F']),
						]
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
						rules: [
							ChFixedRoutingRule('F')
						]
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
						rules: [
							ChFleetTypeRule([0,3], 'E', 'F'),
						]
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
						rules: [
							ChFleetTypeRule([0,3], 'I'),
							ChSpeedRule('<=', 5, 'G'),
							ChShipTypeRoutingRule(['CV', 'CVB'], '>', 0, 'G'),
							ChShipTypeRoutingRule(['aCV', 'aBB'], '>=', 4, 'G'),
							ChDefaultRouteRule('I')
						]
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
						rules: [
							// --- Part 1
							ChMapPartRule([1], ChShipTypeRoutingRule(['aBB', 'CV'], '>', 2, 'H'),),

							ChMapPartRule([1], 
								ChMultipleRulesRule([
									ChSpeedRule('<=', 5, 'H'),
									ChShipTypeRoutingRule(['aCV', 'aBB'], '>', 4, 'H'),
								], 'AND', 'H'),
							),

							ChMapPartRule([1], ChDefaultRouteRule('I')),

							// --- Part 2
							ChMapPartRule([2], ChShipTypeRoutingRule(['CV'], '>', 2, 'H'),),
							ChMapPartRule([2], ChShipTypeRoutingRule(['aCV', 'aBB'], '>', 5, 'H'),),

							ChMapPartRule([2], 
								ChMultipleRulesRule([
									ChSpeedRule('<=', 5, 'H'),
									ChShipTypeRoutingRule(['aCV', 'aBB'], '>', 4, 'H'),
								], 'AND', 'H'),
							),

							ChMapPartRule([2], ChDefaultRouteRule('M')),
						]
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
						rules: [
							ChMapPartRule([1], ChFixedRoutingRule('I')),
							ChMapPartRule([2], ChFixedRoutingRule('M')),
						]
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
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'J': {
						type: 1,
						x: 677,
						y: 336,
						distance: 8,
						boss: true,
						friendFleet: ['E3-4','E3-5'],
						friendFleetS: ['E3-1','E3-8','E3-9'],
						bonuses: [
							new ChShipIdsBonuses({ type: 'set', }, 'event.historical.german', 1.1),
							new ChShipIdsBonuses({ type: 'set', }, 'event.historical.italian', 1.2),
							new ChShipIdsBonuses({ type: 'set', }, 'event.historical.british', 1.25),
						],
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
						rules: [
							ChIfThenElseRule(
								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['aBB'], '<=', 2, 'R'),
									ChShipTypeRoutingRule(['aBB', 'aCV', 'LHA'], '<=', 4, 'R'),
								], 'AND', 'R'),
								ChLOSRule({ 42: 'R', 30: 'S' })
							),

							ChIfThenElseRule(
								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'P'),
									ChShipTypeRoutingRule(['DD'], '<', 2, 'P'),
									
									ChMultipleRulesRule([
										ChShipIdsRoutingRule([187, 450], '>', 0, 'P'),
										ChShipTypeRoutingRule(['LHA', 'AO', 'CA', 'CAV', 'CL', 'CLT'], '>', 8, 'P'),
									], 'AND', 'P'),
								], 'OR', 'P'),
								ChLOSRule({ 42: 'P', 30: 'S' })
							),

							ChIfThenElseRule(
								ChMultipleRulesRule([
									ChShipIdsRoutingRule([187, 450], '>', 0, 'R'),
									ChShipTypeRoutingRule(['LHA', 'AO', 'CA', 'CAV', 'CL', 'CLT'], '<=', 8, 'R'),
								], 'AND', 'R'),
								ChLOSRule({ 42: 'R', 30: 'S' })
							),

							ChIfThenElseRule(
								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['aBB', 'aCV'], '>', 5, 'P'),

									ChMultipleRulesRule([
										ChSpeedRule('<=', 5, 'P'),
										ChShipTypeRoutingRule(['aBB', 'aCV'], '>', 4, 'P'),
									], 'AND', 'P'),
									
									ChMultipleRulesRule([
										ChDifficultyRule([1,2,3], 'P'),
										ChShipTypeRoutingRule(['aBB'], '>', 2, 'P'),
									], 'AND', 'P'),

								], 'OR', 'P'),
								ChLOSRule({ 42: 'P', 30: 'S' })
							),
							
							ChLOSRule({ 42: 'R', 30: 'S' })
						],
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
						rules: [
							ChShipIdsRoutingRule([187, 450], '>', 0, 'Q', 'K'),
						]
					},
					'M': {
						type: 3,
						x: 586,
						y: 138,
						distance: 6,
						hidden: 1,
						rules: [
							ChSelectRouteRule(['L','N']),
						]
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
						rules: [
							// --- Before unlock
							ChDontShowCompass(ChIsRouteNotUnlockedRule(2, 'O')),

							// --- After unlock
							ChShipTypeRoutingRule(['SS', 'SSV'], '>=', 6, 'T'),
							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['AS'], '>', 0, 'T'),
								ChShipTypeRoutingRule(['SS', 'SSV'], '>=', 3, 'T'),
							], 'AND', 'T'),

							ChDefaultRouteRule('O')
						]
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
						rules: [
							ChFixedRoutingRule('R')
						]
					},
					'Q': {
						type: 3,
						x: 489,
						y: 128,
						distance: 5,
						hidden: 2,
						repair: true,
						rules: [
							// --- Before unlock
							ChDontShowCompass(ChIsRouteNotUnlockedRule(3, 'K')),

							// --- After unlock
							ChSpeedRule('>=', 15, 'P'),
							ChShipTypeRoutingRule(['aCV', 'aBB'], '>', 5, 'K'),
							ChShipTypeRoutingRule(['aBB', 'CA', 'CAV', 'CLT', 'AV'], '>', 6, 'K'),
							ChDefaultRouteRule('P')
						]
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
						rules: [
							ChFixedRoutingRule('U')
						]
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
						bonuses: [
							// --- Base bonus
							new ChShipIdsBonuses({ type: 'set', }, 'event.historical.german', 1.1),
							new ChShipIdsBonuses({ type: 'set', }, 'event.historical.italian', 1.15),
							new ChShipIdsBonuses({ type: 'set', }, 'event.historical.usa', 1.25),
							new ChShipIdsBonuses({ type: 'set', }, 'event.historical.british', 1.3),

							// --- Shortcut
							new ChWholeFleetBonuses({ type: 'add', requireUnlock: 3 }, 1.07),

							// --- Debuff
							new ChDebuffBonuses({ type: 'add', on: [1815,1816,1817,1818,1819,1820,1883,1884,1885,1886,1887,1888] }, 1.15)
						],
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
			}
		}
	}
};
MAPDATA[45] = MAPDATA45[45];