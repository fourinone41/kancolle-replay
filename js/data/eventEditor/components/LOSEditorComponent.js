const LOSEditorComponent = {
    props: ['dataSource', 'nodeList'],

    
    data: () => ({
       
        selectedElement: null,

        diffItemList: COMMON.DIFFICULTIES,
    }),
        
    computed: {
    },

    methods: {
        addElement(diff) {
            if (!this.dataSource[diff][99]) this.dataSource[diff][99] = "";
        },

        deleteElement(diff, los) {
            delete this.dataSource[diff][los];
        },

        /*getLosArraySorted(array) {
            const sortedArray = [];
            const sortedKeys = Object.keys(array).sort((a, b) => a - b);

            for (const key of sortedKeys) {
                
            }
            
            return array.sort(e => e.)
        }*/

        getMinLOS(losArray) {
            return Math.min(...Object.keys(losArray));
        },

        getMaxLOS(losArray) {
            return Math.max(...Object.keys(losArray));
        },

        changeLOSValue(diff, oldLOS, event) {
            
            const newLOS = event.target.value;
            const node = this.dataSource[diff][oldLOS];

            delete this.dataSource[diff][oldLOS];
            this.dataSource[diff][newLOS] = node;
        }

    },

    template: `
    


        <div v-for="diff in diffItemList" :key="diff.key">

            {{diff.display}}
            <button @click="addElement(diff.key)">Add</button>

            <div style="align-items: center;">

                <div v-for="(node, los) in dataSource[diff.key]" :key="los">


                    <div v-if="los == getMinLOS(dataSource[diff.key])">

                        <button @click="deleteElement(diff.key, los)">X</button>
                        if &lt; than <input style="margin:10px;" @change="changeLOSValue(diff.key, los, $event)" :value="los"/> then <vcomboboxeditor :data-source="dataSource[diff.key]" :item-list="nodeList" :data-field="los"/>
                    
                    </div>
                    <div v-else>
                    
                        <button @click="deleteElement(diff.key, los)">X</button>
                        if &gt; than <input style="margin:10px;" @change="changeLOSValue(diff.key, los, $event)" :value="los"/> then <vcomboboxeditor :data-source="dataSource[diff.key]" :item-list="nodeList" :data-field="los"/>
                    
                    </div>
                    
                </div>

            </div>

        
        </div>


        
    
    `
}