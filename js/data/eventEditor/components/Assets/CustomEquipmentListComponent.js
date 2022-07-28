const CustomEquipmentListComponent = {
    props: ['equipmentList'],

    data: () => ({
        
    }),

    computed: {
        
    },

    methods: {
        addEquipment() {
            const newEquip = new ChEquipmentData();
            newEquip.id = +COMMON.getLastCustomEquipId() + 1;

            this.equipmentList.push(newEquip);
            COMMON.addCustomEquipment(newEquip);
        }
    },
    
    watch: {
        
    },

    template: `
        
        <button @click="addEquipment">Add equipment</button>
        <div v-for="(equipment, key) in equipmentList" :key="key">
            <vcustomequipmenteditor :equipment-data="equipment" />
        </div>
    
    `
}