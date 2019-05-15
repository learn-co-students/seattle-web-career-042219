class AuthorsController < ApplicationController
  set :views, 'app/views/authors/'

  get '/authors/:id' do
    @author = Author.find(params[:id])
    erb :show
  end

  get '/authors' do
    @authors = Author.all
    erb :index
  end
end
