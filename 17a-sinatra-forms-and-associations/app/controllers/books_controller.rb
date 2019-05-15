class BooksController < ApplicationController
  set :views, 'app/views/books/'

  get '/books' do
    @books = Book.all
    erb :index
  end

  get '/books/new' do
    erb :new
  end

  post '/books' do
    @book = Book.create(author_id: params[:author],title: params[:title], snippet: params[:snippet])
    redirect '/books'
  end

  get '/books/:id/edit' do
    @book = Book.find(params[:id])
    erb :edit
  end

  patch '/books/:id' do
    @book = Book.find(params[:id])
    @book.update(author: params[:author],title: params[:title], snippet: params[:snippet])
    redirect "/books"
  end

  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end

  #DELETE ADDED OUTSIDE OF LECTURE. BUTTON IN FORMS ALSO ADDED OUTSIDE OF LECTURE.
  delete '/books/:id' do
    @book = Book.find(params[:id])
    @book.destroy
    redirect '/books'
  end

   #DON'T DO : specify object route to follow convention
   # get '/new' do
   # end
end
