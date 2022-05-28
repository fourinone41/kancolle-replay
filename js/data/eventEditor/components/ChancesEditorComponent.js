const ChancesEditorComponent = {
    props: ['dataSource', 'itemList', 'dataField'],

    
    data: () => ({
       
        selectedElement: null,

    }),
        
    computed: {
    },

    methods: {
        addElement() {
            if (this.selectedElement && !this.dataSource[this.dataField][this.selectedElement]) this.dataSource[this.dataField][this.selectedElement] = 0;
        },

        deleteElement(elementKey) {
            delete this.dataSource[this.dataField][elementKey];
        },
        
        elementsSum() {
            let sum = 0;

            for (const element of  Object.values(this.dataSource[this.dataField])) {
                sum += element;
            }

            return sum;
        }
    },

    template: `
        <vcomboboxeditor :data-source="this" :item-list="itemList" data-field="selectedElement"/>
        <button @click="addElement">Add</button>

        <div style="display: flex;align-items: center;">
            <div v-for="(value, key) in dataSource[dataField]" :key="key">
                <div style="margin:10px;" @click="deleteElement(key)">{{key}}</div>
                <input type="number" v-model="dataSource[dataField][key]" max="1" min="0" step="0.1" />
            </div>

            <div v-if="elementsSum() != 1" style="color:red;">Sum of chances isn't 1</div>
        </div>
    
    `
}