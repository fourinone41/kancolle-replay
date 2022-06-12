const BonusEditorComponent = {
    props: ['bonusData', 'mapData'],

    data: () => ({
        
        bonusItemList: BonusEditorComponent.BonusListForComboBox,

        diffItemList: COMMON.DIFFICULTIES,
        
        shipTypeList: COMMON.SHIP_TYPES,

        operatorList: [
            { key: '=', display: "=" },
            { key: '>=', display: ">=" },
            { key: '>', display: ">" },
        ],

        equipTypeItemList: Object.keys(EQTDATA).map(equipmentType => 
            ({
                key: equipmentType,
                display: EQTDATA[equipmentType].dname ?  EQTDATA[equipmentType].dname :  EQTDATA[equipmentType].name,
            })
        )

    }),

    computed: {
        nodeList() {
            return Object.keys(this.mapData.nodes).map(key => ({ key: key, display: key }));
        },

        mapPartItemList() {
            return Object.keys(this.mapData.parts).map(part => ({ key: part, display: part}));
        },
        
        routeUnlockItemList() {
            if (!this.mapData.hiddenRoutes) return [];
            return Object.keys(this.mapData.hiddenRoutes).map(route => ({ key: route, display: route}));
        },

        setAddItemList() {
            return [
                { key: 'set', display: "Set the bonus value of the ships" },
                { key: 'add', display: "Bonus stacks with other bonuses" },
            ]
        }
    },

    methods: {
        displayEditor(key) {
            if (!this.bonusData) return false;
            if (!this.bonusData.bonusType) return false;

            const type = this.bonusData.bonusType;
            const bonusType = BonusEditorComponent.BonusDisplay[type];

            if (!bonusType) return;
            return bonusType.editors.includes(key);
        }
    },
    
    watch: {
        "bonusData.bonusType"() {
            // --- Init the bonus
            if (!this.bonusData) return false;
            if (!this.bonusData.bonusType) return false;

            const type = this.bonusData.bonusType;
            const bonusType = BonusEditorComponent.BonusDisplay[type];

            if (!bonusType) return;

            for (const property in bonusType.init) {
                this.bonusData[property] = bonusType.init[property];
            }
        }
    },

    template: `
    
    <table>

        <tr>
            <td>Type</td>
            <td><vcomboboxeditor :data-source="bonusData" :item-list="bonusItemList" data-field="bonusType"/></td>
        </tr>

        <tr>
            <td>Set/Add</td>
            <td><vcomboboxeditor :data-source="bonusData.parameters" :item-list="setAddItemList" data-field="type"/></td>
        </tr>

        <tr>
            <td>Damage modifier</td>
            <td><input type="number" v-model="bonusData.amount" step="0.1" placeholder="1" /></td>
        </tr>

        <tr>
            <td>Accuracy modifier</td>
            <td><input type="number" v-model="bonusData.parameters.accBonus" step="0.1" placeholder="1" /></td>
        </tr>

        <tr>
            <td>Evasion modifier</td>
            <td><input type="number" v-model="bonusData.parameters.evBonus" step="0.1" placeholder="1" /></td>
        </tr>

        <tr v-if="displayEditor('onlySpecificShips')">
            <td>Bonus applies to specific allies</td>
            <td><vshipidslisteditor :data-source="bonusData.parameters.onlySpecificShips" /></td>
        </tr>
        
        <tr v-if="displayEditor('shipIds')">
            <td>Bonus applies to specific allies</td>
            <td><vshipidslisteditor :data-source="bonusData.shipIds" /></td>
        </tr>
        
        <tr v-if="displayEditor('shipTypes')">
            <td>Bonus applies to specific allies ship type</td>
            <td><velementlist :data-source="bonusData.shipTypes" :item-list="shipTypeList" /></td>
        </tr>
        
        <tr v-if="displayEditor('excludeSpecificShips')">
            <td>Exclude specific allies</td>
            <td><vshipidslisteditor :data-source="bonusData.parameters.excludeSpecificShips" /></td>
        </tr>
        
        <tr v-if="displayEditor('equipIds')">
            <td>Equipments</td>
            <td>
                <div class="equipDataRuleEditor">
                    <vequiplisteditor :data-source="bonusData.equipIds" />
                </div>
            </td>
        </tr>

        <tr v-if="displayEditor('equipTypes')">
            <td>Equipment types</td>
            <td><velementlist :data-source="bonusData.equipTypes" :item-list="equipTypeItemList" /></td>
        </tr>

        <tr v-if="displayEditor('operator')">
            <td>Operator</td>
            <td><vcomboboxeditor :data-source="bonusData" :item-list="operatorList" data-field="operator"/></td>
        </tr>

        <tr v-if="displayEditor('reqCount')">
            <td>Number of equipment required for bonus to apply</td>
            <td><input type="number" v-model="bonusData.reqCount" step="1" /></td>
        </tr>

        <tr>
            <td>Bonus applies to specific enemies</td>
            <td><vshipidslisteditor :data-source="bonusData.parameters.on" /></td>
        </tr>

        <tr>
            <td>Required flagship</td>
            <td><vshipidslisteditor :data-source="bonusData.parameters.requiredFlagshipId" /></td>
        </tr>

        <tr>
            <td>Required flagship type</td>
            <td><velementlist :data-source="bonusData.parameters.requiredFlagshipType" :item-list="shipTypeList" /></td>
        </tr>
        
        <tr>
            <td>Requires debuff</td>
            <td><input type="checkbox" v-model="bonusData.parameters.debuffOnly" /></td>
        </tr>

        <tr>
            <td>Exclude friend fleet</td>
            <td><input type="checkbox" v-model="bonusData.parameters.excludeFF" /></td>
        </tr>

        <tr>
            <td>Applies only to friend fleet</td>
            <td><input type="checkbox" v-model="bonusData.parameters.friendFleetOnly" /></td>
        </tr>

        <tr>
            <td>Apply bonus to LBAS</td>
            <td><input type="checkbox" v-model="bonusData.parameters.includeLBAS" /></td>
        </tr>

        <tr>
            <td>Applies only to bonus-less ships (at the moment this one is applied)</td>
            <td><input type="checkbox" v-model="bonusData.parameters.bonuslessShipsOnly" /></td>
        </tr>
        
        <tr>
            <td>Applies from map part</td>
            <td><vcomboboxeditor :data-source="bonusData.parameters" :item-list="mapPartItemList" data-field="part" :can-be-null="true"/></td>
        </tr>

        <tr>
            <td>Route unlock required</td>
            <td><vcomboboxeditor :data-source="bonusData.parameters" :item-list="routeUnlockItemList" data-field="requireUnlock" :can-be-null="true"/></td>
        </tr>
    </table>
    
    `
}

BonusEditorComponent.BonusDisplay = {
    ChWholeFleetBonuses: {
        init: {
            shipIds: null,
            shipTypes: null,
            equipIds: null,
            equipTypes: null,
        },

        editors: ["onlySpecificShips", "excludeSpecificShips"]
    },

    ChShipIdsBonuses: {
        init: {
            shipIds: [],
            shipTypes: null,
            equipIds: null,
            equipTypes: null,
        },

        editors: ["shipIds"]
    },

    ChShipTypeBonuses: {
        init: {
            shipIds: null,
            shipTypes: [],
            equipIds: null,
            equipTypes: null,
        },

        editors: ["shipTypes", "onlySpecificShips", "excludeSpecificShips"]
    },

    ChEquipIdsBonuses: {
        init: {
            shipIds: null,
            shipTypes: null,
            equipIds: [],
            equipTypes: null,
        },

        editors: ["equipIds", "operator", "reqCount", "onlySpecificShips", "excludeSpecificShips"]
    },

    ChEquipTypesBonuses: {
        init: {
            shipIds: null,
            shipTypes: null,
            equipIds: null,
            equipTypes: [],
        },

        editors: ["equipTypes", "operator", "reqCount", "onlySpecificShips", "excludeSpecificShips"]
    },
}

BonusEditorComponent.BonusListForComboBox = [
    { key: 'ChWholeFleetBonuses', display: 'Basic bonus' },
    { key: 'ChShipIdsBonuses', display: 'Bonus per ship' },
    { key: 'ChShipTypeBonuses', display: 'Bonus per ship type' },
    { key: 'ChEquipIdsBonuses', display: 'Bonus per equipment' },
    { key: 'ChEquipTypesBonuses', display: 'Bonus per equipment type' },
]