# comment for codeclimate
class Api::V1::ReviewsController < ApplicationController
  def index
    render json: { review: Review.all }
  end

  def show
    render json: { review: Review.where(params[:program_id]) }
  end
end
