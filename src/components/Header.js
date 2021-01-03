import React from 'react';
import styled from 'styled-components';

const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #0E0E12;
`

const StyledNavDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px 25px;
`

const StyledNavButton = styled.link`
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
`

const StyledNavTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: 0.05em;
  color: #FFFFFF;
`

const Header = () => {
  <StyledHeaderContainer>
    <StyledNavTitle>Police Reform Tracker</StyledNavTitle>

  </StyledHeaderContainer>
};

export default Header;