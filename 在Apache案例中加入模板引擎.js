var  http = require('http')
var fs = require('fs')
var template = require('art-template')
var server = http.createServer()
var wwwDir = 'D:/demo/www'
server.on('request',function(req,res){
	var url = req.url
	fs.readFile('./template-apache.html',function(err,data){
		if(err){
			return res.end('404')
		}
		fs.readdir(wwwDir,function(err,files){
			if(err){
				return res.end('cannot find www catalog')
			}
//这里只需要使用模板引擎解析替换data中的模板字符串就可以了 
//数据就是files 
//然后去你的template.html文件中编写你的模板语法就好了
	var htmlStr = template.render(data.toString(),{
		title : '替换',
		files : files
		
	})
		
//			3.发送解析替换过后的响应数据
		res.end(htmlStr)
		})
	})
})
server.listen(3000,function(){
  console.log('server is running')
})