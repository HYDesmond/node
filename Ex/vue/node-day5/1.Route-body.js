let express = require('express');
let app = express();
app.listen(3000);
//  /user/login
let user = require('./routes/user');
// bodyParser 自己写的中间件
function bodyParser() {
    return function (req,res,next) {
        let str = '';
        req.on('data',function (chunk) {
            str+=chunk;
        });
        req.on('end',function () {
            req.body = require('querystring').parse(str);
            next();
        })
    }
}
app.use(bodyParser());
app.use('/user',user);
// /article/post
let article = require('./routes/article');
app.use('/article',article);
