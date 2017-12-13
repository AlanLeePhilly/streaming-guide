# comment for codeclimate
class Api::V1::ProgramsController < ApplicationController
  protect_from_forgery with: :null_session, if: proc { |c| c.request.format.json? }
  before_action :authorize_user, except: [:index, :show, :create]

  def index
    render json: { programs: Program.all }
  end

  def show
    @program = Program.find(params[:id])
    @reviews = @program.reviews
    @usernames = @reviews.map { |i| i.user.user_name }
    @user = current_user
    render json: {
      program: @program,
      reviews: @reviews,
      user: @user,
      usernames: @usernames
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

  def destroy
    @program = Program.find(params[:id])
    @program.destroy
    render json: { message: 'cool' }
  end

  private

  def program_params
    params.require(:program).permit(
      :title, :year, :rated, :run_time,
      :genre, :actor, :plot, :award,
      :poster_url, :imdb_rating,
      :imdb_id, :total_seasons, :user_id)
  end

  def authorize_user
    if current_user.role != 'admin'
      render json: { error: ['Unauthorized to delete this program'] }, status: 403
    end
  end
end
