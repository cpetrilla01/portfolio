import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

describe('Header', () => {
  it('renders heading and navigation', () => {
    render(<Header />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    // should be two navigation items (desktop and mobile)
    expect(screen.getAllByRole('navigation')).toHaveLength(2);
  });

  it('opens drawer when menu button is clicked', async () => {
    const user = userEvent.setup();

    render(<Header />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    await user.click(screen.getByLabelText(/Open drawer/i));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes drawer when close button is clicked', async () => {
    const user = userEvent.setup();

    render(<Header />);

    await user.click(screen.getByLabelText(/Open drawer/i));
    await user.click(screen.getByLabelText(/Close drawer/i));

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('closes drawer when link is clicked', async () => {
    const user = userEvent.setup();

    render(<Header />);

    await user.click(screen.getByLabelText(/Open drawer/i));
    await user.click(screen.getAllByText('Home')[1]);

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('renders a scroll-to-top FAB', () => {
    render(<Header />);

    expect(screen.getByTestId('back-to-top-anchor')).toBeInTheDocument();
    expect(screen.getByLabelText(/scroll back to top/i)).toBeInTheDocument();
  });
});
