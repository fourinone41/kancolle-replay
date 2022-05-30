const RoutingComponent = {
    props: {
        rule: ChRule, 
        mapData: Object
    },
    emits: ['deleteRule'],
        
    data: () => ({
       
        ruleTypeItemList: [            
            { key: 'fixed', display: "Fixed routing" },
            { key: 'shipType', display: "Ship type routing" },
            { key: 'multiRules', display: "Rule group" },
            { key: 'random', display: "Random routing" },
            { key: 'shipCount', display: "Number of ship in fleet routing" },
            { key: 'speed', display: "Fleet speed rule" },
            { key: 'ifthenelse', display: "If A then B else C rule" },
            { key: 'LOSCheckIfRuleChecked', display: "LOS check if rule checked" },
            { key: 'allShipsMustBe', display: "All ship must be of type rule" },
            { key: 'isLastDance', display: "Is last dance rule" },
            { key: 'equipType', display: "Equipment rule" },
            { key: 'los', display: "LOS check rule" },
            { key: 'default', display: "Default routing rule" },
            { key: 'shipIds', display: "Ships routing" },
            { key: 'fleetType', display: "Fleet type" },
            { key: 'routeSelect', display: "Route selection" },
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
        
        speedItemList: [
            { key: '5', display: "Slow" },
            { key: '10', display: "Fast" },
            { key: '15', display: "Fast+" },
            { key: '20', display: "Fastest" },
        ],

        shipTypeList: COMMON.SHIP_TYPES,

        isCollapsed: false,
    }),

    computed: {
        nodeList() {
            return Object.keys(this.mapData.nodes).map(key => ({ key: key, display: key }));
        },

        fleetTypeItemList () {
            const fleets = [];
            
            for (const fleetType of this.mapData.fleetTypes) {

                const type = COMMON.FLEET_TYPES.find(el => el.key == fleetType);

                fleets.push(type);
            }

            return fleets;
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
        deleteRule() {
            this.$emit('deleteRule', this.rule);
        },

        shouldEditorBeDisplayed(propertyName) {
            if (!this.rule) return false;
            if (!RoutingComponent.RULE_TYPE_EDITORS[this.rule.type]) return false;
            return !!RoutingComponent.RULE_TYPE_EDITORS[this.rule.type][propertyName];
        },

        getDestination() {
            let returnValue = ' -> ';

            if (this.rule.type == "ifthenelse") return "";
            if (this.rule.type == "LOSCheckIfRuleChecked") return "";
            if (this.rule.type == "los") return "";
            if (this.rule.type == "random") return "";
            if (this.rule.type == "fixed") return returnValue + this.rule.fixedNode;

            returnValue += this.rule.conditionCheckedNode;            
            if (this.rule.conditionFailedNode) returnValue += ' else ' + this.rule.conditionFailedNode;

            return returnValue;
        },

        initIfThenElse() {
            this.initIf();
            if (!this.rule.ifthenelse.then) this.rule.ifthenelse.then = new ChRule();
            if (!this.rule.ifthenelse.else) this.rule.ifthenelse.else = new ChRule();
        },

        initLOSCheckIfRuleChecked() {
            if (!this.rule.ifthenelse) this.rule.ifthenelse = {};
            if (!this.rule.ifthenelse.if) this.rule.ifthenelse.if = new ChRule();

            this.initLOS();
        }, 
        
        initLOS() {
            if (!this.rule.LOS || !this.rule.LOS[1]) this.rule.LOS = {
                4: {},
                1: {},
                2: {},
                3: {},
            }
        }, 
        
        initEquipData() {
            
            if (!this.rule.equipData || !this.rule.equipData.equipIds) {
                this.rule.equipData = {
                    equipIds: [],
                    equipTypes: [],
                    LOS: 0, 
                    haveAllEquips: false
                }
            }
        },

        initFleetType() {
            
            if (!this.rule.fleetType || !this.rule.fleetType.length) {
                this.rule.fleetType = [];
            }
        },

    },

    watch: {
        'rule.type'() {
            // --- Init some data here
            if (this.rule.type == "ifthenelse") this.initIfThenElse();
            if (this.rule.type == "LOSCheckIfRuleChecked") this.initLOSCheckIfRuleChecked();
            if (this.rule.type == "equipData") this.initEquipData();
            if (this.rule.type == "los") this.initLOS();
            if (this.rule.type == "fleetType") this.initFleetType();
        }
    },

    template: `
        <button @click="deleteRule">Delete</button>    

        <button v-if="isCollapsed" @click="isCollapsed = false">Show rule</button>    
        <button v-else @click="isCollapsed = true">Hide rule</button>    


        <div v-if="isCollapsed" v-html="rule.getDescription() + getDestination()"></div>
        <div v-else class="editor-group rule-editor">
        
            <table>

                <tr>
                    <td>Rule type</td>
                    <td><vcomboboxeditor :data-source="rule" :item-list="ruleTypeItemList" data-field="type"/></td>
                </tr>
                
                <tr v-if="shouldEditorBeDisplayed('not')">
                    <td>Is not</td>
                    <td><input type="checkbox" v-model="rule.not" /></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('fixedNode')">
                    <td>Fixed node</td>
                    <td><vcomboboxeditor :data-source="rule" :item-list="nodeList" data-field="fixedNode"/></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('shipTypes')">
                    <td>Ship types</td>
                    <td><velementlist :data-source="rule.shipTypes" :item-list="shipTypeList" /></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('fleetType')">
                    <td>Fleet types</td>
                    <td><velementlist :data-source="rule.fleetType" :item-list="fleetTypeItemList" /></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('shipsIds')">
                    <td>Ships</td>
                    <td><vshipidslisteditor :data-source="rule.shipsIds" /></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('equipData')">
                    <td>Equipment data</td>
                    <td><vequipdataruleeditor :data-source="rule.equipData" /></td>
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
                    <td><vcountruleeditor :data-source="rule" data-field="count" /></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('shipWithEquipCount')">
                    <td>Number of different ships with the equipment</td>
                    <td><input v-model="rule.shipWithEquipCount" type="number" min="0" /></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('speed')">
                    <td>Speed</td>
                    <td><vcomboboxeditor :data-source="rule" :item-list="speedItemList" data-field="speed"/></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('rules')">
                    <td>Rules</td>
                    <td colspan="3"><vroutinglist :rule-list="rule.rules" :map-data="mapData" :condition-checked-node="rule.conditionCheckedNode ? rule.conditionCheckedNode : true"></vroutinglist></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('if')">
                    <td>If</td>
                    <td colspan="3"><vrouting :rule="rule.ifthenelse.if" :map-data="mapData"></vrouting></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('then')">
                    <td>Then</td>
                    <td colspan="3"><vrouting :rule="rule.ifthenelse.then" :map-data="mapData"></vrouting></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('else')">
                    <td>Else</td>
                    <td colspan="3"><vrouting :rule="rule.ifthenelse.else" :map-data="mapData"></vrouting></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('LOS')">
                    <td>LOS</td>
                    <td colspan="3"><vloseditor :data-source="rule.LOS" :node-list="nodeList" /></td>
                </tr>                

                <tr v-if="shouldEditorBeDisplayed('LOSCoef')">
                    <td>LOS coefficient</td>
                    <td><input v-model="rule.LOSCoef" type="number" min="0" /></td>
                </tr>                
                
                <tr v-if="shouldEditorBeDisplayed('conditionCheckedNode')">
                    <td>Node if rule is checked</td>
                    <td><vcomboboxeditor :data-source="rule" :item-list="nodeList" data-field="conditionCheckedNode"/></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('conditionFailedNode')">
                    <td>Node if rule is not checked</td>
                    <td><vcomboboxeditor :data-source="rule" :item-list="nodeList" data-field="conditionFailedNode" :can-be-null="true"/></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('randomNodes')">
                    <td>Chances (sum = 1)</td>
                    <td><vchanceseditor :data-source="rule" :item-list="nodeList" data-field="randomNodes"/></td>
                </tr>

                <tr v-if="shouldEditorBeDisplayed('routeSelect')">
                    <td>Routes</td>
                    <td><velementlist :data-source="rule.routeSelect" :item-list="nodeList" /></td>
                </tr>

                <button v-if="!rule.mapParts" @click="rule.mapParts=[]">Have rule only on certain parts</button>
                <button v-if="!!rule.mapParts" @click="rule.mapParts=null">Have rule on all part</button>

                <tr v-if="!!rule.mapParts">
                    <td>Applies to map parts</td>
                    <td><velementlist :data-source="rule.mapParts" :item-list="mapPartsItemList" /></td>
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

        random: {
            randomNodes: true,
        },

        shipCount: {
            operator : true,
            count : true,
            conditionCheckedNode : true,
            conditionFailedNode : true,
        },

        speed: {
            speed : true,
            operator : true,
            conditionCheckedNode : true,
            conditionFailedNode : true,
        },

        ifthenelse: {
            if : true,
            then : true,
            else : true,
        },

        LOSCheckIfRuleChecked: {
            if: true,
            LOS: true,
            LOSCoef: true,
        },

        allShipsMustBe: {
            not: true,
            shipTypes: true,
            conditionCheckedNode: true,
            conditionFailedNode: true,
        },
        
        isLastDance: {
            conditionCheckedNode: true,
            conditionFailedNode: true,
        },
        
        equipType: {
            equipData: true,
            operator: true,
            count: true,
            shipWithEquipCount: true,
            conditionCheckedNode: true,
            conditionFailedNode: true,
        },
        
        los: {
            LOS: true,
            LOSCoef: true,
        },
        
        default: {
            conditionCheckedNode: true,
        },
        
        shipIds: {
            shipsIds : true, 
            operator : true, 
            count : true, 
            conditionCheckedNode : true, 
            conditionFailedNode : true
        },
        
        fleetType: {
            fleetType: true,
            conditionCheckedNode : true, 
            conditionFailedNode : true
        },

        routeSelect: {
            routeSelect: true,
        },
    }
}