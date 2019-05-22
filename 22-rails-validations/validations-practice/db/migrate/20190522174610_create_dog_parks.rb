class CreateDogParks < ActiveRecord::Migration[5.2]
  def change
    create_table :dog_parks do |t|
      t.string :name
      t.integer :square_ft
      t.boolean :off_leash

      t.timestamps
    end
  end
end
