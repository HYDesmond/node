let express = require('express');
let app = express();
app.listen(3000);
//  /user/login
let user = require('./routes/user');
let bodyParser = require('body-parser');
// 解析表单格式 把表单内的数据 解析后放在req.body上


// 解析json格式 把json字符串转化成对象 解析后放在req.body上
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// 告诉他页面上所有render方法中的html 都用ejs模板来渲染
app.engine('html',require('ejs').__express);
// 更改模板路径,默认叫views
app.set('views','static');
// 配置默认模板后缀名字
app.set('view engine','html');

app.use('/user',user);
// /article/post
let article = require('./routes/article');
app.use('/article',article);
