import ArrayQueue from "./01_实现队列结构"

// function lastRemaining(n: number, m: number): number {

//     const queue = new ArrayQueue<number>()

//     for (let i = 0; i < n; i++) { 
//         queue.enqueue(i)
//     }
    

//     while (queue.size > 1) { 
//         for (let i = 1; i < m; i++) { 
//             queue.enqueue(queue.dequeue()!)
//         } 
//         queue.dequeue()
//     }
    
//     return queue.dequeue()!

// }


function lastRemaining(n: number, m: number): number {
    let position = 0

    for (let i = 2; i <= n; i++) { 
        position = (position + m) % i
    }
    return position

}

console.log(lastRemaining(5, 3));
console.log(lastRemaining(10,17));
