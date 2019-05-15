Book.destroy_all

Adapter::GoogleBooks.new("Stephen King").fetch_books
Adapter::GoogleBooks.new("Dr. Seuss").fetch_books
Adapter::GoogleBooks.new("J.R.R. Tolkien").fetch_books
