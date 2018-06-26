var obj = {a:1};
console.log("a" in obj);
console.log("toString" in obj);
// 原型链对象上是否具有某属性
// obj 对象
// name 属性名
function hasPrototypeProperty(object,name) {
    return name in object && !object.hasOwnProperty(name);
}
// hasPrototypeProperty(obj,a);
console.log(hasPrototypeProperty(obj,"toString"));
console.log(hasPrototypeProperty(obj,"a"));

// 函数是一等对象 Object
// Person 可以是程序员 作曲家 作者的原型链对象
// prototype 属性 in obj in Object
// prototype 入口？js 所有对象其实是由function构造的 函数都有的属性
// 实例instance P1 P2 都有自身的属性name
// 由Person构造函数 this.name = 
// Person 由两部分构成 constructor 
// Person.prototype.sayName
// const P1 = new Person('王小虎');
// constructor->prototype
function Person(name) {
    this.name = name;
}
// 函数 在js里 几乎所有的函数都有prototype属性 指针一样 指向一个对象 属性或者方法的集合
Person.prototype = {
    getName: function(){
        return this.name;
    }
    
}
// js 原型式继承
// constructor Person name + books 属性
// 原型链prototype Person的方法链 + 方法链(自身方法)
// 让子类拥有父类的所有属性
function Author(name,books) {
    // 新的构造函数
    // 函数
    Person.call(this,name);
    this.books = books;
}
// 得到Person的prototype
extend(Author,Person);
Author.prototype.getBooks = function() {
    return this.books;
}
function extend(subClass,superClass) {
    // 第三者 干净
    var F = function() {};//空的构造函数
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    // 失去构造函数
    subClass.prototype.constructor = subClass;
}
const author = new Author('雨果',['悲惨世界']);
// console.log(author.getBooks());
// console.log(author.getName());