var tabBox = document.getElementById('tabBox'),
    tabList = tabBox.getElementsByTagName('li'),
    conList = tabBox.getElementsByTagName('div');//=>getElementsByTagName会获取后代中所有标签名为LI或者DIV的元素(而不是单纯的就这几个页卡而已)

var _prevIndex = 0;//=>记录上一次选中LI的索引(初始选中第一个,所以默认值是零)
for (var i = 0; i < tabList.length; i++) {
    var curTab = tabList[i];
    curTab.myIndex = i;
    curTab.onclick = function () {
        //=>先把上一个清掉即可
        tabList[_prevIndex].className = null;
        conList[_prevIndex].className = 'con';

        //=>当前点击有选中
        this.className = 'select';
        conList[this.myIndex].className = 'con select';

        //=>当前点击这一项是下一次点击的上一项
        _prevIndex = this.myIndex;
    }
}
