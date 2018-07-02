"use strict";
//一、获取数据,然后动态展示在页面中
~function () {
    //->获取数据
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'json/product.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = xhr.responseText;
            window.result = utils.toJSON(result);
        }
    };
    xhr.send(null);

    //->数据绑定:ES6中的模板字符串(原理:传统的字符串拼接)
    var listBox = document.getElementById('list');
    var str = ``;
    for (var i = 0; i < result.length; i++) {
        var item = result[i];
        /*在数据绑定的时候,我们把价格、热度、上架时间等信息存储在当前LI的自定义属性上（设置自定义属性的名字最好是data-xxx），后续的某些操作中如果需要用到这些值，直接的从自定义属性中获取即可*/
        str += `<li data-price="${item.price}" data-hot="${item.hot}" data-time="${item.time}">
        <a href="javascript:;">
            <img src="${item.img}" alt="">
            <p>${item.title}</p>
            <span>￥${item.price}</span>
        </a></li>`;
    }
    listBox.innerHTML = str;
}();

//二、实现按照价格升序排序
~function () {
    var listBox = document.getElementById('list'),
        oList = listBox.getElementsByTagName('li');
    oList = utils.toArray(oList);
    oList.sort(function (a, b) {
        //=>a:当前这个LI
        //=>b:下一个LI
        var curPrice = a.getAttribute('data-price'),
            nextPrice = b.getAttribute('data-price');
        return curPrice - nextPrice;
    });
    var frg = document.createDocumentFragment();//=>创建一个文档碎片（文档碎片：一个临时存储DOM元素的容器）
    for (var i = 0; i < oList.length; i++) {
        //listBox.appendChild(oList[i]);//=>由于DOM的映射机制，我们在JS中把某一个LI元素对象(和页面中的LI标签一一映射)增加的容器的末尾，相当于把页面中的映射的标签挪到容器的末尾，所以不是新增而是位置的改变
        frg.appendChild(oList[i]);//=>每一次循环把每一个LI先追加到文档碎片中
    }
    listBox.appendChild(frg);//=>循环完成后,把当前文档碎片中的内容统一一次性添加到页面中(只触发一次DOM回流)
    frg = null;
}();
