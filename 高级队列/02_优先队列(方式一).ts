// import Node  from "../type/Node";

import Heap from "../堆/02_实现最大小堆"


class PriorityNode<T> { 
    

    constructor(public value: T, public priority: number) { }

    valueOf() { 
        return this.priority
     }
    
}
 
class PriorityQueue<T>  { 
    
    private heap:Heap<PriorityNode<T>> = new Heap([])

    enqueue(value: T, priority: number) {
        const newNode = new PriorityNode(value,priority)
        this.heap.insert(newNode)
    }

    dequeue():T | null{ 
        return this.heap.extract()?.value ?? null
        
    }
    
    peek():T | undefined { 
        return this.heap.peek()?.value
    }

    size() { 
        return this.heap.size()
    }

    isEmpty() { 
        return this.heap.isEmpty()
     }

}
 

const pqueue = new PriorityQueue<string>()

pqueue.enqueue('why', 100)
pqueue.enqueue('kobe', 96)
pqueue.enqueue('james', 105)


while (!pqueue.isEmpty()) { 
    console.log(pqueue.dequeue());
    
 }
