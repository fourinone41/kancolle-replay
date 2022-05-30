const MapSelectionComponent = {
    props: ['eventData', 'selectedMap'],
    emits: ['addMap', 'elementChanged', 'eventModeChanged'],

    data: () => ({
        file: null,
        input: null,
        
        fileMode: localStorage.getItem("editorMode") ? localStorage.getItem("editorMode") : 'customFile',

        fileModeItemList: [
            { key: 'customFile', display: 'Create event' },
            { key: 'playedEvent', display: 'Edit played event' },
        ]
    }),
    
    methods: {
        addMap() {
            this.$emit('addMap')
        },
        
        mapSelectionChanged(mapNumber) {
            this.$emit('elementChanged', mapNumber);
        },

        exportEventData() {

            const dataToExportBeforeConversion = {
                eventData: this.eventData
            };
            
            const dataToExport = JSON.stringify(MAPDATA[97].ConvertMapEditorFormatToSimulatorFormat(dataToExportBeforeConversion));

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
            for (const property in dataParsed.eventData) {
                this.eventData[property] = dataParsed.eventData[property];
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
        },

        isSelectedMap(index) {
            return this.selectedMap == index;
        }
    },

    watch: {
        fileMode() {
            this.$emit("eventModeChanged", this.fileMode);
        }
    },

    mounted() {
        this.input = this.$el.querySelector('input[type=file]');
        this.input.style.display = 'none'
    },

    template: `
        
        <div id="mapButtons">
            <vcomboboxeditor :data-source="this" :item-list="fileModeItemList" data-field="fileMode" class-for-select="mapButton"/>
            <input type="file" v-on:change="fileChanged" id="importFile" />
            <div v-if="fileMode=='customFile'" class="mapButton" @click="showUpload">Import</div>
            <div class="mapButton" @click="exportEventData">Export</div>
            <div class="mapButton" @click="mapSelectionChanged(0)" :class="{ mapButtonSelected: isSelectedMap(0)}">Event settings</div>

            <div class="mapButton" v-for="(map, index) in eventData.maps" :key="index" :class="{ mapButtonSelected: isSelectedMap(index)}">
                <div @click="mapSelectionChanged(index)">{{map.name}}</div>
            </div>

            <div class="mapButton" @click="addMap">Add map</div>
        </div>
    
    `
}