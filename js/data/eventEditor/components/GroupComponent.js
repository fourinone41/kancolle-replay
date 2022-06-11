const GroupComponent = {
    props: ['title', 'showContentByDefault'],
        
    data: () => ({
        showContent: false,
        defaultRead: false,
    }),

    computed: {
        getShowContent() {
            if (!this.defaultRead) {
                this.showContent = this.showContentByDefault;
                this.defaultRead = true;
            }

            return this.showContent;
        }
    },

    methods: {

    },

    watch: {

    },    

    template: `
        <div class="group-foldable">

            <div class="group-title-foldable" @click="showContent = !showContent">{{title}}</div> 

            <div v-if="!!getShowContent">
                <slot></slot>
            </div>

        </div>
    
    `,
}