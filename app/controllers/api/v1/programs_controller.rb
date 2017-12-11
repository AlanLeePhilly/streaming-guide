# comment for codeclimate
class Api::V1::ProgramsController < ApplicationController
  def index
    render json: { programs: Program.all }
  end

  def show
    @program = Program.find(params[:id])
    @reviews = @program.reviews
    @user = current_user
    render json: {
      program: @program,
      reviews: @reviews,
      user: @user
    }
  end
end
