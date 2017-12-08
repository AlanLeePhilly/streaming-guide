# class
class UsersController < ApplicationController
  def index; end

  def show
    @user = User.find(params[:id])
    @current_user = current_user
    @reviews = @user.reviews
  end
end
