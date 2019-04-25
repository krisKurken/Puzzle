import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 96px;
width: 96px;
margin: 2px;
border: ${props => props.empty && '2px solid black'};
box-sizing: border-box;
border-radius: 3px;
cursor: pointer;
-webkit-tap-highlight-color: rgba(0,0,0,0);
background-color: ${props => props.empty && '#008080'};
animation: ${
    props => props.moved !== 0 &&
    props.moved === 1 ? css`${moveLeft} .5s ease` :
    props.moved === -1 ? css`${moveRight} .5s ease` :
    props.moved === 4 ? css`${moveUp} .5s ease` :
    props.moved === -4 && css`${moveDown} .5s ease`
};
transform: ${props => props.scramble && 'rotate(360deg)'};
transition: transform 1s ease;
@media (max-width: 450px) {
    height: 48px;
    width: 48px;
    margin: 1px;
    animation: ${
        props => props.moved !== 0 &&
        props.moved === 1 ? css`${moveLeftSmall} .5s ease` :
        props.moved === -1 ? css`${moveRightSmall} .5s ease` :
        props.moved === 4 ? css`${moveUpSmall} .5s ease` :
        props.moved === -4 && css`${moveDownSmall} .5s ease`
    };
}
`;

export const Value = styled.div`
font-weight: bold;
font-size: 20px;
font-family: 'openSans bold';
user-select: none;
animation: ${props => props.scramble && css`${hideAndShow} 1s ease`};
`;

const hideAndShow = keyframes`
0% {
    opacity: 0;
}
20% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const moveLeft = keyframes`
from {
    transform: translateX(-100px);
}

to {
    transform: translateX(0px);
}
`;

const moveRight = keyframes`
from {
    transform: translateX(100px);
}

to {
    transform: translateX(0px);
}
`;

const moveUp = keyframes`
from {
    transform: translateY(-100px);
}

to {
    transform: translateY(0px);
}
`;

const moveDown = keyframes`
from {
    transform: translateY(100px);
}

to {
    transform: translateY(0px);
}
`;

const moveLeftSmall = keyframes`
from {
    transform: translateX(-50px);
}

to {
    transform: translateX(0px);
}
`;

const moveRightSmall = keyframes`
from {
    transform: translateX(50px);
}

to {
    transform: translateX(0px);
}
`;

const moveUpSmall = keyframes`
from {
    transform: translateY(-50px);
}

to {
    transform: translateY(0px);
}
`;

const moveDownSmall = keyframes`
from {
    transform: translateY(50px);
}

to {
    transform: translateY(0px);
}
`;
