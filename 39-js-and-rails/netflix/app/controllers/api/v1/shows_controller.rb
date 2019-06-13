class Api::V1::ShowsController < ApplicationController
  def index
    render json: Show.all
  end

  def create
    show = Show.create(title: params['title'], content: params['content'])
    render json: show
  end
end
