const fs = require('fs');

fs.appendFile('./c.txt','hello world','utf8',(err) => {
    if(err) throw err;
    console.log('append成功');
})