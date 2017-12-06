Rails.application.routes.draw do
  # devise_for :create_users
  root 'static_pages#index'
  devise_for :users
end
