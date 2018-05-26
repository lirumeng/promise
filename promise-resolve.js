/*
	Promise.resolve()
	返回一个fulfilled的Promise实例，或原始Promise实例。

	参数为空，返回一个状态为fulfilled的Promise实例
	参数是一个跟Promise无关的值，同上，不过fulfilled响应函数会得到这个参数
	蚕食为Promise实例，则返回该实例，不做任何修改
	参数为thenable，立刻执行它的.then()
*/

console.log('start');

Promise.resolve()
    .then(value => {
        console.log('Step 1', value);
        return Promise.resolve('Hello');
    })
    .then(value => {
        console.log(value, ' World');
        return Promise.resolve(new Promise(resolve => {
            setTimeout(() => {
                resolve('Good');
            }, 2000);
        }));
    })
    .then(value => {
        console.log(value, ' evening');
        return Promise.resolve({
            then() {
                console.log(', evening');
            }
        });
    });