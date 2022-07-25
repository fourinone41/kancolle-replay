const MapLockEditorComponent = {
    props: ['mapData', 'eventData'],

    data: () => ({
        selectedStartNodeForTagAllowed: null,
        selectedFleetTypeForTagAllowed: null,
        selectedStartNodeForTagGiven: null,
        selectedFleetTypeForTagGiven: null,
        difficultiesItemSource: COMMON.DIFFICULTIES,
    }),

    computed: {

        nodeList() {
            return Object.keys(this.mapData.nodes).map(key => ({ key: key, display: key }));
        },

        handleComplexLock() {
            return !!this.mapData.lockInfos;
        },

        fleetsItemSource () {
            const fleets = [];
            
            for (const fleetType of this.eventData.allowFleets) {

                const type = COMMON.FLEET_TYPES.find(el => el.key == fleetType);

                fleets.push(type);
            }

            return fleets;
        },
        
        locksItemSource () {
            const locks = [];
            if (!this.eventData.locksData) return [];
            
            for (const lock of this.eventData.locksData) {

                const newLock = {
                    display: lock.name,
                    key: lock.name
                }

                locks.push(newLock);
            }

            return locks;
        },

        difficulties() {
            if (!this.mapData.lockInfos) return [];
            
            if (!this.mapData.lockInfos.difficulties) {
                this.mapData.lockInfos.difficulties = [2,3];
            }

            return this.mapData.lockInfos.difficulties;
        },

        giveLockDataSource() {
            if (!Array.isArray(this.mapData.giveLock)) {
                if (this.mapData.giveLock) this.mapData.giveLock = [this.mapData.giveLock];
                else this.mapData.giveLock = [];
            }

            return this.mapData.giveLock;
        }
    },
    
    methods: {
        toggleComplexLocks() {
            if (this.handleComplexLock) return delete this.mapData.lockInfos;
            
            this.mapData.lockInfos = {
                difficulties: [2,3],

                isTagAllowed: {
                    // --- Per start
                    startNode: {
                        /*
                        example : 
                        Start1: ['52_1'],
                        */
                    },
    
                    // --- Per fleet type
                    fleetType: {
                        /*
                        example:
                        0: ['52_1'],
                        */
                    }
                },
    
                tagGiven: {
                    // --- Per start
                    startNode: {
                        /*
                        example : 
                        Start1: '52_1',
                        */
                    },
    
                    // --- Per fleet type
                    fleetType: {
                        /*
                        example:
                        0: '52_1',
                        */
                    }
                },
            }
        },

        getFleetDisplay(fleetType) {
            const type = COMMON.FLEET_TYPES.find(el => el.key == fleetType);
            if (!type) return '';
            return type.display;
        },

        addElement(object, key, newElement) {
            if (object[key]) return;
            
            object[key] = newElement;
        },

        removeElement(object, key) {
            delete object[key];
        }
    },

    template: `
    <table>
        <tr>
            <td>Gives lock</td>
            <td><velementlist :data-source="giveLockDataSource" :item-list="locksItemSource" /></td>
        </tr>

        <tr>
            <td>Checks lock</td>
            <td><velementlist :data-source="mapData.checkLock" :item-list="locksItemSource" /></td>
        </tr>

        <tr>
            <td>Complex lock logic</td>
            <td v-if="!handleComplexLock"><button @click="toggleComplexLocks">Enable</button></td>
            <td v-else><button @click="toggleComplexLocks">Disable</button></td>
        </tr>

        <tr v-if="handleComplexLock">
            <td>
                Lock applies to difficulties
                <velementlist :data-source="difficulties" :item-list="difficultiesItemSource" />
            </td>
        </tr>

        <tr v-if="handleComplexLock">
            <td>
                Tag allowed per start
                <vcomboboxeditor :data-source="this" :item-list="nodeList" data-field="selectedStartNodeForTagAllowed"></vcomboboxeditor>
                <button @click="addElement(mapData.lockInfos.isTagAllowed.startNode, selectedStartNodeForTagAllowed, [])">Add start</button>
            
                <div v-for="(values, node) in mapData.lockInfos.isTagAllowed.startNode" :key="node">
                    <button @click="removeElement(mapData.lockInfos.isTagAllowed.startNode, node)">Delete</button>
                    {{node}} : <velementlist :data-source="values" :item-list="locksItemSource" />
                </div>
            </td>
        </tr>

        <tr v-if="handleComplexLock">
            <td>
                Tag allowed per fleet type
                <vcomboboxeditor :data-source="this" :item-list="fleetsItemSource" data-field="selectedFleetTypeForTagAllowed"></vcomboboxeditor>
                <button @click="addElement(mapData.lockInfos.isTagAllowed.fleetType, selectedFleetTypeForTagAllowed, [])">Add fleet</button>
            
                <div v-for="(values, fleetType) in mapData.lockInfos.isTagAllowed.fleetType" :key="fleetType">
                    <button @click="removeElement(mapData.lockInfos.isTagAllowed.fleetType, fleetType)">Delete</button>
                    {{getFleetDisplay(fleetType)}} : <velementlist :data-source="values" :item-list="locksItemSource" />
                </div>
            </td>
        </tr>

        <tr v-if="handleComplexLock">
            <td>
                Tag given per start
                <vcomboboxeditor :data-source="this" :item-list="nodeList" data-field="selectedStartNodeForTagGiven"></vcomboboxeditor>
                <button @click="addElement(mapData.lockInfos.tagGiven.startNode, selectedStartNodeForTagGiven, '')">Add start</button>
            
                <div v-for="(values, startNode) in mapData.lockInfos.tagGiven.startNode" :key="startNode">
                    <button @click="removeElement(mapData.lockInfos.tagGiven.startNode, startNode)">Delete</button>
                    {{startNode}} : <vcomboboxeditor :data-source="mapData.lockInfos.tagGiven.startNode" :item-list="locksItemSource" :data-field="startNode"></vcomboboxeditor>
                </div>
            </td>
        </tr>

        <tr v-if="handleComplexLock">
            <td>
                Tag given per fleet type
                <vcomboboxeditor :data-source="this" :item-list="fleetsItemSource" data-field="selectedFleetTypeForTagGiven"></vcomboboxeditor>
                <button @click="addElement(mapData.lockInfos.tagGiven.fleetType, selectedFleetTypeForTagGiven, '')">Add fleet</button>
            
                <div v-for="(values, fleetType) in mapData.lockInfos.tagGiven.fleetType" :key="fleetType">
                    <button @click="removeElement(mapData.lockInfos.tagGiven.fleetType, fleetType)">Delete</button>
                    {{getFleetDisplay(fleetType)}} : <vcomboboxeditor :data-source="mapData.lockInfos.tagGiven.fleetType" :item-list="locksItemSource" :data-field="fleetType"></vcomboboxeditor>
                </div>
            </td>
        </tr>

    </table>
    `
}