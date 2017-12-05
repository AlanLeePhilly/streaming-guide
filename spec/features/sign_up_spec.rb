require 'rails_helper'


feature 'sign up' , %Q{
  As a visitor
  I want to sign up
  So that I can create an account
} do

  scenario 'specify valid and required information' do
      visit new_user_registration_path
      click link 'Sign up'
      fill_in 'First Name', with: 'Jon'
      fill_in 'Last Name', with: 'Smith'
      fill_in 'User Name', with: 'JSmith'
      fill_in 'Email', with: 'user@example.com'
      fill_in 'Password', with: 'password'
      fill_in 'Password Confirmation', with: 'password'
      click_button 'Sign Up'

      expect(page).to have_content("You have signed up successfully!")
      expect(page).to have_content("Sign Out")
  end



  scenario 'required information is not supplied' do
      visit new_user_registration_path
      click_button 'Sign Up'

      expect(page).to have_content("Text-field can not be blank")
      expect(page).to have_content("Invalid email or password")
  end

  scenario 'password confirmation does not match confirmtion' do
    visit new_user_registration_path
    click link 'Sign up'
    fill_in 'First Name', with: 'Jon'
    fill_in 'Last Name', with: 'Smith'
    fill_in 'Email', with: 'user@example.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password Confirmation', with: 'passwor'
    click_button 'Sign Up'

    expect(page).to have_content("Password fields must match")
  end

end
