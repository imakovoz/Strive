Rails.application.routes.draw do

  get 'api/filter/workouts', to: 'api/workouts#filter_index', as: 'fworkouts', defaults: { format: :json }
  get 'api/filter/posts', to: 'api/posts#filter_index', as: 'fposts', defaults: { format: :json }
  get 'api/filter/routes', to: 'api/routes#filter_index', as: 'froutes', defaults: { format: :json }

  resources :workouts
  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:index, :create]
    resources :workouts, only: [:index, :create]
    resources :routes, only: [:index, :show, :create]
    resources :users, only: [:index, :show, :create, :update] do
      resources :posts, only: [:show, :destroy, :update]
      resources :workouts, only: [:show, :destroy, :update]
      resources :routes, only: [:destroy, :update]
    end
    resource :session, only: [:create, :destroy]
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
end
