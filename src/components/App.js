import React, { useState, useEffect } from 'react';
import Display from './Display';
import Controls from './Controls';
import Form from './Form';
import unsplash from '../api/unsplash.js';

function App() {
  const [currentImage, setImage] = useState([])
  const [time, setTime] = useState(5000)
  const [value, setValue] = useState("1")

  async function getPhoto() {
    const response = await unsplash.get('/photos/random')
    setImage([response.data])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const ms = Number(value)*1000
    console.log(ms)
    setTime(ms)
  }

  const setSlideshowTimer = (event) => {
    event.preventDefault();
    // convert seconds to milliseconds
    setValue(event.target.value)
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
      />
    </div>
  );
}

export default App;
