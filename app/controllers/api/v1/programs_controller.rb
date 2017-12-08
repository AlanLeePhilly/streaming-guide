# comment for codeclimate
class Api::V1::ProgramsController < ApplicationController
  def index
    render json: { programs: Program.all }
  end

  def show
    render json: { program: Program.find(params[:id]) }
  end
end
