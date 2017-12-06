# I am a model
class Genre < ApplicationRecord
  has_many :programs, through: :programgenre
  validates :name, presence: true
end
