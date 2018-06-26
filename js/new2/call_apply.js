// var obj1 = {
//     name: 'sven'
// }
// var obj2 = {
//     name: 'anne'
// }

// window.name = 'window';

// var getName = function() {
//     // 函数的this 由运行时决定，运行时的函数调用方式来决定
//     console.log(`Hi, I am ${this.name}`);
// }
// // 普通函数
// // this可以被动态改变
// getName.call(obj1);
// getName.apply(obj1);

var func = function(a,b,c) {
    console.log([a,b,c]);
}
func.apply([1,2,3]);
func.call(1, 2, 3);