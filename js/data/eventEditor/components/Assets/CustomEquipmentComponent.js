const CustomEquipmentComponent = {
    props: ['equipmentData'],

    data: () => ({
        equipmentTypesItemList: Object.values(EQUIPMENT_TYPES_ENUM).map(equipmentType => 
            ({
                key: equipmentType,
                display: EQTDATA[equipmentType] ? (EQTDATA[equipmentType].dname ?  EQTDATA[equipmentType].dname :  EQTDATA[equipmentType].name) : "",
            })
        ),

        equipmentBTypesItemList: Object.values(EQUIPMENT_B_TYPES_ENUM).map(equipmentType => 
            ({
                key: equipmentType,
                display: EQBTDATA[equipmentType] ? (EQBTDATA[equipmentType].dname ?  EQBTDATA[equipmentType].dname :  EQBTDATA[equipmentType].name) : "",
            })
        ),

        rangeItemList: [
            { key: 0, display: "None" },
            { key: 1, display: "Short" },
            { key: 2, display: "Medium" },
            { key: 3, display: "Long" },
            { key: 4, display: "V.Long" },
            { key: 5, display: "V.Long+" },
        ]
    }),

    computed: {
        
    },

    methods: {
        
    },
    
    watch: {
        
    },

    template: `
    
        <div class="editor-group">
            <table>

                <tr>
                    <td>ID</td>
                    <td><input v-model="equipmentData.id" readonly/></td>
                </tr>

                <tr>
                    <td>Name (English)</td>
                    <td><input v-model="equipmentData.name" /></td>
                </tr>
                
                <tr>
                    <td>Name (Japanese)</td>
                    <td><input v-model="equipmentData.nameJP" /></td>
                </tr>
                
                <tr>
                    <td>Date added</td>
                    <td><input readonly v-model="equipmentData.added" /></td>
                </tr>
                
                <tr>
                    <td>Type</td>
                    <td><vcomboboxeditor :data-source="equipmentData" :item-list="equipmentTypesItemList" data-field="type"/></td>
                </tr>
                
                <tr>
                    <td>Battle type</td>
                    <td><vcomboboxeditor :data-source="equipmentData" :item-list="equipmentBTypesItemList" data-field="btype"/></td>
                </tr>
                
                <tr>
                    <td>Firepower</td>
                    <td><input v-model="equipmentData.FP" type="number" /></td>
                </tr>

                <tr>
                    <td>Torpedo</td>
                    <td><input v-model="equipmentData.TP" type="number" /></td>
                </tr>

                <tr>
                    <td>Anti-air</td>
                    <td><input v-model="equipmentData.AA" type="number" /></td>
                </tr>

                <tr>
                    <td>Armor</td>
                    <td><input v-model="equipmentData.AR" type="number" /></td>
                </tr>

                <tr>
                    <td>ASW</td>
                    <td><input v-model="equipmentData.ASW" type="number" /></td>
                </tr>

                <tr>
                    <td>Evasion</td>
                    <td><input v-model="equipmentData.EV" type="number" /></td>
                </tr>

                <tr>
                    <td>LOS</td>
                    <td><input v-model="equipmentData.LOS" type="number" /></td>
                </tr>
                
                <tr>
                    <td>Accuracy</td>
                    <td><input v-model="equipmentData.ACC" type="number" /></td>
                </tr>
                
                <tr>
                    <td>Range</td>
                    <td><vcomboboxeditor :data-source="equipmentData" :item-list="rangeItemList" data-field="RNG"/></td>
                </tr>
                
                <tr>
                    <td>Dive bombing</td>
                    <td><input v-model="equipmentData.DIVEBOMB" type="number" /></td>
                </tr>

                <tr>
                    <td>Can do special CI</td>
                    <td><input v-model="equipmentData.specialCutIn" type="checkbox" /></td>
                </tr>
            </table>
        </div>
    
    `
}