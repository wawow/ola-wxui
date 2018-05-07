Component({
    relations: {
        '../btn/btn': {
            type: 'child',
            linked() {
                updateBtnChild.call(this);
            },
            linkChange() {
                updateBtnChild.call(this);
            },
            unlinked() {
                updateBtnChild.call(this);
            }
        }
    }
});

function updateBtnChild() {
    let btns = this.getRelationNodes('../btn/btn')
    if (btns.length > 0) {
        let lastIndex = btns.length - 1;
        btns.forEach((btn, index) => {
            btn.changeButtonStatus(index === lastIndex);
        });
    }
}
