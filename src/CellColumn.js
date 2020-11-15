import Column from 'react-bootstrap/Col';
import Cell from './Cell'

export default function CellColumn(props) {
  const points = ['100', '200', '300', '400', '500']

  return (
    <Column className='cell-column'>
      <Cell name={props.category} />
      { points.map( (point) => <Cell name={point} /> ) }
    </Column>
  )
};
