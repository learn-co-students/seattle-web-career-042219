class CreateTableTrainers < ActiveRecord::Migration[5.2]
  def change
    create_table :trainers do |t|
      t.integer :level
      t.string :name
      t.string :home_city
      t.string :team
    end
  end
end
