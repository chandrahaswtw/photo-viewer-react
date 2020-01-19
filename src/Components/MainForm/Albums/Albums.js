import React, { useCallback } from 'react';
import classes from './Albums.module.scss';
import Wrap from './../../../Utils/UI/Wrap/Wrap'
import { withRouter} from 'react-router-dom';


const Albums = (props) => {

    // ALBUMS DOM GENERATOR
    const theData = props.albumState.data;
    const history = props.history;
    const contentGenerator = useCallback(() => {
        var theContent = []
        if (theData) {
           
            theContent = theData[0].data.map((el, index) => {
                var userName = "";
              
                for(let i of theData[1].data)
                {
                    if(el.userId === i.id)
                    {
                     userName = i.name;
                     break;
                    }
                    
                }

                return (
                    <div className={classes.albumStyles} key={index} onClick={()=>{history.push(`/Albums/Photos/${el.id}`)}}>
                        <section className={classes.section1}>
                            <Wrap>USERNAME : {userName}</Wrap>
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
    },[theData, history])

    return (
        <div className={classes.wrapper}>
            {contentGenerator()}
        </div>
    )
}

export default withRouter(Albums);