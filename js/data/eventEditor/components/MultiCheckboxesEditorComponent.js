const MultiCheckboxesEditorComponent = {
    props: ['dataSource', 'itemList'],
        
    computed: {
        getDataSource() {

            for (const element of this.itemList) {
                element.checked = this.dataSource.includes(element.key);
            }

            return this.itemList;
        }
    },

    methods: {
        isElementInDataSource(element) {
            return !!this.dataSource.find(e => e == element.key);
        },
        elementChanged() {
            
            while (this.dataSource.length) {
                this.dataSource.pop();
            }

            for (const val of this.itemList.filter(e => !!e.checked).map(e => e.key)) {
                this.dataSource.push(val);
            }

        },
    },

    template: `
    
        <div v-for="element in getDataSource">
            <input type="checkbox" v-model="element.checked" @change="elementChanged"/>
            {{element.display}}
        </div>
    
    `
}