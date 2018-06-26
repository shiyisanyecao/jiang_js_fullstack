// // symbol js数据类型 为js带来唯一值 不会重复
// var s = Symbol();
// // console.log(typeof s);
// var s1 = Symbol();
// console.log(s == s1);
// // console.log(new Symbol());

// var s1 = Symbol('foo');
// // console.log(typeof s1);
// var s2 = Symbol('bar');
// console.log(s1);
// var sym = Symbol('My symbol');
// console.log(sym);
// console.log(typeof sym);
// console.log(String(sym));


// var str = "123";
// var str2 = new String("123");
// console.log(str);
// console.log(String(str2));

var mySymbol = Symbol();
var a = {
    "delay": 1000,
    "delay2": 2000,
    [mySymbol]: 'hello!'
}
var sym = Symbol();
var obj = new Object();
a[sym] = {value:'您好！'};
// console.log(a);
for(key in a) {
    console.log(key,a[key]);
}
const objectSymbols = Object.getOwnPropertySymbols(a);
console.log(objectSymbols);
console.log(a);
Object.defineProperty(obj,sym,{
    configurable: false,
    writable:true,
    enumerable: true,
    value: '张三'
});
console.log(obj[sym]);