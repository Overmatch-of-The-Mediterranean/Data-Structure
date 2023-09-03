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

    let newHead: ListNode | null = null
    let current: ListNode | null = head

    while (current) { 
        current = current.next
        head!.next = newHead
        newHead = head
        head = current
    }
    
    return newHead
};

export { }