  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
}
  
function reverseList(head: ListNode | null): ListNode | null {
    if(!head) return null
    if(!head.next) return head
    
    let current:ListNode|null = head
    let newHead:ListNode | null = null
    let newCurrent:ListNode|null = newHead
    let length = 0
    while(current.next) {
        length++
        current = current.next
    }

    while(length >= 0) {
        let index = 0
        current = head
        while(index++ < length){
            current = current!.next
        }
        const newNode = new ListNode(current!.val)
        if(!newHead) {
            newHead = newNode
            newCurrent = newHead
        } else {
            newCurrent!.next = newNode
            newCurrent = newNode
        }
        length--

    }
    return newHead
};

export { }