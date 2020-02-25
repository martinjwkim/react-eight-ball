import React, { useState } from 'react';
import answers from './answersDefault';
import ResetBtn from './ResetBtn';
import './EightBall.css';

function EightBall(props) {
  let [text, setText] = useState("Think of a Question");
  let [startColor, setStartColor] = useState('black');
  let [greenCount, setGreenCount] = useState(0);
  let [goldenCount, setGoldenCount] = useState(0);
  let [redCount, setRedCount] = useState(0);

  let randomIndex = Math.floor(Math.random() * props.answers.length);
  let { msg, color } = props.answers[randomIndex];

  let bColor = { "background": startColor };

  function handleClick() {
    if (color === 'green') setGreenCount(greenCount + 1);
    if (color === 'goldenrod') setGoldenCount(goldenCount + 1);
    if (color === 'red') setRedCount(redCount + 1);
    // switch
    setText(msg);
    setStartColor(color);
  }

  return (
    <div className="container">
      <h3> Green: {greenCount} </h3>
      <h3> Golden-Rod: {goldenCount} </h3>
      <h3> Red: {redCount} </h3>
      <div className="EightBall" style={bColor} onClick={handleClick}>
        <p className="EightBall-text"> {text} </p>
      </div>
      <ResetBtn setText={setText}
        setStartColor={setStartColor}
        setGreenCount={setGreenCount}
        setRedCount={setRedCount}
        setGoldenCount={setGoldenCount} />
    </div>
  )
}

EightBall.defaultProps = { answers };


export default EightBall;