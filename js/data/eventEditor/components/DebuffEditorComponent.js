const DebuffEditorComponent = {
    props: ['mapData', 'mapNumber'],

    data: () => ({
        
    }),

    computed: {

    },

    methods: {
        enableDebuff() {
            this.mapData.debuffRules = new ChGimmickList("debuff", null, this.mapNumber, [], { });
        },

        disableDebuff() {
            delete this.mapData.debuffRules;
        },
    },
    
    watch: {
        
    },

    template: `
    
        <div>

            <button @click="enableDebuff()">Enable debuff</button>
            <button @click="disableDebuff()">Disable debuff</button>

            <div v-if="mapData.debuffRules && mapData.debuffRules.additionnalParameters">

                <vgimmicklist :gimmick-list="mapData.debuffRules" :map-data="mapData" />

            </div>
        </div>
    
    `
}