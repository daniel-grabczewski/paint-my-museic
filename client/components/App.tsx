import { useState } from 'react'
import Canvas from './Canvas'
import ColorPicker from './ColorPicker'
import data from '../data/data'
import '../public/main.css'

function App() {
  const [currentColor, setCurrentColor] = useState(data[0].color) // Initialize with 'none'
  const [currentMusic, setCurrentMusic] = useState(data[0].music) // Initialize with ''

  const selectColor = (color) => {
    setCurrentColor(color)
    const selectedData = data.find((item) => item.color === color)
    setCurrentMusic(selectedData ? selectedData.music : '')
  }

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
        <Canvas currentColor={currentColor} currentMusic={currentMusic} />
        <ColorPicker selectColor={selectColor} />
      </div>
    </>
  )
}

export default App
