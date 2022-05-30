const EquipmentDataRuleEditorComponent = {
    props: ['dataSource'],
    
    data: () => ({
        equipTypeItemList: Object.keys(EQTDATA).map(equipmentType => 
            ({
                key: equipmentType,
                display: EQTDATA[equipmentType].dname ?  EQTDATA[equipmentType].dname :  EQTDATA[equipmentType].name,
            })
        )
    }),
        
    computed: {

    },

    methods: {
        
    },

    template: `
    <table>

        <tr>
            <td>Equipments</td>
            <td>
                <div class="equipDataRuleEditor">
                    <vequiplisteditor :data-source="dataSource.equipIds" />
                </div>
            </td>
        </tr>

        <tr>
            <td>Equipment types</td>
            <td><velementlist :data-source="dataSource.equipTypes" :item-list="equipTypeItemList" /></td>
        </tr>

        <tr>
            <td>LOS</td>
            <td><input v-model="dataSource.LOS" type="number" /></td>
        </tr>

        <tr>
            <td>All equipments are required on a ship</td>
            <td><input v-model="dataSource.haveAllEquips" type="checkbox" /></td>
        </tr>
    </table>
    `
}