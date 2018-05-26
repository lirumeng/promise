console.log('start');

let promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('the promise fulfilled');
        resolve('hello world');
    }, 2000);
});
setTimeout(() => {
    promise.then(value => {
        console.log(value);
    });

    promise.then(value => {
        console.log(value);
    });
}, 3000);