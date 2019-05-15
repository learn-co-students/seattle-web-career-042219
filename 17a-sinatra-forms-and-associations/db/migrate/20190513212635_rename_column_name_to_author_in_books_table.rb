class RenameColumnNameToAuthorInBooksTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :books, :name, :author
  end
end
