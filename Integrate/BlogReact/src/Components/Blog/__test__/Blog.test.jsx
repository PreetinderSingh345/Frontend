import React from 'react';
import {render, screen} from '@testing-library/react';
import Blog from '../index';

describe('Blog', () => {
  const props = {
    imgName: 'abstract.png',
    date: 'May 28, 2020',
    time: '2 mins',
    title: 'Sample title',
    description: 'Sample description',
    initialClapCount: 10
  };

  it('should render the blog component with the props', () => {
    render(< Blog {... props}/>);
    expect(screen.getByTestId('blog')).toBeInTheDocument();
  });

  it('should validate the prop types', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');

    consoleErrorSpy.mockImplementation(() => {});

    const invalidProps = {...props, initialClapCount: 'abc'};

    render(<Blog {...invalidProps} />);

    expect(consoleErrorSpy).toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });
});