class CreateProgramgenres < ActiveRecord::Migration[5.1]
  def change
    create_table :programgenres do |t|
      t.integer :genre_id, null: false
      t.integer :program_id, null: false

    end
  end
end
