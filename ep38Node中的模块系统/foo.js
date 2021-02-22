var foo = 'bar'
function add(x,y){
	return x + y
}
//只能得到我想给你的成员 为了解决文件命名冲突的问题
//exports.add = add

//exports是一个对象，我们可以通过多次为这个对象添加成员实现
//exports.str = 'hello'

//需求：加载得到的就直接是一个：
//方法
//字符串
//数字
//数组

module.exports = add

module.exports = function add(x,y){
	return x + y
}

//你可以认为在每个模块的最后return了这个exports
//如果一个模块需要直接导出某个成员，而非挂载的方式
//那这个时候必须使用module.exports

module.exports = {
	add:function(){
		return x + y
	},
	str:'hello'	
}