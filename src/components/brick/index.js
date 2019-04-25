import React, { Component } from 'react';
import { Container, Value } from './style';


class Brick extends Component {

    handleClick = () => {
        this.props.checkMove(this.props.pos, this.props.value);
    }

    render() {
        return (
            <Container
                empty={this.props.value}
                moved={this.props.diff}
                onClick={this.handleClick}
                scramble={this.props.scramble}
                pos={this.props.pos}
                >
                {
                    this.props.value &&
                    <Value scramble={this.props.scramble}>
                        {this.props.value}
                    </Value>
                }
            </Container>
        );
    }
}

export default Brick;
