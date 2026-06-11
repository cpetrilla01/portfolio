import { render, screen } from '@testing-library/react';
import { SectionContainer } from './SectionContainer';

describe('SectionContainer', () => {
  it('renders children', () => {
    const testContent = 'test content';

    render(<SectionContainer>{testContent}</SectionContainer>);

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
