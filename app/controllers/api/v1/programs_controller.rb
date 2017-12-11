# comment for codeclimate
class Api::V1::ProgramsController < ApplicationController
  def index
    render json: { programs: Program.all }
  end

  def show
    @user = current_user
    @program = Program.find(params[:id])
    @reviews = @program.reviews
    render json: {
      program: @program,
      reviews: @reviews,
      user: @user
    }
  end
end
