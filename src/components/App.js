import React, { useState, useEffect } from 'react';
import Display from './Display';
import unsplash from '../api/unsplash.js';

function App() {
  const [currentImage, setImage] = useState([])
  const [time, setTime] = useState(5000)

  async function getPhoto() {
    const response = await unsplash.get('/photos/random')
    setImage(response.data)
  }

  /*useEffect(() => {
    setTimeout(() => {
        console.log("getting photo")
        getPhoto()
    }, time)
  }, [getPhoto], time)*/

  return (
    <div className="App">
      <Display currentImage={currentImage} />
    </div>
  );
}

export default App;
