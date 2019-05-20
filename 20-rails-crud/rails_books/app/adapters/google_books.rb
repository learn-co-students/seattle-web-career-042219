module Adapter
  class GoogleBooks
    BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

    attr_reader :author

    def initialize(author_name)
      @author = author_name
    end

    def fetch_books
      books = JSON.parse(RestClient.get(author_url))

      books['items'].each do |item|
        if item['volumeInfo']['authors'] && item['volumeInfo']['authors'].include?(author)

          book = ::Book.new
          book.author = author
          book.title = item['volumeInfo']['title']
          book.snippet = item['volumeInfo']['description']

          book.save
        end
      end
    end

    private

    def author_url(max_results = 20)
      "#{BASE_URL}#{author_sanitizer(author)}&maxResults=#{max_results}"
    end

    def author_sanitizer(author)
      author.gsub(/\W+/, '').downcase
    end
  end
end
