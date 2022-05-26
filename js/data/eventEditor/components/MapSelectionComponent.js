const MapSelectionComponent = {
    props: ['eventData'],
    emits: ['addMap', 'elementChanged'],

    data() {return {
        file: null,
        input: null
    }},
    
    methods: {
        addMap() {
            this.$emit('addMap')
        },
        
        mapSelectionChanged(map, eventSettingClicked) {
            this.$emit('elementChanged', map, eventSettingClicked);
        },

        exportEventData() {
            const dataToExport = JSON.stringify(MAPDATA[97].ConvertMapEditorFormatToSimulatorFormat(this.eventData));

            let a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(new Blob([dataToExport], {type: 'application/json'}));
            a.download = this.eventData.name.replace(/[^a-zA-Z0-9-]/g, '_') + '.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        },

        importEventData(dataToImport) {
            const dataParsed = MAPDATA[97].ConvertSimulatorFormatToMapEditorFormat(JSON.parse(dataToImport));

            // --- Clear event data
            const model = new ChEventData();

            for (const property in model) {
                this.eventData[property] = model[property];
            }

            // load 
            for (const property in dataParsed) {
                this.eventData[property] = dataParsed[property];
            }
        },

        fileChanged() {
            if (!this.input.files) return;
            if (!this.input.files[0]) return;

            var reader = new FileReader();

            reader.onload = (event) => {
                this.importEventData(event.target.result);
            };

            reader.readAsText(this.input.files[0]);

        },

        showUpload() {
            const event = new MouseEvent('click', {
              'view': window,
              'bubbles': true,
              'cancelable': true
            });
            
            this.input.dispatchEvent(event)
          }
    },

    mounted() {
        this.input = this.$el.querySelector('input[type=file]');
        this.input.style.display = 'none'
    },

    template: `
        
        <div id="mapButtons">
            <input type="file" v-on:change="fileChanged" id="importFile" />
            <div class="mapButton" @click="showUpload">Import</div>
            <div class="mapButton" @click="exportEventData">Export</div>
            <div class="mapButton" @click="mapSelectionChanged(null, true)">Event settings</div>

            <div class="mapButton" v-for="map in eventData.maps">
                <div @click="mapSelectionChanged(map, false)">{{map.name}}</div>
            </div>

            <div class="mapButton" @click="addMap">Add map</div>
        </div>
    
    `
}