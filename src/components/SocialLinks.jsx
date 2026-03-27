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
  background-color: var(--color-social-bg);
  color: var(--color-social-icon);
  transition: background-color 0.25s ease, color 0.25s ease;
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

const MakeStyledIcons = ({ icons, height = 25, width = 25 }) => {
  return (
    <>
      {icons.map((Icon, index) => (
        <StyledIcon key={index}>
          <Icon width={width} height={height} />
        </StyledIcon>
      ))}
    </>
  );
};

export const SocialLinks = ({ height, width }) => {
  return (
    <SocialLinksContainer>
      <MakeStyledIcons
        icons={[GitHubIcon, LinkedInIcon, EmailIcon]}
        height={height}
        width={width}
      />
    </SocialLinksContainer>
  );
};
