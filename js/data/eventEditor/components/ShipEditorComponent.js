const ShipEditorComponent = {
	props: ['ship','shipOnly', 'editors'],
	emits: ['ship-set','ship-delete','ship-drag','ship-dragend','ship-drop'],
	data: () => ({
		equipIdNew: 0,
		equipIdxDragged: null,
	}),
	computed: {
		imgPath() { return COMMON.getShipImagePath(this.ship.mid) },
		shipName() { return this.ship.mid ? SHIPDATA[this.ship.mid].name : ''; },
		canAddEquip() { return !!this.ship.mid && this.ship.equips.length < COMMON.consts.numEquipMax; },
	},
	methods: {
		clickedShip() {
			COMMON.global.shipSelector.open(this._setShip.bind(this),this._refocusShip.bind(this));
		},
		
		keypressedShip(e) {
			e.preventDefault();
			if (e.key == 'Enter') {
				COMMON.global.shipSelector.open(this._setShip.bind(this),this._refocusShip.bind(this));
			}
			if (e.key.length == 1) {
				COMMON.global.shipSelector.open(this._setShip.bind(this),this._refocusShip.bind(this),e.key);
			}
		},
		
		addNewEquip(mstId) {
			if (!this.canAddEquip) return;
			this.ship.equips.push(mstId);
			this.equipIdNew = 0;
		},
		
		deleteEquip(idx) {
			console.log(idx)
			this.ship.equips.splice(idx,1);
		},
		
		swapEquip(idxFrom,idxTo) {
			if (!this.ship.equips[idxFrom] || !this.ship.equips[idxTo]) return;
			if (idxFrom == idxTo) return;
			[this.ship.equips[idxFrom], this.ship.equips[idxTo]] = [this.ship.equips[idxTo], this.ship.equips[idxFrom]];
		},
		
		_setShip(mstId) {
			if (mstId == 0) {
				this.$emit('ship-delete');
				return;
			}
			this.ship.mid = mstId;
			if (!this.shipOnly) {
				let sdata = SHIPDATA[mstId];
				this.ship.LVL = 99;
				this.ship.FP = sdata.FP;
				this.ship.TP = sdata.TP;
				this.ship.AA = sdata.AA;
				this.ship.AR = sdata.AR;
				this.ship.damage = [1,1];
				this.ship.equips = [];
			}
			this.$emit('ship-set');
		},
		
		_refocusShip() {
			setTimeout(() => this.$refs.shipButton && this.$refs.shipButton.focus(),1);
		},

		displayEditor(editorName) {
			if (!this.editors) return true;

			return !!this.editors[editorName];
		}
	},
	template: `
	<div class="shipEditor" v-if="ship">
		<div class="name">
			<input ref="shipButton" :value="shipName" placeholder="Add New Ship" spellcheck="false" readonly @click="clickedShip" @keypress="keypressedShip"/>
			<div v-show="ship.mid" class="delete" @click="$emit('ship-delete')">&#10006;</div>
		</div>
		<div :class="{shipBanner:ship.mid}"><img :src="imgPath" @dragstart="$emit('ship-drag')" @dragover.prevent="" @dragend="$emit('ship-dragend')" @drop.prevent="$emit('ship-drop')"/></div>
		<div v-if="ship.mid && !shipOnly">
			<div class="statsWrap">
				<div class="statHalf" v-if="displayEditor('LVL')"><img src="assets/stats/lv.png" title="Level"/><input type="number" v-model.number="ship.LVL" min="1" max="999"/></div>
				<div class="statHalf"></div>
				<div class="statHalf" v-if="displayEditor('FP')"><img src="assets/stats/fp.png" title="Firepower"/><input type="number" v-model.number="ship.FP" min="1" max="999"/></div>
				<div class="statHalf" v-if="displayEditor('TP')"><img src="assets/stats/tp.png" title="Torpedo"/><input type="number" v-model.number="ship.TP" min="1" max="999"/></div>
				<div class="statHalf" v-if="displayEditor('AA')"><img src="assets/stats/aa.png" title="Anti-Air"/><input type="number" v-model.number="ship.AA" min="1" max="999"/></div>
				<div class="statHalf" v-if="displayEditor('AR')"><img src="assets/stats/ar.png" title="Armour"/><input type="number" v-model.number="ship.AR" min="1" max="999"/></div>
				<div class="statWide" v-if="displayEditor('HP') && ship.damage">HP Min %:<input type="number" v-model.number="ship.damage[0]" min="0" max="1" step=".01"/></div>
				<div class="statWide" v-if="displayEditor('HP') && ship.damage">HP Max %:<input type="number" v-model.number="ship.damage[1]" min="0" max="1" step=".01"/></div>
			</div>
			<div class="equipsWrap" v-if="displayEditor('EQUIPS')">
				<vequipeditor v-for="(equipId,idx) in this.ship.equips" :equip-id="equipId" @equip-set="(mstId)=>this.ship.equips[idx]=mstId" @equip-delete="deleteEquip(idx)" @equip-drag="equipIdxDragged=idx" @equip-dragend="equipIdxDragged=null" @equip-drop="swapEquip(idx,equipIdxDragged)"></vequipeditor>
				<vequipeditor v-show="canAddEquip" :equip-id="equipIdNew" @equip-set="addNewEquip"></vequipeditor>
			</div>
		</div>
	</div>
	`
};