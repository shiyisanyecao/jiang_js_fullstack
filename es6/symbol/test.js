function Word(words) {
    this.words = words;
}
Word.prototype = {
    alert() {
        console.log(this.words);
    }
}
var w = new Word('hello world');
w.print = function() {
    console.log(this.words);
    console.log(this);//this指向w这个实例{words: 'hello world', print: [Function]}
}
// 当调用某种方法或查找某种属性时 首先会在自身调用和查找 如果自身并没有该属性或方法
// 则会去它的__proto__属性中查找 也就是它构造函数的prototype中调用查找
w.print();
w.alert();