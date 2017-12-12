# class
class UsersController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index; end

  def show
    @user = User.find(params[:id])
    @current_user = current_user
    @reviews = @user.reviews
  end
end
