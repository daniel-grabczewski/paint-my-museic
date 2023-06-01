function Canvas() {
  const sound = new Audio('../public/music/1_Red_Spiderman.mp3')
  sound.play()
  return (
    <div
      style={{
        width: '1250px',
        height: '700px',
        background: 'white',
        border: '2px solid black',
      }}
    ></div>
  )
}

export default Canvas
