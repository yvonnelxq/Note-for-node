# 结合fs发送文件中的内容 2020/08/17

data默认是二进制数据，可以通过.toString转为我们能识别的字符串

res.end()支持两种数据类型，一种是二进制，一种是字符串

https://www.oschina.net/ 

### 不同的资源对应的Content-Type是不一样的

https://tool.oschina.net/commons

 Content-Type对照表 ctrl+F 快捷键搜索网页关键字

### 图片不需要指定编码 因为我们常说的编码一般指的是：字符编码 

url:统一资源定位符 一个url最终还是要对应到一个资源的



## 完整代码

```javascript
var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request',function(req,res){
var url = req.url;
	if(url === '/'){
		fs.readFile('./resource/main.html',function(error,data){
			if(error){
				res.setHeader('Content-Type','text/plain;charset=utf-8');
				res.end('文件读取失败，请稍后重试');
			}else{
	            res.setHeader('Content-Type','text/html;charset=utf-8');
				res.end(data);
			}
		})
	}else if(url === '/mirumo'){
		fs.readFile('./resource/mirumo.jpg',function(error,data){
			if(error){
				res.setHeader('Content-Type','text/plain;charset=utf-8');
				res.end('图片读取失败，请稍后重试');
			}else{
	            res.setHeader('Content-Type','image/jpeg');
				res.end(data);
			}
	})		
	}
});
//改了html文件数据时不需要重启服务器 刷新浏览器就就可以
server.listen(3000,function(){
	console.log('server is running');
})
```

