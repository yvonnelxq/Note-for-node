//默认得到的是对象
//使用对象中的成员必须:点某个成员来访问
//有时候对于一个模块，我仅仅是希望导出一个方法就可以

var fooExports = require('./foo')

//ReferenceError: foo is not defined
//console.log(foo)
console.log(fooExports)