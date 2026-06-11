import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { About } from './About';

describe('About', () => {
  it('renders heading element', () => {
    render(<About />);

    const headingElement = screen.getByRole('heading', { level: 2 });

    expect(headingElement).toHaveTextContent(/About/i);
  });

  it('renders the avatar with correct alt text', () => {
    render(<About />);

    const avatarElement = screen.getByRole('img', {
      name: /Me with South Philly/i,
    });

    expect(avatarElement).toBeInTheDocument();
  });

  it('displays the text', () => {
    render(<About />);

    expect(
      screen.getByText(/full-stack engineer living in Philadelphia/i),
    ).toBeInTheDocument();
  });

  it('renders GitHub link with correct href and target', () => {
    render(<About />);

    const githubLink = screen.getByRole('link', { name: /GitHub/i });

    expect(githubLink).toBeInTheDocument();
  });

  it('renders LinkedIn link with correct href and target', () => {
    render(<About />);

    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });

    expect(linkedinLink).toBeInTheDocument();
  });
});
