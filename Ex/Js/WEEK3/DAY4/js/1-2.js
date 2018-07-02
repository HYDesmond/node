/*
 * 获取元素的CSS样式
 */
//=>1、通过 curEle.style.xxx 获取当前元素“行内样式”值
//==>只要当前样式没有写在元素行内样式上，那么通过这种方式就获取不到了
// console.log(box.style.paddingLeft);//=>空字符串:虽然我们设置了PADDING，但是没有写在行内样式上，所有通过这种方式获取不到
// console.log(box.style.color);//=>'darkslategray'

//=>2、获取当前元素所有经过浏览器计算的样式
//1)只要当前元素可以在页面中呈现,那么它的样式否是经过浏览器计算的
//2)不管你写在样式表中还是行内,我们应该都可以获取到
//3)不管你是否编写,有很多样式是有默认样式值的,这些默认样式我们也可以获取到

//=>window.getComputedStyle([元素], [元素的伪类(例如:after/before,一般我们写null)])：获取的结果是一个对象，包含当前元素所有的样式属性和属性值
// console.log(window.getComputedStyle(box, null).paddingLeft);

//=>此方法在IE6~8低版本浏览器中不兼容：IE低版本浏览器的window全局对象中并没有getComputedStyle这个属性和方法，IE低版本浏览器提供了一个备选方案：使用 curEle.currentStyle 来操作也可以
// console.log(window.getComputedStyle);//=>IE低版本:undefined
// console.log(box.currentStyle.paddingLeft); //=>'40px'


/*
 * getCss：获取当前元素某一个样式属性的值
 * @parameter
 *   curEle：当前要操作的元素
 *   attr：当前要获取的元素样式属性
 * @return
 *   获取的样式属性值
 */
// function getCss(curEle, attr) {
//     var value = null;
//     try {
//         value = window.getComputedStyle(curEle, null)[attr];
//     } catch (e) {
//         value = curEle.currentStyle[attr];
//     }
//     return value;
// }

function getCss(curEle, attr) {
    var value = null;
    if ('getComputedStyle' in window) {
        value = window.getComputedStyle(curEle, null)[attr];
    } else {
        value = curEle.currentStyle[attr];
    }
    return value;
}
console.log(getCss(box, 'paddingLeft'));

