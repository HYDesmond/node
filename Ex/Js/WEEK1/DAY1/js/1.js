var time = '2017-10-24';
//=>'2017/10/24'

//1、replace
// time = time.replace('-', '/').replace('-', '/');
// time = time.replace(/-/g, '/');

//2、split
// time = time.split('-').join('/');

//3、正则
// var reg = /\d+/g;
// console.log(time.match(reg));//=>["2017", "10", "24"]
// console.log(time.match(reg).join('/'));

//4、Date
// time = new Date(time);
// console.log(time.getFullYear() + '/' + (time.getMonth() + 1) + '/' + time.getDate());

