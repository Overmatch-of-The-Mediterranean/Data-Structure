import IList from "../../type/IList"

interface IStack<T> extends IList<T> {
    push(element: T): void
    pop(): T | undefined
}
 

export default IStack