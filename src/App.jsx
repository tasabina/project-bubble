import { useState, useEffect } from 'react'
import './App.css'

import Loader from './compponents/GameComponents/UIComponents/Loader'
import { Scene } from './compponents/GameComponents/Scene'

function App() {
  const [isLoaded, setIsLoaded] = useState(true)

    useEffect(() => {
      const interval = setTimeout(() => {
        setIsLoaded(false)
    }, 3000);
  }, []);

  return (
    <>
      <Loader status={ isLoaded }/>
      <Scene isLoaded={ isLoaded }/>
    </>
  )
}

export default App
