let confirm = popupManager.confirm('您确定吗？');

confirm.promise
    .then(() => {
        // do confirm staff
    })
    .catch(() => {
        // do cancel staff
    })

// 窗体的构造函数
class Confirm {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.confirmButton.onclick = resolve;
            this.cancelButton.onclick = reject;
        });
    }
}