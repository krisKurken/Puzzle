import React, { Component } from 'react';
import { Container, Wrapper, Message } from './style';

import Board from '../board';
import Button from '../button';


class Game extends Component {

    state = {
        board: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, false],
        emptyPos: 16,
        gameOver: false,
        scramble: false
    };

    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevState.scramble === true) {
            setTimeout(() => {
                this.setState({scramble: false});
            }, 1000);
        }
    }

    componentDidMount(){
        this.scrambleBoard();
    }

    scrambleBoard = async (animation = false) => {
        animation && this.setState({scramble: true});
        await this.solveBoard();
        let newBoard = this.state.board;

        for (let i = newBoard.length - 2; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [newBoard[i], newBoard[j]] = [newBoard[j], newBoard[i]];
        }
        this.updateBoard(newBoard, 16);
    }

    solveBoard = () => {
        this.updateBoard([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, false], 16);
    }

    updateBoard = (newBoard, emptyPos) => {
        this.setState({
            board: newBoard,
            emptyPos: emptyPos,
            gameOver: this.gameOver(newBoard)
        });
    }

    gameOver = (board) => {
        let answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, false];
        return board.toString() === answer.toString();
    }

    resetGame = () => {
        this.setState({
            board: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, false],
            emptyPos: 16,
            gameOver: false
        })
    }

    render() {
        return (
            <Container>
                <Message gameOver={this.state.gameOver}>
                    Congrats!
                </Message>
                <Message gameOver={!this.state.gameOver}>
                    Puzzle!
                </Message>
                <Board
                    updateBoard={this.updateBoard}
                    board={this.state.board}
                    emptyPos={this.state.emptyPos}
                    gameOver={this.state.gameOver}
                    scramble={this.state.scramble}
                />
                <Wrapper>
                    <Button
                        text={this.state.gameOver ? 'Play again' : 'Shuffle'}
                        func={this.scrambleBoard}
                        gameOver={this.state.gameOver}
                    />
                </Wrapper>
            </Container>
        );
    }
}

export default Game;
