import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Main from '..';

describe('Main', () => {
  it('should initially show the Sync component', () => {
    render(<Main />);

    const syncElement = screen.getByTestId('sync-button');

    expect(syncElement).toBeInTheDocument();
  });

  it('should show the Records component when the sync button is clicked', () => {
    render(<Main />);

    const syncElement = screen.getByTestId('sync-button');

    fireEvent.click(syncElement);

    const recordsElement = screen.getByTestId('records');

    expect(recordsElement).toBeInTheDocument();
  });
});
