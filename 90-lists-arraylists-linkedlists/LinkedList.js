class ListNode {
  constructor(value, next=null) {
    this.value = value
    this.next = next
  }
}
// LinkedList
// read O(N)
// write O(N)
// insert O(1) (assuming you're at the spot)
// remove O(1) (assuming you're at the spot)
// append O(N)
// prepend O(1)
export default class LinkedList extends List {
  constructor() {
    this.root = null    
    this.size = 0
  }

  isEmpty() {
    return this.root === null
  }

  size() {
    return this.size
  }

  toString() { } 
  realToString() { } 

  append(val) { } 

  prepend(val) {
    let node = new ListNode(val)
    node.next = this.root
    this.root = node
  } 

  pop() { } 

  get(index) { } 
  set(index, value) { } 

  removeAtIndex(index) { } 
  insertAtIndex(index, value) { }
}