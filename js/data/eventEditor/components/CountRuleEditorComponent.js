const CountRuleEditorComponent = {
    props: ['dataSource', 'dataField', 'hideToggleButton', 'type'],

    
    data: () => ({
        
        diffItemList: COMMON.DIFFICULTIES,

    }),
        
    computed: {
        isCountPerDiff() {
            return typeof(this.dataSource[this.dataField]) != 'number';
        }
    },

    methods: {

        toggleCountPerDiff() {
            if (typeof(this.dataSource[this.dataField]) == 'number') {
                this.dataSource[this.dataField] = {
                    4: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                }
            } else {
                this.dataSource[this.dataField] = 0;
            }
        }

    },

    watch: {
    },

    template: `
    
        <div v-if="!isCountPerDiff && !hideToggleButton">
            <button @click="toggleCountPerDiff">Count per difficulty</button>
        </div>

        <div v-else-if="!hideToggleButton">
            <button @click="toggleCountPerDiff">Count</button>
        </div>

        <div v-if="!isCountPerDiff">
            <input v-model="dataSource[dataField]" :type="type ? type : 'number'" min="0" />
        </div>

        <div v-else v-for="diff in diffItemList" :key="diff.key">

            {{diff.display}}
            <input v-model="dataSource[dataField][diff.key]" :type="type ? type : 'number'" min="0" />
        </div>


        
    
    `
}