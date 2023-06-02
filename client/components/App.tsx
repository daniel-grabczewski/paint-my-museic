import { useState } from 'react'
import Canvas from './Canvas'
import ColorPicker from './ColorPicker'

function App() {
  function selectColor(newSong: string) {
    setCurrentSong(newSong)
  }

  const [currentSong, setCurrentSong] = useState('none')

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
