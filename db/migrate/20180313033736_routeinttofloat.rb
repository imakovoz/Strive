class Routeinttofloat < ActiveRecord::Migration[5.1]
  def change
    change_column :routes, :estimated_duration, :float
    change_column :routes, :distance, :float
    change_column :routes, :elevation_gain, :float
  end
end
