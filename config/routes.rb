Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:index]
    resources :workouts, only: [:index]
    resources :users, only: [:create, :index, :show] do
      resources :posts, only: [:create, :show, :destroy, :update]
      resources :workouts, only: [:create, :show, :destroy, :update]
    end
    resource :session, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
end
