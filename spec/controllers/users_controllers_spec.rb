require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  let!(:user) { FactoryBot.create(:user) }

    describe 'GET user' do
      it 'should render show template' do
        get :show, params: { id: user.id }
        expect(response).to render_template('show')
      end
    end

    describe 'Get index' do
      it 'should render a index template' do
        get :index
        response.should redirect_to 'http://test.host/'
      end
    end
end
