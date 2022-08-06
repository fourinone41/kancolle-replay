const NodeComponent = {
    props: ['eventData', 'mapData', 'nodeData', 'compObject', 'allCompsObject'],
        
    data: () => ({
        nodeTypeItemList: [            
            { key: 100, display: "Battle", nodeData: COMMON.NODE_TYPES.NORMAL_BATTLE_NODE },
            { key: 101, display: "Sub node battle", nodeData: COMMON.NODE_TYPES.SUBMARINE_BATTLE_NODE },
            { key: 102, display: "Ambush", nodeData: COMMON.NODE_TYPES.AMBUSH_NODE },
            
            { key: -1, separator: true },

            { key: 200, display: "Night battle", nodeData: COMMON.NODE_TYPES.NIGHT_NODE },
            { key: 201, display: "Night to day battle", nodeData: COMMON.NODE_TYPES.NIGHT_TO_DAY_NODE },
            
            { key: -2, separator: true },

            { key: 300, display: "Air raid", nodeData: COMMON.NODE_TYPES.AIR_RAID_NODE },
            { key: 301, display: "Air battle", nodeData: COMMON.NODE_TYPES.AIR_BATTLE_NODE },
            
            { key: -3, separator: true },

            { key: 400, display: "Start point", nodeData: COMMON.NODE_TYPES.START_POINT },
            { key: 401, display: "Empty node", nodeData: COMMON.NODE_TYPES.EMPTY_NODE },
            { key: 402, display: "Anchor empty node", nodeData: COMMON.NODE_TYPES.ANCHOR_EMPTY_NODE },
            { key: 403, display: "Repair node", nodeData: COMMON.NODE_TYPES.REPAIR_NODE },

            { key: -4, separator: true },

            { key: 500, display: "Resource gain node", nodeData: COMMON.NODE_TYPES.RESOURCE_GAIN_NODE },
            { key: 501, display: "Resource loss node", nodeData: COMMON.NODE_TYPES.RESOURCE_LOSS_NODE },
            { key: 502, display: "Anchor ressource node", nodeData: COMMON.NODE_TYPES.ANCHOR_RESOURCE_NODE },
        ],

        selectedNodeType: null,

        displayNodeTypeInfo: false,
    }),

    computed: {
        routeUnlockItemList() {
            if (!this.mapData.hiddenRoutes) return [];
            return Object.keys(this.mapData.hiddenRoutes).map(route => ({ key: route, display: route}));
        },

        distance() {
            let partCountForLBAS = 0;

            for (const partKey in this.mapData.parts) {
                const part = this.mapData.parts[partKey];
                if (part.lbPart && part.lbPart > partCountForLBAS) partCountForLBAS = part.lbPart;
            }

            if (partCountForLBAS && !Array.isArray(this.nodeData.distance)) this.nodeData.distance = [this.nodeData.distance];
            if (!partCountForLBAS && Array.isArray(this.nodeData.distance)) this.nodeData.distance = 0;

            if (Array.isArray(this.nodeData.distance)) {
                
                for (let count = 1; count < partCountForLBAS; count++) {
                    if (!this.nodeData.distance[count]) this.nodeData.distance[count] = 0;
                }
            }

            return this.nodeData.distance;
        },
        

        friendFleetItemList() {
            return Object.keys(this.eventData.friendFleet).map(x => ({ key: x, display: x }));
        }
    },

    methods: {
        applySelectedNodeType() {
            // --- Init node from type
            const type = Object.values(this.nodeTypeItemList).find(nodeType => nodeType.key == this.selectedNodeType);

            if (!type) return;

            for (const property in COMMON.NODE_TYPES.NODE_MODEL) {
                if (this.nodeData[property] !== undefined) delete this.nodeData[property];
            }

            for (const property in type.nodeData) {
                this.nodeData[property] = type.nodeData[property];
            }
        },

        toggleDisplayNodeTypeInfo() {
            this.displayNodeTypeInfo = !this.displayNodeTypeInfo;
        },

        toggleFriendFleet() {
            const enable = !this.nodeData.friendFleet;

            if (enable) {
                this.nodeData.friendFleet = [];
                this.nodeData.friendFleetS = [];
                this.nodeData.friendFleetSX = [];
            } else {
                delete this.nodeData.friendFleet;
                delete this.nodeData.friendFleetS;
                delete this.nodeData.friendFleetSX;
            }
        }
    },

    watch: {

        

    },    

    template: `
    
    <div class="editor-group">
        <table>
            <tr>
                <td>X position</td>
                <td><input v-model="nodeData.x" type="number" /></td>
            </tr>

            <tr>
                <td>Y position</td>
                <td><input v-model="nodeData.y" type="number" /></td>
            </tr>
            
            <tr>
                <td>Route unlock required</td>
                <td><vcomboboxeditor :data-source="nodeData" :item-list="routeUnlockItemList" data-field="hidden" :can-be-null="true"/></td>
            </tr>

            <tr v-if="!Array.isArray(nodeData.distance)">
                <td>Distance from air base</td>
                <td><input v-model="nodeData.distance" type="number" /></td>
            </tr>

            <tr v-if="Array.isArray(distance)">
                <td>Distance from air base (per phase)</td>
                <td>
                    <table>
                        <tr v-for="(_, key) of distance" :key="key">
                            <td>Part {{key + 1}}</td>
                            <td><input v-model="distance[key]" type="number" /></td>
                        </tr>
                    </table>
                </td>
            </tr>

            <tr>
                <td>Node type</td>
                <td><vcomboboxeditor :data-source="this" :item-list="nodeTypeItemList" data-field="selectedNodeType" /></td>
                <td><button @click="applySelectedNodeType">Apply node type</button></td>
            </tr>

            <tr>
                <td v-if="displayNodeTypeInfo" ><button @click="toggleDisplayNodeTypeInfo">Hide node type info</button></td>
                <td v-else ><button @click="toggleDisplayNodeTypeInfo">Show node type info</button></td>
            </tr>

            <tr v-if="displayNodeTypeInfo">
                <td>Type</td>
                <td><input v-model="nodeData.type" type="number" /></td>
            </tr>
            
            <tr v-if="displayNodeTypeInfo">
                <td>Ambush ?</td>
                <td><input v-model="nodeData.ambush" type="checkbox" /></td>
            </tr>
            
            <tr v-if="displayNodeTypeInfo">
                <td>Night battle ?</td>
                <td><input v-model="nodeData.night2" type="checkbox" /></td>
            </tr>

            <tr v-if="displayNodeTypeInfo">
                <td>Night to day battle ?</td>
                <td><input v-model="nodeData.nightToDay2" type="checkbox" /></td>
            </tr>

            <tr v-if="displayNodeTypeInfo">
                <td>Air battle ?</td>
                <td><input v-model="nodeData.aironly" type="checkbox" /></td>
            </tr>

            <tr v-if="displayNodeTypeInfo">
                <td>Air raid ?</td>
                <td><input v-model="nodeData.raid" type="checkbox" /></td>
            </tr>

            <tr v-if="displayNodeTypeInfo">
                <td>Sub battle node ?</td>
                <td><input v-model="nodeData.subonly" type="checkbox" /></td>
            </tr>

            <tr v-if="displayNodeTypeInfo">
                <td>Anchor node ?</td>
                <td><input v-model="nodeData.dropoff" type="checkbox" /></td>
            </tr>

            <tr v-if="displayNodeTypeInfo">
                <td>Repair node ?</td>
                <td><input v-model="nodeData.repair" type="checkbox" /></td>
            </tr>


        </table>

        <uigroup title="Routing">
            <vroutinglist :rule-list="nodeData.rules" :map-data="mapData"></vroutinglist>
        </uigroup>

        <uigroup title="Friend Fleet">

            <button v-if="!nodeData.friendFleet" @click="toggleFriendFleet">Enable Friend Fleet</button>
            <button v-else @click="toggleFriendFleet">Disable Friend Fleet</button>

            <div v-if="!!nodeData.friendFleet">
                Normal friend fleet<br>
                <velementlist v-if="!!nodeData.friendFleet" :data-source="nodeData.friendFleet" :item-list="friendFleetItemList" />

                Strong friend fleet<br>
                <velementlist v-if="!!nodeData.friendFleet" :data-source="nodeData.friendFleetS" :item-list="friendFleetItemList" />

                Stronger friend fleet <br>
                <velementlist v-if="!!nodeData.friendFleet" :data-source="nodeData.friendFleetSX" :item-list="friendFleetItemList" />
            </div>
        </uigroup>

        <uigroup title="End node">
            Is end node rule (if no rule, use the checkbox value)  
            <input v-model="nodeData.end" type="checkbox" />
            <vroutinglist :rule-list="nodeData.endRules" :map-data="mapData"></vroutinglist>
        </uigroup>
 
        <uigroup title="Enemy comps">
            <vnodeenemycompeditor :node-data="nodeData" :map-data="mapData" :comp-object="compObject" :all-comps-object="allCompsObject"></vnodeenemycompeditor>
        </uigroup> 
        
        <uigroup title="Bonuses">
            <button v-if="!!nodeData.bonuses" @click="delete nodeData.bonuses">Disable bonuses</button> 
            <button v-else @click="nodeData.bonuses = []">Handle bonuses</button>

            <vbonuslist v-if="!!nodeData.bonuses" :bonus-list="nodeData.bonuses" :map-data="mapData" :event-data="eventData" />
        </uigroup>
    </div>
    
    `,
}