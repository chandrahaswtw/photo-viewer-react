import React,{useState} from 'react';
import classes from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

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
            <span className={classes.iconStyles} onClick={()=>{props.modalCloseHandler()}}><FontAwesomeIcon icon={faWindowClose} size="2x"></FontAwesomeIcon></span>
            <img src= {props.url} alt=""/>
        </div>
    )
}

export default Modal;
