function Parent() {
    this.x = 100;
}
Parent.prototype.getX = function () {
    console.log(this.x);
};

function Children() {
    Parent.call(this);
    this.y = 200;
}
Children.prototype = Object.create(Parent.prototype);
Children.prototype.constructor = Children;
Children.prototype.getY = function () {
    console.log(this.y);
};