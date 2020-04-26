import React, { useState, useEffect } from 'react';
import Display from './Display';
import Controls from './Controls';
import Form from './Form';
import unsplash from '../api/unsplash.js';

function App() {
  const [currentImage, setImage] = useState([])
  const [milliseconds, setMilliseconds] = useState(5000)
  const [value, setValue] = useState("1")
  const [timer, setTimer] = useState(null)

  async function getPhoto() {
    const response = await unsplash.get('/photos/random')
    setImage([response.data])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const ms = Number(value)*1000
    console.log(ms)
    setMilliseconds(ms)
  }

  const setSlideshowTimer = (event) => {
    event.preventDefault();
    setValue(event.target.value)
  }

// I need an interval running. when a user clicks on the start button, the interval
// starts and it gets a new photo ever 'time' seconds
// when a user clicks on the stop button, the interval needs to be cleared

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
      />
    </div>
  );
}

export default App;
