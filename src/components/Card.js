import React from 'react';
import styled from 'styled-components';
import colors from '../assets/variables.js';


const StyledDiv = styled.div`
  background: ${colors.black};
  border-radius: 10px;
  margin: 2em;
`

const Card = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Card;
