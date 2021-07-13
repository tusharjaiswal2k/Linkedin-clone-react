import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import  FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widgets() {

    const newsArticle = (heading,subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                 <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("60% districts with high positivity in Northeast.","Data tracked by the Union Health Ministry show that of the 58 districts")}
            {newsArticle("Top US commander in Afghanistan steps down as 20-year war end","During the flag-passing ceremony at the Resolute Support headquarters at the heart of Kabul.")}
        </div>
    );
}

export default Widgets;
