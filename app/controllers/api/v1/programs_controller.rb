# comment for codeclimate
class Api::V1::ProgramsController < ApplicationController
  protect_from_forgery with: :null_session, if: proc { |c| c.request.format.json? }
  before_action :authorize_user, except: [:index, :create]
  # attempting to authorize user

  def index
    render json: { programs: Program.all }
  end

  def show
    @program = Program.find(params[:id])
    @reviews = @program.reviews.reverse
    @user = current_user
    @usernames = @reviews.map { |i| i.user.user_name }
    binding.pry
    @userVotes = @reviews.votes.select do |vote|
      vote[:user_id] == @user.id
    end
    render json: {
      program: @program,
      reviews: @reviews,
      user: @user,
      usernames: @usernames,
      userVotes: @userVotes
    }
  end

  def create
    @program = Program.new(program_params)
    if current_user
      @user = current_user
      @program.user = @user
    end

    if @program.save
      render json: { program: Program.where(params[:program_id]) }
    else
      render json: { error: @program.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def program_params
    params.require(:program).permit(
      :title, :year, :rated, :run_time,
      :genre, :actor, :plot, :award,
      :poster_url, :imdb_rating,
      :imdb_id, :total_seasons, :user_id)
  end
end
