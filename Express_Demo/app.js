var express = require('express')
var app = express()

//当以/public/开头的时候，去./public/目录中,查找对应的资源 这种方式更容易辨识
// app.use('/public/',express.static('./public/'))

//当省略第一个参数使，则可以通过省略/pulic的方式来访问
//这种方式可以省略/public/ 搜索的时候为127.0.0.1:3000/login.html
app.use(express.static('./public/'))

//必须是/a/public目录中的资源 即搜索的时候应该为127.0.0.1:3000/a/login.html
//相当于给public取了个别名a
// app.use('/a/',express.static('./public/'))

app.get('/',function(req,res){
	res.send('hello world')
})

app.listen(3000,function(){
	console.log('app is running at port 3000')
})