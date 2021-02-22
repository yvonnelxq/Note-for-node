# Content-type 2020/08/16

在服务器默认发送的数据，其实是utf-8编码的内容 

但是浏览器不知道你是utf-8编码的内容 因此会按照当前操作系统的编码去解析

中文操作系统默认是gbk

### 解决方法 正确地告诉浏览器我给你发送的内容是什么数据类型的 编码方式是utf-8  text/plain 是普通文本

```javascript
res.setHeader('Content-Type','text/plain;charset=utf-8');
```

浏览器中f12检查Network可以见到Response Headers处Content-Type写着text/plain;charset=utf-8

**如果你发送的是html格式的文本 也要告诉浏览器我发送的是html的文本**



## 完整代码

```javascript
var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
	var url = req.url;
	if(url === '/plain'){
		res.setHeader('Content-Type','text/plain;charset=utf-8');
	res.end('Hello World 你好世界');
	}else if(url === '/html'){
		res.setHeader('Content-Type','text/html;charset=utf-8');
		res.end('<p><a href="#">hello html</a></p>')
	}
//	在node眼中是字符串 在浏览器眼中是p标签
});
server.listen(3000,function(){
	console.log('server is running')
})
```

