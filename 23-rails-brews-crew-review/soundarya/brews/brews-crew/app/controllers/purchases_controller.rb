class PurchasesController < ApplicationController
  def index
    @purchases = Purchase.all
  end

  def show
    @purchase = Purchase.find(params[:id])
  end

  def new
    @purchase = Purchase.new
  end

  def create
    @purchase = Purchase.create(purchase_params)
    redirect_to @purchase
  end

  def edit
    @purchase = Purchase.find(params[:id])
  end

  def update
    @purchase = Purchase.find(params[:id])
    if @purchase.update(purchase_params)
      #if true returns object that was updates
      #else it returns nil
      redirect_to @purchase
    else
      render :edit
    end
  end

  private
  def purchase_params
    params.require(:purchase).permit(:customer_name, :price, :brew_id)
    # params.require(:purchase).permit!
  end
end
