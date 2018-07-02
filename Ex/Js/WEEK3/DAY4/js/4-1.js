var link = document.getElementById('link');
link.onclick = function () {
    //=>让浏览器的SCROLL-TOP设置为零
    utils.winBox('scrollTop', 0);
};