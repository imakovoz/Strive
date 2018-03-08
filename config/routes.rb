Rails.application.routes.draw do

  resources :workouts
  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:index, :create]
    resources :workouts, only: [:index, :create]
    resources :users, only: [:index, :show, :create] do
      resources :posts, only: [:show, :destroy, :update]
      resources :workouts, only: [:show, :destroy, :update]
    end
    resource :session, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
end
