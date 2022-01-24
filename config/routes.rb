Rails.application.routes.draw do
  devise_for :users, :controllers => {:sessions => "user_sessions"}
  devise_scope :user do
      get 'user_sessions/login_guest' => 'user_sessions#login_guest'
  end

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json} do
    resources :quizzes, only: [:index, :show, :update, :destroy, :create] do
      resources :quiz_tables, only: [:index, :show]
    end

    resources :quiz_plays, only: [:update]

    resources :quiz_tables, only: [:update, :destroy] do
      resources :questions, only: [:index, :show, :update]
    end
  end
end

