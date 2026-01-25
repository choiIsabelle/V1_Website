import React from "react";
import styled from "styled-components";
import { palette } from "../palette";

const StyledButton = styled.button`
  border-radius: 10px;
  padding: 6px 12px;
  border-color: transparent;
  font-weight: 600;
  font-size: clamp(0.7rem, 1.5vw, 0.9rem);
  line-height: 1.2;
  outline: 0;
  white-space: nowrap;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${palette.lightGrey};
  color: black;

  &:hover {
    background-color: ${palette.lightGrey};
    color: ${palette.darkGrey};
  }

  &:active {
    opacity: 0.7;
  }
`;

const ItemButton = ({ title }) => {
  return <StyledButton title={title}>{title}</StyledButton>;
};

export default ItemButton;
