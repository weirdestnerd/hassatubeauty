Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    post '/notify_new_email', controller: :coming_soon, action: :notify_new_email
  end
end
