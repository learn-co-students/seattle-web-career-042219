class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
