import React, { useState, useEffect } from 'react'

const App = (props) => {
  const [hue, setHue] = useState(Math.round(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.round(Math.random() * 100))
  const [light, setLight] = useState(Math.round(Math.random() * 100))

  const changeHue = (e) => {
    let hue = e.target.value
    setHue(hue)
  }
  const changeSaturation = (e) => {
    let saturation = e.target.value
    setSaturation(saturation)
  }
  const changeLight = (e) => {
    let light = e.target.value
    setLight(light)
  }
  const randomButton = (e) => {
    setHue(Math.round(Math.random() * 360))
    setSaturation(Math.round(Math.random() * 100))
    setLight(Math.round(Math.random() * 100))
  }
  const newColor = `hsl(${hue}, ${saturation}%, ${light}%)`
  console.log(newColor)

  return (
    <>
      <div className="grid-container">
        <div className="header">Color Picker</div>
        <div>
          <div
            className="color-box"
            style={{ backgroundColor: newColor }}
          ></div>
          <text>Color is currently {newColor}</text>
          <br></br>
          <button onClick={randomButton}>Random Color</button>
        </div>
        <div className="property">H</div>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="360"
            onChange={changeHue}
            value={hue}
            className="slider"
          />
        </div>
        <div className="property">S</div>
        <div className="slidecontainer">
          <input
            type="range"
            min="0"
            max="100"
            onInput={changeSaturation}
            value={saturation}
            className="slider"
          />
        </div>
        <div className="property">L</div>
        <div className="slidecontainer">
          <input
            type="range"
            min="0"
            value="100"
            onInput={changeLight}
            value={light}
            className="slider"
          />
        </div>
      </div>
    </>
  )
}
export default App
