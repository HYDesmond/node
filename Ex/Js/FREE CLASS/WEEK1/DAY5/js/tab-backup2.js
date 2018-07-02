/*
 * 需求：点击哪一个LI，就让其有SELECT这个样式类（对应的DIV也有这个样式类），其余的LI（DIV）都把SELECT样式类移除即可
 *
 * 不管点击哪一个LI，我首先让所有的LI(DIV)都移除SELECT，再让当前点击的有SELECT样式类
 */
var tabBox = document.getElementById('tabBox'),
    oList = tabBox.getElementsByTagName('li'),
    oDivList = tabBox.getElementsByTagName('div');

//=>创建一个函数实现页卡切换的功能
function change(index) {
    //->index：形参，实现方法的时候我们不知道用户点击的是哪一个LI，设定一个入口，当用户点击需要页卡切换的时候，只要执行change方法，并且把点击这个li的索引传递给我们，我们就可以在oList集合中通过索引获取到当前点击的这个li对象

    //->让所有的LI和DIV移除SELECT样式类
    for (var i = 0; i < oList.length; i++) {
        oList[i].className = '';
        oDivList[i].className = '';
    }

    //->让当前点击的这个LI有选中的样式
    oList[index].className = 'select';
    oDivList[index].className = 'select';
}

//=>给每一个LI绑定点击事件，点击的时候执行change方法，把当前点击LI的索引传递进来，实现页卡的切换

//=>自定义属性
for (var i = 0; i < oList.length; i++) {
    oList[i].myIndex = i;
    oList[i].onclick = function () {
        //->this:当前点击的这个li
        //this.myIndex:当前点击这个LI的myIndex这个自定义属性的值
        change(this.myIndex);//=>此处需要传递当前点击这个LI的索引
    }
}

/*i = 0
 oList[0].myIndex = 0;
 i = 1
 oList[1].myIndex = 1;
 i = 2
 oList[2].myIndex = 2;*/



