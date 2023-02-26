import React from 'react';
import { render, screen } from '@testing-library/react';
import DateTime from '../index';

describe('DateTime', () => {
  it('should render the date and time', () => {
    render(<DateTime date={'May 28, 2020'} time={'2 mins'} />);

    const dateElement = screen.getByText('May 28, 2020');
    const timeElement = screen.getByText('2 mins');

    expect(dateElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
  });

  it('should throw an error when the date prop is missing', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {throw new Error('Missing required prop: date')});

    expect(() => render(<DateTime time={'2 mins'} />)).toThrow('Missing required prop: date');
  });

  it('should throw an error when the time prop is missing', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {throw new Error('Missing required prop: time')});

    expect(() => render(<DateTime date={'May 28, 2020'} />)).toThrow('Missing required prop: time');
  });
});
