/**
 * author jxy
 * data 2018-6-21
 * 模块功能Promise类
 */
class Promise {
    constructor (executor) {
        // promise 状态有几种？
        // pending 等待
        // resolved 成功
        // rejected 失败
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        // console.log(this)
        let resolve = (value) => {
            if(this.status === 'pending') {
                this.status = 'resolved';
                this.value = value;
            }
            // console.log(this)
        }
        let reject = (reason) => {
            if(this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
            }
        }
        executor(resolve,reject);
    } 
    then (onFullfilled,onRejected) {
        if(this.status === 'resolved') {
            onFullfilled(this.value);
        }
        if(this.status === 'rejected') {
            onRejected(this.reason);
        }
    }
}

module.exports = Promise