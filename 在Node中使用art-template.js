// 在Node中使用art-template
var template = require('art-template')
//var ret = template.render('hello{{name}}',{
//						  name:'Jack'
//						  })
//console.log(ret)
var tplStr = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<p>今天是{{date}}</p>
    <h1>{{message}}<h1>
</body>
</html>
`
var ret = template.render(tplStr,{
date:'000',
message:'怎么出不来'
})

console.log(ret)