class AddingIndexToVotes < ActiveRecord::Migration[5.1]
  def change
    add_index(:votes, [:user_id, :review_id], unique: true)
  end
end
