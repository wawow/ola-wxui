Component({
    properties: {
        type: {
            type: String,
            value: 'horizon'
        },

        showDesc: {
            type: Boolean,
            value: false
        },

        steps: { // 必须
            type: Array,
            value: []
        }
    }
});
