import styled, { css, keyframes } from 'styled-components';

export const Container = styled.button`
margin: 20px;
border: 2px solid black;
border-radius: 3px;
background: none;
color: inherit;
padding: 10;
font: inherit;
cursor: pointer;
outline: inherit;
z-index: 1;
font-family: 'openSans bold';
animation: ${props => props.gameOver && css`${showMeSlow} 4s ease`};
-webkit-tap-highlight-color: rgba(0,0,0,0);
@media (max-width: 450px) {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
`;

const showMeSlow = keyframes`
0% {
    opacity: 0;
}
50% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;
