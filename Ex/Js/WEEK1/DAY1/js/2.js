//=>获取一个URL地址中问号传递参数的值（项目必用）
function queryURLParameter(url) {
    //->1、获取?和#的索引
    var inAsk = url.indexOf('?'),
        inWell = url.indexOf('#');
    //->2、截取到我们需要的字符串内容
    var resAsk = url.substring(inAsk + 1, inWell),
        resWell = url.substring(inWell + 1);
    //->3、获取想要的
    var obj = {HASH: resWell},
        aryAsk = resAsk.split('&');
    // console.log(aryAsk);//->["name=zxt", "age=28", "sex=0"]
    for (var i = 0; i < aryAsk.length; i++) {
        var item = aryAsk[i],
            itemAry = item.split('='),
            key = itemAry[0],
            value = itemAry[1];
        obj[key] = value;
    }
    return obj;
}
var str = 'http://www.zhufengpeixun.com/stu/?name=zxt&age=28&sex=0#teacher';
var result = queryURLParameter(str);
console.log(result);
//=>result的结果为：
/*
 {
 name:'zxt',
 age:28,
 sex:0,
 HASH:'teacher'
 }
 */
