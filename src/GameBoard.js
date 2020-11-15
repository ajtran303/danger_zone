import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CellColumn from "./CellColumn";
import "./GameBoard.css";

export default function GameBoard() {
  const categories = ['1', '2', '3', '4', '5', '6']

  return (
    <Container className="game-board">
      <Row>
      { categories.map( (c) => <CellColumn category={`Category ${c}`}/> ) }
      </Row>
    </Container>
  )
};
