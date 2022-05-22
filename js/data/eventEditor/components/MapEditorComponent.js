const MapEditorComponent = {
    props: ['mapData'],
        
    methods: {
        
    },

    template: `
        
        <label for="nameT">Map name</label>
        <input class="simple-editor" v-model="mapData.nameT" name="nameT"/>
    
    `
}