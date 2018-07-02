function Parent() {
    this.x = 100;
}
Parent.prototype.getX = function () {
    console.log(this.x);
};

function Children() {
    this.y = 200;
}
Children.prototype = new Parent();//=>最好在扩展子类原型方法之前完成
Children.prototype.constructor = Children;
Children.prototype.getY = function () {
    console.log(this.y);
};

var child = new Children();
console.log(child.y);
child.getY();