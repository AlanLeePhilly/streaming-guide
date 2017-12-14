# class
class UsersController < ApplicationController
  before_action :authorize_user, except: [:show]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @current_user = current_user
    @reviews = @user.reviews

  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to root_url, notice: 'User successfully deleted'
  end

  private

  def authorize_user
    if current_user == nil || current_user.role != 'admin'
      redirect_to root_url, notice: 'Access Denied!!!!!!!'
    end
  end
end
