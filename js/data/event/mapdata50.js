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
						unlock: function(debuff) {
							return CHDATA.event.maps[1].part >= 2;
						}
					},
					2: {
						images: [{ name: '1_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							return debuff.K;
						}
					},
					3: {
						images: [{ name: '1_3.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							return CHDATA.event.maps[1].part >= 3;
						}
					},
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV + ships.CVB) errors.push('No CV(B)');
				},
				applyBonus: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [];
						if ([22,28,165,642].indexOf(mid) != -1) {
							bonus.push({mod:1.25});
						}
						if ([20,25,35,532,641].indexOf(mid) != -1) {
							bonus.push({mod:1.15});
						}
						if ([77,87].indexOf(mid) != -1) {
							bonus.push({mod:1.1});
						}
						if (ship.type == 'DE') {
							bonus.push({mod:1.15});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonus.slice();
						}
					}
				},
				applyBonus2: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [];
						if ([16,38,41,49,50,135,410,425,452,484,527].indexOf(mid) != -1) {
							bonus.push({mod:1.25});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonus.slice();
						}
						if ([165,642].indexOf(mid) != -1) {
							ship.bonusSpecial.push({mod:1.25});
						}
					}
				},
				applyBonusJ: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						if ([77,87].indexOf(mid) != -1) {
							ship.bonusSpecial.push({mod:1.1});
						}
					}
				},
				applyBonusS: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						if ([22,28,165,642].indexOf(mid) != -1) {
							ship.bonusSpecial.push({mod:1.1});
						}
						if ([20,25,35,532,641].indexOf(mid) != -1) {
							ship.bonusSpecial = [{mod:1.25}];
						}
						if (ship.type == 'DE') {
							ship.bonusSpecial.push({mod:1.1});
						}
					}
				},
				startCheck: function(ships) {
					let historicals = [22,25,16,20,28,35,41,165,532,641,642];
					CHDATA.sortie.numHistorical = historicals.filter(id => isShipInList(ships.ids,id)).length;
					
					let s = getAllShips();
					this.applyBonus(s);
					
					if (checkRoute(2)) {
						if (ships.total <= 1) return 'Start1';
						if (ships.DD + ships.DE + ships.CL + ships.AV + ships.AO + ships.LHA < ships.total) return 'Start1';
						if (ships.CL + ships.AV + ships.AO + ships.LHA >= 2) return 'Start1';
						
						this.applyBonus2(s);
						return 'Start2';
					}
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 281,
						y: 69,
						routeC: function(ships) {
							if (ships.aBB + ships.aCV + ships.SS + ships.SSV) return 'C';
							if (ships.CA + ships.CAV >= 2) return 'C';
							if (ships.CL + ships.CT <= 0) return 'C';
							if (ships.CL + ships.CT + ships.CVL >= 3) return 'C';
							if (ships.DD + ships.DE <= 2) return 'C';
							if (checkRoute(3)) {
								let num = { 3: 3, 2: 2, 1: 1, 4: 0 }[getDiff()];
								if (CHDATA.sortie.numHistorical >= num) return 'E';
								if (ships.speed <= 5) return 'R';
								if (ships.AV) return 'R';
								if (ships.CL + ships.CT >= 2) return 'R';
							}
							return 'E';
						}
					},
					'Start2': {
						type: 0,
						x: 509,
						y: 189,
						hidden: 2,
						route: 'L'
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
						routeC: function(ships) {
							if (ships.aBB + ships.aCV + ships.AV >= 3) return 'B';
							if (ships.CL + ships.CT + ships.CLT > 2) return 'B';
							if (getDiff() != 4) {
								if (ships.speed <= 5) return 'B';
								if (CHDATA.sortie.numHistorical < 2) return 'B';
							}
							if (ships.CL && ships.DD + ships.DE >= 2) return 'D';
							return 'B';
						}
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
						route: 'D'
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
						routeC: function(ships) {
							if (ships.aBB + ships.aCV >= 2) return 'A';
							if (ships.SS + ships.SSV) return 'A';
							if (ships.CL + ships.CT + ships.CLT >= 3) return 'A';
							if (ships.DD + ships.DE < 2) return 'A';
							if (ships.CL <= 0) return 'A';
							if (ships.speed >= 10) return 'D';
							if (CHDATA.sortie.numHistorical >= num) return 'D';
							return 'A';
						}
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
						routeC: function(ships) {
							if (ships.aBB + ships.aCV >= 2) return 'F';
							if (ships.SS + ships.SSV) return 'F';
							if (ships.speed >= 10) return 'G';
							return 'F';
						}
					},
					'E': {
						type: 3,
						x: 256,
						y: 142,
						distance: 5,
						routeS: ['D','H']
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
						route: 'J'
					},
					'G': {
						type: 3,
						x: 313,
						y: 258,
						distance: 5,
						routeS: ['F','I']
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
						routeC: function(ships) {
							if (ships.CA + ships.CAV) return 'D';
							if (ships.CL + ships.CT + ships.CLT >= 3) return 'D';
							if (ships.speed <= 5 && ships.CL + ships.CT + ships.CLT >= 2) return 'D';
							return 'I';
						}
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
						routeC: function(ships) {
							this.showNoCompass = true;
							if (checkRoute(3)) {
								this.showNoCompass = false;
								let diff = getDiff();
								if (diff == 4) return 'S';
								if (ships.aBB + ships.aCV >= 2) return 'K';
								if (ships.DD + ships.DE <= 2) return 'K';
								if ((diff == 3 || diff == 2) && ships.CL <= 0) return 'K';
								if (diff == 3 && CHDATA.sortie.numHistorical < 2) return 'K';
								return 'S';
							}
							return 'K';
						}
					},
					'J': {
						type: 1,
						x: 181,
						y: 312,
						distance: 7,
						boss: true,
						setupSpecial: function() {
							MAPDATA[50].maps[1].applyBonusJ(getAllShips());
						},
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
						debuffGive: function() {
							CHDATA.event.maps[1].debuff.K = 1;
						},
						end: true
					},
					'L': {
						type: 3,
						x: 532,
						y: 227,
						distance: 1,
						hidden: 2,
						route: 'M'
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
						routeC: function(ships) {
							let diff = getDiff();
							if (diff == 1 || diff == 4) return 'O';
							if (ships.speed <= 5) return 'N';
							if (diff == 3 && ships.total >= 6) return 'N';
							return 'O';
						}
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
						route: 'O'
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
						route: 'P'
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
						route: 'Q'
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
						setupSpecial: function() {
							let ships = getAllShips(true);
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = null;
							MAPDATA[50].maps[1].applyBonus(ships);
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
						route: 'H'
					},
					'S': {
						type: 1,
						x: 397,
						y: 221,
						distance: 3,
						hidden: 3,
						setupSpecial: function() {
							MAPDATA[50].maps[1].applyBonusS(getAllShips());
						},
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
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.speed <= 5) return 'U';
							if (ships.aBB + ships.aCV) return 'U';
							if (ships.CA + ships.CAV + ships.CLT + ships.AV > 1) return 'U';
							if (ships.CA + ships.CAV + ships.CL > 2) return 'U';
							let diff = getDiff();
							if (diff == 3 && CHDATA.sortie.numHistorical < 3) return 'U';
							if (diff == 2 && CHDATA.sortie.numHistorical < 2) return 'U';
							this.showLoSPlane = 'V';
							let vals = {
								3: { 48: 'V', 43: 'U' },
								2: { 38: 'V', 33: 'U' },
								1: { 29: 'V', 24: 'U' },
								4: { 29: 'V', 24: 'U' },
							}[diff];
							let los = getELoS33(1,3);
							return checkELoS33(los,vals);
						}
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
						routeC: function(ships) {
							let vals = {
								3: { 41: 'V', 36: 'T' },
								2: { 33: 'V', 28: 'T' },
								1: { 23: 'V', 18: 'T' },
								4: { 23: 'V', 18: 'T' },
							}[getDiff()];
							let los = getELoS33(1,3);
							return checkELoS33(los,vals);
						}
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
						setupSpecial: function() {
							if (CHDATA.sortie.fleetFriend) {
								MAPDATA[50].maps[1].applyBonus(CHDATA.sortie.fleetFriend.ships);
								MAPDATA[50].maps[1].applyBonusS(CHDATA.sortie.fleetFriend.ships);
							}
						},
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
						unlock: function(debuff) {
							if (CHDATA.event.maps[2].part < 2) return false;
							let diff = getDiff();
							if (diff == 3) {
								return debuff.C && debuff.P >= 2;
							} else if (diff == 2) {
								return debuff.C && debuff.P;
							} else if (diff == 1) {
								return debuff.C;
							} else {
								return true;
							}
						}
					},
					2: {
						images: [{ name: '2_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							return CHDATA.event.maps[2].part >= 3;
						}
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
				applyBonus1: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [], bonusAcc = [];
						if ([22,154].indexOf(mid) != -1) {
							bonus.push({mod:1.35});
							bonusAcc.push({mod:1.25});
						}
						if (ship.type == 'SS' || ship.type == 'SSV' || ship.type == 'AS') {
							bonus.push({mod:1.35});
						}
						if ([4,16,20,21,34,41,52,56].indexOf(ship.sclass) != -1) {
							bonus.push({mod:1.25});
							bonusAcc.push({mod:1.25});
						}
						if ([1,5,10,12,18,22,23,28,30,38,54,66,101].indexOf(ship.sclass) != -1) {
							bonus.push({mod:1.15});
							bonusAcc.push({mod:1.15});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonusAcc;
						}
					}
				},
				applyBonus2: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [], bonusAcc = [];
						if ([22,154].indexOf(mid) != -1) {
							bonus.push({mod:1.35});
							bonusAcc.push({mod:1.25});
						}
						if (ship.type == 'SS' || ship.type == 'SSV' || ship.type == 'AS') {
							bonus.push({mod:1.35});
						}
						if ([21,71,72,85,86,110,111,116,124,125, 20,122,132,133,134,167,168,169,170,181,186,190,422,453,454].indexOf(mid) != -1) {
							bonus.push({mod:1.2});
							bonusAcc.push({mod:1.2});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonusAcc;
						}
					}
				},
				applyBonus3: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [], bonusAcc = [];
						if ([22,154].indexOf(mid) != -1) {
							bonus.push({mod:1.35});
							bonusAcc.push({mod:1.25});
						}
						if (ship.type == 'SS' || ship.type == 'SSV' || ship.type == 'AS') {
							bonus.push({mod:1.35});
						}
						if (ship.type == 'AS') {
							bonus.push({mod:1.1});
						}
						if ([1,5,10,12,18,22,23,28,30,38,54,66,101].indexOf(ship.sclass) != -1) {
							bonus.push({mod:1.15});
							bonusAcc.push({mod:1.15});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonusAcc;
						}
					}
				},
				applyBonusZ: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						if (mid == 191) {
							ship.bonusSpecial.push({mod:1.25});
						}
						if (mid == 483) {
							ship.bonusSpecial.push({mod:1.15});
						}
					}
				},
				startCheck: function(ships) {
					if (CHDATA.fleets.combined || ships.c.aCV + +isShipInList(ships.c.ids,161)) {
						chGiveLockAllCurrent('50_3');
						this.applyBonus2(getAllShips());
						return 'Start2';
					}
					let start = 'Start1';
					if (checkRoute(2)) {
						if (getDiff() == 4 && ships.c.CL >= 2 && ships.c.DD) start = 'Start3';
						if (ships.c.SS + ships.c.SSV) {
							if (ships.c.SS + ships.c.SSV >= ships.c.total) start = 'Start3';
							if (ships.c.AS) start = 'Start3';
							if (ships.c.CL + ships.c.CT) start = 'Start3';
							if (ships.c.DD >= 2) start = 'Start3';
							if (ships.c.aBB + ships.c.AR <= 0) start = 'Start3';
						}
					}
					chGiveLockAllCurrent('50_2');
					if (start == 'Start3') {
						this.applyBonus3(getAllShips());
					} else {
						this.applyBonus1(getAllShips());
					}
					return start;
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 91,
						y: 114,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 288,
						y: 75,
						route: 'G'
					},
					'Start3': {
						type: 0,
						x: 152,
						y: 246,
						routeC: function(ships) {
							if (ships.c.SS + ships.c.SSV >= ships.c.total) return 'W';
							if (ships.c.AS) return 'W';
							if (ships.c.aBB) return 'V';
							if (ships.c.CL && ships.c.DD >= 3) return 'W';
							return 'V';
						}
					},
					'A': {
						type: 3,
						x: 134,
						y: 153,
						distance: 1,
						route: 'B'
					},
					'B': {
						type: 1,
						x: 190,
						y: 202,
						distance: 2,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':20,'Hard 4':20,'Hard 5':20},
							2: {'Medium 1':30,'Medium 2':30,'Medium 3':20,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':20,'Easy 3':20,'Easy 4':20,'Easy 5':20},
							4: {'Casual 1':30,'Casual 2':40,'Casual 3':30},
						},
						routeC: function(ships) {
							if (ships.c.SS + ships.c.SSV >= ships.c.total) return 'D';
							if (ships.c.AV + ships.c.AO + ships.c.LHA && ships.c.CL + ships.c.DD >= 5 && ships.c.DD >= 4) return 'D';
							return 'E';
						}
					},
					'C': {
						type: 2,
						x: 250,
						y: 160,
						distance: 2,
						dropoff: true,
						resource: 2,
						amount: [60],
						debuffGive: function() {
							CHDATA.event.maps[2].debuff.C = 1;
						},
						end: true
					},
					'D': {
						type: 3,
						x: 255,
						y: 220,
						distance: 3,
						routeS: ['F','H']
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
						route: 'H'
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
						route: 'C'
					},
					'G': {
						type: 3,
						x: 371,
						y: 92,
						distance: 3,
						route: 'K'
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
						routeC: function(ships) {
							if (ships.c.SS + ships.c.SSV >= ships.c.total) return 'J';
							if (ships.c.DD >= 6) return 'J';
							if (ships.c.aBB) return 'I';
							if (ships.c.CL + ships.c.CT + ships.c.CLT >= 2) return 'I';
							if (getDiff() != 4) {
								if (ships.speed <= 5) return 'I';
								if (ships.c.CL + ships.c.CT <= 0) return 'I';
							}
							return 'J';
						}
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
						route: 'J'
					},
					'J': {
						type: 2,
						x: 443,
						y: 236,
						distance: 5,
						resource: 0,
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (ships.c.SS + ships.c.SSV >= ships.c.total) return 'Q';
							this.showLoSPlane = 'Q';
							let vals = {
								3: { 44: 'Q', 38: 'L' },
								2: { 34: 'Q', 28: 'L' },
								1: { 27: 'Q', 21: 'L' },
								4: { 23: 'Q', 17: 'L' },
							}[getDiff()];
							let los = getELoS33(1,3);
							return checkELoS33(los,vals);
						}
					},
					'K': {
						type: 1,
						x: 456,
						y: 110,
						distance: 4,
						raid: true,
						compDiff: {
							3: {'Hard 1':15,'Hard 2':15,'Hard 3':20,'Hard 4':25,'Hard 5':25},
							2: {'Medium 1':20,'Medium 2':30,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':25,'Easy 5':25},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (CHDATA.fleets.combined) {
								this.showLoSPlane = 'M';
								let los = getELoS33(1,3) + getELoS33(2,3);
								return checkELoS33(los,{ 27: 'M', 21: 'L' });
							} else {
								if (ships.c.CV + ships.c.CVB >= 3) return 'M';
								if (getDiff() == 3 && ships.c.aCV >= 4) return 'M';
								return 'N';
							}
						}
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
						route: 'N'
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
						routeC: function(ships) {
							if (ships.c.aBB <= 2 && (ships.speed >= 10 || ships.c.aBB + ships.c.aCV <= 5)) return 'P';
							return 'O';
						}
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
						route: 'P'
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
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[2].debuff.P = CHDATA.event.maps[2].debuff.P + 1 || 1;
						},
						get end() {
							return !checkRoute(1);
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return 'R';
							if (ships.c.aCV <= 3 && ships.c.CV + ships.c.CVB <= 2 && ships.c.aBB <= 2) return 'T';
							return 'R';
						}
					},
					'Q': {
						type: 1,
						x: 497,
						y: 284,
						distance: 5,
						boss: true,
						setupSpecial: function() {
							let ships = getAllShips();
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = null;
							MAPDATA[50].maps[2].applyBonus1(ships);
						},
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
						route: 'T'
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
						routeC: function(ships) {
							let los = getELoS33(1,3) + getELoS33(2,3);
							return checkELoS33(los,{ 23: 'U', 17: 'S' });
						}
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
						route: 'W'
					},
					'W': {
						type: 1,
						x: 305,
						y: 330,
						distance: 4,
						hidden: 2,
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
						routeC: function(ships) {
							if (ships.c.AS + ships.c.SS + ships.c.SSV >= ships.c.total) return 'Z';
							if (ships.c.AS + ships.c.SS + ships.c.SSV >= 5) return 'Z';
							if (ships.c.AS + ships.c.SS + ships.c.SSV >= 4 && ships.c.CL + ships.c.CA + ships.c.CAV <= 1) return 'Z';
							return 'X';
						}
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
						route: 'Y'
					},
					'Y': {
						type: 3,
						x: 419,
						y: 277,
						distance: 4,
						hidden: 2,
						routeS: ['Q','Z']
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
						route: 'ZI'
					},
					'ZI': {
						type: 1,
						x: 596,
						y: 342,
						distance: 7,
						hidden: 2,
						setupSpecial: function() {
							MAPDATA[50].maps[2].applyBonusZ(getAllShips());
						},
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
						routeC: function(ships) {
							this.showLoSPlane = null;
							if ((getDiff() == 3 || getDiff() == 2) && ships.c.aBB + ships.c.CA + ships.c.CAV) return 'S';
							if (ships.c.aBB > 1) return 'S';
							this.showLoSPlane = 'ZII';
							let vals = {
								3: { 29: 'ZII', 26: 'S' },
								2: { 23: 'ZII', 20: 'S' },
								1: { 21: 'ZII', 18: 'S' },
								4: { 18: 'ZII', 15: 'S' },
							}[getDiff()];
							let los = getELoS33(1,3);
							return checkELoS33(los,vals);
						}
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
						unlock: function(debuff) {
							return CHDATA.event.maps[3].part >= 2;
						}
					},
					2: {
						images: [{ name: '3_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							let diff = getDiff();
							if (diff == 3) {
								return debuff.B && debuff.O1_S && debuff.O2 && debuff.O3_S;
							} else if (diff == 2) {
								return debuff.B && debuff.O1_A && debuff.O3_A;
							} else if (diff == 1) {
								return debuff.O1_A && debuff.O3_A;
							} else {
								return debuff.O1_B;
							}
						}
					},
					3: {
						images: [{ name: '3_3.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (CHDATA.event.maps[3].part < 3) return false;
							let diff = getDiff();
							if (diff == 3) {
								return debuff.E && debuff.G && debuff.H;
							} else if (diff == 2) {
								return debuff.E && debuff.G;
							} else {
								return true;
							}
						}
					},
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return (debuff.AB_d || CHDATA.config.disableRaidReq) && debuff.E_d && debuff.K_d && debuff.N_d && debuff.O3_d && debuff.W_d;
				},
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
					debuffGive: function(airState,totalHPLost) {
						if (CHDATA.event.maps[3].part < 3) return;
						if (CHDATA.event.maps[3].hp > MAPDATA[50].maps[3].parts[3].finalhp[getDiff()]) return;
						if (airState >= 1) CHDATA.event.maps[3].debuff.AB_d = 1;
					}
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
				applyBonus1: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [], bonusAcc = [];
						if ([55,17,19,47,135,424,456,459,671].indexOf(mid) != -1) {
							bonus.push({mod:1.35});
							bonusAcc.push({mod:1.2});
						}
						if ([596,598].indexOf(mid) != -1) {
							bonus.push({mod:1.25});
							bonusAcc.push({mod:1.15});
						}
						if ([21,22,138,18,42,43,46,49,50,97,405,422,457,458,485,528,632].indexOf(mid) != -1) {
							bonus.push({mod:1.15});
							bonusAcc.push({mod:1.15});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonusAcc;
						}
					}
				},
				applyBonus2: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [], bonusAcc = [];
						if ([21,71,72,85,86,110,111,116,124,125, 20,122,132,133,134,167,168,169,170,181,186,190,422,453,454].indexOf(mid) != -1) {
							bonus.push({mod:1.15});
							bonusAcc.push({mod:1.15});
						}
						if ([596,598].indexOf(mid) != -1) {
							bonus.push({mod:1.1});
							bonusAcc.push({mod:1.1});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonusAcc;
						}
					}
				},
				applyBonusN: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						if ([55,17,19,47,135,424,456,459,671].indexOf(mid) != -1) {
							ship.bonusSpecial.push({mod:1.1});
						}
						if ([4,16,20,21,34,41,52,56].indexOf(ship.sclass) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.15});
						}
						if ([1,5,10,12,18,22,23,28,30,38,54,66,101].indexOf(ship.sclass) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.15});
						}
					}
				},
				applyBonusZ: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						if ([4,16,20,21,34,41,52,56].indexOf(ship.sclass) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.15});
						}
						if ([1,5,10,12,18,22,23,28,30,38,54,66,101].indexOf(ship.sclass) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.15});
						}
					}
				},
				applyBonusO: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [], bonusAcc = [];
						if ([61,69,51,52,54,115,1,6,7,28,29,31,32,164,165,474,479,481].indexOf(mid) != -1) {
							bonus.push({mod:1.2});
							bonusAcc.push({mod:1.2});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonusAcc;
						}
					}
				},
				applyBonusO3: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						if ([4,16,20,21,34,41,52,56].indexOf(ship.sclass) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.15});
						}
						if ([1,5,10,12,18,22,23,28,30,38,54,66,101].indexOf(ship.sclass) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.15});
						}
					}
				},
				startCheck: function(ships) {
					if (checkRoute(1) && !CHDATA.fleets.combined) {
						let s = CHDATA.ships[CHDATA.fleets[1][0]];
						if (s.lock != '50_4' && ['CA','CAV'].indexOf(SHIPDATA[s.masterId].type) != -1) {
							chGiveLockAllCurrent('50_6');
							return 'Start2';
						}
					}
					CHDATA.sortie.s1 = true;
					if (CHDATA.fleets.combined) {
						chGiveLockAllCurrent('50_5');
					} else {
						chGiveLockAllCurrent('50_4');
					}
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 146,
						y: 126,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 118,
						y: 176,
						hidden: 1,
						route: 'P'
					},
					'A': {
						type: 3,
						x: 195,
						y: 160,
						distance: 1,
						routeC: function(ships) {
							if (CHDATA.fleets.combined) {
								if (checkRoute(2)) return 'C';
								return 'B';
							}
							if (ships.c.aBB + ships.c.aCV + ships.c.CA + ships.c.CAV + +isShipInList(ships.c.ids,161)) return 'B';
							let numDrumShips = FLEETS1[0].ships.filter(s => s.equips.find(eq => eq.mid == 75)).length;
							if (getDiff() == 4) {
								if (ships.c.DD >= 5) return 'C';
								if (ships.c.CL && ships.c.DD == 4) return 'C';
								if (numDrumShips) return 'C';
							} else {
								if (ships.c.DD >= [4,5,5][getDiff()-1] && numDrumShips >= [2,3,4][getDiff()-1]) return 'C';
							}
							return 'B';
						}
					},
					'B': {
						type: 1,
						x: 247,
						y: 198,
						distance: 2,
						raid: true,
						setupSpecial: function() {
							MAPDATA[50].maps[3].applyBonusO(getAllShips());
						},
						compDiff: {
							3: {'Hard 1':15,'Hard 2':15,'Hard 3':20,'Hard 4':25,'Hard 5':25},
							2: {'Medium 1':20,'Medium 2':30,'Medium 3':30,'Medium 4':20},
							1: {'Easy 1':20,'Easy 2':10,'Easy 3':20,'Easy 4':25,'Easy 5':25},
							4: {'Casual 1':40,'Casual 2':30,'Casual 3':30},
						},
						debuffGive: function() {
							if (!checkRoute(1)) return;
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[3].debuff.B = 1;
						},
						routeC: function(ships) {
							this.showNoCompass = true;
							if (checkRoute(1)) {
								this.showNoCompass = false;
								if (CHDATA.fleets.combined) return 'D';
								if (CHDATA.sortie.s1) return 'D';
								if (ships.speed <= 5) return 'O';
								if (ships.c.CL <= 0) return 'O';
								if (ships.c.DD <= 0) return 'O';
								return 'O1';
							}
							return 'D';
						}
					},
					'C': {
						type: 1,
						x: 260,
						y: 84,
						distance: 2,
						subonly: true,
						setupSpecial: function() {
							MAPDATA[50].maps[3].applyBonus1(getAllShips());
						},
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
						routeC: function(ships) {
							if (ships.c.DD >= ships.c.total) return 'G';
							return 'E';
						}
					},
					'D': {
						type: 3,
						x: 294,
						y: 231,
						distance: 3,
						get end() {
							return !checkRoute(1);
						},
						route: 'O2'
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
						debuffGive: function() {
							if (!checkRoute(2)) return;
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[3].debuff.E = 1;
							if (CHDATA.event.maps[3].part < 3) return;
							if (CHDATA.event.maps[3].hp > MAPDATA[50].maps[3].parts[3].finalhp[getDiff()]) return;
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[3].debuff.E_d = 1;
						},
						route: 'G'
					},
					'F': {
						type: 3,
						x: 364,
						y: 208,
						distance: 4,
						routeS: ['H','I']
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
						debuffGive: function() {
							if (!checkRoute(2)) return;
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[3].debuff.G = 1;
						},
						routeC: function(ships) {
							this.showNoCompass = true;
							if (checkRoute(2)) {
								this.showNoCompass = false;
								if (CHDATA.fleets.combined == 1) return 'Q';
								if (CHDATA.fleets.combined == 2) return 'Q';
							}
							return 'F';
						}
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
						debuffGive: function() {
							if (!checkRoute(2)) return;
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[3].debuff.H = 1;
						},
						route: 'K'
					},
					'I': {
						type: 3,
						x: 444,
						y: 245,
						distance: 5,
						routeC: function(ships) {
							this.showNoCompass = true;
							if (checkRoute(3)) {
								this.showNoCompass = false;
								if (CHDATA.fleets.combined) return 'J';
								if (getDiff() == 3 && ships.c.DD < ships.c.total) return 'J';
								let numDrumShips = FLEETS1[0].ships.filter(s => s.equips.find(eq => eq.mid == 75)).length;
								if (numDrumShips >= [3,4,5,0][getDiff()-1]) return 'X';
							}
							return 'J';
						}
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
						route: 'L'
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
						debuffGive: function() {
							if (CHDATA.event.maps[3].part < 3) return;
							if (CHDATA.event.maps[3].hp > MAPDATA[50].maps[3].parts[3].finalhp[getDiff()]) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[3].debuff.K_d = 1;
						},
						route: 'L'
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
						route: 'M'
					},
					'M': {
						type: 2,
						x: 602,
						y: 308,
						distance: 7,
						resource: 0,
						routeC: function(ships) {
							this.showNoCompass = true;
							this.showLoSPlane = null;
							if (checkRoute(3)) {
								this.showNoCompass = false;
								if (CHDATA.fleets.combined) return 'N';
								this.showLoSPlane = 'Z';
								let vals = {
									3: { 48: 'Z', 43: 'Y' },
									2: { 38: 'Z', 33: 'Y' },
									1: { 29: 'Z', 24: 'Y' },
									4: { 23: 'Z', 18: 'Y' },
								}[getDiff()];
								let los = getELoS33(1,3);
								return checkELoS33(los,vals);
							}
							return 'N';
						}
					},
					'N': {
						type: 1,
						x: 603,
						y: 268,
						distance: 7,
						boss: true,
						setupSpecial: function() {
							MAPDATA[50].maps[3].applyBonusN(getAllShips());
						},
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
						debuffGive: function() {
							if (CHDATA.event.maps[3].part < 3) return;
							if (CHDATA.event.maps[3].hp > MAPDATA[50].maps[3].parts[3].finalhp[getDiff()]) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[3].debuff.N_d = 1;
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
						route: 'O1'
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
						debuffGive: function() {
							if (!checkRoute(1)) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[3].debuff.O1_S = 1;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[3].debuff.O1_A = 1;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A' || CHDATA.temp.rank == 'B') CHDATA.event.maps[3].debuff.O1_B = 1;
						},
						route: 'O3'
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
						debuffGive: function() {
							if (!checkRoute(1)) return;
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[3].debuff.O2 = 1;
						},
						end: true
					},
					'O3': {
						type: 1,
						x: 369,
						y: 330,
						distance: 4,
						hidden: 1,
						setupSpecial: function() {
							MAPDATA[50].maps[3].applyBonusO3(getAllShips());
						},
						compDiff: {
							3: {'Hard 1':40,'Hard 2':30,'Hard 3':30},
							2: {'Medium 1':40,'Medium 2':30,'Medium 3':30},
							1: {'Easy 1':40,'Easy 2':20,'Easy 3':40},
							4: {'Casual 1':40,'Casual 2':20,'Casual 3':40},
						},
						debuffGive: function() {
							if (!checkRoute(1)) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[3].debuff.O3_S = 1;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[3].debuff.O3_A = 1;
							if (CHDATA.event.maps[3].part < 3) return;
							if (CHDATA.event.maps[3].hp > MAPDATA[50].maps[3].parts[3].finalhp[getDiff()]) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[3].debuff.O3_d = 1;
						},
						end: true
					},
					'P': {
						type: 3,
						x: 178,
						y: 188,
						distance: 1,
						hidden: 1,
						route: 'B'
					},
					'Q': {
						type: 3,
						x: 460,
						y: 152,
						distance: 5,
						hidden: 2,
						routeS: ['R','S']
					},
					'R': {
						type: 1,
						x: 502,
						y: 113,
						distance: 5,
						hidden: 2,
						subonly: true,
						setupSpecial: function() {
							let ships = getAllShips();
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = null;
							MAPDATA[50].maps[3].applyBonus2(ships);
						},
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
						routeC: function(ships) {
							if (ships.c.CV + ships.c.CVB > 2) return 'T';
							if (ships.c.aCV + +isShipInList(ships.c.ids,161) > 4) return 'T';
							if (ships.c.aBB + ships.c.aCV + +isShipInList(ships.c.ids,161) > 6) return 'T';
							return 'V';
						}
					},
					'S': {
						type: 1,
						x: 515,
						y: 177,
						distance: 5,
						hidden: 2,
						setupSpecial: function() {
							let ships = getAllShips();
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = null;
							MAPDATA[50].maps[3].applyBonus2(ships);
						},
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
						route: 'U'
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
						route: 'V'
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
						routeC: function(ships) {
							this.showLoSPlane = null;
							if (CHDATA.fleets.combined == 2) return 'V';
							if (ships.speed >= 10 && ships.c.aCV <= 3 && ships.c.CV + ships.c.CVB <= 2 && ships.c.CA + ships.c.CAV >= 2 && ships.c.CL >= 2 && ships.c.DD >= 4) {
								this.showLoSPlane = 'W';
								let vals = {
									3: { 48: 'W', 43: 'W1' },
									2: { 38: 'W', 33: 'W1' },
									1: { 29: 'W', 24: 'W1' },
									4: { 23: 'W', 18: 'W1' },
								}[getDiff()];
								let los = getELoS33(1,3) + getELoS33(2,3);
								return checkELoS33(los,vals);
							}
							return 'V';
						}
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
						routeC: function(ships) {
							let vals = {
								3: { 48: 'W', 43: 'W2' },
								2: { 38: 'W', 33: 'W2' },
								1: { 29: 'W', 24: 'W2' },
								4: { 23: 'W', 18: 'W2' },
							}[getDiff()];
							let los = getELoS33(1,3) + getELoS33(2,3);
							return checkELoS33(los,vals);
						}
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
						debuffGive: function() {
							if (CHDATA.event.maps[3].part < 3) return;
							if (CHDATA.event.maps[3].hp > MAPDATA[50].maps[3].parts[3].finalhp[getDiff()]) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[3].debuff.W_d = 1;
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
						routeC: function(ships) {
							if (getDiff() == 3 && ships.speed <= 5) return 'L';
							return 'M';
						}
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
						setupSpecial: function() {
							let ships = getAllShips();
							MAPDATA[50].maps[3].applyBonusZ(ships);
							
							let debuffed = CHDATA.event.maps[3].debuffed || MAPDATA[50].maps[3].debuffCheck(CHDATA.event.maps[3].debuff);
							if (debuffed) {
								chrApplyDebuff(false, 1);
							}
						},
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
						unlock: function(debuff) {
							return CHDATA.event.maps[4].part >= 2;
						}
					},
					2: {
						images: [{ name: '4_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							return CHDATA.event.maps[4].part >= 3;
						}
					},
					3: {
						images: [{ name: '4_3.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							let diff = getDiff();
							if (diff == 3) {
								return debuff.O && debuff.W_S >= 2 && debuff.X_S >= 2 && (debuff.AB >= 2 || CHDATA.config.disableRaidReq);
							} else if (diff == 2) {
								return debuff.O && debuff.W_A && debuff.X_A && (debuff.AB || CHDATA.config.disableRaidReq);
							} else if (diff == 1) {
								return debuff.O && debuff.W_A && debuff.X_A;
							} else {
								return debuff.W_A && debuff.X_A;
							}
						}
					},
					4: {
						images: [{ name: '4_4.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (CHDATA.event.maps[4].part < 4) return;
							if (getDiff() == 3) {
								return debuff.L;
							} else {
								return true;
							}
						}
					},
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return debuff.G_d && debuff.I_d && debuff.L_d && debuff.Y_d && debuff.Z2_d && (debuff.AB_d || CHDATA.config.disableRaidReq);
				},
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
					debuffGive: function(airState,totalHPLost) {
						if (!checkRoute(2)) return;
						if (airState >= 1) CHDATA.event.maps[4].debuff.AB = CHDATA.event.maps[4].debuff.AB + 1 || 1;
						if (CHDATA.event.maps[4].part < 4) return;
						if (CHDATA.event.maps[4].hp > MAPDATA[50].maps[4].parts[4].finalhp[getDiff()]) return;
						if (airState >= 1) CHDATA.event.maps[4].debuff.AB_d = 1;
					}
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
				applyBonus: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [], bonusAcc = [];
						if ([50,55,66,67,68,69,70,72,124,138,485,528,675].indexOf(mid) != -1) {
							bonus.push({mod:1.25});
							bonusAcc.push({mod:1.25});
						}
						if ([21,62,65,54,137,28,29,42,43,46,135,165,168,190,453,479,481,671].indexOf(mid) != -1) {
							bonus.push({mod:1.15});
							bonusAcc.push({mod:1.15});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonusAcc;
						}
					}
				},
				applyBonus1: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [], bonusAcc = [];
						if ([71,85,86,110,111,116,125].indexOf(mid) != -1) {
							bonus.push({mod:1.15});
							bonusAcc.push({mod:1.15});
						}
						if ([65,69,83,84,87,91,93,95,99,102,105,106,107,110].indexOf(ship.sclass) != -1) {
							bonus.push({mod:1.15});
							bonusAcc.push({mod:1.15});
						}
						if (mid == 433) {
							bonus.push({mod:1.15});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonusAcc;
						}
					}
				},
				applyBonus2: function(ships) {
					for (let ship of ships) {
						if ([4,16,20,21,34,41,52,56].indexOf(ship.sclass) != -1) {
							if (!ships.bonusSpecial) ship.bonusSpecial = [{mod:1.1}];
							ship.bonusEvFlat = 15;
						}
						if ([1,5,10,12,18,22,23,28,30,38,54,66,101].indexOf(ship.sclass) != -1) {
							if (!ships.bonusSpecial) ship.bonusSpecial = [{mod:1.1}];
							ship.bonusEvFlat = 15;
						}
					}
				},
				applyBonus3: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [], bonusAcc = [];
						if ([78,79,92].indexOf(mid) != -1) {
							bonus.push({mod:1.15});
							bonusAcc.push({mod:1.15});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonusAcc;
						}
					}
				},
				applyBonusZ: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						if ([78,79,92].indexOf(mid) != -1) {
							ship.bonusSpecial.push({mod:1.1});
						}
						if ([65,69,83,84,87,91,93,95,99,102,105,106,107,110].indexOf(ship.sclass) != -1) {
							ship.bonusSpecial = [{mod:1.25}];
							ship.bonusSpecialAcc = [{mod:1.15}];
						}
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
					
					this.applyBonus(getAllShips());
					
					if (checkRoute(1)) {
						if (CHDATA.fleets.combined == 3) {
							this.applyBonus2(getAllShips());
							return 'Start2';
						}
						if (CHDATA.fleets.combined == 2) {
							this.applyBonus3(getAllShips());
							return 'Start3';
						}
					}
					this.applyBonus1(getAllShips());
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 328,
						y: 152,
						routeC: function(ships) {
							if (CHDATA.fleets.combined) {
								if (ships.c.aBB + ships.c.aCV >= 4) return 'A';
								return 'B';
							}
							if (ships.speed <= 5) return 'A'
							if (ships.c.aBB + ships.c.aCV + +isShipInList(ships.c.ids,161)) return 'A';
							return 'B';
						}
					},
					'Start2': {
						type: 0,
						x: 257,
						y: 103,
						hidden: 1,
						routeC: function(ships) {
							if (ships.c.LHA + ships.c.AO + ships.c.AS == 2 && ships.c.DD == 9) return 'R1';
							return 'Q';
						}
					},
					'Start3': {
						type: 0,
						x: 301,
						y: 200,
						hidden: 1,
						route: 'M'
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
						route: 'B'
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
						routeC: function(ships) {
							if (CHDATA.fleets.combined) return 'C';
							return 'D';
						}
					},
					'C': {
						type: 3,
						x: 474,
						y: 110,
						distance: 3,
						routeS: ['D','F']
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
						routeC: function(ships) {
							if (CHDATA.fleets.combined) return 'H';
							return 'E';
						}
					},
					'E': {
						type: 1,
						x: 498,
						y: 208,
						distance: 4,
						subonly: true,
						setupSpecial: function() {
							let ships = getAllShips();
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = null;
							MAPDATA[50].maps[4].applyBonus(ships);
						},
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
						routeC: function(ships) {
							this.showNoCompass = true;
							if (checkRoute(2)) {
								this.showNoCompass = false;
								if (ships.c.DD + ships.c.CL + ships.c.CLT >= ships.c.total && ships.c.CL <= 1) return 'X2';
							}
							return 'G';
						}
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
						route: 'Y1'
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
						debuffGive: function() {
							if (CHDATA.event.maps[4].part < 4) return;
							if (CHDATA.event.maps[4].hp > MAPDATA[50].maps[4].parts[4].finalhp[getDiff()]) return;
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[4].debuff.G_d = 1;
						},
						route: 'I'
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
						route: 'Y2'
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
						debuffGive: function() {
							if (CHDATA.event.maps[4].part < 4) return;
							if (CHDATA.event.maps[4].hp > MAPDATA[50].maps[4].parts[4].finalhp[getDiff()]) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[4].debuff.I_d = 1;
						},
						routeC: function(ships) {
							this.showLoSPlane = 'L';
							if (ships.c.aCV + +isShipInList(ships.c.ids,161)) return 'K';
							if (ships.speed <= 5 && ships.c.aBB) return 'K';
							if (ships.c.DD < 2) return 'K';
							if (ships.c.AV) this.showLoSPlane = 'J';
							if (ships.c.CA + ships.c.CAV >= 3) this.showLoSPlane = 'J';
							let vals = {
								3: { 59: this.showLoSPlane, 55: 'K' },
								2: { 42: this.showLoSPlane, 38: 'K' },
								1: { 38: this.showLoSPlane, 34: 'K' },
								4: { 32: this.showLoSPlane, 28: 'K' },
							}[getDiff()];
							let los = getELoS33(1,3);
							return checkELoS33(los,vals);
						}
					},
					'J': {
						type: 3,
						x: 601,
						y: 265,
						distance: 7,
						repair: true,
						routeC: function(ships) {
							this.showNoCompass = true;
							if (checkRoute(4)) {
								this.showNoCompass = false;
								if (CHDATA.fleets.combined) return 'Z';
							}
							return 'L';
						}
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
						route: 'L'
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
						debuffGive: function() {
							if (!checkRoute(3)) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[4].debuff.L = 1;
							if (CHDATA.event.maps[4].part < 4) return;
							if (CHDATA.event.maps[4].hp > MAPDATA[50].maps[4].parts[4].finalhp[getDiff()]) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[4].debuff.L_d = 1;
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
						routeC: function(ships) {
							if (ships.c.SS + ships.c.SSV) return 'N';
							if (ships.c.CV + ships.c.CVB) return 'N';
							if (ships.c.aCV >= 3) return 'N';
							let num = getDiff() == 3 ? 5 : 6;
							if (ships.c.aBB + ships.c.aCV + +isShipInList(ships.c.ids,161) >= num) return 'N';
							return 'O';
						}
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
						routeC: function(ships) {
							if (ships.speed >= 10) return 'P';
							if (ships.c.aBB + ships.c.aCV >= 7) return 'P';
							return 'O';
						}
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
						debuffGive: function() {
							if (!checkRoute(2)) return;
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[4].debuff.O = 1;
						},
						get end() {
							return !checkRoute(4);
						},
						route: 'Z1'
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
						routeC: function(ships) {
							this.showNoCompass = true;
							if (checkRoute(4)) {
								this.showNoCompass = false;
								if (ships.speed >= 10 && ships.c.CV + ships.c.CVB <= 0) return 'Z1';
							}
							return 'O';
						}
					},
					'Q': {
						type: 1,
						x: 172,
						y: 130,
						distance: 2,
						hidden: 1,
						subonly: true,
						compDiff: {
							3: {'Hard 1':10,'Hard 2':10,'Hard 3':25,'Hard 4':25,'Hard 5':15,'Hard 6':15},
							2: {'Medium 1':15,'Medium 2':15,'Medium 3':10,'Medium 4':10,'Medium 5':25,'Medium 6':25},
							1: {'Easy 1':10,'Easy 2':10,'Easy 3':25,'Easy 4':25,'Easy 5':15,'Easy 6':15},
							4: {'Casual 1':35,'Casual 2':40,'Casual 3':10,'Casual 4':15},
						},
						routeC: function(ships) {
							if (ships.c.DD >= 11) return 'Q1';
							if (ships.speed >= 10 && ships.c.DD >= 10) return 'R';
							return 'Q2';
						}
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
						route: 'Q2'
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
						routeC: function(ships) {
							if (ships.speed <= 5) return 'R';
							if (ships.c.aBB + ships.c.CA + ships.c.CAV) return 'R';
							return 'S';
						}
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
						route: 'S'
					},
					'R1': {
						type: 1,
						x: 194,
						y: 176,
						distance: 2,
						hidden: 1,
						raid: true,
						compDiff: {
							3: {'Hard 1':20,'Hard 2':20,'Hard 3':30,'Hard 4':20,'Hard 5':10},
							2: {'Medium 1':20,'Medium 2':20,'Medium 3':30,'Medium 4':20,'Medium 5':10},
							1: {'Easy 1':25,'Easy 2':25,'Easy 3':25,'Easy 4':25},
							4: {'Casual 1':15,'Casual 2':40,'Casual 3':45},
						},
						route: 'R'
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
						route: 'T'
					},
					'T': {
						type: 3,
						x: 161,
						y: 243,
						distance: 3,
						hidden: 1,
						routeS: ['U','V3']
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
						route: 'V1'
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
						routeC: function(ships) {
							let vals = {
								3: { 74: 'V', 66: 'V2' },
								2: { 64: 'V', 54: 'V2' },
								1: { 44: 'V', 34: 'V2' },
								4: { 34: 'V', 24: 'V2' },
							}[getDiff()];
							let los = getELoS33(1,3) + getELoS33(2,3);
							return checkELoS33(los,vals);
						}
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
						compDiff: {
							3: {'Hard 1':35,'Hard 2':30,'Hard 3':35},
							2: {'Medium 1':35,'Medium 2':30,'Medium 3':35},
							1: {'Easy 1':30,'Easy 2':35,'Easy 3':35},
							4: {'Casual 1':30,'Casual 2':35,'Casual 3':35},
						},
						get end() {
							return !checkRoute(2);
						},
						routeC: function(ships) {
							this.showLoSPlane = 'W';
							if (ships.c.aBB) this.showLoSPlane = 'W1';
							if (ships.c.AO + ships.c.LHA >= 2) this.showLoSPlane = 'W1';
							let vals = {
								3: { 22: this.showLoSPlane, 13: 'W2' },
								2: { 15: this.showLoSPlane, 6: 'W2' },
								1: { 6: this.showLoSPlane, 2: 'W2' },
								4: { 0: this.showLoSPlane },
							}[getDiff()];
							let los = getELoS33(1,1) + getELoS33(2,1);
							return checkELoS33(los,vals);
						}
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
						debuffGive: function() {
							if (!checkRoute(2)) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[4].debuff.W_S = CHDATA.event.maps[4].debuff.W_S + 1 || 1;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[4].debuff.W_A = 1;
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
						route: 'W'
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
						debuffGive: function() {
							if (!checkRoute(2)) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[4].debuff.X_S = CHDATA.event.maps[4].debuff.X_S + 1 || 1;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[4].debuff.X_A = 1;
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
						routeC: function(ships) {
							this.showLoSPlane = 'X';
							if (ships.c.CLT) this.showLoSPlane = 'X3';
							if (ships.speed <= 5) this.showLoSPlane = 'X3';
							let vals = {
								3: { 64: this.showLoSPlane, 59: 'X1' },
								2: { 48: this.showLoSPlane, 43: 'X1' },
								1: { 37: this.showLoSPlane, 32: 'X1' },
								4: { 32: this.showLoSPlane, 27: 'X1' },
							}[getDiff()];
							let los = getELoS33(1,3);
							return checkELoS33(los,vals);
						}
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
						route: 'X'
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
						debuffGive: function() {
							if (CHDATA.event.maps[4].part < 4) return;
							if (CHDATA.event.maps[4].hp > MAPDATA[50].maps[4].parts[4].finalhp[getDiff()]) return;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[4].debuff.Y_d = 1;
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
						routeC: function(ships) {
							this.showLoSPlane = 'H';
							if (ships.c.aBB + ships.c.aCV <= 5) this.showLoSPlane = 'Y2';
							if (ships.c.CV + ships.c.CVB <= 2) this.showLoSPlane = 'Y2';
							let vals = {
								3: { 90: this.showLoSPlane, 84: 'Y3' },
								2: { 70: this.showLoSPlane, 64: 'Y3' },
								1: { 60: this.showLoSPlane, 54: 'Y3' },
								4: { 50: this.showLoSPlane, 44: 'Y3' },
							}[getDiff()];
							let los = getELoS33(1,3) + getELoS33(2,3);
							return checkELoS33(los,vals);
						}
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
						routeC: function(ships) {
							this.showLoSPlane = 'Y';
							if (ships.c.aBB + ships.c.aCV >= 5) this.showLoSPlane = 'Y5';
							if (ships.c.CV + ships.c.CVB >= 4) this.showLoSPlane = 'Y5';
							if (ships.speed <= 5 && (ships.c.CV + ships.c.CVB >= 3 || ships.c.DD < 3)) this.showLoSPlane = 'Y5';
							let vals = {
								3: { 110: this.showLoSPlane, 100: 'Y4' },
								2: { 90: this.showLoSPlane, 80: 'Y4' },
								1: { 80: this.showLoSPlane, 70: 'Y4' },
								4: { 70: this.showLoSPlane, 60: 'Y4' },
							}[getDiff()];
							let los = getELoS33(1,3) + getELoS33(2,3);
							return checkELoS33(los,vals);
						}
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
						route: 'Y'
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
						setupSpecial: function() {
							if (CHDATA.sortie.fleetFriend) {
								MAPDATA[50].maps[4].applyBonus(CHDATA.sortie.fleetFriend.ships);
								MAPDATA[50].maps[4].applyBonus3(CHDATA.sortie.fleetFriend.ships);
							}
							let ships = getAllShips(true);
							MAPDATA[50].maps[4].applyBonusZ(ships);
							
							let debuffed = CHDATA.event.maps[4].debuffed || MAPDATA[50].maps[4].debuffCheck(CHDATA.event.maps[4].debuff);
							if (debuffed) {
								for (let ship of ships) {
									if (!ship.bonusSpecial) ship.bonusSpecial = [];
									ship.bonusSpecial.push({mod:1.175,on:[1968,1969,1970]});
								}
							}
							for (let mid = 1968; mid <= 1970; mid++) {
								VOICES[mid].attack = debuffed ? VOICES[mid].attackB : VOICES[mid].attackN;
								VOICES[mid].damage = debuffed ? VOICES[mid].damageB : VOICES[mid].damageN;
							}
						},
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
						route: 'Z2'
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
						debuffGive: function() {
							if (CHDATA.event.maps[4].part < 4) return;
							if (CHDATA.event.maps[4].hp > MAPDATA[50].maps[4].parts[4].finalhp[getDiff()]) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[4].debuff.Z2_d = 1;
						},
						routeC: function(ships) {
							this.showLoSPlane = 'Z';
							if (isShipInList(ships.c.ids,187) || isShipInList(ships.c.ids,450)) this.showLoSPlane = 'J';
							let vals = {
								3: { 100: this.showLoSPlane, 90: 'Z3' },
								2: { 90: this.showLoSPlane, 80: 'Z3' },
								1: { 80: this.showLoSPlane, 70: 'Z3' },
								4: { 70: this.showLoSPlane, 60: 'Z3' },
							}[getDiff()];
							let los = getELoS33(1,3) + getELoS33(2,3);
							return checkELoS33(los,vals);
						}
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
						unlock: function(debuff) {
							return CHDATA.event.maps[5].part >= 2;
						}
					},
					2: {
						images: [{ name: '5_2.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (CHDATA.event.maps[5].part < 3) return false;
							if (getDiff() == 3) {
								return debuff.B_1 >= 2 && debuff.U_1 >= 2 && (debuff.AB_1 >= 2 || CHDATA.config.disableRaidReq);
							} else {
								return debuff.U_1 >= 2;
							}
						}
					},
					3: {
						images: [{ name: '5_3.png', x: 0, y: 0 }],
						unlock: function(debuff) {
							if (CHDATA.event.maps[5].part < 3) return false;
							let diff = getDiff();
							if (diff == 3) {
								return debuff.B_2 >= 2 && debuff.U_2 >= 2 && debuff.S >= 2 && debuff.V >= 2 && debuff.Y >= 2 && (debuff.AB >= 2 || CHDATA.config.disableRaidReq);
							} else if (diff == 2) {
								return debuff.B_2 && debuff.U_2 && debuff.V && debuff.Y >= 2 && (debuff.AB >= 2 || CHDATA.config.disableRaidReq);
							} else if (diff == 1) {
								return debuff.U_2 && debuff.V && debuff.Y >= 2;
							} else {
								return debuff.V && debuff.Y >= 2;
							}
						}
					},
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					let debuffN = getDiff() == 3 ? debuff.N_d : true;
					return debuffN && debuff.B_d && debuff.H_d && debuff.J_d && debuff.U_d && debuff.V_d && debuff.V1_d;
				},
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
					debuffGive: function(airState,totalHPLost) {
						if (!checkRoute(1)) return;
						if (airState >= 1) CHDATA.event.maps[5].debuff.AB_1 = CHDATA.event.maps[5].debuff.AB_1 + 1 || 1;
						if (!checkRoute(2)) return;
						if (airState >= 1) CHDATA.event.maps[5].debuff.AB = CHDATA.event.maps[5].debuff.AB + 1 || 1;
					}
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
				applyBonus1: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [], bonusAcc = [];
						if ([55,17,19,47,135,424,456,459,671].indexOf(mid) != -1) {
							bonus.push({mod:1.25});
							bonusAcc.push({mod:1.25});
						}
						if ([61,69,51,52,54,115,1,6,7,28,29,31,32,164,165,474,479,481].indexOf(mid) != -1) {
							bonus.push({mod:1.15});
							bonusAcc.push({mod:1.15});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonusAcc;
						}
					}
				},
				applyBonus2: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [], bonusAcc = [];
						if ([21,62,65,54,137,28,29,42,43,46,165,168,190,453,479,481].indexOf(mid) != -1) {
							bonus.push({mod:1.15});
							bonusAcc.push({mod:1.15});
						}
						if ([138,485,528,675].indexOf(mid) != -1) {
							bonus.push({mod:1.15});
							bonusAcc.push({mod:1.15});
						}
						if ([66,67,68,78,79,81,85,86,131,182,458].indexOf(mid) != -1) {
							bonus.push({mod:1.13});
							bonusAcc.push({mod:1.13});
						}
						if ([55,17,19,47,135,424,456,459,671].indexOf(mid) != -1) {
							bonus.push({mod:1.13});
							bonusAcc.push({mod:1.13});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonusAcc;
						}
					}
				},
				applyBonus3: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						let bonus = [], bonusAcc = [];
						if ([55,17,19,47,135,424,456,459,671].indexOf(mid) != -1) {
							bonus.push({mod:1.25});
							bonusAcc.push({mod:1.25});
						}
						if ([21,62,65,54,137,28,29,42,43,46,165,168,190,453,479,481].indexOf(mid) != -1) {
							bonus.push({mod:1.15});
							bonusAcc.push({mod:1.15});
						}
						if ([138,485,528,675].indexOf(mid) != -1) {
							bonus.push({mod:1.15});
							bonusAcc.push({mod:1.15});
						}
						if (bonus.length) {
							ship.bonusSpecial = bonus;
							ship.bonusSpecialAcc = bonusAcc;
						}
					}
				},
				applyBonusU: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						if ([21,62,65,54,137,28,29,42,43,46,165,168,190,453,479,481].indexOf(mid) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.2});
							ship.bonusSpecialAcc = [{mod:1.15}];
						}
						if ([138,485,528,675].indexOf(mid) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.2});
							ship.bonusSpecialAcc = [{mod:1.15}];
						}
						if ([66,67,68,78,79,81,85,86,131,182,458].indexOf(mid) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.2});
							ship.bonusSpecialAcc = [{mod:1.15}];
						}
						if ([55,17,19,47,135,424,456,459,671].indexOf(mid) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.2});
							ship.bonusSpecialAcc = [{mod:1.15}];
						}
					}
				},
				applyBonusV: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						if ([596,597,602,615,654,655].indexOf(mid) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.33});
							if (!ship.bonusSpecialAcc) ship.bonusSpecialAcc = [];
							ship.bonusSpecialAcc.push({mod:1.15});
						}
					}
				},
				applyBonusZ1: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						if ([55,17,19,47,135,424,456,459,671].indexOf(mid) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.3});
							if (!ship.bonusSpecialAcc) ship.bonusSpecialAcc = [];
							ship.bonusSpecialAcc.push({mod:1.3});
						}
						if ([21,62,65,54,137,28,29,42,43,46,165,168,190,453,479,481].indexOf(mid) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.2});
							if (!ship.bonusSpecialAcc) ship.bonusSpecialAcc = [];
							ship.bonusSpecialAcc.push({mod:1.2});
						}
						if ([138,485,528,675].indexOf(mid) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.2});
							if (!ship.bonusSpecialAcc) ship.bonusSpecialAcc = [];
							ship.bonusSpecialAcc.push({mod:1.2});
						}
					}
				},
				applyBonusZ: function(ships) {
					for (let ship of ships) {
						let mid = getBaseId(ship.mid);
						if ([55,17,19,47,135,424,456,459,671].indexOf(mid) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.2});
							if (!ship.bonusSpecialAcc) ship.bonusSpecialAcc = [];
							ship.bonusSpecialAcc.push({mod:1.2});
						}
						if ([21,62,65,54,137,28,29,42,43,46,165,168,190,453,479,481].indexOf(mid) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.2});
							if (!ship.bonusSpecialAcc) ship.bonusSpecialAcc = [];
							ship.bonusSpecialAcc.push({mod:1.2});
						}
						if ([138,485,528,675].indexOf(mid) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.2});
							if (!ship.bonusSpecialAcc) ship.bonusSpecialAcc = [];
							ship.bonusSpecialAcc.push({mod:1.2});
						}
						if ([596,597,602,615,654,655].indexOf(mid) != -1) {
							if (!ship.bonusSpecial) ship.bonusSpecial = [];
							ship.bonusSpecial.push({mod:1.39});
							if (!ship.bonusSpecialAcc) ship.bonusSpecialAcc = [];
							ship.bonusSpecialAcc.push({mod:1.2});
						}
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
					
					if (checkRoute(1) && CHDATA.fleets.combined) {
						this.applyBonus2(getAllShips());
						return 'Start2';
					}
					if (checkRoute(2) && CHDATA.sortie.isTS) {
						this.applyBonus3(getAllShips());
						return 'Start3';
					}
					this.applyBonus1(getAllShips());
					return 'Start1';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 52,
						y: 243,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 60,
						y: 83,
						hidden: 1,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3) return 'K';
							if (ships.speed >= 10) return 'L';
							if (ships.c.aBB + ships.c.aCV <= 5 && ships.c.aBB <= 4 && ships.c.CV + ships.c.CVB <= 2) return 'L';
							return 'K';
						}
					},
					'Start3': {
						type: 0,
						x: 158,
						y: 220,
						hidden: 2,
						routeC: function(ships) {
							if (ships.c.CLT) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 165,
						y: 296,
						distance: 2,
						subonly: true,
						setupSpecial: function() {
							let ships = getAllShips();
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = null;
							MAPDATA[50].maps[5].applyBonus1(ships);
						},
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
						routeC: function(ships) {
							if (CHDATA.fleets.combined) return 'B';
							if (ships.c.aCV) return 'B';
							if (ships.c.aBB >= 3) return 'B';
							if (CHDATA.sortie.isTS && ships.c.CLT) return 'B';
							return 'D';
						}
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
						debuffGive: function() {
							if (!checkRoute(1)) return;
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[5].debuff.B_1 = CHDATA.event.maps[5].debuff.B_1 + 1 || 1;
							if (!checkRoute(2)) return;
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[5].debuff.B_2 = CHDATA.event.maps[5].debuff.B_2 + 1 || 1;
							if (CHDATA.event.maps[5].part < 3) return;
							if (CHDATA.event.maps[5].hp > MAPDATA[50].maps[5].parts[3].finalhp[getDiff()]) return;
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[5].debuff.B_d = 1;
						},
						routeC: function(ships) {
							this.showNoCompass = true;
							if (checkRoute(1)) {
								this.showNoCompass = false;
								if (CHDATA.fleets.combined) return 'O';
							}
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 258,
						y: 228,
						distance: 3,
						subonly: true,
						setupSpecial: function() {
							let ships = getAllShips();
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = null;
							MAPDATA[50].maps[5].applyBonus3(ships);
							
							if (CHDATA.sortie.isTS) {
								for (let ship of ships) {
									if (ship.type == 'DD') ship.bonusEvMod = 1.25;
								}
								for (let ship of FLEETS2[0].ships) {
									if (ship.mid == 1736 || ship.mid == 1737 || ship.mid == 1738) ship.TACC = 50;
								}
							}
						},
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
						routeC: function(ships) {
							this.showNoCompass = true;
							if (checkRoute(2)) {
								this.showNoCompass = false;
								if (CHDATA.sortie.isTS) return 'W';
							}
							return 'D';
						}
					},
					'D': {
						type: 1,
						x: 270,
						y: 321,
						distance: 3,
						setupSpecial: function() {
							let ships = getAllShips();
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = ship.bonusEvMod = null;
							MAPDATA[50].maps[5].applyBonus1(ships);
						},
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
						route: 'E'
					},
					'E': {
						type: 3,
						x: 380,
						y: 326,
						distance: 5,
						routeC: function(ships) {
							if (CHDATA.sortie.isTS) return 'G';
							return 'F';
						}
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
						routeC: function(ships) {
							if (ships.c.aCV) return 'G';
							if (ships.c.DD >= 2) return 'H';
							return 'G';
						}
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
						route: 'I'
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
						debuffGive: function() {
							if (CHDATA.event.maps[5].part < 3) return;
							if (CHDATA.event.maps[5].hp > MAPDATA[50].maps[5].parts[3].finalhp[getDiff()]) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[5].debuff.H_d = 1;
						},
						route: 'J1'
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
						route: 'J1'
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
						debuffGive: function() {
							if (CHDATA.event.maps[5].part < 3) return;
							if (CHDATA.event.maps[5].hp > MAPDATA[50].maps[5].parts[3].finalhp[getDiff()]) return;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[5].debuff.J_d = 1;
						},
						end: true
					},
					'J1': {
						type: 3,
						x: 608,
						y: 300,
						distance: 9,
						showLoSPlane: 'J',
						routeC: function(ships) {
							let vals = {
								3: { 66: 'J', 61: 'J2' },
								2: { 54: 'J', 47: 'J2' },
								1: { 44: 'J', 34: 'J2' },
								4: { 29: 'J', 26: 'J2' },
							}[getDiff()];
							let los = getELoS33(1,3);
							return checkELoS33(los,vals);
						}
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
						route: 'L'
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
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 3) return 'B';
							return 'M'
						}
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
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 1) return 'R';
							if (ships.c.aCV) return 'Q';
							if (ships.c.aBB >= 3) return 'Q';
							if (ships.speed <= 5) return 'Q';
							if (ships.c.DD >= 4) return 'N';
							return 'Q';
						}
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
						debuffGive: function() {
							if (CHDATA.event.maps[5].part < 3) return;
							if (CHDATA.event.maps[5].hp > MAPDATA[50].maps[5].parts[3].finalhp[getDiff()]) return;
							if (FLEETS1[0].AS >= 1) CHDATA.event.maps[5].debuff.N_d = 1;
						},
						route: 'O'
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
						route: 'S'
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
						routeS: ['R','U1']
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
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) return 'U1';
							if (ships.speed <= 5) return 'U1';
							if (ships.c.aCV >= 4) return 'U1';
							if (ships.c.CV + ships.c.CVB >= 3) return 'U1';
							return 'T';
						}
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
						debuffGive: function() {
							if (!checkRoute(2)) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[5].debuff.S = CHDATA.event.maps[5].debuff.S + 1 || 1;
						},
						showLoSPlane: 'V',
						routeC: function(ships) {
							let vals = {
								3: { 116: 'V', 106: 'P' },
								2: { 100: 'V', 90: 'P' },
								1: { 80: 'V', 70: 'P' },
								4: { 60: 'V', 50: 'P' },
							}[getDiff()];
							let los = getELoS33(1,3) + getELoS33(2,3);
							return checkELoS33(los,vals);
						}
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
						route: 'U2'
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
						debuffGive: function() {
							if (!checkRoute(1)) return;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[5].debuff.U_1 = CHDATA.event.maps[5].debuff.U_1 + 1 || 1;
							if (!checkRoute(2)) return;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[5].debuff.U_2 = CHDATA.event.maps[5].debuff.U_2 + 1 || 1;
							if (CHDATA.event.maps[5].part < 3) return;
							if (CHDATA.event.maps[5].hp > MAPDATA[50].maps[5].parts[3].finalhp[getDiff()]) return;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[5].debuff.U_d = 1;
						},
						end: true
					},
					'U1': {
						type: 1,
						x: 553,
						y: 111,
						distance: 8,
						hidden: 1,
						setupSpecial: function() {
							let ships = getAllShips();
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = null;
							MAPDATA[50].maps[5].applyBonusU(ships);
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
						routeC: function(ships) {
							this.showLoSPlane = 'T';
							if (CHDATA.fleets.combined == 2) {
								if (ships.c.aCV) {
									this.showLoSPlane = 'T';
									if (ships.c.DD >= 3) this.showLoSPlane = 'U2';
								} else {
									this.showLoSPlane = 'V1';
									if (isShipInList(ships.c.ids,187) || isShipInList(ships.c.ids,450)) this.showLoSPlane = 'V2';
								}
							} else {
								this.showLoSPlane = 'U2';
								if (ships.c.aBB + ships.c.aCV >= 5) this.showLoSPlane = 'T';
								if (ships.c.CV + ships.c.CVB >= 3) this.showLoSPlane = 'T';
							}
							let vals = {
								3: { 116: this.showLoSPlane, 106: 'U3' },
								2: { 100: this.showLoSPlane, 90: 'U3' },
								1: { 80: this.showLoSPlane, 70: 'U3' },
								4: { 60: this.showLoSPlane, 50: 'U3' },
							}[getDiff()];
							let los = getELoS33(1,3) + getELoS33(2,3);
							return checkELoS33(los,vals);
						}
					},
					'U2': {
						type: 1,
						x: 580,
						y: 59,
						distance: 9,
						hidden: 1,
						setupSpecial: function() {
							let ships = getAllShips();
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = null;
							MAPDATA[50].maps[5].applyBonusU(ships);
						},
						compDiff: {
							3: {'Hard 1':50,'Hard 2':50},
							2: {'Medium 1':55,'Medium 2':45},
							1: {'Easy 1':55,'Easy 2':45},
							4: {'Casual 1':50,'Casual 2':50},
						},
						showLoSPlane: 'U',
						routeC: function(ships) {
							let vals = {
								3: { 120: 'U', 110: 'U3' },
								2: { 100: 'U', 90: 'U3' },
								1: { 80: 'U', 70: 'U3' },
								4: { 60: 'U', 50: 'U3' },
							}[getDiff()];
							let los = getELoS33(1,3) + getELoS33(2,3);
							return checkELoS33(los,vals);
						}
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
						setupSpecial: function() {
							let ships = getAllShips(true);
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = null;
							MAPDATA[50].maps[5].applyBonus2(ships);
							MAPDATA[50].maps[5].applyBonusU(ships);
							MAPDATA[50].maps[5].applyBonusV(ships);
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
						debuffGive: function() {
							if (!checkRoute(2)) return;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[5].debuff.V = CHDATA.event.maps[5].debuff.V + 1 || 1;
							if (CHDATA.event.maps[5].part < 3) return;
							if (CHDATA.event.maps[5].hp > MAPDATA[50].maps[5].parts[3].finalhp[getDiff()]) return;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[5].debuff.V_d = 1;
						},
						end: true
					},
					'V1': {
						type: 1,
						x: 544,
						y: 148,
						distance: 7,
						hidden: 1,
						setupSpecial: function() {
							let ships = getAllShips();
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = null;
							MAPDATA[50].maps[5].applyBonus2(ships);
						},
						compDiff: {
							3: {'Hard 1':35,'Hard 2':35,'Hard 3':30},
							2: {'Medium 1':35,'Medium 2':35,'Medium 3':30},
							1: {'Easy 1':40,'Easy 2':30,'Easy 3':30},
							4: {'Casual 1':35,'Casual 2':30,'Casual 3':35},
						},
						debuffGive: function() {
							if (CHDATA.event.maps[5].part < 3) return;
							if (CHDATA.event.maps[5].hp > MAPDATA[50].maps[5].parts[3].finalhp[getDiff()]) return;
							if (CHDATA.temp.rank == 'S') CHDATA.event.maps[5].debuff.V1_d = 1;
						},
						route: 'V'
					},
					'V2': {
						type: 3,
						x: 585,
						y: 145,
						distance: 8,
						hidden: 1,
						repair: true,
						route: 'V'
					},
					'W': {
						type: 3,
						x: 333,
						y: 212,
						distance: 4,
						hidden: 2,
						showLoSPlane: 'X',
						routeC: function(ships) {
							let vals = {
								3: { 81: 'X', 70: 'P' },
								2: { 62: 'X', 55: 'P' },
								1: { 50: 'X', 42: 'P' },
								4: { 42: 'X', 36: 'P' },
							}[getDiff()];
							let los = getELoS33(1,3);
							return checkELoS33(los,vals);
						}
					},
					'X': {
						type: 1,
						x: 422,
						y: 242,
						distance: 5,
						hidden: 2,
						setupSpecial: function() {
							let ships = getAllShips();
							for (let ship of ships) {
								ship.bonusEvMod = 1;
								if (!ship.bonusSpecial) continue;
								for (let bonus of ship.bonusSpecial) {
									ship.bonusEvMod *= bonus.mod;
								}
							}
							
							let debuffed = CHDATA.event.maps[5].debuffed || MAPDATA[50].maps[5].debuffCheck(CHDATA.event.maps[5].debuff);
							if (debuffed) {
								for (let ship of getAllShips()) {
									if (ship.type == 'DD') {
										ship.bonusEvMod *= 1.35;
									} else {
										ship.bonusEvMod *= 1.2;
									}
								}
							}
						},
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
						routeC: function(ships) {
							this.showNoCompass = true;
							if (checkRoute(3)) {
								this.showNoCompass = false;
								if (ships.speed >= 10 && ships.c.CLT <= 0) return 'Z1';
							}
							return 'Y';
						}
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
						debuffGive: function() {
							if (!checkRoute(2)) return;
							if (CHDATA.temp.rank == 'S' || CHDATA.temp.rank == 'A') CHDATA.event.maps[5].debuff.Y = CHDATA.event.maps[5].debuff.Y + 1 || 1;
						},
						get end() {
							return !checkRoute(3);
						},
						route: 'Z1'
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
						setupSpecial: function() {
							let ships = getAllShips(true);
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = null;
							MAPDATA[50].maps[5].applyBonus3(ships);
							MAPDATA[50].maps[5].applyBonusZ(ships);

							let debuffed = CHDATA.event.maps[5].debuffed || MAPDATA[50].maps[5].debuffCheck(CHDATA.event.maps[5].debuff);
							if (debuffed) {
								for (let ship of ships) {
									if (!ship.bonusSpecial) ship.bonusSpecial = [];
									ship.bonusSpecial.push({mod:1.15,on:[2009,2010,2011]});
									
									if ([4,16,20,21,34,41,52,56].indexOf(ship.sclass) != -1) {
										ship.bonusSpecial.push({mod:1.2});
									}
									if ([1,5,10,12,18,22,23,28,30,38,54,66,101].indexOf(ship.sclass) != -1) {
										ship.bonusSpecial.push({mod:1.35});
									}
								}
							}
							for (let mid = 2009; mid <= 2011; mid++) {
								SHIPDATA[mid].image = debuffed ? SHIPDATA[mid].imageBroken : SHIPDATA[mid].imageBase;
								VOICES[mid].attack = debuffed ? VOICES[mid].attackB : VOICES[mid].attackN;
								VOICES[mid].damage = debuffed ? VOICES[mid].damageB : VOICES[mid].damageN;
							}
							for (let mid = 2003; mid <= 2005; mid++) {
								SHIPDATA[mid].image = debuffed ? SHIPDATA[mid].imageBroken : SHIPDATA[mid].imageBase;
								VOICES[mid].attack = debuffed ? VOICES[mid].attackB : VOICES[mid].attackN;
								VOICES[mid].damage = debuffed ? VOICES[mid].damageB : VOICES[mid].damageN;
							}
							
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
						},
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
						setupSpecial: function() {
							let ships = getAllShips();
							for (let ship of ships) ship.bonusSpecial = ship.bonusSpecialAcc = null;
							MAPDATA[50].maps[5].applyBonusZ1(ships);
						},
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
						routeC: function(ships) {
							if (ships.c.CLT) return 'Z2';
							return 'Z';
						}
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
						route: 'Z'
					},
				}
			}
		}
	}