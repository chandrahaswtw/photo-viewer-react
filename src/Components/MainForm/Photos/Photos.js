import React, { useState, useEffect } from 'react';
import classes from './Photos.module.scss';
import useFetch from './../../../Utils/Hooks/useFetch';
import Wrap from './../../../Utils/UI/Wrap/Wrap';
import { withRouter } from 'react-router-dom';
import Button from './../../../Utils/UI/Button/Button';
import Loader from './../../../Utils/UI/Loader/Loader';
import Modal from './../../../Utils/UI/Modal/Modal';

const Photos = (props) => {

    const [photoState, photoCall] = useFetch();

    const [modalState, setModalState] = useState("HIDE");
    const [url, setUrl] = useState("");

    const onClickHandler = (theURL) => {
        setModalState("SHOW");
        setUrl(theURL);
    }

    const modalCloseHandler = () => {
        setModalState("HIDE");
        setUrl("");
    }

    useEffect(() => {
        photoCall(["https://jsonplaceholder.typicode.com/photos"]);
    }, [photoCall])

    const photoDomGenerator = () => {
        var theContent = [];
        if (photoState.data) {
            theContent = photoState.data[0].data.map((el, index) => {
                if (el.albumId == props.match.params.id) {
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
    }

    return (
        <div className={classes.wrapper}>
            {photoState.loading ? <Loader></Loader> : null}
            <Modal modalState={modalState} url={url} modalCloseHandler={modalCloseHandler}></Modal>
            <div style={{ textAlign: "center" }}><Wrap type="yellow">PHOTOS FOR ALBUM ID : {props.match.params.id}</Wrap></div>
            <hr className={classes.underline} />
            <div className={classes.imageArray}>
                {photoDomGenerator()}
            </div>
        </div>
    )
}

export default withRouter(Photos);