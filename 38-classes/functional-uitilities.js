// Immediately invoked function expression
// IIFE "iffy"
let _ = (function() {
  console.log('immidiately running this function')
  function size(arrOrObject) {
    console.log('size')
    if (Array.isArray(arrOrObject)) {
      return arrOrObject.length
    } else {
      return Object.keys(arrOrObject).length
    }
  }

  console.log('continuing to run')
  function last(arr) {
    console.log('last')
    return arr[arr.length - 1]
  }

  console.log('returning object')
  return {
    size: size,
    last: last
  }
})()

console.log(_.size([]))
console.log(_.size({a: 1, b: 2, c: 3}))
// console.log(_.last([1, 2, 3, 4, 5, 99]))
console.log(_)
console.log(_.size)