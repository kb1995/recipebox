import styled from 'styled-components'
import media from '../../theme/media'

export const Input = styled.input`
    width: 90%;
    text-align: center;
    font-size: 18px;
    color: #333;

    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
    font-family: 'Roboto Mono', monospace;

    &[type=text]:hover{
        outline:0
    }

    &:focus{
        outline: 0;
    }
`

export const Label = styled.label`
    display:inline-block;
    margin: 10px 0;

    font-size: 14px;
    font-weight: bold;
    color: #333;
`

export const AddButton = styled.button`
    background-color: #333;
    color: white;
    padding: 10px 15px;
    border: none;
    margin: 10px;
    cursor: pointer;
    border: 1px solid white;

    transition: 0.2s;
    transition-timing-function: ease-in-out;

    &:hover{
        background-color: white;
        color: #333;
        border: 1px solid #333;
    }
`

export const Centered = styled.div`
    ${media.desktop`
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #ff9999;
        padding: 80px 120px;
        border-radius: 2%;
    `}
`