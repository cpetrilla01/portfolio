import { render, screen } from '@testing-library/react';
import { Hero } from './Hero.tsx';

describe('Hero', () => {
  test('renders heading element', () => {
    render(<Hero />);

    const headingElement = screen.getByRole('heading', { level: 2 });

    expect(headingElement).toHaveTextContent(/Hi, I'm Chris!/);
  });

  test('shows accessible links', () => {
    render(<Hero />);

    const linkLinkedIn = screen.getByLabelText(
      'Visit my LinkedIn profile (opens in a new window)',
    );
    const linkGithub = screen.getByLabelText(
      'Visit my GitHub profile (opens in a new window)',
    );

    expect(linkLinkedIn).toBeInTheDocument();
    expect(linkGithub).toBeInTheDocument();
  });
});
