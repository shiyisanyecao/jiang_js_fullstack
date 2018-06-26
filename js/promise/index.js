// 2秒后resolve 的定时器 同步化
// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Hello world');
//     },2000)
// })
// p.then((data)=>{
//     console.log(data);
// })

const Promise = require('./promise.js');
// 将要执行的耗时任务 封装在executor里面 实例化开始执行
const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello');
    },1000)
    // reject('没见到人');
});
p.then((data) => {
    console.log(data);
},(err) => {
    console.log(err);
})