# frozen_string_literal: true

class PurchasesController < ApplicationController
  def index
    @purchases = Purchase.all
    end

  def show
    set_purchases
  end

  def new
    @purchase = Purchase.new
  end

  def create
    @purchase = Purchase.new(purchase_params)
    if @purchase.save
      redirect_to @purchase
    else
      render :new
    end
  end

  def destroy
    set_purchases
    @purchase.destroy
    redirect_to purchases_path
  end

  def edit
    set_purchases
  end

  def update
    set_purchases
    if @purchase.update(purchase_params)
      redirect_to @purchase
    else
      render :edit
    end
  end

  private

  def set_purchases
    @purchase = Purchase.find(params[:id])
  end

  def purchase_params
    params.require(:purchase).permit(:customer)
  end
end
