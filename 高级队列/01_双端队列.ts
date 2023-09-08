import ArrayQueue from '../队列/01_实现队列结构'

class ArrayDeque<T> extends ArrayQueue<T> { 
    
    addFront(value: T) { 
        this.data.unshift(value)
    }
    
    moveBack():T | null { 
        return this.data.pop() ?? null
     }
}
 

const dqueue = new ArrayDeque<string>()

dqueue.enqueue('aaa')
dqueue.enqueue('bbb')
dqueue.enqueue('ccc')

dqueue.addFront('abc')
dqueue.addFront('cba')

while (!dqueue.isEmpty()) { 
    console.log(dqueue.moveBack());
    
 }


