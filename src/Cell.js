import React, { useState } from 'react';
import Question from './Question';
import "./Cell.css"

export default function Cell({ name, question, answer }) {
  const [active, setActive] = useState(false)

  const handleChange = (event) => {
      event.preventDefault();
      setActive(true);
      // tell the Gameboard question, answer
      // can we call Gameboard.setQuestionActive()
    }

  return (
    <div>
      { 
        !active && 
        <section className="cell" onClick={handleChange}>{name}</section>
      }
      { 
        active && 
        <section className="clicked-cell"></section>
      }
    </div>
  )
};
