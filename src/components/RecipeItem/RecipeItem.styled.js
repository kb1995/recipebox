import styled from 'styled-components'

export const H2 = styled.h2`
    margin: 5px;
    cursor: pointer;
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