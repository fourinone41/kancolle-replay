Vue.createApp({

  data: () => ({
    eventData: new ChEventData(),
    mapNumber: 0
  }),

  computed: {
    mapNumberIsZero: function() {
        return this.mapNumber == 0;
    }
  },

  mounted() {
      //this.eventData = MAPDATA[50];
  },
  
  methods: {
    addMap() {

        const lastMap = Object.keys(this.eventData.maps).length + 1;

        const newMap = new ChMapData();
        newMap.name = `E${lastMap}`;

        this.eventData.maps[lastMap] = newMap; 
        
    },
},
})
.component('MapSelection', MapSelectionComponent)
.mount('#eventEditor');