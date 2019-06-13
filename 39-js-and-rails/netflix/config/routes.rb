Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/date', to: 'custom#now'
  get '/roullette', to: 'custom#roullette'
  namespace :api do
    namespace :v1 do
      resources :shows, only: [:index, :update, :create]
    end
  end
end
