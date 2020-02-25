import React from 'react';
import './ResetBtn.css';

function ResetBtn(props) {

  let { setText,
    setStartColor,
    setGreenCount,
    setRedCount,
    setGoldenCount } = props;

  function reset() {
    setText("Think of a Question");
    setStartColor("black");
    setGreenCount(0);
    setGoldenCount(0);
    setRedCount(0);
  }

  return (
    <button className="ResetBtn" onClick={reset}>Reset</button>
  );
}

export default ResetBtn;