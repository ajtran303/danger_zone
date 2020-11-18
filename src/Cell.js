import React, { useState } from 'react';
import Question from './Question';
import "./Cell.css"

export default function Cell({ name, question }) {
  const [active, setActive] = useState(false)

  const handleChange = (event) => {
      event.preventDefault();
      setActive(true);
    }

  return (
    <div>
      { !active && 
        <section className="cell" onClick={handleChange}>{name}</section>
      }
      {
        active && < Question question={question} />
      }
    </div>
  )
};
