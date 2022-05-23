const EventEditorComponent = {
    props: ['eventData'],

    data: () => ({
        difficultiesItemSource: [
            { key: 4, display: "Casual" },
            { key: 1, display: "Easy" },
            { key: 2, display: "Medium" },
            { key: 3, display: "Hard" },
        ]
    }),
        
    methods: {
        
    },

    template: document.getElementById('event-editor')
}