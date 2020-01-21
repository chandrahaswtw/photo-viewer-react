import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
    return (
    <button onClick={props.onClickHandler} className={classes.buttonStyles}>{props.children}</button>
    )
}

export default Button;