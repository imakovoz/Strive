class Likes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :userid, null: false
      t.references :postable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
