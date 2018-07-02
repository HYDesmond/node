/*
 * window.onscroll：浏览器滚动条的滚动事件(只要滚动条滚动了就会触发这个事件)
 * 1、鼠标滚轮控制 或者 手动拖动滚动条
 * 2、键盘按键控制
 * 3、使用JS代码控制
 * ...
 * 不管什么方式,只要滚动条动了就会触发这个事件
 */
~function () {
    var link = document.getElementById('link');
    window.onscroll = function () {
        //=>获取当前卷去的高度和一屏幕高度
        var curTop = utils.winBox('scrollTop'),
            curHeight = utils.winBox('clientHeight');

        //=>已经卷去的高度>=一屏幕的高度的时候,展示回到顶部按钮,否则隐藏按钮即可
        utils.css(link, 'display', curTop >= curHeight ? 'block' : 'none');
    };
    link.onclick = function () {
        utils.winBox('scrollTop', 0);
    };
}();

