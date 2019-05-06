class CreateTablePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |table|
      table.string :name
      table.string :type
      table.integer :hp
    end
  end
end
