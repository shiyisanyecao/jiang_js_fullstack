// N^2
// 找到数组中最小的值放在第一位 第二小的放在第二位...
// 坑 基址查询
const arr = [85, 24, 63, 45, 17, 31, 96, 50];
function selectionSort(arr) {
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        let min = i;
        // 如果已经选择了 就一定有序
        for(let j = i; j < len; j ++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min != i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }
    return arr;
}
console.log(selectionSort(arr));