// 使用.catch()捕获错误

console.log('here we go');

new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
    .then(() => {
        console.log('start');
        throw new Error('test error');
    })
    .catch(err => {
        //返回一个promise实例
        console.log('I catch: ', err);

        // 下面这一行注释将引发不同的走向
        // ↓↓ 这种情况下，将不会返回promise实例，即：之后的两个then不会执行。
        // throw new Error('another error');
    })
    .then(() => {
        console.log('arrive here');
    })
    .then(() => {
        console.log('... and here');
    })
    .catch(err => {
        console.log('No, I catch: ', err);
    });

/*
强烈建议：
	在所有队列最后都加上.catch()，一面漏掉错误处理造成意想不到的问题。
*/