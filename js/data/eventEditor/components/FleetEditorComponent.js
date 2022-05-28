const FleetEditorComponent = {
	props: ['fleet','isFriendFleet'],
	emits: [],
	data: () => ({
		shipNew: { mstId: 0 },
		shipDragged: null,
	}),
	computed: {
		canAddShip() { return this.fleet.ships.length < COMMON.consts.numShipMaxSF; },
	},
	methods: {
		addNewShip() {
			if (!this.canAddShip) return;
			this.fleet.ships.push(this.shipNew);
			this.shipNew = { mstId: 0 };
		},
		
		deleteShip(shipDel) {
			this.fleet.ships = this.fleet.ships.filter(ship => ship != shipDel);
		},
		
		swapShip(shipFrom,shipTo) {
			if (!shipFrom || !shipTo) return;
			if (shipFrom == shipTo) return;
			let idxFrom = this.fleet.ships.indexOf(shipFrom);
			let idxTo = this.fleet.ships.indexOf(shipTo);
			[this.fleet.ships[idxFrom], this.fleet.ships[idxTo]] = [this.fleet.ships[idxTo], this.fleet.ships[idxFrom]];
		},
	},
	template: `
	<div class="fleetEditor">
		<div style="display:flex">
			<vshipeditor v-for="ship in fleet.ships" :ship="ship" :ship-only="!+isFriendFleet" @ship-delete="deleteShip(ship)" @ship-drag="shipDragged=ship" @ship-dragend="shipDragged=null" @ship-drop="swapShip(ship,shipDragged)"></vshipeditor>
			<vshipeditor v-show="canAddShip" :ship="shipNew" :ship-only="!+isFriendFleet" @ship-set="addNewShip"></vshipeditor>
		</div>
	</div>
	`
};