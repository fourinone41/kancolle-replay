const RoutingComponent = {
    props: ['rule', 'mapData'],
    emits: ['deleteRule'],
        
    data: () => ({
       
        ruleTypeItemList: [            
            { key: 'fixed', display: "Fixed routing" },
            { key: 'shipType', display: "Ship type routing" },
            { key: 'multiRules', display: "Rule group" },
        ],

        operatorList: [
            { key: '=', display: "=" },
            { key: '>=', display: ">=" },
            { key: '<=', display: "<=" },
            { key: '<', display: "<" },
            { key: '>', display: ">" },
        ],

        logicOperatorList: [
            { key: 'AND', display: "AND" },
            { key: 'OR', display: "OR" },
        ],

        shipTypeList: COMMON.SHIP_TYPES,

        isCollapsed: false,

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
        },

        getDestination() {
            
            if (this.rule.type == "fixed") return this.rule.fixedNode;

            if (this.rule.conditionFailedNode) return this.rule.conditionCheckedNode + ' else ' + this.rule.conditionFailedNode;
            return this.rule.conditionCheckedNode;            
        }
    },

    watch: {
        
    },

    template: `
        <button @click="deleteRule">Delete</button>    

        <button v-if="isCollapsed" @click="isCollapsed = false">Show rule</button>    
        <button v-else @click="isCollapsed = true">Hide rule</button>    


        <div v-if="isCollapsed" v-html="rule.getDescription() + ' -> ' + getDestination()"></div>
        <div v-else class="editor-group rule-editor">
        
            <table>

                <tr>
                    <td>Rule type</td>
                    <td><vcomboboxeditor :data-source="rule" :item-list="ruleTypeItemList" data-field="type"/></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('fixedNode')">
                    <td>Fixed node</td>
                    <td><vcomboboxeditor :data-source="rule" :item-list="nodeList" data-field="fixedNode"/></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('shipTypes')">
                    <td>Ship types</td>
                    <td><velementlist :data-source="rule.shipTypes" :item-list="shipTypeList" /></td>
                </tr>
                
                <tr v-if="shouldEditorBeDisplayed('operator')">
                    <td>Operator</td>
                    <td><vcomboboxeditor :data-source="rule" :item-list="operatorList" data-field="operator"/></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('logicOperator')">
                    <td>Operator</td>
                    <td><vcomboboxeditor :data-source="rule" :item-list="logicOperatorList" data-field="logicOperator"/></td>
                </tr>
                
                <tr v-if="shouldEditorBeDisplayed('count')">
                    <td>Number</td>
                    <td><input v-model="rule.count" type="number" min="0" /></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('rules')">
                    <td>Rules</td>
                    <td colspan="3"><vroutinglist :rule-list="rule.rules" :map-data="mapData" :condition-checked-node="rule.conditionCheckedNode ? rule.conditionCheckedNode : true"></vroutinglist></td>
                </tr>
                
                <tr v-if="shouldEditorBeDisplayed('conditionCheckedNode')">
                    <td>Node if rule is checked</td>
                    <td><vcomboboxeditor :data-source="rule" :item-list="nodeList" data-field="conditionCheckedNode"/></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('conditionFailedNode')">
                    <td>Node if rule is not checked</td>
                    <td><vcomboboxeditor :data-source="rule" :item-list="nodeList" data-field="conditionFailedNode" :can-be-null="true"/></td>
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
        },

        shipType: {
            shipTypes : true,
            operator : true,
            count : true,
            conditionCheckedNode : true,
            conditionFailedNode : true,
        },

        multiRules: {
            logicOperator : true,
            rules : true,
            
            conditionCheckedNode : true,
            conditionFailedNode : true,
        },
    }
}