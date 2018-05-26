/*
批量执行：
	Promise.all([p1,p2,p3,...])用于将多个Promise实例，包装秤一个新的Promise实例。
	返回一个新的普通的Promise实例

	它接受一个数组作为参数。
	数组里可以是Promise对象，也可以是别的值，只有Promise会等待状态改变。

	当所有的Promise都完成，该Promise完成，返回值是全部值的数组。
	有任何一个失败了，该Promise失败，返回值是第一个失败的字Promise的结果。
*/

console.log('here we go');

Promise.all([1, 2, 3])
    .then(all => {
        console.log('1: ', all);
        return Promise.all([function() {
            console.log('abc');
        }, 'cba', false]);
    })
    .then(all => {
        console.log('2: ', all);
        let p1 = new Promise(resolve => {
            setTimeout(() => {
                resolve('I \'m P1');
            }, 1500);
        });

        let p2 = new Promise(resolve => {
            setTimeout(() => {
                resolve('I \'m P2');
            }, 1450);
        });

        return Promise.all([p1, p2]);
    })
    .then(all => {
        console.log('3: ', all);
        let p1 = new Promise(resolve => {
            setTimeout(() => {
                resolve('I \'m P1');
            }, 1500);
        });

        let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('I \'m P2');
            }, 1000);
        });

        let p3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('I \'m P3');
            }, 3000);
        });

        return Promise.all([p1, p2, p3]);
    })
    .then(all => {
        console.log('all: ', all);
    })
    .catch(err => {
        console.log('Catch: ', err);
    });

/*

here we go
1:  [ 1, 2, 3 ]
2:  [ [Function], 'cba', false ]
3:  [ 'I \'m P1', 'I \'m P2' ]
Catch:  I 'm P2

*/