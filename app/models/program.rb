#I am a model
class Program < ApplicationRecord
  has_many :reviews
  has_many :programgenres
  has_many :genres, through: :programgenres
  belongs_to :user

  validates :title, presence: true
  validates :year, presence: true
  validates :rated, presence: true
  validates :run_time, presence: true
  validates :genre, presence: true
  validates :actor, presence: true
  validates :plot, presence: true
  validates :award, presence: true
  validates :poster_url, presence: true
  validates :imdb_id, presence: true
  validates :total_seasons, presence: true
  validates :user_id, presence: true

end
