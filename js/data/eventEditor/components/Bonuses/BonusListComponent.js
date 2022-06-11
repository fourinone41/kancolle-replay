const BonusListComponent = {
    props: ['bonusList', 'mapData'],

    data: () => ({
        
    }),

    computed: {
        mapPartItemList() {
            return Object.keys(this.mapData.parts).map(part => ({ key: part, display: part}));
        },

        routeUnlockItemList() {
            if (!this.mapData.hiddenRoutes) return [];
            return Object.keys(this.mapData.hiddenRoutes).map(route => ({ key: route, display: route}));
        }
    },

    methods: {
        addBonus() {
            this.bonusList.push(new ChBonuses(new ChBonusesParameters()));
        },

        deleteBonus(key) {
            this.bonusList.splice(key, 1);
        }
    },
    
    watch: {
        
    },

    template: `
    
        <button @click="addBonus">Add bonus</button>

        <div v-for="(bonus, key) in bonusList" :key="key">
            <button @click="deleteBonus(key)">Delete bonus</button>
            <vbonuseditor :bonus-data="bonus" :map-data="mapData" />
        </div>
    
    `
}