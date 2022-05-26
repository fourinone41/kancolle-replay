const ComboBoxEditorComponent = {
    props: ['dataSource', 'itemList', 'dataField'],
        
    computed: {
        
    },

    methods: {

    },

    template: `
        <select v-model="dataSource[dataField]">
            <option disabled value=""> - </option>
            <option v-for="element in this.itemList" v-bind:value="element.key">
                {{element.display}}
            </div>
        </select>
    
    `
}