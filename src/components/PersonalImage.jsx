import styled from "styled-components";
import isabelle_img from "../images/isabelle.jpeg";

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

const StyledImage = styled.img`
  border-radius: 10px;
  height: auto;
  width: 100%; /* Makes the image responsive */
  box-shadow: 0 5px 9px 1px rgba(0, 0, 0, 0.2);
`;

export const PersonalImageOutlineBox = () => {
  return (
    <Wrapper>
      <ImageCard>
        <StyledImage src={isabelle_img} alt="isabelle" />
      </ImageCard>
    </Wrapper>
  );
};
