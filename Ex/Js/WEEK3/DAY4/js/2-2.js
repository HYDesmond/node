//=>获取页面中任何一个元素距离BODY的左偏移和上偏移（它的父级参照物是谁不一定）
/*
 * 思路：
 * 1、首先获取自己的偏移量 以及自己的父级参照物
 * 2、如果自己的父级参照物不是BODY，我们加上父级参照物的边框和偏移量 ... 一直加到某一次找到的父级参照物是BODY为止
 */

/*
 * 标准IE8浏览器不需要加边框（偏移量已经包含父级参照物的边框了）
 *   navigator.userAgent：获取浏览器的版本信息
 *
 *   /MSIE 8/i.test(navigator.userAgent)
 */
// console.log(navigator.userAgent);

var obj = utils.offset(inner),
    t = obj.top,
    l = obj.left;
console.log(t, l);








