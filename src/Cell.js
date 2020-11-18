import React, { useState } from 'react';
import Question from './Question';
import "./Cell.css"

export default function Cell({ name, question, answer, broadcast }) {
  const [active, setActive] = useState(false)

  const questionState = {
    'question': question,
    'answer': answer,
    'isQuestionAsked': true
  }

  const handleChange = (event) => {
      event.preventDefault();
      setActive(true);
      broadcast(questionState);
      // 
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
