Rails.application.routes.draw do
  devise_for :users
  root to: "static_pages#root"

  namespace :api, defauts: { format: :json} do
    resources :quizzes, only: [:index, :show, :update, :destroy] do
      resources :quiz_tables, only: [:index, :show]
    end

    resources :quiz_tables, only: [:update, :destroy] do
      resources :questions, only: [:index, :show]
    end
  end
end
