# comment for codeclimate
class Api::V1::VotesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index

  end
  def create
    @vote = Vote.new(vote_params)
    @user = current_user
    @vote.user = @user
    @dbVote= Vote.where('user_id = ? AND review_id = ?', @vote.user_id, @vote.review_id)
    binding.pry
    if @dbVote
      @dbVote.value = @vote.value
      @dbVote.update
      @reviews = Program.find(params[:program_id]).reviews.reverse
      render json: { reviews: @reviews }
   elsif @vote.save
        @vote.review.vote_count = @vote.review.vote_count + @vote.value - 1
        @vote.review.save
        @reviews = Program.find(params[:program_id]).reviews.reverse
        render json: { reviews: @reviews }
    else
      render json: { error: @vote.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update

  end

  private

  def vote_params
    params.require(:vote).permit(:value, :review_id)
  end
end
