Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:create, :index, :show, :destroy, :update]
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
end
