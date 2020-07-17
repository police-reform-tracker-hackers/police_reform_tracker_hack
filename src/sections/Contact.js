import React from 'react';
import './Contact.css';
import {Typography, Link} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


export default function Contact(props) {
    return (
        <div>
            <Typography className="section-title section-title-contact" variant="h3">Contact us</Typography>
            <MailOutlineIcon className="mail-icon"/>
            <Link className="mail-link" href="mailto:info@policereformtracker.com">info@policereformtracker.com</Link>
        </div>
    )
}
