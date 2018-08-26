- 获取2017-06-10格式的日期
> 考点：

> 知识点：

> 解答：
```
    示例1:
    var date = new Date();
    var add =  function(s){
        if (s.toString().length === 1) {
            s = "0" + s;
        }
        return s;
    }
    var year = date.getFullYear();
    var mounth = date.getMonth() + 1;
    var day = date.getDate();
    console.log(add(year) + '-' +add( mounth) + '-' + add(day));

    //示例2:
    function  formatDate(dt) {
        if (!dt) {
            var dt = new Date()
        }
        var year = dt.getFullYear();
        var month = dt.getMonth() + 1;
        var date = dt.getDate();
        if (month <10 ) {
            month = '0' + month;
        }
        if (date <10 ) {
                date = '0' + date;
            }
        return year + '-'+ month + '-'+ date;
    }
    var  dt = new Date();
    var formatDate = formatDate(dt);
    console.log(formatDate);

```

- 获取随机数，要求是长度一致的字符串格式
> 考点：

> 知识点

> 解答：
```
    示例1：
    var a = Math.random()*10;
    Math.floor(a);

    示例2:
    var random = Math.random();
    random = random + '0000000000';
    random = random.slice(0,10);
    //slice() 方法返回一个从0开始到10结束(不包括结束)选择的数组的一部分,浅拷贝到一个新数组对象。
    //原始数组不会被修改
    console.log(random)
```

- 写一个能遍历对象和数组的通用forEach函数
> 考点：

> 知识点

> 解答：
```
    function forEach(obj,fn) { //把数组或者对象作为参数传进去
        var  key;
        if (obj instanceof Array) {
            //准确判断是不是数组
            obj.forEach(function(item,index){
                
                fn(index,item)
                
            })
        } else{
            //不是数组就是对象
            for (key in obj) {
            if(obj.hasOwnProperty(key)){
                fn(key,obj[key])
                }
            }
        }
    }

    //arr
    var arr = [1,2,3,4];
    forEach(arr,function (index,item) {
        console.log(index,item)
    } )
    //obj
    var obj = { x:100,y:200}
        forEach(obj,function(key,value){
            console.log(key,obj[key]);
        })
        // 0 1
        // 1 2
        // 2 3
        // 3 4
        // x 100
        // y 200

```


# 知识点：
- 日期(date)函数
```
    var dt = new Date();
    dt.getTime() //获取毫秒，即时间戳
    dt.getFullYear() // 年
    dt.getMonth() //月（0-11）;
    dt.getDate() // 日（0-31）
    dt.getDay() // 星期 从0（日）开始
    dt.getHours() //小时（0-23）
    dt.getMinutes() //分钟（0-59）
    dt.getSeconds() //秒(0-59)
```
- Math
 