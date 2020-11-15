import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name of the game', () => {
  render(<App />);
  const title = screen.getByText('Quizzerly');
  expect(title).toBeInTheDocument();
});

test('has a play button', () => {
  render(<App />);
  const playButton = screen.getByText('Click to Play!');
  expect(playButton).toBeInTheDocument();
});
