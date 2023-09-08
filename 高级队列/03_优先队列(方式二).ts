// import Node  from "../type/Node";

import Heap from "../堆/02_实现最大小堆"


class PriorityQueue<T>  { 
    
    private heap:Heap<T> = new Heap([])

    enqueue(value: T) {

        this.heap.insert(value)
    }

    dequeue():T | null{ 
        return this.heap.extract() ?? null
        
    }
    
    peek():T | undefined { 
        return this.heap.peek()
    }

    size() { 
        return this.heap.size()
    }

    isEmpty() { 
        return this.heap.isEmpty()
     }

}


class Student { 
    name: string
    score: number
    constructor(name: string, score: number) { 
        this.name = name
        this.score = score
    }
    
    valueOf() { 
        return this.score
     }
 }

const pqueue = new PriorityQueue<Student>()

pqueue.enqueue(new Student('why',100))
pqueue.enqueue(new Student('kobe',95))
pqueue.enqueue(new Student('james',105))
pqueue.enqueue(new Student('james',110))


while (!pqueue.isEmpty()) { 
    console.log(pqueue.dequeue());
    
 }
