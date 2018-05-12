import styled from 'styled-components'

export const Input = styled.input`
    width: 95%;
    margin: 10px;
    border: 2px solid black;
    background-color: #ffe5e5;

    padding: 10px 0;
    text-align: center;

    opacity: 0.7;
    transition-duration: 0.3s;

    &:focus {
        outline:0; 
        opacity: 1;
    }
`