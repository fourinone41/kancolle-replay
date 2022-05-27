const MapEditorComponent = {
    props: ['mapData', 'eventData'],
    emits: ['mapDeleted'],

    data: () => ({
        currentTab: 'mapSettings',

        mouseX: 0,
        mouseY: 0,

        /**
         * Use getCurrentNode to access this property
         */
        _currentNode: null,
    }),

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
        getCurrentNode() {
            if (this.currentTab != 'nodes') return null;
            return this._currentNode;
        },

        onMouseMoveOnMap (event) {
            this.mouseX = event.pageX - event.target.offsetLeft;
            this.mouseY = event.pageY - event.target.offsetTop;
        },

        onClickOnMap () {
            const node = this.getCurrentNode();
            if (!node) return;

            node.x = this.mouseX;
            node.y = this.mouseY;
        },

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

        stopBGM() {
            COMMON.SOUND_MANAGER.stopBGM();
        },

        changeTab(tabName) {
            return this.currentTab = tabName;
        },
        
        selectedTab(tabName) {
            return tabName == this.currentTab;
        },

        onNodeChanged(node) {
            this._currentNode = node; 
        }
    },

    template: document.getElementById('map-editor')
}