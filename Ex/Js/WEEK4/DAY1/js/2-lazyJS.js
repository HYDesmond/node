function getCss(curEle, attr) {
    if (window.getComputedStyle) {
        getCss = function (curEle, attr) {
            return window.getComputedStyle(curEle, null)[attr];
        }
    } else {
        getCss = function (curEle, attr) {
            return curEle.currentStyle[attr];
        }
    }
    return getCss(curEle, attr);//=>此处执行的GET-CSS是其中的某一个小方法了,把得到的结果返回
}
//=>getCss：最外层大方法
//=>第一次执行GET-CSS
//[标准]
// getCss = function (curEle, attr) {
//     return window.getComputedStyle(curEle, null)[attr];
// }
//[IE6~8]
// getCss = function (curEle, attr) {
//     return curEle.currentStyle[attr];
// }
console.log(getCss(box, 'padding'));