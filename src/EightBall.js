import React, { useState } from 'react';
import answers from './answersDefault';
// import ResetBtn from './ResetBtn';
import './EightBall.css';

function EightBall(props) {
  const [text, setText] = useState("Think of a Question");
  const [color, setColor] = useState('black');
  const [greenCount, setGreenCount] = useState(0);
  const [goldenCount, setGoldenCount] = useState(0);
  const [redCount, setRedCount] = useState(0);

  const randomIndex = Math.floor(Math.random() * props.answers.length);

  function reset(){
    setText("Think of a Question");
    setColor("black");
    setGreenCount(0);
    setGoldenCount(0);
    setRedCount(0);
  }

  function handleClick() {
    //moving this in here allows us to use the variable color without reassigning it
    const { msg, color } = props.answers[randomIndex]; 
    if (color === 'green') setGreenCount(count => count + 1);
    if (color === 'goldenrod') setGoldenCount(count => count + 1);
    if (color === 'red') setRedCount(count => count + 1);
  
    setText(msg);
    setColor(color);
  }

  return (
    <div className="container">
      <h3> Green: {greenCount} </h3>
      <h3> Golden-Rod: {goldenCount} </h3>
      <h3> Red: {redCount} </h3>
      <div className="EightBall"
        style={{ backgroundColor: color }}
        onClick={handleClick}>
        <p className="EightBall-text"> {text} </p>
      </div>
      <button className="EightBall-reset" onClick={reset}>Reset</button>
    </div>
  )
}

EightBall.defaultProps = { answers };


export default EightBall;