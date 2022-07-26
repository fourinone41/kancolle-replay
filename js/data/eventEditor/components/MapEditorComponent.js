const MapEditorComponent = {
    props: ['mapData', 'eventData'],
    emits: ['mapDeleted'],

    data: () => ({
        currentTab: 'mapSettings',

        mouseX: 0,
        mouseY: 0,
        
        currentNode: null,

        trueFalseNodesList: [
            { key: true, display: 'Valid' },
            { key: false, display: 'Not valid' },
        ],

        currentNodeForCutomBGM: null,
    }),

    computed: {
        currentNodeCompObject() {
            if (!this.currentNode) return {};
            
            if (!this.eventData.comps) this.eventData.comps = {};
            if (!this.eventData.comps[this.compsKeys]) this.eventData.comps[this.compsKeys] = {};
            if (!this.eventData.comps[this.compsKeys][this.currentNode]) this.eventData.comps[this.compsKeys][this.currentNode] = {};

            return this.eventData.comps[this.compsKeys][this.currentNode];
        },

        compsKeys() {
            return this.mapData.name[0] + '-' + this.mapData.name[1];
        },

        currentNodeForCustomBGMDisplay() {
            if (this.currentNodeForCutomBGM <= 26) return String.fromCharCode(this.currentNodeForCutomBGM);
            return this.currentNodeForCutomBGM;
        },

        allCompsObject () {
            const comps = {};

            if (!this.currentNode) return comps;
            
            if (!this.eventData.comps) this.eventData.comps = comps;
            if (!this.eventData.comps[this.compsKeys]) this.eventData.comps[this.compsKeys] = comps;

            for (const nodeName in this.eventData.comps[this.compsKeys]) {
                const nodeComps = this.eventData.comps[this.compsKeys][nodeName];

                for (const compName in nodeComps) {
                    const key = nodeName + '-' + compName;
                    comps[key] = {};
                    Object.assign(comps[key], nodeComps[compName]);
                }
            }

            return comps;
        },

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
            if (!this.eventData.locksData) return [];
            
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
        },

        
        mapNumber () {
            for (const mapkey in this.eventData.maps) {
                if (this.eventData.maps[mapkey].name == this.mapData.name) {
                    return mapkey;
                }
            }
            
            return 0;
        },

        isFleetTypePerPart() {
            return !this.mapData.fleetTypes;
        },

        isMultipleLockMap() {
            return Array.isArray(this.mapData.giveLock);
        },

        additionalChecksRules() {
            if (!this.mapData.additionalChecksRules) this.mapData.additionalChecksRules = [];

            return this.mapData.additionalChecksRules;
        },

        startCheckRule() {
            if (!this.mapData.startCheckRule) this.mapData.startCheckRule = [];

            return this.mapData.startCheckRule;
        }

    },

    methods: {
        onMouseMoveOnMap (event) {
            this.mouseX = event.pageX - event.target.offsetLeft;
            this.mouseY = event.pageY - event.target.offsetTop;
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
        
        addNode(nodeName,x=0,y=0,route=null) {
            this.mapData.nodes[nodeName] = new ChNodeData();
            this.mapData.nodes[nodeName].x = x;
            this.mapData.nodes[nodeName].y = y;
			if (route) this.mapData.nodes[nodeName].hidden = route;
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

            if (this.isFleetTypePerPart) {
                this.mapData.parts[key].fleetTypes = [];
            }
        },

        deletePart(partNumber) {
            delete this.mapData.parts[partNumber];
        },

        toggleAvailableFleetPerPart() {
            if (this.isFleetTypePerPart) {
                this.mapData.fleetTypes = [];
                
                for (const key in this.mapData.parts) {
                    delete this.mapData.parts[key].fleetTypes;
                }

            } else {
                delete this.mapData.fleetTypes;

                for (const key in this.mapData.parts) {
                    this.mapData.parts[key].fleetTypes = [];
                }
            }
        },

        toggleMultiLockMap() {
            if (this.isMultipleLockMap) {
                this.mapData.giveLock = '';
            } else {
                this.mapData.giveLock = [];
            }
        },

        toggleCustomBGM() {
            this.mapData.overrideBGM = this.mapData.overrideBGM ? null : {};
        },

        addNodeCustomBGM() {
            if (this.currentNodeForCutomBGM.length == 1) {
                this.currentNodeForCutomBGM = this.currentNodeForCutomBGM.charCodeAt(0) - 64;
            }

            this.mapData.overrideBGM[this.currentNodeForCutomBGM] = {
                bgmDN: null,
                bgmNN: null,
                bgmDB: null,
                bgmNB: null,
            };
        }
    },
    
    watch: {
        mapData() {
            this.currentNode = null;
        },
    },

    template: document.getElementById('map-editor')
}