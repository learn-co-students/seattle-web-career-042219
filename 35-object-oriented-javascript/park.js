class Park {
  constructor(id, name, url) {
    this.id = id
    this.name = name
    this.url = url
  }

  attach(parent) {
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

    h2.textContent = this.name
    img.src = this.url

    div.appendChild(h2)
    div.appendChild(d2)
      d2.appendChild(deleteButton)
      d2.appendChild(editButton)
    div.appendChild(img)

    parent.appendChild(div)
  }
}