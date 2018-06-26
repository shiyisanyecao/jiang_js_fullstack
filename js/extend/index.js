
// es6的class只是语法糖
function Person(name) {
    this.name = name
}

Person.prototype = {
    getName:function() {
        return this.name;
    }
}

function Author(name,books) {
    Person.call(this,name);
    this.books = books;
}
extend(Author,Person);
Author.prototype.getBooks = function() {
    return this.books;
}
function extend(subClass,superClass) {
    subClass.prototype = new superClass();
    // constructor属性丢失
    subClass.prototype.constructor = subClass;
}
const author = new Author('高尔基','我的大学');
console.log(author);

const person = new Person('周杰伦');
console.log(person.prototype.constructor);
// new Person()