// //=>字面量方式
// var reg = /\d+/img;
//
// //=>构造函数创建
// //=>new RegExp('[元字符]','[修饰符]')
// var reg2 = new RegExp('\\d+', 'img');//=>使用构造函数创建和字面量方式创建，最主要的区别是：构造函数创建，用到转义字符需要写 “\\” 才可以

//=>使用构造函数方式写出验证是否为有效数字的正则
// var reg = new RegExp('^-?(\\d|([1-9]\\d+))(\\.\\d+)?$');

//=>我想在正则中动态加入一个变量的值，作为正则的一部分
var strClass = 'String';
// var reg = /^\[object '+strClass+'\]$/;//=>字面量方式中出现的所有字符都叫做元字符，例如：在当前案例中 '+ 不是字符串拼接，属于让单引号出现一到多次...

var reg = new RegExp('^\\[object ' + strClass + '\\]$');
console.log(reg.toString());

reg = new RegExp(`^\\[object ${strClass}\\]$`);
console.log(reg.toString());








