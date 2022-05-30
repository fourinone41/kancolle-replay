const GimmickListComponent = {
    props: ['gimmickList', 'mapData'],

    data: () => ({
        
    }),

    computed: {
        
    },

    methods: {
        addGimick() {
            this.gimmickList.push(new ChGimmick({}));
        },

        deleteGimmick(key) {
            this.gimmickList.splice(key, 1);
        }
    },
    
    watch: {
        
    },

    template: `
    
        <button @click="addGimick">Add gimmick requirement</button>
        <div v-for="(gimmick, key) in gimmickList" :key="key">
            <button @click="deleteGimmick(key)">Delete</button>
            <vgimmickeditor :gimmick-data="gimmick" :map-data="mapData" />
        </div>
    
    `
}