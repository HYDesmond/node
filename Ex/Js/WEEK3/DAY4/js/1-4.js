function getCss(curEle, attr) {
    var value = null,
        reg = null;
    if ('getComputedStyle' in window) {
        value = window.getComputedStyle(curEle, null)[attr];
    } else {
        //=>IE6~8下处理透明度不是使用opacity获取，而应该使用filter获取
        if (attr === 'opacity') {
            value = curEle.currentStyle['filter'];
            //=>我们还需要保证所有浏览器获取的结果格式统一
            //使用OPACITY获取的结果是：0.5
            //使用FILTER获取的结果是：'alpha(opacity=50)'
            reg = /^alpha\(opacity=(.+)\)$/i;
            value = reg.test(value) ? reg.exec(value)[1] / 100 : 1;
        } else {
            value = curEle.currentStyle[attr];
        }
    }
    reg = /^-?\d+(\.\d+)?(px|pt|rem|em)?$/i;
    reg.test(value) ? value = parseFloat(value) : null;
    return value;
}
console.log(getCss(box, 'opacity'));