/**
 * 
 * @param {'debuff' | 'route'} type 
 * @param {ChGimmickParameters[]} gimmickData 
 * @param {{
 *  numberOfStepRequired: number
 *  partToUnlock: number
 *  lastDanceOnly: boolean
 *  description: string
 *  title: string
 * }} additionalParameters Additionnal parameters to handle special cases
 */
function ChGimmickList(type, mapPartNumber, mapNum, gimmickData, additionalParameters) {
	this.type = type;
	this.mapPartNumber = mapPartNumber;
	this.mapNum = mapNum;
	this.additionalParameters = additionalParameters || {};
	this.gimmicks = gimmickData.map(data => new ChGimmick(data));
	for (let gimmick of this.gimmicks) {
		if (!gimmick.mapNum) gimmick.mapNum = this.mapNum;
	}
	
	this.check = function() {
		if (this.mapPartNumber && CHDATA.event.maps[this.mapNum].part < this.mapPartNumber) return false;
		if (this.type == 'lbRelocate' && this.additionalParameters.routeUnlockRequired && !(CHDATA.event.maps[this.mapNum].routes || []).includes(this.additionalParameters.routeUnlockRequired)) return false;
		return this.gimmicks.filter(gimmick => gimmick.check()).length >= (this.additionalParameters.numberOfStepRequired || this.gimmicks.length);
	}
	this.update = function(args) {
		if (this.additionalParameters.partRequired && (CHDATA.event.maps[this.mapNum].part || 0) < this.additionalParameters.partRequired) return false;
		if (this.additionalParameters.routeUnlockRequired && !(CHDATA.event.maps[this.mapNum].routes || []).includes(this.additionalParameters.routeUnlockRequired)) return false;
		if (this.additionalParameters.lastDanceOnly && !this.checkLastDance()) return false;
		
		let progressed = false;
		for (let gimmick of this.gimmicks) {
			let donePrev = gimmick.check();
			gimmick.update(args);
			if (gimmick.check() && !donePrev) progressed = true;
			console.log(gimmick.key + ' ' + gimmick.mapNum + ' ' + gimmick.check() + ' '+ donePrev + ' ' + progressed)
		}
		return progressed;
	}
	this.checkLastDance = function() {
		if (!CHDATA.event.maps[this.mapNum].hp) return false;
		if (!CHDATA.event.maps[this.mapNum].diff) return false;
		if ((CHDATA.event.maps[this.mapNum].part || 0) < this.mapPartNumber) return false; //mapPartNumber prevents update for LD gimmick, unlike "additional gimmick" for normal
		let finalhp = MAPDATA[WORLD].maps[this.mapNum].parts ? MAPDATA[WORLD].maps[this.mapNum].parts[this.mapPartNumber].finalhp : MAPDATA[WORLD].maps[this.mapNum].finalhp;
		if (!finalhp) return false;
		return CHDATA.event.maps[this.mapNum].hp <= finalhp[CHDATA.event.maps[this.mapNum].diff];
	}
}
ChGimmickList.updateAll = function(args) {
	let progressed = false;
	if (MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes) {
		for (let route in MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes) {
			if (MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes[route].unlockRules) {
				progressed = MAPDATA[WORLD].maps[MAPNUM].hiddenRoutes[route].unlockRules.update(args) || progressed;
			}
		}
	}
	if (MAPDATA[WORLD].maps[MAPNUM].debuffRules) {
		progressed = MAPDATA[WORLD].maps[MAPNUM].debuffRules.update(args) || progressed;
	}
	if (MAPDATA[WORLD].maps[MAPNUM].lbParts) {
		for (let part in MAPDATA[WORLD].maps[MAPNUM].lbParts) {
			if (MAPDATA[WORLD].maps[MAPNUM].lbParts[part].unlockRules) {
				progressed = MAPDATA[WORLD].maps[MAPNUM].lbParts[part].unlockRules.update(args) || progressed;
			}
		}
	}
	
	if (!ChGimmickList._gimmickExtra[WORLD] || !ChGimmickList._gimmickExtra[WORLD][MAPNUM]) ChGimmickList._getGimmickExtra(MAPNUM);
	for (let gimmickList of ChGimmickList._gimmickExtra[WORLD][MAPNUM]) {
		progressed = gimmickList.update(args) || progressed;
	}
	
	if (progressed && CHDATA.sortie) CHDATA.sortie.gimmickProgressed = true;
	return progressed;
}
ChGimmickList._gimmickExtra = {};
ChGimmickList._getGimmickExtra = function(mapnum) {
	if (!ChGimmickList._gimmickExtra[WORLD]) ChGimmickList._gimmickExtra[WORLD] = {};
	ChGimmickList._gimmickExtra[WORLD][mapnum] = [];
	for (let m in MAPDATA[WORLD].maps) {
		if (m == mapnum) continue;
		if (!MAPDATA[WORLD].maps[m].debuffRules) continue;
		if (MAPDATA[WORLD].maps[m].debuffRules.gimmicks.find(gimmick => gimmick.mapNum == mapnum)) {
			ChGimmickList._gimmickExtra[WORLD][mapnum].push(MAPDATA[WORLD].maps[m].debuffRules);
		}
	}
}

function ChGimmick(data) {
	for (let key in data) this[key] = data[key];
	this.key = data.key || data.node;
	this.timesMax = 0;
	for (let diff in this.timesRequiredPerDiff) {
		if (this.timesRequiredPerDiff[diff] > this.timesMax) this.timesMax = this.timesRequiredPerDiff[diff];
	}

	this.check = function() {
		if (this.node == 'AB' && CHDATA.config.disableRaidReq) return true;
		let debuff = CHDATA.event.maps[this.mapNum].debuff, diff = CHDATA.event.maps[this.mapNum].diff;
		if (!diff) return false;
		if (!this.timesRequiredPerDiff[diff]) return true;
		if (!debuff) return false;
		return (debuff[this.key] || 0) >= (this.timesRequiredPerDiff[diff] || 0);
	}
	this.update = function(args) {
		let c = this.getCount(args);
		if (c) {
			if (!CHDATA.event.maps[this.mapNum].debuff) CHDATA.event.maps[this.mapNum].debuff = {};
			CHDATA.event.maps[this.mapNum].debuff[this.key] = Math.min(this.timesMax, CHDATA.event.maps[this.mapNum].debuff[this.key] + c || c);
		}
	}
	this.getCount = function(args) {
		if (this.mapNum && this.mapNum != MAPNUM) return 0;
		if (this.node && this.node != args.node) return 0;
		if (this.type == 'ReachNode') {
			return 1;
		}
		if (this.type == 'battle') {
			return +(ChGimmick.rankToNum(args.rank) >= ChGimmick.rankToNum(this.rank));
		}
		if (this.type == 'AirState') {
			return +(args.airState >= ChGimmick.airStateToNum(this.airState));
		}
	}
}

ChGimmick.airStateToNum = function(airState) {
	return ['AI','AD','AP','AS','AS+'].indexOf(airState) - 2;
}
ChGimmick.rankToNum = function(rank) {
	return ['E','D','C','B','A','S'].indexOf(rank);
}