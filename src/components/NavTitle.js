import React from 'react';
import {Typography} from '@material-ui/core';
import './NavTitle.css';


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
