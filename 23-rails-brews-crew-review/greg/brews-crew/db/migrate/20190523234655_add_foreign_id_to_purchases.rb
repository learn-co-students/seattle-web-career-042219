# frozen_string_literal: true

class AddForeignIdToPurchases < ActiveRecord::Migration[5.2]
  def change
    add_column :purchases, :brew_id, :integer
  end
end
