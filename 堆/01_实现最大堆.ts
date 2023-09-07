class Heap<T> { 
    data: T[] = []
    private length: number = 0

    // 交换连哥哥元素
    private swap(i: number, j: number) { 
        let temp = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = temp
        
     }

    // 插入
    insert(value: T) { 
        // 将插入的元素放在数组的最后面
        this.data.push(value)
        this.length++

        // 上滤操作
        let index = this.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)

            if (this.data[index] <= this.data[parentIndex]) { 
                break
            }

            this.swap(index, parentIndex)
            index = parentIndex
         }
     }

    // 取出最大值
    extract(): T | undefined { 
        return undefined
    }
    
    peek(): T | undefined {
        return undefined
    }
    
    size(): number { 
        return this.length
    }
    
    isEmpty(): boolean { 
        return false
     }

    
}
 
const heap = new Heap()

const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]

for (const value of arr) { 
    heap.insert(value)
}

console.log(heap.data);
heap.insert(131)
console.log(heap.data);

heap.insert(65)
console.log(heap.data);

 
