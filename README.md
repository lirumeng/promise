#### IE...
如果需要在IT中使用Promise，有两个选择：
- 只想实现异步队列：jQuery.deferred
- 需要兼容所有平台：Bluebird 或 Promise polyfill

#### Fetch API
很多现代浏览器都提供这个API，是XMLHttpRequest的现代化替换方案
- 更强大，也更有好
- 直接返回一个Promise实例

#### async/await
ES2017新增运算符，新的语言元素，仍需要Promise
- 赋予JavaScript以顺序手法编写异步脚本的能力
- 既保留异步运算的无阻塞特性，还继续使用同步写法
- 还能正常使用 return/try/catch
