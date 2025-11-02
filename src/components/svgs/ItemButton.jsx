import React from 'react'
import styled from 'styled-components'
import { palette } from '../palette'

const StyledButton = styled.button`
border-radius: 10px;
padding: 4px 10px;
border-color: transparent;
font-weight: 600;
  font-size: 0.9rem; 
line-height: 10px;
outline: 0;
background-color: ${palette.darkGrey}
color: ${palette.grey}

  &:hover {
    background-color: ${palette.darkGrey}; /* Slightly lighter on hover */
    color: ${palette.darkGrey}; 
  }

  &:active {
    opacity: 0.7;
  }
`

const ItemButton = ({title}) => {
  return (
    <StyledButton title={title}>{title}</StyledButton>
  )
}

export default ItemButton