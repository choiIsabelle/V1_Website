import styled from 'styled-components';
import { OpenLinkIcon } from './svgs/OpenLinkIcon';

const StyledOutlineButton = styled.a`
  background: var(--color-card-bg);
  border: 3px solid ${(props) => props.color || 'var(--color-link)'};
  border-radius: 6px;
  box-sizing: border-box;
  color: ${(props) => props.color || 'var(--color-link)'};
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  text-decoration: none;
  transition: transform 0.2s ease-in-out, fill 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: var(--color-link-hover);
    border: 3px solid var(--color-link-hover);
  }

  &:active {
    opacity: 0.5;
  }
`;

const StyledOpenLinkIconContainer = styled.div`
  display: inline-block;
`;

export const OutlineButton = (props) => {
  const { title, color, icon, fileUrl } = props;
  
  return (
    <StyledOutlineButton 
      href={fileUrl} 
      color={color} 
      title={title} 
      download 
    >
      {title}
      {icon && <StyledOpenLinkIconContainer><OpenLinkIcon width={20} height={20} /></StyledOpenLinkIconContainer>}
    </StyledOutlineButton>
  );
};
