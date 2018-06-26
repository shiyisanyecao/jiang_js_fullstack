function Otaku (name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}

Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function() {
    console.log('I am ' + this.name);
}

// const person = new Otaku('曾凯', 18);
// person.sayYourName();

// 1 要返回一个新的对象
// 2 访问到Otaku 构造hanshu 里的属性
// 3 访问到Otaku.prototype中的属性或方法

var person = objectFactory(Otaku, '鸠摩智', 50);

// 参数1是类，后几个参数...
// js 的函数参数异常灵活，数量可以不定，形参可以不给，
// 还有... reset 运算符整合起来，都会跟arguments结合起来
function objectFactory() {
    // console.log(arguments);
    var Constructor = [].shift.call(arguments);
    // console.log(Constructor, arguments);
    var obj = new Object();
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj, arguments);
    return obj;
    // console.log(obj);
    // 1 obj __proto__
    // 2 构造函数上的this属性
    // 参数要传进去，要赋值，this要指向当前对象

}