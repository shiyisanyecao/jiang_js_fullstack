// ajax 带上时间戳去请求服务器 以保证安全
// 时间戳+uid md5 值
// 20160614134947
function generateTime() {
    var date = new Date(1398250549490);
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    console.log(Y+M+D+h+m+s);
}
generateTime();