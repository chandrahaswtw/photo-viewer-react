import React, { useState, useEffect, useCallback } from 'react';
import classes from './Photos.module.scss';
import useFetch from './../../../Utils/Hooks/useFetch';
import Wrap from './../../../Utils/UI/Wrap/Wrap';
import { withRouter } from 'react-router-dom';
import Button from './../../../Utils/UI/Button/Button';
import Loader from './../../../Utils/UI/Loader/Loader';
import Underline from './../../../Utils/UI/Underline/Underline';
import Modal from './../../../Utils/UI/Modal/Modal';

const Photos = (props) => {

    // PHOTO CALL API
    const [photoState, photoCall] = useFetch();

    // MODAL & URL STATE
    const [modalState, setModalState] = useState("HIDE");
    const [url, setUrl] = useState("");

    // ONCLICK HANDLER FOR VIEW HOVER BUTTON
    const onClickHandler = useCallback((theURL) => {
        setModalState("SHOW");
        setUrl(theURL);
    },[setModalState, setUrl])

    // MODAL CLOSE HANDLER
    const modalCloseHandler = useCallback(() => {
        setModalState("HIDE");
    },[setModalState])

    // ON LOAD CALL
    useEffect(() => {
        photoCall(["https://jsonplaceholder.typicode.com/photos"]);
    }, [photoCall])

    // PHOTOS DOM GENERATOR
    const theData = photoState.data;
    const theID = props.match.params.id;
    console.log(theData);
    const photoDomGenerator = useCallback(() => {
        var theContent = [];
        if (theData) {
            theContent = theData[0].data.map((el, index) => {
                if (el.albumId == theID) {  //COMPARING NUMBER WITH STRING, HENCE == BUT NOT ===
                    return (
                        <div className={classes.imageBox}>
                            <img src={el.thumbnailUrl} alt="NO_IMAGE" />
                            <div className={classes.imageTitle}>
                                <span> {el.title}  </span>
                            </div>
                            <div className={classes.hoverSection}>
                                <Button onClickHandler={()=>{onClickHandler(el.url)}}>VIEW</Button>
                            </div>
                        </div>
                    )
                }
            })
        }
        return theContent;
    },[theData, theID, onClickHandler])

    return (
        <div className={classes.wrapper}>
            {photoState.loading ? <Loader></Loader> : null}
            <Modal modalState={modalState} url={url} modalCloseHandler={modalCloseHandler}></Modal>
            <div style={{ textAlign: "center" }}><Wrap type="yellow">PHOTOS FOR ALBUM ID : {props.match.params.id}</Wrap></div>
            <Underline></Underline>
            <div className={classes.imageArray}>
                {photoDomGenerator()}
            </div>
        </div>
    )
}

export default withRouter(Photos);