//如果是非路径形式的模块标识
//路径形式的模块：
//           ① ./当前目录不可省略  ② ../上一级目录也不可省略   ③/xxx几乎不用  ④d:/a/fco.js几乎不用
//首位的/在这里表示当前文件模块所属磁盘根路径
// .js后缀名可以省略
//require('./foo.js')


//核心模块的本质也是文件
//核心模块的文件已经被编译到二进制文件中，我们只需要按照名字来加载就可以了

//第三方模块
//凡是第三方模块都必须通过npm来加载
//的的时候就可以通过require('包名')的方式来进行加载才可以使用
//不可能有一个第三方包和核心模块的名字是一样的
//既不是核心模块也不是路径形式的模块
//先找到当前文件的所属目录中的node_nodules目录
// node_modules/art-template/package.json文件
// node_modules/art-template/package.json文件中的main属性
//main属性中就记录了art-template的入口模块
//然后加载使用这个第三方包 实际上最终加载的还是文件


//注意：我们一个项目有且只有一个node_modules,放在项目的根目录中，这样项目中所有的子目录的的代码都可以加载到第三方包
//不会出现有多个node_modules

//模块查找机制 优先从缓存加载 再核心模块 再路径形式的文件 

//再第三方模块
//node_modules/art-template
//node_modules/art-template/package.json
//node_modules/art-template/package.json的main属性
//index.js备选项
//进入上一级目录找node moudules
//按照这个规则依次往上找 直到当前磁盘根目录还找不到，最后报错 cannot find module xxx


var template = require('art-template')