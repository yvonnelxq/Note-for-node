//在node中，每个模块内部都有一个自己的module对象
//在module对象中，有一个成员叫exports也是一个对象
//也就是说如果你需要对外导出成员，只需要把导出的成员挂载到module.exports中

//我们发现每次导出接口成员的时候都通过module.exports.xxx=xxx的方式很麻烦，点儿太多了，node为了简化你的操作，就专门提供了一个变量:
//exports等于module.exports
//var module={
//	exports:{
//		
//	}
//}
//也就是说在模块中还有这么一句代码 var exports = module.exports
//module.exports.foo = 'bar'
console.log(exports === module.exports)
//两者一致，说明我可以使用任意一方导出成员

//当一个模块需要导出单个成员的时候 直接给exports赋值是不管用的
//给exports赋值是会断开和module.exports的引用，同理给module.exports重复赋值也会断开



//谁来require我，谁就得到module.exports
//默认在代码的最后有一句:
//一定要记住return的是module.exports而非exports 重新赋值不管用
//return module.exports