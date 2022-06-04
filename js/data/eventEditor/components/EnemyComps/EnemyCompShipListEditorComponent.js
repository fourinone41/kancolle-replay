const EnemyCompShipListEditorComponent = {
    props: ['shipList'],

	data: () => ({
		shipNew: { mstId: 0 },
		shipDragged: null,
	}),

	computed: {
		canAddShip() { return this.shipList.length < 6; },

        fleet() { return this.shipList.map(id => ({ mid: id })) },
	},

    methods: {
		addNewShip() {
			if (!this.canAddShip) return;
			this.shipList.push(this.shipNew.mid);
			this.shipNew = { mstId: 0 };
		},
		
		deleteShip(shipDel) {
            const index = this.shipList.indexOf(shipDel.mid);

            if (index != -1) this.shipList.splice(index, 1);
			
		},
		
		swapShip(shipFrom,shipTo) {
			if (!shipFrom || !shipTo) return;
			if (shipFrom == shipTo) return;
			let idxFrom = this.shipList.indexOf(shipFrom.mid);
			let idxTo = this.shipList.indexOf(shipTo.mid);
			[this.shipList[idxFrom], this.shipList[idxTo]] = [this.shipList[idxTo], this.shipList[idxFrom]];
		},
	},

    template: `
    
        
        <div style="display:flex">
            <vshipeditor v-for="ship in fleet" :ship="ship" :ship-only="true" @ship-delete="deleteShip(ship)" @ship-drag="shipDragged=ship" @ship-dragend="shipDragged=null" @ship-drop="swapShip(ship,shipDragged)"></vshipeditor>
            <vshipeditor v-show="canAddShip" :ship="shipNew" :ship-only="true" @ship-set="addNewShip"></vshipeditor>
        </div>
    
    `
}