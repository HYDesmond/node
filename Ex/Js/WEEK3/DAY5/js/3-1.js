/*
 * [context].getElementsByClassName([className])
 *   在指定的上下文中,通过样式类名获取一组元素集合,IE6~8下不兼容
 */
// console.log(document.getElementsByClassName('   box1   '));
// console.log(document.getElementsByClassName('box2  box1'));//=>如果传递多个样式类名：同时具备这些样式类的元素(多个样式类之间加几个空格都无所谓,而且不计较编写的顺序)

//=>只处理传递一个样式类名的(但是首尾可能会加很多的空格)
//strClass：传递进来的样式类名，例如：'box1'
//context：限定获取的范围(上下文),不传递默认赋值为document

//=>思路：获取指定上下文中所有的标签,然后遍历这些标签,把所有CLASS中,包含传递进来的样式类的元素,都保存起来即可
function getEleByClass(strClass, context) {
    context = context || document;
    var result = [],
        nodeList = context.getElementsByTagName('*');
    //=>去除传递进来样式类的首尾空格
    strClass = strClass.replace(/^\s+|\s+$/g, '');

    for (var i = 0; i < nodeList.length; i++) {
        var item = nodeList[i];
        //=>当前项的CLASS：item.className
        //=>传递进来的样式类：strClass
        //=>我们接下来要验证item.className字符串中是否包含传递进来的strClass样式类
        var reg = new RegExp('(^| +)' + strClass + '( +|$)')
        if (reg.test(item.className)) {
            result.push(item);
        }
    }
    return result;
}

//验证 "box1 box2 box3"（item.className） 是否包含 "box2"（strClass）
/*
 * indexOf：虽然可以验证字符串是否包含某个字符，但是无法判断是否是包含这个样式类
 *   "box100 box2 box3".indexOf('box1') =>0
 *   但是当前样式类中并没有box1这个样式类
 */

//=> /box2/ =>只要包含box2这个字符就可以(和indexOf类似了)
//=> /\bbox2\b/ =>这个说明它是完整的单词  遇到这种字符串就不可以了'box1 box2-2 box3'  在正则中\b不仅是单词的边界,而且它会把中杠两边也作为边界  'box2-2'和/\bbox2\b/是匹配的,但是当前元素样式类是box2-2而不是box2
//=>/(^| +)box2( +|$)/  中间是box2完单词,左右两边是空格或者开始结束
// var reg = new RegExp('(^| +)' + strClass + '( +|$)');


function getEleByClass(strClass, context) {
    context = context || document;
    var result = [],
        nodeList = context.getElementsByTagName('*');
    strClass = strClass.replace(/^\s+|\s+$/g, '');

    for (var i = 0; i < nodeList.length; i++) {
        var item = nodeList[i];
        // 'box1 box2 box3' => ['box1','box2','box3']
        var ary = item.className.split(/ +/),
            flag = false;
        for (var j = 0; j < ary.length; j++) {
            if (strClass === ary[j]) {
                flag = true;
                break;
            }
        }
        flag ? result.push(item) : null;
    }
    return result;
}
