import { testSort,measureSort, swap } from 'hy-algokit'

export default function quickSort(arr:number[]) { 

    let left = 0
    let right = arr.length - 1

    partition(left, right)


    function partition(left: number, right: number) {
        if (left >= right) return

        const pivot = arr[right]
        let i = left
        let j = right - 1

        while (i <= j) { 
            while (arr[i] < pivot) {
                i++
            }
            
            while (arr[j] > pivot) {
                j--
            }
            
            if (i <= j) { 
                swap(arr, i, j)
                i++
                j--
            }

        }
        swap(arr,i,right)
        
        partition(left, j)
        partition(i+1,right)

    }
    
    return arr
}
 
// testSort(quickSort)
// measureSort(quickSort)