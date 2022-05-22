const MapSelectionComponent = {
    props: ['maps'],
    emits: ['addMap', 'elementChanged'],
    
    methods: {
        addMap() {
            this.$emit('addMap')
        },
        
        mapSelectionChanged(map, eventSettingClicked) {
            this.$emit('elementChanged', map, eventSettingClicked);
        },
    },

    template: `
        
        <div id="mapButtons">
            <div class="mapButton" @click="mapSelectionChanged(null, true)">Event settings</div>

            <div class="mapButton" v-for="map in maps">
                <div @click="mapSelectionChanged(map, false)">{{map.name}}</div>
            </div>

            <div class="mapButton" @click="addMap">Add map</div>
        </div>
    
    `
}