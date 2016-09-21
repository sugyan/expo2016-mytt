Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    get  'timetable', constraints: { format: :json }
    post 'generate'
  end
end
