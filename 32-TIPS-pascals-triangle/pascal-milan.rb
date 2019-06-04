# this file uses combinatorics logic and a third-party gem
# to run this file, type `gem install distribution` then `ruby pascal-milan.rb`
require 'distribution'

def n_choose_k(n, k)
  Math.factorial(n) / (Math.factorial(k) * Math.factorial(n - k))
end

def triangle(row)
  if row == 0
    puts "1"
  elsif row == 1
    puts "1, 1"
  else
    output_row = []

    (0..row).each do |i|
     output_row << n_choose_k(row, i)
    end

    puts output_row.join(", ")

    # Erin addendum: this whole block could be shortened to:
    # puts (0..row).map { |i| n_choose_k(row, i) }.join(", ")
  end
end

triangle(0)
triangle(1)
triangle(2)
triangle(3)
triangle(4)
