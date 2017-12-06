#I am a model
class Programgenre < ApplicationRecord
  belongs_to :genre
  belongs_to :program

  validates :genre_id, presence: true
  validates :program_id, presence: true
end
