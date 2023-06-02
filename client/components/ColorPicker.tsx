import React, { useEffect } from 'react'
import data from '../data/data'

function ColorPicker({ selectColor }) {
  const handleColorClick = (color) => {
    selectColor(color)
  }

  return (
    <div
      style={{
        width: '200px',
        height: '700px',
        background: 'white',
        border: '2px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '25px',
      }}
    >
      {data.map((item, i) => (
        <div
          key={i}
          onClick={() => handleColorClick(item.color)}
          style={{
            background: item.code,
            height: '70px',
            width: '70px',
            border: item.color === 'white' ? '2px solid black' : '',
          }}
        ></div>
      ))}
    </div>
  )
}

export default ColorPicker
