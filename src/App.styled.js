import styled from 'styled-components';
import media from './theme/media'


export const Heading = styled.h1`
    text-align: center;
    font-size: 26px;
    margin: 25px 0;
`


export const Div1 = styled.div`
    text-align: center;
    margin: 0 10px;
    flex: 1;

    ${media.desktop`
        margin: 10% 10px;
`}
`

export const Div2 = styled.div`
    text-align: center;
    margin: 0 10px;
    flex: 1.5;
`