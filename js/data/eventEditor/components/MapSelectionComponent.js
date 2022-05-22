const MapSelectionComponent = {
    props: ['maps'],
    emits: ['addMap'],
    
    methods: {
        addMap() {
            this.$emit('addMap')
        },
    },
    template: `
        
        <div id="mapButtons">
            <div class="mapButton">Event settings</div>

            <div class="mapButton" v-for="map in maps">
                {{map.name}}
            </div>

            <div class="mapButton" @click="addMap">Add map</div>
        </div>
    
    `
}