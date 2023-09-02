
import IStack from './interface/IStack'
class ArrayStack<T> implements IStack<T> { 
    private data: T[] = []
    
    push(element: T):void { 
        this.data.push(element)
    }

    pop(): T | undefined { 
        return this.data.pop()
    }
    
    peek(): T | undefined {
        return this.data[this.data.length - 1]
    }
    
    isEmpty(): boolean { 
        return this.data.length === 0
    }
    
    get size(): number { 
        return this.data.length
     }
}
 

// const stack = new ArrayStack<string>()

// stack.push('aaa')
// stack.push('bbb')
// stack.push('ccc')

// const res = stack.peek()

// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// console.log(stack.isEmpty());
// console.log(stack.size());


// const stack2 = new ArrayStack<number>()
// stack2.push(1)
// stack2.push(2)
// stack2.push(3)

// const res2 = stack2.peek()


// console.log(stack2.peek());
// console.log(stack2.pop());
// console.log(stack2.pop());
// console.log(stack2.pop());

// console.log(stack2.isEmpty());
// console.log(stack2.size());

export default ArrayStack



