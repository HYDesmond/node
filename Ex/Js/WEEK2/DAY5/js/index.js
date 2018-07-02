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

    for (var i = 0; i < linkList.length; i++) {
        linkList[i].myMethod = -1;
        linkList[i].myIndex = i;
        linkList[i].onclick = function () {
            this.myMethod *= -1;
            changePosition.call(this);
        };
    }

    function changePosition() {
        var _this = this;
        //=>点击当前A,我们需要把其它A的myMethod回归初始值,这样保证下一次在点击其它的A标签还是从升序开始的
        for (var k = 0; k < linkList.length; k++) {
            if (k !== _this.myIndex) {
                //=>不是当前点击的A
                linkList[k].myMethod = -1;
            }
        }

        oList = utils.toArray(oList);
        oList.sort(function (a, b) {
            var index = _this.myIndex,
                attr = '';
            switch (index) {
                case 0:
                    attr = 'data-time';
                    break;
                case 1:
                    attr = 'data-price';
                    break;
                case 2:
                    attr = 'data-hot';
                    break;
            }
            var cur = a.getAttribute(attr),
                next = b.getAttribute(attr);
            if (index === 0) {
                cur = cur.replace(/-/g, '');
                next = next.replace(/-/g, '');
            }
            return (cur - next) * _this.myMethod;
        });

        var frg = document.createDocumentFragment();
        for (var i = 0; i < oList.length; i++) {
            frg.appendChild(oList[i]);
        }
        listBox.appendChild(frg);
        frg = null;
    }
}();
