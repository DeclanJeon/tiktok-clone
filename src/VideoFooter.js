import React from "react";
import "./VideoFooter.css";

function VideoFooter() {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h3>@declan</h3>
                <p>this is a description</p>
            </div>
            <img className='videoFooter__record' src='' alt='' />
        </div>
    );
}

export default VideoFooter;
