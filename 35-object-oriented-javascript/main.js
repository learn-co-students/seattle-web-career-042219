const URL = 'http://localhost:3000/parks'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    main()
    attachListeners()
  }, 300)
})

function main() {
  loadParks()
}

function attachListeners() {
  let form = document.getElementById('new-park-form')
  form.addEventListener('submit', handleNewParkSubmit)
}

function loadParks() {
  fetch(URL)
  .then(res => res.json())
  .then(json => {
    // once we get the server response we can hide
    // the loading indicator.
    hideLoader()

    displayParks(json)
  })
  .catch(err => {
    hideLoader()
    
    let errorDiv = document.getElementById('error')
    let errorMessage = document.getElementById('error-message')

    errorDiv.classList.remove('hidden')
    errorMessage.textContent = err
  })
  // same shortcut below also applies here
  // .then(displayParks)
}

function hideLoader() {
  let loading = document.getElementById('loading')
  loading.classList.add('hidden')
}

function displayParks(parks) {
  parks.forEach((park) => {
    displayPark(park)
  })

  // instead of wrapping the function call in an anonymous function
  // we can refer to another function and forEach will pass park as
  // a parameter there, just like it passes park as a parameter to
  // the anonymous function. COOL!
  // parks.forEach(displayPark)
}

function displayPark(park) {
  // don't user innerHTML because it's susceptible to rendering
  // evil unsanitized user input!!
  // let html = `<div>
  //   <h2>${park.name}</h2>
  //   <img src="${park.url}" />
  // </div>
  // `

  // let ddiv = document.createElement('div')
  // let pparks = document.getElementById('parks')
  // pparks.appendChild(ddiv) 

  // ddiv.innerHTML = html
  // return

  let div = document.createElement('div')
  let h2 = document.createElement('h2')
  let d2 = document.createElement('div')
  let deleteButton = document.createElement('button')
  let editButton = document.createElement('button')
  let img = document.createElement('img')

  deleteButton.textContent = 'delete'
  deleteButton.addEventListener('click', () => {
    setTimeout(() => {
      deletePark(park, div)
    }, 1000)
    deleteButton.setAttribute('disabled', true)
  })

  editButton.textContent = 'edit'
  editButton.addEventListener('click', () => {
    setTimeout(() => {
      editPark(park, div, editButton, h2, img)
    }, 1000)
    editButton.setAttribute('disabled', true)
  })

  h2.textContent = park.name
  img.src = park.url

  div.appendChild(h2)
  div.appendChild(d2)
    d2.appendChild(deleteButton)
    d2.appendChild(editButton)
  div.appendChild(img)

  let parks = document.getElementById('parks')
  parks.appendChild(div)
}

function handleNewParkSubmit(ev) {
  ev.preventDefault()

  let name = ev.target.elements['name'].value
  let url = ev.target.elements['url'].value
  createPark(name, url)
}

function createPark(name, url) {
  let payload = {name: name, url: url}
  let config = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  }

  fetch(URL, config)
  .then(res => res.json())
  .then(json => {
    displayPark(json)
  })
  .catch(err => {
    hideLoader()
        
    let errorDiv = document.getElementById('error')
    let errorMessage = document.getElementById('error-message')

    errorDiv.classList.remove('hidden')
    errorMessage.textContent = err
  })
}

function deletePark(park, parkElement) {
  let config = {
    method: 'DELETE',
  }

  fetch(URL + '/' + park.id, config)
  .then(res => res.json())
  .then(json => {
    parkElement.remove() 
  })
  .catch(err => {
    hideLoader()
        
    let errorDiv = document.getElementById('error')
    let errorMessage = document.getElementById('error-message')

    errorDiv.classList.remove('hidden')
    errorMessage.textContent = err
  })
}

function editPark(park, parkDiv, editButton, nameEl, imgEl) {
  let form = document.createElement('form')
  let nameInput = document.createElement('input')
  let urlInput = document.createElement('input')
  let saveButton = document.createElement('button')
  let cancelButton = document.createElement('button')

  nameInput.value = park.name
  urlInput.value = park.url

  form.appendChild(nameInput)
  form.appendChild(urlInput)
  form.appendChild(saveButton)
  form.appendChild(cancelButton)

  parkDiv.appendChild(form)

  saveButton.textContent = 'save'
  saveButton.type = 'submit'
  form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    let name = nameInput.value
    let url = urlInput.value
    savePark(park.id, name, url, nameEl, imgEl)
  })

  cancelButton.textContent = 'cancel'
  cancelButton.addEventListener('click', () => {
    form.remove() 
    editButton.removeAttribute('disabled')
  })
}

function savePark(parkId, name, url, nameEl, imgEl) {
  let payload = {name: name, url: url}
  let config = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  }

  fetch(URL + '/' + parkId, config)
  .then(res => res.json())
  .then(json => {
    nameEl.textContent = name
    imgEl.src = url
  })
  .catch(err => {
    hideLoader()
        
    let errorDiv = document.getElementById('error')
    let errorMessage = document.getElementById('error-message')

    errorDiv.classList.remove('hidden')
    errorMessage.textContent = err
  })
}