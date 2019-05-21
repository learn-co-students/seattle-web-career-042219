class AddAuthorIdToBooks < ActiveRecord::Migration[5.2]

  def up
    rename_column :books, :author, :author_id
    change_column :books, :author_id, :integer
  end

  def down
    change_column :books, :author_id, :string
    rename_column :books, :author_id, :author
  end
  
end
