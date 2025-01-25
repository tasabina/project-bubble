import { useState } from 'react'
import './App.css'

import Loader from './compponents/GameComponents/UIComponents/Loader'
import GameUI from './compponents/GameComponents/UIComponents/GameUI'
import { Scene } from './compponents/GameComponents/Scene'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Loader status={true}/>
      <Scene/>
    </>
  )
}

export default App
