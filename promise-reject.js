/*
	Promise.reject()
	返回一个rejected的Promise实例。

	参数为空，返回一个状态为fulfilled的Promise实例
	参数是一个跟Promise无关的值，同上，不过fulfilled响应函数会得到这个参数
	蚕食为Promise实例，则返回该实例，不做任何修改
	
	不认thenable

	常见用法：
		把异步操作和定时器放在一起
		如果定时器先触发，就认为超时，告知用户
*/

let promise = Promise.reject('something wrong');

promise
    .then(() => {
        console.log('it\'s ok');
    })
    .catch(() => {
        console.log('no, it\'s not ok');

        return Promise.reject({
            then() {
                console.log('it will be ok');
            },
            catch () {
                console.log('not yet');
            }
        })
    })