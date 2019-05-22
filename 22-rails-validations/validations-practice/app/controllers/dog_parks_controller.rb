class DogParksController < ApplicationController
  def index
    @dog_parks = DogPark.all
  end

  def show
    @dog_park = DogPark.find(params[:id])
  end

  def new
    # "ok way" code
    # @dog_park = DogPark.new

    # "best way" code
    if flash[:dog_park_attributes]
      @dog_park = DogPark.new(flash[:dog_park_attributes])
    else
      @dog_park = DogPark.new
    end
  end

  def create
    # "ok way" code
    # @dog_park = DogPark.new(dog_park_params)
    # if @dog_park.valid?
    #   @dog_park.save
    #   redirect_to @dog_park
    # else
    #   render :new
    # end

    # "best way" code
    @dog_park = DogPark.new(dog_park_params)
    if @dog_park.valid?
      @dog_park.save
      redirect_to @dog_park
    else
      flash[:errors] = @dog_park.errors.full_messages
      flash[:dog_park_attributes] = @dog_park.attributes
      redirect_to new_dog_park_path
    end
  end

  private

  def dog_park_params
    params.require(:dog_park).permit(:name, :square_ft, :off_leash)
  end
end
