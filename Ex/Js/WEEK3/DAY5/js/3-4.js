// function getEleByClass(strClass, context) {
//     context = context || document;
//     if ('getElementsByClassName' in document) {
//         return utils.toArray(context.getElementsByClassName(strClass));
//     }
//     var result = [],
//         nodeList = context.getElementsByTagName('*');
//     strClass = strClass.replace(/^\s+|\s+$/g, '').split(/ +/);
//     for (var i = 0; i < nodeList.length; i++) {
//         var item = nodeList[i],
//             itemClass = item.className,
//             flag = true;
//         for (var k = 0; k < strClass.length; k++) {
//             var reg = new RegExp('(^| +)' + strClass[k] + '( +|$)');
//             if (!reg.test(itemClass)) {
//                 flag = false;
//                 break;
//             }
//         }
//         flag ? result.push(item) : null;
//     }
//     return result;
// }

Node.prototype.queryElementsByClassName = function queryElementsByClassName() {
    if (arguments.length === 0) return [];
    var strClass = arguments[0],
        nodeList = utils.toArray(this.getElementsByTagName('*'));
    strClass = strClass.replace(/^ +| +$/g, '').split(/ +/);
    for (var i = 0; i < strClass.length; i++) {
        var reg = new RegExp('(^| +)' + strClass[i] + '( +|$)');
        for (var k = 0; k < nodeList.length; k++) {
            if (!reg.test(nodeList[k].className)) {
                nodeList.splice(k, 1);
                k--;
            }
        }
    }
    return nodeList;
};