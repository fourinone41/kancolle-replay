const MapEditorComponent = {
    props: ['mapData', 'eventData'],
    emits: ['mapDeleted'],

    computed: {
        fleetsItemSource () {
            const fleets = [];
            
            for (const fleetType of this.eventData.allowFleets) {

                const type = COMMON.FLEET_TYPES.find(el => el.key == fleetType);

                fleets.push(type);
            }

            return fleets;
        },

        locksItemSource () {
            const locks = [];
            
            for (const lock of this.eventData.locksData) {

                const newLock = {
                    display: lock.name,
                    key: lock.name
                }

                locks.push(newLock);
            }

            return locks;
        }
    },

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
        },

        playBGM(bgm) {
            COMMON.SOUND_MANAGER.playBGM(bgm, 1, true);
        },

        stopBGM(bgm) {
            COMMON.SOUND_MANAGER.stopBGM();
        },
    },

    template: document.getElementById('map-editor')
}