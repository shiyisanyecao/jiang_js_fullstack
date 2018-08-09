// Function.prototype.bind2 = function(context, ...args) {
//     var that = this;
//     var args = Array.prototype.slice.call(arguments, 1);
//     return function() {
//         // bar 是谁 bar -> Function
//         // apply()方法
//         const bindArgs = Array.prototype.slice.call(arguments);
//         that.apply(this instanceof that?this:context, args.concat(bindArgs));
//         // console.log(context);
//     }
// }

Function.prototype.bind2 = function(context) {
    var self = this;
    // context
    var args = Array.prototype.slice.call(arguments, 1);
    var FNOP = function() {}
    var bound = function() {
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(this instanceof self ? this : context, args.concat(bindArgs));
    }
    FNOP.prototype = this.prototype;
    bound.prototype = new FNOP();
    return bound;
}

var value = 2;
var foo = {
    value: 1
}
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin'
var bindFoo = bar.bind2(foo, 'daisy');
var obj = new bindFoo('18');
console.log(obj.habit);
console.log(obj.friend);

// bindFoo();
// var foo = {
//     value: 1
// }
// function bar(name, age) {
//     console.log(this.value);
//     console.log(name);
//     console.log(age);
// }

// bar.call(foo);

// const bar2 = bar.bind2(foo, '七七');
// bar2(20);

// bind 
// 1.返回新函数 高阶函数 return function() { bar() }
// 2.this的指向 闭包