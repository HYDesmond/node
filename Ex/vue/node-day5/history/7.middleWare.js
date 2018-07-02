// 中间件 当我们访问到最终目标之前执行的内容
let express= require('express');
let app = express();
app.listen(8080);
//1.中间件的第一个功能 可以进行权限判断
//2.可以进行对req和res的属性进行扩充
//3.中间件放在要执行路径的上面
//4.中间默认情况下都匹配，可以指定匹配什么开头的
app.use('/water',function (req,res,next) { // 不调用next就不继续往下走
    console.log('过滤石头');
    req.stone = 'too big';
    next('错误');
});
app.use('/water',function (req,res,next) { // 不调用next就不继续往下走
    console.log('过滤砂子');
    req.sand = 'too small';
    next();
});
app.use(function (req,res,next) {
    res.header('Content-Type','text/plain;charset=utf8');
    next();
});
app.get('/water/a',function (req,res) {
    console.log(req.stone,req.sand);
    res.end('水');
});
app.get('/food',function (req,res) {
    console.log(req.stone,req.sand);
    res.end('食物');
});
app.use(function (err,req,res,next) { // 错误中间件拥有四个参数 fn.length == 4
    console.log(err)
});