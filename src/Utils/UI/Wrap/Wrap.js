import React from 'react';
import classes from './Wrap.module.scss';

const Wrap = (props) => {
    const warpClasses = [classes.wrapStyles];

    switch (props.type) {
        case "green":
            warpClasses.push(classes.green);
            break;
        case "blue":
            warpClasses.push(classes.blue);
            break;
        case "yellow":
            warpClasses.push(classes.yellow);
            break;
        case "white":
            warpClasses.push(classes.white);
            break;
        case "red":
            warpClasses.push(classes.red);
            break;
        case "transparent":
            warpClasses.push(classes.transparent);
            break;

        default:
            break;
    }

    return (
        <span className={warpClasses.join(" ")}>{props.children}</span>
    )
}

export default Wrap;