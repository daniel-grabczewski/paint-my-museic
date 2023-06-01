function ColorPicker() {
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
      <div
        style={{ background: '#A71814', height: '70px', width: '70px' }}
      ></div>
      <div style={{ background: 'blue', height: '70px', width: '70px' }}></div>
      <div style={{ background: 'green', height: '70px', width: '70px' }}></div>
      <div style={{ background: 'pink', height: '70px', width: '70px' }}></div>
      <div style={{ background: 'black', height: '70px', width: '70px' }}></div>
      <div
        style={{ background: 'purple', height: '70px', width: '70px' }}
      ></div>
      <div
        style={{
          background: 'white',
          height: '70px',
          width: '70px',
          border: '2px solid black',
        }}
      ></div>
    </div>
  )
}

export default ColorPicker
