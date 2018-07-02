//=>JS惰性思想：懒惰性的思想，能一次解决的，绝对不会每一次都重新的处理，属于JS性能优化的一种
var utils = (function () {
    var flag = 'getComputedStyle' in window;//=>再给UTILS赋值的时候,我们验证了window中是否存在getComputedStyle这属性,如果存在,说明当前的浏览器是标准浏览器,反之说明是IE6~8

    function getCss(curEle, attr) {
        var value = null;
        if (flag) {
            value = window.getComputedStyle(curEle, null)[attr];
        } else {

        }
    }

    return {
        getCss: getCss
    }
})();

// var utils = {
//     getCss: function (curEle, attr) {
//         var value = null;
//         if (window.getComputedStyle) {
//             value = window.getComputedStyle(curEle, null)[attr];
//         } else {
//             value = curEle.currentStyle[attr];
//         }
//         return value;
//     }
// };
console.log(utils.getCss(box, 'margin'));
console.log(utils.getCss(box, 'padding'));
//...