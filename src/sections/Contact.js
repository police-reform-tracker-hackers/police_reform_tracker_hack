import React from 'react';
// import './Contact.css';
import {Typography, Link} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import styled from 'styled-components';
import colors from '../assets/variables';


const StyledDiv = styled.div`
  align-items: center;
  padding: 0.5em;
  display: flex;
  justify-content: center;
`;

const StyledIcon = styled(MailOutlineIcon)`
  margin: 0.5em;
`;

const StyledLink = styled.a`
  color: ${colors.purple100};
`;


export default function Contact(props) {
    return (
        <div>
            <Typography className="section-title section-title-contact" variant="h3">Contact us</Typography>
            <StyledLink className="mail-link" href="mailto:info@policereformtracker.com">
              <StyledDiv>
                <StyledIcon className="mail-icon"/>
                info@policereformtracker.com
              </StyledDiv>
            </StyledLink>
        </div>
    )
}
