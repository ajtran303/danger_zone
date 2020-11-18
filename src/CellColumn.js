import Column from 'react-bootstrap/Col';
import Cell from './Cell'

export default function CellColumn({ category, questions }) {
  return (
    <Column className='cell-column'>
      <Cell name={category} />
      { questions.map( (question, index) => <Cell name={(index+1)*100} question={question.question} answer={question.correct_answer}/> ) }
    </Column>
  ) 
};
