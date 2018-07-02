/*
 * JS中的定时器一共有两种：
 *   1、window.setTimeout([function],[interval])：设置一个定时器,当到达指定时间后执行对应的方法(执行一次定时器就结束了)
 *
 *   2、window.setInterval([function],[interval])：设置一个定时器,当到达指定时间后执行对应的方法(以后每间隔这么长时间都要从新的执行定时器中的方法,直到定时器清除为止,执行很多次)
 */

// var count = 0;
// setTimeout(function () {
//     console.log(++count);//=>1
// }, 1000);//=>1000MS=1S

// var count = 0;
// setInterval(function () {
//     console.log(++count);
// }, 1000);

/*
 * 定时器的返回值:当我们设置定时器(不管是setTimeout还是setInterval),都会有一个返回值,返回值是一个数字,代表当前是在浏览器中设置的第几个定时器(返回的是定时器序号)
 *   1、setTimeout和setInterval虽然是处理不同需求的定时器,但是都是浏览器的定时器,所以设置的时候,返回的序号是依次排列的
 *
 *   2、setInterval设置完成定时器会有一个返回值，不管执行多少次，这个代表序号的返回值不变（设置定时器就有返回值，执行多少次是定时器的处理）
 */
// var timer1 = setTimeout(function () {
//
// }, 1000);
// console.log(timer1);//=>1

// var timer2 = setInterval(function () {
//
// }, 1000);
// console.log(timer2);//=>2

/*
 * 定时器的清除
 *   clearTimeout([定时器的排队序号])
 *   clearInterval([定时器的排队序号])
 *
 *   定时器需要手动清除
 */
var t1 = setTimeout(function () {

    //=>当方法执行完成后,定时器没用了,我们清除定时器即可
    // clearTimeout(t1);//=>t1存储的就是当前定时器的编号
    // clearInterval(t1);//=>使用它也可以清除掉

    clearTimeout(t1);//=>在浏览器内部把定时器清除掉了(相当于银行业务员在系统中清除我们的排队号)
    t1 = null;//=>我们手动把之前存储序号的变量赋值为null(相当于我们把排队号那个纸条撕毁扔掉)
}, 1000);