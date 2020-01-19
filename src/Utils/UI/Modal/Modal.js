import React,{useState} from 'react';
import classes from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
    
    const modalStyles = [classes.modalStyles];

    if(props.modalState === "SHOW") {
        modalStyles.push(classes.modalOpenStyles);
    }
    else{
        modalStyles.push(classes.modalCloseStyles);
    }

    return (
        <div className={modalStyles.join(" ")}>
            <span className={classes.iconStyles} onClick={()=>{props.modalCloseHandler()}}><FontAwesomeIcon icon={faTimesCircle} size="4x"></FontAwesomeIcon></span>
            <img src= {props.url} alt=""/>
            <div className={classes.whiteBackground} onClick={()=>{props.modalCloseHandler()}}></div>
        </div>
    )
}

export default Modal;
