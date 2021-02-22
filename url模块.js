var url = require('url')
var Obj = url.parse('/pinglun?name=测试名字&message=测试内容',true)
let query = Obj.query; 
let str = JSON.stringify(query);
str = JSON.parse(str);
console.log(str)
