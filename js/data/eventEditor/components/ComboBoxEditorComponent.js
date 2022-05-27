const ComboBoxEditorComponent = {
    props: ['dataSource', 'itemList', 'dataField'],
        
    computed: {
        
    },

    methods: {

    },

    template: `
        <select v-model="dataSource[dataField]">
            <option disabled value=""> - </option>
            <option v-for="element in this.itemList" v-bind:value="element.key" :disabled="element.separator">
                <div v-if="element.separator">-------------------------</div>
                {{element.display}}
            </option>
        </select>
    
    `
}