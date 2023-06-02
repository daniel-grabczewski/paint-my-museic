import React, { useEffect, useState } from 'react'
import data from '../data/data'

interface Props {
  selectColor: (newSong: string) => void
}


function ColorPicker(props: Props) {


  const [border, setBorder] = useState('0px 0px 0px black' )

  function isPicked(color: string) {
    setBorder('10px 5px 5px black' )
  }

  function handleClick(color: string) {
    props.selectColor(color)
    isPicked(color)
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
      {data.map((element) => (
        <div key={element.color}
          style={{ background: element.code, height: '70px', width: '70px', boxShadow: border }} 
         
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
