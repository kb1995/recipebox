import styled from 'styled-components'

export const Input = styled.input`
    width: 95%;
    margin: 10px;
    border: 1px solid black;
    background-color: #ffe5e5;

    padding: 10px 0;
    text-align: center;
    font-size: 16px;
    font-weight: 600;

    opacity: 0.7;
    transition-duration: 0.3s;

    &:focus {
        outline:0; 
        opacity: 1;
    }

    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
    font-family: 'Roboto Mono', monospace;
`