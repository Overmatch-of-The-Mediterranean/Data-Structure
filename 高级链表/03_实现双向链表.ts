import LinkedList from "./01_实现单向链表";
import { DoublyNode } from "../type/Node";

class DoublyLinkedList<T> extends LinkedList<T>{ 
    protected head: DoublyNode<T> | null = null
    protected tail: DoublyNode<T> | null = null

    append(value: T): void {
        const newNode = new DoublyNode(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else { 
            this.tail!.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.size++
    }

    prepend(value: T) { 
        const newNode = new DoublyNode(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else { 
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.size++
    }
    
    postTraverse() { 
        let current = this.tail
        let values:T[] = []
        while (current) { 
            values.push(current.value)
            current = current.prev
        }
        
        console.log(values.join('->'));
        
     }

    insert(value: T, position: number): boolean {
        if (position < 0 || position > this.size) return false

        const newNode = new DoublyNode(value)

        if (position === 0) {
            if (!this.head) {
                this.append(value)
            } else {
                this.prepend(value)
            }
        } else if (position === this.size) {
            this.append(value)
        } else { 
            let current = this.getNode(position) as DoublyNode<T>
            current.prev!.next = newNode
            newNode.next = current
            newNode.prev = current.prev
            current.prev = newNode

            this.size++
        }

        return true
        
    }

    removeAt(position: number): T | null {
        if (position < 0 || position >= this.size) return null

        let current = this.head
        if (position === 0) {
            if (this.size === 1) {
                this.head = null
                this.tail = null
            } else {
                this.head!.next!.prev = null
                this.head = this.head!.next
            }
        } else if (position === this.size - 1) {
            current = this.tail
            this.tail!.prev!.next = null
            this.tail = this.tail!.prev
        } else { 
            current = this.getNode(position) as DoublyNode<T>
            current.prev!.next = current.next
            current.next!.prev = current.prev
        }

        this.size--
        return current?.value ?? null
    }

}
 
const dlinkedList = new DoublyLinkedList()

// 测试append尾部添加操作
console.log('----------测试append/prepend----------');

dlinkedList.append('aaa')
dlinkedList.append('bbb')
dlinkedList.append('ccc')
// 测试traverse遍历
dlinkedList.traverse()
dlinkedList.postTraverse()

// 测试insert插入操作
console.log('---------------测试insert---------------');

dlinkedList.insert('abc', 0)
dlinkedList.insert('cba', 0)
dlinkedList.insert('ddd', 5)
dlinkedList.insert('sss', 3)
dlinkedList.traverse()
dlinkedList.postTraverse()

// 测试removeAt删除指定位置元素操作
console.log('-----------------测试removeAt-----------------');

console.log(dlinkedList.removeAt(0));
dlinkedList.traverse()
dlinkedList.postTraverse()
console.log(dlinkedList.removeAt(2));
dlinkedList.traverse()
dlinkedList.postTraverse()
console.log(dlinkedList.removeAt(4));
dlinkedList.traverse()
dlinkedList.postTraverse()