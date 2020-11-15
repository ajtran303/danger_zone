import { render, screen } from '@testing-library/react';
import PlayButton from './PlayButton';

test('renders the play button', () => {
  render(<PlayButton />);
  const playButton = screen.getByText('Click to Play!');
  expect(playButton).toBeInTheDocument();
});
