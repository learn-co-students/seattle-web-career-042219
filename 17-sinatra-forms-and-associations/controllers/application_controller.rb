class ApplicationController < Sinatra::Base
  set :views, 'app/views/'
  set :method_override, true

  get '/' do
   "Hello World"
 end

 get '/books' do
   @books = Book.all
   erb :index
 end

 get '/book/new' do
   erb :new
 end

 post '/books' do
   byebug
   @book = Book.create(author: params[:author],title: params[:title], snippet: params[:snippet])
   redirect '/books'
  # "Hello World"
 end

 get '/book/:id/update' do
   @book = Book.find(params[:id])
   erb :update
 end

 patch '/book/:id' do
   # byebug
   @book = Book.find(params[:id])
   @book.update(author: params[:author],title: params[:title], snippet: params[:snippet])
   redirect "/books"
 end

 get '/book/:id' do
   # byebug
   @book = Book.find(params[:id])
   erb :show
 end

#DELETE ADDED OUTSIDE OF LECTURE. BUTTON IN FORMS ALSO ADDED OUTSIDE OF LECTURE.
 delete '/book/:id' do
   @book = Book.find(params[:id])
   redirect '/books'
 end

 #DON'T DO : specify object route to follow convention
 # get '/new' do
 # end

end
