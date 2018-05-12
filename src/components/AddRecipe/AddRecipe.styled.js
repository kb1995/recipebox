import styled from 'styled-components'

export const Input = styled.input`
    width: 100%;


    &[type=text]:focus{
;

    }

    &[type=text]:hover{
        outline:0
    }

    &:focus{
        outline: 0;
    }
`

export const Label = styled.label`
    margin-bottom: 10px;
`