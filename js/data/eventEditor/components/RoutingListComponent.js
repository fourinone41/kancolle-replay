const RoutingListComponent = {
    props: ['ruleList', 'mapData', 'conditionCheckedNode'],
        
    data: () => ({
        
    }),

    computed: {
        
    },

    methods: {
        addRule() {
            const newRule = new ChRule();

            if (this.conditionCheckedNode) newRule.conditionCheckedNode = this.conditionCheckedNode;

            this.ruleList.push(newRule);
        },

        onDeleteRule(deletedRule) {
            const tempArray = [];

            while (this.ruleList.length) {
                tempArray.push(this.ruleList.shift());
            }

            for (const rule of tempArray) {
                if (deletedRule !== rule) this.ruleList.push(rule);
            }
        }
    },

    watch: {
        
    },

    template: `
    
        <div class="mapButton" @click="addRule">Add rule</div>

        <div v-for="(rule, key) in ruleList" :key="key">
            <vrouting :rule="rule" :map-data="mapData" @delete-rule="onDeleteRule"></vrouting>
        </div>
    
    `
}