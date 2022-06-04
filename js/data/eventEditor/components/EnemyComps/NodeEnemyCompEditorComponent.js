const NodeEnemyCompEditorComponent = {
    props: ['nodeData', 'compObject'],

    data: () => ({
        
    }),

    computed: {
        isCompsPerPart() {
            return !!this.nodeData.compDiffPart;
        },

        initValues() {
            const values = {};

            if (this.nodeData.raid) values.bomb = true;
            if (this.nodeData.subonly) values.noammo = true;

            return values;
        }
    },

    methods: {
        toggleCompPerPart() {
            if (this.isCompsPerPart) {
                this.nodeData.compDiffPart = null;

                this.nodeData.compDiff = {};
            } else {
                this.nodeData.compDiffPart = {};

                this.nodeData.compDiff = null;
                this.nodeData.compFPart = null;
                this.nodeData.compDiffF = null;
                this.nodeData.compDiffC = null;
            }
        }
    },
    
    watch: {
        
    },

    template: `
    
    <table>

        <tr>
            <td v-if="isCompsPerPart"><button @click="toggleCompPerPart">Have the same comp for all parts</button></td>
            <td v-else><button @click="toggleCompPerPart">Handle comps per parts</button></td>
        </tr>

        <tr v-if="isCompsPerPart">
            
        </tr>

        <div v-if="!isCompsPerPart" class="group-title">Enemy comp</div>
        <tr v-if="!isCompsPerPart">
            <venemycomplist :comp-list="nodeData.compDiff" :comp-object="compObject" :init-values="initValues"></venemycomplist>
        </tr>

    </table>
    
    `
}