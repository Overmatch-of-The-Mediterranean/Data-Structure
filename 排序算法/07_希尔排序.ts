import { measureSort, testSort,compareSort } from "hy-algokit"
import bubbleSort from "./01_冒泡排序"
import sectionSort from "./02_选择排序"
import insertionSort from "./03_插入排序"
import mergeSort from "./04_归并排序"
import quickSort from "./05_快速排序"
import heapSort from "./06_堆排序"

function shellSort(arr: number[]) {

    let n = arr.length
    let gap = Math.floor(n / 2)

    // 第一层循环用于增量序列
    while (gap > 0) { 
        
        // 第二层循环用于不同子序列
        for (let i = gap; i < n; i++) {

            // 第三层循环用于子序列的插入排序
            while (i > gap - 1 && arr[i] < arr[i - gap]) { 
                arr[i] = arr[i - gap]
             }
        }
        
        gap = Math.floor(gap / 2)

     }

    return arr
}
 

// testSort(shellSort)
// measureSort(shellSort)
compareSort(
    [
        // bubbleSort,
        // sectionSort,
        // insertionSort,
        mergeSort,
        quickSort,
        heapSort,
        shellSort
    ]
    , 10000000)