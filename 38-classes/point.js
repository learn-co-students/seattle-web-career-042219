class Point {
  constructor(xx, yy) {
    this.xx = xx
    this.yy = yy

    Point.all.push(this)
  }

  distanceTo(other) {
    let dx = this.xx - other.xx
    let dy = this.yy - other.yy
    return Math.sqrt(dx * dx + dy * dy)
  }

  static distance(p1, p2) {
    let dx = p1.xx - p2.xx
    let dy = p1.yy - p2.yy
    return Math.sqrt(dx * dx + dy * dy)
  }
}

Point.all = []    

seattle = new Point(47.6062, 122.3321)
portland = new Point(45.5155, 122.6793)
console.log(Point.distance(seattle, portland))
console.log(seattle.distanceTo(portland))
console.log(Point.all)
console.log('' + seattle)
console.log('' + portland)