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