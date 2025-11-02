import styled from 'styled-components'
import { palette } from './palette';

export const NameText = styled.h1`
    font-weight: bold;
    font-size: clamp(30px, 5vw, 47.5px);
    margin: 0;
    background: ${props => props.isPink ? palette.darkRedGradient : palette.grayGradient};
    -webkit-background-clip: text;
    color: transparent;
`;
 