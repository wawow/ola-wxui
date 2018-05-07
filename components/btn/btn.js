Component({
    options: {
        multipleSlots: true
    },
    relations: {
        '../btn-group/btn-group': {
            type: 'parent',
            linked() {},
            unlinked() {}
        }
    },
    properties: {
        classStyle: {
            type: String
        },
        type: {
            type: String
        },
        inverse: {
            type: Boolean,
            value: false
        },
        size: {
            type: String
        },
        loading: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        isLast: {
            type: Boolean,
            value: false
        },
        fit: {
            type: Boolean,
            value: false
        }
    },
    data: {
        isLast: false
    },
    methods: {
        changeButtonStatus(isLast = false) {
            this.setData({isLast});
        }
    }
})
