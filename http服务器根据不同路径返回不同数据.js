var http = require ('http');
var server = http.createServer();
server.on('request',function(request,response){
  console.log('收到客户端请求,请求路径是：'+request.url);
  var url = request.url;
	var products=[
		{
			name:'苹果',
			price:100
		},
		{
			name:'香蕉',
			price:200
		}
	]
	if(url === '/'){
       response.end('index')
}else if(url === '/product'){

response.end(JSON.stringify(products))

}else{

response.end('404 Not Found')

}
console.log('请求我的客户端的地址和端口号:',request.socket.remoteAddress,request.socket.remotePort);
});
server.listen(80,function(){

console.log('服务器启动成功了，可以通过http://127.0.0.1/来进行访问')
});
