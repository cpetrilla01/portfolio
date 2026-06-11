import { render, screen } from '@testing-library/react';

// Mock the skill data imports
vi.mock(import('./primarySkills.tsx'), () => ({
  primarySkills: [
    {
      icon: <span data-testid='primary-icon-1' />,
      title: 'TypeScript',
      description: 'JS with type safety',
    },
    {
      icon: <span data-testid='primary-icon-2' />,
      title: 'HTML',
      description: 'Markup language',
    },
  ],
}));

vi.mock(import('./secondarySkills.tsx'), () => ({
  secondarySkills: [
    {
      icon: <span data-testid='secondary-icon-1' />,
      title: 'Secondary 1',
    },
    {
      icon: <span data-testid='secondary-icon-2' />,
      title: 'Secondary 2',
    },
  ],
}));

import { Skills } from './Skills';

describe('Skills', () => {
  it('renders the Skills section', () => {
    render(<Skills />);

    const headingElement = screen.getByRole('heading', { level: 2 });

    expect(headingElement).toHaveTextContent(/Skills/i);
  });

  it('renders all primary skills with icon, title, and description', () => {
    render(<Skills />);

    expect(screen.getByTestId('primary-icon-1')).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument();
    expect(screen.getByText(/JS with type safety/i)).toBeInTheDocument();
    expect(screen.getByTestId('primary-icon-2')).toBeInTheDocument();
    expect(screen.getByText(/HTML/i)).toBeInTheDocument();
    expect(screen.getByText(/Markup language/i)).toBeInTheDocument();
  });

  it('renders all secondary skills as chips', () => {
    render(<Skills />);

    expect(screen.getByText(/Secondary 1/i)).toBeInTheDocument();
    expect(screen.getByTestId('secondary-icon-1')).toBeInTheDocument();
    expect(screen.getByText(/Secondary 2/i)).toBeInTheDocument();
    expect(screen.getByTestId('secondary-icon-2')).toBeInTheDocument();
  });
});
