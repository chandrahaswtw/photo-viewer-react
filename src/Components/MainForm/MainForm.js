import React, { useEffect } from 'react';
import classes from './MainForm.module.scss';
import useFetch from './../../Utils/Hooks/useFetch';
import Albums from './Albums/Albums';
import Photos from './Photos/Photos';
import Button from './../../UI/Button/Button';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loader from './../../UI/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

const MainForm = (props) => {

    // USEFETCH HOOK
    const [albumState, albumCall] = useFetch();

    // FETCH BUTTON CLICK HANDLER
    const btnOnClickHandler = () => {
        albumCall(["https://jsonplaceholder.typicode.com/albums", "https://jsonplaceholder.typicode.com/users"]);
    }

    // TOAST ON DATA FETCH 
    useEffect(() => {

        if (albumState.data) {
            toast.configure({
                autoClose: 1200,
                draggable: true
            });

            toast.success("RECORDS FETCHED !!", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }, [albumState])

    return (
        <div>
            {albumState.loading ? <Loader></Loader> : null}
            <div className={classes.gridContainer}>
                <div className={classes.MainForm}>
                    <Switch>
                        <Route path={props.match.url} exact render={() => { return (<Button onClickHandler={btnOnClickHandler}>FETCH THE DATA</Button>) }}></Route>
                        <Route path={`${props.match.url}/Photos/:id`} exact render={() => { return (<Button onClickHandler={() => { props.history.push("/Albums") }}>GO BACK &nbsp; <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>  </Button>) }}></Route>
                    </Switch>
                </div>
                <div className={classes.albumPhoto}>
                    <Switch>
                        <Route path={props.match.url} exact render={() => { return (<Albums albumState={albumState}></Albums>) }}></Route>
                        <Route path={`${props.match.url}/Photos/:id`} exact render={() => { return (<Photos></Photos>) }}></Route>
                        <Redirect from={`${props.match.url}/Photos/`} to={props.match.url}></Redirect>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MainForm)