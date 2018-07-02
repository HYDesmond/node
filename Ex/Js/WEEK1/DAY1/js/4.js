function queryURLParameter(url) {

}
var str = 'http://www.zhufengpeixun.com/stu/?name=zxt&age=28&sex=0#teacher';
var result = queryURLParameter(str);
console.log(result);

//=>思路：
//1、如果原有URL有问号替换为&HASH=,如果没有问号替换为?HASH=
//2、按照之前处理的 xxx=xxx&xxx=xxx 来统一处理接口
str = str.replace('#', '&HASH=');
