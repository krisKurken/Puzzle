import React, { Component } from 'react';
import { Container } from './style';

import Brick from '../brick';

class Board extends Component {

    state={
        movedDiff: false,
        movedIndex: false
    }

    checkMove = (pos, value) => {
        let diff = this.props.emptyPos - pos;

        if (Math.abs(diff) === 1 || Math.abs(diff) === 4) {
            let board = this.props.board;
            board[this.props.emptyPos-1] = value;
            board[pos-1] = false;
            this.props.updateBoard(board, pos);
            this.setState({
                movedDiff: diff,
                movedIndex: this.props.emptyPos-1
            })
        }
    }

    render() {
        return (
            <Container gameOver={this.props.gameOver}>
                {
                    this.props.board.map((value, index) => {
                        return <Brick
                            key={index}
                            value={value}
                            pos={index + 1}
                            checkMove={this.checkMove}
                            diff={index === this.state.movedIndex ? this.state.movedDiff : 0}
                            scramble={this.props.scramble}
                        />
                    })
                }
            </Container>
        );
    }
}

export default Board;
