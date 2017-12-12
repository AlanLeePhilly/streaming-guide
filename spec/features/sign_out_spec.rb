# Sign out tests
require 'rails_helper'

feature 'sign out' ,%{
  As a account holder
  I want to sign out
  So that I can end my current session from cache
 } do
   let!(:user) { FactoryBot.create(:user) }


  scenario "account holder signs out" do
    visit user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'Password'
    click_button 'Sign In'
    click_link 'Sign Out'

    expect(page).to have_content("Signed out successfully")
  end
end
