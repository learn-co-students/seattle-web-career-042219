class BrewsController < ApplicationController
  def index
    @brews = Brew.all
  end

  def show
    @brew = Brew.find(params[:id])
  end

  def destroy
    Brew.destroy(params[:id])
    redirect_to brews_path
  end

  def new
    @brew = Brew.new
  end

  def create
    @brew = Brew.create(brew_params)
    redirect_to @brew
  end

  def edit
    @brew = Brew.find(params[:id])
  end

  def update
    @brew = Brew.find(params[:id])
    @brew.update(brew_params)
    redirect_to @brew
  end

  def strongest
    @strongest_brews = Brew.strongest
  end

  private

  def brew_params
    params.require(:brew).permit(:blend_name, :origin, :notes, :strength)
  end

  # t.string "blend_name"
  # t.string "origin"
  # t.string "notes"
  # t.integer "strength"
end
