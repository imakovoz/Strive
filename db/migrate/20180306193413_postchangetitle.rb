class Postchangetitle < ActiveRecord::Migration[5.1]
  def change
    change_column :posts, :title, :string, :null => true
  end
end
