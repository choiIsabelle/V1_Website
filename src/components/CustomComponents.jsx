import styled from 'styled-components'
import { palette } from './palette';

export const NameText = styled.h1`
    font-weight: bold;
    font-size: clamp(1.35rem, 4.5vw + 0.5rem, 47.5px);
    margin: 0;
    max-width: 100%;
    overflow-wrap: anywhere;
    line-height: 1.15;
    background: ${props => props.isPink ? palette.darkRedGradient : palette.grayGradient};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;
 