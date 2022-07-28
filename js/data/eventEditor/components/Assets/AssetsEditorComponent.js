const AssetsEditorComponent = {
    props: ['eventData'],

    data: () => ({
        
    }),

    computed: {
        equipmentList() {
            if (!this.eventData.assets.equipments) this.eventData.assets.equipments = [];
            return this.eventData.assets.equipments;
        },
        shipList() {
            if (!this.eventData.assets.ships) this.eventData.assets.ships = [];
            return this.eventData.assets.ships;
        },
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

            <uigroup title="Ships">
                <vcustomshiplist :ship-list="shipList" />
            </uigroup>
        </div>
    `
}