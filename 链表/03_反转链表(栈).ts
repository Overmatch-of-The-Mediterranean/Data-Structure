  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
}
  
function reverseList(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head

    let current:ListNode|null = head
    const stack: ListNode[] = []
    while (current) { 
        stack.push(current)
        current = current.next
    }
    
    let newHead: ListNode | null = null 
    let newCurrent:ListNode | null = newHead
    while (stack.length) { 
        if (!newHead) {
            newHead = stack.pop() ?? null
            newCurrent = newHead
         }

        const node = stack.pop()
        newCurrent!.next = node ?? null
        newCurrent = node ?? null

    }
    
    newCurrent!.next = null

    return newHead

};

export { }