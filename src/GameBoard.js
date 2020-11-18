import React, { useState } from 'react';
import Question from './Question';
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
  const [questionState, updateQuestionState] = useState(false)
  // the cell turns it to true
  // the modal turns it back to false

  const categories = [animals, compsci, geography, mythology, vehicles]

  return (
    <Container className="game-board">
      {
        !questionState &&
        <Row>
          { categories.map( (category) => {
              return <CellColumn 
                category={category[0]['category']}  
                questions={category} 
                broadcast={updateQuestionState} />
            })
          }
        </Row>
      }
      {
        questionState &&
        <Question question={questionState.question} />
      }
    </Container>
  )
};


