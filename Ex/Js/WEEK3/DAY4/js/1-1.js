/*
 * JS盒子模型中的13个属性
 *  [client]
 *    clientWidth & clientHeight：可视区域的宽高
 *    clientLeft & clientTop：盒子左边框和上边框的大小(border-width)
 *
 *  [offset]
 *    offsetWidth & offsetHeight：在clientWidth/clientHeight基础上加上边框的大小即可
 *    offsetParent：当前盒子的父级参照物
 *    offsetTop & offsetLeft：当前盒子距离其父级参照物的偏移（左偏移和上偏移）
 *
 *  [scroll]
 *    scrollWidth & scrollHeight：没有内容溢出的情况下和clientWidth/clientHeight相同，但是有内容溢出的情况下，它代表真实的宽高(包含溢出内容)+左PADDING或者上PADDING的值（这个值是个约等于的值，每个浏览器获取的结果不尽相同，是否设置overflow:hidden隐藏溢出内容对最后的结果也有影响）
 *   scrollTop & scrollLeft：竖向或者横向滚动条卷去的宽度或者高度
 */

/*
 * 操作浏览器的盒子模型属性
 */
//=>获取一屏幕的宽度或者高度(写两套是为了兼容所有的浏览器)
// document.documentElement.clientWidth || document.body.clientWidth
// document.documentElement.clientHeight || document.body.clientHeight

//=>获取整个HTML页面真实的高度(约等于的值)
// document.documentElement.scrollHeight||document.body.scrollHeight

/*
 * 重要事宜：
 *   通过JS盒子模型的12个属性（不含offsetParent）获取的结果
 *   1、不带单位都是纯数字值
 *   2、获取的结构都是整数，如果出现小数，浏览器会自动的四舍五入
 *
 *   通过JS盒子模型属性获取的值都是“复合值”，如果我只想获取具体的某一个样式值（例如：想获取左padding），这些属性是搞不定的
 */