import { useState } from 'react'
import './App.css'

import Loader from './compponents/UIComponents/Loader'
import GameUI from './compponents/UIComponents/GameUI'
import { Scene } from './compponents/GameComponents/Scene'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Loader status={true}/>
      <GameUI/>
      <Scene/>
    </>
  )
}

export default App
