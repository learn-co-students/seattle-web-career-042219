# this file has both recursive and iterative solutions
# to run this file, type `ruby pascal-erin.rb`
require 'pry'

# this is the main pascal's triangle method
def triangle(row)
  # initialize the triangle with row 0 (a single 1)
  list_of_rows = []
  list_of_rows << [1]

  # build the rest of the triangle up to the row we need
  (1..row).each do |row_counter|
    previous_row = list_of_rows[row_counter - 1]
    list_of_rows << compute_row(previous_row)
  end

  puts list_of_rows.last.join(", ")
end

# helper method that takes a row and computes the next row based on it
def compute_row(previous_row)
  new_row = []
  # new row is always 1 longer than previous row
  new_row_length = previous_row.length + 1
  (0...new_row_length).each do |index|
    # first and last numbers are always 1
    if index == 0 || index == new_row_length - 1
      new_row << 1
    else
      new_row << previous_row[index - 1] + previous_row[index]
    end
  end
  new_row
end

# recursive pascal's triangle method.  look how short it is!
def triangle_recursive(row)
  if row == 0
    return [1]
  else
    previous_row = triangle_recursive(row-1)
    return compute_row(previous_row)
  end
end

# the recursive method doesn't print things so we need a separate helper
def triangle_recursive_print(row)
  puts triangle_recursive(row).join(", ")
end

triangle(0)
triangle(1)
triangle(2)
triangle(3)
triangle(4)

puts

triangle_recursive_print(0)
triangle_recursive_print(1)
triangle_recursive_print(2)
triangle_recursive_print(3)
triangle_recursive_print(4)

binding.pry
0
