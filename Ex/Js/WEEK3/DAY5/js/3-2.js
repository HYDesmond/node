function getEleByClass(strClass, context) {
    context = context || document;
    var result = [],
        nodeList = context.getElementsByTagName('*');

    //=>不仅要去除首尾空格,还要把传递的多样式类名拆分成一个数组(数组中包含传递的每一个样式类名)
    strClass = strClass.replace(/^\s+|\s+$/g, '').split(/ +/);

    for (var i = 0; i < nodeList.length; i++) {
        var item = nodeList[i],
            itemClass = item.className,
            flag = true;//=>假设你传递的样式类名在ITEM中都存在

        //=>验证假设的值是真还是假：循环传递的所有样式类名,拿每一个传递的样式类名和当前标签的CLASS-NAME比较,只要有一个不在标签中,我们假设的值就是错误的
        for (var k = 0; k < strClass.length; k++) {
            var reg = new RegExp('(^| +)' + strClass[k] + '( +|$)');
            if (!reg.test(itemClass)) {
                flag = false;
                break;
            }
        }

        //=>如果FLAG为TRUE就存储
        flag ? result.push(item) : null;
    }
    return result;
}