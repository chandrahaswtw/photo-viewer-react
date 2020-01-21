import React from 'react';
import classes from './NavBar.module.scss';

const NavBar = (props) => {
    return (
        <header className={classes.NavBar}>
            <p>ALBUM PHOTO VIEWER</p>
        </header>
    )
}

export default NavBar;