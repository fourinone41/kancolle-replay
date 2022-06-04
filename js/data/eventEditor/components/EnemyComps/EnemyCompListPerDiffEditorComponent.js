const EnemyCompListPerDiffEditorComponent = {
    props: ['compList', 'compObject'],

    data: () => ({
        compNameCurrent: '',
        compNewName: '',
    }),

    computed: {
        
    },

    methods: {
        addComp() {
            this.compObject[this.compNewName] = { c: [] };
            this.compList[this.compNewName] = 100;

            this.compNewName = '';
        },

        deleteComp() {
            delete this.compList[this.compNameCurrent];
            this.compNameCurrent = '';
        }
    },
    
    watch: {
        
    },

    template: `
    
        <div class="editor-group editor-group-no-scroll">
            <div>
                <input type="button" value="Add new comp" @click="addComp"/><input placeholder="Name" maxlength="50" ref="compNameRef" v-model="compNewName" @keydown.enter="addComp"/>
            </div>
            
            <div class="tabber">
                <div v-for="(odds, compName) in compList" :key="compName" class="tabberButton" :class="{selected:compName==compNameCurrent}" @click="compNameCurrent=compName">{{compName}}</div>
            </div>

            <div v-if="compNameCurrent && compObject[compNameCurrent]" class="fleetDisplay">
                <div>
                    <div>{{compNameCurrent}}</div>
                    <div>Odds : <input type="number" min="0" v-model="compList[compNameCurrent]" /> %</div>
                    <div><venemycompshiplist :ship-list="compObject[compNameCurrent].c" /></div>
                </div>
                <div><input type="button" value="Delete Fleet" @click="deleteComp()"/></div>
            </div>
        </div>
    
    `
}