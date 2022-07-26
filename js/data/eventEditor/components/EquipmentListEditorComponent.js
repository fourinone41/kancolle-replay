const EquipmentListEditorComponent = {
    props: ['dataSource', 'handleLevels', 'handleImage'],
    
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

            <div v-if="handleLevels || handleImage">
                <vequipeditor :equip-id="!!equipId ? equipId.id : 0" @equip-set="(mstId)=>dataSource[key]= { id: mstId }" @equip-delete="deleteEquipment(key)" />
                <input v-if="!!dataSource[key] && handleLevels" v-model="equipId.level" type="number" min=0 max=10 />
                <input v-if="!!dataSource[key] && handleImage" v-model="equipId.image" />
                <img v-if="!!dataSource[key] && handleImage" :src="equipId.image" />
            </div>
            <div v-else>
                <vequipeditor :equip-id="equipId" @equip-set="(mstId)=>dataSource[key]=mstId" @equip-delete="deleteEquipment(key)" />
            </div>
        </div>
    
    `
}