import React from 'react';
import './NavBar.css';
import NavItem from './NavItem.js';
import {Link, animateScroll as scroll} from 'react-scroll';
import {AppBar, Toolbar, Button} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';


export default class NavBar extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return <AppBar
        position="sticky"
        className="navbar"
        style={{ background: 'rgba(0, 0, 0, 0.2)', boxShadow: 'none'}}
        >
            <Toolbar>
                {/*<IconButton
                    edge="start"
                    color="black"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>*/}
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
            </Toolbar>
        </AppBar>
    }
}
