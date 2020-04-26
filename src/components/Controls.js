import React from 'react';

function Controls(props) {
    return (
        <div className="controlsContainer">
            <div className="iconList">
                <i
                    className="play icon"
                    onClick={props.getPhoto}
                >

                </i>
                <i className="pause icon"></i>
                <i className="stop icon"></i>
            </div>
        </div>
    )
}

export default Controls