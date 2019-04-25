import React, { Component } from 'react';
import { Container } from './style';


class Button extends Component {

    state={
        clicked: false
    }

    handleClick = () => {
        this.props.func();
        let btnElem = document.querySelector('#multi-btn');
        btnElem.disabled = true;

        setTimeout(() => {
            btnElem.disabled = false;
        }, 2100);
    }
    render() {
        return (
            <Container
                gameOver={this.props.gameOver}
                onClick={this.handleClick}
                id='multi-btn'
                >
                    {this.props.text}
                </Container>
            );
        }
    }

    export default Button;
