console.log('here we go');

new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('bye');
        }, 2000);
    })
    .then(value => {
        console.log(value + ' world');
    }, value => {
        console.log('Error: ', value);
    });


/* 错误处理的两种做法：
* reject('错误信息').then(null, message => {}) （error-reject.js）
* throw new Error('错误信息').catch(message => {}) （error.js）
推荐使用第二种，更加清晰好读，并且可以铺货前面的错误（包括.then中的错误）。
*/