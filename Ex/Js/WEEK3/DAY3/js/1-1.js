// function fn(x, y) {
//     console.log(x, y);//=>10 20
//
//     y = 200;
//     arguments[0] = 100;//=>ARG集合中的第一项=100(传递的第一个实参值修改为100)  由于映射关系，X也会跟着改变
//
//     console.log(x, arguments[1]);//=>100,200
// }
// fn(10, 20);

function fn(x, y) {
    /*
     * 如果传递两个值,也就是x和y都有值
     *  x=10
     *  y=20
     *
     * ARG
     *  0:10
     *  1:20
     *  length:2
     *  __proto__:Object.prototype
     */

    /*
     * 只传递一个值
     *   x=10
     *   y=undefined
     *
     * ARG
     *   0:10
     *   length:1
     *   __proto__:Object.prototype
     */

    console.log(y);//=>undefined
    y = 200;
    console.log(arguments[1]);//=>undefined
}
fn(10);