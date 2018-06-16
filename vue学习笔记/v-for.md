## v-for

- v-for 是解决循环问题的

* 要循环谁就在谁身上增加v-for属性 ** 建议用for in **

* 语法：

```
<元素 v-for="(item, index) in items">{{item.属性}</元素>}
```
* 注意上面的{{item.属性}}
1、对应(item, index)的item，即如果改为(a, index)，则写{{a.属性}}。
2、data中建议设置有 items的属性值。

同样以代码进行讲解。

```
<div id="app">
		<!-- 要循环谁就在谁身上增加v-for属性 -->
		<ul><!-- 这里的fruit.name 在data设置了 -->
			<li v-for="(fruit, index) in fruits">{{index + 1}}、{{fruit.name}}
				<ul>
					<li v-for="(c, childIndex) in fruit.color">
						{{index + 1}}.{{childIndex + 1}}、{{c}}
					</li><!--涉及作用域链，这里的v-for是(c, childIndex),但是我们绑定了{{index + 1}}，这里没有，所以往上寻找-->
				</ul>
			</li>
		</ul>
	</div>
	<script src="./node_modules/vue/dist/vue.js"></script>
	<script>
	var vm = new Vue({
		el: '#app',
		data: {
			fruits: [
				{
					name: '香蕉',
					color: ['green', 'yellow']
				},
				{
					name: '苹果',
					color: ['red', 'green', 'yellow']
				},
				{
					name: '西瓜',
					color: ['pink']
				}
			]
		}
	})
	</script>
```

* 思考
1、如果是购物车（用table，v-for是放在什么地方的呢？）

- 思考及验证后
* table的v-for放在什么位置
- 当要的效果是横向排列，如下
```
苹果	苹果	苹果	苹果
1999	1999	1999	1999
```
```
<div id="app">
		<table>
			<tbody>
				<tr >
					<td v-for="item in obj">{{item.name}}</td>
				</tr>
				<tr>
					<td v-for="item in obj">{{item.prices}}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<script src="./node_modules/vue/dist/vue.js"></script>
	<script>
	var vm = new Vue({
		el: '#app',
		data: {
			obj: [
				{
					name: '苹果',
					prices: 1999
				},{
					name: '苹果',
					prices: 1999
				},{
					name: '苹果',
					prices: 1999
				},{
					name: '苹果',
					prices: 1999
				}
			]
		}
	})

	</script>

```
* 如果是换成如下效果
```
苹果	1999
苹果	1999
苹果	1999
苹果	1999
```
* 代码修改如下：

```
<table>
	<tbody>
		<tr v-for="item in obj">
			<td>{{item.name}}</td>
			<td >{{item.prices}}</td>
		</tr>
	</tbody>
</table>
```
