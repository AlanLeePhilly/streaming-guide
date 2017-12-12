# Sign Up tests
require 'rails_helper'

feature 'sign up',%{
   As a visitor
   I want to sign up
   So that I can create an account
 } do

   scenario 'specify valid and required information' do
     visit new_user_registration_path
       fill_in 'First Name', with: 'Jon'
       fill_in 'Last Name', with: 'Smith'
       fill_in 'Username', with: 'JSmith'
       fill_in 'Email', with: 'user@example.com'
       fill_in 'Password', with: 'password'
       fill_in 'Password Confirmation', with: 'password'
       click_button 'Sign Up'

     expect(page).to have_content('Welcome! You have signed up successfully.')
   end

   scenario 'required information is not supplied' do
       visit new_user_registration_path
       click_button 'Sign Up'

     # expect(page).to have_content("Text-field can not be blank")
     # expect(page).to have_content("Invalid Username or password")
   end

   scenario 'password confirmation does not match confirmtion' do
     visit new_user_registration_path
     fill_in 'First Name', with: 'Jon'
     fill_in 'Last Name', with: 'Smith'
     fill_in 'Username', with: 'JSmith'
     fill_in 'Email', with: 'user@example.com'
     fill_in 'Password', with: 'password'
     fill_in 'Password Confirmation', with: 'passwor'
     click_button 'Sign Up'

     expect(page).to have_content("Password confirmation doesn't match")
   end
end
