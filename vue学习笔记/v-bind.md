## `v-bind`: 或者 :
- 官方解释
* `v-bind` 是操作元素的 `class` 列表和内联样式数据绑定的

```
<div v-bind:class="{ active: isActive }"></div>
```

* 上面实例是官方的例子，功能是动态地切换 `class` 。上面的语法表示 `active` 这个 `class` 存在与否将取决于数据属性 `isActive` 的 `truthiness`

- 实际应用
* 实际开发前端是负责渲染页面，而数据往往是后台管理的。如一些图片的地址等内联样式也是调取后台数据，进行页面渲染

```
	<!-- 请求的路径是字符串，会报错 -->
	<img src="product.productCount" title="">
	<!-- 用取值表达式 报错并提示：用v-bind或:进行绑定-->
	<img src="{{product.productCount}}" title="">
	<!-- 正确写法 -->
	<img :src="product.productCount" alt="">
```
