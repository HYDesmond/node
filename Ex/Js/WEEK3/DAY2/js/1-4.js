Object.myCreate = function myCreate(obj) {
    var Fn = new Function();
    Fn.prototype = obj;
    return new Fn();
};

var oo = {name: 'oo'};
console.dir(Object.myCreate(oo));