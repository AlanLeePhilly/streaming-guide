require 'rails_helper'

RSpec.describe Api::V1::ProgramsController, type: :controller do
  describe 'GET index' do
    it 'should render json obj of all programs' do
      p1= FactoryBot.create(:program)
      get 'index'
      json = JSON.parse(response.body)
      # binding.pry
      expect(json["programs"][0]["title"]).to eq("Orange Is the New Black")
    end
  end
  describe 'GET show' do
    it 'should render json obj of one program and relevant reviews' do
      p1= FactoryBot.create(:program)
      p2= FactoryBot.create(:program)
      FactoryBot.create_list(:review, 3, program: p1)
      get :show, params: {id: p1.id}
      json = JSON.parse(response.body)
      # binding.pry
      expect(json["program"]["title"]).to eq("Orange Is the New Black")
      expect(json["reviews"].length).to eq(3)
    end
  end
end
