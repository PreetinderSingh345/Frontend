import React from 'react';
import { render } from '@testing-library/react';
import Home from '..';

describe('Home', () => {
  it('should show the Header component', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('header')).toBeInTheDocument();
  });

  it('should show the Sync component', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('sync')).toBeInTheDocument();
  });
});
