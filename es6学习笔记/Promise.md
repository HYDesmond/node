## Promise
* 因为学习vue用到axios,而axios跟Promise的关系，让我觉得很有必要从promise深入了解下

- es6(阮一峰)
* Promise是异步编程的一种解决方案
- 特点
1、对象的状态不受外界影响。包含三种状态
	1）、pending(进行中)
	2）、fulfilled（已成功）
	3）、rejected（已失败）
	** 只能异步决定当前状态 **
2、一旦改变状态，就不会再变，任何时候可以得到这个结果。
	1）、pending -> fulfilled
	2) 、pending -> rejected
	** 只能发生上述之一，并且不可改变 **

```
const promise = new Promise(function(resolve, reject) {
	if(/*异步操作成功*/) {
		resolve(value);
	} else {
		reject(error);
	}
})
```
* resolve函数的作用是，将Promise对象的状态从‘未成功’变为‘成功’（即从pending -> fulfilled），在异步操作成功时调用；reject函数的作用是，将Promise对象的状态从‘未完成’变为‘失败’（即从pending -> rejected），在异步调用失败时调用

* Promise实例生成之后，可以用then方法分别指定resolve状态和rejected状态的回调函数。

```
promise.then(function(value) {
	//success
	//
}, function(err) {
	//failure
})
```
then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolve时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中第二个函数是可选的，不一定要提供

- ** 以上就是最最最基本的Promise了 **
