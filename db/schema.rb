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

ActiveRecord::Schema.define(version: 20171214174427) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "genres", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "programgenres", force: :cascade do |t|
    t.integer "genre_id", null: false
    t.integer "program_id", null: false
  end

  create_table "programs", force: :cascade do |t|
    t.string "title", null: false
    t.string "year", null: false
    t.string "rated", null: false
    t.string "run_time", null: false
    t.string "genre", null: false
    t.string "actor", null: false
    t.string "plot", null: false
    t.string "award", null: false
    t.string "poster_url", null: false
    t.string "imdb_rating", null: false
    t.string "imdb_id", null: false
    t.integer "total_seasons", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "program_id", null: false
    t.integer "user_id", null: false
    t.string "headline", null: false
    t.string "body", null: false
    t.integer "rating", null: false
    t.integer "vote_count", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "user_name", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "favorite_show"
    t.string "avatar"
    t.string "role", default: "member", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "votes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "value", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "review_id", null: false
    t.integer "program_id", null: false
    t.index ["user_id", "review_id"], name: "index_votes_on_user_id_and_review_id", unique: true
  end

end
