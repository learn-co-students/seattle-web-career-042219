let URL = 'http://www.reddit.com/r/seattlewa/.json'

function main() {
  attachListeners()
  fetchPosts()
}
main()

function attachListeners() {
  const form = document.getElementById('search-form')
  form.addEventListener('submit', handleFilterSubmit)
}

function handleFilterSubmit(ev) {
  ev.preventDefault()

  const input = document.getElementById('filter')
  const query = input.value
  filterList(query)
}

function filterList(query) {
  const ul = document.getElementById('results')
  for (let i = 0; i < ul.children.length; i++) {
    const li = ul.children[i]
    const title = li.textContent.toLowerCase()
    if (title.includes(query.toLowerCase())) {
      li.classList.remove('hidden')
    } else {
      li.classList.add('hidden')
    }
  }
}

function fetchPosts() {
  fetch(URL)
  .then(response => {
    return response.json()
  })
  .then(json => {
    addAllPosts(json.data.children)
  })
}

function addAllPosts(posts) {
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i]
    addPost(post)
  }
}

function addPost(post) {
  let li = document.createElement('li')
  li.textContent = post.data.title

  let ul = document.getElementById('results')
  ul.appendChild(li)
}