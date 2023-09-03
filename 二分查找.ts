function binarySearch(arr: number[], num: number) { 
    
    let left = 0
    let rigth = arr.length - 1


    while (left <= rigth) { 
        const mid = Math.floor((left + rigth) / 2)
        const midNum = arr[mid]

        if (midNum === num) {
            return midNum
        } else if (num > midNum) {
            left = mid + 1
        } else if (num < midNum) { 
            rigth = mid - 1
        }
    }
    
    console.log('查找失败');
    return false

}
 
const arr = [11, 22, 33, 44, 55, 66, 77]
console.log(binarySearch(arr,66));
console.log(binarySearch(arr,11));
console.log(binarySearch(arr,88));
