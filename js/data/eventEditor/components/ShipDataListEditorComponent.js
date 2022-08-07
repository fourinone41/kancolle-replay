const ShipDataListEditorComponent = {
    props: ['dataSource', 'numberOfShips', 'editors'],
	emits: [],
	data: () => ({
		shipNew: { mstId: 0 },
		shipDragged: null,
	}),
	computed: {
		canAddShip() { return true; },
	},
	methods: {
		addNewShip() {
			if (!this.canAddShip) return;
			this.dataSource.push(this.shipNew);
			this.shipNew = { mstId: 0 };
		},
		
		deleteShip(shipDel) {
			this.dataSource = this.dataSource.filter(ship => ship != shipDel);
		},
		
		swapShip(shipFrom,shipTo) {
			if (!shipFrom || !shipTo) return;
			if (shipFrom == shipTo) return;
			let idxFrom = this.dataSource.indexOf(shipFrom);
			let idxTo = this.dataSource.indexOf(shipTo);
			[this.dataSource[idxFrom], this.dataSource[idxTo]] = [this.dataSource[idxTo], this.dataSource[idxFrom]];
		},
	},
	template: `
	<div class="fleetEditor">
		<div style="display:flex">
			<vshipeditor v-for="ship in dataSource" :ship="ship" :ship-only="false" @ship-delete="deleteShip(ship)" @ship-drag="shipDragged=ship" @ship-dragend="shipDragged=null" @ship-drop="swapShip(ship,shipDragged)" :editors="editors"></vshipeditor>
			<vshipeditor v-show="canAddShip" :ship="shipNew" :ship-only="false" @ship-set="addNewShip"></vshipeditor>
		</div>
	</div>
	`
};