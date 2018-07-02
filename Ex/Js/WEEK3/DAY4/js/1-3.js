//=>去除获取结果的单位：部分值可以去除单位
function getCss(curEle, attr) {
    var value = null,
        reg = null;
    if ('getComputedStyle' in window) {
        value = window.getComputedStyle(curEle, null)[attr];
    } else {
        value = curEle.currentStyle[attr];
    }
    //=>去除单位
    reg = /^-?\d+(\.\d+)?(px|pt|rem|em)?$/i;
    reg.test(value) ? value = parseFloat(value) : null;
    return value;
}
console.log(getCss(box, 'display'));