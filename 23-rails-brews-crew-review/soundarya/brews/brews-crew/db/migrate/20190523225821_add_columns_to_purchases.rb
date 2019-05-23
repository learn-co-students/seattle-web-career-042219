class AddColumnsToPurchases < ActiveRecord::Migration[5.2]
  def change
    add_column :purchases, :size, :string
    add_column :purchases, :creamer_strength, :string
    add_column :purchases, :special_instructions, :string
  end
end
