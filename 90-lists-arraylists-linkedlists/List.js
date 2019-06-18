// This class has no functionality, but it defines the methods that
// a List-like object should have. Other List-like classes should
// extend this class.
export default class List {
  isEmpty() { }
  size() { }

  toString() { } 
  realToString() { } 

  append(val) { } 
  prepend(val) { } 
  pop() { } 

  get(index) { } 
  set(index, value) { } 

  removeAtIndex(index) { } 
  insertAtIndex(index, value) { }
}