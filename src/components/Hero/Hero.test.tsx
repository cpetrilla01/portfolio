import { render, screen } from '@testing-library/react';
import { Hero } from './Hero.tsx';

describe('Hero component', () => {
  test('renders heading element', () => {
    render(<Hero />);

    const headingElement = screen.getByRole('heading', { level: 2 });

    expect(headingElement).toHaveTextContent(/Hi, I'm Chris!/);
  });
});
