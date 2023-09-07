class Node<T> { 
    value:T
    next:Node<T> | null
    constructor(value:T) { 
        this.value = value
        this.next = null
    }
    
}
 

class LinkedList<T> { 
    protected head: Node<T> | null = null
    protected size: number = 0
    protected tail: Node<T> | null = null

    protected getNode(position: number): Node<T> | null { 
        let current = this.head
        let index = 0
        while (index++ < position) { 
            current = current!.next
         } 

        return current
    }
    
    private isTail(node: Node<T>): boolean{
         return this.tail === node
    }
       
    

    append(value: T) { 
        const newNode = new Node<T>(value)

        if (!this.head) {
            this.head = newNode
        } else { 
            this.tail!.next = newNode
        }
        this.tail = newNode
        this.size++
    }

    traverse() { 
        let current = this.head
        
        let values:T[] = []
        while (current) {
            
            values.push(current.value)
            if (this.isTail(current)) {
                current = null
            } else { 
                current = current.next
             }
            
        }

        if (this.head && this.tail?.next === this.head) { 
            values.push(this.head.value)
         }
         
        console.log(values.join('->'));
    }
    
    insert(value: T, position: number) { 
        if (position < 0 || position > this.size) return false
        
        const newNode = new Node(value)
        if (position === 0) {
            newNode.next = this.head
            this.head = newNode
        } else { 
            let previous = this.getNode(position - 1)
            newNode.next = previous!.next
            previous!.next = newNode
            if (position === this.size) { 
                this.tail = newNode
             }
        }
        
        this.size++

        return true
    }
    
    removeAt(position:number): T | null { 
        if (position < 0 || position >= this.size) return null
        
        let current = this.head
        if (position === 0) {
            if (this.size === 1) { 
                this.tail!.next = null
                this.tail = null
            }
            
            this.head = current!.next



        } else { 
            let previous = this.getNode(position - 1)
            current = previous!.next
            previous!.next = previous?.next?.next || null
            if (position === this.size - 1) { 
                this.tail = previous
             }
        }

        this.size--
        return current?.value ?? null
    }
    
    get(position: number): T | null { 
        if (position < 0 || position >= this.size) return null
        
        return this.getNode(position)?.value ?? null
    }
    
    update(position: number,value: T ): boolean { 
        
        if(position < 0 || position >= this.size) return false

        let current = this.getNode(position)

        current!.value = value

        return true

    }
    
    indexOf(value: T): number { 
        let current = this.head
        let index = 0
        while (current) { 
            if (current.value === value) {
                return index
            }

            if (this.isTail(current)) {
                current = null
            } else { 
                current = current.next
             }

            index++
            
        }
        
        return -1
    }
    
    remove(value: T): T | null { 
        let index = this.indexOf(value)
        return this.removeAt(index)
    }
    
    isEmpty(): boolean { 
        return this.size === 0
     }

 }


 const linkedList = new LinkedList<string>()
 
// 测试append尾部添加操作
// linkedList.append('aaa')
// linkedList.append('bbb')
// linkedList.append('ccc')

// 测试traverse遍历
// linkedList.traverse()


// 测试insert插入操作
// console.log('---------------测试insert---------------');

// linkedList.insert('abc', 0)
// linkedList.insert('cba', 0)
// linkedList.insert('ddd', 5)
// linkedList.insert('sss', 3)
// linkedList.traverse()

//测试removeAt删除指定位置元素操作
// console.log('-----------------测试removeAt-----------------');

// console.log(linkedList.removeAt(0));
// linkedList.traverse()
// console.log(linkedList.removeAt(2));
// linkedList.traverse()

// 测试get
// console.log('------------测试get----------------');

// console.log(linkedList.get(2));
// console.log(linkedList.get(4));

// 测试updadte

// console.log('---------测试update');
// linkedList.traverse()
// linkedList.update(2,'kobe' )
// linkedList.update(0,'james' )
// linkedList.traverse()

// 测试indexOf
// console.log('--------测试indexOf----------');

// console.log(linkedList.indexOf('222'));
// console.log(linkedList.indexOf('aaa'));
// console.log(linkedList.indexOf('kobe'));

// 测试remove
// console.log('----------测试remove----------');
// linkedList.remove('james')
// linkedList.remove('aaa')
// linkedList.traverse()
// linkedList.remove('kobe')
// linkedList.remove('ccc')
// linkedList.remove('ddd')
// linkedList.traverse()


// 测试isEmpty
// console.log('----------测试isEmpty----------');
// console.log(linkedList.isEmpty());









export default LinkedList