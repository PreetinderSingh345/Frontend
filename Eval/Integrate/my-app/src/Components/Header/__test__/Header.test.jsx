import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';

describe('Header', () => {
  it('should render the correct heading', () => {
    const { queryByText } = render(<Header />);
    const headingElement = queryByText(
      (content, element) => {
        const hasText = (text) => element.textContent.includes(text);

        return hasText('My') && hasText('Record') && hasText('Shelf');
      },
      { selector: 'header' }
    );

    expect(headingElement).toBeInTheDocument();
  });

  it('should render the span with the correct id', () => {
    const { getByText } = render(<Header />);
    const spanElement = getByText(/Record/i);

    expect(spanElement).toHaveAttribute('id', 'record-heading');
  });
});
