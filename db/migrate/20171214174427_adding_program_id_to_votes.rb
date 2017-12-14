class AddingProgramIdToVotes < ActiveRecord::Migration[5.1]
  def change
    add_column :votes, :program_id, :integer, null: false
  end
end
