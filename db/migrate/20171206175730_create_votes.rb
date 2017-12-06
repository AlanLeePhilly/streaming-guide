class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.integer :program_id, null: false
      t.integer :user_id, null: false
      t.integer :value, null: false

      t.timestamps null: false
    end
  end
end
