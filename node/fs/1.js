// COMMONJS require NODE 内置支持的js模块化方案
// es6 module
// sea.js
const fs = require('fs');
let data;
const p = new Promise((resolve,reject) => {
    fs.readFile('./f1.txt','utf8',(err,data)=>{
        if(err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});
p.then((data) => {
    console.log('读取完成 做其他事情');
}).catch(e => {
    console.log(e);
})

