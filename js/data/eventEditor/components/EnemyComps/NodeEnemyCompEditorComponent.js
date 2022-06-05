const NodeEnemyCompEditorComponent = {
    props: ['nodeData', 'compObject', 'mapData'],

    data: () => ({
        selectedPartToAdd: null,
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
        },

        mapPartsItemList() {
            const parts = [];
            
            for (const part in this.mapData.parts) {

                parts.push({ display: part, key: part });
            }

            return parts;
        },
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
        },

        addPart() {
            if (!this.selectedPartToAdd) return;
            if (this.nodeData.compDiffPart[this.selectedPartToAdd]) return;

            this.nodeData.compDiffPart[this.selectedPartToAdd] = {};
        }
    },
    
    watch: {
        
    },

    template: `
    
    <table v-if="nodeData.compDiff">

        <tr>
            <td v-if="isCompsPerPart"><button @click="toggleCompPerPart">Have the same comp for all parts</button></td>
            <td v-else><button @click="toggleCompPerPart">Handle comps per parts</button></td>
        </tr>

        <tr v-if="isCompsPerPart">
            <vcomboboxeditor :data-source="this" :item-list="mapPartsItemList" data-field="selectedPartToAdd" />
            <button @click="addPart">Add part</button>

            <div v-for="(comps, part) in nodeData.compDiffPart" :key="part">
                <vnodeenemycompobjectseditor :comp-list="comps" :comp-object="compObject" :init-values="initValues" :map-data="mapData" />
            </div>
        </tr>

        <tr v-if="!isCompsPerPart">
            <vnodeenemycompobjectseditor :comp-list="nodeData" :comp-object="compObject" :init-values="initValues" :map-data="mapData" />
        </tr>


    </table>

    <div v-else>
        <button @click="nodeData.compDiff = {4:{},1:{},2:{},3:{}}">Add comps</button>
    </div>
    `
}