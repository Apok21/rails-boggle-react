class Api::V1::BoggleGameController < ApplicationController
  def index
  end

  def generate_board_letters
    board_letters = helpers.generate_board_letters
    render json: board_letters
    
  end

  # def show
  # end

  # def destroy
  # end
end
