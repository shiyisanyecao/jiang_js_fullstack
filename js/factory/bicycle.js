// console.log('工厂模式');
// 函数属于 对象
// 函数是一等对象
//类，简单是只有一个构造函数
// 类跟函数没有区别
//js 本身并没有类 只是用的人多了 给了这个实现
// js 只有对象 Object原型对象的始祖
//原型 prototype
//js里不需要传统继承 只要有个参照物就可实现原型式继承
// function Bicycle() 函数表达式写法
var Bicycle = function(brand){
    // // 构造函数 constructor
    // new 时执行
    this.brand = brand || '凤凰'
}
// 原型 凤凰
// 二维码
// 手机支付
// js 继承关系 不是
// 共享单车 完全颠覆了自行车 
Bicycle.prototype = {
    sellBicycle: function(model){
        // console.log('卖车了')
        // return null;
        // 面向对象们
        // 卖车 商店 很多车 维修人员 仓库
        let bicycle = null;
        switch(model){
            case 'Giant':
            bicycle = new Giant()
            break;
            case 'Speedster':
            bicycle = new Speedster()
            break;
            case 'U2':
            bicycle = new U2()
            break;
        }
        bicycle.assemble();
        bicycle.wash();
        bicycle.provideRepair();
        // 把车卖出去
        return bicycle;
    }
}
// 雷速达
function Speedster(){
    
}

Speedster.prototype = {
    assemble:function(){
        console.log('组装成功')
    },
    wash:function(){
        console.log('清洗成功')
    },
    provideRepair:function(){
        console.log('保修一年')
    }
}

// 捷安特
function Giant(){

}
Giant.prototype = {
    assemble:function(){
        console.log('组装成功')
    },
    wash:function(){
        console.log('清洗成功')
    },
    provideRepair:function(){
        console.log('保修二年')
    }
}
function U2(){

}
U2.prototype = {
    assemble:function(){
        console.log('组装成功')
    },
    wash:function(){
        console.log('清洗成功')
    },
    provideRepair:function(){
        console.log('保修三年')
    }
}
// js 基本类型
// 字符串 数字 布尔值 undefined null
// 复杂类型 object <-prototype array function json 
var bicycle = new Bicycle();
console.log(bicycle.sellBicycle('Giant'));