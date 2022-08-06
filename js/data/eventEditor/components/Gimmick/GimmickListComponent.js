const GimmickListComponent = {
    props: ['gimmickList', 'mapData'],

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
        addGimick() {
            this.gimmickList.gimmicks.push(new ChGimmick({}));
        },

        deleteGimmick(key) {
            this.gimmickList.gimmicks.splice(key, 1);
        }
    },
    
    watch: {
        
    },

    template: `
    
        <button @click="addGimick">Add gimmick requirement</button>

        <table>

            <tr>
                <td>Number of step required (0/nothing = all required)</td>
                <td><input v-model="gimmickList.additionnalParameters.numberOfStepRequired" min="0" type="number"></td>
            </tr>


            <tr>
                <td>Last dance only ?</td>
                <td><input v-model="gimmickList.additionnalParameters.lastDanceOnly" type="checkbox"></td>
            </tr>

            <tr>
                <td>Map part</td>
                <td><vcomboboxeditor :data-source="gimmickList" :item-list="mapPartItemList" data-field="mapPartNumber" :can-be-null="true"/></td>
            </tr>
            
            <tr>
                <td>Route unlock required</td>
                <td><vcomboboxeditor :data-source="gimmickList.additionnalParameters" :item-list="routeUnlockItemList" data-field="routeUnlockRequired" :can-be-null="true"/></td>
            </tr>

            <tr>
                <td>
                    <div v-for="(gimmick, key) in gimmickList.gimmicks" :key="key">
                        <button @click="deleteGimmick(key)">Delete</button>
                        <vgimmickeditor :gimmick-data="gimmick" :map-data="mapData" />
                    </div>
                </td>
            </tr>

        </table>
    
    `
}