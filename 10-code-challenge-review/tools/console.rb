require_relative '../config/environment.rb'

annie = Musical.new("Annie", "New York City")
little_shop = Musical.new("Little Shop of Horrors","Los Angeles")

neil_simon = Theater.new("Neil Simon Theatre", "New York City")
hippodrome = Theater.new("Hippodrome Theatre", "Baltimore")

p1 = Performance.new("2019-05-02", annie, neil_simon)
p2 = Performance.new("2019-05-01", annie, neil_simon)
p3 = Performance.new("2019-05-02", annie, hippodrome)

puts "Annie + Neil Simon is hometown setting? (expect true)"
puts p1.hometown_setting?
puts

puts "Annie + Hippodrome is hometown_setting? (expect false)"
puts p3.hometown_setting?
puts

# note: this was written after the review session ended
Musical.all_introductions
puts

# we tested a lot of things in pry rather than in the console
# so, we typed things like:
# > annie.performances (outputs a list of 3 performance objects)
# > annie.theaters (outputs a list of 2 theaters, since 2 performances were at the same theater)
# > little_shop.performances (outputs an empty array)
# > little_shop.theaters (outputs an empty array)
# > neil_simon.performances (outputs a list of 2 performance objects)
# > neil_simon.musicals (outputs a list of 1 musical object)


binding.pry
0
