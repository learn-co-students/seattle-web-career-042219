class RenameColumnTypePokemons < ActiveRecord::Migration[5.2]
  def change
    rename_column :pokemons, :type, :variety
  end
end
