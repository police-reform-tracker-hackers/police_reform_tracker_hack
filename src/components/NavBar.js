import React from 'react';
import './NavBar.css';
import NavItem from './NavItem.js';
import {Link, animateScroll as scroll} from 'react-scroll';
import {AppBar, Toolbar, Button} from '@material-ui/core';
import ResponsiveMenu from 'react-responsive-navbar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


export default class NavBar extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {

        return (
            <div className="sticky">
            <ResponsiveMenu
                menuOpenButton={<MenuIcon/>}
                menuCloseButton={<CloseIcon/>}
                changeMenuOn="600px"
                largeMenuClassName="navbar-lg"
                smallMenuClassName="navbar-sm"
                menu={
                    <ul>
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
                }
            />
            </div>
        )
    }
}
