import { testSort,measureSort, swap,cbtPrint } from 'hy-algokit'

export default function heapSort(arr: number[]): number[] {
    let n = arr.length
    // 1.原地建堆
    const start = Math.floor(n / 2 - 1)
    for (let i = start; i >= 0; i--) {
        heapifyDown(arr, n, i)
     }

    // 2.排序
    for (let i = n - 1; i > 0; i--) { 
        swap(arr, 0, i)
        heapifyDown(arr, i, 0)
     }

    return arr
}
 

function heapifyDown(arr: number[], n: number, index: number) { 
    

    while (2 * index + 1 < n) {
        
        let leftIndex = 2 * index + 1
        let rightIndex = 2 * index + 2


        let largeIndex = leftIndex

        if (rightIndex < n && arr[leftIndex] < arr[rightIndex]) { 
            largeIndex = rightIndex
        }

        if (arr[index] > arr[largeIndex]) break
        
        swap(arr, index, largeIndex)
        
        index = largeIndex
        
     }

 }

// testSort(heapSort)
// measureSort(heapSort)