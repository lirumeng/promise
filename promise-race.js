/*
类似Promise.all()，区别在于它有任意一个完成就算完成。
*/
console.log('start');

let p1 = new Promise(resolve => {
    setTimeout(() => {
        resolve('I\'m P1');
    }, 10000);
});

let p2 = new Promise(resolve => {
    setTimeout(() => {
        resolve('I\'m P2');
    }, 2000);
});

Promise.race([p1, p2])
    .then(value => {
        console.log(value);
    })