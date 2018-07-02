function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype = {
    y: 400,
    getX: function () {
        console.log(this.x);
    },
    getY: function () {
        console.log(this.y);
    },
    sum: function () {
        console.log(this.x + this.y);
    }
};
var f1 = new Fn;
var f2 = new Fn;
console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
console.log(f1.__proto__.getY === Fn.prototype.getY);
console.log(f1.__proto__.getX === f2.getX);
console.log(f1.getX === Fn.prototype.getX);
console.log(f1.constructor);
console.log(Fn.prototype.__proto__.constructor);
f1.getX();//=>this:f1  f1.x=>100
f1.__proto__.getX();//=>this:f1.__proto__(Fn.prototype)  Fn.prototype.x=>undefined
f2.getY();//=>this:f2  f2.y=>200
Fn.prototype.getY();//=>this:Fn.prototype  Fn.prototype.y=>400
f1.sum();//=>this:f1  f1.x+f1.y=>300
Fn.prototype.sum();//=>this:Fn.prototype  Fn.prototype.x+Fn.prototype.y=>undefined+400=>NaN