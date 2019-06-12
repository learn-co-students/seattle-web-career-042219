function click() {
  console.log('click')
}

function bang() {
  console.log('BANG!')
}

let choice = click
if (Math.random() < 1/6) {
  choice = bang
}
choice()

function buyMilk() { console.log('buying milk')}
function doLaundry() { console.log('doing laundry')}
function mowLawn() { console.log('mow lawn')}
let chores = [buyMilk, doLaundry, mowLawn]
let chores = [buyMilk(), doLaundry(), mowLawn()]
for (let i = 0; i < chores.length; i++) {
  let func = chores[i]
  func()
}