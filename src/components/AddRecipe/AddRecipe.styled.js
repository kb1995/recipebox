import styled from 'styled-components'

export const Input = styled.input`
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: #333;

    &[type=text]:focus{


    }

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