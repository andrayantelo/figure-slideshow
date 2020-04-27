import React from 'react';

function Controls(props) {
    return (
        <div className="controlsContainer">
            <div className="iconList">
                <i
                    className="play icon"
                    onClick={props.startTimer}
                >

                </i>
                <i className="pause icon"></i>
                <i
                    className="stop icon"
                    onClick={props.stopTimer}
                ></i>
            </div>
        </div>
    )
}

export default Controls