class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.string :privacy

      t.timestamps
    end
  end
end
