import { swap,testSort,measureSort } from 'hy-algokit'

export default function bubbleSort(arr: number[]) { 
    
    const n = arr.length
    
    for (let i = 0; i < n - 1; i++) { 
        let isSwap = false
        for (let j = 0; j < n - i - 1; j++) { 
            if (arr[j] > arr[j + 1]) { 
                swap(arr, j, j + 1)
                isSwap = true
             }
        }
        
        if(!isSwap) break
     }    


    return arr
}


// testSort(bubbleSort)
// measureSort(bubbleSort)
 

