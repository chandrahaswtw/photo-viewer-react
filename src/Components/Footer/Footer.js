import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.wrapper}>
            <div className={classes.internalWrapper}>
                <span className={classes.internalSpan}>
                    <p className={classes.footerStyles}> &copy; DESIGNED AND DEVELOPED BY <span className={classes.footerStyles} style={{ color: "black" }}>CHANDRAHAS BALLEDA</span></p>
                    <p className={classes.footerStyles}> BEST VIEWED ON CHROME, MOZILLA & BRAVE</p>
                </span>
            </div>
        </footer>
    )
}

export default Footer;