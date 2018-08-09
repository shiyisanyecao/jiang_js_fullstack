// 分治
    // 1. 随机选择数组中的一个数a作为基准 中点
    // 2. 其他数字跟他比较 小于它的放左边 大于它的放右边
    // 3. 递归的思想 将左边的数和右边的数重复做以上两步

    // a b c
    // a.concat(b).concat(c)
// 复杂排序
    // 归并排序
    // 快排
    // 堆排
// 执行效率
const arr = [85, 24, 63, 45, 17, 31, 96, 50];
// log2n n n*log2n 复杂排序N*logN(归并排序，快速排序，堆排序) 简单算法N^2(冒泡排序，选择排序，插入排序)
function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    // 基准点是排好序的
    let pivot = arr.splice(pivotIndex, 1)[0];
    // let pivot = arr[pivotIndex - 1];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}
console.log(quickSort(arr));