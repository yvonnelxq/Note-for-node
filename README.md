# **Node.js是什么  2020/08/12**

Web后台服务器

1.Java  2.PHP  3.Python  4.Ruby (github用这个写的) 5..Net (微软)

6.Node.js(采用JavaScript进行编程)



## **A.不是语言也不是框架  是一个JavaScript运行时的环境/平台** 

Node.js可以解析和执行JavaScript代码 以前只有浏览器可以 现在的JavaScript可以脱离浏览器运行 归功于Node.js 



**浏览器中的Javascript三部分组成**

EcmaScript 基本的语法——变量 方法 数据类型内置对象 Array Object Date Math...... 

BOM

DOM

没有文件操作的能力



## **B.Node.js中的JavaScript**  (此js非浏览器中的js)

### EcmaScript

没有BOM和DOM 服务器不处理 （会显示Reference Error 引用错误）

### 核心模块

在Node这个Javascript执行环境中为JavaScript提供一些服务器级别的操作API，这些API绝大多数包装到了一个具名的核心模块中——fs核心模块（文件读写） 、网络服务的构建 网络通信 http服务器 、path路径操作模块、 OS(operation system)操作系统信息模块...

#### 如果想使用核心模块，就必须require

```javascript
var xxx = require('xxx');
var fs =require('fs')等
```

具有文件操作的能力





## **C.使用事件驱动、非阻塞I/O模型（异步操作）、轻量高效**



## **D.包生态系统、npm包管理工具**

npm是世界上最大的开源库生态系统

绝大多数的JavaScript相关的包都放在了npm上

