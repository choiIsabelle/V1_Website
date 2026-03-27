import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 10px;
  padding: 6px 12px;
  border: none;
  font-weight: 600;
  font-size: clamp(0.7rem, 1.5vw, 0.9rem);
  line-height: 1.2;
  outline: 0;
  white-space: normal;
  max-width: min(150px, 100%);
  overflow: hidden;
  text-overflow: ellipsis;
  background: var(--color-tag-bg);
  color: var(--color-tag-text);
  box-shadow: var(--color-tag-shadow);
  cursor: default;

  &:hover {
    background: var(--color-tag-bg-hover);
    color: var(--color-tag-text-hover);
  }

  &:active {
    opacity: 0.8;
  }
`;

const ItemButton = ({ title }) => {
  return <StyledButton title={title}>{title}</StyledButton>;
};

export default ItemButton;
