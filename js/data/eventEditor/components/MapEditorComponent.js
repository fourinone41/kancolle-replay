const MapEditorComponent = {
    props: ['mapData', 'eventData'],
    emits: ['mapDeleted'],

    methods: {
        deleteMap () {
            if (confirm("Are you sure you want to delete this map ?")) {
                for (const mapkey in this.eventData.maps) {
                    if (this.eventData.maps[mapkey].name == this.mapData.name) {
                        delete this.eventData.maps[mapkey];
                        this.$emit('mapDeleted');
                        return;
                    }
                }
            }
        }
    },

    template: document.getElementById('map-editor')
}