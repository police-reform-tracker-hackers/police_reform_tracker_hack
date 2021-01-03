import React from 'react';
import './NavBar.css';
import NavItem from './NavItem.js';
import NavTitle from './NavTitle.js';
import { Link, animateScroll as scroll } from 'react-scroll';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import ResponsiveMenu from 'react-responsive-navbar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import colors from '../assets/variables.js';
import styled from 'styled-components';


const StyledDiv = styled.div`
  background-color: ${colors.black};
  padding-top: 0;
  margin-top: -1em;
`

export default class NavBar extends React.Component {
  render() {

    return (
      <StyledDiv className="sticky">
        <ResponsiveMenu
          menuOpenButton={<MenuIcon className="icon-lg" />}
          menuCloseButton={<CloseIcon className="icon-lg" />}
          changeMenuOn="600px"
          largeMenuClassName="navbar-lg"
          smallMenuClassName="navbar-sm"
          menu={
            <StyledDiv className="navbar-sm-expanded">
              <NavTitle title="Police Reform Tracker" />
              <ul className="ul-navbar-sm">
                <NavItem
                  sectionId="map"
                  sectionName="Map"
                />
                <NavItem
                  sectionId="data"
                  sectionName="Data"
                />
                <NavItem
                  sectionId="form"
                  sectionName="Submit an update"
                />
                <NavItem
                  sectionId="takeaction"
                  sectionName="Take action"
                />
                <NavItem
                  sectionId="mission"
                  sectionName="Mission"
                />
                <NavItem
                  sectionId="contact"
                  sectionName="Contact"
                />
              </ul>
            </StyledDiv>
          }
        />
      </StyledDiv>
    )
  }
}
