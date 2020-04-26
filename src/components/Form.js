import React from 'react';

function Form(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>
                Pick Pose Time:
                <select value={props.value} onChange={props.handleChange}>
                    <option value="1">1 seconds</option>
                    <option value="2">2 seconds</option>
                    <option value="120">2 minutes</option>
                    <option value="300">5 minutes</option>
                    <option value="600">10 minutes></option>
                    <option value="1200">20 minutes</option>
                    <option value="1800">30 minutes</option>
                </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form;