const ShipIdsListEditorComponent = {
    props: ['dataSource', 'numberOfShips'],
	emits: [],
	data: () => ({
		shipNew: { mstId: 0 },
		shipDragged: null,
	}),
	computed: {
        fleet() {
            return this.dataSource.map(shipId => ({ mid: shipId }));
        },

		canAddShip() { 
			if (!this.numberOfShips) return true;

			return this.dataSource.length < this.numberOfShips; 
		},
	},
	methods: {
		addNewShip() {
            
			if (!this.canAddShip) return;

			this.dataSource.push(this.shipNew.mid);

			this.shipNew = { mstId: 0 };
		},

        setShip(ship, key) {
            
			this.dataSource[key] = ship.mid;
		},
		
		deleteShip(shipDel) {
			this.dataSource.splice(this.dataSource.indexOf(shipDel.mid), 1);
		},
		
		swapShip(shipFrom,shipTo) {
			if (!shipFrom || !shipTo) return;
			if (shipFrom == shipTo) return;

			let idxFrom = this.dataSource.indexOf(shipFrom.mid);
			let idxTo = this.dataSource.indexOf(shipTo.mid);

			[this.dataSource[idxFrom], this.dataSource[idxTo]] = [this.dataSource[idxTo], this.dataSource[idxFrom]];
		},
	},
	template: `
	<div class="fleetEditor">
		<div style="display:flex">
			<vshipeditor v-for="(ship, key) in fleet" :key="key" :ship="ship" @ship-set="setShip(ship, key)" :ship-only="true" @ship-delete="deleteShip(ship)" @ship-drag="shipDragged=ship" @ship-dragend="shipDragged=null" @ship-drop="swapShip(ship,shipDragged)"></vshipeditor>
			<vshipeditor v-show="canAddShip" :ship="shipNew" :ship-only="true" @ship-set="addNewShip"></vshipeditor>
		</div>
	</div>
	`
}