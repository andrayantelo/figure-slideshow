import React, { useState, useEffect } from 'react';
import Display from './Display';
import Controls from './Controls';
import Form from './Form';
import unsplash from '../api/unsplash.js';

function App() {
  const [currentImage, setImage] = useState([])
  const [time, setTime] = useState(5000)
  const [value, setValue] = useState("1")
  const [running, setRunning] = useState(false)
  const [interval, setInterval] = useState(null)

  async function getPhoto() {
    const response = await unsplash.get('/photos/random')
    setImage([response.data])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handling submit');
    setTime(value)
  }

  const setSlideshowTimer = (event) => {
    console.log('changing value')
    event.preventDefault();
    // convert seconds to milliseconds
    const ms = Number(event.target.value)*1000
    console.log(ms)
    setTime(ms)
  }

  const startSlideshow = () => {
    if (!running) {
      setRunning(true)
      console.log("starting slideshow with time: ", time);
      setInterval(() => {
        console.log('getting photo')
        getPhoto()
      }, time)
    }
  }

  const stopSlideshow = () => {

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
      />
      <Controls
          start={startSlideshow}
      />
    </div>
  );
}

export default App;
