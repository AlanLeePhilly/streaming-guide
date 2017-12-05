require 'rails_helper'


feature 'sign out' , %Q{
  As a account holder
  I want to sign out
  So that I can end my current session from cache
} do

  scenario "account holder signs out" do
    click_button 'Sign Out'

    expect(page).to have_content("Succesfully Signed Out")
  end
end
