import React, { useState, useEffect } from 'react'

function Canvas({ currentColor, currentMusic }) {
  const [colors, setColors] = useState(new Array(8750).fill('white'))

  const handleMouseDown = (index: number) => {
    setColors(colors.map((color, i) => (i === index ? currentColor : color)))
  }

  const handleMouseOver = (index: number) => {
    setColors(colors.map((color, i) => (i === index ? currentColor : color)))
  }

  useEffect(() => {
    const audioPlayer = document.getElementById('audioPlayer')
    if (audioPlayer) {
      audioPlayer.play()
    }
  }, [currentMusic])

  return (
    <div
      onMouseUp={() => {}}
      style={{
        minWidth: '1250px',
        minHeight: '700px',
        maxWidth: '1250px',
        maxHeight: '700px',
        background: 'white',
        border: '2px solid black',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0px',
        padding: '0px',
      }}
    >
      {colors.map((color, i) => (
        <div
          key={i}
          onMouseDown={() => handleMouseDown(i)}
          onMouseOver={() => handleMouseOver(i)}
          style={{
            width: '10px',
            height: '10px',
            background: color,
            padding: '0px',
            margin: '0px',
          }}
        ></div>
      ))}
      <audio src={currentMusic} autoPlay id="audioPlayer"></audio>
    </div>
  )
}

export default Canvas
