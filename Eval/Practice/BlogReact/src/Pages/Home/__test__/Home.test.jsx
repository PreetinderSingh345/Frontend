import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../index';
import mockBlogs from '../../../mocks/blogs';
import makeRequest from '../../../utils/makeRequest';

jest.mock('../../../utils/makeRequest', () => jest.fn());

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Home', () => {
  it('should render correctly', async () => {
    makeRequest.mockResolvedValue(mockBlogs);

    expect(makeRequest).not.toHaveBeenCalled();

    const { asFragment } = render(<Home />);

    await waitFor(() => {
      expect(screen.getByText('mock title 1')).toBeTruthy();
    });

    expect(asFragment).toMatchSnapshot();
    expect(makeRequest).toHaveBeenCalledTimes(1);
  });
});
