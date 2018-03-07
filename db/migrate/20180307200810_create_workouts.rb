class CreateWorkouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :body
      t.integer :distance, null: false
      t.string :distance_uom, null: false
      t.integer :duration, null: false
      t.integer :elevation, null: false
      t.string :elevation_uom, null: false
      t.datetime :date, null: false
      t.string :activity, null: false
      t.string :subactivity

      t.timestamps
    end
  end
end
