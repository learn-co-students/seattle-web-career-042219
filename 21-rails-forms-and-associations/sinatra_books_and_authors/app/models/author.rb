class Author < ActiveRecord::Base
  has_many :books

  def book_count
    books.count
  end
end
