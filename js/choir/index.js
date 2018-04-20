// console.log('合唱团')
// talk is js
// 国王 招1000只鸭组成合唱团
var choir = [];
// duck 是鸭对象
// JSON object
// 只要两脚站立会嘎嘎嘎的叫的都是鸭子 
var duck = {
    // name: '鸭王',
    // actor: '任达华',
    duckSinging:function(){
        console.log('嘎嘎嘎');
    }
}
// new 一下，json就是对象，不需要new
// json慢慢描述 也是数据交换的标准
var yyj = {
    name: '杨玉杰',
    hasGirlFriend: false,
    birth:'5-23',
    girlAttributions:{
        sex: 'all',
        isAlive:true
    }
}
console.log(yyj.girlAttributions.sex);
yyj.girlAttributions.sex = 'female';
console.log(yyj.girlAttributions.sex);
var chicken = {
    duckSinging:function(){
        consloe.log('嘎嘎嘎');
    }
}
for(var i =0 ;i < 999;i ++){
    // choir.push(duck)
    joinChoir(duck);
}
joinChoir(chicken);
// choir.push(chicken);
console.log(choir.length);

// for(var i = 0 ; i < choir.length ; i ++){
//     var singer = choir[i];
//     if(!singer.duckSinging){
//         console.log('不是鸭子');
//         break;
//     }
// }
//typeof判断js变量类型
function joinChoir(ani){
    if(ani && typeof ani.duckSinging == 'function'){
        choir.push(ani);
    }else{
        console.log('不合要求');
    }
}