function fn(b) {
    //=>[私有作用域]
    //=>形参赋值：b=1 (私有变量)
    //=>变量提升：b=aaafff111 (此处赋值操作替换了形参赋值的内容)
    console.log(b);//=>函数
    function b() {
        //=>[私有作用域]
        //=>形参赋值和变量提升都没有
        console.log(b);//=>函数
    }
    b();
}
fn(1);