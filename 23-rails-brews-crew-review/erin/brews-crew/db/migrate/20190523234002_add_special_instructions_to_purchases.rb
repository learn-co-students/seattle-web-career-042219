class AddSpecialInstructionsToPurchases < ActiveRecord::Migration[5.2]
  def change
    add_column :purchases, :special_instructions, :string
  end
end
