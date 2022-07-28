const CustomShipComponent = {
    props: ['shipData'],

    data: () => ({
        rangeItemList: [
            { key: 0, display: "None" },
            { key: 1, display: "Short" },
            { key: 2, display: "Medium" },
            { key: 3, display: "Long" },
            { key: 4, display: "V.Long" },
            { key: 5, display: "V.Long+" },
        ]
    }),

    computed: {
        
    },

    methods: {
        
    },
    
    watch: {
        
    },

    template: `
    
        <div class="editor-group">
            <table>

                <tr>
                    <td>ID</td>
                    <td><input v-model="shipData.id" readonly/></td>
                </tr>

                <tr>
                    <td>Name (English)</td>
                    <td><input v-model="shipData.name"/></td>
                </tr>

                <tr>
                    <td>Name (Japanese)</td>
                    <td><input v-model="shipData.nameJP"/></td>
                </tr>

                <tr>
                    <td>Image (160px x 40px)</td>
                    <td><input v-model="shipData.customImage"/></td>
                    <td><img :src="shipData.customImage"/></td>
                </tr>

                <tr>
                    <td>Name (English)</td>
                    <td><input v-model="shipData.name"/></td>
                </tr>

                <tr>
                    <td>Name (English)</td>
                    <td><input v-model="shipData.name"/></td>
                </tr>

                <tr>
                    <td>Name (English)</td>
                    <td><input v-model="shipData.name"/></td>
                </tr>

                <tr>
                    <td>Name (English)</td>
                    <td><input v-model="shipData.name"/></td>
                </tr>

                <tr>
                    <td>Name (English)</td>
                    <td><input v-model="shipData.name"/></td>
                </tr>
            </table>
        </div>
    
    `
}