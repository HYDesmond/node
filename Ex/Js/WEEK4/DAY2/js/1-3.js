// for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, (5 - i) * 10);
// }
//=>[主任务队列]
// i=1 创建一个定时器
// i=2 创建一个定时器
// i=3 创建一个定时器
// i=4 创建一个定时器
// i=5 创建一个定时器
// i=6 循环结束，此时主任务队列中的方法都已经执行完成了，到等待任务队列中找先到时间的方法，拿到主任务队列中执行
// 执行它 function () {console.log(i);}，i不是自己私有的，找全局下的i(此时的i已经是6了)

//=>[等待任务队列]
// 40MS后执行某方法
// 30MS后执行某方法
// 20MS后执行某方法
// 10MS后执行某方法
// 0MS后执行某方法

// for (var i = 0; i <oList.length; i++) {
//     oList[i].onclick=function () {
//         alert(i);
//     }
// }

// for (var i = 1; i <= 5; i++) {
//     ~function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, (5 - i) * 10);
//     }(i);
// }