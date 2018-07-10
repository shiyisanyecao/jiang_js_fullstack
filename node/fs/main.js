const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req,res) => {
    // 浏览器能支持自动解压ungzip
    // console.log(req.headers['accept-encoding']);
    if(req.headers['accept-encoding'].indexOf('gzip') >= 0) {
        gzip = zlib.createGzip();
        res.writeHead(200,{
            'Content-Encoding': 'gzip',
            'Content-Type': 'text/plain;charset=utf8'
        })
        fs.createReadStream('./a.txt').pipe(gzip).pipe(res);
    } else {
        res.writeHead(200,{
            'Content-Encoding': 'gzip',
            'Content-Type': 'text/plain;charset=utf8'
        })
        fs.createReadStream('./a.txt').pipe(res);
    }    
})
server.listen(8002);