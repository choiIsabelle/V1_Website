import styled, {keyframes} from "styled-components";
import isabelle_img from '../images/choi-i25.PNG';

const BoxOutline = styled.div`
  border: 5px solid #da2780;
  width: 80%; /* Adjust width based on screen size */
  max-width: 349px; /* Max width for large screens */
  height: auto;
  aspect-ratio: 1; /* Maintains the aspect ratio */
  border-radius: 10px;
  z-index: -1;
`;

const Wrapper = styled.div`
  width: 100%; /* Full width */
  min-width: 300px;
  max-width: 350px;
`;

const ImageCard = styled.div`
  display: inline-block;
  box-shadow: 5px 8px 8px 5px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: fit-content;
  background-color: #FFFF;
  padding: 0.5rem;
  border-radius: 10px;
  transition: 0.3s;
  &.grow {
    transition: all 0.2s ease-in-out;
    &:hover {
      background-position: left center;
      transform: scale(1.1);
    }
  }
  &:hover {
    background-position: left center;
    transform: scale(1.1);
  }
`;

const twist = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

const StyledImage = styled.img`
  border-radius: 10px;
  height: auto;
  width: 120%;
  display: inline-block;
  transition: transform 0.3s ease-in-out;

  &:hover {
    animation: ${twist} 0.6s ease-in-out;
  }
`;

export const PersonalImageOutlineBox = () => {
  return (
    <Wrapper>
        <StyledImage src={isabelle_img} alt="Isabelle" />
    </Wrapper>
  );
};
