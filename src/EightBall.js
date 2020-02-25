import React, { useState } from 'react'
import answers from './answersDefault'
import ResetBtn from './ResetBtn'
import './EightBall.css'

function EightBall(props) {
  let [text, setText] = useState("Think of a Question")
  let [color, setColor] = useState('black')
  let [greenCount, setGreenCount] = useState(0)
  let [goldenCount, setGoldenCount] = useState(0)
  let [redCount, setRedCount] = useState(0)

  let randomIndex = Math.floor(Math.random() * props.answers.length)
  let randomAnswer = props.answers[randomIndex].msg
  let randomColor = props.answers[randomIndex].color
  // destructure

  let bcolor = { "background": color }

  function handleClick() {
    if(randomColor === 'green') setGreenCount(greenCount+1)
    if(randomColor === 'goldenrod') setGoldenCount(goldenCount+1)
    if(randomColor === 'red') setRedCount(redCount+1)
    // switch
    setText(randomAnswer)
    setColor(randomColor)
  }

  return (
    <div className="container">
      <h3> Green: {greenCount} </h3>
      <h3> Golden-Rod: {goldenCount} </h3>
      <h3> Red: {redCount} </h3>
      <div className="EightBall" style={bcolor} onClick={handleClick}>
        <p className="EightBall-text"> {text} </p>
      </div>
      <ResetBtn setText={setText} 
                setColor={setColor} 
                setGreenCount={setGreenCount} 
                setRedCount={setRedCount} 
                setGoldenCount={setGoldenCount} />
    </div>
  )
}

EightBall.defaultProps = { answers }


export default EightBall;