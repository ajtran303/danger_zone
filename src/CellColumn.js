import Column from 'react-bootstrap/Col';
import Cell from './Cell'

export default function CellColumn({ category, questions, broadcast }) {
  return (
    <Column className='cell-column'>
      <Cell name={category} />
      { questions.map( (question, index) => {
        return (<Cell 
          name={(index+1)*100} 
          question={question.question} 
          answer={question.correct_answer} 
          broadcast={broadcast}  
          />)
        })
      } 
    </Column>
  ) 
};
