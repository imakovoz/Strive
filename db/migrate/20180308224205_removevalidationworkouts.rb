class Removevalidationworkouts < ActiveRecord::Migration[5.1]
  def change
    change_column :workouts, :distance, :integer, :null => true
    change_column :workouts, :distance_uom, :string, :null => true
    change_column :workouts, :duration, :integer, :null => true
    change_column :workouts, :elevation, :integer, :null => true
    change_column :workouts, :elevation_uom, :string, :null => true
  end
end
