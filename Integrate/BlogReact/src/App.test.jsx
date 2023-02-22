import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import mockBlogs from './mocks/blogs';
import makeRequest from './utils/makeRequest';

jest.mock('./utils/makeRequest');

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('should show the blog posts when the data is loaded', async () => {
    makeRequest.mockResolvedValue(mockBlogs);

    render(<App />);

    await waitFor(() => {
      expect(screen.getAllByTestId('blog')).toHaveLength(2);
    });

    makeRequest.mockRestore();
  });
});
