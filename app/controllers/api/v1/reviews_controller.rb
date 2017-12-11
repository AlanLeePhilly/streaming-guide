# comment for codeclimate
class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token


  def index
    render json: { review: Review.all }
  end

  def show
    render json: { review: Review.where(params[:program_id]) }
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    @user = current_user
    @review.user = @user

    if @review.save
      render json: { review: @reviews }
    else
      render json: { error: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:headline, :body, :rating, :program_id, :user_id)
  end
end
