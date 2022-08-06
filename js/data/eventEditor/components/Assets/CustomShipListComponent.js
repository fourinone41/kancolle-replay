const CustomShipListComponent = {
    props: ['shipList'],

    data: () => ({
        
    }),

    computed: {
        
    },

    methods: {
        addShip() {
            const newShip = new ChShipData();
            newShip.id = +COMMON.getLastCustomShipId() + 1;

            this.shipList.push(newShip);
            COMMON.addCustomShip(newShip);
        },
        copyShip() {
            const newShip = new ChShipData();
            const modelShip = this.shipList[this.shipList.length - 1];
            
            for (const key in modelShip) {
                if (typeof(modelShip[key])  == "Object" && newShip[key] !== undefined) Object.assign(newShip[key], modelShip[key]);
                else newShip[key] = modelShip[key];
            }

            newShip.id = +COMMON.getLastCustomShipId() + 1;
    
            this.shipList.push(newShip);
            COMMON.addCustomShip(newShip);
        },
        deleteShip() {
            // --- todo : remove from other componenets
            this.shipList.splice(this.shipList.length - 1, 1);
        },
    },
    
    watch: {
        
    },

    template: `
        
        <button @click="addShip">Add Ship</button>
        <button v-if="shipList.length" @click="copyShip">Copy Ship</button>
        <button v-if="shipList.length" @click="deleteShip">Delete Ship</button>

        <div v-for="(ship, key) in shipList" :key="key">
            <uigroup :title="ship.name">
                <vcustomshipeditor :ship-data="ship" />
            </uigroup>
        </div>
    
    `
}