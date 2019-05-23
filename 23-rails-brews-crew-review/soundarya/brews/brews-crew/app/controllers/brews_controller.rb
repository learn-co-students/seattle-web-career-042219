class BrewsController < ApplicationController
  def index
    @brews = Brew.all
  end

  def show
    @brew = Brew.find(params[:id])
  end

  def new
    @brew = Brew.new
  end

  def create
    # @brew = Brew.create(brew_params)
    @brew = Brew.new(brew_params)
    if @brew.save
        redirect_to @brew
    else
      render :new
    end
  end

  def edit
    @brew = Brew.find(params[:id])
  end

  def update
    byebug
    @brew = Brew.find(params[:id])
    @brew.update(brew_params)
    redirect_to @brew
  end

  def strongest
    # @brew = Brew.maximum()
    @brew = Brew.all.max_by{ |brew| brew.strength}
  end

  private
  def brew_params
    params.require(:brew).permit(:blend_name, :origin, :notes,:strength)
    # params.require(:brew).permit!
  end
end
