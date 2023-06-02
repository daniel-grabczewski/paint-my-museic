import { useState } from 'react'
import Canvas from './Canvas'
import ColorPicker from './ColorPicker'
import data from '../data/data'
import '../public/main.css'

function App() {
  const [currentColor, setCurrentColor] = useState('white') // Initialize with 'none'
  const [currentMusic, setCurrentMusic] = useState('') // Initialize with ''

  const selectColor = (color: string) => {
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

//currentSong={currentSong}

// async function playSound() {
//   const sound = new Audio(data[0].music)
//   await new Promise((resolve) => {
//     sound.addEventListener('loadeddata', resolve)
//   })
//   sound.play()
// }

// useEffect(() => {
//   playSound()
// }, [])
