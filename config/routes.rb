Rails.application.routes.draw do
  # devise_for :create_users
  root 'static_pages#index'
  devise_for :users
  resources :users, only: [:show, :index, :destroy]

  resources :programs, :reviews, :votes, :genres, :programgenres

  namespace :api do
    namespace :v1 do
      resources :programs, only: [:index, :show, :create, :destroy] do
        resources :reviews do
          resources :votes, only: [:index, :create]
        end
      end
    end
  end
end
