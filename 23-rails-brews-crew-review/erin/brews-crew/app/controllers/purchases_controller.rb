class PurchasesController < ApplicationController
  def new
    @purchase = Purchase.new
  end

  def create
    @purchase = Purchase.create(purchase_params)
    redirect_to purchases_path
  end

  def index
    @purchases = Purchase.all
  end

  def show
    @purchase = Purchase.find(params[:id])
    @brew = @purchase.brew
  end

  private

  def purchase_params
    params.require(:purchase).permit! # <-- unsafe but we're lazy
  end
end
