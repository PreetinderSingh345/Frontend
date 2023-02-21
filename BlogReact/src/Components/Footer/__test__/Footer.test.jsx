import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../index';

describe('Footer', () => {
  it('should render the website footer', () => {
    render(<Footer />);

    expect(screen.getByText('@artifact.com 2019')).toBeInTheDocument();
  });
});
