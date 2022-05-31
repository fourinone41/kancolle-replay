const GimmickEditorComponent = {
    props: ['gimmickData', 'mapData'],

    data: () => ({
        gimmickItemList: GimmickEditorComponent.GimmickListForComboBox,

        diffItemList: COMMON.DIFFICULTIES,

    }),

    computed: {
        nodeList() {
            return Object.keys(this.mapData.nodes).map(key => ({ key: key, display: key }));
        },

        
        rankItemList() {
            if (this.gimmickData.type == "battle") return [
                { key: "S", display: "S" },
                { key: "A", display: "A" },
                { key: "B", display: "B" },
                { key: "C", display: "C" },
                { key: "D", display: "D" },
            ];

            if (this.gimmickData.type == "AirState") return [
                { key: "AS+", display: "AS+" },
                { key: "AS", display: "AS" },
                { key: "AP", display: "AP" },
            ];

            return [];
        }
    },

    methods: {
        displayEditor(key) {
            if (!this.gimmickData) return false;
            if (!this.gimmickData.type) return false;

            const type = this.gimmickData.type;
            const gimmickType = GimmickEditorComponent.GimmickDisplay[type];

            if (!gimmickType) return;
            return gimmickType.editors.includes(key);
        }
    },
    
    watch: {
        "gimmickData.type"() {
            // --- Init the gimmick
            if (!this.gimmickData) return false;
            if (!this.gimmickData.type) return false;

            const type = this.gimmickData.type;
            const gimmickType = GimmickEditorComponent.GimmickDisplay[type];

            if (!gimmickType) return;

            for (const property in gimmickType.init) {
                this.gimmickData[property] = gimmickType.init[property];
            }
        }
    },

    template: `
    
    <table>

        <tr>
            <td>Type</td>
            <td><vcomboboxeditor :data-source="gimmickData" :item-list="gimmickItemList" data-field="type"/></td>
        </tr>

        <tr v-if="displayEditor('node')">
            <td>Node</td>
            <td><vcomboboxeditor :data-source="gimmickData" :item-list="nodeList" data-field="node"/></td>
        </tr>

        <tr v-if="displayEditor('timesRequiredPerDiff')">
            <td>Time required per diff</td>
            <td><vcountruleeditor :data-source="gimmickData" data-field="timesRequiredPerDiff" /></td>
        </tr>

        <tr v-if="displayEditor('ranksRequiredPerDiff')">
            <td>Rank required per diff</td>
            <td>
                <div v-for="diff in diffItemList" :key="diff.key">
                    {{diff.display}}
                    <vcomboboxeditor :data-source="gimmickData.ranksRequiredPerDiff" :item-list="rankItemList" :data-field="diff.key"/>
                </div>
            </td>
        </tr>

    </table>
    
    `
}

GimmickEditorComponent.GimmickDisplay = {
    battle: {
        init: {
            timesRequiredPerDiff: {
                4: 0,
                1: 0,
                2: 0,
                3: 0,
            },
            
            ranksRequiredPerDiff: {
                4: '',
                1: '',
                2: '',
                3: '',
            }
        },

        editors: ["node", "timesRequiredPerDiff", "ranksRequiredPerDiff"]
    },

    NoHPLoss: {
        init: {
            timesRequiredPerDiff: {
                4: 0,
                1: 0,
                2: 0,
                3: 0,
            },
        },

        editors: ["node", "timesRequiredPerDiff"]
    },

    AirState: {
        init: {
            timesRequiredPerDiff: {
                4: 0,
                1: 0,
                2: 0,
                3: 0,
            },
            
            ranksRequiredPerDiff: {
                4: '',
                1: '',
                2: '',
                3: '',
            }
        },

        editors: ["node", "timesRequiredPerDiff", "ranksRequiredPerDiff"]
    },

    ReachNode: {
        init: {
            timesRequiredPerDiff: {
                4: 0,
                1: 0,
                2: 0,
                3: 0,
            }
        },

        editors: ["node", "timesRequiredPerDiff"]
    },

    MapHP: {
        init: {
            node: 'MapWide',
            timesRequiredPerDiff: {
                4: 1,
                1: 1,
                2: 1,
                3: 1,
            }
        },

        editors: []
    },

    PartClear: {
        init: {
            node: 'MapWide',
            timesRequiredPerDiff: {
                4: 1,
                1: 1,
                2: 1,
                3: 1,
            }
        },

        editors: []
    }
}

GimmickEditorComponent.GimmickListForComboBox = [
    { key: 'battle', display: 'Fight enemy fleet' },
    { key: 'NoHPLoss', display: 'Get no HP loss on a node' },
    { key: 'AirState', display: 'Get airstate on a node' },
    { key: 'ReachNode', display: 'Reach a node' },
    { key: 'MapHP', display: 'Reach certain map HP' },
    { key: 'PartClear', display: 'Clear map part' },
]