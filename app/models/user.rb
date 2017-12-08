# This is a model
class User < ActiveRecord::Base
  mount_uploader :avatar, AvatarUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :reviews
  has_many :votes
  has_many :programs
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :trackable, :validatable
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :user_name, presence: true

  validates :avatar, integrity: true
  validates :avatar, processing: true

   # Include default devise modules. Others available are:
   # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :trackable, :validatable
end
