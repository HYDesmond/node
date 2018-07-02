function setCss(curEle, attr, value) {
    if (attr === 'opacity') {
        curEle.style.opacity = value;
        curEle.style.filter = 'alpha(opacity=' + value * 100 + ')';
        return;
    }
    !isNaN(value) && !/^(zIndex|zoom|lineHeight|fontWeight)$/i.test(value) ? value += 'px' : null;
    curEle['style'][attr] = value;
}

//=>批量给当前元素设置CSS样式
function setGroupCss(curEle, options) {
    if (Object.prototype.toString.call(options) !== '[object Object]') return;
    for (var attr in options) {
        if (options.hasOwnProperty(attr)) {
            setCss(curEle, attr, options[attr]);
        }
    }
}

setGroupCss(box, {
    width: 300,
    height: 300,
    padding: 50,
    opacity: 0.5,
    backgroundColor: 'orange'
});