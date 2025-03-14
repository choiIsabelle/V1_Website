import styled from 'styled-components'
export const NameText = styled.h1`
    font-weight: bold;
    font-size: clamp(30px, 5vw, 50px);
    margin: 0;
    background:  ${props => props.isPink ? 'linear-gradient(90deg,#4a0c25 0%,#a91212 100%)' : 'linear-gradient(90deg,#919191 0%,#919191 100%)'};
    -webkit-background-clip: text;
    color: transparent;
`;