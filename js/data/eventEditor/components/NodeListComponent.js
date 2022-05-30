const NodeListComponent = {
    props: ['eventData', 'mapData', 'currentNode'],
    emits: ['nodeChanged', 'add-node', 'delete-node'],
        
    data: () => ({
        
    }),

    computed: {
        nodeList () {
            let a1 = Object.keys(this.mapData.nodes).filter(key => key.indexOf('Start') == 0).sort();
            let a2 = Object.keys(this.mapData.nodes).filter(key => key.indexOf('Start') != 0).sort();
            return a1.concat(a2);
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
            this.$emit('add-node',nodeName);
        },
        
        deleteNode() {
            this.$emit('delete-node',this.currentNode);
        }
    },

    watch: {
        
    },

    template: `
    
    <div class="mapButtons">
        <div class="mapButton">Nodes</div>

        <select class="mapButton" :value="currentNode" @change="(e) => $emit('nodeChanged',e.target.value)">
            <option disabled value="Select a node">Select node </option>
            <option v-for="element in nodeList" v-bind:value="element">
                {{element}}
            </option>
        </select>

        <div class="mapButton" @click="addNode">Add node</div>
        <div class="mapButton" @click="deleteNode">Delete node</div>
    </div>
    
    `
}