import { testSort,measureSort } from 'hy-algokit'

export default function insertionSort(arr: number[]) { 

    const n = arr.length
    for (let i = 1; i < n; i++) { 

        let j = i-1
        let num = arr[i]

        while (arr[j] > num && j >= 0) {
            arr[j+1] = arr[j]
            j--
        }
        
        arr[j+1] = num
     }

    return arr
}
 
// testSort(insertionSort)
// measureSort(insertionSort)