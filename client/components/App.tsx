import { useState } from 'react'
import Canvas from './Canvas'
import ColorPicker from './ColorPicker'
import data from '../data/data'
import '../public/main.css'

function App() {
  const [currentColor, setCurrentColor] = useState('') // Initialize with 'none'
  const [currentMusic, setCurrentMusic] = useState('') // Initialize with ''
  const [background, setBackground] = useState('client/public/images/idea.jpg')

  const selectColor = (color: string) => {
    setCurrentColor(color)
    const selectedData = data.find((item) => item.color === color)
    setCurrentMusic(selectedData ? selectedData.music : '')
  }

  // function changeImage(color: string) {}

  const clearCanvas = () => {
    setCurrentColor('white')
    setCurrentMusic('client/public/music/6_White_Wow.mp3') // Update this path to your "6White_wow" sound file path
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '50px' }}>Paint my Museic</h1>
      <div
        style={{
          backgroundImage: `url(client/public/images/${currentColor}.jpg)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          display: 'flex',
          gap: '50px',
          justifyContent: 'center',
          paddingTop: '50px',
        }}
      >
        <Canvas currentColor={currentColor} currentMusic={currentMusic} />
        <ColorPicker selectColor={selectColor} />
        {/* <button onClick={clearCanvas}>Clear All</button> */}
      </div>
    </>
  )
}

export default App
