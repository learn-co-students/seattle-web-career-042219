function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    func(item)    
  }
}

// performs an action on an array and returns a new array
// convert every item in an array to exactly one new value
// [1, 2, 3] map * 2 => [2, 4, 6]
function map(arr, func) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    let result = func(item)
    newArray.push(result)
  }
  return newArray
}

// returns a new array of items that match a certain criteria
// the criteria is items that return true when they're passed to
// the provided callback function
function filter(arr, func) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    let result = func(item)
    if (result === true) {
      newArray.push(item)
    }
  }
  return newArray
}

let aa = [1, 2, 3, 4, 5, 6]
forEach(aa, (item) => {
  console.log(item)
})