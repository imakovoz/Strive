class Routeworkoutoptional < ActiveRecord::Migration[5.1]
  def change
    change_column :routes, :workout_id, :integer, :null => true
  end
end
