// console.log(box.children.length);
/*兼容性：box.children 在IE6~8中浏览器会把注释节点当做元素节点处理*/

//=>children:不管在什么浏览器中都可以获取到当前元素的所有元素子节点(不包含注释)
// function children(curEle) {
//     var childList = curEle.children;
//     childList = utils.toArray(childList);
//     for (var i = 0; i < childList.length; i++) {
//         var item = childList[i];
//         if (item.nodeType !== 1) {
//             childList.splice(i, 1);
//             i--;
//         }
//     }
//     return childList;
// }
// console.log(children(box).length);

// function children(curEle) {
//     var result = [],
//         childList = curEle.childNodes;
//     for (var i = 0; i < childList.length; i++) {
//         var item = childList[i];
//         item.nodeType === 1 ? result.push(item) : null;
//     }
//     return result;
// }
// console.log(children(box).length);

//=>我们可以获取指定元素中的所有“元素子节点”，并且我们还可以指定标签名，例如：我指定标签名是'span'，我们把所有叫做span的元素子节点获取即可
// function children(curEle, tagName) {
//     var result = [],
//         childList = curEle.childNodes;
//     for (var i = 0; i < childList.length; i++) {
//         var item = childList[i];
//         item.nodeType === 1 ? result.push(item) : null;
//     }
//     //=>在获取的所有元素子节点中进行二次过滤
//     if (typeof tagName !== 'undefined') {
//         for (var k = 0; k < result.length; k++) {
//             if (result[k].tagName.toLowerCase() !== tagName.toLowerCase()) {
//                 result.splice(k, 1);
//                 k--;
//             }
//         }
//     }
//     return result;
// }

function children(curEle, tagName) {
    var result = [],
        childList = curEle.childNodes;
    for (var i = 0; i < childList.length; i++) {
        var item = childList[i];
        if (item.nodeType === 1) {
            if (typeof tagName !== 'undefined') {
                if (item.tagName.toLowerCase() === tagName.toLowerCase()) {
                    result.push(item);
                }
                continue;
            }
            result.push(item);
        }
    }
    return result;
}
console.log(children(box, 'span').length);