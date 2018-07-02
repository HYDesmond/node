function coffee() {
    console.log('来一杯咖啡')
}
function sweetCoffee() {
    coffee();
    console.log('加糖');
}
function milkSweetCoffee() {
    sweetCoffee();
    console.log('加奶')
}
coffee();
sweetCoffee();
milkSweetCoffee();