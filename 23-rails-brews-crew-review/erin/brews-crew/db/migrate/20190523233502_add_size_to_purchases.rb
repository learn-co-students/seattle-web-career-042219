class AddSizeToPurchases < ActiveRecord::Migration[5.2]
  def change
    add_column :purchases, :size, :string
  end
end
