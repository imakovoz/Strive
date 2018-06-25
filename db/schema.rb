# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180625082617) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer "userid", null: false
    t.text "body", null: false
    t.string "commentable_type"
    t.bigint "commentable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "userid", null: false
    t.string "postable_type"
    t.bigint "postable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["postable_type", "postable_id"], name: "index_likes_on_postable_type_and_postable_id"
  end

  create_table "posts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title"
    t.text "body", null: false
    t.string "privacy"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "routes", force: :cascade do |t|
    t.integer "workout_id"
    t.string "title", null: false
    t.string "description"
    t.float "estimated_duration"
    t.float "distance"
    t.float "elevation_gain"
    t.string "polyline"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.string "activity"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.string "profile_pic_file_name"
    t.string "profile_pic_content_type"
    t.integer "profile_pic_file_size"
    t.datetime "profile_pic_updated_at"
  end

  create_table "workouts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title", null: false
    t.text "body"
    t.integer "distance"
    t.string "distance_uom"
    t.integer "duration"
    t.integer "elevation"
    t.string "elevation_uom"
    t.datetime "date", null: false
    t.string "activity", null: false
    t.string "subactivity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
