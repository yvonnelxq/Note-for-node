# **构建Web服务器** 2020/08/14

在Node中提供了一个核心模块:http 创建编写服务器

## **1.加载http核心模块**

var http = require ('http')

## **2.使用http.createServer()方法创建一个Web服务器**

var server = http.createServer()

## **3.发请求 接收请求 处理请求 发送响应** 

注册request请求事件  

当客户端请求过来，就会触发服务器的request请求事件，然后执行第二个参数 回调处理函数



### **request请求事件处理函数，需要接收两个参数：**

### **//Request   请求对象** 可以用来获取客户端的一些信息，例如请求路径

  在浏览器输入http://127.0.0.1:3000/ 得出请求路径为/

  在浏览器输入http://127.0.0.1:3000/a得出请求路径为/a

### //Response 响应对象 可以用来给客户端发送响应消息

response对象有一个方法：write可以用来给客户端发送响应数据，可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待

server.on('request',function(request,response){

console.log('收到客户端请求,请求路径是：'+request.url);

response.write('hello');

//告诉客户端我已经说完了

response.end();

})

### 当请求不同的路径响应不同的结果

/得index

/login得登录页

/register得注册

#### 用if语句判断url中是否含有特定字符



## **4.绑定端口号，启动服务器** 

server.listen(3000,function(){

console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/来进行访问')

})



#### 改完代码服务器得重开

在cmd上Ctrl+C即可跳回到文件位置 再按↑后加回车即可重新打开服务器



## **完整代码**

var http = require ('http');
var server = http.createServer();
server.on('request',function(request,response){

console.log('收到客户端请求,请求路径是：'+request.url);
response.write('hhahha');
response.end()
});
server.listen(3000,function(){

console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/来进行访问')
})

