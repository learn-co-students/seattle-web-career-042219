// create a global variable to keep track of the movies
// so we can filter through all the movies later
let MOVIES = []

function loadMovies() {
  console.log('1. fetching movies')
  fetch('http://localhost:3000/movies')
  .then(response => {
    console.log('2. converting to json')
    return response.json()
  })
  .then(json => {
    console.log('3. got movies:', json)
    displayMovies(json)
  })
  console.log('4. end of function')
}

// accepts an array of movies
function displayMovies(movies) {
  MOVIES = movies
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i]
    addMovie(movie)
  }
}

function addMovie(movie) {
  let title = movie.title
  let year = movie.year

  let li = document.createElement('li')
  li.textContent = title + '(' + year + ')'

  let button = document.createElement('button')
  button.textContent = 'remove'
  button.addEventListener('click', () => {
    li.remove()
  })

  li.appendChild(button)

  let moviesList = document.getElementById('movies')
  moviesList.appendChild(li)
}

function handleSubmit(ev) {
  ev.preventDefault() 

  clearMovieList()

  // access the query and filter the list down to
  // just movies where the tile or the year matches
  // our query
  let query = document.getElementById('filter').value
  query = query.toLowerCase()

  MOVIES.forEach(movie => {
    // I'm explicitly casting movie.year to a String to make sure
    // it has the string-like .includes method (which numbers do not have)
    if (movie.title.toLowerCase().includes(query) ||
        ('' + movie.year).toLowerCase().includes(query)) {
      addMovie(movie)
    }
  })
}

function clearMovieList() {
  let moviesList = document.getElementById('movies')

  // continue this while loop as long as there's
  // anything in the moviesList element
  while (moviesList.firstChild) {
    // remove each one until they are all gone
    moviesList.firstChild.remove()
  }
}

function main() {
  loadMovies()

  let form = document.getElementById('movie-filter')
  form.addEventListener('submit', handleSubmit)
}

main()