require 'rails_helper'

RSpec.describe Api::V1::ProgramsController, type: :controller do
  describe 'GET index' do
    it 'should render json obj of all programs' do
      p1= FactoryBot.create(:program)
      get 'index'
      json = JSON.parse(response.body)
      expect(json["programs"][0]["title"]).to eq("Orange Is the New Black")
    end
  end

  describe 'GET show' do
    it 'should render json obj of one program and relevant reviews' do
      p1 = FactoryBot.create(:program)
      p2 = FactoryBot.create(:program)
      FactoryBot.create_list(:review, 3, program: p1)
      get :show, params: { id: p1.id }
      json = JSON.parse(response.body)
      expect(json['program']['title']).to eq('Orange Is the New Black')
      expect(json['reviews'].length).to eq(3)
    end
  end

  describe 'POST create' do
    it 'should ' do
      user = FactoryBot.create(:user)
      params = {
        program: {
          title: 'testtitle',
          year: 'testyear',
          rated: 'testrated',
          run_time: '127m',
          genre: 'horror',
          actor: 'Alan',
          plot: 'testplot',
          award: 'trophy',
          poster_url: 'test.jpg',
          imdb_rating: '5 outta 5',
          imdb_id: 'tt1234567',
          total_seasons: 6,
          user_id: user.id
        },

        user: User.where({ id: user.id })
      }
      pre = Program.count

      post :create, params: params
      # expect(Program.count).to eq(pre + 1)
      expect(response).to have_http_status :ok
    end
  end
end
