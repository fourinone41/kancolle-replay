const EquipEditorComponent = {
	props: ['equipId'],
	emits: ['equip-set','equip-delete','equip-drag','equip-dragend','equip-drop'],
	data: () => ({
		
	}),
	computed: {
		imgPath() { return this.equipId ? 'assets/items/' + (EQDATA[this.equipId].image || EQTDATA[EQDATA[this.equipId].type].image) + '.png' : null; },
		equipName() { return this.equipId ? EQDATA[this.equipId].name : ''; },
	},
	methods: {
		clickedEquip() {
			COMMON.global.equipSelector.open(this._setEquip.bind(this),this._refocusEquip.bind(this));
		},
		
		keypressedEquip(e) {
			e.preventDefault();
			if (e.key == 'Enter') {
				COMMON.global.equipSelector.open(this._setEquip.bind(this),this._refocusEquip.bind(this));
			}
			if (e.key.length == 1) {
				COMMON.global.equipSelector.open(this._setEquip.bind(this),this._refocusEquip.bind(this),e.key);
			}
		},
		
		_setEquip(mstId) {
			if (mstId == 0) {
				this.$emit('equip-delete');
				return;
			}
			this.$emit('equip-set',mstId);
		},
		
		_refocusEquip() {
			setTimeout(() => this.$refs.equipButton && this.$refs.equipButton.focus(),1);
		},
	},
	template: `
	<div class="equipEditor">
		<img src="assets/items/0.png" />
		<img v-show="equipId" class="equipIcon" :src="imgPath" @dragstart="$emit('equip-drag')" @dragover.prevent="" @dragend="$emit('equip-dragend')" @drop.prevent="$emit('equip-drop')"/>
		<div class="name">
			<input ref="equipButton" :value="equipName" placeholder="Add New Equip" spellcheck="false" readonly @click="clickedEquip" @keypress="keypressedEquip"/>
			<div v-show="equipId" class="delete" @click="$emit('equip-delete')">&#10006;</div>
		</div>
	</div>
	`
};