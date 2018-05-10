Component({
    properties: {
        size: {
            type: String,
            value: 'md'
        },
        stepper: {
            type: Number,
            value: 1
        },
        min: {
            type: Number,
            value: 1
        },
        max: {
            type: Number,
            value: Infinity
        },
        step: {
            type: Number,
            value: 1
        }
    },

    methods: {
        stepperChange(e, type) {
            const {
                dataset = {}
            } = e.currentTarget;
            const {disabled} = dataset;
            const {step} = this.data;
            let {stepper} = this.data;

            if (disabled) 
                return null;
            
            if (type === 'minus') {
                stepper -= step;
            } else if (type === 'plus') {
                stepper += step;
            }

            this.triggerEvent('change', stepper);
            this.triggerEvent(type);
        },

        stepperMinus(e) {
            this.stepperChange(e, 'minus');
        },

        stepperPlus(e) {
            this.stepperChange(e, 'plus');
        },

        stepperBlur(e) {
            let {value} = e.detail;
            const {min, max} = this.data;

            if (!value) {
                setTimeout(() => {
                    this.triggerEvent('change', min);
                }, 16);
                return;
            }

            value = + value;
            if (value > max) {
                value = max;
            } else if (value < min) {
                value = min;
            }

            this.triggerEvent('change', value);
        }
    }
});
