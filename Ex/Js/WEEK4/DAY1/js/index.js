~function () {
    function ChangeTab(tabBox, options) {
        //=>参数初始化
        var _default = {
            initIndex: 0,
            eventType: 'click'
        };
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                _default[key] = options[key];
            }
        }
        this.initIndex = _default.initIndex;
        this.eventType = _default.eventType;

        //=>技巧:为了保证这些值在类的任何方法中都可以调取使用,我们一般都把信息值存放在当前实例上(THIS)：只要保证每个方法中的THIS都是当前类的实例,我们就可以获取这些值了
        this.tabBox = tabBox;

        //=>开始实现选项卡的功能
        this.init();
    }

    ChangeTab.prototype = {
        constructor: ChangeTab,
        change: function () {
            var _this = this;
            for (var i = 0; i < _this.tabList.length; i++) {
                _this.tabList[i].myIndex = i;
                _this.tabList[i]['on' + _this.eventType] = function () {
                    //=>this:当前点击的这个LI,不是实例(_this是实例)
                    _this.tabList[_this.prevIndex].className = '';
                    _this.conList[_this.prevIndex].className = 'con';
                    this.className = 'select';
                    _this.conList[this.myIndex].className = 'con select';
                    _this.prevIndex = this.myIndex;
                }
            }
        },
        clear: function () {
            //=>清空所有的样式类
            for (var i = 0; i < this.tabList.length; i++) {
                this.tabList[i].className = '';
                this.conList[i].className = 'con';
            }
            //=>初始化默认的选中页卡
            this.tabList[this.initIndex].className = 'select';
            this.conList[this.initIndex].className = 'con select';
        },
        init: function () {
            //=>获取当前页卡区域中的元素(LI & DIV)
            this.tab = utils.children(this.tabBox, 'ul')[0];
            this.tabList = utils.children(this.tab, 'li');
            this.conList = utils.children(this.tabBox, 'div');
            this.prevIndex = 0;

            //=>实现页卡切换
            this.clear();
            this.change();
        }
    };

    window.CT = ChangeTab;
}();

var tabBoxList = utils.getElementsByClassName('tabBox');
// for (var i = 0; i < tabBoxList.length; i++) {
//     new CT(tabBoxList[i], {
//         initIndex: 1
//     });
// }
new CT(tabBoxList[0]);
new CT(tabBoxList[1], {
    eventType: 'mouseover'
});
var aa = new CT(tabBoxList[2], {
    eventType: 'mouseover',
    initIndex: 2
});

//=>插件:iscroll swiper
//=>组件:UI组件 bootstrap
//=>类库:jQuery zepto
//=>框架:vue react