# I am a model
class Review < ApplicationRecord
  belongs_to :user
  belongs_to :program
  has_many :votes

  validates :program_id, presence: true
  validates :user_id, presence: true
  validates :headline, presence: true
  validates :body, presence: true
  validates :rating, inclusion: { in: 0..10 }
  validates :vote_count, presence: true, numericality: true

end
