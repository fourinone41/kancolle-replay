const NodeComponent = {
    props: ['eventData', 'mapData', 'nodeData'],
        
    data: () => ({
        nodeTypeItemList: [            
            { key: 100, display: "Battle", nodeData: COMMON.NODE_TYPES.NORMAL_BATTLE_NODE },
            { key: 101, display: "Ambush", nodeData: COMMON.NODE_TYPES.AMBUSH_NODE },
            
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
                <td>Anchor node ?</td>
                <td><input v-model="nodeData.dropoff" type="checkbox" /></td>
            </tr>

            <tr v-if="displayNodeTypeInfo">
                <td>Repair node ?</td>
                <td><input v-model="nodeData.repair" type="checkbox" /></td>
            </tr>


            <tr>
                <td colspan="3"><vroutinglist :rule-list="nodeData.rules" :map-data="mapData"></vroutinglist></td>
            </tr>

        </table>
    </div>        
    
    `,
}