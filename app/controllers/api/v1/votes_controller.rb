# comment for codeclimate
class Api::V1::VotesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index

  end
  def create
    @vote = Vote.new(vote_params)
    @user = current_user
    @vote.user = @user
    @dbVote= Vote.where('user_id = ? AND review_id = ?', @vote.user_id, @vote.review_id)[0]
    if @dbVote
      if @dbVote.value == @vote.value
        @dbVote.value = 1
      else
        @dbVote.value = @vote.value
      end
      @dbVote.save
      @vote = @dbVote
    else @vote.save
    end
    if @vote.persisted?
      @votes = @vote.review.votes
      @vote.review.vote_count = @votes.map(&:value).inject(0, &:+)-@votes.length
      @vote.review.save
      @reviews = Program.find(params[:program_id]).reviews.order(:created_at).reverse
      @userVotes = Vote.where('user_id = ? AND program_id = ?', @user.id, params[:program_id])
      render json: {
        reviews: @reviews,
        userVotes: @userVotes
      }
    else
      render json: { error: @vote.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:value, :review_id, :program_id)
  end
end
