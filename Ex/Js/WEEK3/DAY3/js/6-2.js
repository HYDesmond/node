/*
 * 已知：给元素设置透明度，需要写两套（兼容IE6~8）
 *   opacity:n
 *   filter:alpha(opacity=n*100)
 *
 * 在JS中如果我们想获取元素的透明度，我们一般都会这样执行方法
 *   var result = getCss(box,'opacity')
 *
 * 这些写会存在一些问题：
 *   1、标准浏览器下可以获取到值，但是IE6~8下获取不到结果（IE6~8识别filter不识别opacity）  =>需要处理：在IE6~8下，如果我们传递的是opacity（用户想获取的是透明度），我们应该用filter获取
 *
 *   2、通过filter获取的结果是 'alpha(opacity=xxx)'，通过opacity获取的直接是xxx值  =>解决：我们应该把通过FILTER获取的结果中的具体值捕获到，然后除以100，让其返回的值和OPACITY一样
 *
 *   正则捕获
 *     /\d+/ ：不行，因为获取的值可能是小数
 *
 *    /\d+(\.\d+)?/：ok
 *
 *     /^alpha\(opacity=(.+)\)$/：捕获第一个小分组内容
 *
 *     ...
 */


function getCss(curEle, attr) {
    var value = null;
    //=>获取样式值
    if ('getComputedStyle' in window) {
        value = window.getComputedStyle(curEle, null)[attr];
    } else {
        //=>IE6~8下处理透明度
        if (attr === 'opacity') {
            value = curEle.currentStyle['filter'];
            //=>把获取的结果转换为和OPACITY一样的结果 filter:alpha(opacity=20)
            var reg = /^alpha\(opacity=(.+)\)$/;
            reg.test(value) ? value = reg.exec(value)[1] / 100 : value = 1;
        } else {
            value = curEle.currentStyle[attr];
        }
    }
    //=>去除获取值的单位
    var temp = parseFloat(value);
    !isNaN(temp) ? value = temp : null;
    return value;
}