import { render, screen } from '@testing-library/react';
import { Hero } from './Hero.tsx';

describe('Hero', () => {
  test('Hero element', () => {
    render(<Hero />);

    const textElement = screen.getByText(/Hi, I'm Chris!/i);

    expect(textElement).toBeInTheDocument();
  });
});
