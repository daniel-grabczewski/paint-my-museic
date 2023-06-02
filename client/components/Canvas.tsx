import React, { useState } from 'react'

function Canvas() {
  // Initialize an array of 'white' with 8750 length.
  const [colors, setColors] = useState(new Array(8750).fill('white'))
  const [isMouseDown, setIsMouseDown] = useState(false)

  const handleMouseDown = (index) => {
    setIsMouseDown(true)
    setColors(colors.map((color, i) => (i === index ? 'black' : color)))
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseOver = (index) => {
    if (isMouseDown) {
      setColors(colors.map((color, i) => (i === index ? 'black' : color)))
    }
  }

  return (
    <div
      onMouseUp={handleMouseUp}
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
            // boxSizing: 'border-box',
            // border: '1px solid black',
            width: '10px',
            height: '10px',
            background: color,
            padding: '0px',
            margin: '0px',
          }}
        ></div>
      ))}
    </div>
  )
}

export default Canvas
