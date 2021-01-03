import React from 'react';
import { Typography } from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import './NavTitle.css';
import styled from 'styled-components';


const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
  flex-shrink: 1;
`

export default function NavTitle(props) {
  return (
      <Typography
        className="nav-title"
        variant="h5"
      >
        {props.title}
      </Typography>
  )
}
