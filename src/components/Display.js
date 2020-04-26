import React from 'react';

function Display(props) {
    if (!props.currentImage.length) {
        return null
    }
    const url = props.currentImage[0].urls.small
    return (
        <div className="ui segment">
            <img src={url} alt="" />
            <div>
                
            </div>
        </div>
    )  
}

export default Display;