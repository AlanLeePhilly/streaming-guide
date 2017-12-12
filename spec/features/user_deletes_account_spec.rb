# Delete tests
require 'rails_helper'

feature 'delete profile' do
  let!(:user) { FactoryBot.create(:user) }

  scenario 'user sees delete account button' do
    visit user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'Password'
    click_button 'Sign In'
    visit edit_user_registration_path
    expect(page).to have_content 'Edit'

    expect(page).to have_content('Cancel my account')
  end
end
