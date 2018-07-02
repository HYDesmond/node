~function () {
    var obj = {
        isNumber: 'Number',
        isString: 'String',
        isBoolean: 'Boolean',
        isNull: 'Null',
        isUndefined: 'Undefined',
        isPlanObject: 'Object',
        isArray: 'Array',
        isRegExp: 'RegExp',
        isFunction: 'Function'
    };
    var check = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            check[key] = (function (classValue) {
                return function (val) {
                    return new RegExp('\\[object ' + classValue + '\\]').test(Object.prototype.toString.call(val));
                }
            })(obj[key]);
        }
    }
    window.check = check;
}();