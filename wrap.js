/*
	把回调包装成Promise
	好处：
		可读性更好
		返回的结果可以加入任何Promise队列
*/

const fs = require('./FileSystem');

fs.readFile('./README.md', 'utf-8')
    .then(content => {
        console.log(content);
    })