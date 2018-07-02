let express = require('express');
let app = express();
app.listen(3000);
// app监听函数上 扩展了很多方法 包括get post delete put,RESTful风格中的动词
// app.方法名('路径名',fn)
// 从上到下匹配如果匹配到了并且结束响应 就不会继续向下走
// 路径指的是pathname 没有问号后面的内容
// express 重点 扩展req和res的属性
app.get('/signin',function (req,res) {
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.end('登录')
});
app.post('/signin',function (req,res) {
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.end('post登录')
});
app.get('/signup',function (req,res) {
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.end('注册')
});
// all表示所有的方法 * 表示所有的路径，一般放到最后
app.all('*',function (req,res) {
    res.end('404')
});