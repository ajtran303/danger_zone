import "./Cell.css"

export default function Cell(props) {

  // onClick, this component needs to:
  // 1. hide the current contents of the gameboard
  // 2. pass its question prop to a new component

  return (
    <section className="cell">
      {props.name}
      {/* {props.question} */}
    </section>
  )
};
