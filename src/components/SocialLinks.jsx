import styled from 'styled-components'
import { GitHubIcon } from './svgs/GithubIcon'
import { EmailIcon } from './svgs/EmailIcon'
import { LinkedInIcon } from './svgs/LinkedInIcon'

const SocialLinksContainer = styled.div`
  display: flex;
  padding: 0.5rem 1rem 1rem 0.5rem;
  gap: 1rem;
  flex-direction: row;
  border-radius: 6px;
  background-color: ${props => props.dark ? 'black' : 'white'};
`;

const StyledIcon = styled.div`
  width: 25px;
  height: 25px;
  display: inline-flex;
  transition: transform 0.2s ease-in-out, fill 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const MakeStyledIcons = ({ icons, height = 25, width = 25, dark }) => {
  return (
    <>
      {icons.map((Icon, index) => (
        <StyledIcon key={index}>
          <Icon width={width} height={height} dark={dark} />
        </StyledIcon>
      ))}
    </>
  );
};

export const SocialLinks = ({ height, width, dark }) => {
  return (
    <SocialLinksContainer dark={dark}>
      <MakeStyledIcons 
        icons={[GitHubIcon, LinkedInIcon, EmailIcon]} 
        height={height} 
        width={width} 
        dark={dark} 
      />
    </SocialLinksContainer>
  );
};
