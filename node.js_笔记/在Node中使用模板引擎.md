# 在Node中使用模板引擎

1.art-template不仅可以在浏览器使用，也可以在node中使用

**安装** npm install art-template 该命令在哪执行就会把包下载到哪里，默认会下载到node_modules目录中 node_modules不要改，也不支持改

### 2.在浏览器中使用art-template

模板引擎不关系字符串内容 只关心自己能认识的模板标记语法，例如{{}}

{{}}语法被称为mustache语法 八字胡语法

```html

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>在浏览器中使用art-template</title>
</head>
<body>
<!--	注意在浏览器中需要引用lib/template-web.js文件-->
	<script src="node_modules/art-template/lib/template-web.js"></script>
	<script type='text/template' id='tpl'>
	今天是{{ date }}
	我在{{ location }}
	我想{{ each wishes }} {{ $value }} {{/each}}
	</script>
    <!--template('script便签id'，{对象})-->
	<script>var ret = template('tpl',{
			date:'0914',
			location:'2实',
			wishes:[
				'上厕所',
				'喝饮料',
				'睡觉'
			]
			
		})
	console.log(ret)
	</script>
</body>
</html>
```

### 3.在Node中使用art-template

模板引擎最早诞生于服务器领域，后来才发展到了前端

- 安装 npm install art-template
- 在需要使用的文件模块中加载art-template
  - 只需要使用require方法就可以 var template = require('art-template')
  - 参数中的art-template就是你下载的包的名字
  - 你install的包的名字是什么，则你require中是什么
- 查文档，使用模板引擎的API

var template = require('art-template')

template.render('模板字符串',替换对象)

```javascript
var template = require('art-template')
var ret = template.render('hello{{name}}',{
						  name:'Jack'
						  })
console.log(ret)
```

或

```javascript
var template = require('art-template')
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
```

