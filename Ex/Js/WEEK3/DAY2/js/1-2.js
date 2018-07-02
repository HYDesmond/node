function Parent() {
    this.x = 100;
}
Parent.prototype.getX = function () {
    console.log(this.x);
};

function Children() {
    //=>this:child 子类的实例
    Parent.call(this);//=>让Parent执行,方法中的THIS依然是子类的实例（在父类构造体中写的 THIS.XXX=XXX 都相当于在给子类的实例增加一些私有的属性和方法）
    this.y = 200;
}

var child = new Children();