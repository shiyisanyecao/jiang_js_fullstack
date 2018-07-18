import Loki from 'lokijs'
// db 配置 初始化 连接及数据查询
// db 句柄 代表着数据库 new 得到数据库 数据库名(一个项目一个库) => collection(table 的别称) => rows(数据记录) => column(列名)
// sql 查询 典型的异步操作 用Promise来封装 连接数据库要时间 查询要时间 返回结果 要路上的时间
export const db = new Loki('notes', {
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    autosaveInterval: 3000,
    persistenceMethod: 'localStorage'
})

function databaseInitialize()  {
    const notes = db.getCollection('notes');
    if(notes === null) {
        db.addCollection('notes');
    }
}

export function loadCollection(collection) {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {
            const _collection = db.getCollection(collection) || db.addCollection(collection);
            resolve(_collection)
        })
    })
}