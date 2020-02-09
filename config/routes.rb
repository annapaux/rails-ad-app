Rails.application.routes.draw do
  resources :activity_logs
  resources :click_logs
  resources :ads

  get 'welcome/home'
  root 'welcome#home'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

end
