require 'test_helper'

class Api::V1::BoggleGameControllerTest < ActionController::TestCase

  test "should return 4x4 matrix array" do
    get :generate_board_letters
    json = JSON.parse(response.body)
    assert json.is_a? Array
    assert json.count == 4
    assert json.flatten.count == 16
  end

  test "validate word" do
    bl = [
      %w[e c t b],
      %w[u p a i],
      %w[a e u y],
      %w[g t k h]
    ]
    
    # 'apt' should be found in the above board
    post :submit_word, params: { board_letters: bl, word: 'apt' }, as: :json
    json = JSON.parse(response.body)
    assert json['result'] == 'apt'

    # 'test' should not be found in the above board
    post :submit_word, params: { board_letters: bl, word: 'test' }, as: :json
    json = JSON.parse(response.body)
    assert json['result'] != 'test'

  end
end
