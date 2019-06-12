class Point
  attr_reader :xx, :yy

  def initialize(xx, yy)
    @xx = xx
    @yy = yy

    @@all = []
  end

  def distance_to(other)
    dx = self.xx - other.xx
    dy = self.yy - other.yy
    return Math.sqrt(dx * dx + dy * dy)
  end

  def self.distance(p1, p2)
    dx = p1.xx - p2.xx
    dy = p1.yy - p2.yy
    return Math.sqrt(dx * dx + dy * dy)
  end
end

seattle = Point.new(47.6062, 122.3321)
portland = Point.new(45.5155, 122.6793)
puts Point.distance(seattle, portland)
puts seattle.distance_to(portland)
