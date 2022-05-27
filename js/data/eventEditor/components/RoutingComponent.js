const RoutingComponent = {
    props: ['rule', 'mapData'],
    emits: ['deleteRule'],
        
    data: () => ({
       
        ruleTypeItemList: [            
            { key: 'fixed', display: "Fixed routing" },
        ],

    }),

    computed: {
        nodeList() {
            return Object.keys(this.mapData.nodes).map(key => ({ key: key, display: key }));
        }
    },

    methods: {
        deleteRule() {
            this.$emit('deleteRule', this.rule);
        },

        shouldEditorBeDisplayed(propertyName) {
            if (!RoutingComponent.RULE_TYPE_EDITORS[this.rule.type]) return false;
            return !!RoutingComponent.RULE_TYPE_EDITORS[this.rule.type][propertyName];
        }
    },

    watch: {
        
    },

    template: `
        <button @click="deleteRule">Delete</button>    

        <div class="editor-group">
        
            <table>

                <tr>
                    <td>Rule type</td>
                    <td><vcomboboxeditor :data-source="rule" :item-list="ruleTypeItemList" data-field="type"/></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('fixedNode')">
                    <td>Fixed node</td>
                    <td><vcomboboxeditor :data-source="rule" :item-list="nodeList" data-field="fixedNode"/></td>
                </tr>

            </table>
        </div> 
    `,

    /**
     * Define which editor are available for each rule type
     */
    RULE_TYPE_EDITORS: {
        fixed: {
            fixedNode: true,
        }
    }
}