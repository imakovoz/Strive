class Addnametousers < ActiveRecord::Migration[5.1]
  def change
     add_column :users, :firstname, :string, null: false
     add_column :users, :lastname, :string, null: false
     add_column :users, :prof_pic_id, :integer, null: false
  end
end
