Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :profiles, only: [:show, :create]

  namespace :api do
    namespace :v1 do
      resources :profiles, only: [:show, :create]
    end
  end
end
