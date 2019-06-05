let xx = 99
let yy = 99

// there's a difference
// between
// xx++ and ++xx
// "prefix" vs "postfix"
// operators
// 1. evaluates then adds
// 2. adds then evaluates
console.log(xx++)
console.log(++yy)

console.log(xx)
console.log(yy)

// using x++ here
// will save the original
// value of x
// not the incremented
let o1 = {
  price: x++
}

x = x + 1
let oo = {
  price: x
}