import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
height: 400px;
width: 400px;
border-radius: 5px;
border: 2px solid black;
background-color: #008B8B;
height: ${props => props.gameOver && '0px'};
transition: height 1s ease .6s;
overflow: hidden;
z-index: 1;
@media (max-width: 450px) {
    height: 200px;
    width: 200px;
    height: ${props => props.gameOver && '0px'};
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
`;
