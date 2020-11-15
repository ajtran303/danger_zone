import { Container } from 'react-bootstrap';
import { PlayButton } from './Button';
import './GameBoard.css'
import React from 'react'

export const GameBoard = () => {
  return (
    <section className="game-board">
      <Container/>
      <PlayButton/>
    </section>
  )
};
