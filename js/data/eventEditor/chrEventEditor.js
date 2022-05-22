Vue.createApp({

  data: () => ({
    eventData: new ChEventData(),
    selectedMap: {},

    isMapSelected: false,
  }),

  computed: {

  },

  mounted() {
      //this.eventData = MAPDATA[50];

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
},
})
.component('MapSelection', MapSelectionComponent)
.component('MapEditor', MapEditorComponent)
.component('EventEditor', EventEditorComponent)
.mount('#eventEditor');