import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner'
import Instructions from './Instructions'
import Game from './Game'

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            game_is_on: false,
            messageToUser: '',
            messageType: 'blue',
            board_letters: [],
            correct_words: [],
            attempted_words: [],
            total_score: 0,
            timer_start: Date.now() + 180000,
            inputDisabled: false
        };
    }
    componentDidMount() {
        const url = "/api/v1/boggle_game/generate_board_letters";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.')
            })
            .then(response => this.setState({ board_letters: response }))
    };

    restartGame(e) {
        e.preventDefault()

        if (confirm("You'll lose all your progress. Are you sure ?")) {
            this.startGame(e)
        }
    };

    backToInstructions(e) {
        e.preventDefault()

        if (confirm("You'll lose all your progress. Are you sure ?")) {
            this.setState({ game_is_on: false })
        }
    }

    startGame(e) {
        const url = "/api/v1/boggle_game/generate_board_letters";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.')
            })
            .then(response => this.setState({
                game_is_on: true,
                board_letters: response,
                messageToUser: '',
                correct_words: [],
                attempted_words: [],
                total_score: 0,
                inputDisabled: false,
                timer_start: Date.now() + 180000
            }))
    }

    stopGame(e) {
        alert("Your total score is " + this.state.total_score)
        this.setState({
            inputDisabled: true,
            messageToUser: "You scored " + this.state.total_score
        })
    }

    render() {
        const body = (
            this.state.game_is_on ?
                <Game
                    boardLetters={this.state.board_letters}
                    restartGame={this.restartGame.bind(this)}
                    stopGame={this.stopGame.bind(this)}
                    backToInstructions={this.backToInstructions.bind(this)}
                    // submitWord={this.submitWord.bind(this)}
                    inputDisabled={this.state.inputDisabled}
                    correctWords={this.state.correct_words}
                    totalScore={this.state.total_score}
                    messageToUser={this.state.messageToUser}
                    messageType={this.state.messageType}
                    startedTime={this.state.timer_start}
                /> :
                <Instructions startGame={this.startGame.bind(this)} />
        )
        return (
            <div className="main">
                <Banner />
                {body}
                <div>
            </div>
            </div>
        )

    }

}
export default Index