const GroupComponent = {
    props: ['title'],
        
    data: () => ({
        showContent: false,
    }),

    computed: {
        
    },

    methods: {

    },

    watch: {

    },    

    template: `
        <div class="group-foldable">

            <div class="group-title-foldable" @click="showContent = !showContent">Bonuses</div> 

            <div v-if="!!showContent">
                <slot></slot>
            </div>

        </div>
    
    `,
}