import Column from 'react-bootstrap/Col';
import Cell from './Cell'

export default function CellColumn(props) {
  return (
    <Column className='cell-column'>
      <Cell name={props.category} />
      { props.questions.map( (question, index) => <Cell name={(index+1)*100} question={question}/> ) }
    </Column>
  )
};
