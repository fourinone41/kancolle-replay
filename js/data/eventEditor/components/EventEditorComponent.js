const EventEditorComponent = {
    props: ['eventData'],

    data: () => ({
        difficultiesItemSource: COMMON.DIFFICULTIES,
        fleetsItemSource: COMMON.FLEET_TYPES,
        
        friendFleetNewName: '',
        friendFleetCurrent: '',
    }),
        
    computed: {
        
        eventItemList() {
            return Object.keys(MAPDATA).filter(key => key < 90).map(key => ({ key: key, display: MAPDATA[key].name }));
        },
    },

    methods: {
        
        // Friend fleet waves
        addWave() {
            const now = new Date(new Date(Date.now()));
            const offset = now.getTimezoneOffset();
            const date = new Date(now.getTime() - (offset*60*1000));

            this.eventData.friendFleetWaves[999999] = { date: date.toISOString().split('T')[0] };
            this.recomputeWavesNumbers();
        },

        deleteWave(element) {
            
            let count = 0;
            const waves = {};

            for (const wave of Object.values(this.eventData.friendFleetWaves)) {
                if (wave !== element) waves[++count] = wave;
            }

            this.eventData.friendFleetWaves = waves;

            this.recomputeWavesNumbers();
        },

        recomputeWavesNumbers() {
            const waves = {};
            let count = 0;

            for (const waveObject of Object.values(this.eventData.friendFleetWaves).sort((a,b) => new Date(a.date) - new Date(b.date))) {
                waves[++count] = waveObject;
            }

            this.eventData.friendFleetWaves = waves;
        },

        // Ship locks
        addLock() {
            this.eventData.locksData.push({
                image: "",
                name: ""
            });
        },

        deleteLock(element) {
            
            this.eventData.locksData = this.eventData.locksData.filter(e => e !== element);
        },
        
        //friend fleet
        addFriendFleet() {
            if (!this.friendFleetNewName) {
                this.$refs.friendFleetName.focus();
                return;
            }
            if (!this.eventData.friendFleet) this.eventData.friendFleet = {};
            if (!this.eventData.friendFleet[this.friendFleetNewName]) {
                this.eventData.friendFleet[this.friendFleetNewName] = { ships: [] };
            }
            this.friendFleetCurrent = this.friendFleetNewName;
            this.friendFleetNewName = '';
        },
        
        deleteFriendFleet(key) {
            this.friendFleetCurrent = '';
            delete this.eventData.friendFleet[key];
            if (Object.keys(this.eventData.friendFleet).length <= 0) delete this.eventData.friendFleet;
        },

        loadExistingEvent() {
          if (!this.selectedEventToLoad) return;
    
          for (const property in this.eventData) {
              delete this.eventData[property];

          }          

          for (const property in MAPDATA[this.selectedEventToLoad]) {
            this.eventData[property] = MAPDATA[this.selectedEventToLoad][property];
          }   

          this.eventData.locksData = [];

          for (const mapnum in this.eventData.maps) {
                const map = this.eventData.maps[mapnum];

                // --- Locks : 
                if (map.giveLock) {

                    const _addlock = (lock) => {
                        if (this.eventData.locksData.find(l => l.name == lock)) return;

                        this.eventData.locksData.push({ image: 'assets/maps/lock'+lock+'.png', name: lock });
                    };

                    if (Array.isArray(map.giveLock)){
                        
                        for (const lock of map.giveLock) {
                            _addlock(lock);
                        }
                    }
                    else {
                        _addlock(map.giveLock);
                        map.giveLock = [map.giveLock];
                    }
                }

                // --- Parts
                if (map.hiddenRoutes) {

                    for (var key in map.hiddenRoutes) {
                        
                        var route = map.hiddenRoutes[key];

                        for (var image of route.images) {
                            image.customName = 'assets/maps/'+this.selectedEventToLoad+'/'+image.name;
                        }

                    }

                }

                // --- Map
                map.mapPreviewImage = `assets/maps/${this.selectedEventToLoad}/${mapnum}m.png`;
                map.mapImage = `assets/maps/${this.selectedEventToLoad}/${mapnum}.png`;

                // --- Rules 
                for (const node in map.nodes) {
                    const nodeData = map.nodes[node];
                    if (!nodeData.rules) nodeData.rules = [];
                    if (!nodeData.endRules) nodeData.endRules = [];
                }
          }

          this.eventData.comps = ENEMYCOMPS[MAPDATA[this.selectedEventToLoad].name];
        }
    },

    template: document.getElementById('event-editor')
}