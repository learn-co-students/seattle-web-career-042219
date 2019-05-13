class ApplicationController < Sinatra::Base
  set :views, 'app/views/'
  get '/' do
   "Hello World"
 end

 get '/index' do
   @books = Book.all
   erb :index
 end

 get '/show/:id' do
   byebug
   @book = Book.find(params[:id])
   erb :show
 end

end
