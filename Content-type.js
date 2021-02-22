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