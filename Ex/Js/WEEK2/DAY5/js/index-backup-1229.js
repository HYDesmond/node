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
        oList = utils.toArray(oList);
        oList.sort(function (a, b) {
            //=>按照点击的不同列来实现排序（需要知道当前点击的是第几列）
            //->通过索引计算出按照哪一列进行进行排序
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

            //->按照不同的排序标识获取对应的自定义属性值,然后进行升降序排序
            var cur = a.getAttribute(attr),
                next = b.getAttribute(attr);
            if (index === 0) {
                //->获取的日期值需要特殊的处理
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
