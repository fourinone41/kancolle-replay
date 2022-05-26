Vue.createApp({

  data: () => ({
    eventData: new ChEventData(),

    selectedMap: {},

    isMapSelected: false,
  }),

  computed: {

  },

  mounted() {
      if (localStorage.getItem("event_editor_current_event")) this.eventData = JSON.parse(localStorage.getItem("event_editor_current_event"));

      window.onbeforeunload = () => {
        localStorage.setItem("event_editor_current_event", JSON.stringify(this.eventData));
      };
  },
  
  methods: {
    addMap() {

        const lastMap = Object.keys(this.eventData.maps).length + 1;

        const newMap = new ChMapData();
        newMap.name = `E${lastMap}`;

        this.eventData.maps[lastMap] = newMap; 
        
    },
        
    elementChanged(elementData, eventSettingClicked) {
        
        this.isMapSelected = !eventSettingClicked;

        if (!eventSettingClicked) this.selectedMap = elementData;
    },

    onMapDeleted() {
      this.elementChanged(null, true);

      this.recomputeMapsNumbers();
    },

    recomputeMapsNumbers() {
      // --- recompute map numbers
      const maps = {};

      let count = 0;

      for (const mapKey in this.eventData.maps) {
        ++count;

        maps[count] = this.eventData.maps[mapKey];
        maps[count].name = `E${count}`;
      }

      this.eventData.maps = maps;
    }
},
})
.component('vmodal', ModalComponent)
.component('vshipselector', ShipSelectorComponent)
.component('vequipselector', EquipSelectorComponent)
.component('vequipeditor', EquipEditorComponent)
.component('vshipeditor', ShipEditorComponent)
.component('vfleeteditor', FleetEditorComponent)
.component('MultiCheckboxesEditor', MultiCheckboxesEditorComponent)
.component('MapSelection', MapSelectionComponent)
.component('MapEditor', MapEditorComponent)
.component('EventEditor', EventEditorComponent)
.use(COMMON.i18n)
.mount('#eventEditor');