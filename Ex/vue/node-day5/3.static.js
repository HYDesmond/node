let express = require('express');
let app = express();
app.listen(8080);
// let fs = require('fs');
app.use(express.static('dist'));
app.use(express.static('public'));
/*function static(p) { // dist目录下的是静态文件
    return function (req,res,next) {
        let path = require('path').join(p,req.path); // 我们要读取的文件
        fs.stat(path,function (err,stats) {
            if(err){ // 文件不存在
              return next();
            }
            if(stats.isFile()){
                fs.createReadStream(path).pipe(res);
            }
        })
    }
}
app.use(static('dist')); // 自定义静态服务中间件
app.use(static('public')); // 自定义静态服务中间件*/

