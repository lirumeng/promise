const fs = require('fs');
const path = require('path');

function findLargest(dir, callback) {
    fs.readdir(dir, function(err, files) {
        if (err) return callback(err); //[1]

        let count = files.length; //[2]
        let errored = false;
        let stats = [];

        files.forEach(file => {
            fs.stat(path.join(dir, file), (err, stat) => {
                if (errored) return; //[1]
                if (err) {
                    errored = true;
                    return callback(err);
                }

                stats.push(stat); //[2]

                if (--count === 0) {
                    let largest = stats
                        .filter(function(stat) { return stat.isFile(); })
                        .reduce(function(prev, next) {
                            if (prev.size > next.size) return prev;
                        });
                    callback(null, files[stats.indexOf(largest)]);
                }
            })
        })
    });
}

findLargest('../', function(err, filename) {
    if (err) return console.error(err);
    console.log('largest file was:' + filename);
});

//[1]：因为异步回调函数，会在新的栈里运行，所以，在此栈里没有办法获取之前栈的信息，此栈也没有办法捕获之前栈抛出的错误。
// [2]：闭包变量

// 回调有四个问题：1. 嵌套层次深，难以维护；2. 无法正常使用return和throw；3. 无法正常检索堆栈信息；4. 多个回调之间难以建立联系。