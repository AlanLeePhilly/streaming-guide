Rails.application.routes.draw do
  # devise_for :create_users
  root 'static_pages#index'
  devise_for :users
  resources :users, only: [:show]

  resources :programs, :reviews, :votes, :genres, :programgenres

  namespace :api do
    namespace :v1 do
      resources :programs, only: [:index, :show, :create] do
        resources :reviews
      end
    end
  end
end
