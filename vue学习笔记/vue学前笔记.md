## 什么是forEach 、for in、 for of？
	先看看具体例子，代码如下
```
	var arr = [1, 2, 3, 4];
	arr.forEach(function(item) { //没有return
		console.log(typeof(item));
	})
	arr.b = 'ok';
	for (key in arr) { //返回的string对象
		console.log(typeof(key))
	}
	var obj ={
		school: 'gdou',
		age: 8
	}
	for (let val of Object.keys(obj)) { //支持return 并且是值of数组（不能遍历对象）
		console.log(obj[val])
	}
```
	如上，
	1、forEach没有return
	2、for in能返回arr的属性，且返回的是string类型的
	3、for of不能遍历对象，如果需要遍历对象，通过Object.keys,且需要返回obj的方法，即obj[val]

## filter
	filter 正如其名，就是过滤的，一如既往，来个例子：

```
let newArr = [1, 2, 3, 4, 5].filter(function (item) {
	retrun item >= 2 && item <= 5;
});
consolo.log(newArr);
```
	简单说说，上面的例子，我们主要是想获取数组里大于等于2且小于等于5的数，只有true才通过过滤，也就是我们所期望的值
	需要注意的是，这里的写法，不能写为2<=item<=5。简单解释下，如果写为2<=item<=5，代码先进行（2<=item）这样返回是一个布尔值，那么布尔值是不会大于1的，所以接下来（2<=item) <=5肯定返回true。

## map 映射 将原有的数组映射成一个新数组
	同样，我们通过例子走一遍 
```
let arr = [1, 2, 3].map(function (item) {
	return `<li>${item}</li>` //  ``是es6模板字符串，用${}获取值
})
cosole.log(arr)
```


## some every includes find

```
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(5));
let result = arr.find(function (item, index) {
	return item.toString().indexOf(5) > -1;
})
let result2 = arr.some(function (item, index) {
	return item.toString().indexOf(5) > -1;
})
let result3 = arr.every(function (item, index) {
	return item.toString().indexOf(5) > -1;
})
```
	上面的例子中，都是查找是否含有‘5’
	通过上面的例子，可以发现都是有‘查找’的功能，特点如下：
	1、includes，返回boolean，即找到返回true，没有找到返回false
	2、find，当找到的值，停止循环，并将值返回
	3、some，找true，找到true后停止 返回true 找不到返回false
	4、every，找false，找到false后停止，返回false


## reduce 返回的是叠加后的结果  原数组不发生变化， 回调函数返回的结果
```
[1, 2, 3, 4, 5].reduce(function (prev, next, index, item) {
	console.log(prev, next, index, item);
})
```
	ok，看看结果返回的结果

```
1 2 1 [1, 2, 3, 4, 5]
undefined 3 2 [1, 2, 3, 4, 5]
undefined 4 3 [1, 2, 3, 4, 5]
undefined 5 4 [1, 2, 3, 4, 5]
```
	从结果来看，是输出了四次，那么这四次都代表了什么呢？
	先看第一次输出结果，分别为1 2 1 [1, 2, 3, 4, 5]。对应我们的形参（prev，next，index，item）。
	第一次，prev为1，next为2，index为1， item为[1, 2, 3, 4, 5]
	不难看出，next其实是执行了1次，指向数组第二项，index为next的下标，item为数组
	所以第二次，next执行两次，指向数组第二项，index为next的下标，item为数组
。。。
	但是为什么prev第一次有值，以后都没有值了呢？再看看下面的例子
```
	[1, 2, 3, 4, 5].reduce(function(prev, next, index, item) {
		console.log(prev, next);
		return 100;
	})
```
	输出结果如下：
```
1 2 1 [1, 2, 3, 4, 5]
100 3 2 [1, 2, 3, 4, 5]
100 4 3 [1, 2, 3, 4, 5]
100 5 4 [1, 2, 3, 4, 5]
```
	通过例子，可以看出，prev除了第一次执行，都为我们return的100，也就是说返回值作为了下一次的prev。通过这一特性可以进行累加，具体如下：
```
	let sum = [1, 2, 3, 4, 5].reduce(function (prev, next, index, item) {
		console.log(prev, next);
		return prev + next;
	})
	console.log(sum)
```
	下面继续加深对reduce的应用，如果我要对一个复杂的对象进行操作呢？
	来个实例
```
	let sum2 = [{price:30, count:2},{price:30, count:3},{price:30, count:4}].reduce(function (prev, next) {
		console.log(prev, next);
		return prev.price * prev.count + next.price * next.count;
	})
```
	上面的例子，感觉上是不存在问题的，现在再回来看看return的将作为下一次的prev,第一次结果是30*2 + 30*3 = 150；话不多说，看看结果
```
{price：30，count: 2} {prcie: 30, count: 3}
150 {price: 30, count: 4}
```
	嗯哼，倪端暴露出来了。既然prev变成了150，那也就没有price跟count的属性了，那就无法继续执行了。
	一种比较好的写法如下：
```
let sum =  [{price:30, count:2},{price:30, count:3},{price:30, count:4}].reduce(function (prev, next) {
		console.log(prev, next);
		return prev + next.price * next.count;
	}, 0)//默认指定第一次的prev为0
```
这样就没有什么问题了。接下来，将reduce应用到二维数组转为一维数组

[[1,2,3],[4,5,6],[7,8,9]].reduce(function(prev, next) {
	return prev.concat(next);
})

## 箭头函数
