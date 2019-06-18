import ArrayList from 'ArrayList'

function gaps(list, n) {
  let sorted = new ArrayList()
  for (let i = 0; i < list.length; i++) {
    let value = list[i]
    let index = findPosition(sorted, value)
    sorted.insertAtIndex(index, value)
  } 
  
  
}

function findPosition(sorted, value) {
  // special case for an empty list, or for putting in the front
  if (sorted.length === 0 || vaue < sorted[0]) {
    return 0
  }

  for (let i = 0; i < sorted.length - 1; i++) {
    if (value < sorted[i + 1]) {
      return i + 1
    }
  }

  // special case for putting it at the end of the list
  return list.length
}