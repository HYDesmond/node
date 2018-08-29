(function (window, undefined) {
    var Dialog = function (config) {
        var _this = this;
        this.config = {
            //默认配置
            button: null,
            title: "title",
            body: "body-test",
            cancelText: "取消",
            oKText: "确认"
        }
        if(config){
            this.config = config;
        }
    }
    Dialog.fn = Dialog.prototype = {
        create: function () {
            var _this = this.config,
                html = '';
            html = '<div class="g-dialog">';
            html += '<div class="g-dialogTitle">';
            html += _this.title;
            html += '</div>';
            html += '<div class="g-dialog-content">';
            html += '<div class="g-dialog-body-test">';
            html += _this.body;
            html += '</div>';
            html += '<div class="g-dialog-btnBox">';
            html += '<button>';
            html += _this.cancelText;
            html += '</button>';
            html += '<button class="g-dialog-active">';
            html += _this.oKText;
            html += '</button>';
            document.getElementsByTagName("body")[0].innerHTML += html;
        },
        show() {
            this.create.call(this)
        },
        close() {
            document.getElementsByTagName("body")[0].removeChild(document.getElementsByClassName("g-dialog")[0]);
        }
    }
    window.Dialog = Dialog;
})(window);



function myBindEvent(elem, type, selector, fn) {
    if (fn == null) {
        fn = selector
        selector = null
    }
    elem.addEventListener(type, function (e) {
        var target
        if (selector) {
            // 代理
            target = e.target
            if (target.matches(selector)) { //判断目标节点是否和选择器匹配
                fn.call(target, e)
            }
        } else {
            // 不使用代理
            fn(e)
        }
    })
}