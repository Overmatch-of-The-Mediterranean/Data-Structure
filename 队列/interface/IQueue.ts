import IList from "../../type/IList"

interface IQueue<T> extends IList<T> {

    enqueue(element: T): void
    
    dequeue(): T | undefined
    
    peek(): T | undefined
    
    isEmpty(): boolean
    
    get size():number
}

export default IQueue