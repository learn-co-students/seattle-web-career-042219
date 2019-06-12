class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    return "generic animal sound"
  }
}

class Bird extends Animal {
  fly() {
    return "flying!!"
  }
}