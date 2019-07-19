Rails.application.routes.draw do
  resources :users, only: [:create, :show]
  get '/profile', to: 'users#show'
  post '/login', to: 'application#login'
end
