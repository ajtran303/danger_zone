import React, {useState} from "react";

import Question from "./Question";

import "./Cell.css"

export default function Cell(props) {
    let [open, setOpen] = useState({
        opened: false
    });

    function handleOpen(event){
        event.preventDefault();
        setOpen({
            opened: true
        })
    }

  // onClick, this component needs to:
  // 1. hide the current contents of the gameboard
  // 2. pass its question prop to a new component

  return (
    <section className="cell" onClick={handleOpen}>
      {props.name}
      { open.opened && <Question question={ props.question}/> }
    </section>
  )
};
// Add a questions component
/*
What to spike
-> rendering a new questions component
-> Change the state in the of the
 */