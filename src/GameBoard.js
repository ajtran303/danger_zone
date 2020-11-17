import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CellColumn from "./CellColumn";
import "./GameBoard.css";

import animals from './data/animals'
import compsci from './data/compsci'
import geography from './data/geography'
import mythology from './data/mythology'
import vehicles from './data/vehicles'

export default function GameBoard() {
  const categories = [animals, compsci, geography, mythology, vehicles]

  return (
    <Container className="game-board">
      <Row>
      { categories.map( (category) => <CellColumn category={category[0]['category']}  questions={category} /> ) }
      </Row>
    </Container>
  )
};
