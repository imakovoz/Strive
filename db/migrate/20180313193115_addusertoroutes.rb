class Addusertoroutes < ActiveRecord::Migration[5.1]
  def change
    add_column :routes, :user_id, :integer
  end
end
