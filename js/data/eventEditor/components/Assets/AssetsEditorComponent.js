const AssetsEditorComponent = {
    props: ['eventData'],

    data: () => ({
        
    }),

    computed: {
        equipmentList() {
            if (!this.eventData.assets.equipments) this.eventData.assets.equipments = [];
            return this.eventData.assets.equipments;
        }
    },

    methods: {
        
    },
    
    watch: {
        
    },

    template: `
        <div class="editor-group">
            <uigroup title="Equipments">
                <vcustomequipmentlist :equipment-list="equipmentList" />
            </uigroup>
        </div>
    `
}