/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Loading = styled.div`
    text-align: center;
    margin-top: 150px;
    font-size: 50px;
    font-family: 'Press Start 2P', cursive;

    @keyframes color-animation {
    0% {
       color: #eae203;
    }
    50% {
       color: #ffffff;
    } 
    100% {
       color: #11dcfa;
    } 
 }

& {
    animation: color-animation .2s infinite linear alternate;
}
`;
export const PCimg = styled.img`
    display: block;
    margin: 0 auto;
    margin-top: -130px;
    margin-left: 150px;
`;
