import { render, screen } from '@testing-library/react';
import { Hero } from './Hero.tsx';

describe('Hero', () => {
  test('Hero element', () => {
    render(<Hero />);

    const textElement = screen.getByText(/this text does not exist/i);

    expect(textElement).toBeInTheDocument();
  });
});
