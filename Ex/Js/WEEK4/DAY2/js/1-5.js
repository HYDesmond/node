// var page1 = (function () {
//     return {
//         init: function () {
//
//         }
//     }
// })();
// page1.init();
//
// var page2 = (function () {
//     return {
//         init: function () {
//
//         }
//     }
// })();
// setTimeout(page2.init, 0);

// setTimeout(function () {
//     console.log('ok');
// }, 0);//=>定时器等待时间设置为0也不是立马执行,浏览器都有一个最小的反应时间(谷歌:5~7MS IE:10~13MS ...),写0也需要等到几毫秒
// console.log('no');

// setTimeout(function () {
//     console.log(1);
// }, 100);
// while (1 == 1) {
//
// }

setTimeout(function () {
    console.log(1);
}, 1000);

setTimeout(function () {
    console.log(2);
    while (1 == 1) {

    }
}, 500);

setTimeout(function () {
    console.log(3);
}, 100);

for (var i = 0; i < 1000000000; i++) {

}
console.log(4);

