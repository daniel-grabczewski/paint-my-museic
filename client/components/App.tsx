import { useState } from 'react'
import Canvas from './Canvas'
import ColorPicker from './ColorPicker'
import '../public/main.css'

function App() {
  function selectColor() {}

  const [currentSong, setCurrentSong] = useState()

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Paint my museic</h1>
      <div
        style={{
          background: 'lightGray',
          height: '100vh',
          display: 'flex',
          gap: '50px',
          justifyContent: 'center',
          paddingTop: '50px',
        }}
      >
        <Canvas />
        <ColorPicker />
      </div>
    </>
  )
}

export default App
