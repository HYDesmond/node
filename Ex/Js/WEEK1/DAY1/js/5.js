function queryURLParameter(url) {
    //=>利用A标签的内置属性处理
    //1、动态创建一个A标签
    //2、把需要处理的URL赋值给A标签的HREF
    //3、利用A这个元素对象中的 hash/search 属性，分别获取到问号传递的参数值以及哈希值(如果没有传递,得到的结果是空字符串)
    //4、把获取的信息进行处理，最后得到想要的对象即可
}
var str = 'http://www.zhufengpeixun.com/stu/?name=zxt&age=28&sex=0#teacher';
var result = queryURLParameter(str);
console.log(result);