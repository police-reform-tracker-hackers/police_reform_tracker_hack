import React from 'react';
import './NavBar.css';
import {AppBar, Toolbar, Button} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';


export default class NavBar extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return <AppBar
        position="static"
        style={{ background: 'transparent', boxShadow: 'none'}}
        >
            <Toolbar>
                {/*<IconButton
                    edge="start"
                    color="black"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>*/}
                <Button href="#map">
                    Map
                </Button>
                <Button href="#data">
                    Data
                </Button>
                <Button href="#form">
                    Submit an update
                </Button>
                <Button>
                    Take action
                </Button>
                <Button href="#about">
                    About us
                </Button>
                <Button href="contact">
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    }
}
