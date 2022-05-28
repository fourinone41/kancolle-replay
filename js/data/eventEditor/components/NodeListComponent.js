const NodeListComponent = {
    props: ['eventData', 'mapData'],
    emits: ['nodeChanged'],
        
    data: () => ({
        currentNode: 'Start',
    }),

    computed: {
        nodeList () {
            return Object.keys(this.mapData.nodes);
        },

        getCurrentNodeData() {
            if (this.mapData.nodes[this.currentNode]) return this.mapData.nodes[this.currentNode];
            return null;
        }
    },

    methods: {
        addNode() {
            let nodeName = prompt("Node letter ?");
            if (!nodeName) return;

            this.mapData.nodes[nodeName] = new ChNodeData();

            this.currentNode = nodeName;
        },
        
        deleteNode() {
            if (this.currentNode) delete this.mapData.nodes[this.currentNode];
        }
    },

    watch: {
        currentNode() {
            this.$emit('nodeChanged', this.mapData.nodes[this.currentNode]);

            if (!this.mapData.nodes[this.currentNode].rules) this.mapData.nodes[this.currentNode].rules = [];
        }
    },

    template: `
    
    <div class="mapButtons">
        <div class="mapButton">Nodes</div>

        <select class="mapButton" v-model="currentNode">
            <option disabled value="Select a node">Select node </option>
            <option v-for="element in nodeList" v-bind:value="element">
                {{element}}
            </option>
        </select>

        <div class="mapButton" @click="addNode">Add node</div>
        <div class="mapButton" @click="deleteNode">Delete node</div>
    </div>

    <vnode v-if="getCurrentNodeData" :map-data="mapData" :event-data="eventData" :node-data="getCurrentNodeData"></vnode>
    
    `
}