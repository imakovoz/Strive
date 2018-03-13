class Addactivitytoroutes < ActiveRecord::Migration[5.1]
  def change
    change_column :routes, :user_id, :integer, :null => false
    add_column :routes, :activity, :string
  end
end
