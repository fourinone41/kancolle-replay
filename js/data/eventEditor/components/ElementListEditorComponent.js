const ElementListEditorComponent = {
    props: ['dataSource', 'itemList'],

    
    data: () => ({
       
        selectedElement: null,

        

    }),
        
    computed: {
        getDataSource() {
            const dataSource = [];

            for (const value of this.dataSource) {
                const item = Object.values(this.itemList).find(e => e.key == value);

                if (item) dataSource.push(item);
                else dataSource.push({ key: value, display: value });
            }

            return dataSource;
        }
    },

    methods: {
        addElement() {
            if (this.selectedElement && !this.dataSource.includes(this.selectedElement)) this.dataSource.push(this.selectedElement);
        },

        deleteElement(elementKey) {
            for (const index in this.dataSource) {
                if (this.dataSource[index] === elementKey) this.dataSource.splice(index, 1); 
            }
        }
    },

    template: `
        <vcomboboxeditor :data-source="this" :item-list="itemList" data-field="selectedElement"/>
        <button @click="addElement">Add</button>

        <div style="display:flex;">
            <div v-for="element in getDataSource" :key="element.key">
                <div style="margin:10px;" @click="deleteElement(element.key)">{{element.display}}</div>
            </div>
        </div>
    
    `
}