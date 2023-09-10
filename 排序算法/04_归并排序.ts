import { testSort,measureSort } from 'hy-algokit'

export default function mergeSort(arr: number[]): number[] { 
    if(arr.length <= 1) return arr

    // 1.分解数组(递归)
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)

    const newLeftArr =  mergeSort(leftArr)
    const newRightArr = mergeSort(rightArr)


    // 合并数组
    const newArr:number[] = []
    let i = 0
    let j = 0
    while (i < newLeftArr.length && j < newRightArr.length) { 
        if (newLeftArr[i] >= newRightArr[j]) {
            newArr.push(newRightArr[j])
            j++
        } else { 
            newArr.push(newLeftArr[i])
            i++
        }
    }
    
    if (i < newLeftArr.length) { 
        newArr.push(...newLeftArr.slice(i))
    }
    if (j < newRightArr.length) { 
        newArr.push(...newRightArr.slice(j))
     }
    
    return newArr

}
 
// testSort(mergeSort)
// measureSort(mergeSort)