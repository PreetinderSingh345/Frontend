import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Sync from '..';

describe('Sync', () => {
  it('should render correctly', () => {
    render(<Sync />);

    expect(screen.getByText(':((')).toBeInTheDocument();
    expect(screen.getByText('seems a bit empty in here...')).toBeInTheDocument();
    expect(screen.getByText('sync')).toBeInTheDocument();
  })

  it('should call setSync when sync button is clicked', () => {
    const setSync = jest.fn();

    render(<Sync setSync={setSync} />);

    const syncButton = screen.getByTestId('sync-button');
    
    expect(setSync).not.toHaveBeenCalled();

    fireEvent.click(syncButton);

    expect(setSync).toHaveBeenCalledTimes(1);
    expect(setSync).toHaveBeenCalledWith(true);
  })
});