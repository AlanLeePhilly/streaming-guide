# These are tests for future features for editing your user page
require 'rails_helper'

feature 'edit profile',%{
   As a user
   I want to edit my profile
   So that I can stand out on this fancy site
} do


  scenario 'vistor tries to navigate to an edit page' do
    visit "/users/edit"

      expect(page).to have_content('Email')
      expect(page).to have_content('Home')
      expect(page).to have_content('Sign In')
      expect(page).to have_content('Sign Up')
      expect(page).to have_content('Password')
  end
  #
  # scenario 'user fills out form with valid values and submits' do
  #   visit edit_user_registration_path
  #   id = user.id
  #   fill_in 'Username', with: 'cbogbog'
  #   fill_in 'Email', with: 'cbog@gmail.com'
  #   fill_in 'Password', with: 'passwordtest'
  #   fill_in 'Confirm Password', with: 'passwordtest'
  #   fill_in 'Current Password', with: user.password
  #
  #   click_on 'Update'
  #
  #   user = User.find(id)
  #   expect(page).to have_content 'Your account has been updated successfully.'
  #   expect(user.username).to eq 'cbogbog'
  #   expect(user.email).to eq 'cbog@gmail.com'
  # end
  # scenario 'confirmation password does not match new password' do
  #   visit edit_user_registration_path
  #   id = user.id
  #   fill_in 'Username', with: 'cbogbog'
  #   fill_in 'Email', with: 'cbog@gmail.com'
  #   fill_in 'Current Password', with: user.password
  #   fill_in 'New Password', with: 'passwordtest'
  #   fill_in 'Confirm Password', with: 'doesnotmatch'
  #
  #   click_on 'Update'
  #
  #   expect(page).to have_content 'Password confirmation doesn\'t match Password'
  # end
  #
  #
  # scenario 'user does not fill out current password' do
  # visit edit_user_registration_path
  # id = user.id
  # fill_in 'Username', with: 'cbogbog'
  # fill_in 'Email', with: 'cbog@gmail.com'
  # fill_in 'Password', with: 'passwordtest'
  # fill_in 'Confirm Password', with: 'passwordtest'
  #
  # click_on 'Update'
  #
  # expect(page).to have_content 'Current password can\'t be blank'
end
