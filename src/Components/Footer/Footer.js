import React from 'react';
import classes from './Footer.module.scss';
import Underline from './../../Utils/UI/Underline/Underline';

const Footer = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.internalWrapper}>
                <p className={classes.footerStyles}> &copy; DESIGNED AND DEVELOPED BY <span className={classes.footerStyles} style={{color: "black"}}>CHANDRAHAS BALLEDA</span></p>
                <p className={classes.footerStyles}> BEST VIEWED ON CHROME, MOZILLA & BRAVE</p>
            </div>
        </div>
    )
}

export default Footer;