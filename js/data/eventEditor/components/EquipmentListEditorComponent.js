const EquipmentListEditorComponent = {
    props: ['dataSource'],
    
    data: () => ({
       
    }),
        
    computed: {

    },

    methods: {
        addEquipment() {
            this.dataSource.push(null);
        },

        deleteEquipment(key) {
            this.dataSource.splice(key,1);
        }
    },

    template: `
    
        <button @click="addEquipment">Add</button>
        <div v-for="(equipId, key) in dataSource" :key="key" >

            <vequipeditor :equip-id="equipId" @equip-set="(mstId)=>dataSource[key]=mstId" @equip-delete="deleteEquipment(key)" />

        </div>
    
    `
}