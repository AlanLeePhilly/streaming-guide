# comment for codeclimate
class Api::V1::ProgramsController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format.json? }

  def index
    render json: { programs: Program.all }
  end

  def show
    @program = Program.find(params[:id])
    @reviews = @program.reviews
    render json: {
      program: @program,
      reviews: @reviews
    }
  end

  def create
    @program = Program.new(program_params)
    @user = current_user
    @program.user = @user

    if @program.save
      render json: { program: Program.where(params[:program_id]) }
    else
      render json: { error: @program.errors.full_messages }, status: :unprocessable_entity
    end
  end

private
  def program_params
    params.require(:program).permit(:title, :year, :rated, :run_time, :genre, :actor, :plot, :award, :poster_url, :imdb_rating, :imdb_id, :total_seasons, :user_id)
  end
end
