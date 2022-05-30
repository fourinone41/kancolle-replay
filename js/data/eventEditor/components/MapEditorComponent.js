const MapEditorComponent = {
    props: ['mapData', 'eventData'],
    emits: ['mapDeleted'],

    data: () => ({
        currentTab: 'mapSettings',

        mouseX: 0,
        mouseY: 0,
        
        currentNode: null,
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
        },

        nodeList() {
            return Object.keys(this.mapData.nodes).map(key => ({ key: key, display: key }));
        }
    },

    methods: {
        // getCurrentNode() {
            // if (this.currentTab != 'nodes') return null;
            // return this.currentNode;
        // },

        onMouseMoveOnMap (event) {
            this.mouseX = event.pageX - event.target.offsetLeft;
            this.mouseY = event.pageY - event.target.offsetTop;
        },

        // onClickOnMap () {
            // const node = this.getCurrentNode();
            // if (!node) return;

            // node.x = this.mouseX;
            // node.y = this.mouseY;
        // },

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
        
        addNode(nodeName,x=0,y=0) {
            this.mapData.nodes[nodeName] = new ChNodeData();
            this.mapData.nodes[nodeName].x = x;
            this.mapData.nodes[nodeName].y = y;
            this.mapData.nodes[nodeName].rules = [];
            this.onNodeChanged(nodeName);
        },
        
        deleteNode(nodeName) {
            this.currentNode = null;
            delete this.mapData.nodes[nodeName];
        },
        
        onNodeChanged(name) {
            this.currentNode = name; 
            this.changeTab('nodes');
        },

        addPart() {
            const key = Object.keys(this.mapData.parts).length + 1;

            this.mapData.parts[key] = {
                currentBoss: '',
                maphp: {
                  3: { 1: 0 },
                  2: { 1: 0 },
                  1: { 1: 0 },
                  4: { 1: 0 },
                },
                finalhp: {
                    3: 0,
                    2: 0,
                    1: 0,
                    4: 0,
                },
            };
        },

        deletePart(partNumber) {
            delete this.mapData.parts[partNumber];
        }
    },
    
    watch: {
        mapData() {
            this.currentNode = null;
        },
    },

    template: document.getElementById('map-editor')
}