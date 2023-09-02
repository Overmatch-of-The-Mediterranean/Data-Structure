import ArrayQueue from './01_实现队列结构'

function hotPotato(names: string[], num: number) {  
    if(names.length ===0) return false

    const queue = new ArrayQueue<string>()

    for (let value of names) { 
        queue.enqueue(value)
    }
    
    while (queue.size > 1) { 
        for (let i = 1; i < num; i++) { 
            const name = queue.dequeue()!
            queue.enqueue(name)
        }
        queue.dequeue()
    }
    
    const leftName = queue.peek()!
    const index = names.indexOf(leftName)
    return index

}


console.log(hotPotato(['aaa','bbb','ccc'],3));
