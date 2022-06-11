const BonusEditorComponent = {
    props: ['bonusData', 'mapData'],

    data: () => ({
        
        bonusItemList: BonusEditorComponent.BonusListForComboBox,

        diffItemList: COMMON.DIFFICULTIES,

    }),

    computed: {
        nodeList() {
            return Object.keys(this.mapData.nodes).map(key => ({ key: key, display: key }));
        },

        mapPartItemList() {
            return Object.keys(this.mapData.parts).map(part => ({ key: part, display: part}));
        },
    },

    methods: {
        displayEditor(key) {
            if (!this.bonusData) return false;
            if (!this.bonusData.bonusType) return false;

            const type = this.bonusData.bonusType;
            const bonusType = BonusEditorComponent.BonusDisplay[type];

            if (!bonusType) return;
            return bonusType.editors.includes(key);
        }
    },
    
    watch: {
        "bonusData.type"() {
            // --- Init the bonus
            if (!this.bonusData) return false;
            if (!this.bonusData.bonusType) return false;

            const type = this.bonusData.bonusType;
            const bonusType = BonusEditorComponent.BonusDisplay[type];

            if (!bonusType) return;

            for (const property in bonusType.init) {
                this.bonusData[property] = bonusType.init[property];
            }
        }
    },

    template: `
    
    <table>

        <tr>
            <td>Type</td>
            <td><vcomboboxeditor :data-source="bonusData" :item-list="bonusItemList" data-field="bonusType"/></td>
        </tr>

        <tr>
            <td>Value</td>
            <td><input type="number" v-model="amount" /></td>
        </tr>

        <!---tr v-if="displayEditor('node')">
            <td>Node</td>
            <td><vcomboboxeditor :data-source="bonusData" :item-list="nodeList" data-field="node"/></td>
        </tr--->

    </table>
    
    `
}

BonusEditorComponent.BonusDisplay = {
    ChWholeFleetBonuses: {
        init: {
            
        },

        editors: []
    },
}

BonusEditorComponent.BonusListForComboBox = [
    { key: 'ChWholeFleetBonuses', display: 'Basic bonus' },
]