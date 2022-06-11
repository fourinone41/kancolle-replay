const EnemyCompListPerDiffEditorComponent = {
    props: ['compList', 'compObject', 'initValues'],

    data: () => ({
        compNameCurrent: '',
        compNewName: '',

        otherCompSelected: '',

        formationList: [
            { key: 1, display: "Line ahead" },
            { key: 2, display: "Double line" },
            { key: 3, display: "Diamond" },
            { key: 4, display: "Echelon" },
            { key: 5, display: "Line abreast" },
            { key: 6, display: "Vanguard" },

            { key: -1, separator: true },
            
            { key: 11, display: "Cruising Formation 1 (ASW Alert)" },
            { key: 12, display: "Cruising Formation 2 (Forward Alert)" },
            { key: 13, display: "Cruising Formation 3 (Ring Formation)" },
            { key: 14, display: "Cruising Formation 4 (Battle Formation)" },
        ]
    }),

    computed: {
        isCombined() {
            if (!this.compNameCurrent) return false;
            if (!this.compObject[this.compNameCurrent]) return false;
            return !!this.compObject[this.compNameCurrent].ce;
        },

        compItemList() {
            return Object.keys(this.compObject).map(x => ({ key: x, display: x }));
        }
    },

    methods: {
        addComp() {
            this.compObject[this.compNewName] = { c: [] };
            this.compList[this.compNewName] = 100;

            if (this.initValues) {
                for (const property in this.initValues) {
                    this.compObject[this.compNewName][property] = this.initValues[property];
                }
            }

            this.compNewName = '';
        },

        addExistingComp() {
            this.compList[this.otherCompSelected] = 100;

            this.otherCompSelected = '';
        },

        deleteComp() {
            delete this.compList[this.compNameCurrent];
            this.compNameCurrent = '';
        }
    },

    template: `
    
        <div class="editor-group editor-group-no-scroll">
            <div>
                <button @click="addComp">Add new comp</button>
                <input placeholder="Name" maxlength="50" ref="compNameRef" v-model="compNewName" @keydown.enter="addComp"/>
            </div>

            <div>
                <button @click="addExistingComp">Add existing comp</button>
                <vcomboboxeditor :data-source="this" :item-list="compItemList" data-field="otherCompSelected" />
            </div>
            
            <div class="tabber">
                <div v-for="(odds, compName) in compList" :key="compName" class="tabberButton" :class="{selected:compName==compNameCurrent}" @click="compNameCurrent=compName">{{compName}}</div>
            </div>

            <div v-if="compNameCurrent && compObject[compNameCurrent]" class="fleetDisplay">
                <div>
                    <div>{{compNameCurrent}}</div>
                    <div>Odds <input type="number" min="0" v-model="compList[compNameCurrent]" /> %</div>
                    <div>Formation <vcomboboxeditor :data-source="compObject[compNameCurrent]" :item-list="formationList" data-field="f"></vcomboboxeditor></div>
                    <div><vshipidslisteditor :data-source="compObject[compNameCurrent].c" :numberOfShips="6" /></div>
                </div>
                
                <div v-if="isCombined">
                    <div>Escort</div>
                    <div><vshipidslisteditor :data-source="compObject[compNameCurrent].ce" :numberOfShips="6" /></div>
                </div>
                <div>Bombing only ?<input type="checkbox" v-model="compObject[compNameCurrent].bomb"/></div>
                <div>No ammo cost ?<input type="checkbox" v-model="compObject[compNameCurrent].noammo"/></div>
                <div><input type="button" value="Delete Fleet" @click="deleteComp()"/></div>
            </div>
        </div>
    
    `
}