Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  scope :api do 
    resources(:passengers)
    resources(:tickets)
    resources(:airlines)
  end

  get '*path', to: "application#react_app", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  
end
