MAPDATA[50] = 
	{
		name: 'Spring 2021 Event',
		date: '2021-05-08',
		diffMode: 2,
		allowDiffs: [4,1,2,3],
		allowFleets: [0,1,2,3,7],
		allowLBAS: true,
		allowVanguard: true,
		vanguardConsts: { vanguardEvDD1: 20, vanguardEvDD2: 40, vanguardEvOther1: 5, vanguardEvOther2: 20 },
		newResupplyCosts: true,
		allowStrongFF: true,
		bannerImg: 'assets/maps/50/banner1.png',
		bannerImgAlt: 'assets/maps/50/banner2.png',
		transportCalc: transportCalcStandard,
		overrideStats: {
			1659: { HP: 350 },
			1660: { HP: 370 },
			1661: { HP: 390 },
			1662: { HP: 350 },
			1663: { HP: 370 },
			1664: { AR: 218 },
			1711: { AR: 133 },
			1712: { AR: 163 },
			1713: { AR: 183 },
		},
		friendFleet: {
			'E1-1': { ships: [
				{ mid: 706, LVL: 71, FP: 42, TP: 88, AA: 68, AR: 54, equips: [379,380,349], damage: [.9,1] },
				{ mid: 708, LVL: 68, FP: 41, TP: 68, AA: 77, AR: 54, equips: [379,380,349], damage: [.9,1] },
			] },
			'E1-2': { ships: [
				{ mid: 702, LVL: 70, FP: 42, TP: 65, AA: 74, AR: 55, equips: [379,380,349], damage: [.9,1] },
				{ mid: 706, LVL: 71, FP: 42, TP: 88, AA: 71, AR: 54, equips: [379,380,349], damage: [.9,1] },
			] },
			'E1-3': { ships: [
				{ mid: 578, LVL: 87, FP: 68, TP: 88, AA: 72, AR: 53, equips: [267,267,167], damage: [.9,1] },
				{ mid: 325, LVL: 83, FP: 50, TP: 80, AA: 50, AR: 49, equips: [267,267,349], damage: [.8,.9] },
			] },
			'E1-4': { ships: [
				{ mid: 708, LVL: 68, FP: 41, TP: 71, AA: 76, AR: 55, equips: [379,380,101], damage: [.9,1] },
				{ mid: 702, LVL: 70, FP: 42, TP: 69, AA: 74, AR: 55, equips: [379,380,349], damage: [.9,1] },
				{ mid: 706, LVL: 71, FP: 42, TP: 85, AA: 71, AR: 54, equips: [379,380,349], damage: [.9,1] },
			] },
			'E1-5': { ships: [
				{ mid: 464, LVL: 88, FP: 65, TP: 92, AA: 72, AR: 52, equips: [266,266,409], damage: [.9,1] },
				{ mid: 325, LVL: 83, FP: 50, TP: 80, AA: 50, AR: 49, equips: [267,267,349], damage: [.8,.9] },
				{ mid: 578, LVL: 87, FP: 68, TP: 88, AA: 72, AR: 53, equips: [267,267,167], damage: [.9,1] },
			] },
			'E1-6': { ships: [
				{ mid: 464, LVL: 88, FP: 65, TP: 92, AA: 72, AR: 52, equips: [266,266,413], damage: [.9,1] },
				{ mid: 321, LVL: 89, FP: 70, TP: 49, AA: 73, AR: 68, equips: [235,235,349,349], damage: [.9,1] },
				{ mid: 325, LVL: 83, FP: 50, TP: 80, AA: 50, AR: 49, equips: [267,267,349], damage: [.8,.9] },
				{ mid: 578, LVL: 87, FP: 68, TP: 88, AA: 72, AR: 53, equips: [267,267,167], damage: [.9,1] },
			] },
			'E1-7': { ships: [
				{ mid: 321, LVL: 89, FP: 70, TP: 49, AA: 74, AR: 68, equips: [235,235,349,349], damage: [.9,1] },
				{ mid: 464, LVL: 88, FP: 65, TP: 89, AA: 72, AR: 52, equips: [266,266,409], damage: [.9,1] },
				{ mid: 325, LVL: 83, FP: 50, TP: 80, AA: 50, AR: 49, equips: [267,267,349], damage: [.8,.9] },
				{ mid: 578, LVL: 87, FP: 68, TP: 88, AA: 72, AR: 53, equips: [267,267,167], damage: [.9,1] },
			] },
			'E1-8': { ships: [
				{ mid: 309, LVL: 85, FP: 34, TP: 69, AA: 49, AR: 39, equips: [46,44,226], damage: [.9,1] },
				{ mid: 418, LVL: 84, FP: 42, TP: 78, AA: 82, AR: 45, equips: [47,45,227], damage: [.9,1] },
			] },
			'E1-9': { ships: [
				{ mid: 235, LVL: 87, FP: 49, TP: 79, AA: 49, AR: 49, equips: [47,45,227], damage: [.9,1] },
				{ mid: 419, LVL: 86, FP: 59, TP: 85, AA: 81, AR: 55, equips: [47,45,227], damage: [.9,1] },
			] },
			'E1-10': { ships: [
				{ mid: 118, LVL: 88, FP: 63, TP: 139, AA: 49, AR: 63, equips: [288,47,227], damage: [.9,1] },
				{ mid: 309, LVL: 85, FP: 34, TP: 69, AA: 49, AR: 39, equips: [46,44,226], damage: [.9,1] },
				{ mid: 418, LVL: 84, FP: 42, TP: 78, AA: 82, AR: 45, equips: [293,293,45], damage: [.9,1] },
			] },
			'E1-11': { ships: [
				{ mid: 118, LVL: 88, FP: 63, TP: 139, AA: 49, AR: 63, equips: [287,47,227], damage: [.9,1] },
				{ mid: 235, LVL: 87, FP: 49, TP: 79, AA: 49, AR: 49, equips: [47,45,227], damage: [.9,1] },
				{ mid: 419, LVL: 86, FP: 59, TP: 85, AA: 81, AR: 55, equips: [47,45,227], damage: [.9,1] },
			] },
			'E4-1': { ships: [
				{ mid: 158, LVL: 94, FP: 68, TP: 89, AA: 70, AR: 69, equips: [4,4,74], damage: [.9,1] },
				{ mid: 300, LVL: 83, FP: 49, TP: 79, AA: 49, AR: 49, equips: [286,286,286,412], damage: [.8,.9] },
			] },
			'E4-2': { ships: [
				{ mid: 427, LVL: 88, FP: 86, TP: 86, AA: 70, AR: 78, equips: [50,50,74,240], damage: [.88,.98] },
				{ mid: 428, LVL: 87, FP: 77, TP: 84, AA: 106, AR: 78, equips: [50,50,101,240], damage: [.88,.98] },
			] },
			'E4-3': { ships: [
				{ mid: 709, LVL: 71, FP: 53, TP: 77, AA: 56, AR: 49, equips: [267,267,101,412], damage: [.9,1] },
				{ mid: 543, LVL: 85, FP: 69, TP: 89, AA: 64, AR: 53, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 649, LVL: 81, FP: 68, TP: 86, AA: 62, AR: 53, equips: [286,286,286,412], damage: [.8,.9] },
			] },
			'E4-4': { ships: [
				{ mid: 158, LVL: 94, FP: 68, TP: 89, AA: 70, AR: 69, equips: [4,4,74], damage: [.9,1] },
				{ mid: 300, LVL: 83, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,266,101,412], damage: [.8,.9] },
				{ mid: 543, LVL: 85, FP: 69, TP: 89, AA: 64, AR: 53, equips: [267,286,240,412], damage: [.9,1] },
			] },
			'E4-5': { ships: [
				{ mid: 427, LVL: 88, FP: 86, TP: 86, AA: 70, AR: 78, equips: [50,50,74,240], damage: [.88,.98] },
				{ mid: 428, LVL: 87, FP: 77, TP: 84, AA: 106, AR: 78, equips: [50,50,101,240], damage: [.88,.98] },
				{ mid: 564, LVL: 82, FP: 65, TP: 87, AA: 67, AR: 53, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E4-6': { ships: [
				{ mid: 427, LVL: 88, FP: 86, TP: 86, AA: 70, AR: 78, equips: [50,50,74,240], damage: [.88,.98] },
				{ mid: 428, LVL: 87, FP: 77, TP: 84, AA: 106, AR: 78, equips: [50,50,101,240], damage: [.88,.98] },
				{ mid: 564, LVL: 82, FP: 66, TP: 83, AA: 67, AR: 53, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E4-7': { ships: [
				{ mid: 159, LVL: 90, FP: 73, TP: 98, AA: 68, AR: 69, equips: [4,4,74], damage: [.78,.88] },
				{ mid: 709, LVL: 71, FP: 53, TP: 76, AA: 56, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 543, LVL: 85, FP: 69, TP: 88, AA: 64, AR: 53, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 649, LVL: 81, FP: 68, TP: 84, AA: 62, AR: 53, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E4-8': { ships: [
				{ mid: 662, LVL: 86, FP: 78, TP: 86, AA: 82, AR: 72, equips: [139,139,74,101], damage: [.88,.98] },
				{ mid: 709, LVL: 71, FP: 53, TP: 80, AA: 56, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 543, LVL: 85, FP: 69, TP: 89, AA: 64, AR: 53, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 649, LVL: 81, FP: 65, TP: 86, AA: 62, AR: 53, equips: [286,286,286,412], damage: [.8,.9] },
			] },
			'E4-9': { ships: [
				{ mid: 427, LVL: 88, FP: 86, TP: 86, AA: 70, AR: 78, equips: [50,50,74,240], damage: [.88,.98] },
				{ mid: 428, LVL: 87, FP: 77, TP: 84, AA: 106, AR: 78, equips: [50,50,101,240], damage: [.88,.98] },
				{ mid: 710, LVL: 62, FP: 49, TP: 78, AA: 54, AR: 48, equips: [267,286,88,412], damage: [.8,.9] },
				{ mid: 373, LVL: 73, FP: 52, TP: 79, AA: 60, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
			] },
			'E4-10': { ships: [
				{ mid: 427, LVL: 88, FP: 86, TP: 86, AA: 70, AR: 78, equips: [50,50,74,240], damage: [.88,.98] },
				{ mid: 428, LVL: 87, FP: 77, TP: 84, AA: 106, AR: 78, equips: [50,50,101,240], damage: [.88,.98] },
				{ mid: 710, LVL: 62, FP: 52, TP: 72, AA: 54, AR: 48, equips: [267,286,88,412], damage: [.8,.9] },
				{ mid: 373, LVL: 73, FP: 52, TP: 75, AA: 60, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
			] },
			'E4-11': { ships: [
				{ mid: 591, LVL: 92, FP: 99, TP: 44, AA: 89, AR: 91, equips: [329,329,365,240], damage: [.885,.985] },
				{ mid: 158, LVL: 94, FP: 68, TP: 89, AA: 70, AR: 69, equips: [4,4,74], damage: [.9,1] },
				{ mid: 709, LVL: 71, FP: 53, TP: 79, AA: 56, AR: 49, equips: [267,286,88,412], damage: [.9,1] },
				{ mid: 564, LVL: 82, FP: 66, TP: 88, AA: 67, AR: 53, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E4-12': { ships: [
				{ mid: 591, LVL: 92, FP: 99, TP: 44, AA: 89, AR: 91, equips: [329,329,365,240], damage: [.885,.985] },
				{ mid: 158, LVL: 94, FP: 68, TP: 89, AA: 70, AR: 69, equips: [4,4,74], damage: [.9,1] },
				{ mid: 709, LVL: 71, FP: 53, TP: 81, AA: 53, AR: 49, equips: [267,286,88,412], damage: [.9,1] },
				{ mid: 564, LVL: 82, FP: 66, TP: 89, AA: 67, AR: 53, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E4-13': { ships: [
				{ mid: 427, LVL: 88, FP: 86, TP: 86, AA: 70, AR: 78, equips: [50,50,74,240], damage: [.88,.98] },
				{ mid: 428, LVL: 87, FP: 77, TP: 84, AA: 106, AR: 78, equips: [50,50,101,240], damage: [.88,.98] },
				{ mid: 710, LVL: 62, FP: 48, TP: 75, AA: 54, AR: 48, equips: [267,286,88,412], damage: [.8,.9] },
				{ mid: 373, LVL: 73, FP: 52, TP: 79, AA: 60, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 688, LVL: 72, FP: 51, TP: 80, AA: 58, AR: 49, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E4-14': { ships: [
				{ mid: 427, LVL: 88, FP: 86, TP: 86, AA: 70, AR: 78, equips: [50,50,74,240], damage: [.88,.98] },
				{ mid: 428, LVL: 87, FP: 77, TP: 84, AA: 106, AR: 78, equips: [50,50,101,240], damage: [.88,.98] },
				{ mid: 710, LVL: 62, FP: 52, TP: 73, AA: 54, AR: 48, equips: [267,286,88,412], damage: [.8,.9] },
				{ mid: 373, LVL: 73, FP: 52, TP: 76, AA: 60, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 688, LVL: 72, FP: 51, TP: 80, AA: 58, AR: 49, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E4-15': { ships: [
				{ mid: 591, LVL: 92, FP: 99, TP: 44, AA: 89, AR: 91, equips: [329,329,365,240], damage: [.885,.985] },
				{ mid: 662, LVL: 86, FP: 78, TP: 86, AA: 82, AR: 72, equips: [139,139,74,101], damage: [.88,.98] },
				{ mid: 709, LVL: 71, FP: 53, TP: 78, AA: 56, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 543, LVL: 85, FP: 66, TP: 89, AA: 64, AR: 53, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 649, LVL: 81, FP: 68, TP: 86, AA: 62, AR: 53, equips: [286,286,286,412], damage: [.8,.9] },
			] },
			'E4-16': { ships: [
				{ mid: 591, LVL: 92, FP: 99, TP: 44, AA: 89, AR: 91, equips: [329,329,365,240], damage: [.885,.985] },
				{ mid: 151, LVL: 90, FP: 96, TP: 0, AA: 92, AR: 93, equips: [289,289,101,240], damage: [.885,.985] },
				{ mid: 158, LVL: 94, FP: 68, TP: 89, AA: 70, AR: 69, equips: [4,4,74], damage: [.9,1] },
				{ mid: 709, LVL: 71, FP: 50, TP: 78, AA: 56, AR: 49, equips: [267,286,88,412], damage: [.9,1] },
				{ mid: 543, LVL: 85, FP: 69, TP: 89, AA: 64, AR: 53, equips: [267,286,240,412], damage: [.9,1] },
			] },
			'E4-17': { ships: [
				{ mid: 591, LVL: 92, FP: 99, TP: 44, AA: 89, AR: 91, equips: [329,329,365,240], damage: [.885,.985] },
				{ mid: 151, LVL: 90, FP: 96, TP: 0, AA: 92, AR: 93, equips: [289,289,101,240], damage: [.885,.985] },
				{ mid: 158, LVL: 94, FP: 68, TP: 89, AA: 70, AR: 69, equips: [4,4,74], damage: [.9,1] },
				{ mid: 709, LVL: 71, FP: 53, TP: 81, AA: 56, AR: 49, equips: [267,286,88,412], damage: [.9,1] },
				{ mid: 543, LVL: 85, FP: 69, TP: 89, AA: 64, AR: 53, equips: [267,286,240,412], damage: [.9,1] },
			] },
			'E4-18': { ships: [
				{ mid: 591, LVL: 92, FP: 99, TP: 44, AA: 89, AR: 91, equips: [329,329,365,240], damage: [.885,.985] },
				{ mid: 592, LVL: 90, FP: 98, TP: 47, AA: 85, AR: 90, equips: [329,329,240,74], damage: [.78,.88] },
				{ mid: 662, LVL: 86, FP: 78, TP: 86, AA: 82, AR: 72, equips: [139,139,101,413], damage: [.88,.98] },
				{ mid: 709, LVL: 71, FP: 53, TP: 78, AA: 56, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 543, LVL: 85, FP: 69, TP: 87, AA: 64, AR: 53, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 649, LVL: 81, FP: 68, TP: 83, AA: 62, AR: 53, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E4-19': { ships: [
				{ mid: 591, LVL: 92, FP: 99, TP: 44, AA: 89, AR: 91, equips: [329,329,365,240], damage: [.885,.985] },
				{ mid: 592, LVL: 90, FP: 98, TP: 47, AA: 85, AR: 90, equips: [329,329,240,74], damage: [.78,.88] },
				{ mid: 151, LVL: 90, FP: 96, TP: 0, AA: 92, AR: 93, equips: [289,289,240,101], damage: [.885,.985] },
				{ mid: 152, LVL: 90, FP: 104, TP: 0, AA: 82, AR: 92, equips: [329,329,365,240], damage: [.885,.985] },
				{ mid: 709, LVL: 71, FP: 53, TP: 81, AA: 56, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 543, LVL: 85, FP: 69, TP: 89, AA: 64, AR: 53, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E5V-1': { ships: [
				{ mid: 309, LVL: 85, FP: 34, TP: 69, AA: 49, AR: 39, equips: [293,285,240,412], damage: [.9,1] },
				{ mid: 548, LVL: 83, FP: 45, TP: 77, AA: 82, AR: 46, equips: [293,293,101,412], damage: [.9,1] },
				{ mid: 261, LVL: 82, FP: 39, TP: 69, AA: 39, AR: 39, equips: [285,285,285,412], damage: [.8,.9] },
			] },
			'E5V-2': { ships: [
				{ mid: 195, LVL: 90, FP: 74, TP: 88, AA: 52, AR: 54, equips: [285,285,74,412], damage: [.88,.98] },
				{ mid: 627, LVL: 88, FP: 61, TP: 88, AA: 62, AR: 51, equips: [296,285,240,412], damage: [.88,.98] },
				{ mid: 368, LVL: 86, FP: 49, TP: 79, AA: 54, AR: 49, equips: [294,285,240,412], damage: [.88,.98] },
				{ mid: 206, LVL: 87, FP: 49, TP: 79, AA: 49, AR: 49, equips: [285,285,285,412], damage: [.88,.98] },
			] },
			'E5V-3': { ships: [
				{ mid: 586, LVL: 85, FP: 60, TP: 82, AA: 65, AR: 47, equips: [309,309,309,101], damage: [.9,1] },
				{ mid: 557, LVL: 90, FP: 63, TP: 84, AA: 90, AR: 53, equips: [122,122,412], damage: [.9,1] },
				{ mid: 355, LVL: 87, FP: 50, TP: 79, AA: 49, AR: 49, equips: [266,286,240,412], damage: [.9,1] },
				{ mid: 354, LVL: 88, FP: 49, TP: 79, AA: 49, AR: 49, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E5V-4': { ships: [
				{ mid: 592, LVL: 90, FP: 98, TP: 47, AA: 85, AR: 90, equips: [329,329,240,74], damage: [.805,.905] },
				{ mid: 152, LVL: 90, FP: 104, TP: 0, AA: 82, AR: 92, equips: [329,329,365,240], damage: [.88,.98] },
				{ mid: 323, LVL: 82, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,286,240,412], damage: [.88,.98] },
				{ mid: 144, LVL: 89, FP: 73, TP: 93, AA: 59, AR: 52, equips: [286,286,286,412], damage: [.88,.98] },
			] },
			'E5V-5': { ships: [
				{ mid: 592, LVL: 90, FP: 98, TP: 47, AA: 85, AR: 90, equips: [329,329,240,74], damage: [.805,.905] },
				{ mid: 152, LVL: 90, FP: 104, TP: 0, AA: 82, AR: 92, equips: [329,329,365,240], damage: [.88,.98] },
				{ mid: 316, LVL: 84, FP: 49, TP: 84, AA: 63, AR: 61, equips: [266,286,240,412], damage: [.88,.98] },
				{ mid: 656, LVL: 97, FP: 66, TP: 90, AA: 85, AR: 60, equips: [286,286,286,412] },
			] },
			'E5V-6': { ships: [
				{ mid: 195, LVL: 90, FP: 74, TP: 88, AA: 52, AR: 54, equips: [285,285,74,412], damage: [.88,.98] },
				{ mid: 627, LVL: 88, FP: 61, TP: 88, AA: 62, AR: 51, equips: [296,285,240,412], damage: [.88,.98] },
				{ mid: 368, LVL: 86, FP: 49, TP: 79, AA: 54, AR: 49, equips: [294,294,101,412], damage: [.88,.98] },
				{ mid: 206, LVL: 87, FP: 49, TP: 79, AA: 49, AR: 49, equips: [285,285,285,412], damage: [.88,.98] },
			] },
			'E5V-7': { ships: [
				{ mid: 542, LVL: 87, FP: 67, TP: 87, AA: 66, AR: 53, equips: [267,267,101,412], damage: [.9,1] },
				{ mid: 563, LVL: 83, FP: 64, TP: 90, AA: 65, AR: 53, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 564, LVL: 85, FP: 66, TP: 82, AA: 67, AR: 53, equips: [286,286,286,412], damage: [.9,1] },
				{ mid: 648, LVL: 85, FP: 65, TP: 88, AA: 64, AR: 53, equips: [267,267,74,412], damage: [.9,1] },
			] },
			'E5V-8': { ships: [
				{ mid: 586, LVL: 85, FP: 60, TP: 77, AA: 65, AR: 47, equips: [310,310,309,101], damage: [.9,1] },
				{ mid: 557, LVL: 90, FP: 63, TP: 84, AA: 90, AR: 53, equips: [122,122,74,412], damage: [.9,1] },
				{ mid: 355, LVL: 87, FP: 50, TP: 79, AA: 49, AR: 49, equips: [266,286,240,412], damage: [.9,1] },
				{ mid: 354, LVL: 88, FP: 49, TP: 79, AA: 49, AR: 49, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E5V-9': { ships: [
				{ mid: 592, LVL: 90, FP: 98, TP: 47, AA: 85, AR: 90, equips: [329,329,240,74], damage: [.805,.905] },
				{ mid: 152, LVL: 90, FP: 104, TP: 0, AA: 82, AR: 92, equips: [329,329,365,101], damage: [.88,.98] },
				{ mid: 323, LVL: 82, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,286,240,412], damage: [.88,.98] },
				{ mid: 144, LVL: 89, FP: 73, TP: 93, AA: 59, AR: 52, equips: [286,286,286,412], damage: [.88,.98] },
			] },
			'E5V-10': { ships: [
				{ mid: 592, LVL: 90, FP: 98, TP: 47, AA: 85, AR: 90, equips: [329,329,240,74], damage: [.88,.98] },
				{ mid: 152, LVL: 90, FP: 104, TP: 0, AA: 82, AR: 92, equips: [329,329,365,101], damage: [.88,.98] },
				{ mid: 316, LVL: 84, FP: 49, TP: 84, AA: 63, AR: 61, equips: [266,286,240,412], damage: [.88,.98] },
				{ mid: 656, LVL: 97, FP: 66, TP: 87, AA: 85, AR: 60, equips: [286,286,286,412] },
			] },
			'E5V-11': { ships: [
				{ mid: 542, LVL: 87, FP: 67, TP: 87, AA: 66, AR: 53, equips: [267,267,101,412], damage: [.9,1] },
				{ mid: 563, LVL: 83, FP: 64, TP: 90, AA: 65, AR: 53, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 628, LVL: 89, FP: 60, TP: 86, AA: 92, AR: 54, equips: [308,376,315,412], damage: [.9,1] },
				{ mid: 689, LVL: 83, FP: 55, TP: 72, AA: 90, AR: 52, equips: [308,376,315,412], damage: [.9,1] },
				{ mid: 564, LVL: 85, FP: 66, TP: 89, AA: 67, AR: 53, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E5V-12': { ships: [
				{ mid: 542, LVL: 87, FP: 67, TP: 87, AA: 66, AR: 53, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 648, LVL: 85, FP: 65, TP: 86, AA: 64, AR: 53, equips: [267,267,74,412], damage: [.9,1] },
				{ mid: 696, LVL: 77, FP: 64, TP: 70, AA: 128, AR: 61, equips: [363,363,101], damage: [.8,.9] },
				{ mid: 628, LVL: 89, FP: 60, TP: 86, AA: 92, AR: 54, equips: [308,376,315,412], damage: [.9,1] },
				{ mid: 689, LVL: 83, FP: 55, TP: 72, AA: 90, AR: 52, equips: [308,376,315,412], damage: [.9,1] },
			] },
			'E5V-13': { ships: [
				{ mid: 592, LVL: 90, FP: 98, TP: 47, AA: 85, AR: 90, equips: [329,329,240,74], damage: [.805,.905] },
				{ mid: 696, LVL: 77, FP: 64, TP: 70, AA: 128, AR: 61, equips: [363,363,101], damage: [.8,.9] },
				{ mid: 628, LVL: 89, FP: 60, TP: 86, AA: 92, AR: 54, equips: [308,376,315,412] },
				{ mid: 316, LVL: 84, FP: 49, TP: 84, AA: 63, AR: 61, equips: [266,286,240,412], damage: [.88,.98] },
				{ mid: 656, LVL: 97, FP: 66, TP: 90, AA: 85, AR: 60, equips: [286,286,286,412] },
			] },
			'E5V-14': { ships: [
				{ mid: 592, LVL: 90, FP: 98, TP: 47, AA: 85, AR: 90, equips: [329,329,240,74], damage: [.805,.905] },
				{ mid: 152, LVL: 90, FP: 104, TP: 0, AA: 82, AR: 92, equips: [329,329,365,240], damage: [.88,.98] },
				{ mid: 696, LVL: 77, FP: 64, TP: 70, AA: 128, AR: 61, equips: [363,363,101], damage: [.8,.9] },
				{ mid: 628, LVL: 89, FP: 60, TP: 86, AA: 92, AR: 54, equips: [308,376,315,412] },
				{ mid: 316, LVL: 84, FP: 49, TP: 84, AA: 63, AR: 61, equips: [266,286,240,412], damage: [.88,.98] },
				{ mid: 656, LVL: 97, FP: 66, TP: 90, AA: 85, AR: 60, equips: [286,286,286,412] },
			] },
			'E5Z-1': { ships: [
				{ mid: 558, LVL: 89, FP: 60, TP: 83, AA: 91, AR: 54, equips: [286,286,412], damage: [.9,1] },
				{ mid: 656, LVL: 97, FP: 66, TP: 90, AA: 85, AR: 60, equips: [286,286,286,412] },
			] },
			'E5Z-2': { ships: [
				{ mid: 710, LVL: 62, FP: 52, TP: 82, AA: 51, AR: 48, equips: [267,267,101,412], damage: [.8,.9] },
				{ mid: 373, LVL: 73, FP: 52, TP: 77, AA: 60, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 688, LVL: 72, FP: 51, TP: 80, AA: 58, AR: 49, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E5Z-3': { ships: [
				{ mid: 558, LVL: 89, FP: 60, TP: 83, AA: 93, AR: 54, equips: [122,122,101,412], damage: [.9,1] },
				{ mid: 559, LVL: 88, FP: 59, TP: 84, AA: 80, AR: 51, equips: [266,286,240,412], damage: [.9,1] },
				{ mid: 656, LVL: 97, FP: 66, TP: 90, AA: 85, AR: 60, equips: [286,286,286,412] },
			] },
			'E5Z-4': { ships: [
				{ mid: 390, LVL: 86, FP: 52, TP: 80, AA: 50, AR: 49, equips: [296,285,240,412], damage: [.88,.98] },
				{ mid: 309, LVL: 85, FP: 34, TP: 69, AA: 49, AR: 39, equips: [293,285,240,412], damage: [.9,1] },
				{ mid: 548, LVL: 83, FP: 45, TP: 77, AA: 82, AR: 46, equips: [293,293,101,412], damage: [.9,1] },
				{ mid: 261, LVL: 82, FP: 39, TP: 69, AA: 39, AR: 39, equips: [285,285,285,412], damage: [.8,.9] },
			] },
			'E5Z-5': { ships: [
				{ mid: 488, LVL: 93, FP: 57, TP: 80, AA: 88, AR: 67, equips: [379,379,240], damage: [.9,1] },
				{ mid: 323, LVL: 80, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,266,101,412], damage: [.88,.98] },
				{ mid: 144, LVL: 88, FP: 73, TP: 93, AA: 59, AR: 52, equips: [286,286,412,412], damage: [.88,.98] },
				{ mid: 498, LVL: 89, FP: 68, TP: 88, AA: 70, AR: 51, equips: [286,286,286,412], damage: [.88,.98] },
			] },
			'E5Z-6': { ships: [
				{ mid: 158, LVL: 94, FP: 68, TP: 89, AA: 70, AR: 69, equips: [286,286,286], damage: [.9,1] },
				{ mid: 558, LVL: 89, FP: 60, TP: 83, AA: 93, AR: 54, equips: [122,122,101,412], damage: [.9,1] },
				{ mid: 559, LVL: 88, FP: 59, TP: 84, AA: 80, AR: 51, equips: [266,286,240,412], damage: [.9,1] },
				{ mid: 656, LVL: 97, FP: 66, TP: 90, AA: 85, AR: 60, equips: [286,286,412,412] },
			] },
			'E5Z-7': { ships: [
				{ mid: 586, LVL: 85, FP: 60, TP: 74, AA: 65, AR: 47, equips: [309,309,309,101], damage: [.9,1] },
				{ mid: 557, LVL: 90, FP: 63, TP: 84, AA: 90, AR: 53, equips: [122,122,412,412], damage: [.9,1] },
				{ mid: 355, LVL: 87, FP: 50, TP: 79, AA: 49, AR: 49, equips: [266,286,240,412], damage: [.9,1] },
				{ mid: 354, LVL: 88, FP: 49, TP: 79, AA: 49, AR: 49, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E5Z-8': { ships: [
				{ mid: 136, LVL: 85, FP: 139, TP: 0, AA: 104, AR: 118, equips: [276,276,276,140], damage: [.887,.987] },
				{ mid: 305, LVL: 68, FP: 68, TP: 70, AA: 73, AR: 69, equips: [139,139,101], damage: [.8,.9] },
				{ mid: 710, LVL: 62, FP: 52, TP: 74, AA: 54, AR: 46, equips: [267,286,88,412], damage: [.8,.9] },
				{ mid: 373, LVL: 73, FP: 52, TP: 78, AA: 60, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 688, LVL: 72, FP: 51, TP: 79, AA: 58, AR: 49, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E5Z-9': { ships: [
				{ mid: 558, LVL: 89, FP: 60, TP: 83, AA: 93, AR: 54, equips: [286,286,412], damage: [.9,1] },
				{ mid: 656, LVL: 97, FP: 66, TP: 90, AA: 85, AR: 60, equips: [286,286,286,412] },
			] },
			'E5Z-10': { ships: [
				{ mid: 710, LVL: 62, FP: 47, TP: 73, AA: 54, AR: 48, equips: [267,267,101,412], damage: [.8,.9] },
				{ mid: 373, LVL: 73, FP: 52, TP: 77, AA: 60, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 688, LVL: 72, FP: 51, TP: 78, AA: 58, AR: 49, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E5Z-11': { ships: [
				{ mid: 488, LVL: 93, FP: 57, TP: 80, AA: 88, AR: 67, equips: [379,379,240], damage: [.9,1] },
				{ mid: 323, LVL: 80, FP: 49, TP: 79, AA: 49, AR: 49, equips: [266,266,101,412], damage: [.88,.98] },
				{ mid: 144, LVL: 88, FP: 73, TP: 93, AA: 59, AR: 52, equips: [286,286,286,412], damage: [.88,.98] },
				{ mid: 498, LVL: 89, FP: 68, TP: 88, AA: 70, AR: 51, equips: [286,286,286,412], damage: [.88,.98] },
			] },
			'E5Z-12': { ships: [
				{ mid: 158, LVL: 94, FP: 68, TP: 89, AA: 70, AR: 69, equips: [286,286,286], damage: [.9,1] },
				{ mid: 558, LVL: 89, FP: 60, TP: 83, AA: 93, AR: 54, equips: [122,122,101,412], damage: [.9,1] },
				{ mid: 559, LVL: 88, FP: 59, TP: 84, AA: 80, AR: 51, equips: [266,286,240,412], damage: [.9,1] },
				{ mid: 656, LVL: 97, FP: 66, TP: 90, AA: 85, AR: 60, equips: [286,286,286,412] },
			] },
			'E5Z-13': { ships: [
				{ mid: 586, LVL: 85, FP: 60, TP: 76, AA: 65, AR: 47, equips: [310,310,309,101], damage: [.9,1] },
				{ mid: 557, LVL: 90, FP: 63, TP: 84, AA: 90, AR: 53, equips: [122,122,412,412], damage: [.9,1] },
				{ mid: 355, LVL: 87, FP: 50, TP: 79, AA: 49, AR: 49, equips: [266,286,240,412], damage: [.9,1] },
				{ mid: 354, LVL: 88, FP: 49, TP: 79, AA: 49, AR: 49, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E5Z-14': { ships: [
				{ mid: 488, LVL: 93, FP: 57, TP: 80, AA: 88, AR: 67, equips: [379,379,74], damage: [.9,1] },
				{ mid: 330, LVL: 70, FP: 57, TP: 54, AA: 116, AR: 53, equips: [122,286,240,412], damage: [.9,1] },
				{ mid: 323, LVL: 80, FP: 49, TP: 69, AA: 49, AR: 49, equips: [266,266,101,412], damage: [.88,.98] },
				{ mid: 144, LVL: 88, FP: 73, TP: 93, AA: 59, AR: 52, equips: [286,286,286,412], damage: [.88,.98] },
				{ mid: 498, LVL: 89, FP: 68, TP: 88, AA: 70, AR: 51, equips: [286,286,286,412], damage: [.88,.98] },
			] },
			'E5Z-15': { ships: [
				{ mid: 573, LVL: 89, FP: 118, TP: 0, AA: 101, AR: 109, equips: [318,290,140,318], damage: [.88,.98] },
				{ mid: 195, LVL: 90, FP: 74, TP: 88, AA: 52, AR: 54, equips: [285,285,74,412], damage: [.88,.98] },
				{ mid: 627, LVL: 88, FP: 61, TP: 88, AA: 62, AR: 51, equips: [296,285,240,412], damage: [.88,.98] },
				{ mid: 368, LVL: 86, FP: 49, TP: 79, AA: 54, AR: 49, equips: [294,285,240,412], damage: [.88,.98] },
				{ mid: 206, LVL: 87, FP: 49, TP: 79, AA: 49, AR: 49, equips: [285,285,285,412], damage: [.88,.98] },
			] },
			'E5Z-16': { ships: [
				{ mid: 136, LVL: 85, FP: 139, TP: 0, AA: 104, AR: 118, equips: [276,276,140,276], damage: [.887,.987] },
				{ mid: 305, LVL: 68, FP: 68, TP: 78, AA: 70, AR: 69, equips: [139,139,101], damage: [.8,.9] },
				{ mid: 710, LVL: 62, FP: 52, TP: 77, AA: 52, AR: 48, equips: [267,286,88,412], damage: [.8,.9] },
				{ mid: 373, LVL: 73, FP: 52, TP: 76, AA: 58, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 688, LVL: 72, FP: 51, TP: 80, AA: 58, AR: 49, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E5Z-17': { ships: [
				{ mid: 136, LVL: 85, FP: 139, TP: 0, AA: 104, AR: 118, equips: [276,276,140,276], damage: [.887,.987] },
				{ mid: 118, LVL: 88, FP: 63, TP: 139, AA: 49, AR: 63, equips: [58,58,58], damage: [.9,1] },
				{ mid: 119, LVL: 88, FP: 63, TP: 139, AA: 49, AR: 63, equips: [58,58,58], damage: [.9,1] },
				{ mid: 488, LVL: 93, FP: 57, TP: 80, AA: 88, AR: 67, equips: [379,379,101], damage: [.9,1] },
				{ mid: 373, LVL: 73, FP: 52, TP: 78, AA: 60, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 688, LVL: 72, FP: 51, TP: 80, AA: 58, AR: 49, equips: [286,286,286,412], damage: [.9,1] },
			] },
			'E5Z-18': { ships: [
				{ mid: 136, LVL: 85, FP: 135, TP: 0, AA: 104, AR: 118, equips: [276,276,140,276], damage: [.887,.987] },
				{ mid: 573, LVL: 89, FP: 118, TP: 0, AA: 102, AR: 109, equips: [318,290,290,318], damage: [.88,.98] },
				{ mid: 305, LVL: 68, FP: 68, TP: 77, AA: 69, AR: 69, equips: [139,139,101], damage: [.8,.9] },
				{ mid: 710, LVL: 62, FP: 52, TP: 73, AA: 54, AR: 48, equips: [267,286,88,412], damage: [.8,.9] },
				{ mid: 373, LVL: 73, FP: 52, TP: 79, AA: 60, AR: 49, equips: [267,286,240,412], damage: [.9,1] },
				{ mid: 688, LVL: 72, FP: 51, TP: 80, AA: 58, AR: 49, equips: [286,286,286,412], damage: [.9,1] },
			] },
		},
		friendFleetWaves: {
			1: { date: '2021-06-02' },
			2: { date: '2021-06-12' },
		},
		enableMore: { ships: [424] },
		maps: {
			1: {
				name: 'E-1',
				nameT: '31st Squadron, Deploy!',
				fleetTypes: [0],
				bgmMap: 173,
				bgmDN: 174,
				bgmNN: 174,
				bgmDB: 176,
				bgmNB: 176,
				bossnode: ['J','Q','V'],
				giveLock: '50_1',
				checkLock: ['50_2','50_3','50_4','50_5','50_6','50_7','50_8','50_9'],
				lbas: 1,
				parts: {
					1: {
						currentBoss: 'J',
						maphp: {
							3: { 1: 520 },
							2: { 1: 392 },
							1: { 1: 392 },
							4: { 1: 360 },
						},
						finalhp: {
							3: 130,
							2: 98,
							1: 98,
							4: 90,
						},
					},
					2: {
						currentBoss: 'Q',
						maphp: {
							3: { 1: 3960 },
							2: { 1: 2640 },
							1: { 1: 2400 },
							4: { 1: 1800 },
						},
						finalhp: {
							3: 990,
							2: 660,
							1: 600,
							4: 480,
						},
					},
					3: {
						currentBoss: 'V',
						maphp: {
							3: { 1: 1950 },
							2: { 1: 950 },
							1: { 1: 545 },
							4: { 1: 395 },
						},
						finalhp: {
							3: 390,
							2: 190,
							1: 109,
							4: 79,
						},
					},
				},
				reward: { ships: [644], firstOnly: true },
				hiddenRoutes: {
					1: {
						images: [{ name: '1_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 1, [
							{ node: 'MapWide', type: 'PartClear', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, partToClear: 1 },
						], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '1_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 1, [
							{ node: 'K', type: 'ReachNode', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 } },
						], {
							partToUnlock: 2
						})
					},
					3: {
						images: [{ name: '1_3.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 1, [
							{ node: 'MapWide', type: 'PartClear', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, partToClear: 2 },
						], {
							partToUnlock: 3
						})
					},
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				mapInfo: 'No CV(B) allowed',
				startBonus: [
					new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [165,642], 1.25),
					new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [22,28], 1.25),
					new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [20,25,35,532,641], 1.15),
					new ChShipIdsBonuses({ type: 'set', accBonus: 1.1 }, [77,87], 1.1),
					new ChShipTypeBonuses({ type: 'set', accBonus: 1.15 }, ['DE'], 1.15),
				],
				historicals: [22,25,16,20,28,35,41,165,532,641,642],
				startCheckRule: [
					// --- Not unlocked
					ChIsRouteNotUnlockedRule(2, 'Start1'),

					// --- Unlocked
					ChShipCountRoutingRule('<=', 1, 'Start1'),
					ChOneShipNotOfTypeRule(['DD', 'DE', 'CL', 'AV', 'AO', 'LHA'], 'Start1'),
					ChShipTypeRoutingRule(['CL', 'AV', 'AO', 'LHA'], '>=', 2, 'Start1'),

					ChDefaultRouteRule('Start2'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 281,
						y: 69,
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV', 'SS', 'SSV'], '>', 0, 'C'),
							ChShipTypeRoutingRule(['CA', 'CAV'], '>=', 2, 'C'),
							ChShipTypeRoutingRule(['CL', 'CT'], '=', 0, 'C'),
							ChShipTypeRoutingRule(['CL', 'CT', 'CVL'], '>=', 3, 'C'),
							ChShipTypeRoutingRule(['DD', 'DE'], '<=', 2, 'C'),

							// --- Not unlocked
							ChIsRouteNotUnlockedRule(3, 'E'),

							// --- Unlocked
							ChShipHistoricalRoutingRule('Historicals', 'map.historicals', '>=', { 4:0, 1:1, 2:2, 3:3 }, 'E'),
							ChSpeedRule('<=', 5, 'R'),
							ChShipTypeRoutingRule(['AV'], '>', 0, 'R'),
							ChShipTypeRoutingRule(['CL', 'CT'], '>=', 2, 'R'),
							
							ChDefaultRouteRule('E'),
						]
					},
					'Start2': {
						type: 0,
						x: 509,
						y: 189,
						hidden: 2,
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'A': {
						type: 1,
						x: 126,
						y: 155,
						distance: 7,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':20,'Medium 4':20,'Medium 5':20},
							1: {'Easy 1':10,'Easy 2':35,'Easy 3':30,'Easy 4':25},
							4: {'Casual 1':45,'Casual 2':35,'Casual 3':20},
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV', 'AV'], '>=', 3, 'B'),
							ChShipTypeRoutingRule(['CL', 'CT', 'CLT'], '>', 2, 'B'),

							ChMultipleRulesRule([
								ChDifficultyRule([1,2,3], 'B'),
								
								ChMultipleRulesRule([
									ChSpeedRule('<=', 5, 'B'),
									ChShipHistoricalRoutingRule('Historicals', 'map.historicals', '<', 2, 'B'),
								], 'OR', 'B'),
							], 'AND', 'B'),
							
							ChShipTypeRoutingRule(['CL', 'DD', 'DE'], '>=', 2, 'D'),

							ChDefaultRouteRule('B'),
						]
					},
					'B': {
						type: 1,
						x: 150,
						y: 234,
						distance: 7,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':25,'Hard 3':30,'Hard 4':25},
							2: {'Medium 1':25,'Medium 2':20,'Medium 3':35,'Medium 4':20},
							1: {'Easy 1':5,'Easy 2':10,'Easy 3':20,'Easy 4':10,'Easy 5':20,'Easy 6':10,'Easy 7':15,'Easy 8':10},
							4: {'Casual 1':30,'Casual 2':25,'Casual 3':25,'Casual 4':20},
						},
						rules: [
							ChFixedRoutingRule('D')
						]
					},
					'C': {
						type: 1,
						x: 198,
						y: 115,
						distance: 6,
						subonly: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':30,'Hard 3':20,'Hard 4':20},
							2: {'Medium 1':5,'Medium 2':5,'Medium 3':15,'Medium 4':15,'Medium 5':15,'Medium 6':15,'Medium 7':15,'Medium 8':15},
							1: {'Easy 1':5,'Easy 2':5,'Easy 3':15,'Easy 4':15,'Easy 5':15,'Easy 6':15,'Easy 7':15,'Easy 8':15},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':50,'Hard 4':50},
							2: {'Medium 1':5,'Medium 2':5,'Medium 3':15,'Medium 4':15,'Medium 5':15,'Medium 6':15,'Medium 7':15,'Medium 8':15},
							1: {'Easy 1':5,'Easy 2':5,'Easy 3':15,'Easy 4':15,'Easy 5':15,'Easy 6':15,'Easy 7':15,'Easy 8':15},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 2, 'A'),
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'A'),
							ChShipTypeRoutingRule(['CL', 'CT', 'CLT'], '>=', 3, 'A'),
							ChShipTypeRoutingRule(['DD', 'DE'], '<', 2, 'A'),
							ChShipTypeRoutingRule(['CL'], '=', 0, 'A'),
							ChSpeedRule('>=', 10, 'D'),
							
							ChShipHistoricalRoutingRule('Historicals', 'map.historicals', '>=', { 4:0, 1:1, 2:2, 3:3 }, 'D'),

							ChDefaultRouteRule('A'),
						]
					},
					'D': {
						type: 1,
						x: 229,
						y: 213,
						distance: 6,
						subonly: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':40,'Hard 3':10,'Hard 4':10},
							2: {'Medium 1':15,'Medium 2':10,'Medium 3':15,'Medium 4':10,'Medium 5':15,'Medium 6':15,'Medium 7':10,'Medium 8':10},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':15,'Easy 4':15,'Easy 5':15,'Easy 6':15,'Easy 7':10,'Easy 8':10},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':50,'Hard 4':50},
							2: {'Medium 1':15,'Medium 2':10,'Medium 3':15,'Medium 4':10,'Medium 5':15,'Medium 6':15,'Medium 7':10,'Medium 8':10},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':15,'Easy 4':15,'Easy 5':15,'Easy 6':15,'Easy 7':10,'Easy 8':10},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						rules: [
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 2, 'F'),
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'F'),
							ChSpeedRule('>=', 10, 'G'),

							ChDefaultRouteRule('F'),
						]
					},
					'E': {
						type: 3,
						x: 256,
						y: 142,
						distance: 5,
						rules: [
							ChSelectRouteRule(['D','H']),
						]
					},
					'F': {
						type: 1,
						x: 268,
						y: 323,
						distance: 6,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':25,'Hard 3':25},
							2: {'Medium 1':40,'Medium 2':30,'Medium 3':30},
							1: {'Easy 1':40,'Easy 2':30,'Easy 3':30},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'G': {
						type: 3,
						x: 313,
						y: 258,
						distance: 5,
						rules: [
							ChSelectRouteRule(['F','I']),
						]
					},
					'H': {
						type: 1,
						x: 333,
						y: 178,
						distance: 3,
						subonly: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':40,'Hard 3':10,'Hard 4':10},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':15,'Medium 4':15,'Medium 5':15,'Medium 6':15,'Medium 7':5,'Medium 8':5},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':15,'Easy 4':15,'Easy 5':15,'Easy 6':15,'Easy 7':10,'Easy 8':10},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':50,'Hard 4':50},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':15,'Medium 4':15,'Medium 5':15,'Medium 6':15,'Medium 7':5,'Medium 8':5},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':15,'Easy 4':15,'Easy 5':15,'Easy 6':15,'Easy 7':10,'Easy 8':10},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						rules: [
							ChShipTypeRoutingRule(['CA', 'CAV'], '>', 0, 'D'),
							ChShipTypeRoutingRule(['CL', 'CT', 'CLT'], '>=', 3, 'D'),

							ChMultipleRulesRule([
								ChSpeedRule('<=', 5, 'D'),
								ChShipTypeRoutingRule(['CL', 'CT', 'CLT'], '>=', 2, 'D'),
							], 'AND', 'D', 'I'),
						]
					},
					'I': {
						type: 1,
						x: 388,
						y: 300,
						distance: 4,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':30,'Hard 3':50},
							2: {'Medium 1':10,'Medium 2':20,'Medium 3':30,'Medium 4':20,'Medium 5':20},
							1: {'Easy 1':20,'Easy 2':30,'Easy 3':20,'Easy 4':30},
							4: {'Casual 1':40,'Casual 2':40,'Casual 3':20},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 4':50,'Hard 5':50},
							2: {'Medium 1':10,'Medium 2':20,'Medium 3':30,'Medium 4':20,'Medium 5':20},
							1: {'Easy 1':20,'Easy 2':30,'Easy 3':20,'Easy 4':30},
							4: {'Casual 1':40,'Casual 2':40,'Casual 3':20},
						},
						get end() {
							return !checkRoute(1);
						},
						rules: [
							// --- Not unlocked
							ChDontShowCompass(ChIsRouteNotUnlockedRule(3, 'K')),

							// --- Unlocked
							ChDifficultyRule([4], 'S'),
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 2, 'K'),
							ChShipTypeRoutingRule(['DD', 'DE'], '<=', 2, 'K'),

							ChMultipleRulesRule([
								ChDifficultyRule([3,2], 'K'),
								ChShipTypeRoutingRule(['CL'], '=', 0, 'K'),
							], 'AND', 'K'),
							
							ChMultipleRulesRule([
								ChDifficultyRule([3], 'K'),
								ChShipHistoricalRoutingRule('Historicals', 'map.historicals', '<', 2, 'K'),
							], 'AND', 'K'),

							ChDefaultRouteRule('S'),
						]
					},
					'J': {
						type: 1,
						x: 181,
						y: 312,
						distance: 7,
						boss: true,
						bonuses: [
							// --- Start bonus
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [165,642], 1.25),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [22,28], 1.25),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [20,25,35,532,641], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.1 }, [77,87], 1.1),
							new ChShipTypeBonuses({ type: 'set', accBonus: 1.15 }, ['DE'], 1.15),

							// --- Node bonus
							new ChShipIdsBonuses({ type: 'add', accBonus: 1.1 }, [77,87], 1.1),
						],
						compDiff: {
							3: {'Hard 1':65,'Hard 2':35},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':55,'Easy 2':45},
							4: {'Casual 1':55,'Casual 2':45},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 1':55,'Casual 3':45},
						},
						end: true
					},
					'K': {
						type: 3,
						x: 478,
						y: 226,
						distance: 1,
						hidden: 1,
						end: true
					},
					'L': {
						type: 3,
						x: 532,
						y: 227,
						distance: 1,
						hidden: 2,
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'M': {
						type: 1,
						x: 567,
						y: 240,
						distance: 1,
						hidden: 2,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':30,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':10,'Medium 2':30,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':10,'Easy 2':30,'Easy 3':30,'Easy 4':30},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 4':50,'Hard 5':50},
							2: {'Medium 1':10,'Medium 2':30,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':10,'Easy 2':30,'Easy 3':30,'Easy 4':30},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						bonuses: [
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [16,38,41,49,50,135,410,425,452,484,527], 1.25),
							new ChShipIdsBonuses({ type: 'add', accBonus: 1.25 }, [165,642], 1.25),
						],
						rules: [
							ChDifficultyRule([4,1], 'O'),
							ChSpeedRule('<=', 5, 'N'),

							ChMultipleRulesRule([
								ChDifficultyRule([3], 'N'),
								ChShipCountRoutingRule('>=', 6, 'N'),
							], 'AND', 'N'),

							ChDefaultRouteRule('O'),
						]
					},
					'N': {
						type: 1,
						x: 571,
						y: 276,
						distance: 2,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':10,'Medium 2':5,'Medium 3':20,'Medium 4':10,'Medium 5':25,'Medium 6':15,'Medium 7':10,'Medium 8':5},
							1: {'Medium 1':100},
							4: {'Medium 1':100},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 3':70,'Hard 4':30},
							2: {'Medium 1':10,'Medium 2':5,'Medium 3':20,'Medium 4':10,'Medium 5':25,'Medium 6':15,'Medium 7':10,'Medium 8':5},
							1: {'Medium 1':100},
							4: {'Medium 1':100},
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'O': {
						type: 1,
						x: 609,
						y: 278,
						distance: 3,
						hidden: 2,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':30,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':30,'Medium 2':35,'Medium 3':35},
							1: {'Easy 1':10,'Easy 2':30,'Easy 3':30,'Easy 4':30},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 4':50,'Hard 5':50},
							2: {'Medium 4':75,'Medium 5':25},
							1: {'Easy 1':10,'Easy 2':30,'Easy 3':30,'Easy 4':30},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'P': {
						type: 1,
						x: 617,
						y: 317,
						distance: 4,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':20,'Hard 3':30,'Hard 4':20},
							2: {'Medium 1':10,'Medium 2':5,'Medium 3':20,'Medium 4':10,'Medium 5':25,'Medium 6':15,'Medium 7':10,'Medium 8':5},
							1: {'Easy 1':5,'Easy 2':5,'Easy 3':20,'Easy 4':10,'Easy 5':20,'Easy 6':10,'Easy 7':20,'Easy 8':10},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 3':60,'Hard 4':40},
							2: {'Medium 1':10,'Medium 2':5,'Medium 3':20,'Medium 4':10,'Medium 5':25,'Medium 6':15,'Medium 7':10,'Medium 8':5},
							1: {'Easy 1':5,'Easy 2':5,'Easy 3':20,'Easy 4':10,'Easy 5':20,'Easy 6':10,'Easy 7':20,'Easy 8':10},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						rules: [
							ChFixedRoutingRule('Q')
						]
					},
					'Q': {
						type: 1,
						x: 666,
						y: 338,
						distance: 5,
						hidden: 2,
						boss: true,
						friendFleet: [],
						friendFleetS: ['E1-1','E1-2','E1-3','E1-4','E1-5','E1-6','E1-7','E1-4','E1-5','E1-6','E1-7'],
						bonuses: [
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [165,642], 1.25),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [22,28], 1.25),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [20,25,35,532,641], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.1 }, [77,87], 1.1),
							new ChShipTypeBonuses({ type: 'set', accBonus: 1.15 }, ['DE'], 1.15),
						],
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
					'R': {
						type: 1,
						x: 308,
						y: 127,
						distance: 4,
						hidden: 3,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':15,'Medium 2':20,'Medium 3':25,'Medium 4':20,'Medium 5':20},
							1: {'Easy 1':5,'Easy 2':30,'Easy 3':35,'Easy 4':30},
							4: {'Easy 1':100},
						},
						compDiffF: {
							3: {'Hard 3':30,'Hard 4':40,'Hard 5':30},
							2: {'Medium 1':15,'Medium 2':20,'Medium 3':25,'Medium 4':20,'Medium 5':20},
							1: {'Easy 1':5,'Easy 2':30,'Easy 3':35,'Easy 4':30},
							4: {'Easy 1':100},
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'S': {
						type: 1,
						x: 397,
						y: 221,
						distance: 3,
						hidden: 3,
						bonuses: [
							new ChShipIdsBonuses({ type: 'add' }, [165,642], 1.1),
							new ChShipIdsBonuses({ type: 'add' }, [22,28], 1.1),
							new ChShipIdsBonuses({ type: 'add', accBonus: 1.25 }, [20,25,35,532,641], 1.25),
							new ChShipTypeBonuses({ type: 'add', }, ['DE'], 1.1),
						],
						compDiff: {
							3: {'Hard 1':50,'Hard 2':25,'Hard 3':25},
							2: {'Medium 1':40,'Medium 2':30,'Medium 3':30},
							1: {'Easy 1':40,'Easy 2':30,'Easy 3':30},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						compDiffF: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':40,'Easy 2':30,'Easy 3':30},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							ChSpeedRule('<=', 5, 'U'),
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>', 0, 'U'),
							ChShipTypeRoutingRule(['CA', 'CAV', 'CLT', 'AV'], '>', 1, 'U'),
							ChShipTypeRoutingRule(['CA', 'CAV', 'CL'], '>', 2, 'U'),
							
							ChMultipleRulesRule([
								ChDifficultyRule([3], 'U'),
								ChShipHistoricalRoutingRule('Historicals', 'map.historicals', '<', 3, 'U'),
							], 'AND', 'U'),
							
							ChMultipleRulesRule([
								ChDifficultyRule([2], 'U'),
								ChShipHistoricalRoutingRule('Historicals', 'map.historicals', '<', 2, 'U'),
							], 'AND', 'U'),

							ChLOSRule({
								3: { 48: 'V', 43: 'U' },
								2: { 38: 'V', 33: 'U' },
								1: { 29: 'V', 24: 'U' },
								4: { 29: 'V', 24: 'U' },
							}, 3)
						]
					},
					'T': {
						type: 3,
						x: 411,
						y: 99,
						distance: 3,
						hidden: 3,
						end: true
					},
					'U': {
						type: 1,
						x: 460,
						y: 177,
						distance: 1,
						hidden: 3,
						subonly: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':40,'Hard 3':10,'Hard 4':10},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':15,'Medium 4':15,'Medium 5':15,'Medium 6':15,'Medium 7':5,'Medium 8':5},
							1: {'Easy 1':5,'Easy 2':5,'Easy 3':20,'Easy 4':20,'Easy 5':15,'Easy 6':15,'Easy 7':10,'Easy 8':10},
							4: {'Casual 1':25,'Casual 2':25,'Casual 3':25,'Casual 4':25},
						},
						compDiffF: {
							3: {'Hard 3':50,'Hard 4':50},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':15,'Medium 4':15,'Medium 5':15,'Medium 6':15,'Medium 7':5,'Medium 8':5},
							1: {'Easy 1':5,'Easy 2':5,'Easy 3':20,'Easy 4':20,'Easy 5':15,'Easy 6':15,'Easy 7':10,'Easy 8':10},
							4: {'Casual 1':25,'Casual 2':25,'Casual 3':25,'Casual 4':25},
						},
						showLoSPlane: 'V',
						rules: [
							ChLOSRule({
								3: { 41: 'V', 36: 'T' },
								2: { 33: 'V', 28: 'T' },
								1: { 23: 'V', 18: 'T' },
								4: { 23: 'V', 18: 'T' },
							}, 3)
						]
					},
					'V': {
						type: 1,
						x: 404,
						y: 159,
						distance: 2,
						hidden: 3,
						boss: true,
						friendFleet: [],
						friendFleetS: ['E1-8','E1-9','E1-10','E1-11','E1-10','E1-11'],
						bonuses: [
							// --- Start bonus
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [165,642], 1.25),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [22,28], 1.25),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [20,25,35,532,641], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.1 }, [77,87], 1.1),
							new ChShipTypeBonuses({ type: 'set', accBonus: 1.15 }, ['DE'], 1.15),

							// --- Node bonus
							new ChShipIdsBonuses({ type: 'add' }, [165,642], 1.1),
							new ChShipIdsBonuses({ type: 'add' }, [22,28], 1.1),
							new ChShipIdsBonuses({ type: 'add', accBonus: 1.25 }, [20,25,35,532,641], 1.25),
							new ChShipTypeBonuses({ type: 'add', }, ['DE'], 1.1),
						],
						compDiff: {
							3: {'Hard 1':40,'Hard 2':60},
							2: {'Medium 1':55,'Medium 2':45},
							1: {'Easy 1':55,'Easy 2':45},
							4: {'Casual 1':40,'Casual 2':60},
						},
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
			2: {
				name: 'E-2',
				nameT: 'Battle of the 6th Fleet',
				fleetTypes: [0,1,2,3],
				bgmMap: 173,
				bgmDN: 174,
				bgmNN: 174,
				bgmDB: 177,
				bgmNB: 177,
				bossnode: ['Q','U','ZII'],
				giveLock: ['50_2','50_3'],
				checkLock: ['50_1','50_4','50_5','50_6','50_7','50_8','50_9'],
				lockSpecial: true,
				lbas: 2,
				parts: {
					1: {
						currentBoss: 'Q',
						transport: 'J',
						maphp: {
							3: { 1: 500 },
							2: { 1: 400 },
							1: { 1: 280 },
							4: { 1: 280 },
						},
						finalhp: null,
					},
					2: {
						currentBoss: 'U',
						transport: null,
						maphp: {
							3: { 1: 1950 },
							2: { 1: 1850 },
							1: { 1: 1750 },
							4: { 1: 1750 },
						},
						finalhp: {
							3: 390,
							2: 370,
							1: 350,
							4: 350,
						},
					},
					3: {
						currentBoss: 'ZII',
						transport: null,
						maphp: {
							3: { 1: 1750 },
							2: { 1: 1750 },
							1: { 1: 1750 },
							4: { 1: 1750 },
						},
						finalhp: {
							3: 350,
							2: 350,
							1: 350,
							4: 350,
						},
					},
				},
				reward: { items: [{ id: 413, limit: 1}], firstOnly: true },
				hiddenRoutes: {
					1: {
						images: [{ name: '2_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 2, [
							{ node: 'MapWide', type: 'PartClear', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, partToClear: 1 },
							{ node: 'C', type: 'ReachNode', timesRequiredPerDiff: { 1:1, 2:1, 3:1 } },
							{ node: 'P', type: 'battle', timesRequiredPerDiff: { 2:1, 3:2 }, ranksRequiredPerDiff: { 2:'S', 3:'S' } },
						], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '2_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 2, [
							{ node: 'MapWide', type: 'PartClear', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, partToClear: 2 },
						], {
							partToUnlock: 2
						})
					},
				},
				additionalChecks: function(ships,errors) {
					if (getDiff() == 1 || getDiff() == 4 || CHDATA.config.disablelock) return;
					let lock = '50_2';
					if (CHDATA.fleets.combined || ships.aCV + +isShipInList(ships.ids,161)) lock = '50_3';
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
						if (lock == '50_2') errors.push('Only PURPLE locks allowed.');
						else errors.push('Only BLUE locks allowed.');
					}
				},
				startCheck: function(ships) {
					// --- Note : i keep the tag logic here
					if (CHDATA.fleets.combined || ships.c.aCV + +isShipInList(ships.c.ids,161)) {
						chGiveLockAllCurrent('50_3');
						return;
					}
					
					chGiveLockAllCurrent('50_2');
				},
				startCheckRule: [
					ChFleetTypeRule([1,2,3], 'Start2'),
					ChShipTypeRoutingRule(['aCV', 'AkitsuMaru'], '>', 0, 'Start2'),

					// --- Not unlocked
					ChIsRouteNotUnlockedRule(2, 'Start1'),

					// --- Unlocked
					ChMultipleRulesRule([
						ChDifficultyRule([4], 'Start3'),
						ChShipTypeRoutingRule(['CL'], '>=', 2, 'Start3'),
						ChShipTypeRoutingRule(['DD'], '>', 0, 'Start3'),
					], 'AND', 'Start3'),

					ChMultipleRulesRule([
						ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'Start3'),

						ChMultipleRulesRule([
							ChAllShipMusteBeOfTypeRule(['SS', 'SSV'], 'Start3'),
							ChShipTypeRoutingRule(['AS'], '>', 0, 'Start3'),
							ChShipTypeRoutingRule(['CL', 'CT'], '>', 0, 'Start3'),
							ChShipTypeRoutingRule(['DD'], '>=', 2, 'Start3'),
							ChShipTypeRoutingRule(['aBB', 'AR'], '=', 0, 'Start3'),
						], 'OR', 'Start3'),
					], 'AND', 'Start3'),

					ChDefaultRouteRule('Start1'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 91,
						y: 114,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 288,
						y: 75,
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'Start3': {
						type: 0,
						x: 152,
						y: 246,
						rules: [
							ChAllShipMusteBeOfTypeRule(["SS", 'SSV'], 'W'),
							ChShipTypeRoutingRule(['AS'], '>', 0, 'W'),
							ChShipTypeRoutingRule(['aBB'], '>', 0, 'V'),
							ChShipTypeRoutingRule(['CL', 'DD'], '>=', 3, 'W'),
							ChDefaultRouteRule('V'),
						]
					},
					'A': {
						type: 3,
						x: 134,
						y: 153,
						distance: 1,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 190,
						y: 202,
						distance: 2,
						raid: true,
						bonuses: [
							// --- Start 1 bonus
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [22,154], 1.35),
							new ChShipClassBonuses({ type: 'set', accBonus: 1.25 }, 'class.IJN_CL', 1.25),
							new ChShipClassBonuses({ type: 'set', accBonus: 1.15 }, 'class.IJN_DD', 1.15),
							new ChShipTypeBonuses({ type: 'set', }, ['SS', 'SSV', 'AS'], 1.35),
						],
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':30,'Medium 2':30,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						rules: [
							ChAllShipMusteBeOfTypeRule(['SS', 'SSV'], 'D'),
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['AV', 'AO', 'LHA'], '>', 0, 'D'),
								ChShipTypeRoutingRule(['CL', 'DD'], '>=', 5, 'D'),
								ChShipTypeRoutingRule(['DD'], '>=', 4, 'D'),
							], 'AND', 'D', 'E'),
						]
					},
					'C': {
						type: 2,
						x: 250,
						y: 160,
						distance: 2,
						dropoff: true,
						resource: 2,
						amount: [60],
						end: true
					},
					'D': {
						type: 3,
						x: 255,
						y: 220,
						distance: 3,
						rules: [
							ChSelectRouteRule(['F','H']),
						]
					},
					'E': {
						type: 1,
						x: 261,
						y: 264,
						distance: 3,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':40,'Hard 3':20},
							2: {'Medium 1':40,'Medium 2':40,'Medium 3':20},
							1: {'Easy 1':40,'Easy 2':40,'Easy 3':20},
							4: {'Casual 1':40,'Casual 2':40,'Casual 3':20},
						},
						rules: [
							ChFixedRoutingRule('H')
						]
					},
					'F': {
						type: 1,
						x: 286,
						y: 191,
						distance: 3,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':40,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':15,'Medium 3':45},
							1: {'Easy 1':25,'Easy 2':35,'Easy 3':40},
							4: {'Casual 1':40,'Casual 2':40,'Casual 3':20},
						},
						rules: [
							ChFixedRoutingRule('C')
						]
					},
					'G': {
						type: 3,
						x: 371,
						y: 92,
						distance: 3,
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'H': {
						type: 1,
						x: 374,
						y: 258,
						distance: 4,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':35,'Hard 3':35},
							2: {'Medium 1':35,'Medium 2':30,'Medium 3':35},
							1: {'Easy 1':30,'Easy 2':20,'Easy 3':20,'Easy 4':30},
							4: {'Casual 1':20,'Casual 2':30,'Casual 3':30,'Casual 4':20},
						},
						rules: [
							ChAllShipMusteBeOfTypeRule(["SS", 'SSV'], 'J'),
							ChShipTypeRoutingRule(['DD'], '>=', 6, 'J'),
							ChShipTypeRoutingRule(['aBB'], '>', 0, 'I'),
							ChShipTypeRoutingRule(['CL', 'CT', 'CLT'], '>=', 2, 'I'),

							ChDifficultyRule([4], 'J'),

							ChSpeedRule('<=', 5, 'I'),
							ChShipTypeRoutingRule(['CL', 'CT'], '=', 0, 'I'),

							ChDefaultRouteRule('J'),
						]
					},
					'I': {
						type: 1,
						x: 408,
						y: 210,
						distance: 4,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':40,'Hard 3':40},
							2: {'Medium 1':35,'Medium 2':40,'Medium 3':25},
							1: {'Easy 1':30,'Easy 2':35,'Easy 3':35},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('J')
						]
					},
					'J': {
						type: 2,
						x: 443,
						y: 236,
						distance: 5,
						resource: 0,
						rules: [
							ChAllShipMusteBeOfTypeRule(['SS', 'SSV'], 'Q'),

							ChLOSCheckIfRuleChecked({
								3: { 44: 'Q', 38: 'L' },
								2: { 34: 'Q', 28: 'L' },
								1: { 27: 'Q', 21: 'L' },
								4: { 23: 'Q', 17: 'L' },
							}, 3, ChDefaultRouteRule('Q'),)
						]
					},
					'K': {
						type: 1,
						x: 456,
						y: 110,
						distance: 4,
						raid: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [22,154], 1.35),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.2 }, [21,71,72,85,86,110,111,116,124,125, 20,122,132,133,134,167,168,169,170,181,186,190,422,453,454], 1.2),
							new ChShipTypeBonuses({ type: 'set', }, ['SS', 'SSV', 'AS'], 1.35),
						],
						compDiff: {
							3: {'Hard 1':15,'Hard 2':15,'Hard 3':20,'Hard 4':25,'Hard 5':25},
							2: {'Medium 1':20,'Medium 2':30,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':25,'Easy 5':25},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							ChLOSCheckIfRuleChecked({ 27: 'M', 21: 'L' }, 3, ChFleetTypeRule([1,2,3], 'M'),),

							ChShipTypeRoutingRule(['CV', 'CVB'], '>=', 3, 'M'),

							ChMultipleRulesRule([
								ChDifficultyRule([3], 'M'),
								ChShipTypeRoutingRule(['aCV'], '>=', 4, 'M'),
							], 'AND', 'M', 'N'),
						]
					},
					'L': {
						type: 3,
						x: 482,
						y: 180,
						distance: 5,
						end: true
					},
					'M': {
						type: 1,
						x: 520,
						y: 147,
						distance: 5,
						subonly: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':40,'Hard 3':10,'Hard 4':10},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':10,'Medium 4':10,'Medium 5':15,'Medium 6':15,'Medium 7':10,'Medium 8':10},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':15,'Easy 4':15,'Easy 5':15,'Easy 6':15,'Easy 7':10,'Easy 8':10},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 3':50,'Hard 4':50},
							2: {'Medium 7':50,'Medium 8':50},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':15,'Easy 4':15,'Easy 5':15,'Easy 6':15,'Easy 7':10,'Easy 8':10},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						rules: [
							ChFixedRoutingRule('N')
						]
					},
					'N': {
						type: 1,
						x: 545,
						y: 98,
						distance: 5,
						raid: true,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':25,'Hard 3':25,'Hard 4':25},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':20,'Medium 5':10},
							1: {'Easy 1':10,'Easy 2':30,'Easy 3':40,'Easy 4':20},
							4: {'Casual 1':20,'Casual 2':40,'Casual 3':40},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 4':50,'Hard 5':50},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':20,'Medium 5':10},
							1: {'Easy 1':10,'Easy 2':30,'Easy 3':40,'Easy 4':20},
							4: {'Casual 1':20,'Casual 2':40,'Casual 3':40},
						},
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB'], '<=', 2, 'P'),
								
								ChMultipleRulesRule([
									ChSpeedRule('>=', 10, 'P'),
									ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 5, 'P'),
								], 'OR', 'P'),
							], 'AND', 'P', 'O'),
						]
					},
					'O': {
						type: 1,
						x: 620,
						y: 87,
						distance: 6,
						subonly: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':40,'Hard 3':10,'Hard 4':10},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':10,'Medium 4':10,'Medium 5':15,'Medium 6':15,'Medium 7':10,'Medium 8':10},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':15,'Easy 4':15,'Easy 5':15,'Easy 6':15,'Easy 7':10,'Easy 8':10},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 3':50,'Hard 4':50},
							2: {'Medium 7':50,'Medium 8':50},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':15,'Easy 4':15,'Easy 5':15,'Easy 6':15,'Easy 7':10,'Easy 8':10},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':20,'Casual 4':20},
						},
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'P': {
						type: 1,
						x: 630,
						y: 185,
						distance: 7,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':40,'Hard 3':30},
							2: {'Medium 1':30,'Medium 2':40,'Medium 3':30},
							1: {'Easy 1':30,'Easy 2':40,'Easy 3':30},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						get end() {
							return !checkRoute(1);
						},
						rules: [
							ChSpeedRule('<=', 5, 'R'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aCV'], '<=', 3, 'T'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 2, 'T'),
								ChShipTypeRoutingRule(['aBB'], '<=', 2, 'T'),
							], 'AND', 'T'),

							ChDefaultRouteRule('R'),
						]
					},
					'Q': {
						type: 1,
						x: 497,
						y: 284,
						distance: 5,
						boss: true,
						bonuses: [
							// --- Reset 
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),

							// --- Apply P1 bonuses
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [22,154], 1.35),
							new ChShipClassBonuses({ type: 'set', accBonus: 1.25 }, 'class.IJN_CL', 1.25),
							new ChShipClassBonuses({ type: 'set', accBonus: 1.15 }, 'class.IJN_DD', 1.15),
							new ChShipTypeBonuses({ type: 'set', }, ['SS', 'SSV', 'AS'], 1.35),
						],
						compDiff: {
							3: {'Hard 2':35,'Hard 3':65},
							2: {'Medium 2':60,'Medium 3':40},
							1: {'Easy 2':60,'Easy 3':40},
							4: {'Casual 2':50,'Casual 3':50},
						},
						compDiffC: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						end: true
					},
					'R': {
						type: 1,
						x: 594,
						y: 234,
						distance: 6,
						raid: true,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':15,'Hard 2':25,'Hard 3':25,'Hard 4':25,'Hard 5':10},
							2: {'Medium 1':15,'Medium 2':25,'Medium 3':25,'Medium 4':25,'Medium 5':10},
							1: {'Easy 1':5,'Easy 2':30,'Easy 3':35,'Easy 4':30},
							4: {'Casual 1':15,'Casual 2':40,'Casual 3':45},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 4':45,'Hard 5':55},
							2: {'Medium 3':35,'Medium 4':40,'Medium 5':25},
							1: {'Easy 1':5,'Easy 2':30,'Easy 3':35,'Easy 4':30},
							4: {'Casual 1':15,'Casual 2':40,'Casual 3':45},
						},
						rules: [
							ChFixedRoutingRule('T')
						]
					},
					'S': {
						type: 3,
						x: 634,
						y: 304,
						distance: 7,
						hidden: 1,
						end: true
					},
					'T': {
						type: 1,
						x: 671,
						y: 263,
						distance: 8,
						raid: true,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':15,'Hard 2':25,'Hard 3':25,'Hard 4':25,'Hard 5':10},
							2: {'Medium 1':15,'Medium 2':25,'Medium 3':25,'Medium 4':25,'Medium 5':10},
							1: {'Easy 1':5,'Easy 2':30,'Easy 3':35,'Easy 4':30},
							4: {'Casual 1':15,'Casual 2':40,'Casual 3':45},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 4':45,'Hard 5':55},
							2: {'Medium 3':35,'Medium 4':40,'Medium 5':25},
							1: {'Easy 1':5,'Easy 2':30,'Easy 3':35,'Easy 4':30},
							4: {'Casual 1':15,'Casual 2':40,'Casual 3':45},
						},
						showLoSPlane: 'U',
						rules: [
							ChLOSRule({ 23: 'U', 17: 'S' }, 3)
						]
					},
					'U': {
						type: 1,
						x: 550,
						y: 302,
						distance: 6,
						boss: true,
						hidden: 1,
						compDiff: {
							3: {'Hard 2':100},
							2: {'Medium 2':100},
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
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						end: true
					},
					'V': {
						type: 1,
						x: 225,
						y: 335,
						distance: 3,
						raid: true,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':15,'Hard 2':15,'Hard 3':20,'Hard 4':25,'Hard 5':25},
							2: {'Medium 1':20,'Medium 2':30,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':25,'Easy 5':25},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('W')
						]
					},
					'W': {
						type: 1,
						x: 305,
						y: 330,
						distance: 4,
						hidden: 2,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [22,154], 1.35),
							new ChShipClassBonuses({ type: 'set', accBonus: 1.15 }, 'class.IJN_DD', 1.15),
							new ChShipTypeBonuses({ type: 'set', }, ['SS', 'SSV', 'AS'], 1.35),
							new ChShipTypeBonuses({ type: 'set', }, ['AS'], 1.1),
						],
						compDiff: {
							3: {'Hard 1':35,'Hard 2':65},
							2: {'Medium 1':40,'Medium 2':60},
							1: {'Easy 1':45,'Easy 2':55},
							4: {'Casual 1':50,'Casual 2':50},
						},
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 2':35,'Medium 3':65},
							1: {'Easy 2':35,'Easy 3':65},
							4: {'Casual 2':30,'Casual 3':70},
						},
						rules: [
							ChAllShipMusteBeOfTypeRule(['AS', 'SS', 'SSV'], 'Z'),
							ChShipTypeRoutingRule(['AS', 'SS', 'SSV'], '>=', 5, 'Z'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['AS', 'SS', 'SSV'], '>=', 4, 'Z'),
								ChShipTypeRoutingRule(['CL', 'CA', 'CAV'], '<=', 1, 'Z'),
							], 'AND', 'Z', 'X'),
						]
					},
					'X': {
						type: 1,
						x: 365,
						y: 303,
						distance: 4,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':50},
							2: {'Medium 1':50,'Medium 2':50},
							1: {'Easy 1':30,'Easy 2':20,'Easy 3':30,'Easy 4':20},
							4: {'Casual 1':35,'Casual 2':25,'Casual 3':25,'Casual 4':15},
						},
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 2':35,'Medium 3':65},
							1: {'Easy 3':70,'Easy 4':30},
							4: {'Casual 1':35,'Casual 2':25,'Casual 3':25,'Casual 4':15},
						},
						rules: [
							ChFixedRoutingRule('Y')
						]
					},
					'Y': {
						type: 3,
						x: 419,
						y: 277,
						distance: 4,
						hidden: 2,
						rules: [
							ChSelectRouteRule(['Q','Z']),
						]
					},
					'Z': {
						type: 1,
						x: 468,
						y: 317,
						distance: 5,
						raid: true,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':15,'Hard 2':15,'Hard 3':20,'Hard 4':25,'Hard 5':25},
							2: {'Medium 1':20,'Medium 2':30,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':25,'Easy 5':25},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('ZI')
						]
					},
					'ZI': {
						type: 1,
						x: 596,
						y: 342,
						distance: 7,
						hidden: 2,
						bonuses: [
							new ChShipIdsBonuses({ type: 'add' }, [191], 1.25),
							new ChShipIdsBonuses({ type: 'add' }, [483], 1.15),
						],
						compDiff: {
							3: {'Hard 1':40,'Hard 2':60},
							2: {'Medium 1':40,'Medium 2':60},
							1: {'Easy 1':45,'Easy 2':55},
							4: {'Casual 1':45,'Casual 2':55},
						},
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 2':35,'Medium 3':65},
							1: {'Easy 2':35,'Easy 3':65},
							4: {'Casual 2':50,'Casual 3':50},
						},
						rules: [
							ChMultipleRulesRule([
								ChDifficultyRule([3,2], 'S'),
								ChShipTypeRoutingRule(['aBB', 'CA', 'CAV'], '>', 0, 'S'),
							], 'AND', 'S'),

							ChShipTypeRoutingRule(['aBB'], '>', 1, 'S'),

							ChLOSRule({
								3: { 29: 'ZII', 26: 'S' },
								2: { 23: 'ZII', 20: 'S' },
								1: { 21: 'ZII', 18: 'S' },
								4: { 18: 'ZII', 15: 'S' },
							}, 3)
						]
					},
					'ZII': {
						type: 1,
						x: 669,
						y: 337,
						distance: 8,
						boss: true,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 3':100},
						},
						compDiffC: {
							3: {'Hard 2':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Night Battle off Lunga Point',
				fleetTypes: [0,1,2,3],
				bgmMap: 173,
				bgmDN: 177,
				bgmNN: 177,
				bgmDB: 175,
				bgmNB: 175,
				bossnode: ['N','W','Z'],
				giveLock: ['50_4','50_5','50_6'],
				checkLock: ['50_1','50_2','50_3','50_7','50_8','50_9'],
				lockSpecial: true,
				lbas: 3,
				lbasSortie: 2,
				parts: {
					1: {
						currentBoss: 'N',
						transport: 'M',
						maphp: {
							3: { 1: 750 },
							2: { 1: 500 },
							1: { 1: 350 },
							4: { 1: 350 },
						},
						finalhp: null,
					},
					2: {
						currentBoss: 'W',
						transport: null,
						maphp: {
							3: { 1: 800 },
							2: { 1: 800 },
							1: { 1: 800 },
							4: { 1: 800 },
						},
						finalhp: {
							3: 160,
							2: 160,
							1: 160,
							4: 160,
						},
					},
					3: {
						currentBoss: 'Z',
						transport: null,
						maphp: {
							3: { 1: 5220 },
							2: { 1: 4620 },
							1: { 1: 4020 },
							4: { 1: 4020 },
						},
						finalhp: {
							3: 870,
							2: 770,
							1: 670,
							4: 670,
						},
					},
				},
				reward: { ships: [655], firstOnly: true },
				hiddenRoutes: {
					1: {
						images: [{ name: '3_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 3, [
							{ node: 'MapWide', type: 'PartClear', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, partToClear: 1 },
						], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '3_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 3, [
							{ node: 'B', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
							{ node: 'O1', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'B', 1:'A', 2:'A', 3:'S' } },
							{ node: 'O2', type: 'AirState', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'AS' } },
							{ node: 'O3', type: 'battle', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'A', 2:'A', 3:'S' } },
						], {
							partToUnlock: 2,
							routeUnlockRequired: 1
						})
					},
					3: {
						images: [{ name: '3_3.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 3, [
							{ node: 'MapWide', type: 'PartClear', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, partToClear: 2 },
							{ node: 'E', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
							{ node: 'G', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:1 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
							{ node: 'H', type: 'AirState', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'AS' } },
						], {
							partToUnlock: 3,
							routeUnlockRequired: 2
						})
					},
				},
				debuffRules: new ChGimmickList('debuff', 3, 3, [
					{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS', 1:'AS', 2:'AS', 3:'AS' } },
					{ node: 'E', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS', 1:'AS', 2:'AS', 3:'AS' } },
					{ node: 'K', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
					{ node: 'N', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
					{ node: 'O3', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
					{ node: 'W', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
				], {
					lastDanceOnly: true,
				}),
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
					chance: { 3: .15, 2: .15, 1: .15, 4: .15 },
					highAltitude: { 3: 1, 2: 1 },
					compName: 'AB',
					compDiff: {
						3: {'Hard 1':15,'Hard 2':15,'Hard 3':20,'Hard 4':25,'Hard 5':25},
						2: {'Medium 1':20,'Medium 2':30,'Medium 3':20,'Medium 4':30},
						1: {'Easy 1':20,'Easy 2':10,'Easy 3':25,'Easy 4':25,'Easy 5':20},
						4: {'Casual 1':30,'Casual 2':30,'Casual 3':40},
					},
				},
				additionalChecks: function(ships,errors) {
					if (getDiff() == 1 || getDiff() == 4 || CHDATA.config.disablelock) return;
					let lock = '50_4';
					let s = CHDATA.ships[CHDATA.fleets[1][0]];
					if (checkRoute(1) && s.lock != '50_4' && ['CA','CAV'].indexOf(SHIPDATA[s.masterId].type) != -1) lock = '50_6';
					if (CHDATA.fleets.combined) lock = '50_5';
					
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
						if (lock == '50_4') errors.push('Only ORANGE locks allowed.');
						else if (lock == '50_5') errors.push('Only YELLOW locks allowed.');
						else errors.push('Only GREY locks allowed.');
					}
				},
				startCheck: function(ships) {
					if (checkRoute(1) && !CHDATA.fleets.combined) {
						let s = CHDATA.ships[CHDATA.fleets[1][0]];
						if (s.lock != '50_4' && ['CA','CAV'].indexOf(SHIPDATA[s.masterId].type) != -1) {
							chGiveLockAllCurrent('50_6');
							return;
						}
					}
					CHDATA.sortie.s1 = true;
					if (CHDATA.fleets.combined) {
						chGiveLockAllCurrent('50_5');
					} else {
						chGiveLockAllCurrent('50_4');
					}
					return;
				},
				startCheckRule: [
					ChMultipleRulesRule([
						ChIsRouteUnlockedRule(1, 'Start2'),
						ChFleetTypeRule([0], 'Start2'),
						ChFlagshipDontHaveTag(['50_4'], 'Start2'),
						ChFlagshipTypeRoutingRule(['CA', 'CAV'], 'Start2')
					], 'AND', 'Start2', 'Start1'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 146,
						y: 126,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 118,
						y: 176,
						hidden: 1,
						rules: [
							ChFixedRoutingRule('P')
						]
					},
					'A': {
						type: 3,
						x: 195,
						y: 160,
						distance: 1,
						rules: [
							ChMultipleRulesRule([
								ChFleetTypeRule([1,2,3], 'C'),
								ChIsRouteUnlockedRule(2, 'C'),
							], 'AND', 'C'),
							
							ChFleetTypeRule([1,2,3], 'B'),

							// --- Single fleet only from here
							ChShipTypeRoutingRule(['aBB', 'aCV', 'CA', 'CAV', 'AkitsuMaru'], '>', 0, 'B'),

							ChMultipleRulesRule([
								ChDifficultyRule([4], 'C'),

								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['DD'], '>=', 5, 'C'),
									
									ChMultipleRulesRule([
										ChShipTypeRoutingRule(['CL'], '>', 0, 'C'),
										ChShipTypeRoutingRule(['DD'], '=', 4, 'C'),
									], 'AND', 'C'),

									ChEquipTypeRule({
										equipIds: [75]
									}, '>', 0, 0, 'C')
								], 'OR', 'C'),
							], 'AND', 'C'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['DD'], '>=', { 4:0, 1:4, 2:5, 3:5 }, 'C'),

								ChEquipTypeRule({
									equipIds: [75]
								}, '>', { 4:0, 1:2, 2:3, 3:4 }, { 4:0, 1:2, 2:3, 3:4 }, 'C')
							], 'AND', 'C'),

							ChDefaultRouteRule('B'),
						]
					},
					'B': {
						type: 1,
						x: 247,
						y: 198,
						distance: 2,
						raid: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.2 }, [61,69,51,52,54,115,1,6,7,28,29,31,32,164,165,474,479,481], 1.2),
						],
						compDiff: {
							3: {'Hard 1':15,'Hard 2':15,'Hard 3':20,'Hard 4':25,'Hard 5':25},
							2: {'Medium 1':20,'Medium 2':30,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':25,'Easy 5':25},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							// --- Not unlocked
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'D')),

							// --- Unlocked
							ChFleetTypeRule([1,2,3], 'D'),
							ChFleetBeenThroughRule('Start1', 'D'),
							ChSpeedRule('<=', 5, 'O'),
							ChShipTypeRoutingRule(['CL'], '=', 0, 'O'),
							ChShipTypeRoutingRule(['DD'], '=', 0, 'O'),
							ChDefaultRouteRule('O1'),
						]
					},
					'C': {
						type: 1,
						x: 260,
						y: 84,
						distance: 2,
						subonly: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.2 }, [55,17,19,47,135,424,456,459,671], 1.35),

							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [596,598], 1.25),

							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,422], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [22,138,18,42,43,46,49,50,97,405,457,458,485,528,632], 1.15),
						],
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':30,'Hard 4':30,'Hard 5':10,'Hard 6':10},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':20,'Medium 4':20,'Medium 5':15,'Medium 6':15},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':30,'Easy 4':30,'Easy 5':10,'Easy 6':10},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':15,'Casual 4':15},
						},
						compDiffF: {
							3: {'Hard 3':25,'Hard 4':25,'Hard 5':25,'Hard 6':25},
							2: {'Medium 5':50,'Medium 6':50},
							1: {'Easy 5':50,'Easy 6':50},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':15,'Casual 4':15},
						},
						rules: [
							ChAllShipMusteBeOfTypeRule(['DD'], 'G', 'E')
						]
					},
					'D': {
						type: 3,
						x: 294,
						y: 231,
						distance: 3,
						get end() {
							return !checkRoute(1);
						},
						rules: [
							ChFixedRoutingRule('O2')
						]
					},
					'E': {
						type: 1,
						x: 353,
						y: 84,
						distance: 3,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':30,'Medium 2':30,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						compDiffF: {
							3: {'Hard 4':40,'Hard 5':60},
							2: {'Medium 1':30,'Medium 2':30,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('G')
						]
					},
					'F': {
						type: 3,
						x: 364,
						y: 208,
						distance: 4,
						rules: [
							ChSelectRouteRule(['H','I']),
						]
					},
					'G': {
						type: 1,
						x: 383,
						y: 150,
						distance: 4,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':30,'Medium 2':30,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						rules: [
							// --- Not unlocked
							ChDontShowCompass(ChIsRouteNotUnlockedRule(2, 'F')),

							// --- Unlocked
							ChFleetTypeRule([1,2], 'Q'),
							ChDefaultRouteRule('F'),
						]
					},
					'H': {
						type: 1,
						x: 412,
						y: 306,
						distance: 5,
						raid: true,
						compDiff: {
							3: {'Hard 1':15,'Hard 2':15,'Hard 3':20,'Hard 4':25,'Hard 5':25},
							2: {'Medium 1':20,'Medium 2':30,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':25,'Easy 5':25},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':10,'Hard 4':35,'Hard 5':55},
							2: {'Medium 1':20,'Medium 2':30,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':25,'Easy 5':25},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('K')
						]
					},
					'I': {
						type: 3,
						x: 444,
						y: 245,
						distance: 5,
						rules: [
							// --- Not unlocked
							ChDontShowCompass(ChIsRouteNotUnlockedRule(3, 'J')),

							// --- Unlocked
							ChFleetTypeRule([1,2,3], 'J'),

							ChMultipleRulesRule([
								ChDifficultyRule([3], 'J'),
								ChOneShipNotOfTypeRule(['DD'], 'J')
							], 'AND', 'J'),

							ChEquipTypeRule({
								equipIds: [75]
							}, '>=', { 4:0, 1:3, 2:4, 3:5 }, { 4:0, 1:3, 2:4, 3:5 }, 'X'),

							ChDefaultRouteRule('J'),
						]
					},
					'J': {
						type: 1,
						x: 495,
						y: 268,
						distance: 5,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':30,'Medium 3':30},
							1: {'Easy 1':70,'Easy 2':30},
							4: {'Casual 1':70,'Casual 2':30},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':70,'Casual 2':30},
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'K': {
						type: 1,
						x: 504,
						y: 327,
						distance: 6,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':30,'Medium 2':35,'Medium 3':35},
							1: {'Easy 1':40,'Easy 2':30,'Easy 3':30},
							4: {'Casual 1':45,'Casual 2':35,'Casual 3':20},
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'L': {
						type: 1,
						x: 548,
						y: 291,
						distance: 6,
						night2: true,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':60,'Easy 2':40},
							4: {'Casual 1':60,'Casual 2':40},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 3':100},
						},
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'M': {
						type: 2,
						x: 602,
						y: 308,
						distance: 7,
						resource: 0,
						rules: [
							// --- Not unlocked
							ChDontShowCompass(ChIsRouteNotUnlockedRule(3, 'N')),

							// --- Unlocked
							ChFleetTypeRule([1,2,3], 'N'),

							ChLOSCheckIfRuleChecked({
								3: { 48: 'Z', 43: 'Y' },
								2: { 38: 'Z', 33: 'Y' },
								1: { 29: 'Z', 24: 'Y' },
								4: { 23: 'Z', 18: 'Y' },
							}, 3, ChDefaultRouteRule('Z'),)
						]
					},
					'N': {
						type: 1,
						x: 603,
						y: 268,
						distance: 7,
						boss: true,
						bonuses: [
							new ChShipIdsBonuses({ type: 'add' }, [55,17,19,47,135,424,456,459,671], 1.1),

							new ChShipClassBonuses({ type: 'add' }, 'class.IJN_CL', 1.15),

							new ChShipClassBonuses({ type: 'add' }, 'class.IJN_DD', 1.15),
						],
						compDiff: {
							3: {'Hard 2':40,'Hard 3':60},
							2: {'Medium 2':40,'Medium 3':60},
							1: {'Easy 2':45,'Easy 3':55},
							4: {'Casual 2':55,'Casual 3':45},
						},
						compDiffC: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						end: true
					},
					'O': {
						type: 1,
						x: 164,
						y: 245,
						distance: 2,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':15,'Hard 6':15},
							2: {'Medium 1':20,'Medium 2':15,'Medium 3':15,'Medium 4':10,'Medium 5':20,'Medium 6':20},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':25,'Easy 4':25,'Easy 5':15,'Easy 6':15},
							4: {'Casual 1':25,'Casual 2':15,'Casual 3':20,'Casual 4':20,'Casual 5':15,'Casual 6':5},
						},
						rules: [
							ChFixedRoutingRule('O1')
						]
					},
					'O1': {
						type: 1,
						x: 258,
						y: 297,
						distance: 3,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':25,'Hard 3':25,'Hard 4':25},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':25,'Medium 4':25,'Medium 5':10,'Medium 6':10},
							1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':25,'Easy 5':10,'Easy 6':10},
							4: {'Casual 1':30,'Casual 2':30,'Casual 3':15,'Casual 4':25},
						},
						rules: [
							ChFixedRoutingRule('O3')
						]
					},
					'O2': {
						type: 1,
						x: 353,
						y: 273,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':15,'Hard 2':15,'Hard 3':20,'Hard 4':25,'Hard 5':25},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':20,'Medium 4':40},
							1: {'Easy 1':20,'Easy 2':10,'Easy 3':25,'Easy 4':25,'Easy 5':20},
							4: {'Casual 1':25,'Casual 2':30,'Casual 3':45},
						},
						end: true
					},
					'O3': {
						type: 1,
						x: 369,
						y: 330,
						distance: 4,
						hidden: 1,
						bonuses: [
							new ChShipClassBonuses({ type: 'add' }, 'class.IJN_CL', 1.15),
	
							new ChShipClassBonuses({ type: 'add' }, 'class.IJN_DD', 1.15),
						],
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':30,'Medium 3':30},
							1: {'Easy 1':40,'Easy 2':20,'Easy 3':40},
							4: {'Casual 1':40,'Casual 2':20,'Casual 3':40},
						},
						end: true
					},
					'P': {
						type: 3,
						x: 178,
						y: 188,
						distance: 1,
						hidden: 1,
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'Q': {
						type: 3,
						x: 460,
						y: 152,
						distance: 5,
						hidden: 2,
						rules: [
							ChSelectRouteRule(['R','S']),
						]
					},
					'R': {
						type: 1,
						x: 502,
						y: 113,
						distance: 5,
						hidden: 2,
						subonly: true,
						bonuses: [
							// --- Reset
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),

							// --- Part 2 bonuses
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,422], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [71,72,85,86,110,111,116,124,125,20,122,132,133,134,167,168,169,170,181,186,190,453,454], 1.15),
	
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.1 }, [596,598], 1.1),
						],
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':15,'Hard 6':15},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':10,'Medium 4':10,'Medium 5':25,'Medium 6':25},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':25,'Easy 4':25,'Easy 5':15,'Easy 6':15},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':20,'Casual 4':15},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 5':45,'Hard 6':55},
							2: {'Medium 5':45,'Medium 6':55},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':25,'Easy 4':25,'Easy 5':15,'Easy 6':15},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':20,'Casual 4':15},
						},
						rules: [
							ChShipTypeRoutingRule(['CV', 'CVB'], '>', 2, 'T'),
							ChShipTypeRoutingRule(['aCV', 'AkitsuMaru'], '>', 4, 'T'),
							ChShipTypeRoutingRule(['aBB', 'aCV', 'AkitsuMaru'], '>', 6, 'T', 'V'),
						]
					},
					'S': {
						type: 1,
						x: 515,
						y: 177,
						distance: 5,
						hidden: 2,
						bonuses: [
							// --- Reset
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),

							// --- Part 2 bonuses
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,422], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [71,72,85,86,110,111,116,124,125,20,122,132,133,134,167,168,169,170,181,186,190,453,454], 1.15),
	
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.1 }, [596,598], 1.1),
						],
						compDiff: {
							3: {'Hard 1':35,'Hard 2':30,'Hard 3':35},
							2: {'Medium 1':30,'Medium 2':30,'Medium 3':40},
							1: {'Easy 1':40,'Easy 2':25,'Easy 3':35},
							4: {'Casual 1':35,'Casual 2':30,'Casual 3':35},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 1':55,'Hard 3':45},
							2: {'Medium 1':55,'Medium 3':45},
							1: {'Easy 1':55,'Easy 3':45},
							4: {'Casual 1':55,'Casual 3':45},
						},
						rules: [
							ChFixedRoutingRule('U')
						]
					},
					'T': {
						type: 1,
						x: 543,
						y: 69,
						distance: 5,
						hidden: 2,
						raid: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':60},
							2: {'Medium 1':45,'Medium 2':55},
							1: {'Easy 1':10,'Easy 2':30,'Easy 3':30,'Easy 4':30},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 2':35,'Hard 3':65},
							2: {'Medium 2':50,'Medium 3':50},
							1: {'Easy 1':10,'Easy 2':30,'Easy 3':30,'Easy 4':30},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('V')
						]
					},
					'U': {
						type: 1,
						x: 568,
						y: 201,
						distance: 6,
						hidden: 2,
						raid: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':60},
							2: {'Medium 1':45,'Medium 2':55},
							1: {'Easy 1':10,'Easy 2':30,'Easy 3':30,'Easy 4':30},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 2':35,'Hard 3':65},
							2: {'Medium 2':50,'Medium 3':50},
							1: {'Easy 1':10,'Easy 2':30,'Easy 3':30,'Easy 4':30},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							ChFleetTypeRule([2], 'V'),

							ChLOSCheckIfRuleChecked({
								3: { 48: 'W', 43: 'W1' },
								2: { 38: 'W', 33: 'W1' },
								1: { 29: 'W', 24: 'W1' },
								4: { 23: 'W', 18: 'W1' },
							}, 3, ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'W'),
								ChShipTypeRoutingRule(['aCV'], '<=', 3, 'W'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 2, 'W'),
								ChShipTypeRoutingRule(['CA', 'CAV'], '>=', 2, 'W'),
								ChShipTypeRoutingRule(['CL'], '>=', 2, 'W'),
								ChShipTypeRoutingRule(['DD'], '>=', 4, 'W'),
							], 'AND', 'W'),),

							ChDefaultRouteRule('V'),
						]
					},
					'V': {
						type: 1,
						x: 580,
						y: 137,
						distance: 6,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':30,'Hard 3':40},
							2: {'Medium 1':30,'Medium 2':30,'Medium 3':40},
							1: {'Easy 1':30,'Easy 2':30,'Easy 3':40},
							4: {'Casual 1':25,'Casual 2':35,'Casual 3':40},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 2':40,'Casual 3':60},
						},
						showLoSPlane: 'W',
						rules: [
							ChLOSRule({
								3: { 48: 'W', 43: 'W2' },
								2: { 38: 'W', 33: 'W2' },
								1: { 29: 'W', 24: 'W2' },
								4: { 23: 'W', 18: 'W2' },
							}, 3)
						]
					},
					'W': {
						type: 1,
						x: 659,
						y: 158,
						distance: 7,
						hidden: 2,
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
					'W1': {
						type: 3,
						x: 630,
						y: 231,
						distance: 7,
						hidden: 2,
						end: true
					},
					'W2': {
						type: 3,
						x: 652,
						y: 80,
						distance: 7,
						hidden: 2,
						end: true
					},
					'X': {
						type: 1,
						x: 532,
						y: 251,
						distance: 6,
						hidden: 3,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':30,'Medium 3':30},
							1: {'Easy 1':40,'Easy 2':30,'Easy 3':30},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							ChMultipleRulesRule([
								ChDifficultyRule([3], 'L'),
								ChSpeedRule('<=', 5, 'L')
							], 'AND', 'L', 'M'),
						]
					},
					'Y': {
						type: 3,
						x: 646,
						y: 274,
						distance: 8,
						hidden: 3,
						end: true
					},
					'Z': {
						type: 1,
						x: 641,
						y: 314,
						distance: 8,
						hidden: 3,
						boss: true,
						bonuses: [
							// -- Node
							new ChShipClassBonuses({ type: 'add' }, 'class.IJN_CL', 1.15),
	
							new ChShipClassBonuses({ type: 'add' }, 'class.IJN_DD', 1.15),

							// --- Debuff
							new ChDebuffBonuses({ type: 'add',on:[2003,2004,2005] }, 1.13),
						],
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compFPart: 3,
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
			4: {
				name: 'E-4',
				nameT: 'Rabaul Air Raid! Striking Force, Sortie!',
				fleetTypes: [0,1,2,3,7],
				bgmMap: 178,
				bgmDN: 179,
				bgmNN: 179,
				bgmDB: 180,
				bgmNB: 180,
				bossnode: ['L','V','Y','Z'],
				overrideBGM: {
					25: { bgmDB: 82, bgmNB: 82 },
				},
				giveLock: ['50_7','50_8','50_3','50_9'],
				checkLock: ['50_1','50_2','50_4','50_5','50_6'],
				lockSpecial: true,
				lbas: 3,
				parts: {
					1: {
						currentBoss: 'L',
						transport: null,
						maphp: {
							3: { 1: 3400 },
							2: { 1: 3200 },
							1: { 1: 3000 },
							4: { 1: 3000 },
						},
						finalhp: {
							3: 680,
							2: 640,
							1: 600,
							4: 600,
						},
					},
					2: {
						currentBoss: 'V',
						transport: 'V1',
						maphp: {
							3: { 1: 750 },
							2: { 1: 500 },
							1: { 1: 350 },
							4: { 1: 350 },
						},
						finalhp: null,
					},
					3: {
						currentBoss: 'Y',
						transport: null,
						maphp: {
							3: { 1: 4000 },
							2: { 1: 3500 },
							1: { 1: 3000 },
							4: { 1: 3000 },
						},
						finalhp: {
							3: 800,
							2: 700,
							1: 600,
							4: 600,
						},
					},
					4: {
						currentBoss: 'Z',
						transport: null,
						maphp: {
							3: { 1: 5700 },
							2: { 1: 5700 },
							1: { 1: 5700 },
							4: { 1: 5700 },
						},
						finalhp: {
							3: 950,
							2: 950,
							1: 950,
							4: 950,
						},
					},
				},
				hiddenRoutes: {
					1: {
						images: [{ name: '4_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 4, [
							{ node: 'MapWide', type: 'PartClear', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, partToClear: 1 },
						], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '4_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 4, [
							{ node: 'MapWide', type: 'PartClear', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, partToClear: 2 },
						], {
							partToUnlock: 2
						})
					},
					3: {
						images: [{ name: '4_3.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 4, [
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:2 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
							{ node: 'O', type: 'AirState', timesRequiredPerDiff: { 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 1:'AS', 2:'AS', 3:'AS' } },
							{ node: 'W', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:2 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'S' } },
							{ node: 'X', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:2 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'S' } },
						], {
							partToUnlock: 3,
							routeUnlockRequired: 2
						})
					},
					4: {
						images: [{ name: '4_4.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 4, [
							{ node: 'MapWide', type: 'PartClear', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, partToClear: 3 },
							{ node: 'L', type: 'battle', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'S' } },
						], {
							partToUnlock: 4,
							routeUnlockRequired: 3
						})
					},
				},
				debuffRules: new ChGimmickList('debuff', 4, 4, [
					{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS', 1:'AS', 2:'AS', 3:'AS' } },
					{ node: 'G', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS', 1:'AS', 2:'AS', 3:'AS' } },
					{ node: 'I', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
					{ node: 'L', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
					{ node: 'Y', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
					{ node: 'Z2', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
				], {
					lastDanceOnly: true,
				}),
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
					chance: { 3: .15, 2: .15, 1: .15, 4: .15 },
					highAltitude: { 3: 1, 2: 1 },
					compName: 'AB',
					compDiff: {
						3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
						2: {'Medium 1':20,'Medium 2':20,'Medium 3':20,'Medium 4':20,'Medium 5':20},
						1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
						4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
					},
				},
				additionalChecks: function(ships,errors) {
					if (getDiff() == 1 || getDiff() == 4 || CHDATA.config.disablelock) return;
					let lock = '50_7';
					if (CHDATA.fleets.combined == 1) lock = '50_3';
					if (CHDATA.fleets.combined == 2) lock = '50_9';
					if (CHDATA.fleets.combined == 3) lock = '50_8';
					
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
						let c = { '50_3': 'BLUE', '50_7': 'TEAL', '50_8': 'RED', '50_9': 'GREEN' }[lock];
						errors.push('Only ' + c + ' locks allowed.');
					}
				},
				startCheck: function(ships) {
					if (CHDATA.fleets.combined == 1) {
						chGiveLockAllCurrent('50_3');
					} else if (CHDATA.fleets.combined == 2) {
						chGiveLockAllCurrent('50_9');
					} else if (CHDATA.fleets.combined == 3) {
						chGiveLockAllCurrent('50_8');
					} else {
						chGiveLockAllCurrent('50_7');
					}
				},
				startBonus: [
					new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [50,55,66,67,68,69,70,72,124,138,485,528,675], 1.25),
					new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,62,65,54,137,28,29,42,43,46,135,165,168,190,453,479,481,671], 1.15),
				],
				startCheckRule: [
					// --- Not unlocked
					ChIsRouteNotUnlockedRule(1, 'Start1'),

					// --- Unlocked
					ChFleetTypeRule([3], 'Start2'),
					ChFleetTypeRule([2], 'Start3'),
					ChDefaultRouteRule('Start1'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 328,
						y: 152,
						rules: [
							ChMultipleRulesRule([
								ChFleetTypeRule([1,2,3], 'A'),
								ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 4, 'A'),
							], 'AND', 'A'),

							ChFleetTypeRule([1,2,3], 'B'),

							ChSpeedRule('<=', 5, 'A'),
							ChShipTypeRoutingRule(['aBB', 'aCV', 'AkitsuMaru'], '>', 0, 'A'),

							ChDefaultRouteRule('B'),
						]
					},
					'Start2': {
						type: 0,
						x: 257,
						y: 103,
						hidden: 1,
						rules: [
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['LHA', 'AO', 'AS'], '=', 2, 'R1'),
								ChShipTypeRoutingRule(['DD'], '=', 9, 'R1'),
							], 'AND', 'R1', 'Q'),
						]
					},
					'Start3': {
						type: 0,
						x: 301,
						y: 200,
						hidden: 1,
						rules: [
							ChFixedRoutingRule('M')
						]
					},
					'A': {
						type: 1,
						x: 390,
						y: 179,
						distance: 2,
						raid: true,
						compDiffPart: {
							1: {
								compDiff: {
									3: {'Hard 1':30,'Hard 2':50,'Hard 3':20},
									2: {'Medium 1':30,'Medium 2':50,'Medium 3':20},
									1: {'Easy 1':20,'Easy 2':25,'Easy 3':25,'Easy 4':30},
									4: {'Casual 1':65,'Casual 2':35},
								},
								compDiffF: {
									3: {'Hard 2':50,'Hard 3':50},
									2: {'Medium 2':50,'Medium 3':50},
									1: {'Easy 3':50,'Easy 4':50},
									4: {'Casual 1':65,'Casual 2':35},
								},
							},
							2: {
								compDiff: {
									3: {'Hard 1':30,'Hard 2':50,'Hard 3':20},
									2: {'Medium 1':30,'Medium 2':50,'Medium 3':20},
									1: {'Easy 1':20,'Easy 2':25,'Easy 3':25,'Easy 4':30},
									4: {'Casual 1':65,'Casual 2':35},
								},
							},
							3: {
								compDiff: {
									3: {'Hard 1':30,'Hard 2':50,'Hard 3':20},
									2: {'Medium 1':30,'Medium 2':50,'Medium 3':20},
									1: {'Easy 1':20,'Easy 2':25,'Easy 3':25,'Easy 4':30},
									4: {'Casual 1':65,'Casual 2':35},
								},
								compDiffF: {
									3: {'Hard 3':100},
									2: {'Medium 3':100},
									1: {'Easy 1':20,'Easy 2':25,'Easy 3':25,'Easy 4':30},
									4: {'Casual 1':65,'Casual 2':35},
								},
							},
							4: {
								compDiff: {
									3: {'Hard 1':30,'Hard 2':50,'Hard 3':20},
									2: {'Medium 1':30,'Medium 2':50,'Medium 3':20},
									1: {'Easy 1':20,'Easy 2':25,'Easy 3':25,'Easy 4':30},
									4: {'Casual 1':65,'Casual 2':35},
								},
							},
						},
						rules: [
							ChFixedRoutingRule('B')
						]
					},
					'B': {
						type: 1,
						x: 404,
						y: 109,
						distance: 2,
						subonly: true,
						compDiffPart: {
							1: {
								compDiff: {
									3: {'Hard 1':15,'Hard 2':15,'Hard 3':25,'Hard 4':25,'Hard 5':10,'Hard 6':10},
									2: {'Medium 1':10,'Medium 2':10,'Medium 3':15,'Medium 4':15,'Medium 5':25,'Medium 6':25},
									1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':25,'Easy 5':10,'Easy 6':10},
									4: {'Casual 1':35,'Casual 2':45,'Casual 3':10,'Casual 4':10},
								},
								compDiffF: {
									3: {'Hard 5':50,'Hard 6':50},
									2: {'Medium 1':50,'Medium 2':50},
									1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':25,'Easy 5':10,'Easy 6':10},
									4: {'Casual 1':35,'Casual 2':45,'Casual 3':10,'Casual 4':10},
								},
							},
							2: {
								compDiff: {
									3: {'Hard 1':15,'Hard 2':15,'Hard 3':25,'Hard 4':25,'Hard 5':10,'Hard 6':10},
									2: {'Medium 1':10,'Medium 2':10,'Medium 3':15,'Medium 4':15,'Medium 5':25,'Medium 6':25},
									1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':25,'Easy 5':10,'Easy 6':10},
									4: {'Casual 1':35,'Casual 2':45,'Casual 3':10,'Casual 4':10},
								},
							},
							3: {
								compDiff: {
									3: {'Hard 1':15,'Hard 2':15,'Hard 3':25,'Hard 4':25,'Hard 5':10,'Hard 6':10},
									2: {'Medium 1':10,'Medium 2':10,'Medium 3':15,'Medium 4':15,'Medium 5':25,'Medium 6':25},
									1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':25,'Easy 5':10,'Easy 6':10},
									4: {'Casual 1':35,'Casual 2':45,'Casual 3':10,'Casual 4':10},
								},
								compDiffF: {
									3: {'Hard 5':50,'Hard 6':50},
									2: {'Medium 1':50,'Medium 2':50},
									1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':25,'Easy 5':10,'Easy 6':10},
									4: {'Casual 1':35,'Casual 2':45,'Casual 3':10,'Casual 4':10},
								},
							},
							4: {
								compDiff: {
									3: {'Hard 1':15,'Hard 2':15,'Hard 3':25,'Hard 4':25,'Hard 5':10,'Hard 6':10},
									2: {'Medium 1':10,'Medium 2':10,'Medium 3':15,'Medium 4':15,'Medium 5':25,'Medium 6':25},
									1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':25,'Easy 5':10,'Easy 6':10},
									4: {'Casual 1':35,'Casual 2':45,'Casual 3':10,'Casual 4':10},
								},
							},
						},
						bonuses: [
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [71,85,86,110,111,116,125], 1.15),
							new ChShipClassBonuses({ type: 'set', accBonus: 1.15 }, [65,69,83,84,87,91,93,95,99,102,105,106,107,110], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [433], 1.15),
						],
						rules: [
							ChFleetTypeRule([1,2,3], 'C', 'D'),
						]
					},
					'C': {
						type: 3,
						x: 474,
						y: 110,
						distance: 3,
						rules: [
							ChSelectRouteRule(['D','F']),
						]
					},
					'D': {
						type: 1,
						x: 485,
						y: 154,
						distance: 3,
						raid: true,
						compDiff: {
							3: {'Hard 1':30,'Hard 2':50,'Hard 3':20},
							2: {'Medium 1':30,'Medium 2':50,'Medium 3':20},
							1: {'Easy 1':20,'Easy 2':25,'Easy 3':25,'Easy 4':30},
							4: {'Casual 1':75,'Casual 2':25},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 4':100},
							4: {'Casual 1':75,'Casual 2':25},
						},
						rules: [
							ChFleetTypeRule([1,2,3], 'H', 'E'),
						]
					},
					'E': {
						type: 1,
						x: 498,
						y: 208,
						distance: 4,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':15,'Hard 6':15},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':10,'Medium 4':10,'Medium 5':25,'Medium 6':25},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':25,'Easy 4':25,'Easy 5':15,'Easy 6':15},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':15,'Casual 4':15},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 5':50,'Hard 6':50},
							2: {'Medium 5':50,'Medium 6':50},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':25,'Easy 4':25,'Easy 5':15,'Easy 6':15},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':15,'Casual 4':15},
						},
						bonuses: [
							// --- Bonus reset (only start bonus)
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),

							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [50,55,66,67,68,69,70,72,124,138,485,528,675], 1.25),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,62,65,54,137,28,29,42,43,46,135,165,168,190,453,479,481,671], 1.15),
						],
						rules: [
							// --- Not unlocked
							ChDontShowCompass(ChIsRouteNotUnlockedRule(2, 'G')),

							// --- Unlocked
							ChMultipleRulesRule([
								ChAllShipMusteBeOfTypeRule(["DD", 'CL', 'CLT'], 'X2'),
								ChShipTypeRoutingRule(['CL'], '<=', 1, 'X2'),
							], 'AND', 'X2'),
						]
					},
					'F': {
						type: 1,
						x: 534,
						y: 110,
						distance: 4,
						raid: true,
						compDiff: {
							3: {'Hard 1':15,'Hard 2':50,'Hard 3':35},
							2: {'Medium 1':15,'Medium 2':50,'Medium 3':35},
							1: {'Easy 1':10,'Easy 2':25,'Easy 3':35,'Easy 4':30},
							4: {'Casual 1':55,'Casual 2':45},
						},
						get end() {
							return !checkRoute(3);
						},
						rules: [
							ChFixedRoutingRule('Y1')
						]
					},
					'G': {
						type: 1,
						x: 539,
						y: 216,
						distance: 5,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':30,'Medium 2':20,'Medium 3':20,'Medium 4':30},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 4':50,'Hard 5':50},
							2: {'Medium 3':100},
							1: {'Easy 4':100},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 552,
						y: 166,
						distance: 5,
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compDiffF: {
							3: {'Hard 2':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						get end() {
							return !checkRoute(3);
						},
						rules: [
							ChFixedRoutingRule('Y2')
						]
					},
					'I': {
						type: 1,
						x: 595,
						y: 229,
						distance: 6,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':60,'Easy 2':40},
							4: {'Casual 1':40,'Casual 2':45,'Casual 3':15},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 1':40,'Casual 2':45,'Casual 3':15},
						},
						rules: [
							ChShipTypeRoutingRule(['aCV', 'AkitsuMaru'], '>', 0, 'K'),

							ChMultipleRulesRule([
								ChSpeedRule('<=', 5, 'K'),
								ChShipTypeRoutingRule(['aBB'], '>', 0, 'K'),
							], 'AND', 'K'),

							ChShipTypeRoutingRule(['DD'], '<', 2, 'K'),

							ChLOSCheckIfRuleChecked({
								3: { 59: 'J', 55: 'K' },
								2: { 42: 'J', 38: 'K' },
								1: { 38: 'J', 34: 'K' },
								4: { 32: 'J', 28: 'K' },
							}, 3, ChMultipleRulesRule([
								ChShipTypeRoutingRule(['AV'], '>', 0, 'J'),
								ChShipTypeRoutingRule(['CA', 'CAV'], '>=', 3, 'J'),
							], 'OR', 'J')),

							ChLOSCheckIfRuleChecked({
								3: { 59: 'L', 55: 'K' },
								2: { 42: 'L', 38: 'K' },
								1: { 38: 'L', 34: 'K' },
								4: { 32: 'L', 28: 'K' },
							}, 3, ChDefaultRouteRule('L'),)
						]
					},
					'J': {
						type: 3,
						x: 601,
						y: 265,
						distance: 7,
						repair: true,
						rules: [
							// --- Not unlocked
							ChDontShowCompass(ChIsRouteNotUnlockedRule(4, 'L')),

							// --- Unlocked
							ChFleetTypeRule([1,2,3], 'Z'),
							ChDefaultRouteRule('L'),
						]
					},
					'K': {
						type: 1,
						x: 639,
						y: 230,
						distance: 7,
						night2: true,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: {'Medium 1':55,'Medium 2':45},
							1: {'Easy 1':50,'Easy 2':50},
							4: {'Casual 1':60,'Casual 2':40},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 3':100},
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'L': {
						type: 1,
						x: 676,
						y: 268,
						distance: 8,
						boss: true,
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 2':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						end: true
					},
					'M': {
						type: 1,
						x: 375,
						y: 245,
						distance: 2,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':25,'Hard 4':25,'Hard 5':5,'Hard 6':5},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':25,'Medium 4':25,'Medium 5':5,'Medium 6':5},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':10,'Easy 6':10},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':15,'Casual 4':15},
						},
						compFPart: 4,
						compDiffF: {
							3: {'Hard 5':50,'Hard 6':50},
							2: {'Medium 3':25,'Medium 4':25,'Medium 5':25,'Medium 6':25},
							1: {'Easy 5':50,'Easy 6':50},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':15,'Casual 4':15},
						},
						bonuses: [
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [78,79,92], 1.15),
						],
						rules: [
							ChShipTypeRoutingRule(['SS', 'SSV'], '>', 0, 'N'),
							ChShipTypeRoutingRule(['CV', 'CVB'], '>', 0, 'N'),
							ChShipTypeRoutingRule(['aCV'], '>=', 3, 'N'),
							ChShipTypeRoutingRule(['aBB', 'aCV', 'AkitsuMaru'], '>=', { 4:6, 1:6, 2:6, 3:5 }, 'N', 'O'),
						]
					},
					'N': {
						type: 1,
						x: 399,
						y: 331,
						distance: 4,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':45,'Hard 2':20,'Hard 3':35},
							2: {'Medium 1':45,'Medium 2':20,'Medium 3':35},
							1: {'Easy 1':45,'Easy 2':20,'Easy 3':35},
							4: {'Casual 1':45,'Casual 2':20,'Casual 3':35},
						},
						rules: [
							ChSpeedRule('>=', 10, 'P'),
							ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 7, 'P', 'O'),
						]
					},
					'O': {
						type: 1,
						x: 437,
						y: 283,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':20,'Easy 2':30,'Easy 3':30,'Easy 4':20},
							4: {'Casual 1':50,'Casual 2':25,'Casual 3':25},
						},
						compFPart: 4,
						compDiffF: {
							3: {'Hard 4':40,'Hard 5':60},
							2: {'Medium 3':50,'Medium 4':50},
							1: {'Easy 1':20,'Easy 2':30,'Easy 3':30,'Easy 4':20},
							4: {'Casual 1':50,'Casual 2':25,'Casual 3':25},
						},
						get end() {
							return !checkRoute(4);
						},
						rules: [
							ChFixedRoutingRule('Z1')
						]
					},
					'P': {
						type: 1,
						x: 456,
						y: 331,
						distance: 5,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':30},
							1: {'Easy 1':20,'Easy 2':30,'Easy 3':30,'Easy 4':20},
							4: {'Casual 1':50,'Casual 2':25,'Casual 3':25},
						},
						rules: [
							// --- Not unlocked
							ChDontShowCompass(ChIsRouteNotUnlockedRule(4, 'O')),

							// --- Unlocked
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'Z1'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '=', 0, 'Z1'),
							], 'AND', 'Z1'),

							ChDefaultRouteRule('O'),
						]
					},
					'Q': {
						type: 1,
						x: 172,
						y: 130,
						distance: 2,
						hidden: 1,
						subonly: true,
						bonuses: [
							// --- Damage
							new ChShipClassBonuses({ type: 'set', bonuslessShipsOnly: true }, 'class.IJN_CL', 1.1),
							new ChShipClassBonuses({ type: 'set', bonuslessShipsOnly: true }, 'class.IJN_DD', 1.1),

							// --- Evasion
							new ChShipClassBonuses({ type: 'add', flatEvBonus: 15 }, 'class.IJN_CL', 1),
							new ChShipClassBonuses({ type: 'add', flatEvBonus: 15 }, 'class.IJN_DD', 1),
						],
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':15,'Hard 6':15},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':10,'Medium 4':10,'Medium 5':25,'Medium 6':25},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':25,'Easy 4':25,'Easy 5':15,'Easy 6':15},
							4: {'Casual 1':35,'Casual 2':40,'Casual 3':10,'Casual 4':15},
						},
						rules: [
							ChShipTypeRoutingRule(['DD'], '>=', 11, 'Q1'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['DD'], '>=', 10, 'R'),
								ChSpeedRule('>=', 10, 'R')
							], 'AND', 'R', 'Q2'),
						]
					},
					'Q1': {
						type: 1,
						x: 116,
						y: 113,
						distance: 2,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':15,'Hard 6':15},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':10,'Medium 4':10,'Medium 5':25,'Medium 6':25},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':25,'Easy 4':25,'Easy 5':15,'Easy 6':15},
							4: {'Casual 1':35,'Casual 2':40,'Casual 3':10,'Casual 4':15},
						},
						rules: [
							ChFixedRoutingRule('Q2')
						]
					},
					'Q2': {
						type: 1,
						x: 82,
						y: 162,
						distance: 3,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':30,'Hard 4':20,'Hard 5':10},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':20,'Medium 5':10},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':15,'Casual 2':40,'Casual 3':45},
						},
						rules: [
							ChSpeedRule('<=', 5, 'R'),
							ChShipTypeRoutingRule(['aBB', 'CA', 'CAV'], '>', 0, 'R', 'S'),
						]
					},
					'R': {
						type: 1,
						x: 136,
						y: 178,
						distance: 3,
						hidden: 1,
						compDiffPart: {
							1: {
								compDiff: {
									3: {'Hard 2':60,'Hard 3':40},
									2: {'Medium 2':65,'Medium 3':35},
									1: {'Easy 2':55,'Easy 3':45},
									4: {'Casual 2':55,'Casual 3':45},
								},
							},
							2: {
								compDiff: {
									3: {'Hard 2':60,'Hard 3':40},
									2: {'Medium 2':65,'Medium 3':35},
									1: {'Easy 2':55,'Easy 3':45},
									4: {'Casual 2':55,'Casual 3':45},
								},
							},
							3: {
								compDiff: {
									3: {'Hard 1':100},
									2: {'Medium 1':100},
									1: {'Easy 1':100},
									4: {'Casual 1':100},
								},
							},
							4: {
								compDiff: {
									3: {'Hard 1':100},
									2: {'Medium 1':100},
									1: {'Easy 1':100},
									4: {'Casual 1':100},
								},
							},
						},
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'R1': {
						type: 1,
						x: 194,
						y: 176,
						distance: 2,
						hidden: 1,
						raid: true,
						bonuses: [
							// --- Damage
							new ChShipClassBonuses({ type: 'set', bonuslessShipsOnly: true }, 'class.IJN_CL', 1.1),
							new ChShipClassBonuses({ type: 'set', bonuslessShipsOnly: true }, 'class.IJN_DD', 1.1),

							// --- Evasion
							new ChShipClassBonuses({ type: 'add', flatEvBonus: 15 }, 'class.IJN_CL', 1),
							new ChShipClassBonuses({ type: 'add', flatEvBonus: 15 }, 'class.IJN_DD', 1),
						],
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':30,'Hard 4':20,'Hard 5':10},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':20,'Medium 5':10},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':15,'Casual 2':40,'Casual 3':45},
						},
						rules: [
							ChFixedRoutingRule('R')
						]
					},
					'S': {
						type: 1,
						x: 102,
						y: 223,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':20,'Medium 4':20,'Medium 5':20},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':40,'Easy 4':20},
							4: {'Casual 1':10,'Casual 2':40,'Casual 3':50},
						},
						rules: [
							ChFixedRoutingRule('T')
						]
					},
					'T': {
						type: 3,
						x: 161,
						y: 243,
						distance: 3,
						hidden: 1,
						rules: [
							ChSelectRouteRule(['U','V3']),
						]
					},
					'U': {
						type: 1,
						x: 143,
						y: 272,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':20,'Medium 4':20,'Medium 5':20},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':40,'Easy 4':20},
							4: {'Casual 1':10,'Casual 2':40,'Casual 3':50},
						},
						rules: [
							ChFixedRoutingRule('V1')
						]
					},
					'V': {
						type: 1,
						x: 181,
						y: 301,
						distance: 4,
						hidden: 1,
						boss: true,
						compDiff: {
							3: {'Hard 1':55,'Hard 2':15,'Hard 3':30},
							2: {'Medium 1':55,'Medium 2':15,'Medium 3':30},
							1: {'Easy 1':55,'Easy 2':15,'Easy 3':30},
							4: {'Casual 1':55,'Casual 2':15,'Casual 3':30},
						},
						end: true
					},
					'V1': {
						type: 2,
						x: 107,
						y: 281,
						distance: 5,
						hidden: 1,
						resource: 0,
						showLoSPlane: 'V',
						rules: [
							ChLOSRule({
								3: { 74: 'V', 66: 'V2' },
								2: { 64: 'V', 54: 'V2' },
								1: { 44: 'V', 34: 'V2' },
								4: { 34: 'V', 24: 'V2' },
							}, 3)
						]
					},
					'V2': {
						type: 3,
						x: 136,
						y: 311,
						distance: 5,
						hidden: 1,
						end: true
					},
					'V3': {
						type: 1,
						x: 241,
						y: 275,
						distance: 3,
						hidden: 1,
						setupSpecial: function() {
							for (let ship of getAllShips()) {
								ship.bonusEvFlat = null;
							}
						},
						bonuses: [
							// --- Reset ev bonus
							new ChCustomBonusEffects({ type: 'set' }, () => {
								for (let ship of getAllShips()) {
									ship.bonusEvFlat = null;
								}
							}, 'Evasion bonus reset')
						],
						compDiff: {
							3: {'Hard 1':35,'Hard 2':30,'Hard 3':35},
							2: {'Medium 1':35,'Medium 2':30,'Medium 3':35},
							1: {'Easy 1':30,'Easy 2':35,'Easy 3':35},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						get end() {
							return !checkRoute(2);
						},
						rules: [
							ChLOSCheckIfRuleChecked({
								3: { 22: 'W1', 13: 'W2' },
								2: { 15: 'W1', 6: 'W2' },
								1: { 6: 'W1', 2: 'W2' },
								4: { 1: 'W1', 0: 'W2' },
							}, 1, ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB'], '>', 0, 'W1'),
								ChShipTypeRoutingRule(['AO', 'LHA'], '>=', 2, 'W1'),
							], 'OR', 'W1'),),

							ChLOSCheckIfRuleChecked({
								3: { 22: 'W', 13: 'W2' },
								2: { 15: 'W', 6: 'W2' },
								1: { 6: 'W', 2: 'W2' },
								4: { 1: 'W', 0: 'W2' },
							}, 1, ChDefaultRouteRule('W'),)
						]
					},
					'W': {
						type: 1,
						x: 188,
						y: 345,
						distance: 5,
						hidden: 2,
						compDiffPart: {
							1: {
								compDiff: {
									3: {'Hard 1':100},
									2: {'Medium 1':100},
									1: {'Easy 1':100},
									4: {'Casual 1':100},
								},
							},
							2: {
								compDiff: {
									3: {'Hard 1':100},
									2: {'Medium 1':100},
									1: {'Easy 1':100},
									4: {'Casual 1':100},
								},
							},
							3: {
								compDiff: {
									3: {'Hard 1':100},
									2: {'Medium 1':100},
									1: {'Easy 1':100},
									4: {'Casual 1':100},
								},
							}, 
							4: {
								compDiff: {
									3: {'Hard 2':100},
									2: {'Medium 2':100},
									1: {'Easy 2':100},
									4: {'Casual 2':100},
								},
							},
						},
						end: true
					},
					'W1': {
						type: 1,
						x: 268,
						y: 330,
						distance: 4,
						hidden: 2,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':20,'Medium 4':20,'Medium 5':20},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':40,'Easy 4':20},
							4: {'Casual 1':10,'Casual 2':40,'Casual 3':50},
						},
						rules: [
							ChFixedRoutingRule('W')
						]
					},
					'W2': {
						type: 3,
						x: 321,
						y: 303,
						distance: 3,
						hidden: 2,
						end: true
					},
					'X': {
						type: 1,
						x: 532,
						y: 252,
						distance: 5,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':65,'Hard 2':10,'Hard 3':25},
							2: {'Medium 1':65,'Medium 2':10,'Medium 3':25},
							1: {'Easy 1':65,'Easy 2':10,'Easy 3':25},
							4: {'Casual 1':65,'Casual 2':10,'Casual 3':25},
						},
						end: true
					},
					'X1': {
						type: 3,
						x: 434,
						y: 222,
						distance: 3,
						hidden: 2,
						end: true
					},
					'X2': {
						type: 1,
						x: 480,
						y: 263,
						distance: 4,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':30,'Medium 3':30},
							1: {'Easy 1':40,'Easy 2':30,'Easy 3':30},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							ChLOSCheckIfRuleChecked({
								3: { 64: 'X3', 59: 'X1' },
								2: { 48: 'X3', 43: 'X1' },
								1: { 37: 'X3', 32: 'X1' },
								4: { 32: 'X3', 27: 'X1' },
							}, 3, ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CLT'], '>', 0, 'X3'),
								ChSpeedRule('<=', 5, 'X3')
							], 'OR', 'X3'),),

							ChLOSCheckIfRuleChecked({
								3: { 64: 'X', 59: 'X1' },
								2: { 48: 'X', 43: 'X1' },
								1: { 37: 'X', 32: 'X1' },
								4: { 32: 'X', 27: 'X1' },
							}, 3, ChDefaultRouteRule('X'),),
						]
					},
					'X3': {
						type: 1,
						x: 510,
						y: 290,
						distance: 5,
						hidden: 2,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':30,'Medium 2':20,'Medium 3':20,'Medium 4':30},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('X')
						]
					},
					'Y': {
						type: 1,
						x: 654,
						y: 103,
						distance: 7,
						hidden: 3,
						boss: true,
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 2':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						end: true
					},
					'Y1': {
						type: 1,
						x: 584,
						y: 87,
						distance: 6,
						hidden: 3,
						compDiff: {
							3: {'Hard 1':60,'Hard 2':40},
							2: {'Medium 1':60,'Medium 2':40},
							1: {'Easy 1':60,'Easy 2':40},
							4: {'Casual 1':60,'Casual 2':40},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 1':50,'Casual 3':50},
						},
						rules: [
							ChLOSCheckIfRuleChecked({
								3: { 90: 'Y2', 84: 'Y3' },
								2: { 70: 'Y2', 64: 'Y3' },
								1: { 60: 'Y2', 54: 'Y3' },
								4: { 50: 'Y2', 44: 'Y3' },
							}, 3, ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 5, 'Y2'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 2, 'Y2'),
							], 'OR', 'Y2'),),

							ChLOSCheckIfRuleChecked({
								3: { 90: 'H', 84: 'Y3' },
								2: { 70: 'H', 64: 'Y3' },
								1: { 60: 'H', 54: 'Y3' },
								4: { 50: 'H', 44: 'Y3' },
							}, 3, ChDefaultRouteRule('H'),)
						]
					},
					'Y2': {
						type: 1,
						x: 612,
						y: 177,
						distance: 6,
						hidden: 3,
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 2':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						rules: [
							ChLOSCheckIfRuleChecked({
								3: { 110: 'Y5', 100: 'Y4' },
								2: { 90: 'Y5', 80: 'Y4' },
								1: { 80: 'Y5', 70: 'Y4' },
								4: { 70: 'Y5', 60: 'Y4' },
							}, 3, ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 5, 'Y5')),
							
							ChLOSCheckIfRuleChecked({
								3: { 110: 'Y5', 100: 'Y4' },
								2: { 90: 'Y5', 80: 'Y4' },
								1: { 80: 'Y5', 70: 'Y4' },
								4: { 70: 'Y5', 60: 'Y4' },
							}, 3, ChShipTypeRoutingRule(['CV', 'CVB'], '>=', 4, 'Y5')),

							ChLOSCheckIfRuleChecked({
								3: { 110: 'Y5', 100: 'Y4' },
								2: { 90: 'Y5', 80: 'Y4' },
								1: { 80: 'Y5', 70: 'Y4' },
								4: { 70: 'Y5', 60: 'Y4' },
							}, 3, ChMultipleRulesRule([
								ChSpeedRule('<=', 5, 'Y5'),

								ChMultipleRulesRule([
									ChShipTypeRoutingRule(['CV', 'CVB'], '>=', 3, 'Y5'),
									ChShipTypeRoutingRule(['DD'], '<', 3, 'Y5'),
								], 'OR', 'Y5'),

							], 'AND', 'Y5'),),

							ChLOSCheckIfRuleChecked({
								3: { 110: 'Y', 100: 'Y4' },
								2: { 90: 'Y', 80: 'Y4' },
								1: { 80: 'Y', 70: 'Y4' },
								4: { 70: 'Y', 60: 'Y4' },
							}, 3, ChDefaultRouteRule('Y'),)
						]
					},
					'Y3': {
						type: 3,
						x: 630,
						y: 66,
						distance: 7,
						hidden: 3,
						end: true
					},
					'Y4': {
						type: 3,
						x: 676,
						y: 187,
						distance: 7,
						hidden: 3,
						end: true
					},
					'Y5': {
						type: 1,
						x: 681,
						y: 148,
						distance: 7,
						hidden: 3,
						compDiff: {
							3: {'Hard 1':25,'Hard 2':75},
							2: {'Medium 1':35,'Medium 2':65},
							1: {'Easy 1':35,'Easy 2':65},
							4: {'Casual 1':35,'Casual 2':65},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 3':100},
						},
						rules: [
							ChFixedRoutingRule('Y')
						]
					},
					'Z': {
						type: 1,
						x: 638,
						y: 304,
						distance: 8,
						hidden: 4,
						boss: true,
						friendFleetWaves: {
							1: {
								friendFleet: ['E4-1','E4-2','E4-4','E4-6','E4-6'],
								friendFleetS: ['E4-10','E4-11','E4-11','E4-14','E4-16','E4-16'],
							},
							2: {
								friendFleet: ['E4-1','E4-2','E4-4','E4-3','E4-3','E4-5','E4-5','E4-9','E4-9'],
								friendFleetS: ['E4-7','E4-7','E4-8','E4-8','E4-12','E4-13','E4-13','E4-15','E4-15','E4-15','E4-17','E4-17','E4-17','E4-18','E4-18','E4-18','E4-19','E4-19','E4-19'],
							},
						},
						bonuses: [
							// --- Reset
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),

							// --- Map bonus
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [50,55,66,67,68,69,70,72,124,138,485,528,675], 1.25),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,62,65,54,137,28,29,42,43,46,135,165,168,190,453,479,481,671], 1.15),

							// --- Part 3 bonus
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [78,79,92], 1.15),

							// --- Node bonus
							new ChShipIdsBonuses({ type: 'add' }, [78,79,92], 1.1),
							new ChShipClassBonuses({ type: 'add', accBonus: 1.15 }, [65,69,83,84,87,91,93,95,99,102,105,106,107,110], 1.25),

							// --- Debuff bonus
							new ChDebuffBonuses({ type: 'add',on:[1968,1969,1970] }, 1.175),
						],
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compFPart: 4,
						compDiffF: {
							3: {'Hard 2':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						end: true
					},
					'Z1': {
						type: 1,
						x: 514,
						y: 331,
						distance: 6,
						hidden: 4,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':25,'Hard 3':25},
							2: {'Medium 1':50,'Medium 2':25,'Medium 3':25},
							1: {'Easy 1':50,'Easy 2':25,'Easy 3':25},
							4: {'Casual 1':50,'Casual 2':25,'Casual 3':25},
						},
						rules: [
							ChFixedRoutingRule('Z2')
						]
					},
					'Z2': {
						type: 1,
						x: 567,
						y: 320,
						distance: 7,
						hidden: 4,
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compFPart: 4,
						compDiffF: {
							3: {'Hard 2':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						rules: [
							ChLOSCheckIfRuleChecked({
								3: { 100: 'J', 90: 'Z3' },
								2: { 90: 'J', 80: 'Z3' },
								1: { 80: 'J', 70: 'Z3' },
								4: { 70: 'J', 60: 'Z3' },
							}, 3, ChShipIdsRoutingRule([187, 450], '>', 0, 'J')),

							ChLOSCheckIfRuleChecked({
								3: { 100: 'Z', 90: 'Z3' },
								2: { 90: 'Z', 80: 'Z3' },
								1: { 80: 'Z', 70: 'Z3' },
								4: { 70: 'Z', 60: 'Z3' },
							}, 3, ChDefaultRouteRule('Z'),)
						]
					},
					'Z3': {
						type: 3,
						x: 666,
						y: 343,
						distance: 8,
						hidden: 4,
						end: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Second Night Battle off Lunga Point',
				fleetTypes: [0,1,2,3,7],
				bgmMap: 176,
				bgmDN: 180,
				bgmNN: 180,
				bgmDB: 181,
				bgmNB: 181,
				bossnode: ['J','V','Z'],
				overrideBGM: {
					10: { bgmDB: 46, bgmNB: 46 },
					22: { bgmDB: 159, bgmNB: 159 },
				},
				giveLock: ['50_4','50_6','50_9'],
				checkLock: ['50_1','50_2','50_3','50_5','50_7','50_8'],
				lockSpecial: true,
				lbas: 3,
				lbasSortie: 1,
				parts: {
					1: {
						currentBoss: 'J',
						maphp: {
							3: { 1: 2400 },
							2: { 1: 2400 },
							1: { 1: 2400 },
							4: { 1: 400 },
						},
						finalhp: {
							3: 480,
							2: 480,
							1: 480,
							4: 80,
						},
					},
					2: {
						currentBoss: 'V',
						maphp: {
							3: { 1: 5880 },
							2: { 1: 5880 },
							1: { 1: 5880 },
							4: { 1: 5880 },
						},
						finalhp: {
							3: 980,
							2: 980,
							1: 980,
							4: 980,
						},
					},
					3: {
						currentBoss: 'Z',
						maphp: {
							3: { 1: 6720 },
							2: { 1: 6720 },
							1: { 1: 6720 },
							4: { 1: 6720 },
						},
						finalhp: {
							3: 960,
							2: 960,
							1: 960,
							4: 960,
						},
					},
				},
				reward: { ships: [598], firstOnly: true },
				hiddenRoutes: {
					1: {
						images: [{ name: '5_1.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 5, [
							{ node: 'MapWide', type: 'PartClear', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, partToClear: 1 },
						], {
							partToUnlock: 1
						})
					},
					2: {
						images: [{ name: '5_2.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 5, [
							{ node: 'MapWide', type: 'PartClear', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, partToClear: 2 },
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 3:2 }, ranksRequiredPerDiff: { 3:'AS' } },
							{ node: 'B', type: 'AirState', timesRequiredPerDiff: { 3:2 }, ranksRequiredPerDiff: { 3:'AS' } },
							{ node: 'U', type: 'battle', timesRequiredPerDiff: { 4:2, 1:2, 2:2, 3:2 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
						], {
							partToUnlock: 2,
							routeUnlockRequired: 1
						})
					},
					3: {
						images: [{ name: '5_3.png', x: 0, y: 0 }],
						unlockRules: new ChGimmickList('mapPart', null, 5, [
							{ node: 'AB', type: 'AirState', timesRequiredPerDiff: { 2:2, 3:2 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
							{ node: 'B', type: 'AirState', timesRequiredPerDiff: { 2:1, 3:2 }, ranksRequiredPerDiff: { 2:'AS', 3:'AS' } },
							{ node: 'S', type: 'battle', timesRequiredPerDiff: { 3:2 }, ranksRequiredPerDiff: { 3:'S' } },
							{ node: 'U', type: 'battle', timesRequiredPerDiff: { 1:1, 2:1, 3:2 }, ranksRequiredPerDiff: { 1:'A', 2:'A', 3:'A' } },
							{ node: 'V', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:2 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
							{ node: 'Y', type: 'battle', timesRequiredPerDiff: { 4:2, 1:2, 2:2, 3:2 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
						], {
							partToUnlock: 3,
							routeUnlockRequired: 2
						})
					},
				},
				debuffRules: new ChGimmickList('debuff', 3, 5, [
					{ node: 'B', type: 'AirState', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'AS', 1:'AS', 2:'AS', 3:'AS' } },
					{ node: 'H', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
					{ node: 'J', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
					{ node: 'N', type: 'AirState', timesRequiredPerDiff: { 3:1 }, ranksRequiredPerDiff: { 3:'AS' } },
					{ node: 'U', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
					{ node: 'V', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'A', 1:'A', 2:'A', 3:'A' } },
					{ node: 'V1', type: 'battle', timesRequiredPerDiff: { 4:1, 1:1, 2:1, 3:1 }, ranksRequiredPerDiff: { 4:'S', 1:'S', 2:'S', 3:'S' } },
				], {
					lastDanceOnly: true,
				}),
				enemyRaid: {
					maxNum: { 3: 1, 2: 1, 1: 1, 4: 1 },
					chance: { 3: .15, 2: .15, 1: .15, 4: .15 },
					highAltitude: { 3: 1, 2: 1 },
					compName: 'AB',
					compDiff: {
						3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
						2: {'Medium 1':20,'Medium 2':20,'Medium 3':20,'Medium 4':20,'Medium 5':20},
						1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
						4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
					},
				},
				additionalChecks: function(ships,errors) {
					if (getDiff() == 1 || getDiff() == 4 || CHDATA.config.disablelock) return;
					let lock = '50_9';
					if (!CHDATA.fleets.combined) {
						lock = '50_6';
						if (ships.DD + ships.CL + ships.CLT >= ships.total && ships.CL <= 1 && ships.DD && ships.CLT <= 3) lock = '50_4';
					}
					
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
						let c = { '50_4': 'ORANGE', '50_6': 'GREY', '50_9': 'GREEN' }[lock];
						errors.push('Only ' + c + ' locks allowed.');
					}
				},
				startCheck: function(ships) {
					CHDATA.sortie.isTS = !CHDATA.fleets.combined && ships.DD + ships.CL + ships.CLT >= ships.total && ships.CL <= 1 && ships.DD && ships.CLT <= 3;
					if (CHDATA.fleets.combined) {
						chGiveLockAllCurrent('50_9');
					} else if (CHDATA.sortie.isTS) {
						chGiveLockAllCurrent('50_4');
					} else {
						chGiveLockAllCurrent('50_6');
					}
				},
				startCheckRule: [
					// --- Not unlocked
					ChIsRouteNotUnlockedRule(1, 'Start1'),

					// --- Unlocked
					ChFleetTypeRule([1,2,3], 'Start2'),

					ChMultipleRulesRule([
						ChIsRouteUnlockedRule(2, 'Start3'),
						
						// --- Torp squadron
						ChFleetTypeRule([0,7], 'Start3'),
						ChAllShipMusteBeOfTypeRule(['DD', 'CL', 'CLT'], 'Start3'),
						ChShipTypeRoutingRule(['CL'], '<=', 1, 'Start3'),
						ChShipTypeRoutingRule(['DD'], '>', 0, 'Start3'),
						ChShipTypeRoutingRule(['CLT'], '<=', 3, 'Start3'),
					], 'AND', 'Start3'),

					ChDefaultRouteRule('Start1'),
				],
				nodes: {
					'Start1': {
						type: 0,
						x: 52,
						y: 243,
						rules: [
							ChFixedRoutingRule('A')
						]
					},
					'Start2': {
						type: 0,
						x: 60,
						y: 83,
						hidden: 1,
						bonuses: [
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,62,65,137,42,43,46,168,190,453], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [54,28,29,165,479,481], 1.15),
	
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [138,485,528,675], 1.15),
	
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.13 }, [66,67,68,78,79,81,85,86,131,182,458], 1.13),
	
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.13 }, [55,17,19,47,135,424,456,459,671], 1.13),
						],
						rules: [
							ChFleetTypeRule([3], 'K'),
							ChSpeedRule('>=', 10, 'L'),

							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV'], '<=', 5, 'L'),
								ChShipTypeRoutingRule(['aBB'], '<=', 4, 'L'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '<=', 2, 'L'),
							], 'AND', 'L'),

							ChDefaultRouteRule('K'),
						]
					},
					'Start3': {
						type: 0,
						x: 158,
						y: 220,
						hidden: 2,
						rules: [
							ChShipTypeRoutingRule(['CLT'], '>', 0, 'A', 'B'),
						]
					},
					'A': {
						type: 1,
						x: 165,
						y: 296,
						distance: 2,
						subonly: true,
						bonuses: [
							// --- Reset
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),

							// --- Start 1 bonus
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [55,17,19,47,135,424,456,459,671], 1.25),

							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [61,69,51,52,115,1,6,7,31,32,164,474], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [54,28,29,165,479,481], 1.15),
						],
						compDiffPart: {
							1: {
								compDiff: {
									3: {'Hard 1':15,'Hard 2':15,'Hard 3':25,'Hard 4':25,'Hard 5':10,'Hard 6':10},
									2: {'Medium 1':10,'Medium 2':10,'Medium 3':15,'Medium 4':15,'Medium 5':25,'Medium 6':25},
									1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':25,'Easy 5':10,'Easy 6':10},
									4: {'Casual 1':40,'Casual 2':40,'Casual 3':10,'Casual 4':10},
								},
								compDiffF: {
									3: {'Hard 5':50,'Hard 6':50},
									2: {'Medium 1':50,'Medium 2':50},
									1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':25,'Easy 5':10,'Easy 6':10},
									4: {'Casual 1':40,'Casual 2':40,'Casual 3':10,'Casual 4':10},
								},
							},
							2: {
								compDiff: {
									3: {'Hard 1':15,'Hard 2':15,'Hard 3':25,'Hard 4':25,'Hard 5':10,'Hard 6':10},
									2: {'Medium 1':10,'Medium 2':10,'Medium 3':15,'Medium 4':15,'Medium 5':25,'Medium 6':25},
									1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':25,'Easy 5':10,'Easy 6':10},
									4: {'Casual 1':40,'Casual 2':40,'Casual 3':10,'Casual 4':10},
								},
							},
							3: {
								compDiff: {
									3: {'Hard 1':15,'Hard 2':15,'Hard 3':25,'Hard 4':25,'Hard 5':10,'Hard 6':10},
									2: {'Medium 1':10,'Medium 2':10,'Medium 3':15,'Medium 4':15,'Medium 5':25,'Medium 6':25},
									1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':25,'Easy 5':10,'Easy 6':10},
									4: {'Casual 1':40,'Casual 2':40,'Casual 3':10,'Casual 4':10},
								},
								compDiffF: {
									3: {'Hard 5':50,'Hard 6':50},
									2: {'Medium 1':50,'Medium 2':50},
									1: {'Easy 1':15,'Easy 2':15,'Easy 3':25,'Easy 4':25,'Easy 5':10,'Easy 6':10},
									4: {'Casual 1':40,'Casual 2':40,'Casual 3':10,'Casual 4':10},
								},
							},
						},
						rules: [
							ChFleetTypeRule([1,2,3], 'B'),
							ChShipTypeRoutingRule(['aCV'], '>', 0, 'B'),
							ChShipTypeRoutingRule(['aBB'], '>=', 3, 'B'),

							
							ChMultipleRulesRule([
								ChShipTypeRoutingRule(['CLT'], '>', 0, 'B'),
								
								// --- Torp squadron
								ChFleetTypeRule([0,7], 'B'),
								ChAllShipMusteBeOfTypeRule(['DD', 'CL', 'CLT'], 'B'),
								ChShipTypeRoutingRule(['CL'], '<=', 1, 'B'),
								ChShipTypeRoutingRule(['DD'], '>', 0, 'B'),
								ChShipTypeRoutingRule(['CLT'], '<=', 3, 'B'),
							], 'AND', 'B', 'D'),
						]
					},
					'B': {
						type: 1,
						x: 216,
						y: 215,
						distance: 2,
						raid: true,
						compDiffPart: {
							1: {
								compDiff: {
									3: {'Hard 1':20,'Hard 2':20,'Hard 3':25,'Hard 4':20,'Hard 5':15},
									2: {'Medium 1':20,'Medium 2':30,'Medium 3':20,'Medium 4':30},
									1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':30,'Easy 5':20},
									4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
								},
								compDiffF: {
									3: {'Hard 3':30,'Hard 4':30,'Hard 5':40},
									2: {'Medium 1':20,'Medium 2':30,'Medium 3':20,'Medium 4':30},
									1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':30,'Easy 5':20},
									4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
								},
							},
							2: {
								compDiff: {
									3: {'Hard 1':20,'Hard 2':20,'Hard 3':25,'Hard 4':20,'Hard 5':15},
									2: {'Medium 1':20,'Medium 2':30,'Medium 3':20,'Medium 4':30},
									1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':30,'Easy 5':20},
									4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
								},
							},
							3: {
								compDiff: {
									3: {'Hard 1':20,'Hard 2':20,'Hard 3':25,'Hard 4':20,'Hard 5':15},
									2: {'Medium 1':20,'Medium 2':30,'Medium 3':20,'Medium 4':30},
									1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':30,'Easy 5':20},
									4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
								},
								compDiffF: {
									3: {'Hard 3':30,'Hard 4':30,'Hard 5':40},
									2: {'Medium 1':20,'Medium 2':30,'Medium 3':20,'Medium 4':30},
									1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':30,'Easy 5':20},
									4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
								},
							},
						},
						rules: [
							// --- Not unlocked
							ChDontShowCompass(ChIsRouteNotUnlockedRule(1, 'C')),

							// --- Unlcoked
							ChFleetTypeRule([1,2,3], 'O'),
							ChDefaultRouteRule('C'),
						]
					},
					'C': {
						type: 1,
						x: 258,
						y: 228,
						distance: 3,
						subonly: true,
						setupSpecial: function() {
							let ships = getAllShips();
							
							if (CHDATA.sortie.isTS) {
								for (let ship of ships) {
									if (ship.type == 'DD') ship.bonusEvMod = 1.25;
								}
								for (let ship of FLEETS2[0].ships) {
									if (ship.mid == 1736 || ship.mid == 1737 || ship.mid == 1738) ship.TACC = 50;
								}
							}
						},
						bonuses: [
							// --- Reset
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),

							// --- Part 3 bonuses
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [55,17,19,47,135,424,456,459,671], 1.25),
	
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,62,65,137,42,43,46,168,190,453], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [54,28,29,165,479,481], 1.15),
	
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [138,485,528,675], 1.15),
						],
						compDiffPart: {
							1: {
								compDiff: {
									3: {'Hard 1':40,'Hard 2':40,'Hard 3':20},
									2: {'Medium 1':40,'Medium 2':40,'Medium 3':20},
									1: {'Easy 1':40,'Easy 2':40,'Easy 3':20},
									4: {'Casual 1':35,'Casual 2':50,'Casual 3':15},
								},
								compDiffF: {
									3: {'Hard 3':100},
									2: {'Medium 1':40,'Medium 2':40,'Medium 3':20},
									1: {'Easy 1':40,'Easy 2':40,'Easy 3':20},
									4: {'Casual 1':35,'Casual 2':50,'Casual 3':15},
								},
							},
							2: {
								compDiff: {
									3: {'Hard 1':40,'Hard 2':40,'Hard 3':20},
									2: {'Medium 1':40,'Medium 2':40,'Medium 3':20},
									1: {'Easy 1':40,'Easy 2':40,'Easy 3':20},
									4: {'Casual 1':35,'Casual 2':50,'Casual 3':15},
								},
							},
							3: {
								compDiff: {
									3: {'Hard 1':40,'Hard 2':40,'Hard 3':20},
									2: {'Medium 1':40,'Medium 2':40,'Medium 3':20},
									1: {'Easy 1':40,'Easy 2':40,'Easy 3':20},
									4: {'Casual 1':35,'Casual 2':50,'Casual 3':15},
								},
								compDiffF: {
									3: {'Hard 3':100},
									2: {'Medium 3':100},
									1: {'Easy 3':100},
									4: {'Casual 1':35,'Casual 2':50,'Casual 3':15},
								},
							},
						},
						rules: [
							// --- Not unlocked
							ChDontShowCompass(ChIsRouteNotUnlockedRule(2, 'D')),

							// --- Unlocked

							ChMultipleRulesRule([								
								// --- Torp squadron
								ChFleetTypeRule([0,7], 'W'),
								ChAllShipMusteBeOfTypeRule(['DD', 'CL', 'CLT'], 'W'),
								ChShipTypeRoutingRule(['CL'], '<=', 1, 'W'),
								ChShipTypeRoutingRule(['DD'], '>', 0, 'W'),
								ChShipTypeRoutingRule(['CLT'], '<=', 3, 'W'),
							], 'AND', 'W'),

							ChDefaultRouteRule('D'),
						]
					},
					'D': {
						type: 1,
						x: 270,
						y: 321,
						distance: 3,
						setupSpecial: function() {
							let ships = getAllShips();
							for (let ship of ships) ship.bonusEvMod = null;
						},
						bonuses: [
							// --- Reset
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),

							// --- Start 1 bonus
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [55,17,19,47,135,424,456,459,671], 1.25),

							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [61,69,51,52,115,1,6,7,31,32,164,474], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [54,28,29,165,479,481], 1.15),
						],
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':30,'Medium 3':30},
							1: {'Easy 1':40,'Easy 2':30,'Easy 3':30},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 3':100},
							1: {'Easy 3':100},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('E')
						]
					},
					'E': {
						type: 3,
						x: 380,
						y: 326,
						distance: 5,
						rules: [
							ChMultipleRulesRule([								
								// --- Torp squadron
								ChFleetTypeRule([0,7], 'G'),
								ChAllShipMusteBeOfTypeRule(['DD', 'CL', 'CLT'], 'G'),
								ChShipTypeRoutingRule(['CL'], '<=', 1, 'G'),
								ChShipTypeRoutingRule(['DD'], '>', 0, 'G'),
								ChShipTypeRoutingRule(['CLT'], '<=', 3, 'G'),
							], 'AND', 'G', 'F'),
						]
					},
					'F': {
						type: 1,
						x: 440,
						y: 280,
						distance: 6,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':20,'Hard 3':30},
							2: {'Medium 1':50,'Medium 2':20,'Medium 3':30},
							1: {'Easy 1':50,'Easy 2':20,'Easy 3':30},
							4: {'Casual 1':50,'Casual 2':20,'Casual 3':30},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':50,'Casual 2':20,'Casual 3':30},
						},
						rules: [
							ChShipTypeRoutingRule(['aCV'], '>', 0, 'G'),
							ChShipTypeRoutingRule(['DD'], '>=', 2, 'H'),
							ChDefaultRouteRule('G'),
						]
					},
					'G': {
						type: 1,
						x: 491,
						y: 332,
						distance: 7,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':25,'Medium 2':25,'Medium 3':25,'Medium 4':25},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 3':30,'Hard 4':30,'Hard 5':40},
							2: {'Medium 1':25,'Medium 2':25,'Medium 3':25,'Medium 4':25},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('I')
						]
					},
					'H': {
						type: 1,
						x: 514,
						y: 289,
						distance: 7,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':35,'Hard 3':25},
							2: {'Medium 1':40,'Medium 2':35,'Medium 3':25},
							1: {'Easy 1':40,'Easy 2':35,'Easy 3':25},
							4: {'Casual 1':40,'Casual 2':35,'Casual 3':25},
						},
						rules: [
							ChFixedRoutingRule('J1')
						]
					},
					'I': {
						type: 1,
						x: 582,
						y: 334,
						distance: 8,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':20,'Hard 3':30},
							2: {'Medium 1':50,'Medium 2':20,'Medium 3':30},
							1: {'Easy 1':50,'Easy 2':20,'Easy 3':30},
							4: {'Casual 1':50,'Casual 2':20,'Casual 3':30},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':50,'Casual 2':20,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('J1')
						]
					},
					'J': {
						type: 1,
						x: 684,
						y: 261,
						distance: 10,
						boss: true,
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compFPart: 1,
						compDiffF: {
							3: {'Hard 2':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						end: true
					},
					'J1': {
						type: 3,
						x: 608,
						y: 300,
						distance: 9,
						showLoSPlane: 'J',
						rules: [
							ChLOSRule({
								3: { 66: 'J', 61: 'J2' },
								2: { 54: 'J', 47: 'J2' },
								1: { 44: 'J', 34: 'J2' },
								4: { 29: 'J', 26: 'J2' },
							}, 3)
						]
					},
					'J2': {
						type: 3,
						x: 672,
						y: 330,
						distance: 10,
						end: true
					},
					'K': {
						type: 1,
						x: 139,
						y: 92,
						distance: 2,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':15,'Hard 2':15,'Hard 3':25,'Hard 4':25,'Hard 5':10,'Hard 6':10},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':10,'Medium 4':10,'Medium 5':25,'Medium 6':25},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':20,'Easy 4':20,'Easy 5':20,'Easy 6':20},
							4: {'Casual 1':40,'Casual 2':40,'Casual 3':10,'Casual 4':10},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 5':65,'Hard 6':35},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':10,'Medium 4':10,'Medium 5':25,'Medium 6':25},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':20,'Easy 4':20,'Easy 5':20,'Easy 6':20},
							4: {'Casual 1':40,'Casual 2':40,'Casual 3':10,'Casual 4':10},
						},
						rules: [
							ChFixedRoutingRule('L')
						]
					},
					'L': {
						type: 1,
						x: 146,
						y: 157,
						distance: 1,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':5,'Hard 2':5,'Hard 3':25,'Hard 4':25,'Hard 5':20,'Hard 6':20},
							2: {'Medium 1':25,'Medium 2':25,'Medium 3':5,'Medium 4':5,'Medium 5':20,'Medium 6':20},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':20,'Easy 4':20,'Easy 5':20,'Easy 6':20},
							4: {'Casual 1':35,'Casual 2':45,'Casual 3':10,'Casual 4':10},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 5':65,'Hard 6':35},
							2: {'Medium 1':65,'Medium 2':35},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':20,'Easy 4':20,'Easy 5':20,'Easy 6':20},
							4: {'Casual 1':35,'Casual 2':45,'Casual 3':10,'Casual 4':10},
						},
						rules: [
							ChFleetTypeRule([3], 'B', 'M'),
						]
					},
					'M': {
						type: 1,
						x: 300,
						y: 109,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':50},
							2: {'Medium 1':50,'Medium 2':50},
							1: {'Easy 1':50,'Easy 2':50},
							4: {'Casual 1':50,'Casual 2':50},
						},
						compFPart: 2,
						compDiffF: {
							3: {'Hard 3':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 1':50,'Casual 2':50},
						},
						rules: [
							ChFleetTypeRule([1], 'R'),

							ChShipTypeRoutingRule(['aCV'], '>', 0, 'Q'),
							ChShipTypeRoutingRule(['aBB'], '>=', 3, 'Q'),
							ChSpeedRule('<=', 5, 'Q'),

							ChShipTypeRoutingRule(['DD'], '>=', 4, 'N'),

							ChDefaultRouteRule('Q'),
						]
					},
					'N': {
						type: 1,
						x: 324,
						y: 141,
						distance: 4,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':25,'Hard 4':20,'Hard 5':15},
							2: {'Medium 1':20,'Medium 2':30,'Medium 3':20,'Medium 4':30},
							1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':30,'Easy 5':20},
							4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
						},
						rules: [
							ChFixedRoutingRule('O')
						]
					},
					'O': {
						type: 1,
						x: 354,
						y: 177,
						distance: 4,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':35,'Hard 2':35,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':20,'Medium 3':40},
							1: {'Easy 1':35,'Easy 2':30,'Easy 3':35},
							4: {'Casual 1':35,'Casual 2':35,'Casual 3':30},
						},
						rules: [
							ChFixedRoutingRule('S')
						]
					},
					'P': {
						type: 3,
						x: 405,
						y: 208,
						distance: 5,
						hidden: 1,
						end: true
					},
					'Q': {
						type: 3,
						x: 411,
						y: 111,
						distance: 5,
						hidden: 1,
						rules: [
							ChSelectRouteRule(['R','U1']),
						]
					},
					'R': {
						type: 1,
						x: 435,
						y: 67,
						distance: 6,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':35,'Hard 2':30,'Hard 3':35},
							2: {'Medium 1':35,'Medium 2':35,'Medium 3':30},
							1: {'Easy 1':35,'Easy 2':30,'Easy 3':35},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						rules: [
							ChFleetTypeRule([2], 'U1'),
							ChSpeedRule('<=', 5, 'U1'),
							ChShipTypeRoutingRule(['aCV'], '>=', 4, 'U1'),
							ChShipTypeRoutingRule(['CV', 'CVB'], '>=', 3, 'U1', 'T'),
						]
					},
					'S': {
						type: 1,
						x: 453,
						y: 187,
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
						showLoSPlane: 'V',
						rules: [
							ChLOSRule({
								3: { 116: 'V', 106: 'P' },
								2: { 100: 'V', 90: 'P' },
								1: { 80: 'V', 70: 'P' },
								4: { 60: 'V', 50: 'P' },
							}, 3)
						]
					},
					'T': {
						type: 1,
						x: 509,
						y: 63,
						distance: 7,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':60},
							1: {'Easy 1':45,'Easy 2':55},
							4: {'Casual 1':40,'Casual 2':60},
						},
						rules: [
							ChFixedRoutingRule('U2')
						]
					},
					'U': {
						type: 1,
						x: 660,
						y: 67,
						distance: 10,
						hidden: 1,
						compDiff: {
							3: {'Hard 1':50,'Hard 2':50},
							2: {'Medium 1':50,'Medium 2':50},
							1: {'Easy 1':50,'Easy 2':50},
							4: {'Casual 1':50,'Casual 2':50},
						},
						end: true
					},
					'U1': {
						type: 1,
						x: 553,
						y: 111,
						distance: 8,
						hidden: 1,
						bonuses: [
							// --- Reset
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),

							// --- Node bonus
							new ChShipIdsBonuses({ type: 'add' }, [21,62,65,137,42,43,46,168,190,453], 1.2),
							new ChShipIdsBonuses({ type: 'add' }, [54,28,29,165,479,481], 1.2),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [54,28,29,165,479,481], null),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,62,65,137,42,43,46,168,190,453], null),
							
							new ChShipIdsBonuses({ type: 'add' }, [138,485,528,675], 1.2),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [138,485,528,675], null),
							
							new ChShipIdsBonuses({ type: 'add' }, [66,67,68,78,79,81,85,86,131,182,458], 1.2),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [66,67,68,78,79,81,85,86,131,182,458], null),
							
							new ChShipIdsBonuses({ type: 'add' }, [55,17,19,47,135,424,456,459,671], 1.2),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [55,17,19,47,135,424,456,459,671], null),
						],
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
						rules: [
							ChLOSCheckIfRuleChecked({
								3: { 116: 'U2', 106: 'U3' },
								2: { 100: 'U2', 90: 'U3' },
								1: { 80: 'U2', 70: 'U3' },
								4: { 60: 'U2', 50: 'U3' },
							}, 3, ChMultipleRulesRule([
								ChFleetTypeRule([2], 'U2'),
								ChShipTypeRoutingRule(['aCV'], '>', 0, 'U2'),
								ChShipTypeRoutingRule(['DD'], '>=', 3, 'U2'),
							], 'AND', 'U2'),),

							ChLOSCheckIfRuleChecked({
								3: { 116: 'T', 106: 'U3' },
								2: { 100: 'T', 90: 'U3' },
								1: { 80: 'T', 70: 'U3' },
								4: { 60: 'T', 50: 'U3' },
							}, 3, ChMultipleRulesRule([
								ChFleetTypeRule([2], 'T'),
								ChShipTypeRoutingRule(['aCV'], '>', 0, 'T'),
							], 'AND', 'T'),),

							ChLOSCheckIfRuleChecked({
								3: { 116: 'V2', 106: 'U3' },
								2: { 100: 'V2', 90: 'U3' },
								1: { 80: 'V2', 70: 'U3' },
								4: { 60: 'V2', 50: 'U3' },
							}, 3, ChMultipleRulesRule([
								ChFleetTypeRule([2], 'V2'),
								ChShipIdsRoutingRule([187, 450], '>', 0, 'V2'),
							], 'AND', 'V2'),),

							ChLOSCheckIfRuleChecked({
								3: { 116: 'V1', 106: 'U3' },
								2: { 100: 'V1', 90: 'U3' },
								1: { 80: 'V1', 70: 'U3' },
								4: { 60: 'V1', 50: 'U3' },
							}, 3, ChMultipleRulesRule([
								ChFleetTypeRule([2], 'V1'),
							], 'AND', 'V1'),),

							ChLOSCheckIfRuleChecked({
								3: { 116: 'T', 106: 'U3' },
								2: { 100: 'T', 90: 'U3' },
								1: { 80: 'T', 70: 'U3' },
								4: { 60: 'T', 50: 'U3' },
							}, 3, ChMultipleRulesRule([
								ChShipTypeRoutingRule(['aBB', 'aCV'], '>=', 5, 'T'),
								ChShipTypeRoutingRule(['CV', 'CVB'], '>=', 3, 'T'),
							], 'OR', 'T'),),

							ChLOSCheckIfRuleChecked({
								3: { 116: 'U2', 106: 'U3' },
								2: { 100: 'U2', 90: 'U3' },
								1: { 80: 'U2', 70: 'U3' },
								4: { 60: 'U2', 50: 'U3' },
							}, 3, ChDefaultRouteRule('U2'),),
						]
					},
					'U2': {
						type: 1,
						x: 580,
						y: 59,
						distance: 9,
						hidden: 1,
						bonuses: [
							// --- Reset
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),

							// --- Node bonus
							new ChShipIdsBonuses({ type: 'add' }, [21,62,65,137,42,43,46,168,190,453], 1.2),
							new ChShipIdsBonuses({ type: 'add' }, [54,28,29,165,479,481], 1.2),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [54,28,29,165,479,481], null),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,62,65,137,42,43,46,168,190,453], null),
							
							new ChShipIdsBonuses({ type: 'add' }, [138,485,528,675], 1.2),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [138,485,528,675], null),
							
							new ChShipIdsBonuses({ type: 'add' }, [66,67,68,78,79,81,85,86,131,182,458], 1.2),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [66,67,68,78,79,81,85,86,131,182,458], null),
							
							new ChShipIdsBonuses({ type: 'add' }, [55,17,19,47,135,424,456,459,671], 1.2),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [55,17,19,47,135,424,456,459,671], null),
						],
						compDiff: {
							3: {'Hard 1':50,'Hard 2':50},
							2: {'Medium 1':55,'Medium 2':45},
							1: {'Easy 1':55,'Easy 2':45},
							4: {'Casual 1':50,'Casual 2':50},
						},
						showLoSPlane: 'U',
						rules: [
							ChLOSRule({
								3: { 120: 'U', 110: 'U3' },
								2: { 100: 'U', 90: 'U3' },
								1: { 80: 'U', 70: 'U3' },
								4: { 60: 'U', 50: 'U3' },
							}, 3)
						]
					},
					'U3': {
						type: 3,
						x: 643,
						y: 107,
						distance: 10,
						hidden: 1,
						end: true
					},
					'V': {
						type: 1,
						x: 533,
						y: 196,
						distance: 7,
						hidden: 1,
						boss: true,
						friendFleetWaves: {
							1: {
								friendFleet: [],
								friendFleetS: ['E5V-1','E5V-2','E5V-2','E5V-3','E5V-3','E5V-4','E5V-4','E5V-4','E5V-5','E5V-5'],
							},
							2: {
								friendFleet: [],
								friendFleetS: ['E5V-6','E5V-7','E5V-8','E5V-9','E5V-9','E5V-10','E5V-10','E5V-11','E5V-11','E5V-12','E5V-12','E5V-13','E5V-14','E5V-14'],
							},
						},
						bonuses: [
							// --- Reset
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),
							
							// --- Part 2 bonus
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,62,65,137,42,43,46,168,190,453], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [54,28,29,165,479,481], 1.15),

							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [138,485,528,675], 1.15),

							new ChShipIdsBonuses({ type: 'set', accBonus: 1.13 }, [66,67,68,78,79,81,85,86,131,182,458], 1.13),

							new ChShipIdsBonuses({ type: 'set', accBonus: 1.13 }, [55,17,19,47,135,424,456,459,671], 1.13),

							// --- Node bonus 1
							new ChShipIdsBonuses({ type: 'add' }, [21,62,65,137,42,43,46,168,190,453], 1.2),
							new ChShipIdsBonuses({ type: 'add' }, [54,28,29,165,479,481], 1.2),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [54,28,29,165,479,481], null),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,62,65,137,42,43,46,168,190,453], null),
							
							new ChShipIdsBonuses({ type: 'add' }, [138,485,528,675], 1.2),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [138,485,528,675], null),
							
							new ChShipIdsBonuses({ type: 'add' }, [66,67,68,78,79,81,85,86,131,182,458], 1.2),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [66,67,68,78,79,81,85,86,131,182,458], null),
							
							new ChShipIdsBonuses({ type: 'add' }, [55,17,19,47,135,424,456,459,671], 1.2),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [55,17,19,47,135,424,456,459,671], null),

							// --- Node bonus 2
							new ChShipIdsBonuses({ type: 'add', accBonus: 1.15 }, [596,597,602,615,654,655], 1.33),
						],
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
					'V1': {
						type: 1,
						x: 544,
						y: 148,
						distance: 7,
						hidden: 1,
						bonuses: [
							// --- Reset
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),

							// --- Part 2 bonus
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,62,65,137,42,43,46,168,190,453], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [54,28,29,165,479,481], 1.15),

							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [138,485,528,675], 1.15),

							new ChShipIdsBonuses({ type: 'set', accBonus: 1.13 }, [66,67,68,78,79,81,85,86,131,182,458], 1.13),

							new ChShipIdsBonuses({ type: 'set', accBonus: 1.13 }, [55,17,19,47,135,424,456,459,671], 1.13),
						],
						compDiff: {
							3: {'Hard 1':35,'Hard 2':35,'Hard 3':30},
							2: {'Medium 1':35,'Medium 2':35,'Medium 3':30},
							1: {'Easy 1':40,'Easy 2':30,'Easy 3':30},
							4: {'Casual 1':35,'Casual 2':30,'Casual 3':35},
						},
						rules: [
							ChFixedRoutingRule('V')
						]
					},
					'V2': {
						type: 3,
						x: 585,
						y: 145,
						distance: 8,
						hidden: 1,
						repair: true,
						rules: [
							ChFixedRoutingRule('V')
						]
					},
					'W': {
						type: 3,
						x: 333,
						y: 212,
						distance: 4,
						hidden: 2,
						showLoSPlane: 'X',
						rules: [
							ChLOSRule({
								3: { 81: 'X', 70: 'P' },
								2: { 62: 'X', 55: 'P' },
								1: { 50: 'X', 42: 'P' },
								4: { 42: 'X', 36: 'P' },
							}, 3)
						]
					},
					'X': {
						type: 1,
						x: 422,
						y: 242,
						distance: 5,
						hidden: 2,
						bonuses: [
							// --- Evasion bonus
							
							new ChCustomBonusEffects({}, () => {
								let ships = getAllShips();

								for (let ship of ships) {
									ship.bonusEvMod = 1;
									if (!ship.bonusSpecial) continue;
									for (let bonus of ship.bonusSpecial) {
										ship.bonusEvMod *= bonus.mod;
									}
								}
							}, 'Evasion bonus'),
							
							new ChShipTypeBonuses({ type: 'add', evBonus: 1.35, debuffOnly: true }, ['DD'], 1),
							new ChShipTypeBonuses({ type: 'add', evBonus: 1.2, debuffOnly: true }, ['CLT', 'CL'], 1),
						],
						compDiff: {
							3: {'Hard 1':60,'Hard 2':20,'Hard 3':20},
							2: {'Medium 1':60,'Medium 2':20,'Medium 3':20},
							1: {'Easy 1':60,'Easy 2':20,'Easy 3':20},
							4: {'Casual 1':60,'Casual 2':20,'Casual 3':20},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':60,'Casual 2':20,'Casual 3':20},
						},
						rules: [
							// --- Not unlocked
							ChDontShowCompass(ChIsRouteNotUnlockedRule(3, 'Y')),

							// --- Unlocked
							ChMultipleRulesRule([
								ChSpeedRule('>=', 10, 'Z1'),
								ChShipTypeRoutingRule(['CLT'], '=', 0, 'Z1'),
							], 'AND', 'Z1'),

							ChDefaultRouteRule('Y'),
						],
					},
					'Y': {
						type: 1,
						x: 463,
						y: 212,
						distance: 6,
						hidden: 2,
						compDiff: {
							3: {'Hard 1':35,'Hard 2':33,'Hard 3':32},
							2: {'Medium 1':50,'Medium 2':25,'Medium 3':25},
							1: {'Easy 1':50,'Easy 2':25,'Easy 3':25},
							4: {'Casual 1':50,'Casual 2':25,'Casual 3':25},
						},
						get end() {
							return !checkRoute(3);
						},
						rules: [
							ChFixedRoutingRule('Z1')
						]
					},
					'Z': {
						type: 1,
						x: 579,
						y: 228,
						distance: 8,
						hidden: 3,
						boss: true,
						friendFleetWaves: {
							1: {
								friendFleet: ['E5Z-1','E5Z-2','E5Z-2','E5Z-3','E5Z-3','E5Z-4','E5Z-4','E5Z-4','E5Z-4'],
								friendFleetSX: ['E5Z-5','E5Z-6','E5Z-7','E5Z-8','E5Z-8'],
							},
							2: {
								friendFleet: ['E5Z-9','E5Z-10','E5Z-3','E5Z-4','E5Z-11','E5Z-11','E5Z-11','E5Z-13','E5Z-13','E5Z-13'],
								friendFleetSX: ['E5Z-12','E5Z-14','E5Z-14','E5Z-15','E5Z-15','E5Z-15','E5Z-15','E5Z-16','E5Z-16','E5Z-16','E5Z-16','E5Z-17','E5Z-17','E5Z-17','E5Z-17','E5Z-17','E5Z-17','E5Z-18','E5Z-18','E5Z-18','E5Z-18','E5Z-18'],
							},
						},
						bonuses: [
							// --- Reset
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),

							// --- Part 3 bonus
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.25 }, [55,17,19,47,135,424,456,459,671], 1.25),

							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [21,62,65,137,42,43,46,168,190,453], 1.15),
							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [54,28,29,165,479,481], 1.15),

							new ChShipIdsBonuses({ type: 'set', accBonus: 1.15 }, [138,485,528,675], 1.15),

							// --- Node bonus
							new ChShipIdsBonuses({ type: 'add', accBonus: 1.2 }, [55,17,19,47,135,424,456,459,671], 1.2),

							new ChShipIdsBonuses({ type: 'add', accBonus: 1.2 }, [21,62,65,137,42,43,46,168,190,453], 1.2),
							new ChShipIdsBonuses({ type: 'add', accBonus: 1.2 }, [54,28,29,165,479,481], 1.2),

							new ChShipIdsBonuses({ type: 'add', accBonus: 1.2 }, [138,485,528,675], 1.2),

							new ChShipIdsBonuses({ type: 'add', accBonus: 1.2 }, [596,597,602,615,654,655], 1.39),

							// --- Debuff bonus
							new ChDebuffBonuses({ type: 'add', on:[2009,2010,2011] }, 1.15),
							new ChShipClassBonuses({ type: 'add', debuffOnly: true }, 'class.IJN_CL', 1.2),
							new ChShipClassBonuses({ type: 'add', debuffOnly: true }, 'class.IJN_DD', 1.35),

							// --- Evasion bonus
							new ChCustomBonusEffects({}, () => {
								let ships = getAllShips(true);

								for (let ship of ships) {
									ship.bonusEvMod = 1;
									if (!ship.bonusSpecial) continue;
									for (let bonus of ship.bonusSpecial) {
										if (bonus.on) continue;
										ship.bonusEvMod *= bonus.mod;
									}
								}
								
								for (let ship of FLEETS2[0].combinedWith.ships) {
									if (ship.mid == 1951 || ship.mid == 1952) ship.TACC = 25;
								}
							}, 'Evasion bonus')
						],
						compDiff: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 2':100},
							2: {'Medium 2':100},
							1: {'Easy 2':100},
							4: {'Casual 2':100},
						},
						end: true
					},
					'Z1': {
						type: 1,
						x: 496,
						y: 228,
						distance: 7,
						hidden: 3,
						night2: true,
						bonuses: [
							// --- Reset
							new ChWholeFleetBonuses({ type: 'set', accBonus: 1 }, 1),

							// --- Node bonus
							new ChShipIdsBonuses({ type: 'add', accBonus: 1.3 }, [55,17,19,47,135,424,456,459,671], 1.3),

							new ChShipIdsBonuses({ type: 'add', accBonus: 1.2 }, [21,62,65,137,42,43,46,168,190,453], 1.2),
							new ChShipIdsBonuses({ type: 'add', accBonus: 1.2 }, [54,28,29,165,479,481], 1.2),

							new ChShipIdsBonuses({ type: 'add', accBonus: 1.2 }, [138,485,528,675], 1.2),
						],
						compDiff: {
							3: {'Hard 1':50,'Hard 2':25,'Hard 3':25},
							2: {'Medium 1':50,'Medium 2':25,'Medium 3':25},
							1: {'Easy 1':50,'Easy 2':25,'Easy 3':25},
							4: {'Casual 1':50,'Casual 2':25,'Casual 3':25},
						},
						compFPart: 3,
						compDiffF: {
							3: {'Hard 1':100},
							2: {'Medium 1':100},
							1: {'Easy 1':100},
							4: {'Casual 1':100},
						},
						rules: [
							ChShipTypeRoutingRule(['CLT'], '>', 0, 'Z2', 'Z'),
						]
					},
					'Z2': {
						type: 1,
						x: 523,
						y: 251,
						distance: 7,
						hidden: 3,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':25,'Hard 4':20,'Hard 5':15},
							2: {'Medium 1':20,'Medium 2':30,'Medium 3':20,'Medium 4':30},
							1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':30,'Easy 5':20},
							4: {'Casual 1':30,'Casual 2':50,'Casual 3':20},
						},
						rules: [
							ChFixedRoutingRule('Z')
						]
					},
				}
			}
		}
	}