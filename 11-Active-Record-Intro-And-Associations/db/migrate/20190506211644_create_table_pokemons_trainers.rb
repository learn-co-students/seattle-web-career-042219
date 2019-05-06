class CreateTablePokemonsTrainers < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons_trainers do |t|
      t.integer :pokemon_id
      t.integer :trainer_id
    end
  end
end
