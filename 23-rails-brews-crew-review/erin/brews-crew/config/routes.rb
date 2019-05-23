Rails.application.routes.draw do
  resources :purchases, only: [:new, :create, :index, :show]
  get 'brews/strongest', to: 'brews#strongest', as: 'strongest_view'
  resources :brews

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
