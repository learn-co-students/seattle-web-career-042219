class CreateTableBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :name
      t.string :title
      t.string :snippet
    end
  end
end
