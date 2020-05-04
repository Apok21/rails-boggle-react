class Api::V1::BoggleGameController < ApplicationController
  def index
  end

  def generate_board_letters
    board_letters = helpers.generate_board_letters
    render json: board_letters
    
  end

  def submit_word
    word_in_board = helpers.check_word_in_board
    if word_in_board
      result = helpers.check_word

      render json: {
        submitted_word: params[:word],
        result: result
      }
    else
      render json: {
        submitted_word: params[:word],
        result: ''
      }
    end
  end

  # def show
  # end

  # def destroy
  # end
end
