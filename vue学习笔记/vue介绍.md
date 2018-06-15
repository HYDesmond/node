## `vue`概述
- 框架和库（`jQuery` `zepto`）
- 框架： 框架是拥有完整的解决方案的，打个比方，框架就像是一个样品房，里边什么都有。
- 库： 和上边例子做对比，库就像是毛坯房。

### `vue` 是一个渐进式框架
- 渐进式，先说说‘渐进增强’的概念，在早期前端开发，如一个效果在ie6能实现，往上兼容的浏览器由于性能和支持特性的增强，让支持更多特性的浏览器实现更多的效果，但是都是基本能保证ie6的效果的。
- `vue` 全家桶 核心（`vuejs`） + `vue-router`(可实现单页应用) + `vuex`（状态管理） + `axios`（获取数据）
- 通过组合 完成一个完整的框架

### 渐进式的理解
* 声明式渲染
* 组件系统
* 客户端路由（`vue-router`)
* 大规模状态管理（`vuex`）
* 构建工具（`vue-cli`）

### MVC（`backbone`）
* model数据
* view 视图
*controller 控制器

### MVVM（`angular`，`vue`）
* model数据
* view 视图
* viewModel 控制器

**Vue不支持ie8及以下浏览器**
*Object.defineProperty => 不支持ie8及其以下

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Desmond</title>
	<script src="./node_modules/vue/dist/vue.js"></script>
</head>
<body>
	<!-- 小胡子语法{{}} /可以表达式 可以赋值 取值 三元/-->

	<div id="app">{{msg}}</div>
	
	<script>
	//Vue构造函数
	var vm = new Vue({ //vm == viewModel
		el: '#app',//告诉vue能管理那个部分，querySelector
		data: {//data 中的数据会被vm所代理
			msg: '嗯哼，不错不错'//可以通过vm.msg取到对应的内容
		}
	})
	</script>
</body>
</html>
```
