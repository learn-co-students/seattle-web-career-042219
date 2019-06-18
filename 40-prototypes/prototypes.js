function Die(faces) {
  this.faces = faces
}

Die.prototype.roll = function() {
  let result = Math.floor(Math.random() * this.faces)
  return result
}

Die.prototype.beef = function() {
  return 'beef'
}

let d6 = new Die(6)
let otherotherD6 = new Die(6)

Die.prototype.roll = () => 92

console.log(d6.roll())
console.log(otherotherD6.roll())

function crappyDie(faces) {
  return {
    roll: function() {
      console.log('regular old crappy die')
      let result = Math.floor(Math.random() * faces)
      return result
    }
  }
}

let otherD6 = new crappyDie(6)
let cheater = new crappyDie(6)
cheater.roll = () => 6

console.log(otherD6.roll())
console.log(cheater.roll())

function FancyDie(faces) {
  this.faces = faces
}

FancyDie.prototype = new Die()
FancyDie.prototype.roll = () => {
  return '~' + Die.prototype.roll() + '~'
}

let ff = new FancyDie(6)
console.log(ff.roll())
console.log(ff.beef())

String.prototype.pluralize = function() {
  return this + 's'
}
console.log('cow'.pluralize())

String.prototype.times = function(cb) {
  for (let i = 0; i < parseInt(this); i++) {
    cb()
  }
}

'8'.times(() => console.log('neato'))