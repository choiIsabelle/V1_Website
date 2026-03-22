import styled from 'styled-components'
import { palette } from './palette';

export const NameText = styled.h1`
    font-weight: bold;
    font-size: clamp(1.35rem, 4.5vw + 0.5rem, 47.5px);
    margin: 0;
    max-width: 100%;
    overflow-wrap: anywhere;
    /* Tight line-height + background-clip: text clips descenders; give glyphs room */
    line-height: 1.3;
    padding: 0.06em 0 0.14em;
    background: ${props => props.isPink ? palette.darkRedGradient : palette.grayGradient};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
`;
 