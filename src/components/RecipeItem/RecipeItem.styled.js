import styled from 'styled-components'

export const H2 = styled.h2`
    font-size: 22px;
    margin: 5px;
    cursor: pointer;
`

export const Div = styled.div`
    text-align: center;
    margin: 10px;
    background-color: #ff9999;
    padding: 5px 0;

    opacity: 0.7;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    &:hover{
        opacity: 1;
        padding: 15px 0;
    }
`

export const Delete = styled.button`
   border: 2px solid red;
   background-color: white;
   padding: 5px;
   margin: 5px;
   text-align: center;
   text-decoration: none;
   cursor: pointer;

   transition-duration: 0.4s;

   &:hover{
    background-color: red;
    color: white;
   } 

   &:focus {outline:0;}
`