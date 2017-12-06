class AddReviewIdToVotes < ActiveRecord::Migration[5.1]
  def up
    add_column :votes, :review_id, :integer, null: false
    remove_column :votes, :program_id
  end

  def down
    add_column :votes, :program_id, :integer, null: false
    remove_column :votes, :review_id
  end
end
