Page({
    data: {
        stepper1: {
            stepper: 1,
            min: 1,
            max: 20
        },
        stepper2: {
            stepper: 10,
            min: 1,
            max: 20
        },
        stepper3: {
            stepper: 10,
            min: 1,
            max: 20,
            step: 2
        }
    },
    stepperChange({
        detail: stepper,
        target: {
            dataset: {
                componentId
            }
        }
    }) {
        this.setData({
            [`${componentId}.stepper`]: stepper
        });
    }
});
