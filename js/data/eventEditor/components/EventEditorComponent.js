const EventEditorComponent = {
    props: ['eventData'],

    data: () => ({
        difficultiesItemSource: [
            { key: 4, display: "Casual" },
            { key: 1, display: "Easy" },
            { key: 2, display: "Medium" },
            { key: 3, display: "Hard" },
        ],
        fleetsItemSource: COMMON.FLEET_TYPES,
        
        friendFleetNewName: '',
        friendFleetCurrent: '',
    }),
        
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
                name: "",
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
    },

    template: document.getElementById('event-editor')
}