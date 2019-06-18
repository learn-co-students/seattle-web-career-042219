// ArrayList - built from an array
// read O(1)
// write O(1)
// insert O(N)
// remove O(N)
// append O(1)
// prepend O(N)
export default class ArrayList extends List {
  // creates a list using a fixed-size array
  // with the given size (or default 7)
  // (since we're in JavaScript the Array is not
  //  really a fixed-size array, but we will treat
  //  it like it is. No splice/push/pop!!)
  constructor(size=7) {
    this.data = new Array(size)
    this.size = 0
    
    // specifically nullify all the values to start
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = null
    }
  }

  // a custom toString method that only prints
  // out values in the array we're actually using.
  toString() {
    let result = '['
    for (let i = 0; i < this.size; i++) {
      result += this.data[i] + ', '
    }
    return result + ']'
  }

  realToString() {
    return this.data
  }

  append(val) {
    this.data[this.size] = val
    this.size++
  }

  prepend(value) {
    this.insertAtIndex(0, value)
  }

  pop() {
    let result = this.data[this.size - 1]
    this.data[this.size - 1] = null

    this.size--    
    return result
  }

  // O(1) constant read/write methods
  get(index) {
    return this.data[index]
  }

  set(index, value) {
    this.data[index] = value
  }

  // returns the value at the index
  // and removes it from the list, shifting
  // all further elements from the back
  // to the front to fill the hole it left
  // when it gone though it promised me everything
  removeAtIndex(index) {
    let result = this.get(index)
    for (let i = index; i < this.size - 1; i++) {
      // scoot each value one to the left
      this.data[i] = this.data[i + 1]
    }

    this.data[this.size - 1] = null
    this.size--

    return result
  }

  insertAtIndex(index, value) {
    this._checkCapacity()

    for (let i = this.size; i > index; i--) {
      this.data[i] = this.data[i - 1]
    }

    this.data[index] = value
    this.size++
  }

  _checkCapacity() {
    if (this.size === this.data.length) {
      this._grow()
    }
  }

  _grow() {
    console.log('growing from', this.size, 'to', this.size * 2)
    let newArray = new Array(this.size * 2)
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.data[i]                                      
    }
    this.data = newArray
  }
}

let ll = new ArrayList()
printIt()

ll.push(98)
ll.push(99)
printIt()

ll.pop()
printIt()

ll.push(45)
ll.push(46)
ll.push(47)
ll.push(48)
printIt()

ll.removeAtIndex(2)
printIt()

ll.insertAtIndex(0, 1)
ll.insertAtIndex(4, 44)
printIt()

let count = 0
while (count < 35) {
  ll.push(Math.random())
  count++
}

printIt()

function printIt() {
  console.log(ll.toString())
  console.log(ll.realToString())
  console.log()
}
