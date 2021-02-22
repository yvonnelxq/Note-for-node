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