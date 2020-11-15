import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name of the game', () => {
  render(<App />);
  const linkElement = screen.getByText('Quizzerly');
  expect(linkElement).toBeInTheDocument();
});
