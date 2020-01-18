import React, { useState } from 'react';
import classes from './Albums.module.scss';
import Wrap from './../../../Utils/UI/Wrap/Wrap'
import { withRouter, Link } from 'react-router-dom';


const Albums = (props) => {
    const contentGenerator = () => {
        var theContent = []
        if (props.albumState.data) {
           
            theContent = props.albumState.data[0].data.map((el, index) => {
                var userName = "";
              
                for(let i of props.albumState.data[1].data)
                {
                    if(el.userId === i.id)
                    {
                     userName = i.name;
                     break;
                    }
                    
                }

                return (
                    <div className={classes.albumStyles} key={index} onClick={()=>{props.history.push(`/Albums/Photos/${el.id}`)}}>
                        <section className={classes.section1}>
                            <Wrap type="blue">USERNAME : {userName}</Wrap>
                        </section>
                        <section className={classes.section2}>
                            <Wrap type="white">ALBUM TITLE</Wrap> <br />
                            <span style={{ textAlign: "center" }}>{el.title}</span>
                        </section>
                    </div>
                )
            })
        }
        else
            theContent.push(<div><br /><br /><br /><Wrap type="red">NO RECORDS TO DISPLAY</Wrap></div>)
        return theContent;
    }
    return (
        <div className={classes.wrapper}>
            {contentGenerator()}
        </div>
    )
}

export default withRouter(Albums);