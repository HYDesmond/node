function getCss(curEle, attr) {
    var value = null,
        reg = null;
    if ('getComputedStyle' in window) {
        value = window.getComputedStyle(curEle, null)[attr];
    } else {
        if (attr === 'opacity') {
            value = curEle.currentStyle['filter'];
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
getCss(box, 'padding');