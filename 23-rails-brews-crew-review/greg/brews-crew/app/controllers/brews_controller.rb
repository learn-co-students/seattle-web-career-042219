# frozen_string_literal: true

class BrewsController < ApplicationController
  def index
    @brews = Brew.all
  end

  def show
    set_brews
  end

  def new
    @brew = Brew.new
  end

  def create
    @brew = Brew.new(brew_params)
    if @brew.save
      redirect_to @brew
    else
      render :new
    end
  end

  def destroy
    set_brews
    @brew.destroy
    redirect_to brews_path
  end

  def edit
    set_brews
  end

  def update
    set_brews
    if @brew.update(brew_params)
      redirect_to @brew
    else
      render :edit
    end
  end

  def strongest
    @brews = Brew.where(strength: Brew.maximum(:strength))
  end

  private

  def set_brews
    @brew = Brew.find(params[:id])
  end

  def brew_params
    params.require(:brew).permit(:blend_name, :origin, :notes, :price, :strength)
  end
end
