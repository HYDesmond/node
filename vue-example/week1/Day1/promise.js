/*let a = '';
function buy(callback) {
    setTimeout(() = > {
        let a = '蘑菇';
    callback(a);
},2000)
}
buy(function cookie(val) {
    console.log(val);
})*/
//回调函数 将后续处理逻辑传入当前要做的事，事情做好好调用此函数

//promise 解决回调问题， promise三个状态
//成功态 失败态 等待

//console.log(Promise);
//resolve 代表转向成功态
//reject 代表转向失败态   resolve and reject 均是函数

/*let p = new Promise((resolve, reject)=> {
        //console.log(1)
       	setTimeout(function(){
       		let a = '蘑菇';
       		resolve(a);
       	}, 2000)
})

// promise的实例就是一个then方法，then方法中有两个参数
p.then((data)=>{console.log(data)}, ()=>{})*/
/*let a = '';
function buy(callback) {
	setTimeout(()=>{
		a = '蘑菇';
		callback(a);
	} ,2000)
}
buy(function cookie(val) {
	console.log(val);
	console.log('next')
});//异步首先想到回调函数*/

//Promise解决回调问题的

let p = new Promise((resolve, reject)=>{
	setTimeout(function(){
		let a = 'a12';
		resolve(a);
	},2000)
})
p.then((data)=>{console.log(data)},()=>{})