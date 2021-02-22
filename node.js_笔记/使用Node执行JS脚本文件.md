**使用Node执行JS脚本文件 2020/08/12**

1.创建编写Javascript脚本文件

2.打开终端，定位到脚本文件所属目录

3.输入node文件名执行对应的文件

(node xxx.js)

注意:文件名不要使用node.js和中文



**在Node中如果想要进行文件操作，就必须引用核心模块fs  fs中提供了所有文件操作相关的API**

fs即file-system

例如fs.readFile就是来读取文件的



1.使用require方法加载fs核心模块

var fs =require('fs')

2.读取文件 第一个参数是读取的文件路径 第二个参数是一个回调函数 

error

​       读取失败 ，error就是错误对象

​       读取成功，error就是null

data

​       读取失败 ，data就是null

​       读取成功，data就是读取到的数据

fs.readFile('./hello.txt',function(error,data){

​       console.log(data)

})

<Buffer 43 4c 4e 20> 

文件中存储的是二进制数据 0 1 看到的不是0和1 是因为二进制转为16进制 但是可以通过toString读取

将输出变成console.log(data.toString())

完整代码：

```javascript
var foo = 'bar';
console.log(foo);

var fs =require('fs');
fs.readFile('Hello.txt',function(error,data){
  //console.log(data) 会变16进制
  console.log(data.toString());
})
```

