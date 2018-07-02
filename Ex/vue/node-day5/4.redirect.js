let express = require('express');
let app = express();
app.listen(8080);

app.get('/',function (req,res) {
   /* res.setHeader('Location','http://www.zhufengpeixun.cn');
    res.statusCode = 302;
    res.end();*/
    res.redirect('http://www.zhufengpeixun.cn')
});