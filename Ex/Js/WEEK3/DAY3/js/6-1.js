//=>去除获取结果的单位：真实项目中我们一般都会把获取的样式值进行后续的计算，不带单位方法计算
function getCss(curEle, attr) {
    var value = null;
    if ('getComputedStyle' in window) {
        value = window.getComputedStyle(curEle, null)[attr];
    } else {
        value = curEle.currentStyle[attr];
    }
    //=>首先把我们获取的结果转换为数字，然后看是否为NaN，不是NaN说明可以去除单位，我们把转换的结果返回，如果是NaN，说明当前获取的结果并不是数字+单位的，此时我们把之前获取的值返回即可
    var temp = parseFloat(value);
    !isNaN(temp) ? value = temp : null;
    return value;
}