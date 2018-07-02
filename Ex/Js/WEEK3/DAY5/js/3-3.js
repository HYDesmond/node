function getEleByClass(strClass, context) {
    context = context || document;
    var nodeList = context.getElementsByTagName('*');
    strClass = strClass.replace(/^ +| +$/g, '').split(/ +/);

    //=>排除法：先拿第一个样式类在所有的标签中比较,把没有当前样式类的都干掉,和第一个比较完成后,再和第二个传递进来的样式类比较,没有的接着干掉...
    nodeList = utils.toArray(nodeList);
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
}