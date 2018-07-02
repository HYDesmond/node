var reg = /\d+/g;
var str = '珠峰培训2017杨帆起航2018';

console.log(reg.lastIndex);//=>0
console.log(reg.exec(str)[0]);//=>'2017'
console.log(reg.lastIndex);//=>8
console.log(reg.exec(str)[0]);//=>'2018'
console.log(reg.lastIndex);//=>16
console.log(reg.exec(str));//=>null
console.log(reg.lastIndex);//=>0
console.log(reg.exec(str)[0]);//=>'2017'
