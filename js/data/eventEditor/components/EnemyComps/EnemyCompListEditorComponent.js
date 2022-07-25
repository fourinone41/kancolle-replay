const EnemyCompListEditorComponent = {
    props: ['compList', 'compObject', 'initValues', 'allCompsObject'],

    data: () => ({
        difficultiesItemList: COMMON.DIFFICULTIES,

        compNameCurrent: '',
    }),

    computed: {
        
    },

    methods: {
        
    },
    
    watch: {
        
    },

    template: `
    
        <div v-for="diff in difficultiesItemList" :key="diff.key">
        
            <table>
                <tr>
                    <td>{{diff.display}}</td>
                </tr>

                <tr>
                    <td>

                        <venemycomplistperdiff :comp-list="compList[diff.key]" :comp-object="compObject" :init-values="initValues" :all-comps-object="allCompsObject"></venemycomplistperdiff>
                    
                    </td>
                </tr>

            </table>
        
        </div>
    
    `
}