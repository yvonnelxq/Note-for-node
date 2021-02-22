#### Apache服务器软件默认有一个www目录，所有存放在www目录中的资源都可以通过网址浏览 2020/08/19

- www文件夹
  - a.txt
  - index.html
  - apple文件夹
    - login.html

127.0.0.1:80/a.txt

127.0.0.1:80/index.html

127.0.0.1:80/apple/login.html

##### 除了Content-Type可以用来指定编码，也可以在HTML页面中通过meta元数据来声明当前文本的编码格式，浏览器也会识别它



### 复杂代码

```javascript
var  http = require('http')
var fs = require('fs')
//1.创建server
var server = http.createServer()
var wwwDir = 'D:/demo/www'
//2.监听server的request请求事件
//一个请求对应一个响应，如果在一个请求的过程中，已经结束响应了，则不能重复发送响应 没有请求就没有响应
server.on('request',function(req,res){
	var url = req.url
	if( url === '/'){
		fs.readFile(wwwDir+'/index.html',function(err,data){
			if(err){
				return res.end('404 Not Found') 
//				return有两个作用：1.方法返回值 2.不让代码继续往下执行
			}
				res.end(data)
			
		}) 
//		反斜杠表示转义 这里使用正斜杠
 	}else if(url === '/a.txt'){
		fs.readFile(wwwDir+'/a.txt',function(err,data){
			if(err){
				return res.end('404 Not Found') 
			}
			    res.setHeader('Content-Type','text/plain;charset=utf-8')
				res.end(data)
			
		}) 
	}else if(url === '/index.html'){
		fs.readFile(wwwDir+'/index.html',function(err,data){
			if(err){
				return res.end('404 Not Found') 
			}
				res.end(data)
		}) 
	}else if(url === '/apple/login.html'){
		fs.readFile(wwwDir+'/apple/login.html',function(err,data){
			if(err){
				return res.end('404 Not Found') 
			}
				res.end(data)
		}) 
	}
})
//3.绑定服务器端口号，启动服务
server.listen(3000,function(){
  console.log('server is running')
})
```

### 简化代码 令搜索路径等于文件路径

```javascript
var  http = require('http')
var fs = require('fs')

var server = http.createServer()
var wwwDir = 'D:/demo/www'

server.on('request',function(req,res){
	var url = req.url
	var filePath = '/index.html'
    if(url != '/'){
		filePath = url;
	}
	fs.readFile(wwwDir + filePath,function(err,data){
		if(err){
			return res.end('404 NOT FOUND')
		}
		
		res.end(data)
	})
})
//3.绑定服务器端口号，启动服务
server.listen(3000,function(){
  console.log('server is running')
})
```

