class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :program_id, null: false
      t.integer :user_id, null: false
      t.string :headline, null: false
      t.string :body, null: false
      t.integer :rating, null: false
      t.integer :vote_count, default: 0

      t.timestamps null: false
    end
  end
end
