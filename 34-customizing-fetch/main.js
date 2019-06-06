const URL = 'http://localhost:3000/numbers'

document.addEventListener('DOMContentLoaded', () => {
  main()
})

function main() {
  console.log('loaded')
  fetchNumbers()
  attachListeners()
}

function attachListeners() {
  let form = document.getElementById('form')
  form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    handleSubmit(ev.target.elements)
  })
}

function fetchNumbers() {
  fetch(URL)
  .then(res => {
    return res.json()
  })
  .then(json => {
    console.log('got numbers:', json)
    displayNumbers(json)
  })
}

function handleSubmit(formInputs) {
  let number = formInputs['number'].value
  let reason = formInputs['reason'].value

  // optimistic rendering. let's display it on
  // the page immediately, even before we've even
  // started the network request.
  displayNumber({number: number, reason: reason})

  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({number: number, reason: reason})
  })
  .then(res => {
    return res.json()
  })
  .then(json => {
  })
}

function displayNumbers(numbers) {
  numbers.forEach(num => {
    displayNumber(num)
  })
}

function displayNumber(number) {
  let div = document.createElement('div')
  let header = document.createElement('h3')
  let description = document.createElement('p')

  div.classList.add('number')

  header.textContent = number.number
  description.textContent = number.reason
  
  div.appendChild(header)
  div.appendChild(description)

  let container = document.getElementById('numbers')
  container.appendChild(div)
}

// steps to get data from server and show it on the page
// - create an <ul> to add things to
// - fetch the data, convert to json
// - a function to create an li from the data
// - iterate through data and add each one to the page

// { "id": 1, "number": 2, "reason": "it's just cool." },
// { "id": 2, "number": 11, "reason": "two ones in a row" },
// { "id": 3, "number": 1337, "reason": "hacker" },
// { "id": 4, "number": 42, "reason": "the answer to life, the universe and everything" }