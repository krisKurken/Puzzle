import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const Wrapper = styled.div`
display: flex;
justify-content: center;
`;

export const Message = styled.h1`
font-family: 'OpenSans bold';
text-align: center;
opacity: 0;
opacity: ${props => props.gameOver && '1'};
margin-bottom: ${props => !props.gameOver && '-40px'};
transition: ${props => props.gameOver ? '.5s ease 2s;' : '.4s ease .5s'};
`;
