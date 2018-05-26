// 改造于 maxfile.js

const fs = require('fs');
const path = require('path');
const FileSystem = require('./FileSystem');


function findLargest(dir) {
    return FileSystem.readDir(dir, 'utf-8')
        .then(files => {
            return Promise.all(files.map(file => {
                return new Promise(resolve => {
                    fs.stat(path.join(dir, file), (err, stat) => {
                        if (err) throw err;
                        if (stat.isDirectory) {
                            return resolve({
                                size: 0
                            });
                        }
                        stat.file = file;
                        resolve(stat);
                    });
                });
            }));
        })
        .then(stats => {
            let biggest = stats.reduce((memo, stat) => {
                if (memo.size < stat.size) {
                    return stat;
                }
                return memo;
            });
            return biggest.file;
        });
}

findLargest('../', function(err, filename) {
    if (err) return console.error(err);
    console.log('largest file was:' + filename);
});

//[1]：因为异步回调函数，会在新的栈里运行，所以，在此栈里没有办法获取之前栈的信息，此栈也没有办法捕获之前栈抛出的错误。
// [2]：闭包变量

// 回调有四个问题：1. 嵌套层次深，难以维护；2. 无法正常使用return和throw；3. 无法正常检索堆栈信息；4. 多个回调之间难以建立联系。