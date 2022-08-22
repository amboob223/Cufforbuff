Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :quiz
  resources :cuffers
  resources :bluffers
  #get 'cuffers/:id',to: 'cuffers#show', as: 'cuffer'

  # sum = 55+18+50+100+25+40+60+100+5+40+25+92+30+30+70+15+20+5+25+60+40+20+45+30

end
