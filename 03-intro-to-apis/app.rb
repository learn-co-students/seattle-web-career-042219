require 'pry'
require 'rest-client'
require 'json'

print "Enter a book search query: "
query = gets.chomp.split(" ").join("+")

response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{query}")

response_hash = JSON.parse(response)
books = response_hash["items"]

first_book = books[0]

books.each do |book|

  info = book["volumeInfo"]

  if info["title"] && info["authors"] && info["description"]

    book_title = info["title"]
    book_authors = info["authors"].join(", ")
    book_description = info["description"]

    puts "#{book_title}, by #{book_authors}"
    puts "#{book_description[0..100]}..."
    puts
  end

end

binding.pry
0
