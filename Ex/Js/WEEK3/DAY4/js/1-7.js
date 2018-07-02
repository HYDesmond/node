function setCss(curEle, attr, value) {
    //=>如果传递的是OPACITY，我们需要兼容处理透明度
    if (attr === 'opacity') {
        curEle.style.opacity = value;
        curEle.style.filter = 'alpha(opacity=' + value * 100 + ')';
        return;
    }
    //=>我们也可以反思路验证：传递的是纯数字，大部分都需要加单位，但是某些特殊的样式属性是不需要加单位的
    //不需要加单位：zIndex、zoom、lineHeight...
    !isNaN(value) && !/^(zIndex|zoom|lineHeight|fontWeight)$/i.test(value) ? value += 'px' : null;
    curEle['style'][attr] = value;
}

setCss(box, 'width', 300);
setCss(box, 'height', 300);
setCss(box, 'padding', 50);
setCss(box, 'opacity', 0.5);
setCss(box, 'backgroundColor', 'red');
