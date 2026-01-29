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
  white-space: nowrap;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  background: linear-gradient(135deg, #e8e8e8 0%, #d4d4d4 50%, #c0c0c0 100%);
  color: #333;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: default;

  &:hover {
    background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 50%, #d0d0d0 100%);
    color: #222;
  }

  &:active {
    opacity: 0.8;
  }
`;

const ItemButton = ({ title }) => {
  return <StyledButton title={title}>{title}</StyledButton>;
};

export default ItemButton;
