class Profpicoptional < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :prof_pic_id, :integer, :null => true
  end
end
