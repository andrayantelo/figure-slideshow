import React, { useState, useEffect } from 'react';
import Display from './Display';
import Controls from './Controls';
import Form from './Form';
import unsplash from '../api/unsplash.js';

function App() {
  const [currentImage, setImage] = useState([])
  const [milliseconds, setMilliseconds] = useState(1000)
  const [value, setValue] = useState("1")
  const [timer, setTimer] = useState(null)
  const [running, setRunning] = useState(false)

  async function getPhoto() {
    console.log('getting photo')
    /*const response = await unsplash.get('/photos/random')
        .catch(error => console.log(error))
    setImage([response.data])*/
    setImage([{urls: {small: "https://unsplash.com/photos/EjAbk2U3REE"}}])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!running) {
      const ms = Number(value)*1000
      setMilliseconds(ms)
    }
    else {
      // TODO notify user that they can't submit while timer running
      console.log("can't submit while timer running")
    }
  }

  const setSlideshowTimer = (event) => {
    event.preventDefault();
    if (!running) {
      setValue(event.target.value)
    }
  }

// I need an interval running. when a user clicks on the start button, the interval
// starts and it gets a new photo ever 'time' seconds
// when a user clicks on the stop button, the interval needs to be cleared
  const startTimer = () => {
    console.log('getting new photo every ', milliseconds/1000)
    getPhoto()
    setTimer(setInterval(() => getPhoto(), milliseconds))
    setRunning(true)
  }

  const stopTimer = () => {
    console.log("stop slideshow")
    clearInterval(timer)
    setTimer(null)
    setRunning(false)
  }

  return (
    <div className="ui container">
      <Display
          currentImage={currentImage}
          getPhoto={getPhoto}
      />
      <Form
          handleChange={setSlideshowTimer}
          value={value}
          handleSubmit={handleSubmit}
          running={running}
      />
      <Controls
          startTimer={startTimer}
          stopTimer={stopTimer}
      />
    </div>
  );
}

export default App;
