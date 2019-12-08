Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :profiles, only: [:index, :show, :create, :new]

  namespace :api do
    namespace :v1 do
      resources :profiles, only: [:index, :show, :create, :new]
    end
  end
end
