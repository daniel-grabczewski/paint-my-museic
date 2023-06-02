import React, { useEffect, useState } from 'react'
import data from '../data/data'

interface Props {
  selectColor: (newSong: string) => void
}
function ColorPicker({ selectColor }) {
  const handleColorClick = (color) => {
    selectColor(color)
  }

function ColorPicker(props: Props) {
  const [colorArr, setColorArr] = useState(data)

  function handleClick(color: string) {
    props.selectColor(color)

    const selected = [...colorArr]

    selected.map((obj) => (obj.isPicked = false))

    const index = selected.findIndex((obj) => obj.color === color)
    selected[index].isPicked = true

    setColorArr(selected)
  }

  return (
    <div
      style={{
        width: '200px',
        height: '700px',
        background: 'lightGrey',
        border: '2px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '25px',
      }}
    >
      {colorArr.map((element) => (
        <div
          key={element.color}
          style={{
            background: element.code,
            height: '70px',
            width: '70px',
            boxShadow: element.isPicked
              ? '10px 5px 5px grey'
              : '0px 0px 0px grey',
          }}
          onClick={() => {
            handleClick(element.color)
          }}
        ></div>
      ))}
    </div>
  )
}

//Map out divs.
//Each div onClick. When it is selected, give it a border
//Pass through the color of the selection through the function

export default ColorPicker
