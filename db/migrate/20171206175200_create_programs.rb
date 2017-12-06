class CreatePrograms < ActiveRecord::Migration[5.1]
  def change
    create_table :programs do |t|
      t.string :title, null: false
      t.string :year, null: false
      t.string :rated, null: false
      t.string :run_time, null: false
      t.string :genre, null: false
      t.string :actor, null: false
      t.string :plot, null: false
      t.string :award, null: false
      t.string :poster_url, null: false
      t.string :imdb_rating, null: false
      t.string :imdb_id, null: false
      t.integer :total_seasons, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
