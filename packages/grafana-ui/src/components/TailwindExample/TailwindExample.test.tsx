import { render, screen } from '@testing-library/react';

import { TailwindExample } from './TailwindExample';

describe('TailwindExample', () => {
  it('renders correctly', () => {
    render(<TailwindExample />);
    expect(screen.getByText('Tailwind CSS Integration Example')).toBeInTheDocument();
  });

  it('renders all example sections', () => {
    render(<TailwindExample />);
    expect(screen.getByText('Pure Tailwind Card')).toBeInTheDocument();
    expect(screen.getByText('Mixed Approach')).toBeInTheDocument();
    expect(screen.getByText('Pure Emotion Card')).toBeInTheDocument();
    expect(screen.getByText('Tailwind Form Example')).toBeInTheDocument();
  });

  it('renders buttons with correct text', () => {
    render(<TailwindExample />);
    expect(screen.getByText('Tailwind Button')).toBeInTheDocument();
    expect(screen.getByText('Mixed Button')).toBeInTheDocument();
    expect(screen.getByText('Emotion Button')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('renders input with placeholder', () => {
    render(<TailwindExample />);
    expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
  });

  it('applies Tailwind classes correctly', () => {
    const { container } = render(<TailwindExample />);
    const cards = container.querySelectorAll('.grafana-card');
    expect(cards.length).toBeGreaterThan(0);
  });
});
