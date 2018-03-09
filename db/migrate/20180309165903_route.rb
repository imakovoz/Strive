class Route < ActiveRecord::Migration[5.1]
  def change
    create_table :routes do |t|
      t.integer :workout_id, null: false
      t.string :title, null:false
      t.string :description
      t.integer :estimated_duration
      t.integer :distance
      t.integer :elevation_gain
      t.string :polyline 

      t.timestamps
    end
  end
end
