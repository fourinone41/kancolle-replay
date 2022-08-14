const HistoricalGroupsComponent = {
    props: ['eventData'],

    data: () => ({
        currentGroupName: "",
    }),

    computed: {
        groups() {
            if (!this.eventData.historicals) this.eventData.historicals = {};
            return this.eventData.historicals;
        }
    },

    methods: {
        addGroup() {

            if (!this.currentGroupName) return;
            let name = this.currentGroupName.replace(/[^a-zA-Z\-0-9]/g, "_")

            if (!this.groups[name])
                this.groups[name] = [];

            this.currentGroupName = "";
        },

        deleteGroup(name) {
            delete this.groups[name];
        }
    },
    
    watch: {
        
    },

    template: `
    
        <div>
            <input v-model="currentGroupName" />
            <button @click="addGroup">Add Group</button>

            <div v-for="(group, groupName) in groups" :key="groupName">
                <uigroup :title="groupName">
                    <button @click="deleteGroup(groupName)">Delete group</button>
                    
                    <vshipidslisteditor :data-source="groups[groupName]" />
                </uigroup>
            </div>
            
        </div>
    
    `
}