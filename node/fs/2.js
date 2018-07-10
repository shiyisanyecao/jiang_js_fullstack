const fs = require('fs');
let data;
try {
    data = fs.readFileSync('./f1.txt','utf8');
    console.log('文件读取完成');
    console.log('文件内容是：' + data);
} catch(err) {
    console.error('读取文件失败：' + err.message);
}
