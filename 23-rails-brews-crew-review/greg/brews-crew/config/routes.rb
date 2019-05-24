# frozen_string_literal: true

Rails.application.routes.draw do
  get '/brews/strongest', to: 'brews#strongest'
  resources :brews
  resources :purchases
end
