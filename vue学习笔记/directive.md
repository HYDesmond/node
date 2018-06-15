## vue 的指令 
* vue的指令，directive，只是dom上的行间属性，vue给这类属性赋予一定的意义，来实现特殊的功能 所有指令都是以v-开头，value属性默认情况下回被vue忽略掉selected checked 都没有意义

- v-model
* 可以实现数据双向绑定
## 浅谈Object.defineProperty 模拟v-model

```
let obj = {};
let temp = {};
Object.defineProperty(obj, 'name', {
	get(){ // 取值触发
		return temp["name"];
	},
	set(val){// 赋值触发get方法
		temp["name"] = val;
		input.value = val;
	}
})
input.value = obj.name;//页面已加载是，会调用get方法
input.addEventListener('input', function() {// 等待输入框的变化
	obj.name = this.value;
})
```

- v-text
* 相当于小胡子语法，即{{}}
```
	<div id="app">
		<input type="text" v-model="msg">
		<!-- v-text === {{}}放置大括号出现在页面上 -->
		<div v-text="msg"></div>
	</div>
	<script src="./node_modules/vue/dist/vue.js"></script>
	<script>
	var vm = new Vue({
		el: '#app',
		data: {
			msg: 'hello'
		}
	})
	</script>
```

- v-once
* 只绑定一次，当数据再次发生变化也不会导致页面刷新
* 语法：<div v-once>{{msg}} {{msg}}</div>//绑定右边没有=

- v-html
* 把html字符当做HTML渲染
```
<div id="app">
		<div v-html='p'>{{p}}</div>
	</div>
	<script src="./node_modules/vue/dist/vue.js"></script>
	<script>
	var vm = new Vue({
		el: '#app',
		data: {
			msg: 'hello',
			p: '<p>nonono</p>'
		}
	})
	</script>

```