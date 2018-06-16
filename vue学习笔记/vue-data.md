## `data`与绑定的关系

```
<body>
	<div id="app">
		{{a.school}}
	</div>
	<script scr="./node_modules/vue/dist/vue.js"></script>
	<script>
	var vm = new Vue({
		el: '#app',
		data: {
			a: {school: ''}
		}
	})

	</script>
</body>
```

* 以上面代码为例子，因为我们通过小胡子语法绑定了`{{a.school}}`。所以我们得在`data`里边的`a`，初始化`school`为`''`。这不是唯一的方法，但是**最常用**。
* 说明一下原因(个人见解)，之前有提到，`vue`是跟`Object.defineProperty`有着千丝万缕的关系（即`get()`,`set()`),那么看看我们后台调用`vm.a`的结果。

```
{__ob__: Observer} //这是a: {school: ''}的返回结果
school:(...)
__ob__:Observer {value: {…}, dep: Dep, vmCount: 0}
get school:ƒ reactiveGetter()
set school:ƒ reactiveSetter(newVal)
__proto__:Object
```
```
{__ob__: Observer} //这是a: {}的返回结果
__ob__:Observer {value: {…}, dep: Dep, vmCount: 0}
__proto__:Object
```

- ok，假如不用这种方法，我们可以以下方法进行设置，具体以代码进行讲解

```
<body>
	<div id="app">
		{{a.school}}
	</div>
	<script scr="./node_modules/vue/dist/vue.js"></script>
	<script>
	var vm = new Vue({
		el: '#app',
		data: {
			a: {}
		}
	})
	//此方法可以给对象添加响应式数据
	vm.$set(vm.a, 'school', 1);//vm.$set(给谁加， 加的属性名， 加的属性值)
	</script>
</body>
```
* 上面即从`set()`入手。


- 但是对于多数据操作就不太方便，所以，再来说说另外一种方法（替换原对象）。同样以代码进行讲解。

```
<body>
	<div id="app">
		{{a.school}}
	</div>
	<script scr="./node_modules/vue/dist/vue.js"></script>
	<script>
	var vm = new Vue({
		el: '#app',
		data: {
			a: {}
		}
	})
	//替换原对象
	vm.a = {school: 'Desmond', age: 12, address: 'aaa'}
	</script>
</body>

```
## 刚刚的例子都是对象，下面说说数组

```
<div id="app1">
		{{arr}}
</div>
<script>
var vm1 = new Vue({
	el: '#app1',
	data: {
		arr: [1, 2, 3, 4, 5]
	}
})
//去该表数组中的某一项是监控不到的，也不能改变数组长度的方法。
//错误：vm.arr[0] = 100; vm.arr.length -= 2;
//变异方法： pop shift unshift sort reverse 
//vm1.arr.reverse();//->[5, 4, 3, 2, 1]
//加深对map的使用，之前说过map是映射，不改变原数组
vm1.arr = vm1.arr.map(function(item) {
	return item *= 3;//解释一下这里为什么要让vm1.arr = vm1.arr.map 
})
</script>
```

* 具体的操作跟写法都在里边了。不过多赘述。
** 问题与总结 **
1、 真的懂了？
2、 map、filter还是记得不够深刻
3、 对数组的方法有点遗忘。
4、 ok,我们再自己来回顾一遍


