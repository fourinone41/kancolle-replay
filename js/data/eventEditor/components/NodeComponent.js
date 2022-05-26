const NodeComponent = {
    props: ['eventData', 'mapData', 'nodeData'],
        
    data: () => ({
        
    }),

    computed: {
        
    },

    methods: {
        
    },

    template: `
    
    <div class="editor-group">
        <table>
            <tr>
                <td>X position</td>
                <td><input v-model="nodeData.x" type="number" /></td>
            </tr>

            <tr>
                <td>Y position</td>
                <td><input v-model="nodeData.y" type="number" /></td>
            </tr>
        </table>
    </div>        
    
    `
}