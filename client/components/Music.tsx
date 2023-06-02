import React, { useEffect } from 'react'
import data from '../data/data'

async function playSound() {
  const sound = new Audio(data[0].music)
  await new Promise((resolve) => {
    sound.addEventListener('loadeddata', resolve)
  })
  sound.play()

  useEffect(() => {
    playSound()
  }, [])
}
