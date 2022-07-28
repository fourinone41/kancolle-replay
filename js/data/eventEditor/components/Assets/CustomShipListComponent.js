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
        }
    },
    
    watch: {
        
    },

    template: `
        
        <button @click="addShip">Add Ship</button>
        <div v-for="(ship, key) in shipList" :key="key">
            <vcustomshipeditor :ship-data="ship" />
        </div>
    
    `
}