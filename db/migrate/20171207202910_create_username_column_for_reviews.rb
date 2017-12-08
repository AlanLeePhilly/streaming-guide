class CreateUsernameColumnForReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :username, :string
  end
end
