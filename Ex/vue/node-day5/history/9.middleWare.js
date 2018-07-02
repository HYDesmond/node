function app() {}
// 每次调用use方法都会将方法存到数组种，默认调用数组的第一项，将next方法传递给数组中的函数，如果调用此函数 会继续执行数组中的下一项
app.middlreware = [];
app.use  = function (cb) {
    this.middlreware.push(cb); // [fn,fn,fn];
};
app.use(function (req,res,next) {
    console.log(1);
    next();
});
app.use(function (req,res,next) {
    console.log(2);
    next();
});
app.use(function (req,res,next) {
    console.log(3);
});
let index = 0; // callback
function next() {
    app.middlreware[index++](null,null,next);
}
next();
