# comment for codeclimate
class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    program = Program.find(params[:program_id])
    reviews = program.reviews
    render json: { reviews: reviews }
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    @user = current_user
    @review.user = @user

    if @review.save
      flash[:notice] = 'Thanks for the Submission!'
      render json: { review: @reviews }
    else
      flash[:notice] = @review.errors.full_messages.join(', ')

      render json: { error: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:headline, :body, :rating, :program_id, :user_id)
  end
end
