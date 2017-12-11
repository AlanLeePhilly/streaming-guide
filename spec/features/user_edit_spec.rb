# These are tests for future features for editing your user page
require 'rails_helper'

feature 'edit profile' do
  let!(:user) { FactoryBot.create(:user) }

  scenario 'vistor tries to navigate to an edit page' do
    visit '/users/edit'

    expect(page).to have_content('Email')
    expect(page).to have_content('Home')
    expect(page).to have_content('Sign In')
    expect(page).to have_content('Sign Up')
    expect(page).to have_content('Password')
  end

  scenario 'user edits their account' do
    visit user_session_path
    fill_in 'Email', with: 'cbog@gmail.com'
    fill_in 'Password', with: 'Password'
    click_button 'Sign In'
    visit edit_user_registration_path
    expect(page).to have_content 'Edit'
    expect(find_field('Email').value).to eq 'cbog@gmail.com'
    expect(find_field('Username').value).to eq 'jsmith'
  end

  scenario 'user edits their account but does not enter current password' do
    visit user_session_path
    fill_in 'Email', with: 'cbog@gmail.com'
    fill_in 'Password', with: 'Password'
    click_button 'Sign In'
    visit edit_user_registration_path
    click_button 'Update'
    expect(page).to have_content 'Current password can\'t be blank'
  end

  scenario 'user edits their account' do
    visit user_session_path
    fill_in 'Email', with: 'cbog@gmail.com'
    fill_in 'Password', with: 'Password'
    click_button 'Sign In'
    visit edit_user_registration_path
    fill_in 'Current password', with: 'Password'
    click_button 'Update'
    expect(page).to have_content 'Your account has been updated successfully.'
  end
end
