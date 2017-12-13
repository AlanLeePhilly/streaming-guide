require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe 'GET show' do
    let!(:p1) { FactoryBot.create(:program) }
    let!(:reviews_list) { FactoryBot.create_list(:review, 3, program: p1) }

    it 'should render json obj of one program and relevant reviews' do
      get :show, params: { program_id: p1.id, id: reviews_list.first }
      json = JSON.parse(response.body)

      expect(json['reviews'].length).to eq(3)
    end
  end
end
