"use strict";
//一、获取数据,然后动态展示在页面中
~function () {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'json/product.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = xhr.responseText;
            window.result = utils.toJSON(result);
        }
    };
    xhr.send(null);

    var listBox = document.getElementById('list');
    var str = ``;
    for (var i = 0; i < result.length; i++) {
        var item = result[i];
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
    var headerBox = document.getElementById('header'),
        linkList = headerBox.getElementsByTagName('a');

    linkList[1].myMethod = -1;
    linkList[1].onclick = function () {
        //=>this:点击的这个A标签 =>linkList[1]
        this.myMethod *= -1;//=>可以让每一次点击的时候,当前A标签存储的自定义属性从1~-1之间来回切换
        //changePosition.call(linkList[1]);
        changePosition.call(this);
    };

    function changePosition() {
        //=>this:linkList[1]
        var _this = this;
        oList = utils.toArray(oList);
        oList.sort(function (a, b) {
            //=>this:window
            var curPrice = a.getAttribute('data-price'),
                nextPrice = b.getAttribute('data-price');
            return (curPrice - nextPrice) * _this.myMethod;
        });

        var frg = document.createDocumentFragment();
        for (var i = 0; i < oList.length; i++) {
            frg.appendChild(oList[i]);
        }
        listBox.appendChild(frg);
        frg = null;
    }
}();
