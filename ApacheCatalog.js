var  http = require('http')
var fs = require('fs')

var server = http.createServer()
var wwwDir = 'D:/demo/www'

server.on('request',function(req,res){
	var url = req.url
	fs.readFile('./template.html',function(err,data){
		if(err){
			return res.end('404')
		}
		fs.readdir(wwwDir,function(err,files){
			if(err){
				return res.end('cannot find www catalog')
			}
//			2.1生成需要的的内容
			var content = ''
			files.forEach(function(item){
				content +=`
				<tr><td data-value="apple/"><a class="icon dir" href="/D:/demo/www/apple/">${item}/</a></td><td class="detailsColumn" data-value="0"></td><td class="detailsColumn" data-value="1597815177">2020/8/19 下午1:32:57</td></tr>
				`
					})
//			2.3替换
				data = data.toString()
//		普通的字符串替换
		data = data.replace('^_*',content)
		console.log(data)
//			3.发送解析替换过后的响应数据
		res.end(data)
		
		})
		
	})
})
server.listen(3000,function(){
  console.log('server is running')
})