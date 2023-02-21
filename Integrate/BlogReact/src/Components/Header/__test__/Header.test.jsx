import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../index';

describe('Header', () => {
  it('should render the website heading and links', () => {
    render(<Header />);

    expect(screen.getByText('The Artifact')).toBeInTheDocument();
    expect(screen.getByText('Culture and Art blog')).toBeInTheDocument();

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(3);

    expect(links[0]).toHaveAttribute('href', 'https://www.google.com/');
    expect(screen.getByText('Blog')).toBeInTheDocument();

    expect(links[1]).toHaveAttribute('href', 'https://www.google.com/');
    expect(screen.getByText('About')).toBeInTheDocument();

    expect(links[2]).toHaveAttribute('href', 'https://www.google.com/');
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
