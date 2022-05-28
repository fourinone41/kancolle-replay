Vue.createApp({

  data: () => ({
    eventData: new ChEventData(),

    selectedMap: {},
    selectedMapNumber: 0,

    isMapSelected: false,
  }),

  computed: {

  },

  mounted() {
      if (localStorage.getItem("event_editor_current_event")) this.eventData = JSON.parse(localStorage.getItem("event_editor_current_event"));
      if (localStorage.getItem("event_editor_selected_map")) this.selectedMapNumber = parseInt(localStorage.getItem("event_editor_selected_map"));

      window.onbeforeunload = () => {
        localStorage.setItem("event_editor_current_event", JSON.stringify(this.eventData));
        localStorage.setItem("event_editor_selected_map", this.selectedMapNumber);
      };
  },
  
  methods: {
    addMap() {

        const lastMap = Object.keys(this.eventData.maps).length + 1;

        const newMap = new ChMapData();
        newMap.name = `E${lastMap}`;

        this.eventData.maps[lastMap] = newMap; 
        
    },

    elementChanged(mapNumber) {

      this.selectedMapNumber = mapNumber;
    },
        
    changeSelectedMap(elementData, eventSettingClicked) {
        
        this.isMapSelected = !eventSettingClicked;

        if (!eventSettingClicked) this.selectedMap = elementData;
    },

    onMapDeleted() {
      this.selectedMapNumber = 0;

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

  watch: {
    selectedMapNumber() {
      if (this.selectedMapNumber == 0) this.changeSelectedMap(null, true);
      else this.changeSelectedMap(this.eventData.maps[this.selectedMapNumber], false);
    }
  }
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
.component('vcomboboxeditor', ComboBoxEditorComponent)
.component('vnodelist', NodeListComponent)
.component('vnode', NodeComponent)
.component('vroutinglist', RoutingListComponent)
.component('vrouting', RoutingComponent)
.use(COMMON.i18n)
.mount('#eventEditor');