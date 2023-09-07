import LinkedList from "./01_实现单向链表";

class CircularLinkedList<T> extends LinkedList<T> { 
    append(value: T): void {
        super.append(value)

        this.tail!.next = this.head
    }

    insert(value: T, position: number):boolean {
        const result = super.insert(value, position)
        
        if (result && (position === 0 || position === this.size - 1)) { 
            this.tail!.next = this.head
         }

        return result
    }

    removeAt(position: number): T | null {
        const value = super.removeAt(position)

        if (value && this.tail && (position === 0 || position === this.size)) { 
            
            this.tail!.next = this.head
            
         }

        return value
    }

    indexOf(value: T): number {
        const index = super.indexOf(value)


        return index
    }

    
}
 
const clinkedList = new CircularLinkedList<string>()

// 测试append尾部添加操作
clinkedList.append('aaa')
clinkedList.append('bbb')
clinkedList.append('ccc')

// 测试traverse遍历
clinkedList.traverse()

// 测试insert插入操作
console.log('---------------测试insert---------------');

clinkedList.insert('abc', 0)
clinkedList.insert('cba', 0)
clinkedList.insert('ddd', 5)
clinkedList.insert('sss', 3)
clinkedList.traverse()

// 测试removeAt删除指定位置元素操作
console.log('-----------------测试removeAt-----------------');

console.log(clinkedList.removeAt(0));
clinkedList.traverse()
console.log(clinkedList.removeAt(2));
clinkedList.traverse()
console.log(clinkedList.removeAt(4));
clinkedList.traverse()

// 测试get
console.log('------------测试get----------------');

console.log(clinkedList.get(2));
console.log(clinkedList.get(4));

// 测试updadte

console.log('---------测试update');
clinkedList.traverse()
clinkedList.update(2,'kobe' )
clinkedList.update(0,'james' )
clinkedList.traverse()

// 测试indexOf
console.log('--------测试indexOf----------');

console.log(clinkedList.indexOf('222'));
console.log(clinkedList.indexOf('aaa'));
console.log(clinkedList.indexOf('kobe'));

// 测试remove
console.log('----------测试remove----------');
clinkedList.remove('james')
clinkedList.remove('aaa')
clinkedList.traverse()
clinkedList.remove('kobe')
clinkedList.traverse()
console.log(clinkedList.remove('ccc'));
console.log(clinkedList.remove('ddd'));

clinkedList.traverse()


// 测试isEmpty
console.log('----------测试isEmpty----------');
console.log(clinkedList.isEmpty());


export { }