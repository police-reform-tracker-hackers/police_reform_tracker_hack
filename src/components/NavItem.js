import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import {Button} from '@material-ui/core'


export default function NavItem(props) {
    return (
        <Link
            to={props.sectionId}
            smooth={true}
            duration={500}
        >
            <Button>
                {props.sectionName}
            </Button>
        </Link>
    );
}
