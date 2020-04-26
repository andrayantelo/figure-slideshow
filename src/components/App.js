import React, { useState, useEffect } from 'react';
import Display from './Display';
import Controls from './Controls';
import unsplash from '../api/unsplash.js';

function App() {
  const [currentImage, setImage] = useState([])
  const [time, setTime] = useState(5000)

  async function getPhoto() {
    const response = await unsplash.get('/photos/random')
    setImage([response.data])
  }

  const setSlideshowTimer = (ms) => {
    setTime(ms)
  }

  const startSlideShow = () => {
    
  }

  return (
    <div className="ui container">
      <Display
          currentImage={currentImage}
          getPhoto={getPhoto}
      />
      <Controls
          getPhoto={getPhoto}
      />
    </div>
  );
}

export default App;
