// var tabBox = document.getElementById('tabBox'),
//     tab = utils.getElementsByClassName('tab', tabBox)[0],
//     tabList = utils.children(tab, 'li'),
//     conList = utils.children(tabBox, 'div'),
//     _prevIndex = 0;
// for (var i = 0; i < tabList.length; i++) {
//     tabList[i].myIndex = i;
//     tabList[i].onclick = function () {
//         tabList[_prevIndex].className = null;
//         conList[_prevIndex].className = 'con';
//         this.className = 'select';
//         conList[this.myIndex].className = 'con select';
//         _prevIndex = this.myIndex;
//     }
// }

~function () {
    var tabBoxList = utils.getElementsByClassName('tabBox');
    for (var i = 0; i < tabBoxList.length; i++) {
        change(tabBoxList[i]);
    }

    function change(tabBox) {
        var tab = utils.getElementsByClassName('tab', tabBox)[0],
            tabList = utils.children(tab, 'li'),
            conList = utils.children(tabBox, 'div'),
            _prevIndex = 0;
        for (var i = 0; i < tabList.length; i++) {
            tabList[i].myIndex = i;
            tabList[i].onclick = function () {
                tabList[_prevIndex].className = null;
                conList[_prevIndex].className = 'con';
                this.className = 'select';
                conList[this.myIndex].className = 'con select';
                _prevIndex = this.myIndex;
            }
        }
    }
}();

/*
 <div class='tabBox'>
 <ul class='tab'>
 <li class='select'></li>
 <li>...</li>
 ...
 </ul>
 <div class='con select'>...</div>
 <div class='con'>...</div>
 </div>
 */

