- 如何准确判断一个变量是数组类型
> 考点：

- 写一个原型链继承的例子


- 描述new一个对象的过程


- zepto源码中如何使用原型链

# 知识点：
> 
- 构造函数
    ```
    function Foo(name, age) {
        this.name = name;
        this.age = age;
        this.class = 'class-1';
        // return this 默认有这一行
    }
    var f = new Foo('zhangsan', 20)；
    // var f1 = new Foo('lisi', 22)
    ```
- 构造函数-扩展
    - var a = {}其实是var a = new Object()的语法糖
    - var a = []其实是var a = new Array()的语法糖
    - function Foo(){}其实是var Foo = new Function()
    - 使用instanceof判断一个函数是否是一个变量的构造函数
    - ***推荐使用语法糖***
- 原型规则和示例
    - 5条原型规则
        > 所用的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性，除了`null`之外。

        > 所有的引用类型（数组、对象、函数），都具有`__proto__`属性 *(隐式属性)*。

        > 所有的函数，都有一个`prototype`属性 *（显示属性）*，属性值也是也是一个普通的对象。

        > 所有的引用类型的`__proto__`属性指向它的构造函数的`prototype`属性值.

        > 
- 原型链

- instanceof