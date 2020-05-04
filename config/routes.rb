Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'boggle_game/index'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'boggle_game/generate_board_letters'
    end
  end

  # namespace :api do
  #   namespace :v1 do
  #     get 'boggle_game/show'
  #   end
  # end

  # namespace :api do
  #   namespace :v1 do
  #     get 'boggle_game/destroy'
  #   end
  # end

  root 'homepage#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
