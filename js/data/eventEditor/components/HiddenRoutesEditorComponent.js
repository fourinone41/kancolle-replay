const HiddenRoutesEditorComponent = {
    props: ['mapData', 'mapNumber', 'gimmickType'],

    data: () => ({
        
    }),

    computed: {

    },

    methods: {
        addHiddenRoute() {

            this.mapData.hiddenRoutes[999] = {
                images: [],
                unlockRules: new ChGimmickList(this.gimmickType, null, this.mapNumber, [], { })
            }; 

            this.recomputeHiddenRoute();
        },

        deleteHiddenRoute(routeNumber) {
            delete this.mapData.hiddenRoutes[routeNumber];
            this.recomputeHiddenRoute();
        },

        recomputeHiddenRoute() {
            const parts = Object.values(this.mapData.hiddenRoutes);
            let count = 0;

            for (const route in this.mapData.hiddenRoutes) {
                delete this.mapData.hiddenRoutes[route];
            }

            for (const route of parts) {
                count++;

                this.mapData.hiddenRoutes[count] = route;

                if (this.gimmickType == "mapPart") {
                    this.mapData.hiddenRoutes[count].unlockRules.additionnalParameters.partToUnlock = count;
                }
            }
        },

        addImage(routeNumber) {
            this.mapData.hiddenRoutes[routeNumber].images.push({ name: '', x: 0, y: 0, customName: '' });
        },

        deleteImage(routeNumber, imageKey) {
            this.mapData.hiddenRoutes[routeNumber].images.splice(imageKey, 1);
        }
    },
    
    watch: {
        
    },

    template: `
    
        <div>

            <button @click="addHiddenRoute()">Add hidden route</button>

            <div v-for="(route, key) in mapData.hiddenRoutes" :key="key">

                <button @click="addImage(key)">Add image</button>
                <button @click="deleteHiddenRoute(key)">Delete</button>

                <div v-for="(imageData, imageKey) in route.images" :key="imageKey">
                    <div>
                        <button @click="deleteImage(key, imageKey)">Delete</button>
                        <input v-model="imageData.customName" /><br>
                        X offset <input v-model="imageData.x" /><br>
                        Y offset <input v-model="imageData.y" /><br>
                        <img :src="imageData.customName" />
                    </div>
                </div>

                <vgimmicklist :gimmick-list="route.unlockRules.gimmicks" :map-data="mapData" />

            </div>
        </div>
    
    `
}