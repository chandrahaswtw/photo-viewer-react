import React from 'react';
import classes from './Loader.module.scss';
import Loader from 'react-loader-spinner';

const CustomLoader = (props) => {
    return (
        <div className={classes.loaderDiv}>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </div>)
}

export default CustomLoader;
