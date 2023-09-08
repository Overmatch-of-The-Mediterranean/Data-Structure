import { cbtPrint } from 'hy-algokit'

class Heap<T> { 
    private data: T[] = []
    private length: number = 0
    private isMax:boolean

    constructor(arr:T[],isMax:boolean = true){
        this.isMax = isMax
        if(arr.length === 0) return
        this.buildHeap(arr)
    }

    // 交换两个元素
    private swap(i: number, j: number) { 
        let temp = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = temp
        
     }

     compare(i:number,j:number){ 
        if(this.isMax) {
            return (this.data[i] <= this.data[j])
        }else {
            return (this.data[i] >= this.data[j])
        }
      }

    // 插入
    insert(value: T) { 
        // 将插入的元素放在数组的最后面
        this.data.push(value)
        this.length++

        // 上滤操作
        this.heapify_up()
     }

     // 上滤
     private heapify_up (){
        let index = this.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)

            if (this.compare(index,parentIndex)) { 
                break
            }

            this.swap(index, parentIndex)
            index = parentIndex
         }
     }

    // 取出最大值
    extract(): T | undefined { 
        if(this.length === 0) return undefined
        if(this.length === 1) { 
            this.length--
            return this.data.pop()
        }

        const topValue = this.data[0]
        this.data[0] = this.data.pop()!
        this.length--

        this.heapify_down()

        return topValue

    }

    // 下滤
    private heapify_down (num:number = 0){

        let index = num
        
        while(2 * index + 1 < this.length) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let largeIndex = leftChildIndex
    
            if(rightChildIndex < this.length && this.compare(leftChildIndex,rightChildIndex) ) { 
                largeIndex = rightChildIndex
            }
    
            if(this.compare(largeIndex,index)) {
                break
            }
    
            this.swap(index,largeIndex)
            index = largeIndex
        }
    }
    
    peek(): T | undefined {
        return this.data[0]
    }
    
    size(): number { 
        return this.length
    }
    
    isEmpty(): boolean { 
        return this.length === 0
     }

     // 原地建堆
     buildHeap(arr:T[]){
        this.data = arr
        this.length = arr.length

        // 获取第一个非叶子节点
        let index = this.length - 1
        const lastNodeIndex = Math.floor((index - 1) / 2)

        for(let i = lastNodeIndex; i >= 0; i--) {
            this.heapify_down(i)
        }
     }

    print() {
        cbtPrint(this.data)
     }
    
}
 


// const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]
const arr = [19, 100, 36, 17, 3,25] // 默认是最大
// const arr = [9,11,20,56,23,45] // 默认是最小

// 插入建堆
// const heap = new Heap<number>([],false)
// for (const value of arr) { 
//     heap.insert(value)
// }

// console.log(heap.data);
// heap.print()
// while (!heap.isEmpty()) { 
//     console.log(heap.extract());
    
//  }
// console.log('---------------insert---------------');

// console.log(heap.data);
// heap.insert(131)
// console.log(heap.data);

// heap.insert(65)
// console.log(heap.data);

// console.log('---------------extract---------------');
// console.log(heap.extract());
// console.log(heap.data);


// 原地建堆
// console.log('---------------buildHeap---------------');

// const heap = new Heap<number>(arr, false)
// console.log(arr);
// heap.print()

// while (!heap.isEmpty()) { 
//     console.log(heap.extract());
// }

//  console.log(heap.isEmpty());


export default Heap
 



 
