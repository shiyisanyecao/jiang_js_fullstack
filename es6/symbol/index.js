// 不可以被实例化 怎么实现?
// ObjectFacyory instance
function ClassCannotInstance() {
    if(this instanceof ClassCannotInstance) {
        throw new Error('不能被实例化');
    }
    // ClassCannotInstance() 可以执行
    // new ClassCannotInstance() 不可以被执行
}
// const instance = new ClassCannotInstance();
ClassCannotInstance();