//=>设置元素的样式
// curEle.style.xxx=xxx 设置当前元素的行内样式值（JS中设置的样式一般都要设置在行内样式上：行内上的样式优先级最大）
// curEle.className=xxx 设置元素的样式类名  (addClass)

function setCss(curEle, attr, value) {

    //=>如果传递的VALUE值没有单位,我们根据需求自动补充单位(PX)
    //1、并不是所有的样式属性传递进来的值都要补充单位
    //需要补充单位的常用样式属性：width、height、margin、padding、marginLeft...、paddingLeft...、top、left、right、bottom、borderWidth...
    //2、传递的值已经存在单位,我们不需要再补充,没有单位我们再补充
    // var reg = /^(width|height|margin|padding|marginLeft|marginRight|marginTop|marginBottom|paddingLeft|paddingRight|paddingTop|paddingBottom|top|left|bottom|right|borderWidth)$/i;
    var reg = /^(width|height|((margin|padding)?(top|left|right|bottom)?)|borderWidth)$/i;
    if (reg.test(attr)) {
        if (!isNaN(value)) {
            //=>传递的是纯数字,我们需要加单位
            value += 'px';
        }
    }
    curEle['style'][attr] = value;
}
setCss(box, 'paddingLeft', '20');