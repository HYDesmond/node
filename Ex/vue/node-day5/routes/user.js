let express = require('express');
let router = express.Router(); // 创建一个路由池子
// router也是一个函数
let path = require('path');
router.get('/login',function (req,res) {
    res.send('登录')
});
router.get('/reg',function (req,res) {
    // path.resolve是根据运行的文件的位置来解析的，所以此时不能用resolve
   /* console.log(path.resolve('../views/reg.html'))*/
    res.sendFile(path.join(__dirname,'../static/reg.html'))
});
router.post('/reg',function (req,res) {
    // 开头路径不能是/
   res.render('aaa/result',{...req.body,arr:[1,2,3,4,5],html:'<h1>我很帅</h1>'})
});
router.post('/login',function (req,res) {
});
module.exports = router;

/*
 let str = '';
 req.on('data',function (chunk) {
 str+=chunk;
 });
 req.on('end',function () {
 console.log(str); // username=admin&password=zhufeng
 console.log(require('querystring').parse(str)); // node自带的模块
 let obj ={}
 str.replace(/([^&=]+)=([^&=]+)/g,function () {
 obj[arguments[1]] = arguments[2]
 });
})
* */