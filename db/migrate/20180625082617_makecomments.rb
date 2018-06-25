class Makecomments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :userid, null: false
      t.text :body, null: false
      t.references :commentable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
