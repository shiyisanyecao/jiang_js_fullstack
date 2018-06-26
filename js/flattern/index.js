// 1. flattern 功能以后慢慢学
// 2. 数组的一些超纲但常用 npm 包提供了这个功能
// lodash underscore
// 3. 代码的宿主环境 命令行
// 4. npm init -y package.json
// 5. yarn add lodash
// 6. 在当前文件中 引入node_modules下的lodash
// 使用它完成flattern 看文档
// lodash是在nodemodules（本地项目中） npm包 模块
const _ = require('lodash');
const arr = [1,2,[3,4],[5,[6,7]]];
console.log(_.flattenDeep(arr));
const arr1 = [1,2,1,4];
console.log(_.uniq(arr1));
