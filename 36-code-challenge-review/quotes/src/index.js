// It might be a good idea to add event listener to make sure this file 
// only runs after the DOM has finshed loading. 

const URL = 'http://localhost:3000/quotes'

main()

function main() {
  loadQuotes()
}

// fetch() the quotes
function loadQuotes() {
  fetch(URL)
  .then(res => res.json())
  .then(quotes => {
    displayQuotes(quotes)
  })
  .catch(err => {
    console.log('Error:', err)
  })
}

// accepts an array of quote objects and iterates
// through them to add each one to the page
function displayQuotes(quotes) {
  quotes.forEach(quote => {
    displayQuote(quote)
  })
}

// Accepts a quote object and constructs HTML to append
// the quote to the page.
// {
//   "id": 1,
//   "quote": "The here and now is all we have, and if we play it right it's all we'll need.",
//   "author": "Ann Richards"
// },
// <li class='quote-card'>
//   <blockquote class="blockquote">
//     <p class="mb-0">${quote.quote}</p>
//     <footer class="blockquote-footer">${quote.author}</footer>
//     <br>
//     <button class='btn-success'>Likes: <span>${quote.likes}</span></button>
//     <button class='btn-danger'>Delete</button>
//   </blockquote>
// </li>
function displayQuote(quote) {
  // not all quotes may have a number of likes associated with them yet.
  if (quote.likes === undefined) {
    quote.likes = 0
  }

  // create each of the elements
  let li = document.createElement('li')
  let blockquote = document.createElement('blockquote')
  let p = document.createElement('p')
  let footer = document.createElement('footer')
  let br = document.createElement('br')
  let span = document.createElement('span')
  let likeButton = document.createElement('button')
  let deleteButton = document.createElement('button')

  p.textContent = quote.quote
  footer.textContent = quote.author
  deleteButton.textContent = 'Delete'

  likeButton.textContent = 'Likes: '
  span.textContent = quote.likes
  likeButton.appendChild(span)

  li.classList.add('quote-card')
  blockquote.classList.add('blockquote')
  p.classList.add('mb-0')
  footer.classList.add('blockquote-footer')
  likeButton.classList.add('btn-success')
  deleteButton.classList.add('btn-danger')

  likeButton.addEventListener('click', () => {
    likeQuote(quote, span)
  })

  deleteButton.addEventListener('click', () => {
    deleteQuote(quote, li)
  })

  // wire them all together
  li.appendChild(blockquote)
  blockquote.appendChild(p)
  blockquote.appendChild(footer)
  blockquote.appendChild(br)
  blockquote.appendChild(likeButton)
  blockquote.appendChild(deleteButton)

  let ul = document.getElementById('quote-list')
  ul.appendChild(li)
}

function likeQuote(quote, likesSpan) {
  quote.likes++

  fetch(URL + '/' + quote.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(quote)
  })
  .then(res => res.json())
  .then(json => {
    console.log('like success:', json)
    likesSpan.textContent = quote.likes
  })
  .catch(err => {
    console.log('like error:', err)
  })
}

// sends a DELETE request to the server
// and removes the quote from the page
function deleteQuote(quote, quoteElement) {
  fetch(URL + '/' + quote.id, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(json => {
    console.log('delete success:', json)
    quoteElement.remove()
  })
  .catch(err => {
    console.log('delete error:', err)
  })
}